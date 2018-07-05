/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.modelelements {
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
     * <!-- begin-model-doc -->
     * The supplier/target must be an element stereotyped by <<ViewPoint>>
     * The client/source must be an element stereotyped by <<View>>
     * <!-- end-model-doc -->
     * @see sysml.modelelements.ModelelementsFactory
     * @model kind="package"
     * @generated
     * @class
     */
    export interface ModelelementsPackage extends org.eclipse.emf.ecore.EPackage {
        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Conform</em>'.
         * @see sysml.modelelements.Conform
         * @generated
         */
        getConform() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for the reference '{@link sysml.modelelements.Conform#getBase_Dependency}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Dependency</em>'.
         * @see sysml.modelelements.Conform#getBase_Dependency()
         * @see #getConform()
         * @generated
         */
        getConform_Base_Dependency() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>View</em>'.
         * @see sysml.modelelements.View
         * @generated
         */
        getView() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for the reference '{@link sysml.modelelements.View#getViewPoint}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>View Point</em>'.
         * @see sysml.modelelements.View#getViewPoint()
         * @see #getView()
         * @generated
         */
        getView_ViewPoint() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for the reference '{@link sysml.modelelements.View#getBase_Package}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Package</em>'.
         * @see sysml.modelelements.View#getBase_Package()
         * @see #getView()
         * @generated
         */
        getView_Base_Package() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>View Point</em>'.
         * @see sysml.modelelements.ViewPoint
         * @generated
         */
        getViewPoint() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for the reference '{@link sysml.modelelements.ViewPoint#getBase_Class}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Class</em>'.
         * @see sysml.modelelements.ViewPoint#getBase_Class()
         * @see #getViewPoint()
         * @generated
         */
        getViewPoint_Base_Class() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for the attribute list '{@link sysml.modelelements.ViewPoint#getStakeHolders}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the attribute list '<em>Stake Holders</em>'.
         * @see sysml.modelelements.ViewPoint#getStakeHolders()
         * @see #getViewPoint()
         * @generated
         */
        getViewPoint_StakeHolders() : org.eclipse.emf.ecore.EAttribute;

        /**
         * Returns the meta object for the attribute '{@link sysml.modelelements.ViewPoint#getPurpose}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the attribute '<em>Purpose</em>'.
         * @see sysml.modelelements.ViewPoint#getPurpose()
         * @see #getViewPoint()
         * @generated
         */
        getViewPoint_Purpose() : org.eclipse.emf.ecore.EAttribute;

        /**
         * Returns the meta object for the attribute list '{@link sysml.modelelements.ViewPoint#getConcerns}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the attribute list '<em>Concerns</em>'.
         * @see sysml.modelelements.ViewPoint#getConcerns()
         * @see #getViewPoint()
         * @generated
         */
        getViewPoint_Concerns() : org.eclipse.emf.ecore.EAttribute;

        /**
         * Returns the meta object for the attribute list '{@link sysml.modelelements.ViewPoint#getLanguages}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the attribute list '<em>Languages</em>'.
         * @see sysml.modelelements.ViewPoint#getLanguages()
         * @see #getViewPoint()
         * @generated
         */
        getViewPoint_Languages() : org.eclipse.emf.ecore.EAttribute;

        /**
         * Returns the meta object for the attribute list '{@link sysml.modelelements.ViewPoint#getMethods}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the attribute list '<em>Methods</em>'.
         * @see sysml.modelelements.ViewPoint#getMethods()
         * @see #getViewPoint()
         * @generated
         */
        getViewPoint_Methods() : org.eclipse.emf.ecore.EAttribute;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Rationale</em>'.
         * @see sysml.modelelements.Rationale
         * @generated
         */
        getRationale() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for the reference '{@link sysml.modelelements.Rationale#getBase_Comment}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Comment</em>'.
         * @see sysml.modelelements.Rationale#getBase_Comment()
         * @see #getRationale()
         * @generated
         */
        getRationale_Base_Comment() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Problem</em>'.
         * @see sysml.modelelements.Problem
         * @generated
         */
        getProblem() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for the reference '{@link sysml.modelelements.Problem#getBase_Comment}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Comment</em>'.
         * @see sysml.modelelements.Problem#getBase_Comment()
         * @see #getProblem()
         * @generated
         */
        getProblem_Base_Comment() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the factory that creates the instances of the model.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the factory that creates the instances of the model.
         * @generated
         */
        getModelelementsFactory() : sysml.modelelements.ModelelementsFactory;
    }

    export namespace ModelelementsPackage {

        /**
         * The package name.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        export let eNAME : string = "modelelements";

        /**
         * The package namespace URI.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        export let eNS_URI : string = "http://www.eclipse.org/papyrus/0.7.0/SysML/ModelElements";

        /**
         * The package namespace name.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        export let eNS_PREFIX : string = "ModelElements";

        /**
         * The singleton instance of the package.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        export let eINSTANCE : ModelelementsPackage = sysml.modelelements.impl.ModelelementsPackageImpl.init();

        /**
         * The meta object id for the '{@link sysml.modelelements.impl.ConformImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see sysml.modelelements.impl.ConformImpl
         * @see sysml.modelelements.impl.ModelelementsPackageImpl#getConform()
         * @generated
         */
        export let CONFORM : number = 0;

        /**
         * The feature id for the '<em><b>Base Dependency</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let CONFORM__BASE_DEPENDENCY : number = 0;

        /**
         * The number of structural features of the '<em>Conform</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let CONFORM_FEATURE_COUNT : number = 1;

        /**
         * The number of operations of the '<em>Conform</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let CONFORM_OPERATION_COUNT : number = 0;

        /**
         * The meta object id for the '{@link sysml.modelelements.impl.ViewImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see sysml.modelelements.impl.ViewImpl
         * @see sysml.modelelements.impl.ModelelementsPackageImpl#getView()
         * @generated
         */
        export let VIEW : number = 1;

        /**
         * The feature id for the '<em><b>View Point</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let VIEW__VIEW_POINT : number = 0;

        /**
         * The feature id for the '<em><b>Base Package</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let VIEW__BASE_PACKAGE : number = 1;

        /**
         * The number of structural features of the '<em>View</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let VIEW_FEATURE_COUNT : number = 2;

        /**
         * The number of operations of the '<em>View</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let VIEW_OPERATION_COUNT : number = 0;

        /**
         * The meta object id for the '{@link sysml.modelelements.impl.ViewPointImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see sysml.modelelements.impl.ViewPointImpl
         * @see sysml.modelelements.impl.ModelelementsPackageImpl#getViewPoint()
         * @generated
         */
        export let VIEW_POINT : number = 2;

        /**
         * The feature id for the '<em><b>Base Class</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let VIEW_POINT__BASE_CLASS : number = 0;

        /**
         * The feature id for the '<em><b>Stake Holders</b></em>' attribute list.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let VIEW_POINT__STAKE_HOLDERS : number = 1;

        /**
         * The feature id for the '<em><b>Purpose</b></em>' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let VIEW_POINT__PURPOSE : number = 2;

        /**
         * The feature id for the '<em><b>Concerns</b></em>' attribute list.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let VIEW_POINT__CONCERNS : number = 3;

        /**
         * The feature id for the '<em><b>Languages</b></em>' attribute list.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let VIEW_POINT__LANGUAGES : number = 4;

        /**
         * The feature id for the '<em><b>Methods</b></em>' attribute list.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let VIEW_POINT__METHODS : number = 5;

        /**
         * The number of structural features of the '<em>View Point</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let VIEW_POINT_FEATURE_COUNT : number = 6;

        /**
         * The number of operations of the '<em>View Point</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let VIEW_POINT_OPERATION_COUNT : number = 0;

        /**
         * The meta object id for the '{@link sysml.modelelements.impl.RationaleImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see sysml.modelelements.impl.RationaleImpl
         * @see sysml.modelelements.impl.ModelelementsPackageImpl#getRationale()
         * @generated
         */
        export let RATIONALE : number = 3;

        /**
         * The feature id for the '<em><b>Base Comment</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let RATIONALE__BASE_COMMENT : number = 0;

        /**
         * The number of structural features of the '<em>Rationale</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let RATIONALE_FEATURE_COUNT : number = 1;

        /**
         * The number of operations of the '<em>Rationale</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let RATIONALE_OPERATION_COUNT : number = 0;

        /**
         * The meta object id for the '{@link sysml.modelelements.impl.ProblemImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see sysml.modelelements.impl.ProblemImpl
         * @see sysml.modelelements.impl.ModelelementsPackageImpl#getProblem()
         * @generated
         */
        export let PROBLEM : number = 4;

        /**
         * The feature id for the '<em><b>Base Comment</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let PROBLEM__BASE_COMMENT : number = 0;

        /**
         * The number of structural features of the '<em>Problem</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let PROBLEM_FEATURE_COUNT : number = 1;

        /**
         * The number of operations of the '<em>Problem</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let PROBLEM_OPERATION_COUNT : number = 0;
    }


    export namespace ModelelementsPackage {

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
             * The meta object literal for the '{@link sysml.modelelements.impl.ConformImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see sysml.modelelements.impl.ConformImpl
             * @see sysml.modelelements.impl.ModelelementsPackageImpl#getConform()
             * @generated
             */
            export let CONFORM : org.eclipse.emf.ecore.EClass = sysml.modelelements.ModelelementsPackage.eINSTANCE.getConform();

            /**
             * The meta object literal for the '<em><b>Base Dependency</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let CONFORM__BASE_DEPENDENCY : org.eclipse.emf.ecore.EReference = sysml.modelelements.ModelelementsPackage.eINSTANCE.getConform_Base_Dependency();

            /**
             * The meta object literal for the '{@link sysml.modelelements.impl.ViewImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see sysml.modelelements.impl.ViewImpl
             * @see sysml.modelelements.impl.ModelelementsPackageImpl#getView()
             * @generated
             */
            export let VIEW : org.eclipse.emf.ecore.EClass = sysml.modelelements.ModelelementsPackage.eINSTANCE.getView();

            /**
             * The meta object literal for the '<em><b>View Point</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let VIEW__VIEW_POINT : org.eclipse.emf.ecore.EReference = sysml.modelelements.ModelelementsPackage.eINSTANCE.getView_ViewPoint();

            /**
             * The meta object literal for the '<em><b>Base Package</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let VIEW__BASE_PACKAGE : org.eclipse.emf.ecore.EReference = sysml.modelelements.ModelelementsPackage.eINSTANCE.getView_Base_Package();

            /**
             * The meta object literal for the '{@link sysml.modelelements.impl.ViewPointImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see sysml.modelelements.impl.ViewPointImpl
             * @see sysml.modelelements.impl.ModelelementsPackageImpl#getViewPoint()
             * @generated
             */
            export let VIEW_POINT : org.eclipse.emf.ecore.EClass = sysml.modelelements.ModelelementsPackage.eINSTANCE.getViewPoint();

            /**
             * The meta object literal for the '<em><b>Base Class</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let VIEW_POINT__BASE_CLASS : org.eclipse.emf.ecore.EReference = sysml.modelelements.ModelelementsPackage.eINSTANCE.getViewPoint_Base_Class();

            /**
             * The meta object literal for the '<em><b>Stake Holders</b></em>' attribute list feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let VIEW_POINT__STAKE_HOLDERS : org.eclipse.emf.ecore.EAttribute = sysml.modelelements.ModelelementsPackage.eINSTANCE.getViewPoint_StakeHolders();

            /**
             * The meta object literal for the '<em><b>Purpose</b></em>' attribute feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let VIEW_POINT__PURPOSE : org.eclipse.emf.ecore.EAttribute = sysml.modelelements.ModelelementsPackage.eINSTANCE.getViewPoint_Purpose();

            /**
             * The meta object literal for the '<em><b>Concerns</b></em>' attribute list feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let VIEW_POINT__CONCERNS : org.eclipse.emf.ecore.EAttribute = sysml.modelelements.ModelelementsPackage.eINSTANCE.getViewPoint_Concerns();

            /**
             * The meta object literal for the '<em><b>Languages</b></em>' attribute list feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let VIEW_POINT__LANGUAGES : org.eclipse.emf.ecore.EAttribute = sysml.modelelements.ModelelementsPackage.eINSTANCE.getViewPoint_Languages();

            /**
             * The meta object literal for the '<em><b>Methods</b></em>' attribute list feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let VIEW_POINT__METHODS : org.eclipse.emf.ecore.EAttribute = sysml.modelelements.ModelelementsPackage.eINSTANCE.getViewPoint_Methods();

            /**
             * The meta object literal for the '{@link sysml.modelelements.impl.RationaleImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see sysml.modelelements.impl.RationaleImpl
             * @see sysml.modelelements.impl.ModelelementsPackageImpl#getRationale()
             * @generated
             */
            export let RATIONALE : org.eclipse.emf.ecore.EClass = sysml.modelelements.ModelelementsPackage.eINSTANCE.getRationale();

            /**
             * The meta object literal for the '<em><b>Base Comment</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let RATIONALE__BASE_COMMENT : org.eclipse.emf.ecore.EReference = sysml.modelelements.ModelelementsPackage.eINSTANCE.getRationale_Base_Comment();

            /**
             * The meta object literal for the '{@link sysml.modelelements.impl.ProblemImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see sysml.modelelements.impl.ProblemImpl
             * @see sysml.modelelements.impl.ModelelementsPackageImpl#getProblem()
             * @generated
             */
            export let PROBLEM : org.eclipse.emf.ecore.EClass = sysml.modelelements.ModelelementsPackage.eINSTANCE.getProblem();

            /**
             * The meta object literal for the '<em><b>Base Comment</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let PROBLEM__BASE_COMMENT : org.eclipse.emf.ecore.EReference = sysml.modelelements.ModelelementsPackage.eINSTANCE.getProblem_Base_Comment();
        }

    }

}

