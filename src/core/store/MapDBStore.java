package core.store;

import java.util.List;

import org.eclipse.emf.ecore.EClass;
import org.eclipse.emf.ecore.EObject;
import org.eclipse.emf.ecore.EReference;
import org.eclipse.emf.ecore.EStructuralFeature;
import org.eclipse.emf.ecore.InternalEObject;
import org.eclipse.emf.ecore.impl.EStoreEObjectImpl;
import org.mapdb.DB;
import org.mapdb.HTreeMap;
import org.mapdb.Serializer;

import core.database.FeatureBean;
import core.database.FeatureBeanSerializer;

import core.database.ProtostuffSerializer;
import core.util.EObjectIDUtil;
import core.util.GeneralHashFunctionLibrary;

public class MapDBStore implements InternalEObject.EStore {

	private DB db;

	private HTreeMap<FeatureBean, Object> property;

	HTreeMap<String, String> type;

	HTreeMap<String, FeatureBean> containment;

	public MapDBStore(DB database) {
		this.db = database;
		property = db.hashMap("property").keySerializer(new FeatureBeanSerializer())
				.valueSerializer(new ProtostuffSerializer()).createOrOpen();

		type = db.hashMap("type_map").keySerializer(Serializer.STRING).valueSerializer(Serializer.STRING)
				.createOrOpen();

		containment = db.hashMap("containment_map").keySerializer(Serializer.STRING)
				.valueSerializer(new FeatureBeanSerializer()).createOrOpen();

	}

	public void addRoot(InternalEObject root) {
		String id = EObjectIDUtil.getID(root);
		String classtype = root.eClass().getEPackage().getNsURI() + "#" + root.eClass().getName();
		type.put(id, classtype);
	}

	@Override
	public void add(InternalEObject ieo, EStructuralFeature esf, int index, Object o) {
		// EObject在resource内唯一标识符
		String id = EObjectIDUtil.getID(ieo);

		// 插入数据到type表中
		if (!type.containsKey(id)) {
			String classType = ieo.eClass().getEPackage().getNsURI() + "#" + ieo.eClass().getName();
			type.putIfAbsent(id, classType);
		}

		// 对于EObject类型数据，存其id
		if (o instanceof EObject) {
			// 对于EObject类型数据，需要加入到containment表中
			EObject eo = (EObject) o;
			String oId = EObjectIDUtil.getID(eo);
			EStructuralFeature containingFeature = ieo.eContainingFeature();
			FeatureBean containmentBean = new FeatureBean(id, esf.getName());
			containment.put(oId, containmentBean);

			// 处理Property表
			FeatureBean key = new FeatureBean(id, esf.getName());
			// 对于多值数据，存List
			if (index != NO_INDEX || esf.isMany()) {
				if (property.containsKey(key)) {
					List<Object> list = (List<Object>) property.get(key);
					list.add(index, oId);
					property.put(key, list);
				}
			}
			// 对于单值数据，存id
			else {
				property.put(key, oId);
			}

		}
		// 对于非EObject数据，直接存入
		else {
			FeatureBean key = new FeatureBean(id, esf.getName());
			// 对于多值数据，存入list
			if (esf.isMany()) {
				if (property.containsKey(key)) {
					List<Object> list = (List<Object>) property.get(key);
					list.add(index, o);
					property.put(key, list);
				}
			}
			// 对于单值数据，直接存入
			else {
				property.put(key, o);
			}

		}

	}

	@Override
	public void clear(InternalEObject ieo, EStructuralFeature esf) {

		String id = EObjectIDUtil.getID(ieo);

		// 对于多值属性
		if (esf.isMany()) {
			if (property.containsKey(new FeatureBean(id, esf.getName()))) {
				// 对于引用类型，不仅需要删除属性表中的数据，还需删除containment表和type表的数据
				if (esf instanceof EReference) {
					List<Object> list = (List<Object>) property.get(new FeatureBean(id, esf.getName()));
					for (Object oId : list) {
						containment.remove((String) oId);
						type.remove((String) oId);
					}
				}
				// 删除属性表中数据
				property.remove(new FeatureBean(id, esf.getName()));
			}
		}
		// 对于单值属性
		else {
			if (property.containsKey(new FeatureBean(id, esf.getName()))) {
				// 对于引用类型，不仅需要删除属性表中的数据，还需删除containment表和type表的数据
				if (esf instanceof EReference) {
					Object oId = property.get(new FeatureBean(id, esf.getName()));
					containment.remove((String) oId);
					type.remove((String) oId);
				}
				// 删除属性表中数据
				property.remove(new FeatureBean(id, esf.getName()));
			}
		}

	}

