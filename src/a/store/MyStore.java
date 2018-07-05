package a.store;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.eclipse.emf.common.util.BasicEList;
import org.eclipse.emf.common.util.EList;
import org.eclipse.emf.ecore.EClass;
import org.eclipse.emf.ecore.EObject;
import org.eclipse.emf.ecore.EStructuralFeature;
import org.eclipse.emf.ecore.InternalEObject;
import org.eclipse.emf.ecore.impl.EStoreEObjectImpl;
import org.eclipse.emf.ecore.impl.EStoreEObjectImpl.EStoreImpl.Entry;

public class MyStore implements InternalEObject.EStore {
	// protected static final EStructuralFeature CONTAINING_FEATURE = new
	// EReferenceImpl();
	// protected static final EStructuralFeature CONTAINER = new
	// EReferenceImpl();
	public static MyStore INSTANCE = new MyStore();

	private MyStore() {
	}

	public Map<Entry, Object> getMap() {
		return map;
	}

	protected Map<Entry, Object> map = new HashMap<Entry, Object>();

	public static class Entry {
		protected EObject eObject;
		protected EStructuralFeature eStructuralFeature;

		public Entry(InternalEObject eObject, EStructuralFeature eStructuralFeature) {
			this.eObject = eObject;
			this.eStructuralFeature = eStructuralFeature;
		}
		
		@Override
		public String toString(){
			return eObject + ": " + eStructuralFeature.getClass().getSimpleName();
		}
		
		@Override
		public boolean equals(Object that) {
			if (that instanceof Entry) {
				Entry entry = (Entry) that;
				return eObject == entry.eObject && eStructuralFeature == entry.eStructuralFeature;
			} else {
				return false;
			}
		}

		@Override
		public int hashCode() {
			return eObject.hashCode() ^ eStructuralFeature.hashCode();
		}
	}

	protected EList<Object> getList(Entry entry) {
		@SuppressWarnings("unchecked")
		EList<Object> result = (EList<Object>) map.get(entry);
		if (result == null) {
			result = new BasicEList<Object>();
			map.put(entry, result);
		}
		return result;
	}

	public Object get(InternalEObject eObject, EStructuralFeature feature, int index) {
		Entry entry = new Entry(eObject, feature);
		if (index == NO_INDEX) {
			return map.get(entry);
		} else {
			return getList(entry).get(index);
		}
	}

	public Object set(InternalEObject eObject, EStructuralFeature feature, int index, Object value) {
		
		System.out.println("set:  " + eObject + ": " + feature.getClass().getSimpleName()
				+ value);
		
		Entry entry = new Entry(eObject, feature);
		if (index == NO_INDEX) {
			return map.put(entry, value);
		} else {
			List<Object> list = getList(entry);
			return list.set(index, value);
		}
	}

	public void add(InternalEObject eObject, EStructuralFeature feature, int index, Object value) {
		
		System.out.println("add:  " + eObject + ": " + feature.getClass().getSimpleName()
				+ value);
		
		Entry entry = new Entry(eObject, feature);
		getList(entry).add(index, value);
	}

	public Object remove(InternalEObject eObject, EStructuralFeature feature, int index) {
		Entry entry = new Entry(eObject, feature);
		return getList(entry).remove(index);
	}

	public Object move(InternalEObject eObject, EStructuralFeature feature, int targetIndex, int sourceIndex) {
		Entry entry = new Entry(eObject, feature);
		return getList(entry).move(targetIndex, sourceIndex);
	}

	public void clear(InternalEObject eObject, EStructuralFeature feature) {
		Entry entry = new Entry(eObject, feature);
		map.remove(entry);
		// getList(entry).clear();
	}

	public boolean isSet(InternalEObject eObject, EStructuralFeature feature) {
		Entry entry = new Entry(eObject, feature);
		return map.containsKey(entry);
	}

	public void unset(InternalEObject eObject, EStructuralFeature feature) {
		Entry entry = new Entry(eObject, feature);
		map.remove(entry);
	}

	public int size(InternalEObject eObject, EStructuralFeature feature) {
		Entry entry = new Entry(eObject, feature);
		return getList(entry).size();
	}

	public int indexOf(InternalEObject eObject, EStructuralFeature feature, Object value) {
		Entry entry = new Entry(eObject, feature);
		return getList(entry).indexOf(value);
	}

	public int lastIndexOf(InternalEObject eObject, EStructuralFeature feature, Object value) {
		Entry entry = new Entry(eObject, feature);
		return getList(entry).lastIndexOf(value);
	}

	public Object[] toArray(InternalEObject eObject, EStructuralFeature feature) {
		Entry entry = new Entry(eObject, feature);
		return getList(entry).toArray();
	}

	public <T> T[] toArray(InternalEObject eObject, EStructuralFeature feature, T[] array) {
		Entry entry = new Entry(eObject, feature);
		return getList(entry).toArray(array);
	}

	public boolean isEmpty(InternalEObject eObject, EStructuralFeature feature) {
		Entry entry = new Entry(eObject, feature);
		return getList(entry).isEmpty();
	}

	public boolean contains(InternalEObject eObject, EStructuralFeature feature, Object value) {
		Entry entry = new Entry(eObject, feature);
		return getList(entry).contains(value);
	}

	public int hashCode(InternalEObject eObject, EStructuralFeature feature) {
		Entry entry = new Entry(eObject, feature);
		return getList(entry).hashCode();
	}

	public InternalEObject getContainer(InternalEObject eObject) {
		return null;

		// Entry entry = new Entry(eObject, CONTAINER);
		// return (InternalEObject)map.get(entry);
	}

	public EStructuralFeature getContainingFeature(InternalEObject eObject) {
		// This should never be called.
		//
		throw new UnsupportedOperationException();
		// Entry entry = new Entry(eObject, CONTAINING_FEATURE);
		// return (EStructuralFeature)map.get(entry);
	}

	public EObject create(EClass eClass) {
		InternalEObject result = new EStoreEObjectImpl(eClass, this);
		return result;
	}
}
