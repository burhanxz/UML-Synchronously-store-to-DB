/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace a.database {
    export class SerializerFeatureBean implements org.mapdb.Serializer<a.database.FeatureBean> {
        public serialize(out : org.mapdb.DataOutput2, value : a.database.FeatureBean) {
            let bytes : number[] = a.database.ProtostuffUtil.serializer<any>(value);
            out.write(bytes);
        }

        public deserialize(input : org.mapdb.DataInput2, available : number) : a.database.FeatureBean {
            let bytes : number[] = (s => { let a=[]; while(s-->0) a.push(0); return a; })(available);
            input.readFully(bytes);
            let feature : a.database.FeatureBean = <any>(a.database.ProtostuffUtil.deserializer<any>(bytes, a.database.FeatureBean));
            return feature;
        }

        constructor() {
        }
    }
    SerializerFeatureBean["__class"] = "a.database.SerializerFeatureBean";
    SerializerFeatureBean["__interfaces"] = ["java.util.Comparator","org.mapdb.Serializer"];


}

