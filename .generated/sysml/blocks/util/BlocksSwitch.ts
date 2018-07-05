/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.blocks.util {
    /**
     * Creates an instance of the switch.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @generated
     * @class
     * @extends org.eclipse.emf.ecore.util.Switch
     */
    export class BlocksSwitch<T> extends org.eclipse.emf.ecore.util.Switch<T> {
        /**
         * The cached model package
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        static modelPackage : sysml.blocks.BlocksPackage = null;

        public constructor() {
            super();
            if(BlocksSwitch.modelPackage == null) {
                BlocksSwitch.modelPackage = sysml.blocks.BlocksPackage.eINSTANCE;
            }
        }

        /**
         * Checks whether this is a switch for the given package.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} ePackage the package in question.
         * @return {boolean} whether this is a switch for the given package.
         * @generated
         */
        isSwitchFor(ePackage : org.eclipse.emf.ecore.EPackage) : boolean {
            return ePackage === BlocksSwitch.modelPackage;
        }

        /**
         * Calls <code>caseXXX</code> for each class of the model until one returns a non null result; it yields that result.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the first non-null result returned by a <code>caseXXX</code> call.
         * @generated
         * @param {number} classifierID
         * @param {*} theEObject
         */
        doSwitch(classifierID : number, theEObject : org.eclipse.emf.ecore.EObject) : T {
            switch((classifierID)) {
            case sysml.blocks.BlocksPackage.BLOCK:
                {
                    let block : sysml.blocks.Block = <sysml.blocks.Block><any>theEObject;
                    let result : T = this.caseBlock(block);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case sysml.blocks.BlocksPackage.DISTRIBUTED_PROPERTY:
                {
                    let distributedProperty : sysml.blocks.DistributedProperty = <sysml.blocks.DistributedProperty><any>theEObject;
                    let result : T = this.caseDistributedProperty(distributedProperty);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case sysml.blocks.BlocksPackage.DIMENSION:
                {
                    let dimension : sysml.blocks.Dimension = <sysml.blocks.Dimension><any>theEObject;
                    let result : T = this.caseDimension(dimension);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case sysml.blocks.BlocksPackage.UNIT:
                {
                    let unit : sysml.blocks.Unit = <sysml.blocks.Unit><any>theEObject;
                    let result : T = this.caseUnit(unit);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case sysml.blocks.BlocksPackage.VALUE_TYPE:
                {
                    let valueType : sysml.blocks.ValueType = <sysml.blocks.ValueType><any>theEObject;
                    let result : T = this.caseValueType(valueType);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case sysml.blocks.BlocksPackage.NESTED_CONNECTOR_END:
                {
                    let nestedConnectorEnd : sysml.blocks.NestedConnectorEnd = <sysml.blocks.NestedConnectorEnd><any>theEObject;
                    let result : T = this.caseNestedConnectorEnd(nestedConnectorEnd);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case sysml.blocks.BlocksPackage.PARTICIPANT_PROPERTY:
                {
                    let participantProperty : sysml.blocks.ParticipantProperty = <sysml.blocks.ParticipantProperty><any>theEObject;
                    let result : T = this.caseParticipantProperty(participantProperty);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case sysml.blocks.BlocksPackage.CONNECTOR_PROPERTY:
                {
                    let connectorProperty : sysml.blocks.ConnectorProperty = <sysml.blocks.ConnectorProperty><any>theEObject;
                    let result : T = this.caseConnectorProperty(connectorProperty);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case sysml.blocks.BlocksPackage.BINDING_CONNECTOR:
                {
                    let bindingConnector : sysml.blocks.BindingConnector = <sysml.blocks.BindingConnector><any>theEObject;
                    let result : T = this.caseBindingConnector(bindingConnector);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case sysml.blocks.BlocksPackage.PROPERTY_SPECIFIC_TYPE:
                {
                    let propertySpecificType : sysml.blocks.PropertySpecificType = <sysml.blocks.PropertySpecificType><any>theEObject;
                    let result : T = this.casePropertySpecificType(propertySpecificType);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            default:
                return this.defaultCase(theEObject);
            }
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Block</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Block</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseBlock(object : sysml.blocks.Block) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Distributed Property</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Distributed Property</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseDistributedProperty(object : sysml.blocks.DistributedProperty) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Dimension</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Dimension</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseDimension(object : sysml.blocks.Dimension) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Unit</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Unit</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseUnit(object : sysml.blocks.Unit) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Value Type</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Value Type</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseValueType(object : sysml.blocks.ValueType) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Nested Connector End</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Nested Connector End</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseNestedConnectorEnd(object : sysml.blocks.NestedConnectorEnd) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Participant Property</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Participant Property</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseParticipantProperty(object : sysml.blocks.ParticipantProperty) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Connector Property</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Connector Property</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseConnectorProperty(object : sysml.blocks.ConnectorProperty) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Binding Connector</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Binding Connector</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseBindingConnector(object : sysml.blocks.BindingConnector) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Property Specific Type</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Property Specific Type</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public casePropertySpecificType(object : sysml.blocks.PropertySpecificType) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>EObject</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch, but this is the last case anyway.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>EObject</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject)
         * @generated
         */
        public defaultCase(object : org.eclipse.emf.ecore.EObject) : T {
            return null;
        }
    }
    BlocksSwitch["__class"] = "sysml.blocks.util.BlocksSwitch";

}

