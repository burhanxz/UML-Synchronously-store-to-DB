/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.statemachines.impl {
    /**
     * Creates an instance of the factory.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @generated
     * @class
     * @extends org.eclipse.emf.ecore.impl.EFactoryImpl
     */
    export class StatemachinesFactoryImpl extends org.eclipse.emf.ecore.impl.EFactoryImpl implements sysml.statemachines.StatemachinesFactory {
        /**
         * Creates the default factory implementation.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public static init() : sysml.statemachines.StatemachinesFactory {
            try {
                let theStatemachinesFactory : sysml.statemachines.StatemachinesFactory = <sysml.statemachines.StatemachinesFactory><any>org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEFactory(sysml.statemachines.StatemachinesPackage.eNS_URI);
                if(theStatemachinesFactory != null) {
                    return theStatemachinesFactory;
                }
            } catch(exception) {
                org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.log(exception);
            };
            return new StatemachinesFactoryImpl();
        }

        public constructor() {
            super();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} eClass
         * @return {*}
         */
        public createGen(eClass : org.eclipse.emf.ecore.EClass) : org.eclipse.emf.ecore.EObject {
            switch((eClass.getClassifierID())) {
            default:
                throw Object.defineProperty(new Error("The class \'" + eClass.getName() + "\' is not a valid classifier"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
            }
        }

        /**
         * 
         * @param {*} eClass
         * @return {*}
         */
        public create(eClass : org.eclipse.emf.ecore.EClass) : org.eclipse.emf.ecore.EObject {
            let newObject : org.eclipse.emf.ecore.InternalEObject = <org.eclipse.emf.ecore.InternalEObject><any>this.createGen(eClass);
            newObject.eSetStore(a.store.MyStore.INSTANCE_$LI$());
            return newObject;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} eDataType
         * @param {string} initialValue
         * @return {*}
         */
        public createFromString(eDataType : org.eclipse.emf.ecore.EDataType, initialValue : string) : any {
            switch((eDataType.getClassifierID())) {
            case sysml.statemachines.StatemachinesPackage.DUMMY:
                return this.createDummyFromString(eDataType, initialValue);
            default:
                throw Object.defineProperty(new Error("The datatype \'" + eDataType.getName() + "\' is not a valid classifier"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
            }
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} eDataType
         * @param {*} instanceValue
         * @return {string}
         */
        public convertToString(eDataType : org.eclipse.emf.ecore.EDataType, instanceValue : any) : string {
            switch((eDataType.getClassifierID())) {
            case sysml.statemachines.StatemachinesPackage.DUMMY:
                return this.convertDummyToString(eDataType, instanceValue);
            default:
                throw Object.defineProperty(new Error("The datatype \'" + eDataType.getName() + "\' is not a valid classifier"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
            }
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} eDataType
         * @param {string} initialValue
         * @return {string}
         */
        public createDummyFromString(eDataType : org.eclipse.emf.ecore.EDataType, initialValue : string) : string {
            return <string>super.createFromString(eDataType, initialValue);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} eDataType
         * @param {*} instanceValue
         * @return {string}
         */
        public convertDummyToString(eDataType : org.eclipse.emf.ecore.EDataType, instanceValue : any) : string {
            return super.convertToString(eDataType, instanceValue);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getStatemachinesPackage() : sysml.statemachines.StatemachinesPackage {
            return <sysml.statemachines.StatemachinesPackage><any>this.getEPackage();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @deprecated
         * @generated
         * @return {*}
         */
        public static getPackage() : sysml.statemachines.StatemachinesPackage {
            return sysml.statemachines.StatemachinesPackage.eINSTANCE;
        }
    }
    StatemachinesFactoryImpl["__class"] = "sysml.statemachines.impl.StatemachinesFactoryImpl";
    StatemachinesFactoryImpl["__interfaces"] = ["sysml.statemachines.StatemachinesFactory","org.eclipse.emf.ecore.EModelElement","org.eclipse.emf.ecore.EFactory","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject","org.eclipse.emf.ecore.resource.impl.BinaryResourceImpl.DataConverter.Factory"];


}