	@Override
	public boolean contains(InternalEObject ieo, EStructuralFeature esf, Object o) {
		String id = EObjectIDUtil.getID(ieo);
		// 表中无此键，则不存在此数据
		if (!property.containsKey(new FeatureBean(id, esf.getName())))
			return false;
		// 对于多值属性，分EObject和非EObject
		if (esf.isMany()) {
			List<Object> list = (List<Object>) property.get(new FeatureBean(id, esf.getName()));
			if (o instanceof EObject) {
				String oId = EObjectIDUtil.getID((EObject) o);
				return list.contains(oId);
			} else
				return list.contains(o);
		}
		// 到此处则说明，表中既有FeatureBean记录，又是单值属性，则必然存在
		return true;
	}

	@Override
	public EObject create(EClass eClass) {
		InternalEObject result = new EStoreEObjectImpl(eClass, this);
		return result;
	}

	@Override
	public Object get(InternalEObject ieo, EStructuralFeature esf, int index) {
		String id = EObjectIDUtil.getID(ieo);
		if (!property.containsKey(new FeatureBean(id, esf.getName())))
			return null;
		if (index == NO_INDEX || !esf.isMany()) {
			if (esf instanceof EReference)
				return ieo.eResource().getEObject((String) property.get(new FeatureBean(id, esf.getName())));
			else
				return property.get(new FeatureBean(id, esf.getName()));
		} else {
			List<Object> list = (List<Object>) property.get(new FeatureBean(id, esf.getName()));
			if (index >= list.size())
				return null;
			if (esf instanceof EReference) {
				String oId = (String) list.get(index);
				return ieo.eResource().getEObject(oId);
			} else
				return list.get(index);
		}

	}

	@Override
	public InternalEObject getContainer(InternalEObject ieo) {
		String id = EObjectIDUtil.getID(ieo);
		if (!containment.containsKey(id))
			return null;
		else
			return (InternalEObject) ieo.eResource().getEObject(containment.get(id).getID());
	}

	@Override
	public EStructuralFeature getContainingFeature(InternalEObject ieo) {
		String id = EObjectIDUtil.getID(ieo);
		if (!containment.containsKey(id)) {
			return null;
		} else {
			String featureName = containment.get(id).getFeatureName();
			EObject container = ieo.eResource().getEObject(containment.get(id).getID());
			return container.eClass().getEStructuralFeature(featureName);
		}

	}

	@Override
	public int hashCode(InternalEObject ieo, EStructuralFeature esf) {
		Long code = GeneralHashFunctionLibrary.RSHash(ieo.toString() + esf.getName());
		return code.intValue();
	}

	@Override
	public int indexOf(InternalEObject ieo, EStructuralFeature esf, Object o) {
		String id = EObjectIDUtil.getID(ieo);
		if (!property.containsKey(new FeatureBean(id, esf.getName()))) {
			return -1;
		}
		// 对于单值属性
		if (!esf.isMany()) {
			// EObject类型
			if (o instanceof EObject) {
				return ieo.eResource().getEObject((String) property.get(new FeatureBean(id, esf.getName()))).equals(ieo)
						? 0
						: -1;
			}
			// 普通类型
			else
				return property.get(new FeatureBean(id, esf.getName())).equals(o) ? 0 : -1;
		}
		// 对于多值属性
		else {
			List<Object> list = (List<Object>) property.get(new FeatureBean(id, esf.getName()));
			// EObject类型
			if (o instanceof EObject) {
				String oId = EObjectIDUtil.getID((EObject) o);
				return list.indexOf(oId);
			}
			// 普通类型
			else {
				return list.indexOf(o);
			}
		}
	}

	@Override
	public boolean isEmpty(InternalEObject ieo, EStructuralFeature esf) {
		String id = EObjectIDUtil.getID(ieo);
		if (property.containsKey(new FeatureBean(id, esf.getName()))) {
			if (esf.isMany()) {
				List<Object> list = (List<Object>) property.get(new FeatureBean(id, esf.getName()));
				return list.isEmpty();
			} else
				return true;
		}
		return false;
	}

	@Override
	public boolean isSet(InternalEObject ieo, EStructuralFeature esf) {
		String id = EObjectIDUtil.getID(ieo);
		return property.containsKey(new FeatureBean(id, esf.getName()));
	}

