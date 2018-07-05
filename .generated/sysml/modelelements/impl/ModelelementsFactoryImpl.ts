/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.modelelements.impl {
    /**
     * Creates an instance of the factory.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @generated
     * @class
     * @extends org.eclipse.emf.ecore.impl.EFactoryImpl
     */
    export class ModelelementsFactoryImpl extends org.eclipse.emf.ecore.impl.EFactoryImpl implements sysml.modelelements.ModelelementsFactory {
        /**
         * Creates the default factory implementation.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public static init() : sysml.modelelements.ModelelementsFactory {
            try {
                let theModelelementsFactory : sysml.modelelements.ModelelementsFactory = <sysml.modelelements.ModelelementsFactory><any>org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEFactory(sysml.modelelements.ModelelementsPackage.eNS_URI);
                if(theModelelementsFactory != null) {
                    return theModelelementsFactory;
                }
            } catch(exception) {
                org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.log(exception);
            };
            return new ModelelementsFactoryImpl();
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
            case sysml.modelelements.ModelelementsPackage.CONFORM:
                return this.createConform();
            case sysml.modelelements.ModelelementsPackage.VIEW:
                return this.createView();
            case sysml.modelelements.ModelelementsPackage.VIEW_POINT:
                return this.createViewPoint();
            case sysml.modelelements.ModelelementsPackage.RATIONALE:
                return this.createRationale();
            case sysml.modelelements.ModelelementsPackage.PROBLEM:
                return this.createProblem();
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
        public createConform() : sysml.modelelements.Conform {
            let conform : sysml.modelelements.impl.ConformImpl = new sysml.modelelements.impl.ConformImpl();
            return conform;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createView() : sysml.modelelements.View {
            let view : sysml.modelelements.impl.ViewImpl = new sysml.modelelements.impl.ViewImpl();
            return view;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createViewPoint() : sysml.modelelements.ViewPoint {
            let viewPoint : sysml.modelelements.impl.ViewPointImpl = new sysml.modelelements.impl.ViewPointImpl();
            return viewPoint;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createRationale() : sysml.modelelements.Rationale {
            let rationale : sysml.modelelements.impl.RationaleImpl = new sysml.modelelements.impl.RationaleImpl();
            return rationale;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createProblem() : sysml.modelelements.Problem {
            let problem : sysml.modelelements.impl.ProblemImpl = new sysml.modelelements.impl.ProblemImpl();
            return problem;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getModelelementsPackage() : sysml.modelelements.ModelelementsPackage {
            return <sysml.modelelements.ModelelementsPackage><any>this.getEPackage();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @deprecated
         * @generated
         * @return {*}
         */
        public static getPackage() : sysml.modelelements.ModelelementsPackage {
            return sysml.modelelements.ModelelementsPackage.eINSTANCE;
        }
    }
    ModelelementsFactoryImpl["__class"] = "sysml.modelelements.impl.ModelelementsFactoryImpl";
    ModelelementsFactoryImpl["__interfaces"] = ["org.eclipse.emf.ecore.EModelElement","org.eclipse.emf.ecore.EFactory","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","sysml.modelelements.ModelelementsFactory","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject","org.eclipse.emf.ecore.resource.impl.BinaryResourceImpl.DataConverter.Factory"];


}

