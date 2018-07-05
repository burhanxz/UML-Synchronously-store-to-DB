/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace a.store {
    export class ModelStorage {
        /*private*/ database : org.mapdb.DB;

        /*private*/ propertyMap : org.mapdb.HTreeMap<a.database.FeatureBean, any>;

        /*private*/ instancesMap : org.mapdb.HTreeMap<string, a.database.ClassBean>;

        /*private*/ containmentMap : org.mapdb.HTreeMap<string, a.database.FeatureBean>;

        constructor(modelName : string) {
            this.database = null;
            this.propertyMap = null;
            this.instancesMap = null;
            this.containmentMap = null;
            this.database = org.mapdb.DBMaker.fileDB(modelName).make();
            this.propertyMap = this.database.hashMap("property_map").keySerializer<any>(new a.database.SerializerFeatureBean()).valueSerializer<any>(org.mapdb.Serializer.ELSA).create();
            this.instancesMap = this.database.hashMap("instances_map").keySerializer<any>(org.mapdb.Serializer.STRING).valueSerializer<any>(new a.database.SerializerClassBean()).create();
            this.containmentMap = this.database.hashMap("containment_map").keySerializer<any>(org.mapdb.Serializer.STRING).valueSerializer<any>(new a.database.SerializerFeatureBean()).create();
        }
    }
    ModelStorage["__class"] = "a.store.ModelStorage";

}

