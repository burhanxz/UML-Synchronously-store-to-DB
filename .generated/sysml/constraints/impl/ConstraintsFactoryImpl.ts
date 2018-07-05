/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.constraints.impl {
    /**
     * Creates an instance of the factory.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @generated
     * @class
     * @extends org.eclipse.emf.ecore.impl.EFactoryImpl
     */
    export class ConstraintsFactoryImpl extends org.eclipse.emf.ecore.impl.EFactoryImpl implements sysml.constraints.ConstraintsFactory {
        /**
         * Creates the default factory implementation.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public static init() : sysml.constraints.ConstraintsFactory {
            try {
                let theConstraintsFactory : sysml.constraints.ConstraintsFactory = <sysml.constraints.ConstraintsFactory><any>org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEFactory(sysml.constraints.ConstraintsPackage.eNS_URI);
                if(theConstraintsFactory != null) {
                    return theConstraintsFactory;
                }
            } catch(exception) {
                org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.log(exception);
            };
            return new ConstraintsFactoryImpl();
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
            case sysml.constraints.ConstraintsPackage.CONSTRAINT_BLOCK:
                return this.createConstraintBlock();
            case sysml.constraints.ConstraintsPackage.CONSTRAINT_PROPERTY:
                return this.createConstraintProperty();
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
         * @return {*}
         */
        public createConstraintBlock() : sysml.constraints.ConstraintBlock {
            let constraintBlock : sysml.constraints.impl.ConstraintBlockImpl = new sysml.constraints.impl.ConstraintBlockImpl();
            return constraintBlock;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createConstraintProperty() : sysml.constraints.ConstraintProperty {
            let constraintProperty : sysml.constraints.impl.ConstraintPropertyImpl = new sysml.constraints.impl.ConstraintPropertyImpl();
            return constraintProperty;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getConstraintsPackage() : sysml.constraints.ConstraintsPackage {
            return <sysml.constraints.ConstraintsPackage><any>this.getEPackage();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @deprecated
         * @generated
         * @return {*}
         */
        public static getPackage() : sysml.constraints.ConstraintsPackage {
            return sysml.constraints.ConstraintsPackage.eINSTANCE;
        }
    }
    ConstraintsFactoryImpl["__class"] = "sysml.constraints.impl.ConstraintsFactoryImpl";
    ConstraintsFactoryImpl["__interfaces"] = ["org.eclipse.emf.ecore.EModelElement","org.eclipse.emf.ecore.EFactory","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","sysml.constraints.ConstraintsFactory","org.eclipse.emf.ecore.EObject","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject","org.eclipse.emf.ecore.resource.impl.BinaryResourceImpl.DataConverter.Factory"];


}

