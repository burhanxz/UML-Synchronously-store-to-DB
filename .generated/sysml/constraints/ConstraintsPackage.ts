/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.constraints {
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
     * @see sysml.constraints.ConstraintsFactory
     * @model kind="package"
     * @generated
     * @class
     */
    export interface ConstraintsPackage extends org.eclipse.emf.ecore.EPackage {
        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Constraint Block</em>'.
         * @see sysml.constraints.ConstraintBlock
         * @generated
         */
        getConstraintBlock() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Constraint Property</em>'.
         * @see sysml.constraints.ConstraintProperty
         * @generated
         */
        getConstraintProperty() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for the reference '{@link sysml.constraints.ConstraintProperty#getBase_Property}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Property</em>'.
         * @see sysml.constraints.ConstraintProperty#getBase_Property()
         * @see #getConstraintProperty()
         * @generated
         */
        getConstraintProperty_Base_Property() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the factory that creates the instances of the model.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the factory that creates the instances of the model.
         * @generated
         */
        getConstraintsFactory() : sysml.constraints.ConstraintsFactory;
    }

    export namespace ConstraintsPackage {

        /**
         * The package name.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        export let eNAME : string = "constraints";

        /**
         * The package namespace URI.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        export let eNS_URI : string = "http://www.eclipse.org/papyrus/0.7.0/SysML/Constraints";

        /**
         * The package namespace name.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        export let eNS_PREFIX : string = "Constraints";

        /**
         * The singleton instance of the package.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        export let eINSTANCE : ConstraintsPackage = sysml.constraints.impl.ConstraintsPackageImpl.init();

        /**
         * The meta object id for the '{@link sysml.constraints.impl.ConstraintBlockImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see sysml.constraints.impl.ConstraintBlockImpl
         * @see sysml.constraints.impl.ConstraintsPackageImpl#getConstraintBlock()
         * @generated
         */
        export let CONSTRAINT_BLOCK : number = 0;

        /**
         * The feature id for the '<em><b>Is Encapsulated</b></em>' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let CONSTRAINT_BLOCK__IS_ENCAPSULATED : number = sysml.blocks.BlocksPackage.BLOCK__IS_ENCAPSULATED;

        /**
         * The feature id for the '<em><b>Base Class</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let CONSTRAINT_BLOCK__BASE_CLASS : number = sysml.blocks.BlocksPackage.BLOCK__BASE_CLASS;

        /**
         * The number of structural features of the '<em>Constraint Block</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let CONSTRAINT_BLOCK_FEATURE_COUNT : number = sysml.blocks.BlocksPackage.BLOCK_FEATURE_COUNT + 0;

        /**
         * The number of operations of the '<em>Constraint Block</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let CONSTRAINT_BLOCK_OPERATION_COUNT : number = sysml.blocks.BlocksPackage.BLOCK_OPERATION_COUNT + 0;

        /**
         * The meta object id for the '{@link sysml.constraints.impl.ConstraintPropertyImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see sysml.constraints.impl.ConstraintPropertyImpl
         * @see sysml.constraints.impl.ConstraintsPackageImpl#getConstraintProperty()
         * @generated
         */
        export let CONSTRAINT_PROPERTY : number = 1;

        /**
         * The feature id for the '<em><b>Base Property</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let CONSTRAINT_PROPERTY__BASE_PROPERTY : number = 0;

        /**
         * The number of structural features of the '<em>Constraint Property</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let CONSTRAINT_PROPERTY_FEATURE_COUNT : number = 1;

        /**
         * The number of operations of the '<em>Constraint Property</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let CONSTRAINT_PROPERTY_OPERATION_COUNT : number = 0;
    }


    export namespace ConstraintsPackage {

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
             * The meta object literal for the '{@link sysml.constraints.impl.ConstraintBlockImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see sysml.constraints.impl.ConstraintBlockImpl
             * @see sysml.constraints.impl.ConstraintsPackageImpl#getConstraintBlock()
             * @generated
             */
            export let CONSTRAINT_BLOCK : org.eclipse.emf.ecore.EClass = sysml.constraints.ConstraintsPackage.eINSTANCE.getConstraintBlock();

            /**
             * The meta object literal for the '{@link sysml.constraints.impl.ConstraintPropertyImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see sysml.constraints.impl.ConstraintPropertyImpl
             * @see sysml.constraints.impl.ConstraintsPackageImpl#getConstraintProperty()
             * @generated
             */
            export let CONSTRAINT_PROPERTY : org.eclipse.emf.ecore.EClass = sysml.constraints.ConstraintsPackage.eINSTANCE.getConstraintProperty();

            /**
             * The meta object literal for the '<em><b>Base Property</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let CONSTRAINT_PROPERTY__BASE_PROPERTY : org.eclipse.emf.ecore.EReference = sysml.constraints.ConstraintsPackage.eINSTANCE.getConstraintProperty_Base_Property();
        }

    }

}

