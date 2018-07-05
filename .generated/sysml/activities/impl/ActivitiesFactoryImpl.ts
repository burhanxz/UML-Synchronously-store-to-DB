/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.activities.impl {
    /**
     * Creates an instance of the factory.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @generated
     * @class
     * @extends org.eclipse.emf.ecore.impl.EFactoryImpl
     */
    export class ActivitiesFactoryImpl extends org.eclipse.emf.ecore.impl.EFactoryImpl implements sysml.activities.ActivitiesFactory {
        /**
         * Creates the default factory implementation.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public static init() : sysml.activities.ActivitiesFactory {
            try {
                let theActivitiesFactory : sysml.activities.ActivitiesFactory = <sysml.activities.ActivitiesFactory><any>org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEFactory(sysml.activities.ActivitiesPackage.eNS_URI);
                if(theActivitiesFactory != null) {
                    return theActivitiesFactory;
                }
            } catch(exception) {
                org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.log(exception);
            };
            return new ActivitiesFactoryImpl();
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
            case sysml.activities.ActivitiesPackage.OPTIONAL:
                return this.createOptional();
            case sysml.activities.ActivitiesPackage.RATE:
                return this.createRate();
            case sysml.activities.ActivitiesPackage.PROBABILITY:
                return this.createProbability();
            case sysml.activities.ActivitiesPackage.CONTINUOUS:
                return this.createContinuous();
            case sysml.activities.ActivitiesPackage.DISCRETE:
                return this.createDiscrete();
            case sysml.activities.ActivitiesPackage.CONTROL_OPERATOR:
                return this.createControlOperator();
            case sysml.activities.ActivitiesPackage.NO_BUFFER:
                return this.createNoBuffer();
            case sysml.activities.ActivitiesPackage.OVERWRITE:
                return this.createOverwrite();
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
        public createOptional() : sysml.activities.Optional {
            let optional : sysml.activities.impl.OptionalImpl = new sysml.activities.impl.OptionalImpl();
            return optional;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createRate() : sysml.activities.Rate {
            let rate : sysml.activities.impl.RateImpl = new sysml.activities.impl.RateImpl();
            return rate;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createProbability() : sysml.activities.Probability {
            let probability : sysml.activities.impl.ProbabilityImpl = new sysml.activities.impl.ProbabilityImpl();
            return probability;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createContinuous() : sysml.activities.Continuous {
            let continuous : sysml.activities.impl.ContinuousImpl = new sysml.activities.impl.ContinuousImpl();
            return continuous;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createDiscrete() : sysml.activities.Discrete {
            let discrete : sysml.activities.impl.DiscreteImpl = new sysml.activities.impl.DiscreteImpl();
            return discrete;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createControlOperator() : sysml.activities.ControlOperator {
            let controlOperator : sysml.activities.impl.ControlOperatorImpl = new sysml.activities.impl.ControlOperatorImpl();
            return controlOperator;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createNoBuffer() : sysml.activities.NoBuffer {
            let noBuffer : sysml.activities.impl.NoBufferImpl = new sysml.activities.impl.NoBufferImpl();
            return noBuffer;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createOverwrite() : sysml.activities.Overwrite {
            let overwrite : sysml.activities.impl.OverwriteImpl = new sysml.activities.impl.OverwriteImpl();
            return overwrite;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getActivitiesPackage() : sysml.activities.ActivitiesPackage {
            return <sysml.activities.ActivitiesPackage><any>this.getEPackage();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @deprecated
         * @generated
         * @return {*}
         */
        public static getPackage() : sysml.activities.ActivitiesPackage {
            return sysml.activities.ActivitiesPackage.eINSTANCE;
        }
    }
    ActivitiesFactoryImpl["__class"] = "sysml.activities.impl.ActivitiesFactoryImpl";
    ActivitiesFactoryImpl["__interfaces"] = ["sysml.activities.ActivitiesFactory","org.eclipse.emf.ecore.EModelElement","org.eclipse.emf.ecore.EFactory","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject","org.eclipse.emf.ecore.resource.impl.BinaryResourceImpl.DataConverter.Factory"];


}

