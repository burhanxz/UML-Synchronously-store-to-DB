/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.util {
    /**
     * Creates an instance of the resource factory.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @generated
     * @class
     * @extends org.eclipse.emf.ecore.resource.impl.ResourceFactoryImpl
     */
    export class UmlResourceFactoryImpl extends org.eclipse.emf.ecore.resource.impl.ResourceFactoryImpl {
        public constructor() {
            super();
        }

        /**
         * Creates an instance of the resource.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {org.eclipse.emf.common.util.URI} uri
         * @return {*}
         */
        public createResource(uri : org.eclipse.emf.common.util.URI) : org.eclipse.emf.ecore.resource.Resource {
            let result : org.eclipse.emf.ecore.xmi.XMLResource = new uml.util.UmlResourceImpl(uri);
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>result.getDefaultSaveOptions(), org.eclipse.emf.ecore.xmi.XMLResource.OPTION_EXTENDED_META_DATA, true);
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>result.getDefaultLoadOptions(), org.eclipse.emf.ecore.xmi.XMLResource.OPTION_EXTENDED_META_DATA, true);
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>result.getDefaultSaveOptions(), org.eclipse.emf.ecore.xmi.XMLResource.OPTION_SCHEMA_LOCATION, true);
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>result.getDefaultLoadOptions(), org.eclipse.emf.ecore.xmi.XMLResource.OPTION_USE_ENCODED_ATTRIBUTE_STYLE, true);
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>result.getDefaultSaveOptions(), org.eclipse.emf.ecore.xmi.XMLResource.OPTION_USE_ENCODED_ATTRIBUTE_STYLE, true);
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>result.getDefaultLoadOptions(), org.eclipse.emf.ecore.xmi.XMLResource.OPTION_USE_LEXICAL_HANDLER, true);
            return result;
        }
    }
    UmlResourceFactoryImpl["__class"] = "uml.util.UmlResourceFactoryImpl";
    UmlResourceFactoryImpl["__interfaces"] = ["org.eclipse.emf.ecore.resource.Resource.Factory"];


}

