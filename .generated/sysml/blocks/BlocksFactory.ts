/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.blocks {
    /**
     * <!-- begin-user-doc -->
     * The <b>Factory</b> for the model.
     * It provides a create method for each non-abstract class of the model.
     * <!-- end-user-doc -->
     * @see sysml.blocks.BlocksPackage
     * @generated
     * @class
     */
    export interface BlocksFactory extends org.eclipse.emf.ecore.EFactory {
        /**
         * Returns a new object of class '<em>Block</em>'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} a new object of class '<em>Block</em>'.
         * @generated
         */
        createBlock() : sysml.blocks.Block;

        /**
         * Returns a new object of class '<em>Distributed Property</em>'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} a new object of class '<em>Distributed Property</em>'.
         * @generated
         */
        createDistributedProperty() : sysml.blocks.DistributedProperty;

        /**
         * Returns a new object of class '<em>Dimension</em>'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} a new object of class '<em>Dimension</em>'.
         * @generated
         */
        createDimension() : sysml.blocks.Dimension;

        /**
         * Returns a new object of class '<em>Unit</em>'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} a new object of class '<em>Unit</em>'.
         * @generated
         */
        createUnit() : sysml.blocks.Unit;

        /**
         * Returns a new object of class '<em>Value Type</em>'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} a new object of class '<em>Value Type</em>'.
         * @generated
         */
        createValueType() : sysml.blocks.ValueType;

        /**
         * Returns a new object of class '<em>Nested Connector End</em>'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} a new object of class '<em>Nested Connector End</em>'.
         * @generated
         */
        createNestedConnectorEnd() : sysml.blocks.NestedConnectorEnd;

        /**
         * Returns a new object of class '<em>Participant Property</em>'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} a new object of class '<em>Participant Property</em>'.
         * @generated
         */
        createParticipantProperty() : sysml.blocks.ParticipantProperty;

        /**
         * Returns a new object of class '<em>Connector Property</em>'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} a new object of class '<em>Connector Property</em>'.
         * @generated
         */
        createConnectorProperty() : sysml.blocks.ConnectorProperty;

        /**
         * Returns a new object of class '<em>Binding Connector</em>'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} a new object of class '<em>Binding Connector</em>'.
         * @generated
         */
        createBindingConnector() : sysml.blocks.BindingConnector;

        /**
         * Returns a new object of class '<em>Property Specific Type</em>'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} a new object of class '<em>Property Specific Type</em>'.
         * @generated
         */
        createPropertySpecificType() : sysml.blocks.PropertySpecificType;

        /**
         * Returns the package supported by this factory.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the package supported by this factory.
         * @generated
         */
        getBlocksPackage() : sysml.blocks.BlocksPackage;
    }

    export namespace BlocksFactory {

        /**
         * The singleton instance of the factory.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        export let eINSTANCE : BlocksFactory = sysml.blocks.impl.BlocksFactoryImpl.init();
    }

}

