/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.portandflows {
    /**
     * <!-- begin-user-doc -->
     * The <b>Factory</b> for the model.
     * It provides a create method for each non-abstract class of the model.
     * <!-- end-user-doc -->
     * @see sysml.portandflows.PortandflowsPackage
     * @generated
     * @class
     */
    export interface PortandflowsFactory extends org.eclipse.emf.ecore.EFactory {
        /**
         * Returns a new object of class '<em>Flow Port</em>'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} a new object of class '<em>Flow Port</em>'.
         * @generated
         */
        createFlowPort() : sysml.portandflows.FlowPort;

        /**
         * Returns a new object of class '<em>Flow Property</em>'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} a new object of class '<em>Flow Property</em>'.
         * @generated
         */
        createFlowProperty() : sysml.portandflows.FlowProperty;

        /**
         * Returns a new object of class '<em>Flow Specification</em>'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} a new object of class '<em>Flow Specification</em>'.
         * @generated
         */
        createFlowSpecification() : sysml.portandflows.FlowSpecification;

        /**
         * Returns a new object of class '<em>Item Flow</em>'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} a new object of class '<em>Item Flow</em>'.
         * @generated
         */
        createItemFlow() : sysml.portandflows.ItemFlow;

        /**
         * Returns the package supported by this factory.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the package supported by this factory.
         * @generated
         */
        getPortandflowsPackage() : sysml.portandflows.PortandflowsPackage;
    }

    export namespace PortandflowsFactory {

        /**
         * The singleton instance of the factory.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        export let eINSTANCE : PortandflowsFactory = sysml.portandflows.impl.PortandflowsFactoryImpl.init();
    }

}

