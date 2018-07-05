/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Send Object Action</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A SendObjectAction is an InvocationAction that transmits an input object to the target object, which is handled as a request message by the target object. The requestor continues execution immediately after the object is sent out and cannot receive reply values.
     * <p>From package UML::Actions.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.SendObjectAction#getRequest}</li>
     * <li>{@link uml.SendObjectAction#getTarget}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getSendObjectAction()
     * @model
     * @generated
     * @class
     */
    export interface SendObjectAction extends uml.InvocationAction {
        /**
         * Returns the value of the '<em><b>Request</b></em>' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The request object, which is transmitted to the target object. The object may be copied in transmission, so identity might not be preserved.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Request</em>' containment reference.
         * @see #setRequest(InputPin)
         * @see uml.UmlPackage#getSendObjectAction_Request()
         * @model containment="true" required="true" ordered="false"
         * @generated
         */
        getRequest() : uml.InputPin;

        /**
         * Sets the value of the '{@link uml.SendObjectAction#getRequest}' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Request</em>' containment reference.
         * @see #getRequest()
         * @generated
         */
        setRequest(value : uml.InputPin);

        /**
         * Returns the value of the '<em><b>Target</b></em>' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The target object to which the object is sent.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Target</em>' containment reference.
         * @see #setTarget(InputPin)
         * @see uml.UmlPackage#getSendObjectAction_Target()
         * @model containment="true" required="true" ordered="false"
         * @generated
         */
        getTarget() : uml.InputPin;

        /**
         * Sets the value of the '{@link uml.SendObjectAction#getTarget}' containment reference.
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
         * If onPort is not empty, the Port given by onPort must be an owned or inherited feature of the type of the target InputPin.
         * onPort<>null implies target.type.oclAsType(Classifier).allFeatures()->includes(onPort)
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

