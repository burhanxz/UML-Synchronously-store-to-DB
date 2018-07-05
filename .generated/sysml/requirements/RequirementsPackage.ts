/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.requirements {
    /**
     * <!-- begin-user-doc -->
     * The <b>Package</b> for the model.
     * It contains accessors for the meta objects to represent
     * <ul>
     * <li>each class,</li>
     * <li>each feature of each class,</li>
     * <li>each operation of each class,</li>
     * <li>each enum,</li>
     * <li>and each data type</li>
     * </ul>
     * <!-- end-user-doc -->
     * @see sysml.requirements.RequirementsFactory
     * @model kind="package"
     * @generated
     * @class
     */
    export interface RequirementsPackage extends org.eclipse.emf.ecore.EPackage {
        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Derive Reqt</em>'.
         * @see sysml.requirements.DeriveReqt
         * @generated
         */
        getDeriveReqt() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Verify</em>'.
         * @see sysml.requirements.Verify
         * @generated
         */
        getVerify() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Copy</em>'.
         * @see sysml.requirements.Copy
         * @generated
         */
        getCopy() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Satisfy</em>'.
         * @see sysml.requirements.Satisfy
         * @generated
         */
        getSatisfy() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Test Case</em>'.
         * @see sysml.requirements.TestCase
         * @generated
         */
        getTestCase() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for the reference '{@link sysml.requirements.TestCase#getBase_Behavior}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Behavior</em>'.
         * @see sysml.requirements.TestCase#getBase_Behavior()
         * @see #getTestCase()
         * @generated
         */
        getTestCase_Base_Behavior() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for the reference '{@link sysml.requirements.TestCase#getBase_Operation}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Operation</em>'.
         * @see sysml.requirements.TestCase#getBase_Operation()
         * @see #getTestCase()
         * @generated
         */
        getTestCase_Base_Operation() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for the reference list '{@link sysml.requirements.TestCase#getVerifies}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference list '<em>Verifies</em>'.
         * @see sysml.requirements.TestCase#getVerifies()
         * @see #getTestCase()
         * @generated
         */
        getTestCase_Verifies() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Requirement</em>'.
         * @see sysml.requirements.Requirement
         * @generated
         */
        getRequirement() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for the attribute '{@link sysml.requirements.Requirement#getText}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the attribute '<em>Text</em>'.
         * @see sysml.requirements.Requirement#getText()
         * @see #getRequirement()
         * @generated
         */
        getRequirement_Text() : org.eclipse.emf.ecore.EAttribute;

        /**
         * Returns the meta object for the attribute '{@link sysml.requirements.Requirement#getId}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the attribute '<em>Id</em>'.
         * @see sysml.requirements.Requirement#getId()
         * @see #getRequirement()
         * @generated
         */
        getRequirement_Id() : org.eclipse.emf.ecore.EAttribute;

        /**
         * Returns the meta object for the reference list '{@link sysml.requirements.Requirement#getDerived}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference list '<em>Derived</em>'.
         * @see sysml.requirements.Requirement#getDerived()
         * @see #getRequirement()
         * @generated
         */
        getRequirement_Derived() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for the reference list '{@link sysml.requirements.Requirement#getDerivedFrom}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference list '<em>Derived From</em>'.
         * @see sysml.requirements.Requirement#getDerivedFrom()
         * @see #getRequirement()
         * @generated
         */
        getRequirement_DerivedFrom() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for the reference list '{@link sysml.requirements.Requirement#getSatisfiedBy}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference list '<em>Satisfied By</em>'.
         * @see sysml.requirements.Requirement#getSatisfiedBy()
         * @see #getRequirement()
         * @generated
         */
        getRequirement_SatisfiedBy() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for the reference list '{@link sysml.requirements.Requirement#getRefinedBy}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference list '<em>Refined By</em>'.
         * @see sysml.requirements.Requirement#getRefinedBy()
         * @see #getRequirement()
         * @generated
         */
        getRequirement_RefinedBy() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for the reference list '{@link sysml.requirements.Requirement#getTracedTo}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference list '<em>Traced To</em>'.
         * @see sysml.requirements.Requirement#getTracedTo()
         * @see #getRequirement()
         * @generated
         */
        getRequirement_TracedTo() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for the reference list '{@link sysml.requirements.Requirement#getVerifiedBy}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference list '<em>Verified By</em>'.
         * @see sysml.requirements.Requirement#getVerifiedBy()
         * @see #getRequirement()
         * @generated
         */
        getRequirement_VerifiedBy() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for the reference '{@link sysml.requirements.Requirement#getMaster}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Master</em>'.
         * @see sysml.requirements.Requirement#getMaster()
         * @see #getRequirement()
         * @generated
         */
        getRequirement_Master() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for the reference '{@link sysml.requirements.Requirement#getBase_Class}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Class</em>'.
         * @see sysml.requirements.Requirement#getBase_Class()
         * @see #getRequirement()
         * @generated
         */
        getRequirement_Base_Class() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Requirement Related</em>'.
         * @see sysml.requirements.RequirementRelated
         * @generated
         */
        getRequirementRelated() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for the reference '{@link sysml.requirements.RequirementRelated#getBase_NamedElement}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Named Element</em>'.
         * @see sysml.requirements.RequirementRelated#getBase_NamedElement()
         * @see #getRequirementRelated()
         * @generated
         */
        getRequirementRelated_Base_NamedElement() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for the reference list '{@link sysml.requirements.RequirementRelated#getTracedFrom}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference list '<em>Traced From</em>'.
         * @see sysml.requirements.RequirementRelated#getTracedFrom()
         * @see #getRequirementRelated()
         * @generated
         */
        getRequirementRelated_TracedFrom() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for the reference list '{@link sysml.requirements.RequirementRelated#getSatisfies}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference list '<em>Satisfies</em>'.
         * @see sysml.requirements.RequirementRelated#getSatisfies()
         * @see #getRequirementRelated()
         * @generated
         */
        getRequirementRelated_Satisfies() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for the reference list '{@link sysml.requirements.RequirementRelated#getRefines}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference list '<em>Refines</em>'.
         * @see sysml.requirements.RequirementRelated#getRefines()
         * @see #getRequirementRelated()
         * @generated
         */
        getRequirementRelated_Refines() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for the reference list '{@link sysml.requirements.RequirementRelated#getVerifies}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference list '<em>Verifies</em>'.
         * @see sysml.requirements.RequirementRelated#getVerifies()
         * @see #getRequirementRelated()
         * @generated
         */
        getRequirementRelated_Verifies() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the factory that creates the instances of the model.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the factory that creates the instances of the model.
         * @generated
         */
        getRequirementsFactory() : sysml.requirements.RequirementsFactory;
    }

    export namespace RequirementsPackage {

        /**
         * The package name.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        export let eNAME : string = "requirements";

        /**
         * The package namespace URI.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        export let eNS_URI : string = "http://www.eclipse.org/papyrus/0.7.0/SysML/Requirements";

        /**
         * The package namespace name.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        export let eNS_PREFIX : string = "Requirements";

        /**
         * The singleton instance of the package.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        export let eINSTANCE : RequirementsPackage = sysml.requirements.impl.RequirementsPackageImpl.init();

        /**
         * The meta object id for the '{@link sysml.requirements.impl.DeriveReqtImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see sysml.requirements.impl.DeriveReqtImpl
         * @see sysml.requirements.impl.RequirementsPackageImpl#getDeriveReqt()
         * @generated
         */
        export let DERIVE_REQT : number = 0;

        /**
         * The feature id for the '<em><b>Base Abstraction</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let DERIVE_REQT__BASE_ABSTRACTION : number = standard.StandardPackage.TRACE__BASE_ABSTRACTION;

        /**
         * The number of structural features of the '<em>Derive Reqt</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let DERIVE_REQT_FEATURE_COUNT : number = standard.StandardPackage.TRACE_FEATURE_COUNT + 0;

        /**
         * The number of operations of the '<em>Derive Reqt</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let DERIVE_REQT_OPERATION_COUNT : number = standard.StandardPackage.TRACE_OPERATION_COUNT + 0;

        /**
         * The meta object id for the '{@link sysml.requirements.impl.VerifyImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see sysml.requirements.impl.VerifyImpl
         * @see sysml.requirements.impl.RequirementsPackageImpl#getVerify()
         * @generated
         */
        export let VERIFY : number = 1;

        /**
         * The feature id for the '<em><b>Base Abstraction</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let VERIFY__BASE_ABSTRACTION : number = standard.StandardPackage.TRACE__BASE_ABSTRACTION;

        /**
         * The number of structural features of the '<em>Verify</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let VERIFY_FEATURE_COUNT : number = standard.StandardPackage.TRACE_FEATURE_COUNT + 0;

        /**
         * The number of operations of the '<em>Verify</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let VERIFY_OPERATION_COUNT : number = standard.StandardPackage.TRACE_OPERATION_COUNT + 0;

        /**
         * The meta object id for the '{@link sysml.requirements.impl.CopyImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see sysml.requirements.impl.CopyImpl
         * @see sysml.requirements.impl.RequirementsPackageImpl#getCopy()
         * @generated
         */
        export let COPY : number = 2;

        /**
         * The feature id for the '<em><b>Base Abstraction</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let COPY__BASE_ABSTRACTION : number = standard.StandardPackage.TRACE__BASE_ABSTRACTION;

        /**
         * The number of structural features of the '<em>Copy</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let COPY_FEATURE_COUNT : number = standard.StandardPackage.TRACE_FEATURE_COUNT + 0;

        /**
         * The number of operations of the '<em>Copy</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let COPY_OPERATION_COUNT : number = standard.StandardPackage.TRACE_OPERATION_COUNT + 0;

        /**
         * The meta object id for the '{@link sysml.requirements.impl.SatisfyImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see sysml.requirements.impl.SatisfyImpl
         * @see sysml.requirements.impl.RequirementsPackageImpl#getSatisfy()
         * @generated
         */
        export let SATISFY : number = 3;

        /**
         * The feature id for the '<em><b>Base Abstraction</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let SATISFY__BASE_ABSTRACTION : number = standard.StandardPackage.TRACE__BASE_ABSTRACTION;

        /**
         * The number of structural features of the '<em>Satisfy</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let SATISFY_FEATURE_COUNT : number = standard.StandardPackage.TRACE_FEATURE_COUNT + 0;

        /**
         * The number of operations of the '<em>Satisfy</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let SATISFY_OPERATION_COUNT : number = standard.StandardPackage.TRACE_OPERATION_COUNT + 0;

        /**
         * The meta object id for the '{@link sysml.requirements.impl.TestCaseImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see sysml.requirements.impl.TestCaseImpl
         * @see sysml.requirements.impl.RequirementsPackageImpl#getTestCase()
         * @generated
         */
        export let TEST_CASE : number = 4;

        /**
         * The feature id for the '<em><b>Base Behavior</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let TEST_CASE__BASE_BEHAVIOR : number = 0;

        /**
         * The feature id for the '<em><b>Base Operation</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let TEST_CASE__BASE_OPERATION : number = 1;

        /**
         * The feature id for the '<em><b>Verifies</b></em>' reference list.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let TEST_CASE__VERIFIES : number = 2;

        /**
         * The number of structural features of the '<em>Test Case</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let TEST_CASE_FEATURE_COUNT : number = 3;

        /**
         * The number of operations of the '<em>Test Case</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let TEST_CASE_OPERATION_COUNT : number = 0;

        /**
         * The meta object id for the '{@link sysml.requirements.impl.RequirementImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see sysml.requirements.impl.RequirementImpl
         * @see sysml.requirements.impl.RequirementsPackageImpl#getRequirement()
         * @generated
         */
        export let REQUIREMENT : number = 5;

        /**
         * The feature id for the '<em><b>Text</b></em>' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let REQUIREMENT__TEXT : number = 0;

        /**
         * The feature id for the '<em><b>Id</b></em>' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let REQUIREMENT__ID : number = 1;

        /**
         * The feature id for the '<em><b>Derived</b></em>' reference list.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let REQUIREMENT__DERIVED : number = 2;

        /**
         * The feature id for the '<em><b>Derived From</b></em>' reference list.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let REQUIREMENT__DERIVED_FROM : number = 3;

        /**
         * The feature id for the '<em><b>Satisfied By</b></em>' reference list.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let REQUIREMENT__SATISFIED_BY : number = 4;

        /**
         * The feature id for the '<em><b>Refined By</b></em>' reference list.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let REQUIREMENT__REFINED_BY : number = 5;

        /**
         * The feature id for the '<em><b>Traced To</b></em>' reference list.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let REQUIREMENT__TRACED_TO : number = 6;

        /**
         * The feature id for the '<em><b>Verified By</b></em>' reference list.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let REQUIREMENT__VERIFIED_BY : number = 7;

        /**
         * The feature id for the '<em><b>Master</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let REQUIREMENT__MASTER : number = 8;

        /**
         * The feature id for the '<em><b>Base Class</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let REQUIREMENT__BASE_CLASS : number = 9;

        /**
         * The number of structural features of the '<em>Requirement</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let REQUIREMENT_FEATURE_COUNT : number = 10;

        /**
         * The number of operations of the '<em>Requirement</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let REQUIREMENT_OPERATION_COUNT : number = 0;

        /**
         * The meta object id for the '{@link sysml.requirements.impl.RequirementRelatedImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see sysml.requirements.impl.RequirementRelatedImpl
         * @see sysml.requirements.impl.RequirementsPackageImpl#getRequirementRelated()
         * @generated
         */
        export let REQUIREMENT_RELATED : number = 6;

        /**
         * The feature id for the '<em><b>Base Named Element</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let REQUIREMENT_RELATED__BASE_NAMED_ELEMENT : number = 0;

        /**
         * The feature id for the '<em><b>Traced From</b></em>' reference list.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let REQUIREMENT_RELATED__TRACED_FROM : number = 1;

        /**
         * The feature id for the '<em><b>Satisfies</b></em>' reference list.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let REQUIREMENT_RELATED__SATISFIES : number = 2;

        /**
         * The feature id for the '<em><b>Refines</b></em>' reference list.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let REQUIREMENT_RELATED__REFINES : number = 3;

        /**
         * The feature id for the '<em><b>Verifies</b></em>' reference list.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let REQUIREMENT_RELATED__VERIFIES : number = 4;

        /**
         * The number of structural features of the '<em>Requirement Related</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let REQUIREMENT_RELATED_FEATURE_COUNT : number = 5;

        /**
         * The number of operations of the '<em>Requirement Related</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let REQUIREMENT_RELATED_OPERATION_COUNT : number = 0;
    }


    export namespace RequirementsPackage {

        /**
         * <!-- begin-user-doc -->
         * Defines literals for the meta objects that represent
         * <ul>
         * <li>each class,</li>
         * <li>each feature of each class,</li>
         * <li>each operation of each class,</li>
         * <li>each enum,</li>
         * <li>and each data type</li>
         * </ul>
         * <!-- end-user-doc -->
         * @generated
         * @class
         */
        export interface Literals {        }

        export namespace Literals {

            /**
             * The meta object literal for the '{@link sysml.requirements.impl.DeriveReqtImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see sysml.requirements.impl.DeriveReqtImpl
             * @see sysml.requirements.impl.RequirementsPackageImpl#getDeriveReqt()
             * @generated
             */
            export let DERIVE_REQT : org.eclipse.emf.ecore.EClass = sysml.requirements.RequirementsPackage.eINSTANCE.getDeriveReqt();

            /**
             * The meta object literal for the '{@link sysml.requirements.impl.VerifyImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see sysml.requirements.impl.VerifyImpl
             * @see sysml.requirements.impl.RequirementsPackageImpl#getVerify()
             * @generated
             */
            export let VERIFY : org.eclipse.emf.ecore.EClass = sysml.requirements.RequirementsPackage.eINSTANCE.getVerify();

            /**
             * The meta object literal for the '{@link sysml.requirements.impl.CopyImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see sysml.requirements.impl.CopyImpl
             * @see sysml.requirements.impl.RequirementsPackageImpl#getCopy()
             * @generated
             */
            export let COPY : org.eclipse.emf.ecore.EClass = sysml.requirements.RequirementsPackage.eINSTANCE.getCopy();

            /**
             * The meta object literal for the '{@link sysml.requirements.impl.SatisfyImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see sysml.requirements.impl.SatisfyImpl
             * @see sysml.requirements.impl.RequirementsPackageImpl#getSatisfy()
             * @generated
             */
            export let SATISFY : org.eclipse.emf.ecore.EClass = sysml.requirements.RequirementsPackage.eINSTANCE.getSatisfy();

            /**
             * The meta object literal for the '{@link sysml.requirements.impl.TestCaseImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see sysml.requirements.impl.TestCaseImpl
             * @see sysml.requirements.impl.RequirementsPackageImpl#getTestCase()
             * @generated
             */
            export let TEST_CASE : org.eclipse.emf.ecore.EClass = sysml.requirements.RequirementsPackage.eINSTANCE.getTestCase();

            /**
             * The meta object literal for the '<em><b>Base Behavior</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let TEST_CASE__BASE_BEHAVIOR : org.eclipse.emf.ecore.EReference = sysml.requirements.RequirementsPackage.eINSTANCE.getTestCase_Base_Behavior();

            /**
             * The meta object literal for the '<em><b>Base Operation</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let TEST_CASE__BASE_OPERATION : org.eclipse.emf.ecore.EReference = sysml.requirements.RequirementsPackage.eINSTANCE.getTestCase_Base_Operation();

            /**
             * The meta object literal for the '<em><b>Verifies</b></em>' reference list feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let TEST_CASE__VERIFIES : org.eclipse.emf.ecore.EReference = sysml.requirements.RequirementsPackage.eINSTANCE.getTestCase_Verifies();

            /**
             * The meta object literal for the '{@link sysml.requirements.impl.RequirementImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see sysml.requirements.impl.RequirementImpl
             * @see sysml.requirements.impl.RequirementsPackageImpl#getRequirement()
             * @generated
             */
            export let REQUIREMENT : org.eclipse.emf.ecore.EClass = sysml.requirements.RequirementsPackage.eINSTANCE.getRequirement();

            /**
             * The meta object literal for the '<em><b>Text</b></em>' attribute feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let REQUIREMENT__TEXT : org.eclipse.emf.ecore.EAttribute = sysml.requirements.RequirementsPackage.eINSTANCE.getRequirement_Text();

            /**
             * The meta object literal for the '<em><b>Id</b></em>' attribute feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let REQUIREMENT__ID : org.eclipse.emf.ecore.EAttribute = sysml.requirements.RequirementsPackage.eINSTANCE.getRequirement_Id();

            /**
             * The meta object literal for the '<em><b>Derived</b></em>' reference list feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let REQUIREMENT__DERIVED : org.eclipse.emf.ecore.EReference = sysml.requirements.RequirementsPackage.eINSTANCE.getRequirement_Derived();

            /**
             * The meta object literal for the '<em><b>Derived From</b></em>' reference list feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let REQUIREMENT__DERIVED_FROM : org.eclipse.emf.ecore.EReference = sysml.requirements.RequirementsPackage.eINSTANCE.getRequirement_DerivedFrom();

            /**
             * The meta object literal for the '<em><b>Satisfied By</b></em>' reference list feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let REQUIREMENT__SATISFIED_BY : org.eclipse.emf.ecore.EReference = sysml.requirements.RequirementsPackage.eINSTANCE.getRequirement_SatisfiedBy();

            /**
             * The meta object literal for the '<em><b>Refined By</b></em>' reference list feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let REQUIREMENT__REFINED_BY : org.eclipse.emf.ecore.EReference = sysml.requirements.RequirementsPackage.eINSTANCE.getRequirement_RefinedBy();

            /**
             * The meta object literal for the '<em><b>Traced To</b></em>' reference list feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let REQUIREMENT__TRACED_TO : org.eclipse.emf.ecore.EReference = sysml.requirements.RequirementsPackage.eINSTANCE.getRequirement_TracedTo();

            /**
             * The meta object literal for the '<em><b>Verified By</b></em>' reference list feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let REQUIREMENT__VERIFIED_BY : org.eclipse.emf.ecore.EReference = sysml.requirements.RequirementsPackage.eINSTANCE.getRequirement_VerifiedBy();

            /**
             * The meta object literal for the '<em><b>Master</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let REQUIREMENT__MASTER : org.eclipse.emf.ecore.EReference = sysml.requirements.RequirementsPackage.eINSTANCE.getRequirement_Master();

            /**
             * The meta object literal for the '<em><b>Base Class</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let REQUIREMENT__BASE_CLASS : org.eclipse.emf.ecore.EReference = sysml.requirements.RequirementsPackage.eINSTANCE.getRequirement_Base_Class();

            /**
             * The meta object literal for the '{@link sysml.requirements.impl.RequirementRelatedImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see sysml.requirements.impl.RequirementRelatedImpl
             * @see sysml.requirements.impl.RequirementsPackageImpl#getRequirementRelated()
             * @generated
             */
            export let REQUIREMENT_RELATED : org.eclipse.emf.ecore.EClass = sysml.requirements.RequirementsPackage.eINSTANCE.getRequirementRelated();

            /**
             * The meta object literal for the '<em><b>Base Named Element</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let REQUIREMENT_RELATED__BASE_NAMED_ELEMENT : org.eclipse.emf.ecore.EReference = sysml.requirements.RequirementsPackage.eINSTANCE.getRequirementRelated_Base_NamedElement();

            /**
             * The meta object literal for the '<em><b>Traced From</b></em>' reference list feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let REQUIREMENT_RELATED__TRACED_FROM : org.eclipse.emf.ecore.EReference = sysml.requirements.RequirementsPackage.eINSTANCE.getRequirementRelated_TracedFrom();

            /**
             * The meta object literal for the '<em><b>Satisfies</b></em>' reference list feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let REQUIREMENT_RELATED__SATISFIES : org.eclipse.emf.ecore.EReference = sysml.requirements.RequirementsPackage.eINSTANCE.getRequirementRelated_Satisfies();

            /**
             * The meta object literal for the '<em><b>Refines</b></em>' reference list feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let REQUIREMENT_RELATED__REFINES : org.eclipse.emf.ecore.EReference = sysml.requirements.RequirementsPackage.eINSTANCE.getRequirementRelated_Refines();

            /**
             * The meta object literal for the '<em><b>Verifies</b></em>' reference list feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let REQUIREMENT_RELATED__VERIFIES : org.eclipse.emf.ecore.EReference = sysml.requirements.RequirementsPackage.eINSTANCE.getRequirementRelated_Verifies();
        }

    }

}

