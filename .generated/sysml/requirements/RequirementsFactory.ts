/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.requirements {
    /**
     * <!-- begin-user-doc -->
     * The <b>Factory</b> for the model.
     * It provides a create method for each non-abstract class of the model.
     * <!-- end-user-doc -->
     * @see sysml.requirements.RequirementsPackage
     * @generated
     * @class
     */
    export interface RequirementsFactory extends org.eclipse.emf.ecore.EFactory {
        /**
         * Returns a new object of class '<em>Derive Reqt</em>'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} a new object of class '<em>Derive Reqt</em>'.
         * @generated
         */
        createDeriveReqt() : sysml.requirements.DeriveReqt;

        /**
         * Returns a new object of class '<em>Verify</em>'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} a new object of class '<em>Verify</em>'.
         * @generated
         */
        createVerify() : sysml.requirements.Verify;

        /**
         * Returns a new object of class '<em>Copy</em>'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} a new object of class '<em>Copy</em>'.
         * @generated
         */
        createCopy() : sysml.requirements.Copy;

        /**
         * Returns a new object of class '<em>Satisfy</em>'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} a new object of class '<em>Satisfy</em>'.
         * @generated
         */
        createSatisfy() : sysml.requirements.Satisfy;

        /**
         * Returns a new object of class '<em>Test Case</em>'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} a new object of class '<em>Test Case</em>'.
         * @generated
         */
        createTestCase() : sysml.requirements.TestCase;

        /**
         * Returns a new object of class '<em>Requirement</em>'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} a new object of class '<em>Requirement</em>'.
         * @generated
         */
        createRequirement() : sysml.requirements.Requirement;

        /**
         * Returns a new object of class '<em>Requirement Related</em>'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} a new object of class '<em>Requirement Related</em>'.
         * @generated
         */
        createRequirementRelated() : sysml.requirements.RequirementRelated;

        /**
         * Returns the package supported by this factory.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the package supported by this factory.
         * @generated
         */
        getRequirementsPackage() : sysml.requirements.RequirementsPackage;
    }

    export namespace RequirementsFactory {

        /**
         * The singleton instance of the factory.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        export let eINSTANCE : RequirementsFactory = sysml.requirements.impl.RequirementsFactoryImpl.init();
    }

}

