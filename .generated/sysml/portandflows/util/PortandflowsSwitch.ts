/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.portandflows.util {
    /**
     * Creates an instance of the switch.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @generated
     * @class
     * @extends org.eclipse.emf.ecore.util.Switch
     */
    export class PortandflowsSwitch<T> extends org.eclipse.emf.ecore.util.Switch<T> {
        /**
         * The cached model package
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        static modelPackage : sysml.portandflows.PortandflowsPackage = null;

        public constructor() {
            super();
            if(PortandflowsSwitch.modelPackage == null) {
                PortandflowsSwitch.modelPackage = sysml.portandflows.PortandflowsPackage.eINSTANCE;
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
            return ePackage === PortandflowsSwitch.modelPackage;
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
            case sysml.portandflows.PortandflowsPackage.FLOW_PORT:
                {
                    let flowPort : sysml.portandflows.FlowPort = <sysml.portandflows.FlowPort><any>theEObject;
                    let result : T = this.caseFlowPort(flowPort);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case sysml.portandflows.PortandflowsPackage.FLOW_PROPERTY:
                {
                    let flowProperty : sysml.portandflows.FlowProperty = <sysml.portandflows.FlowProperty><any>theEObject;
                    let result : T = this.caseFlowProperty(flowProperty);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case sysml.portandflows.PortandflowsPackage.FLOW_SPECIFICATION:
                {
                    let flowSpecification : sysml.portandflows.FlowSpecification = <sysml.portandflows.FlowSpecification><any>theEObject;
                    let result : T = this.caseFlowSpecification(flowSpecification);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case sysml.portandflows.PortandflowsPackage.ITEM_FLOW:
                {
                    let itemFlow : sysml.portandflows.ItemFlow = <sysml.portandflows.ItemFlow><any>theEObject;
                    let result : T = this.caseItemFlow(itemFlow);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            default:
                return this.defaultCase(theEObject);
            }
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Flow Port</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Flow Port</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseFlowPort(object : sysml.portandflows.FlowPort) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Flow Property</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Flow Property</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseFlowProperty(object : sysml.portandflows.FlowProperty) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Flow Specification</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Flow Specification</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseFlowSpecification(object : sysml.portandflows.FlowSpecification) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Item Flow</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Item Flow</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseItemFlow(object : sysml.portandflows.ItemFlow) : T {
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
    PortandflowsSwitch["__class"] = "sysml.portandflows.util.PortandflowsSwitch";

}

