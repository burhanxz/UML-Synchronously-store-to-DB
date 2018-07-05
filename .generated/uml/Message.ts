/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Message</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A Message defines a particular communication between Lifelines of an Interaction.
     * <p>From package UML::Interactions.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.Message#getArgument}</li>
     * <li>{@link uml.Message#getConnector}</li>
     * <li>{@link uml.Message#getInteraction}</li>
     * <li>{@link uml.Message#getMessageKind}</li>
     * <li>{@link uml.Message#getMessageSort}</li>
     * <li>{@link uml.Message#getReceiveEvent}</li>
     * <li>{@link uml.Message#getSendEvent}</li>
     * <li>{@link uml.Message#getSignature}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getMessage()
     * @model
     * @generated
     * @class
     */
    export interface Message extends uml.NamedElement {
        /**
         * Returns the value of the '<em><b>Argument</b></em>' containment reference list.
         * The list contents are of type {@link uml.ValueSpecification}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The arguments of the Message.
         * <p>From package UML::Interactions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Argument</em>' containment reference list.
         * @see uml.UmlPackage#getMessage_Argument()
         * @model containment="true"
         * @generated
         */
        getArgument() : org.eclipse.emf.common.util.EList<uml.ValueSpecification>;

        /**
         * Returns the value of the '<em><b>Connector</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Connector on which this Message is sent.
         * <p>From package UML::Interactions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Connector</em>' reference.
         * @see #setConnector(Connector)
         * @see uml.UmlPackage#getMessage_Connector()
         * @model ordered="false"
         * @generated
         */
        getConnector() : uml.Connector;

        /**
         * Sets the value of the '{@link uml.Message#getConnector}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Connector</em>' reference.
         * @see #getConnector()
         * @generated
         */
        setConnector(value : uml.Connector);

        /**
         * Returns the value of the '<em><b>Interaction</b></em>' container reference.
         * It is bidirectional and its opposite is '{@link uml.Interaction#getMessage}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The enclosing Interaction owning the Message.
         * <p>From package UML::Interactions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Interaction</em>' container reference.
         * @see #setInteraction(Interaction)
         * @see uml.UmlPackage#getMessage_Interaction()
         * @see uml.Interaction#getMessage
         * @model opposite="message" required="true" transient="false" ordered="false"
         * @generated
         */
        getInteraction() : uml.Interaction;

        /**
         * Sets the value of the '{@link uml.Message#getInteraction}' container reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Interaction</em>' container reference.
         * @see #getInteraction()
         * @generated
         */
        setInteraction(value : uml.Interaction);

        /**
         * Returns the value of the '<em><b>Message Kind</b></em>' attribute.
         * The default value is <code>"unknown"</code>.
         * The literals are from the enumeration {@link uml.MessageKind}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The derived kind of the Message (complete, lost, found, or unknown).
         * <p>From package UML::Interactions.</p>
         * <!-- end-model-doc -->
         * @return {uml.MessageKind} the value of the '<em>Message Kind</em>' attribute.
         * @see uml.MessageKind
         * @see uml.UmlPackage#getMessage_MessageKind()
         * @model default="unknown" required="true" transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getMessageKind() : uml.MessageKind;

        /**
         * Returns the value of the '<em><b>Message Sort</b></em>' attribute.
         * The default value is <code>"synchCall"</code>.
         * The literals are from the enumeration {@link uml.MessageSort}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The sort of communication reflected by the Message.
         * <p>From package UML::Interactions.</p>
         * <!-- end-model-doc -->
         * @return {uml.MessageSort} the value of the '<em>Message Sort</em>' attribute.
         * @see uml.MessageSort
         * @see #setMessageSort(MessageSort)
         * @see uml.UmlPackage#getMessage_MessageSort()
         * @model default="synchCall" required="true" ordered="false"
         * @generated
         */
        getMessageSort() : uml.MessageSort;

        /**
         * Sets the value of the '{@link uml.Message#getMessageSort}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {uml.MessageSort} value the new value of the '<em>Message Sort</em>' attribute.
         * @see uml.MessageSort
         * @see #getMessageSort()
         * @generated
         */
        setMessageSort(value : uml.MessageSort);

        /**
         * Returns the value of the '<em><b>Receive Event</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * References the Receiving of the Message.
         * <p>From package UML::Interactions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Receive Event</em>' reference.
         * @see #setReceiveEvent(MessageEnd)
         * @see uml.UmlPackage#getMessage_ReceiveEvent()
         * @model ordered="false"
         * @generated
         */
        getReceiveEvent() : uml.MessageEnd;

        /**
         * Sets the value of the '{@link uml.Message#getReceiveEvent}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Receive Event</em>' reference.
         * @see #getReceiveEvent()
         * @generated
         */
        setReceiveEvent(value : uml.MessageEnd);

        /**
         * Returns the value of the '<em><b>Send Event</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * References the Sending of the Message.
         * <p>From package UML::Interactions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Send Event</em>' reference.
         * @see #setSendEvent(MessageEnd)
         * @see uml.UmlPackage#getMessage_SendEvent()
         * @model ordered="false"
         * @generated
         */
        getSendEvent() : uml.MessageEnd;

        /**
         * Sets the value of the '{@link uml.Message#getSendEvent}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Send Event</em>' reference.
         * @see #getSendEvent()
         * @generated
         */
        setSendEvent(value : uml.MessageEnd);

        /**
         * Returns the value of the '<em><b>Signature</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The signature of the Message is the specification of its content. It refers either an Operation or a Signal.
         * <p>From package UML::Interactions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Signature</em>' reference.
         * @see #setSignature(NamedElement)
         * @see uml.UmlPackage#getMessage_Signature()
         * @model ordered="false"
         * @generated
         */
        getSignature() : uml.NamedElement;

        /**
         * Sets the value of the '{@link uml.Message#getSignature}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Signature</em>' reference.
         * @see #getSignature()
         * @generated
         */
        setSignature(value : uml.NamedElement);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If the sendEvent and the receiveEvent of the same Message are on the same Lifeline, the sendEvent must be ordered before the receiveEvent.
         * receiveEvent.oclIsKindOf(MessageOccurrenceSpecification)
         * implies
         * let f :  Lifeline = sendEvent->select(oclIsKindOf(MessageOccurrenceSpecification)).oclAsType(MessageOccurrenceSpecification)->asOrderedSet()->first().covered in
         * f = receiveEvent->select(oclIsKindOf(MessageOccurrenceSpecification)).oclAsType(MessageOccurrenceSpecification)->asOrderedSet()->first().covered  implies
         * f.events->indexOf(sendEvent.oclAsType(MessageOccurrenceSpecification)->asOrderedSet()->first() ) <
         * f.events->indexOf(receiveEvent.oclAsType(MessageOccurrenceSpecification)->asOrderedSet()->first() )
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        sending_receiving_message_event(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Arguments of a Message must only be: i) attributes of the sending lifeline, ii) constants, iii) symbolic values (which are wildcard values representing any legal value), iv) explicit parameters of the enclosing Interaction, v) attributes of the class owning the Interaction.
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        arguments(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Messages cannot cross boundaries of CombinedFragments or their operands.  This is true if and only if both MessageEnds are enclosed within the same InteractionFragment (i.e., an InteractionOperand or an Interaction).
         * sendEvent->notEmpty() and receiveEvent->notEmpty() implies
         * let sendEnclosingFrag : Set(InteractionFragment) =
         * sendEvent->asOrderedSet()->first().enclosingFragment()
         * in
         * let receiveEnclosingFrag : Set(InteractionFragment) =
         * receiveEvent->asOrderedSet()->first().enclosingFragment()
         * in  sendEnclosingFrag = receiveEnclosingFrag
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        cannot_cross_boundaries(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * In the case when the Message signature is a Signal, the arguments of the Message must correspond to the attributes of the Signal. A Message Argument corresponds to a Signal Attribute if the Argument is of the same Class or a specialization of that of the Attribute.
         * (messageSort = MessageSort::asynchSignal ) and signature.oclIsKindOf(Signal) implies
         * let signalAttributes : OrderedSet(Property) = signature.oclAsType(Signal).inheritedMember()->
         * select(n:NamedElement | n.oclIsTypeOf(Property))->collect(oclAsType(Property))->asOrderedSet()
         * in signalAttributes->size() = self.argument->size()
         * and self.argument->forAll( o: ValueSpecification |
         * not (o.oclIsKindOf(Expression)
         * and o.oclAsType(Expression).symbol->size()=0
         * and o.oclAsType(Expression).operand->isEmpty() ) implies
         * let p : Property = signalAttributes->at(self.argument->indexOf(o))
         * in o.type.oclAsType(Classifier).conformsTo(p.type.oclAsType(Classifier)))
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        signature_is_signal(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If the MessageEnds are both OccurrenceSpecifications, then the connector must go between the Parts represented by the Lifelines of the two MessageEnds.
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        occurrence_specifications(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The signature must either refer an Operation (in which case messageSort is either synchCall or asynchCall or reply) or a Signal (in which case messageSort is asynchSignal). The name of the NamedElement referenced by signature must be the same as that of the Message.
         * signature->notEmpty() implies
         * ((signature.oclIsKindOf(Operation) and
         * (messageSort = MessageSort::asynchCall or messageSort = MessageSort::synchCall or messageSort = MessageSort::reply)
         * ) or (signature.oclIsKindOf(Signal)  and messageSort = MessageSort::asynchSignal )
         * ) and name = signature.name
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        signature_refer_to(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * In the case when a Message with messageSort synchCall or asynchCall has a non empty Operation signature, the arguments of the Message must correspond to the in and inout parameters of the Operation. A Parameter corresponds to an Argument if the Argument is of the same Class or a specialization of that of the Parameter.
         * (messageSort = MessageSort::asynchCall or messageSort = MessageSort::synchCall) and signature.oclIsKindOf(Operation)  implies
         * let requestParms : OrderedSet(Parameter) = signature.oclAsType(Operation).ownedParameter->
         * select(direction = ParameterDirectionKind::inout or direction = ParameterDirectionKind::_'in'  )
         * in requestParms->size() = self.argument->size() and
         * self.argument->forAll( o: ValueSpecification |
         * not (o.oclIsKindOf(Expression) and o.oclAsType(Expression).symbol->size()=0 and o.oclAsType(Expression).operand->isEmpty() ) implies
         * let p : Parameter = requestParms->at(self.argument->indexOf(o)) in
         * o.type.oclAsType(Classifier).conformsTo(p.type.oclAsType(Classifier))
         * )
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        signature_is_operation_request(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * In the case when a Message with messageSort reply has a non empty Operation signature, the arguments of the Message must correspond to the out, inout, and return parameters of the Operation. A Parameter corresponds to an Argument if the Argument is of the same Class or a specialization of that of the Parameter.
         * (messageSort = MessageSort::reply) and signature.oclIsKindOf(Operation) implies
         * let replyParms : OrderedSet(Parameter) = signature.oclAsType(Operation).ownedParameter->
         * select(direction = ParameterDirectionKind::inout or direction = ParameterDirectionKind::out or direction = ParameterDirectionKind::return)
         * in replyParms->size() = self.argument->size() and
         * self.argument->forAll( o: ValueSpecification | o.oclIsKindOf(Expression) and let e : Expression = o.oclAsType(Expression) in
         * e.operand->notEmpty()  implies
         * let p : Parameter = replyParms->at(self.argument->indexOf(o)) in
         * e.operand->asSequence()->first().type.oclAsType(Classifier).conformsTo(p.type.oclAsType(Classifier))
         * )
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        signature_is_operation_reply(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

