/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Accept Event Action</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * An AcceptEventAction is an Action that waits for the occurrence of one or more specific Events.
     * <p>From package UML::Actions.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.AcceptEventAction#isIsUnmarshall}</li>
     * <li>{@link uml.AcceptEventAction#getResult}</li>
     * <li>{@link uml.AcceptEventAction#getTrigger}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getAcceptEventAction()
     * @model
     * @generated
     * @class
     */
    export interface AcceptEventAction extends uml.Action {
        /**
         * Returns the value of the '<em><b>Is Unmarshall</b></em>' attribute.
         * The default value is <code>"false"</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Indicates whether there is a single OutputPin for a SignalEvent occurrence, or multiple OutputPins for attribute values of the instance of the Signal associated with a SignalEvent occurrence.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {boolean} the value of the '<em>Is Unmarshall</em>' attribute.
         * @see #setIsUnmarshall(boolean)
         * @see uml.UmlPackage#getAcceptEventAction_IsUnmarshall()
         * @model default="false" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         */
        isIsUnmarshall() : boolean;

        /**
         * Sets the value of the '{@link uml.AcceptEventAction#isIsUnmarshall}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {boolean} value the new value of the '<em>Is Unmarshall</em>' attribute.
         * @see #isIsUnmarshall()
         * @generated
         */
        setIsUnmarshall(value : boolean);

        /**
         * Returns the value of the '<em><b>Result</b></em>' containment reference list.
         * The list contents are of type {@link uml.OutputPin}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * OutputPins holding the values received from an Event occurrence.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Result</em>' containment reference list.
         * @see uml.UmlPackage#getAcceptEventAction_Result()
         * @model containment="true"
         * @generated
         */
        getResult() : org.eclipse.emf.common.util.EList<uml.OutputPin>;

        /**
         * Returns the value of the '<em><b>Trigger</b></em>' containment reference list.
         * The list contents are of type {@link uml.Trigger}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Triggers specifying the Events of which the AcceptEventAction waits for occurrences.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Trigger</em>' containment reference list.
         * @see uml.UmlPackage#getAcceptEventAction_Trigger()
         * @model containment="true" required="true" ordered="false"
         * @generated
         */
        getTrigger() : org.eclipse.emf.common.util.EList<uml.Trigger>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If isUnmarshall=false and any of the triggers are for SignalEvents or TimeEvents, there must be exactly one result OutputPin with multiplicity 1..1.
         * not isUnmarshall and trigger->exists(event.oclIsKindOf(SignalEvent) or event.oclIsKindOf(TimeEvent)) implies
         * output->size() = 1 and output->first().is(1,1)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        one_output_pin(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * AcceptEventActions may have no input pins.
         * input->size() = 0
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        no_input_pins(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * There are no OutputPins if the trigger events are only ChangeEvents and/or CallEvents when this action is an instance of AcceptEventAction and not an instance of a descendant of AcceptEventAction (such as AcceptCallAction).
         * (self.oclIsTypeOf(AcceptEventAction) and
         * (trigger->forAll(event.oclIsKindOf(ChangeEvent) or
         * event.oclIsKindOf(CallEvent))))
         * implies output->size() = 0
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        no_output_pins(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If isUnmarshall is true (and this is not an AcceptCallAction), there must be exactly one trigger, which is for a SignalEvent. The number of result output pins must be the same as the number of attributes of the signal. The type and ordering of each result output pin must be the same as the corresponding attribute of the signal. The multiplicity of each result output pin must be compatible with the multiplicity of the corresponding attribute.
         * isUnmarshall and self.oclIsTypeOf(AcceptEventAction) implies
         * trigger->size()=1 and
         * trigger->asSequence()->first().event.oclIsKindOf(SignalEvent) and
         * let attribute: OrderedSet(Property) = trigger->asSequence()->first().event.oclAsType(SignalEvent).signal.allAttributes() in
         * attribute->size()>0 and result->size() = attribute->size() and
         * Sequence{1..result->size()}->forAll(i |
         * result->at(i).type = attribute->at(i).type and
         * result->at(i).isOrdered = attribute->at(i).isOrdered and
         * result->at(i).includesMultiplicity(attribute->at(i)))
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        unmarshall_signal_events(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If isUnmarshall=false and all the triggers are for SignalEvents, then the type of the single result OutputPin must either be null or all the signals must conform to it.
         * not isUnmarshall implies
         * result->isEmpty() or
         * let type: Type = result->first().type in
         * type=null or
         * (trigger->forAll(event.oclIsKindOf(SignalEvent)) and
         * trigger.event.oclAsType(SignalEvent).signal->forAll(s | s.conformsTo(type)))
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        conforming_type(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

