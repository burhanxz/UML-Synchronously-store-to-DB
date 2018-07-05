/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.requirements.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Test Case</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link sysml.requirements.impl.TestCaseImpl#getBase_Behavior}</li>
     * <li>{@link sysml.requirements.impl.TestCaseImpl#getBase_Operation}</li>
     * <li>{@link sysml.requirements.impl.TestCaseImpl#getVerifies}</li>
     * </ul>
     * 
     * @generated
     * @extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl
     * @class
     */
    export class TestCaseImpl extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl implements sysml.requirements.TestCase {
        constructor() {
            super();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        eStaticClass() : org.eclipse.emf.ecore.EClass {
            return sysml.requirements.RequirementsPackage.Literals.TEST_CASE;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {number}
         */
        eStaticFeatureCount() : number {
            return 0;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getBase_Behavior() : uml.Behavior {
            return <uml.Behavior><any>this.eGet(sysml.requirements.RequirementsPackage.Literals.TEST_CASE__BASE_BEHAVIOR, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newBase_Behavior
         */
        public setBase_Behavior(newBase_Behavior : uml.Behavior) {
            this.eSet(sysml.requirements.RequirementsPackage.Literals.TEST_CASE__BASE_BEHAVIOR, newBase_Behavior);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getBase_Operation() : uml.Operation {
            return <uml.Operation><any>this.eGet(sysml.requirements.RequirementsPackage.Literals.TEST_CASE__BASE_OPERATION, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newBase_Operation
         */
        public setBase_Operation(newBase_Operation : uml.Operation) {
            this.eSet(sysml.requirements.RequirementsPackage.Literals.TEST_CASE__BASE_OPERATION, newBase_Operation);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getVerifies() : org.eclipse.emf.common.util.EList<sysml.requirements.Requirement> {
            return <org.eclipse.emf.common.util.EList<sysml.requirements.Requirement>><any>this.eGet(sysml.requirements.RequirementsPackage.Literals.TEST_CASE__VERIFIES, true);
        }
    }
    TestCaseImpl["__class"] = "sysml.requirements.impl.TestCaseImpl";
    TestCaseImpl["__interfaces"] = ["org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","sysml.requirements.TestCase","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

