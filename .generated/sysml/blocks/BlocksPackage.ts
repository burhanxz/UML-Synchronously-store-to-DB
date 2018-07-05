/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.blocks {
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
     * @see sysml.blocks.BlocksFactory
     * @model kind="package"
     * @generated
     * @class
     */
    export interface BlocksPackage extends org.eclipse.emf.ecore.EPackage {
        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Block</em>'.
         * @see sysml.blocks.Block
         * @generated
         */
        getBlock() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for the attribute '{@link sysml.blocks.Block#isIsEncapsulated}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the attribute '<em>Is Encapsulated</em>'.
         * @see sysml.blocks.Block#isIsEncapsulated()
         * @see #getBlock()
         * @generated
         */
        getBlock_IsEncapsulated() : org.eclipse.emf.ecore.EAttribute;

        /**
         * Returns the meta object for the reference '{@link sysml.blocks.Block#getBase_Class}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Class</em>'.
         * @see sysml.blocks.Block#getBase_Class()
         * @see #getBlock()
         * @generated
         */
        getBlock_Base_Class() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Distributed Property</em>'.
         * @see sysml.blocks.DistributedProperty
         * @generated
         */
        getDistributedProperty() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for the reference '{@link sysml.blocks.DistributedProperty#getBase_Property}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Property</em>'.
         * @see sysml.blocks.DistributedProperty#getBase_Property()
         * @see #getDistributedProperty()
         * @generated
         */
        getDistributedProperty_Base_Property() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Dimension</em>'.
         * @see sysml.blocks.Dimension
         * @generated
         */
        getDimension() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for the reference '{@link sysml.blocks.Dimension#getBase_InstanceSpecification}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Instance Specification</em>'.
         * @see sysml.blocks.Dimension#getBase_InstanceSpecification()
         * @see #getDimension()
         * @generated
         */
        getDimension_Base_InstanceSpecification() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Unit</em>'.
         * @see sysml.blocks.Unit
         * @generated
         */
        getUnit() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for the reference '{@link sysml.blocks.Unit#getBase_InstanceSpecification}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Instance Specification</em>'.
         * @see sysml.blocks.Unit#getBase_InstanceSpecification()
         * @see #getUnit()
         * @generated
         */
        getUnit_Base_InstanceSpecification() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for the reference '{@link sysml.blocks.Unit#getDimension}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Dimension</em>'.
         * @see sysml.blocks.Unit#getDimension()
         * @see #getUnit()
         * @generated
         */
        getUnit_Dimension() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Value Type</em>'.
         * @see sysml.blocks.ValueType
         * @generated
         */
        getValueType() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for the reference '{@link sysml.blocks.ValueType#getBase_DataType}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Data Type</em>'.
         * @see sysml.blocks.ValueType#getBase_DataType()
         * @see #getValueType()
         * @generated
         */
        getValueType_Base_DataType() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for the reference '{@link sysml.blocks.ValueType#getUnit}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Unit</em>'.
         * @see sysml.blocks.ValueType#getUnit()
         * @see #getValueType()
         * @generated
         */
        getValueType_Unit() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for the reference '{@link sysml.blocks.ValueType#getDimension}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Dimension</em>'.
         * @see sysml.blocks.ValueType#getDimension()
         * @see #getValueType()
         * @generated
         */
        getValueType_Dimension() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Nested Connector End</em>'.
         * @see sysml.blocks.NestedConnectorEnd
         * @generated
         */
        getNestedConnectorEnd() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for the reference list '{@link sysml.blocks.NestedConnectorEnd#getPropertyPath}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference list '<em>Property Path</em>'.
         * @see sysml.blocks.NestedConnectorEnd#getPropertyPath()
         * @see #getNestedConnectorEnd()
         * @generated
         */
        getNestedConnectorEnd_PropertyPath() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for the reference '{@link sysml.blocks.NestedConnectorEnd#getBase_ConnectorEnd}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Connector End</em>'.
         * @see sysml.blocks.NestedConnectorEnd#getBase_ConnectorEnd()
         * @see #getNestedConnectorEnd()
         * @generated
         */
        getNestedConnectorEnd_Base_ConnectorEnd() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Participant Property</em>'.
         * @see sysml.blocks.ParticipantProperty
         * @generated
         */
        getParticipantProperty() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for the reference '{@link sysml.blocks.ParticipantProperty#getBase_Property}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Property</em>'.
         * @see sysml.blocks.ParticipantProperty#getBase_Property()
         * @see #getParticipantProperty()
         * @generated
         */
        getParticipantProperty_Base_Property() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for the reference '{@link sysml.blocks.ParticipantProperty#getEnd}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>End</em>'.
         * @see sysml.blocks.ParticipantProperty#getEnd()
         * @see #getParticipantProperty()
         * @generated
         */
        getParticipantProperty_End() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Connector Property</em>'.
         * @see sysml.blocks.ConnectorProperty
         * @generated
         */
        getConnectorProperty() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for the reference '{@link sysml.blocks.ConnectorProperty#getBase_Property}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Property</em>'.
         * @see sysml.blocks.ConnectorProperty#getBase_Property()
         * @see #getConnectorProperty()
         * @generated
         */
        getConnectorProperty_Base_Property() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for the reference '{@link sysml.blocks.ConnectorProperty#getConnector}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Connector</em>'.
         * @see sysml.blocks.ConnectorProperty#getConnector()
         * @see #getConnectorProperty()
         * @generated
         */
        getConnectorProperty_Connector() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Binding Connector</em>'.
         * @see sysml.blocks.BindingConnector
         * @generated
         */
        getBindingConnector() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for the reference '{@link sysml.blocks.BindingConnector#getBase_Connector}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Connector</em>'.
         * @see sysml.blocks.BindingConnector#getBase_Connector()
         * @see #getBindingConnector()
         * @generated
         */
        getBindingConnector_Base_Connector() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Property Specific Type</em>'.
         * @see sysml.blocks.PropertySpecificType
         * @generated
         */
        getPropertySpecificType() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for the reference '{@link sysml.blocks.PropertySpecificType#getBase_Classifier}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Classifier</em>'.
         * @see sysml.blocks.PropertySpecificType#getBase_Classifier()
         * @see #getPropertySpecificType()
         * @generated
         */
        getPropertySpecificType_Base_Classifier() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the factory that creates the instances of the model.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the factory that creates the instances of the model.
         * @generated
         */
        getBlocksFactory() : sysml.blocks.BlocksFactory;
    }

    export namespace BlocksPackage {

        /**
         * The package name.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        export let eNAME : string = "blocks";

        /**
         * The package namespace URI.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        export let eNS_URI : string = "http://www.eclipse.org/papyrus/0.7.0/SysML/Blocks";

        /**
         * The package namespace name.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        export let eNS_PREFIX : string = "Blocks";

        /**
         * The singleton instance of the package.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        export let eINSTANCE : BlocksPackage = sysml.blocks.impl.BlocksPackageImpl.init();

        /**
         * The meta object id for the '{@link sysml.blocks.impl.BlockImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see sysml.blocks.impl.BlockImpl
         * @see sysml.blocks.impl.BlocksPackageImpl#getBlock()
         * @generated
         */
        export let BLOCK : number = 0;

        /**
         * The feature id for the '<em><b>Is Encapsulated</b></em>' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let BLOCK__IS_ENCAPSULATED : number = 0;

        /**
         * The feature id for the '<em><b>Base Class</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let BLOCK__BASE_CLASS : number = 1;

        /**
         * The number of structural features of the '<em>Block</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let BLOCK_FEATURE_COUNT : number = 2;

        /**
         * The number of operations of the '<em>Block</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let BLOCK_OPERATION_COUNT : number = 0;

        /**
         * The meta object id for the '{@link sysml.blocks.impl.DistributedPropertyImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see sysml.blocks.impl.DistributedPropertyImpl
         * @see sysml.blocks.impl.BlocksPackageImpl#getDistributedProperty()
         * @generated
         */
        export let DISTRIBUTED_PROPERTY : number = 1;

        /**
         * The feature id for the '<em><b>Base Property</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let DISTRIBUTED_PROPERTY__BASE_PROPERTY : number = 0;

        /**
         * The number of structural features of the '<em>Distributed Property</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let DISTRIBUTED_PROPERTY_FEATURE_COUNT : number = 1;

        /**
         * The number of operations of the '<em>Distributed Property</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let DISTRIBUTED_PROPERTY_OPERATION_COUNT : number = 0;

        /**
         * The meta object id for the '{@link sysml.blocks.impl.DimensionImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see sysml.blocks.impl.DimensionImpl
         * @see sysml.blocks.impl.BlocksPackageImpl#getDimension()
         * @generated
         */
        export let DIMENSION : number = 2;

        /**
         * The feature id for the '<em><b>Base Instance Specification</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let DIMENSION__BASE_INSTANCE_SPECIFICATION : number = 0;

        /**
         * The number of structural features of the '<em>Dimension</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let DIMENSION_FEATURE_COUNT : number = 1;

        /**
         * The number of operations of the '<em>Dimension</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let DIMENSION_OPERATION_COUNT : number = 0;

        /**
         * The meta object id for the '{@link sysml.blocks.impl.UnitImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see sysml.blocks.impl.UnitImpl
         * @see sysml.blocks.impl.BlocksPackageImpl#getUnit()
         * @generated
         */
        export let UNIT : number = 3;

        /**
         * The feature id for the '<em><b>Base Instance Specification</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let UNIT__BASE_INSTANCE_SPECIFICATION : number = 0;

        /**
         * The feature id for the '<em><b>Dimension</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let UNIT__DIMENSION : number = 1;

        /**
         * The number of structural features of the '<em>Unit</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let UNIT_FEATURE_COUNT : number = 2;

        /**
         * The number of operations of the '<em>Unit</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let UNIT_OPERATION_COUNT : number = 0;

        /**
         * The meta object id for the '{@link sysml.blocks.impl.ValueTypeImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see sysml.blocks.impl.ValueTypeImpl
         * @see sysml.blocks.impl.BlocksPackageImpl#getValueType()
         * @generated
         */
        export let VALUE_TYPE : number = 4;

        /**
         * The feature id for the '<em><b>Base Data Type</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let VALUE_TYPE__BASE_DATA_TYPE : number = 0;

        /**
         * The feature id for the '<em><b>Unit</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let VALUE_TYPE__UNIT : number = 1;

        /**
         * The feature id for the '<em><b>Dimension</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let VALUE_TYPE__DIMENSION : number = 2;

        /**
         * The number of structural features of the '<em>Value Type</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let VALUE_TYPE_FEATURE_COUNT : number = 3;

        /**
         * The number of operations of the '<em>Value Type</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let VALUE_TYPE_OPERATION_COUNT : number = 0;

        /**
         * The meta object id for the '{@link sysml.blocks.impl.NestedConnectorEndImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see sysml.blocks.impl.NestedConnectorEndImpl
         * @see sysml.blocks.impl.BlocksPackageImpl#getNestedConnectorEnd()
         * @generated
         */
        export let NESTED_CONNECTOR_END : number = 5;

        /**
         * The feature id for the '<em><b>Property Path</b></em>' reference list.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let NESTED_CONNECTOR_END__PROPERTY_PATH : number = 0;

        /**
         * The feature id for the '<em><b>Base Connector End</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let NESTED_CONNECTOR_END__BASE_CONNECTOR_END : number = 1;

        /**
         * The number of structural features of the '<em>Nested Connector End</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let NESTED_CONNECTOR_END_FEATURE_COUNT : number = 2;

        /**
         * The number of operations of the '<em>Nested Connector End</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let NESTED_CONNECTOR_END_OPERATION_COUNT : number = 0;

        /**
         * The meta object id for the '{@link sysml.blocks.impl.ParticipantPropertyImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see sysml.blocks.impl.ParticipantPropertyImpl
         * @see sysml.blocks.impl.BlocksPackageImpl#getParticipantProperty()
         * @generated
         */
        export let PARTICIPANT_PROPERTY : number = 6;

        /**
         * The feature id for the '<em><b>Base Property</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let PARTICIPANT_PROPERTY__BASE_PROPERTY : number = 0;

        /**
         * The feature id for the '<em><b>End</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let PARTICIPANT_PROPERTY__END : number = 1;

        /**
         * The number of structural features of the '<em>Participant Property</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let PARTICIPANT_PROPERTY_FEATURE_COUNT : number = 2;

        /**
         * The number of operations of the '<em>Participant Property</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let PARTICIPANT_PROPERTY_OPERATION_COUNT : number = 0;

        /**
         * The meta object id for the '{@link sysml.blocks.impl.ConnectorPropertyImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see sysml.blocks.impl.ConnectorPropertyImpl
         * @see sysml.blocks.impl.BlocksPackageImpl#getConnectorProperty()
         * @generated
         */
        export let CONNECTOR_PROPERTY : number = 7;

        /**
         * The feature id for the '<em><b>Base Property</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let CONNECTOR_PROPERTY__BASE_PROPERTY : number = 0;

        /**
         * The feature id for the '<em><b>Connector</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let CONNECTOR_PROPERTY__CONNECTOR : number = 1;

        /**
         * The number of structural features of the '<em>Connector Property</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let CONNECTOR_PROPERTY_FEATURE_COUNT : number = 2;

        /**
         * The number of operations of the '<em>Connector Property</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let CONNECTOR_PROPERTY_OPERATION_COUNT : number = 0;

        /**
         * The meta object id for the '{@link sysml.blocks.impl.BindingConnectorImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see sysml.blocks.impl.BindingConnectorImpl
         * @see sysml.blocks.impl.BlocksPackageImpl#getBindingConnector()
         * @generated
         */
        export let BINDING_CONNECTOR : number = 8;

        /**
         * The feature id for the '<em><b>Base Connector</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let BINDING_CONNECTOR__BASE_CONNECTOR : number = 0;

        /**
         * The number of structural features of the '<em>Binding Connector</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let BINDING_CONNECTOR_FEATURE_COUNT : number = 1;

        /**
         * The number of operations of the '<em>Binding Connector</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let BINDING_CONNECTOR_OPERATION_COUNT : number = 0;

        /**
         * The meta object id for the '{@link sysml.blocks.impl.PropertySpecificTypeImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see sysml.blocks.impl.PropertySpecificTypeImpl
         * @see sysml.blocks.impl.BlocksPackageImpl#getPropertySpecificType()
         * @generated
         */
        export let PROPERTY_SPECIFIC_TYPE : number = 9;

        /**
         * The feature id for the '<em><b>Base Classifier</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let PROPERTY_SPECIFIC_TYPE__BASE_CLASSIFIER : number = 0;

        /**
         * The number of structural features of the '<em>Property Specific Type</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let PROPERTY_SPECIFIC_TYPE_FEATURE_COUNT : number = 1;

        /**
         * The number of operations of the '<em>Property Specific Type</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let PROPERTY_SPECIFIC_TYPE_OPERATION_COUNT : number = 0;
    }


    export namespace BlocksPackage {

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
             * The meta object literal for the '{@link sysml.blocks.impl.BlockImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see sysml.blocks.impl.BlockImpl
             * @see sysml.blocks.impl.BlocksPackageImpl#getBlock()
             * @generated
             */
            export let BLOCK : org.eclipse.emf.ecore.EClass = sysml.blocks.BlocksPackage.eINSTANCE.getBlock();

            /**
             * The meta object literal for the '<em><b>Is Encapsulated</b></em>' attribute feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let BLOCK__IS_ENCAPSULATED : org.eclipse.emf.ecore.EAttribute = sysml.blocks.BlocksPackage.eINSTANCE.getBlock_IsEncapsulated();

            /**
             * The meta object literal for the '<em><b>Base Class</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let BLOCK__BASE_CLASS : org.eclipse.emf.ecore.EReference = sysml.blocks.BlocksPackage.eINSTANCE.getBlock_Base_Class();

            /**
             * The meta object literal for the '{@link sysml.blocks.impl.DistributedPropertyImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see sysml.blocks.impl.DistributedPropertyImpl
             * @see sysml.blocks.impl.BlocksPackageImpl#getDistributedProperty()
             * @generated
             */
            export let DISTRIBUTED_PROPERTY : org.eclipse.emf.ecore.EClass = sysml.blocks.BlocksPackage.eINSTANCE.getDistributedProperty();

            /**
             * The meta object literal for the '<em><b>Base Property</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let DISTRIBUTED_PROPERTY__BASE_PROPERTY : org.eclipse.emf.ecore.EReference = sysml.blocks.BlocksPackage.eINSTANCE.getDistributedProperty_Base_Property();

            /**
             * The meta object literal for the '{@link sysml.blocks.impl.DimensionImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see sysml.blocks.impl.DimensionImpl
             * @see sysml.blocks.impl.BlocksPackageImpl#getDimension()
             * @generated
             */
            export let DIMENSION : org.eclipse.emf.ecore.EClass = sysml.blocks.BlocksPackage.eINSTANCE.getDimension();

            /**
             * The meta object literal for the '<em><b>Base Instance Specification</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let DIMENSION__BASE_INSTANCE_SPECIFICATION : org.eclipse.emf.ecore.EReference = sysml.blocks.BlocksPackage.eINSTANCE.getDimension_Base_InstanceSpecification();

            /**
             * The meta object literal for the '{@link sysml.blocks.impl.UnitImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see sysml.blocks.impl.UnitImpl
             * @see sysml.blocks.impl.BlocksPackageImpl#getUnit()
             * @generated
             */
            export let UNIT : org.eclipse.emf.ecore.EClass = sysml.blocks.BlocksPackage.eINSTANCE.getUnit();

            /**
             * The meta object literal for the '<em><b>Base Instance Specification</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let UNIT__BASE_INSTANCE_SPECIFICATION : org.eclipse.emf.ecore.EReference = sysml.blocks.BlocksPackage.eINSTANCE.getUnit_Base_InstanceSpecification();

            /**
             * The meta object literal for the '<em><b>Dimension</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let UNIT__DIMENSION : org.eclipse.emf.ecore.EReference = sysml.blocks.BlocksPackage.eINSTANCE.getUnit_Dimension();

            /**
             * The meta object literal for the '{@link sysml.blocks.impl.ValueTypeImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see sysml.blocks.impl.ValueTypeImpl
             * @see sysml.blocks.impl.BlocksPackageImpl#getValueType()
             * @generated
             */
            export let VALUE_TYPE : org.eclipse.emf.ecore.EClass = sysml.blocks.BlocksPackage.eINSTANCE.getValueType();

            /**
             * The meta object literal for the '<em><b>Base Data Type</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let VALUE_TYPE__BASE_DATA_TYPE : org.eclipse.emf.ecore.EReference = sysml.blocks.BlocksPackage.eINSTANCE.getValueType_Base_DataType();

            /**
             * The meta object literal for the '<em><b>Unit</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let VALUE_TYPE__UNIT : org.eclipse.emf.ecore.EReference = sysml.blocks.BlocksPackage.eINSTANCE.getValueType_Unit();

            /**
             * The meta object literal for the '<em><b>Dimension</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let VALUE_TYPE__DIMENSION : org.eclipse.emf.ecore.EReference = sysml.blocks.BlocksPackage.eINSTANCE.getValueType_Dimension();

            /**
             * The meta object literal for the '{@link sysml.blocks.impl.NestedConnectorEndImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see sysml.blocks.impl.NestedConnectorEndImpl
             * @see sysml.blocks.impl.BlocksPackageImpl#getNestedConnectorEnd()
             * @generated
             */
            export let NESTED_CONNECTOR_END : org.eclipse.emf.ecore.EClass = sysml.blocks.BlocksPackage.eINSTANCE.getNestedConnectorEnd();

            /**
             * The meta object literal for the '<em><b>Property Path</b></em>' reference list feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let NESTED_CONNECTOR_END__PROPERTY_PATH : org.eclipse.emf.ecore.EReference = sysml.blocks.BlocksPackage.eINSTANCE.getNestedConnectorEnd_PropertyPath();

            /**
             * The meta object literal for the '<em><b>Base Connector End</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let NESTED_CONNECTOR_END__BASE_CONNECTOR_END : org.eclipse.emf.ecore.EReference = sysml.blocks.BlocksPackage.eINSTANCE.getNestedConnectorEnd_Base_ConnectorEnd();

            /**
             * The meta object literal for the '{@link sysml.blocks.impl.ParticipantPropertyImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see sysml.blocks.impl.ParticipantPropertyImpl
             * @see sysml.blocks.impl.BlocksPackageImpl#getParticipantProperty()
             * @generated
             */
            export let PARTICIPANT_PROPERTY : org.eclipse.emf.ecore.EClass = sysml.blocks.BlocksPackage.eINSTANCE.getParticipantProperty();

            /**
             * The meta object literal for the '<em><b>Base Property</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let PARTICIPANT_PROPERTY__BASE_PROPERTY : org.eclipse.emf.ecore.EReference = sysml.blocks.BlocksPackage.eINSTANCE.getParticipantProperty_Base_Property();

            /**
             * The meta object literal for the '<em><b>End</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let PARTICIPANT_PROPERTY__END : org.eclipse.emf.ecore.EReference = sysml.blocks.BlocksPackage.eINSTANCE.getParticipantProperty_End();

            /**
             * The meta object literal for the '{@link sysml.blocks.impl.ConnectorPropertyImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see sysml.blocks.impl.ConnectorPropertyImpl
             * @see sysml.blocks.impl.BlocksPackageImpl#getConnectorProperty()
             * @generated
             */
            export let CONNECTOR_PROPERTY : org.eclipse.emf.ecore.EClass = sysml.blocks.BlocksPackage.eINSTANCE.getConnectorProperty();

            /**
             * The meta object literal for the '<em><b>Base Property</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let CONNECTOR_PROPERTY__BASE_PROPERTY : org.eclipse.emf.ecore.EReference = sysml.blocks.BlocksPackage.eINSTANCE.getConnectorProperty_Base_Property();

            /**
             * The meta object literal for the '<em><b>Connector</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let CONNECTOR_PROPERTY__CONNECTOR : org.eclipse.emf.ecore.EReference = sysml.blocks.BlocksPackage.eINSTANCE.getConnectorProperty_Connector();

            /**
             * The meta object literal for the '{@link sysml.blocks.impl.BindingConnectorImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see sysml.blocks.impl.BindingConnectorImpl
             * @see sysml.blocks.impl.BlocksPackageImpl#getBindingConnector()
             * @generated
             */
            export let BINDING_CONNECTOR : org.eclipse.emf.ecore.EClass = sysml.blocks.BlocksPackage.eINSTANCE.getBindingConnector();

            /**
             * The meta object literal for the '<em><b>Base Connector</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let BINDING_CONNECTOR__BASE_CONNECTOR : org.eclipse.emf.ecore.EReference = sysml.blocks.BlocksPackage.eINSTANCE.getBindingConnector_Base_Connector();

            /**
             * The meta object literal for the '{@link sysml.blocks.impl.PropertySpecificTypeImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see sysml.blocks.impl.PropertySpecificTypeImpl
             * @see sysml.blocks.impl.BlocksPackageImpl#getPropertySpecificType()
             * @generated
             */
            export let PROPERTY_SPECIFIC_TYPE : org.eclipse.emf.ecore.EClass = sysml.blocks.BlocksPackage.eINSTANCE.getPropertySpecificType();

            /**
             * The meta object literal for the '<em><b>Base Classifier</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let PROPERTY_SPECIFIC_TYPE__BASE_CLASSIFIER : org.eclipse.emf.ecore.EReference = sysml.blocks.BlocksPackage.eINSTANCE.getPropertySpecificType_Base_Classifier();
        }

    }

}

