package core.test;

import java.io.File;
import java.net.URL;

import org.mapdb.DB;
import org.mapdb.DBMaker;
import org.mapdb.HTreeMap;
import org.mapdb.Serializer;

import core.database.FeatureBean;
import core.database.FeatureBeanSerializer;

public class MapDBSet {

	@SuppressWarnings("unchecked")
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		URL url = Thread.currentThread().getContextClassLoader().getResource("") == null
				? Thread.currentThread().getContextClassLoader().getResource("/")
				: Thread.currentThread().getContextClassLoader().getResource("");
				
		String basePath = url.getPath();
		
		String path = basePath + "mapDB";
		
		System.out.println("++" + path);
		
		try (DB db = DBMaker.fileDB(path).make()) {

			 HTreeMap<String, FeatureBean> containment = db.hashMap("containment_map")
			 .valueSerializer(new FeatureBeanSerializer())
			 .keySerializer(Serializer.STRING)
			 .create();
			
			 FeatureBean f1 = new FeatureBean();
			 f1.setID("Root");
			 f1.setFeatureName("eContents");
			
			 FeatureBean f2 = new FeatureBean();
			 f2.setID("p1");
			 f2.setFeatureName("ownedElements");
			
			 containment.put("p1", f1);
			 containment.put("c1", f2);
			
			 db.commit();

			
			FeatureBean f = containment.get("p1");
			System.out.println(f);

		}

		// property map
		// HTreeMap<SingleFeatureBean, Object> singleFeatures =
		// database.hashMap("features/single")
		// .keySerializer(new
		// SerializerDecorator<>(SERIALIZER_FACTORY.forSingleFeature()))
		// .valueSerializer(Serializer.ELSA).createOrOpen();

		// type map
		// HTreeMap<Id, ClassBean> instances = database.hashMap("instances")
		// .keySerializer(new SerializerDecorator<>(SERIALIZER_FACTORY.forId()))
		// .valueSerializer(new
		// SerializerDecorator<>(SERIALIZER_FACTORY.forClass())).createOrOpen();

		// containment map
		// HTreeMap<Id, SingleFeatureBean> containers = database.hashMap("containers")
		// .keySerializer(new SerializerDecorator<>(SERIALIZER_FACTORY.forId()))
		// .valueSerializer(new
		// SerializerDecorator<>(SERIALIZER_FACTORY.forSingleFeature())).createOrOpen();

	}

}