	@Override
	public int lastIndexOf(InternalEObject ieo, EStructuralFeature esf, Object o) {
		String id = EObjectIDUtil.getID(ieo);
		if (!property.containsKey(new FeatureBean(id, esf.getName()))) {
			return -1;
		}
		// 对于单值属性
		if (!esf.isMany()) {
			// EObject类型
			if (o instanceof EObject) {
				return ieo.eResource().getEObject((String) property.get(new FeatureBean(id, esf.getName()))).equals(ieo)
						? 0
						: -1;
			}
			// 普通类型
			else
				return property.get(new FeatureBean(id, esf.getName())).equals(o) ? 0 : -1;
		}
		// 对于多值属性
		else {
			List<Object> list = (List<Object>) property.get(new FeatureBean(id, esf.getName()));
			// EObject类型
			if (o instanceof EObject) {
				String oId = EObjectIDUtil.getID((EObject) o);
				return list.lastIndexOf(oId);
			}
			// 普通类型
			else {
				return list.lastIndexOf(o);
			}
		}

	}

	@Override
	public Object move(InternalEObject ieo, EStructuralFeature esf, int index1, int index2) {
		throw new UnsupportedOperationException();
	}

	@Override
	public Object remove(InternalEObject ieo, EStructuralFeature esf, int index) {
		String id = EObjectIDUtil.getID(ieo);
		if (!property.containsKey(new FeatureBean(id, esf.getName()))) {
			return null;
		}
		// 对于单值数据
		if (!esf.isMany()) {
			unset(ieo, esf);
		}
		// 对于多值数据
		else {
			List<Object> list = (List<Object>) property.get(new FeatureBean(id, esf.getName()));
			// 对于引用属性（EObject数据）
			if (esf instanceof EReference) {
				String oId = (String) list.remove(index);
				if (oId == null)
					return null;
				else {
					type.remove(oId);
					containment.remove(oId);
					return ieo.eResource().getEObject(oId);
				}
			}
			// 对于普通类型
			else {
				return list.remove(index);
			}
		}
		return null;
	}

	/* add和set两个方法一般被认为分别是多值属性和单值属性的设置方法，这里暂时都合为add方法 */
	@Override
	public Object set(InternalEObject ioe, EStructuralFeature esf, int index, Object o) {
		try {
			add(ioe, esf, index, o);
		} catch (Exception e) {
			// 设置失败
			return null;
		}
		// 设置成功，直接返回参数即可
		return o;
	}

	@Override
	public int size(InternalEObject ieo, EStructuralFeature esf) {
		String id = EObjectIDUtil.getID(ieo);
		if (!property.containsKey(new FeatureBean(id, esf.getName()))) {
			return 0;
		}
		if (esf.isMany()) {
			return ((List<Object>) property.get(new FeatureBean(id, esf.getName()))).size();
		}
		// 此情况是既存在又是单值，所以大小为1
		return 1;
	}

	@Override
	public Object[] toArray(InternalEObject ieo, EStructuralFeature esf) {
		String id = EObjectIDUtil.getID(ieo);
		if (!property.containsKey(new FeatureBean(id, esf.getName()))) {
			return null;
		}
		if (esf.isMany()) {
			List<Object> list = (List<Object>) property.get(new FeatureBean(id, esf.getName()));
			if (esf instanceof EReference) {
				Object[] os = new Object[list.size()];
				for (int i = 0; i != os.length; i++) {
					os[i] = ieo.eResource().getEObject((String) list.get(i));
				}
				return os;
			} else
				return list.toArray();
		} else {
			if (esf instanceof EReference) {
				return new Object[] {
						ieo.eResource().getEObject((String) property.get(new FeatureBean(id, esf.getName()))) };
			} else
				return new Object[] { property.get(new FeatureBean(id, esf.getName())) };
		}

	}

	@Override
	public <T> T[] toArray(InternalEObject ieo, EStructuralFeature arg1, T[] esf) {
		throw new UnsupportedOperationException();
	}

	@Override
	public void unset(InternalEObject ieo, EStructuralFeature esf) {
		String id = EObjectIDUtil.getID(ieo);
		if (!property.containsKey(new FeatureBean(id, esf.getName()))) {
			return;
		}
		if (esf.isMany())
			return;
		else {
			if (esf instanceof EReference) {
				String oId = (String) property.remove(new FeatureBean(id, esf.getName()));

				type.remove(oId);
				containment.remove(oId);
				return;

			}
			// 对于普通类型
			else {
				property.remove(new FeatureBean(id, esf.getName()));
				return;
			}
		}

	}

	@Override
	protected void finalize() throws Throwable {
		try {
			db.close();
		} finally {
			super.finalize();
		}

	}

}
