/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace a.database {
    export class SerializerClassBean implements org.mapdb.Serializer<a.database.ClassBean> {
        /**
         * 
         * @param {org.mapdb.DataOutput2} out
         * @param {a.database.ClassBean} value
         */
        public serialize(out : org.mapdb.DataOutput2, value : a.database.ClassBean) {
            let bytes : number[] = a.database.ProtostuffUtil.serializer<any>(value);
            out.write(bytes);
        }

        /**
         * 
         * @param {org.mapdb.DataInput2} input
         * @param {number} available
         * @return {a.database.ClassBean}
         */
        public deserialize(input : org.mapdb.DataInput2, available : number) : a.database.ClassBean {
            let bytes : number[] = (s => { let a=[]; while(s-->0) a.push(0); return a; })(available);
            input.readFully(bytes);
            let clazz : a.database.ClassBean = <any>(a.database.ProtostuffUtil.deserializer<any>(bytes, a.database.ClassBean));
            return clazz;
        }

        constructor() {
        }
    }
    SerializerClassBean["__class"] = "a.database.SerializerClassBean";
    SerializerClassBean["__interfaces"] = ["java.util.Comparator","org.mapdb.Serializer"];


}

