package core.test;

import java.net.URL;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.eclipse.collections.api.tuple.Pair;
import org.mapdb.DB;
import org.mapdb.DBMaker;
import org.mapdb.HTreeMap;
import org.mapdb.Serializer;

import core.database.ProtostuffSerializer;

public class MapDBTest {
	
	@SuppressWarnings("rawtypes")
	public static void printMap(HTreeMap map) {
		System.out.println(map.keySet());
		Iterator<String> it = map.keySet().iterator();
		while(it.hasNext()) {
			Object o = map.get(it.next());
			System.out.println(o.toString());
		}
//		System.out.println(map.values().getClass());

//		System.out.println("====" + map.get("AAA:ownedElements").getClass());
		// Set keyset = map.keySet();
		//
		// Iterator iter = keyset.iterator();
		//
		// while(iter.hasNext()) {
		// System.out.println("===" + iter.next());
		//
		// System.out.println(iter.next() + " : " + map.get(iter.next()));
		// }
	}

	@SuppressWarnings("unchecked")
	public static void main(String[] args) {
		URL url = Thread.currentThread().getContextClassLoader().getResource("") == null
				? Thread.currentThread().getContextClassLoader().getResource("/")
				: Thread.currentThread().getContextClassLoader().getResource("");

		String basePath = url.getPath();

		String path = basePath + "test2";
		
		System.out.println(path);

		DB db = null;
		try {

			db = DBMaker.fileDB(path).make();
			/*
			 * 1，JVMS 对无界通配符有个特定的规范，ClassFileFormat-Java5的规范是，无界通配符将被编码成*，而以Object为上界的通配符（?
			 * extends
			 * Object）将被编码成+Ljava/lang/Object。这个区别在类库分析字节码时会带来一个漏洞。编译器编写者将不得不处理这个问题；可参照
			 * revisions to "The class File Format"。 2，从可信赖的角度看，它们是不同的。JLS4.6和4.7认为
			 * List<?>是一个可信赖的类型，但是List<? extends
			 * Object>是会被擦除掉的类型。任何库的编写者在考虑这个问题时需要使用.isReifiable()，以拥护JLS所倡导的思想。
			 * 
			 */
			
			HTreeMap<String,Object> mymap =  db.hashMap("property/single")
			.keySerializer(Serializer.STRING)
			.valueSerializer(new ProtostuffSerializer())
			.createOrOpen();
//			HTreeMap<FeatureBean,SingleValueBean> propertySingle =  db.hashMap("property/single")
//					.keySerializer(new FeatureBeanSerializer())
////					.keySerializer(Serializer.STRING)
//					.valueSerializer(new SingleValueBeanSerializer())
//					.createOrOpen();
//
//			HTreeMap<FeatureBean,ManyValueBean> propertyMany =  db.hashMap("property/Many")
//					.keySerializer(new FeatureBeanSerializer())
////					.keySerializer(Serializer.STRING)
//					.valueSerializer(new ManyValueBeanSerializer())
//					.createOrOpen();
//			
//			HTreeMap<String, String> type = db.hashMap("type_map").keySerializer(Serializer.STRING)
//					.valueSerializer(Serializer.STRING).createOrOpen();
//
//			HTreeMap<String, FeatureBean> containment = db.hashMap("containment_map").keySerializer(Serializer.STRING)
//					.valueSerializer(new FeatureBeanSerializer()).createOrOpen();
			//
			// FeatureBean f2 = new FeatureBean();
			// f2.setID("p1");
			// f2.setFeatureName("ownedElements");
			//
			// containment.putIfAbsent("xx", f2);
			//
			// db.commit();
			mymap.clear();
			List<Object> list = new ArrayList<>();
			list.add(new Object());
			list.add(new Object());
			mymap.put("1", "a");
			mymap.put("2", Double.valueOf("434343"));
//			mymap.put("3", list);
			
			
			
			printMap(mymap);
//			propertyMany.clear();
//			FeatureBean f = new FeatureBean();
//			f.setID("BBB");
//			f.setFeatureName("dsds");
//			propertyMany.put(f, new ManyValueBean(new String[] {"a", "b", "c"}));
//			
////			db.commit();
//			
//			printMap(propertyMany);
			
		} finally {
			db.close();
		}

	}
}
