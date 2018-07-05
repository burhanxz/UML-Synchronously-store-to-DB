package core.store;

import org.mapdb.DB;
import org.mapdb.DBMaker;
import org.mapdb.DB.HashMapMaker;

import core.database.ClassBean;
import core.database.FeatureBean;
import core.database.SerializerClassBean;
import core.database.SerializerFeatureBean;

import org.mapdb.HTreeMap;
import org.mapdb.Serializer;

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
