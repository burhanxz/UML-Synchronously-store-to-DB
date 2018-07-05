/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Call Operation Action</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A CallOperationAction is a CallAction that transmits an Operation call request to the target object, where it may cause the invocation of associated Behavior. The argument values of the CallOperationAction are passed on the input Parameters of the Operation. If call is synchronous, the execution of the CallOperationAction waits until the execution of the invoked Operation completes and the values of output Parameters of the Operation are placed on the result OutputPins. If the call is asynchronous, the CallOperationAction completes immediately and no results values can be provided.
     * <p>From package UML::Actions.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.CallOperationAction#getOperation}</li>
     * <li>{@link uml.CallOperationAction#getTarget}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getCallOperationAction()
     * @model
     * @generated
     * @class
     */
    export interface CallOperationAction extends uml.CallAction {
        /**
         * Returns the value of the '<em><b>Operation</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Operation being invoked.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Operation</em>' reference.
         * @see #setOperation(Operation)
         * @see uml.UmlPackage#getCallOperationAction_Operation()
         * @model required="true" ordered="false"
         * @generated
         */
        getOperation() : uml.Operation;

        /**
         * Sets the value of the '{@link uml.CallOperationAction#getOperation}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Operation</em>' reference.
         * @see #getOperation()
         * @generated
         */
        setOperation(value : uml.Operation);

        /**
         * Returns the value of the '<em><b>Target</b></em>' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The InputPin that provides the target object to which the Operation call request is sent.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Target</em>' containment reference.
         * @see #setTarget(InputPin)
         * @see uml.UmlPackage#getCallOperationAction_Target()
         * @model containment="true" required="true" ordered="false"
         * @generated
         */
        getTarget() : uml.InputPin;

        /**
         * Sets the value of the '{@link uml.CallOperationAction#getTarget}' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Target</em>' containment reference.
         * @see #getTarget()
         * @generated
         */
        setTarget(value : uml.InputPin);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If onPort has no value, the operation must be an owned or inherited feature of the type of the target InputPin, otherwise the Port given by onPort must be an owned or inherited feature of the type of the target InputPin, and the Port must have a required or provided Interface with the operation as an owned or inherited feature.
         * if onPort=null then  target.type.oclAsType(Classifier).allFeatures()->includes(operation)
         * else target.type.oclAsType(Classifier).allFeatures()->includes(onPort) and onPort.provided->union(onPort.required).allFeatures()->includes(operation)
         * endif
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        type_target_pin(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

