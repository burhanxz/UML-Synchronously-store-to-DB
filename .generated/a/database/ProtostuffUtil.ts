/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace a.database {
    export class ProtostuffUtil {
        static cachedSchema : any; public static cachedSchema_$LI$() : any { if(ProtostuffUtil.cachedSchema == null) ProtostuffUtil.cachedSchema = <any>(new java.util.concurrent.ConcurrentHashMap<any, com.dyuproject.protostuff.Schema<any>>()); return ProtostuffUtil.cachedSchema; };

        static objenesis : org.objenesis.Objenesis; public static objenesis_$LI$() : org.objenesis.Objenesis { if(ProtostuffUtil.objenesis == null) ProtostuffUtil.objenesis = new org.objenesis.ObjenesisStd(true); return ProtostuffUtil.objenesis; };

        /*private*/ static getSchema<T>(clazz : any) : com.dyuproject.protostuff.Schema<T> {
            let schema : com.dyuproject.protostuff.Schema<T> = <com.dyuproject.protostuff.Schema<T>><any>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>ProtostuffUtil.cachedSchema_$LI$(), clazz);
            if(schema == null) {
                schema = com.dyuproject.protostuff.runtime.RuntimeSchema.getSchema<any>(clazz);
                if(schema != null) {
                    /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>ProtostuffUtil.cachedSchema_$LI$(), clazz, schema);
                }
            }
            return schema;
        }

        public static serializer<T>(obj : T) : number[] {
            let clazz : any = <any>(<any>obj.constructor);
            let buffer : com.dyuproject.protostuff.LinkedBuffer = com.dyuproject.protostuff.LinkedBuffer.allocate(com.dyuproject.protostuff.LinkedBuffer.DEFAULT_BUFFER_SIZE);
            try {
                let schema : com.dyuproject.protostuff.Schema<T> = ProtostuffUtil.getSchema<any>(clazz);
                return com.dyuproject.protostuff.ProtostuffIOUtil.toByteArray<any>(obj, schema, buffer);
            } catch(e) {
                throw Object.defineProperty(new Error(e.message), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IllegalStateException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
            } finally {
                buffer.clear();
            };
        }

        public static deserializer<T>(data : number[], clazz : any) : T {
            try {
                let obj : T = <T>ProtostuffUtil.objenesis_$LI$().newInstance(clazz);
                let schema : com.dyuproject.protostuff.Schema<T> = ProtostuffUtil.getSchema<any>(clazz);
                com.dyuproject.protostuff.ProtostuffIOUtil.mergeFrom<any>(data, obj, schema);
                return obj;
            } catch(e) {
                throw Object.defineProperty(new Error(e.message), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IllegalStateException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
            };
        }
    }
    ProtostuffUtil["__class"] = "a.database.ProtostuffUtil";

}


a.database.ProtostuffUtil.objenesis_$LI$();

a.database.ProtostuffUtil.cachedSchema_$LI$();
