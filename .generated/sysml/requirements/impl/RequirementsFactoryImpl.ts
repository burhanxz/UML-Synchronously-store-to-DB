/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.requirements.impl {
    /**
     * Creates an instance of the factory.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @generated
     * @class
     * @extends org.eclipse.emf.ecore.impl.EFactoryImpl
     */
    export class RequirementsFactoryImpl extends org.eclipse.emf.ecore.impl.EFactoryImpl implements sysml.requirements.RequirementsFactory {
        /**
         * Creates the default factory implementation.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public static init() : sysml.requirements.RequirementsFactory {
            try {
                let theRequirementsFactory : sysml.requirements.RequirementsFactory = <sysml.requirements.RequirementsFactory><any>org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEFactory(sysml.requirements.RequirementsPackage.eNS_URI);
                if(theRequirementsFactory != null) {
                    return theRequirementsFactory;
                }
            } catch(exception) {
                org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.log(exception);
            };
            return new RequirementsFactoryImpl();
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
            case sysml.requirements.RequirementsPackage.DERIVE_REQT:
                return this.createDeriveReqt();
            case sysml.requirements.RequirementsPackage.VERIFY:
                return this.createVerify();
            case sysml.requirements.RequirementsPackage.COPY:
                return this.createCopy();
            case sysml.requirements.RequirementsPackage.SATISFY:
                return this.createSatisfy();
            case sysml.requirements.RequirementsPackage.TEST_CASE:
                return this.createTestCase();
            case sysml.requirements.RequirementsPackage.REQUIREMENT:
                return this.createRequirement();
            case sysml.requirements.RequirementsPackage.REQUIREMENT_RELATED:
                return this.createRequirementRelated();
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
        public createDeriveReqt() : sysml.requirements.DeriveReqt {
            let deriveReqt : sysml.requirements.impl.DeriveReqtImpl = new sysml.requirements.impl.DeriveReqtImpl();
            return deriveReqt;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createVerify() : sysml.requirements.Verify {
            let verify : sysml.requirements.impl.VerifyImpl = new sysml.requirements.impl.VerifyImpl();
            return verify;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createCopy() : sysml.requirements.Copy {
            let copy : sysml.requirements.impl.CopyImpl = new sysml.requirements.impl.CopyImpl();
            return copy;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createSatisfy() : sysml.requirements.Satisfy {
            let satisfy : sysml.requirements.impl.SatisfyImpl = new sysml.requirements.impl.SatisfyImpl();
            return satisfy;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createTestCase() : sysml.requirements.TestCase {
            let testCase : sysml.requirements.impl.TestCaseImpl = new sysml.requirements.impl.TestCaseImpl();
            return testCase;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createRequirement() : sysml.requirements.Requirement {
            let requirement : sysml.requirements.impl.RequirementImpl = new sysml.requirements.impl.RequirementImpl();
            return requirement;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createRequirementRelated() : sysml.requirements.RequirementRelated {
            let requirementRelated : sysml.requirements.impl.RequirementRelatedImpl = new sysml.requirements.impl.RequirementRelatedImpl();
            return requirementRelated;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getRequirementsPackage() : sysml.requirements.RequirementsPackage {
            return <sysml.requirements.RequirementsPackage><any>this.getEPackage();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @deprecated
         * @generated
         * @return {*}
         */
        public static getPackage() : sysml.requirements.RequirementsPackage {
            return sysml.requirements.RequirementsPackage.eINSTANCE;
        }
    }
    RequirementsFactoryImpl["__class"] = "sysml.requirements.impl.RequirementsFactoryImpl";
    RequirementsFactoryImpl["__interfaces"] = ["org.eclipse.emf.ecore.EModelElement","org.eclipse.emf.ecore.EFactory","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject","sysml.requirements.RequirementsFactory","org.eclipse.emf.ecore.resource.impl.BinaryResourceImpl.DataConverter.Factory"];


}

