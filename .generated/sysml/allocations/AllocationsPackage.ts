/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.allocations {
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
     * @see sysml.allocations.AllocationsFactory
     * @model kind="package"
     * @generated
     * @class
     */
    export interface AllocationsPackage extends org.eclipse.emf.ecore.EPackage {
        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Allocate</em>'.
         * @see sysml.allocations.Allocate
         * @generated
         */
        getAllocate() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for the reference '{@link sysml.allocations.Allocate#getBase_Abstraction}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Abstraction</em>'.
         * @see sysml.allocations.Allocate#getBase_Abstraction()
         * @see #getAllocate()
         * @generated
         */
        getAllocate_Base_Abstraction() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Allocated</em>'.
         * @see sysml.allocations.Allocated
         * @generated
         */
        getAllocated() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for the reference '{@link sysml.allocations.Allocated#getBase_NamedElement}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Named Element</em>'.
         * @see sysml.allocations.Allocated#getBase_NamedElement()
         * @see #getAllocated()
         * @generated
         */
        getAllocated_Base_NamedElement() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for the reference list '{@link sysml.allocations.Allocated#getAllocatedFrom}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference list '<em>Allocated From</em>'.
         * @see sysml.allocations.Allocated#getAllocatedFrom()
         * @see #getAllocated()
         * @generated
         */
        getAllocated_AllocatedFrom() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for the reference list '{@link sysml.allocations.Allocated#getAllocatedTo}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference list '<em>Allocated To</em>'.
         * @see sysml.allocations.Allocated#getAllocatedTo()
         * @see #getAllocated()
         * @generated
         */
        getAllocated_AllocatedTo() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Allocate Activity Partition</em>'.
         * @see sysml.allocations.AllocateActivityPartition
         * @generated
         */
        getAllocateActivityPartition() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for the reference '{@link sysml.allocations.AllocateActivityPartition#getBase_ActivityPartition}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Activity Partition</em>'.
         * @see sysml.allocations.AllocateActivityPartition#getBase_ActivityPartition()
         * @see #getAllocateActivityPartition()
         * @generated
         */
        getAllocateActivityPartition_Base_ActivityPartition() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the factory that creates the instances of the model.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the factory that creates the instances of the model.
         * @generated
         */
        getAllocationsFactory() : sysml.allocations.AllocationsFactory;
    }

    export namespace AllocationsPackage {

        /**
         * The package name.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        export let eNAME : string = "allocations";

        /**
         * The package namespace URI.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        export let eNS_URI : string = "http://www.eclipse.org/papyrus/0.7.0/SysML/Allocations";

        /**
         * The package namespace name.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        export let eNS_PREFIX : string = "Allocations";

        /**
         * The singleton instance of the package.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        export let eINSTANCE : AllocationsPackage = sysml.allocations.impl.AllocationsPackageImpl.init();

        /**
         * The meta object id for the '{@link sysml.allocations.impl.AllocateImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see sysml.allocations.impl.AllocateImpl
         * @see sysml.allocations.impl.AllocationsPackageImpl#getAllocate()
         * @generated
         */
        export let ALLOCATE : number = 0;

        /**
         * The feature id for the '<em><b>Base Abstraction</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let ALLOCATE__BASE_ABSTRACTION : number = 0;

        /**
         * The number of structural features of the '<em>Allocate</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let ALLOCATE_FEATURE_COUNT : number = 1;

        /**
         * The number of operations of the '<em>Allocate</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let ALLOCATE_OPERATION_COUNT : number = 0;

        /**
         * The meta object id for the '{@link sysml.allocations.impl.AllocatedImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see sysml.allocations.impl.AllocatedImpl
         * @see sysml.allocations.impl.AllocationsPackageImpl#getAllocated()
         * @generated
         */
        export let ALLOCATED : number = 1;

        /**
         * The feature id for the '<em><b>Base Named Element</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let ALLOCATED__BASE_NAMED_ELEMENT : number = 0;

        /**
         * The feature id for the '<em><b>Allocated From</b></em>' reference list.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let ALLOCATED__ALLOCATED_FROM : number = 1;

        /**
         * The feature id for the '<em><b>Allocated To</b></em>' reference list.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let ALLOCATED__ALLOCATED_TO : number = 2;

        /**
         * The number of structural features of the '<em>Allocated</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let ALLOCATED_FEATURE_COUNT : number = 3;

        /**
         * The number of operations of the '<em>Allocated</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let ALLOCATED_OPERATION_COUNT : number = 0;

        /**
         * The meta object id for the '{@link sysml.allocations.impl.AllocateActivityPartitionImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see sysml.allocations.impl.AllocateActivityPartitionImpl
         * @see sysml.allocations.impl.AllocationsPackageImpl#getAllocateActivityPartition()
         * @generated
         */
        export let ALLOCATE_ACTIVITY_PARTITION : number = 2;

        /**
         * The feature id for the '<em><b>Base Activity Partition</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let ALLOCATE_ACTIVITY_PARTITION__BASE_ACTIVITY_PARTITION : number = 0;

        /**
         * The number of structural features of the '<em>Allocate Activity Partition</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let ALLOCATE_ACTIVITY_PARTITION_FEATURE_COUNT : number = 1;

        /**
         * The number of operations of the '<em>Allocate Activity Partition</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let ALLOCATE_ACTIVITY_PARTITION_OPERATION_COUNT : number = 0;
    }


    export namespace AllocationsPackage {

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
             * The meta object literal for the '{@link sysml.allocations.impl.AllocateImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see sysml.allocations.impl.AllocateImpl
             * @see sysml.allocations.impl.AllocationsPackageImpl#getAllocate()
             * @generated
             */
            export let ALLOCATE : org.eclipse.emf.ecore.EClass = sysml.allocations.AllocationsPackage.eINSTANCE.getAllocate();

            /**
             * The meta object literal for the '<em><b>Base Abstraction</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let ALLOCATE__BASE_ABSTRACTION : org.eclipse.emf.ecore.EReference = sysml.allocations.AllocationsPackage.eINSTANCE.getAllocate_Base_Abstraction();

            /**
             * The meta object literal for the '{@link sysml.allocations.impl.AllocatedImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see sysml.allocations.impl.AllocatedImpl
             * @see sysml.allocations.impl.AllocationsPackageImpl#getAllocated()
             * @generated
             */
            export let ALLOCATED : org.eclipse.emf.ecore.EClass = sysml.allocations.AllocationsPackage.eINSTANCE.getAllocated();

            /**
             * The meta object literal for the '<em><b>Base Named Element</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let ALLOCATED__BASE_NAMED_ELEMENT : org.eclipse.emf.ecore.EReference = sysml.allocations.AllocationsPackage.eINSTANCE.getAllocated_Base_NamedElement();

            /**
             * The meta object literal for the '<em><b>Allocated From</b></em>' reference list feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let ALLOCATED__ALLOCATED_FROM : org.eclipse.emf.ecore.EReference = sysml.allocations.AllocationsPackage.eINSTANCE.getAllocated_AllocatedFrom();

            /**
             * The meta object literal for the '<em><b>Allocated To</b></em>' reference list feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let ALLOCATED__ALLOCATED_TO : org.eclipse.emf.ecore.EReference = sysml.allocations.AllocationsPackage.eINSTANCE.getAllocated_AllocatedTo();

            /**
             * The meta object literal for the '{@link sysml.allocations.impl.AllocateActivityPartitionImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see sysml.allocations.impl.AllocateActivityPartitionImpl
             * @see sysml.allocations.impl.AllocationsPackageImpl#getAllocateActivityPartition()
             * @generated
             */
            export let ALLOCATE_ACTIVITY_PARTITION : org.eclipse.emf.ecore.EClass = sysml.allocations.AllocationsPackage.eINSTANCE.getAllocateActivityPartition();

            /**
             * The meta object literal for the '<em><b>Base Activity Partition</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let ALLOCATE_ACTIVITY_PARTITION__BASE_ACTIVITY_PARTITION : org.eclipse.emf.ecore.EReference = sysml.allocations.AllocationsPackage.eINSTANCE.getAllocateActivityPartition_Base_ActivityPartition();
        }

    }

}

