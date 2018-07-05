/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.util {
    /**
     * Public constructor to instantiate the helper.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @generated
     * @class
     * @extends org.eclipse.emf.ecore.xmi.util.XMLProcessor
     */
    export class UmlXMLProcessor extends org.eclipse.emf.ecore.xmi.util.XMLProcessor {
        public constructor() {
            super((org.eclipse.emf.ecore.EPackage.Registry.INSTANCE));
            uml.UmlPackage.eINSTANCE.eClass();
        }

        /**
         * Register for "*" and "xml" file extensions the UmlResourceFactoryImpl factory.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        getRegistrations() : any {
            if(this.registrations == null) {
                super.getRegistrations();
                /* put */(this.registrations[org.eclipse.emf.ecore.xmi.util.XMLProcessor.XML_EXTENSION] = new uml.util.UmlResourceFactoryImpl());
                /* put */(this.registrations[org.eclipse.emf.ecore.xmi.util.XMLProcessor.STAR_EXTENSION] = new uml.util.UmlResourceFactoryImpl());
            }
            return this.registrations;
        }
    }
    UmlXMLProcessor["__class"] = "uml.util.UmlXMLProcessor";

}

