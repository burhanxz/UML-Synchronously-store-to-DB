/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Message End</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * MessageEnd is an abstract specialization of NamedElement that represents what can occur at the end of a Message.
     * <p>From package UML::Interactions.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.MessageEnd#getMessage}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getMessageEnd()
     * @model abstract="true"
     * @generated
     * @class
     */
    export interface MessageEnd extends uml.NamedElement {
        /**
         * Returns the value of the '<em><b>Message</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * References a Message.
         * <p>From package UML::Interactions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Message</em>' reference.
         * @see #setMessage(Message)
         * @see uml.UmlPackage#getMessageEnd_Message()
         * @model ordered="false"
         * @generated
         */
        getMessage() : uml.Message;

        /**
         * Sets the value of the '{@link uml.MessageEnd#getMessage}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Message</em>' reference.
         * @see #getMessage()
         * @generated
         */
        setMessage(value : uml.Message);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * This query returns a set including the MessageEnd (if exists) at the opposite end of the Message for this MessageEnd.
         * result = (message->asSet().messageEnd->asSet()->excluding(self))
         * message->notEmpty()
         * <p>From package UML::Interactions.</p>
         * <!-- end-model-doc -->
         * @model ordered="false"
         * @generated
         * @return {*}
         */
        oppositeEnd() : org.eclipse.emf.common.util.EList<MessageEnd>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * This query returns value true if this MessageEnd is a sendEvent.
         * message->notEmpty()
         * result = (message.sendEvent->asSet()->includes(self))
         * <p>From package UML::Interactions.</p>
         * <!-- end-model-doc -->
         * @model kind="operation" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         * @return {boolean}
         */
        isSend() : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * This query returns value true if this MessageEnd is a receiveEvent.
         * message->notEmpty()
         * result = (message.receiveEvent->asSet()->includes(self))
         * <p>From package UML::Interactions.</p>
         * <!-- end-model-doc -->
         * @model kind="operation" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         * @return {boolean}
         */
        isReceive() : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * This query returns a set including the enclosing InteractionFragment this MessageEnd is enclosed within.
         * result = (if self->select(oclIsKindOf(Gate))->notEmpty()
         * then -- it is a Gate
         * let endGate : Gate =
         * self->select(oclIsKindOf(Gate)).oclAsType(Gate)->asOrderedSet()->first()
         * in
         * if endGate.isOutsideCF()
         * then endGate.combinedFragment.enclosingInteraction.oclAsType(InteractionFragment)->asSet()->
         * union(endGate.combinedFragment.enclosingOperand.oclAsType(InteractionFragment)->asSet())
         * else if endGate.isInsideCF()
         * then endGate.combinedFragment.oclAsType(InteractionFragment)->asSet()
         * else if endGate.isFormal()
         * then endGate.interaction.oclAsType(InteractionFragment)->asSet()
         * else if endGate.isActual()
         * then endGate.interactionUse.enclosingInteraction.oclAsType(InteractionFragment)->asSet()->
         * union(endGate.interactionUse.enclosingOperand.oclAsType(InteractionFragment)->asSet())
         * else null
         * endif
         * endif
         * endif
         * endif
         * else -- it is a MessageOccurrenceSpecification
         * let endMOS : MessageOccurrenceSpecification  =
         * self->select(oclIsKindOf(MessageOccurrenceSpecification)).oclAsType(MessageOccurrenceSpecification)->asOrderedSet()->first()
         * in
         * if endMOS.enclosingInteraction->notEmpty()
         * then endMOS.enclosingInteraction.oclAsType(InteractionFragment)->asSet()
         * else endMOS.enclosingOperand.oclAsType(InteractionFragment)->asSet()
         * endif
         * endif)
         * <p>From package UML::Interactions.</p>
         * <!-- end-model-doc -->
         * @model ordered="false"
         * @generated
         * @return {*}
         */
        enclosingFragment() : org.eclipse.emf.common.util.EList<uml.InteractionFragment>;
    }
}

