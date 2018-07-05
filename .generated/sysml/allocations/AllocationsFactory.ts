/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.allocations {
    /**
     * <!-- begin-user-doc -->
     * The <b>Factory</b> for the model.
     * It provides a create method for each non-abstract class of the model.
     * <!-- end-user-doc -->
     * @see sysml.allocations.AllocationsPackage
     * @generated
     * @class
     */
    export interface AllocationsFactory extends org.eclipse.emf.ecore.EFactory {
        /**
         * Returns a new object of class '<em>Allocate</em>'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} a new object of class '<em>Allocate</em>'.
         * @generated
         */
        createAllocate() : sysml.allocations.Allocate;

        /**
         * Returns a new object of class '<em>Allocated</em>'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} a new object of class '<em>Allocated</em>'.
         * @generated
         */
        createAllocated() : sysml.allocations.Allocated;

        /**
         * Returns a new object of class '<em>Allocate Activity Partition</em>'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} a new object of class '<em>Allocate Activity Partition</em>'.
         * @generated
         */
        createAllocateActivityPartition() : sysml.allocations.AllocateActivityPartition;

        /**
         * Returns the package supported by this factory.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the package supported by this factory.
         * @generated
         */
        getAllocationsPackage() : sysml.allocations.AllocationsPackage;
    }

    export namespace AllocationsFactory {

        /**
         * The singleton instance of the factory.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        export let eINSTANCE : AllocationsFactory = sysml.allocations.impl.AllocationsFactoryImpl.init();
    }

}

