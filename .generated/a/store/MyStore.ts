/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace a.store {
    export class MyStore implements org.eclipse.emf.ecore.InternalEObject.EStore {
        public static INSTANCE : MyStore; public static INSTANCE_$LI$() : MyStore { if(MyStore.INSTANCE == null) MyStore.INSTANCE = new MyStore(); return MyStore.INSTANCE; };

        constructor() {
        }

        public getMap() : any {
            return this.map;
        }

        map : any = <any>({});

        getList(entry : MyStore.Entry) : org.eclipse.emf.common.util.EList<any> {
            let result : org.eclipse.emf.common.util.EList<any> = <org.eclipse.emf.common.util.EList<any>><any>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>this.map, entry);
            if(result == null) {
                result = <any>(new org.eclipse.emf.common.util.BasicEList<any>());
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>this.map, entry, result);
            }
            return result;
        }

        public get(eObject : org.eclipse.emf.ecore.InternalEObject, feature : org.eclipse.emf.ecore.EStructuralFeature, index : number) : any {
            let entry : MyStore.Entry = new MyStore.Entry(eObject, feature);
            if(index === org.eclipse.emf.ecore.InternalEObject.EStore.NO_INDEX) {
                return /* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>this.map, entry);
            } else {
                return this.getList(entry).get(index);
            }
        }

        public set(eObject : org.eclipse.emf.ecore.InternalEObject, feature : org.eclipse.emf.ecore.EStructuralFeature, index : number, value : any) : any {
            console.info("set:  " + eObject + ": " + /* getSimpleName */(c => c["__class"]?c["__class"].substring(c["__class"].lastIndexOf('.')+1):c["name"].substring(c["name"].lastIndexOf('.')+1))((<any>feature.constructor)) + value);
            let entry : MyStore.Entry = new MyStore.Entry(eObject, feature);
            if(index === org.eclipse.emf.ecore.InternalEObject.EStore.NO_INDEX) {
                return /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>this.map, entry, value);
            } else {
                let list : Array<any> = this.getList(entry);
                return /* set */(list[index] = value);
            }
        }

        public add(eObject : org.eclipse.emf.ecore.InternalEObject, feature : org.eclipse.emf.ecore.EStructuralFeature, index : number, value : any) {
            console.info("add:  " + eObject + ": " + /* getSimpleName */(c => c["__class"]?c["__class"].substring(c["__class"].lastIndexOf('.')+1):c["name"].substring(c["name"].lastIndexOf('.')+1))((<any>feature.constructor)) + value);
            let entry : MyStore.Entry = new MyStore.Entry(eObject, feature);
            this.getList(entry).add(index, value);
        }

        public remove(eObject : org.eclipse.emf.ecore.InternalEObject, feature : org.eclipse.emf.ecore.EStructuralFeature, index : number) : any {
            let entry : MyStore.Entry = new MyStore.Entry(eObject, feature);
            return this.getList(entry).remove(index);
        }

        public move(eObject : org.eclipse.emf.ecore.InternalEObject, feature : org.eclipse.emf.ecore.EStructuralFeature, targetIndex : number, sourceIndex : number) : any {
            let entry : MyStore.Entry = new MyStore.Entry(eObject, feature);
            return this.getList(entry).move(targetIndex, sourceIndex);
        }

        public clear(eObject : org.eclipse.emf.ecore.InternalEObject, feature : org.eclipse.emf.ecore.EStructuralFeature) {
            let entry : MyStore.Entry = new MyStore.Entry(eObject, feature);
            /* remove */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries.splice(i,1)[0]; } })(<any>this.map, entry);
        }

        public isSet(eObject : org.eclipse.emf.ecore.InternalEObject, feature : org.eclipse.emf.ecore.EStructuralFeature) : boolean {
            let entry : MyStore.Entry = new MyStore.Entry(eObject, feature);
            return /* containsKey */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return true; } return false; })(<any>this.map, entry);
        }

        public unset(eObject : org.eclipse.emf.ecore.InternalEObject, feature : org.eclipse.emf.ecore.EStructuralFeature) {
            let entry : MyStore.Entry = new MyStore.Entry(eObject, feature);
            /* remove */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries.splice(i,1)[0]; } })(<any>this.map, entry);
        }

        public size(eObject : org.eclipse.emf.ecore.InternalEObject, feature : org.eclipse.emf.ecore.EStructuralFeature) : number {
            let entry : MyStore.Entry = new MyStore.Entry(eObject, feature);
            return this.getList(entry).size();
        }

        public indexOf(eObject : org.eclipse.emf.ecore.InternalEObject, feature : org.eclipse.emf.ecore.EStructuralFeature, value : any) : number {
            let entry : MyStore.Entry = new MyStore.Entry(eObject, feature);
            return this.getList(entry).indexOf(value);
        }

        public lastIndexOf(eObject : org.eclipse.emf.ecore.InternalEObject, feature : org.eclipse.emf.ecore.EStructuralFeature, value : any) : number {
            let entry : MyStore.Entry = new MyStore.Entry(eObject, feature);
            return this.getList(entry).lastIndexOf(value);
        }

        public toArray$org_eclipse_emf_ecore_InternalEObject$org_eclipse_emf_ecore_EStructuralFeature(eObject : org.eclipse.emf.ecore.InternalEObject, feature : org.eclipse.emf.ecore.EStructuralFeature) : any[] {
            let entry : MyStore.Entry = new MyStore.Entry(eObject, feature);
            return this.getList(entry).toArray();
        }

        public toArray$org_eclipse_emf_ecore_InternalEObject$org_eclipse_emf_ecore_EStructuralFeature$java_lang_Object_A<T>(eObject : org.eclipse.emf.ecore.InternalEObject, feature : org.eclipse.emf.ecore.EStructuralFeature, array : T[]) : T[] {
            let entry : MyStore.Entry = new MyStore.Entry(eObject, feature);
            return this.getList(entry).toArray<any>(array);
        }

        public toArray<T>(eObject? : any, feature? : any, array? : any) : any {
            if(((eObject != null && (eObject["__interfaces"] != null && eObject["__interfaces"].indexOf("org.eclipse.emf.ecore.InternalEObject") >= 0 || eObject.constructor != null && eObject.constructor["__interfaces"] != null && eObject.constructor["__interfaces"].indexOf("org.eclipse.emf.ecore.InternalEObject") >= 0)) || eObject === null) && ((feature != null && (feature["__interfaces"] != null && feature["__interfaces"].indexOf("org.eclipse.emf.ecore.EStructuralFeature") >= 0 || feature.constructor != null && feature.constructor["__interfaces"] != null && feature.constructor["__interfaces"].indexOf("org.eclipse.emf.ecore.EStructuralFeature") >= 0)) || feature === null) && ((array != null && array instanceof <any>Array && (array.length==0 || array[0] == null ||(array[0] != null))) || array === null)) {
                return <any>this.toArray$org_eclipse_emf_ecore_InternalEObject$org_eclipse_emf_ecore_EStructuralFeature$java_lang_Object_A(eObject, feature, array);
            } else if(((eObject != null && (eObject["__interfaces"] != null && eObject["__interfaces"].indexOf("org.eclipse.emf.ecore.InternalEObject") >= 0 || eObject.constructor != null && eObject.constructor["__interfaces"] != null && eObject.constructor["__interfaces"].indexOf("org.eclipse.emf.ecore.InternalEObject") >= 0)) || eObject === null) && ((feature != null && (feature["__interfaces"] != null && feature["__interfaces"].indexOf("org.eclipse.emf.ecore.EStructuralFeature") >= 0 || feature.constructor != null && feature.constructor["__interfaces"] != null && feature.constructor["__interfaces"].indexOf("org.eclipse.emf.ecore.EStructuralFeature") >= 0)) || feature === null) && array === undefined) {
                return <any>this.toArray$org_eclipse_emf_ecore_InternalEObject$org_eclipse_emf_ecore_EStructuralFeature(eObject, feature);
            } else throw new Error('invalid overload');
        }

        public isEmpty(eObject : org.eclipse.emf.ecore.InternalEObject, feature : org.eclipse.emf.ecore.EStructuralFeature) : boolean {
            let entry : MyStore.Entry = new MyStore.Entry(eObject, feature);
            return this.getList(entry).isEmpty();
        }

        public contains(eObject : org.eclipse.emf.ecore.InternalEObject, feature : org.eclipse.emf.ecore.EStructuralFeature, value : any) : boolean {
            let entry : MyStore.Entry = new MyStore.Entry(eObject, feature);
            return this.getList(entry).contains(value);
        }

        public hashCode(eObject : org.eclipse.emf.ecore.InternalEObject, feature : org.eclipse.emf.ecore.EStructuralFeature) : number {
            let entry : MyStore.Entry = new MyStore.Entry(eObject, feature);
            return /* hashCode */(<any>((o: any) => { if(o.hashCode) { return o.hashCode(); } else { return o.toString(); } })(this.getList(entry)));
        }

        public getContainer(eObject : org.eclipse.emf.ecore.InternalEObject) : org.eclipse.emf.ecore.InternalEObject {
            return null;
        }

        public getContainingFeature(eObject : org.eclipse.emf.ecore.InternalEObject) : org.eclipse.emf.ecore.EStructuralFeature {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        public create(eClass : org.eclipse.emf.ecore.EClass) : org.eclipse.emf.ecore.EObject {
            let result : org.eclipse.emf.ecore.InternalEObject = new org.eclipse.emf.ecore.impl.EStoreEObjectImpl(eClass, this);
            return result;
        }
    }
    MyStore["__class"] = "a.store.MyStore";
    MyStore["__interfaces"] = ["org.eclipse.emf.ecore.InternalEObject.EStore"];



    export namespace MyStore {

        export class Entry {
            eObject : org.eclipse.emf.ecore.EObject;

            eStructuralFeature : org.eclipse.emf.ecore.EStructuralFeature;

            public constructor(eObject : org.eclipse.emf.ecore.InternalEObject, eStructuralFeature : org.eclipse.emf.ecore.EStructuralFeature) {
                this.eObject = null;
                this.eStructuralFeature = null;
                this.eObject = eObject;
                this.eStructuralFeature = eStructuralFeature;
            }

            /**
             * 
             * @return {string}
             */
            public toString() : string {
                return this.eObject + ": " + /* getSimpleName */(c => c["__class"]?c["__class"].substring(c["__class"].lastIndexOf('.')+1):c["name"].substring(c["name"].lastIndexOf('.')+1))((<any>this.eStructuralFeature.constructor));
            }

            /**
             * 
             * @param {*} that
             * @return {boolean}
             */
            public equals(that : any) : boolean {
                if(that != null && that instanceof <any>a.store.MyStore.Entry) {
                    let entry : MyStore.Entry = <MyStore.Entry>that;
                    return this.eObject === entry.eObject && this.eStructuralFeature === entry.eStructuralFeature;
                } else {
                    return false;
                }
            }

            /**
             * 
             * @return {number}
             */
            public hashCode() : number {
                return /* hashCode */(<any>((o: any) => { if(o.hashCode) { return o.hashCode(); } else { return o.toString(); } })(this.eObject)) ^ /* hashCode */(<any>((o: any) => { if(o.hashCode) { return o.hashCode(); } else { return o.toString(); } })(this.eStructuralFeature));
            }
        }
        Entry["__class"] = "a.store.MyStore.Entry";

    }

}


a.store.MyStore.INSTANCE_$LI$();
