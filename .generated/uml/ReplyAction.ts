/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Reply Action</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A ReplyAction is an Action that accepts a set of reply values and a value containing return information produced by a previous AcceptCallAction. The ReplyAction returns the values to the caller of the previous call, completing execution of the call.
     * <p>From package UML::Actions.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.ReplyAction#getReplyToCall}</li>
     * <li>{@link uml.ReplyAction#getReplyValue}</li>
     * <li>{@link uml.ReplyAction#getReturnInformation}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getReplyAction()
     * @model
     * @generated
     * @class
     */
    export interface ReplyAction extends uml.Action {
        /**
         * Returns the value of the '<em><b>Reply To Call</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Trigger specifying the Operation whose call is being replied to.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Reply To Call</em>' reference.
         * @see #setReplyToCall(Trigger)
         * @see uml.UmlPackage#getReplyAction_ReplyToCall()
         * @model required="true" ordered="false"
         * @generated
         */
        getReplyToCall() : uml.Trigger;

        /**
         * Sets the value of the '{@link uml.ReplyAction#getReplyToCall}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Reply To Call</em>' reference.
         * @see #getReplyToCall()
         * @generated
         */
        setReplyToCall(value : uml.Trigger);

        /**
         * Returns the value of the '<em><b>Reply Value</b></em>' containment reference list.
         * The list contents are of type {@link uml.InputPin}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A list of InputPins providing the values for the output (inout, out, and return) Parameters of the Operation. These values are returned to the caller.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Reply Value</em>' containment reference list.
         * @see uml.UmlPackage#getReplyAction_ReplyValue()
         * @model containment="true"
         * @generated
         */
        getReplyValue() : org.eclipse.emf.common.util.EList<uml.InputPin>;

        /**
         * Returns the value of the '<em><b>Return Information</b></em>' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * An InputPin that holds the return information value produced by an earlier AcceptCallAction.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Return Information</em>' containment reference.
         * @see #setReturnInformation(InputPin)
         * @see uml.UmlPackage#getReplyAction_ReturnInformation()
         * @model containment="true" required="true" ordered="false"
         * @generated
         */
        getReturnInformation() : uml.InputPin;

        /**
         * Sets the value of the '{@link uml.ReplyAction#getReturnInformation}' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Return Information</em>' containment reference.
         * @see #getReturnInformation()
         * @generated
         */
        setReturnInformation(value : uml.InputPin);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The replyValue InputPins must match the output (return, out, and inout) parameters of the operation of the event of the replyToCall Trigger in number, type, ordering, and multiplicity.
         * let parameter:OrderedSet(Parameter) = replyToCall.event.oclAsType(CallEvent).operation.outputParameters() in
         * replyValue->size()=parameter->size() and
         * Sequence{1..replyValue->size()}->forAll(i |
         * replyValue->at(i).type.conformsTo(parameter->at(i).type) and
         * replyValue->at(i).isOrdered=parameter->at(i).isOrdered and
         * replyValue->at(i).compatibleWith(parameter->at(i)))
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        pins_match_parameter(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The event of the replyToCall Trigger must be a CallEvent.
         * replyToCall.event.oclIsKindOf(CallEvent)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        event_on_reply_to_call_trigger(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

