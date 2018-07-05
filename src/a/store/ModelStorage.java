package a.store;

import org.mapdb.DB;
import org.mapdb.DBMaker;
import org.mapdb.DB.HashMapMaker;

import org.mapdb.HTreeMap;
import org.mapdb.Serializer;

import a.database.ClassBean;
import a.database.FeatureBean;
import a.database.SerializerClassBean;
import a.database.SerializerFeatureBean;

public class ModelStorage {

	private final DB database;

	private final HTreeMap<FeatureBean, Object> propertyMap;

	private final HTreeMap<String, ClassBean> instancesMap;

	private final HTreeMap<String, FeatureBean> containmentMap;

	@SuppressWarnings("unchecked")
	protected ModelStorage(String modelName) {
		database = DBMaker.fileDB(modelName).make();

		propertyMap = database.hashMap("property_map").keySerializer(new SerializerFeatureBean())
				.valueSerializer(Serializer.ELSA).create();

		instancesMap = database.hashMap("instances_map").keySerializer(Serializer.STRING)
				.valueSerializer(new SerializerClassBean()).create();

		containmentMap = database.hashMap("containment_map").keySerializer(Serializer.STRING)
				.valueSerializer(new SerializerFeatureBean()).create();
	}
}
