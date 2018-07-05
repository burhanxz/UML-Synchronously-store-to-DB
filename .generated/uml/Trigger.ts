/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Trigger</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A Trigger specifies a specific point  at which an Event occurrence may trigger an effect in a Behavior. A Trigger may be qualified by the Port on which the Event occurred.
     * <p>From package UML::CommonBehavior.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.Trigger#getEvent}</li>
     * <li>{@link uml.Trigger#getPort}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getTrigger()
     * @model
     * @generated
     * @class
     */
    export interface Trigger extends uml.NamedElement {
        /**
         * Returns the value of the '<em><b>Event</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Event that detected by the Trigger.
         * <p>From package UML::CommonBehavior.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Event</em>' reference.
         * @see #setEvent(Event)
         * @see uml.UmlPackage#getTrigger_Event()
         * @model required="true" ordered="false"
         * @generated
         */
        getEvent() : uml.Event;

        /**
         * Sets the value of the '{@link uml.Trigger#getEvent}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Event</em>' reference.
         * @see #getEvent()
         * @generated
         */
        setEvent(value : uml.Event);

        /**
         * Returns the value of the '<em><b>Port</b></em>' reference list.
         * The list contents are of type {@link uml.Port}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A optional Port of through which the given effect is detected.
         * <p>From package UML::CommonBehavior.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Port</em>' reference list.
         * @see uml.UmlPackage#getTrigger_Port()
         * @model ordered="false"
         * @generated
         */
        getPort() : org.eclipse.emf.common.util.EList<uml.Port>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If a Trigger specifies one or more ports, the event of the Trigger must be a MessageEvent.
         * port->notEmpty() implies event.oclIsKindOf(MessageEvent)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        trigger_with_ports(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

