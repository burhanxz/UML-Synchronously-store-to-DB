/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>State</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A State models a situation during which some (usually implicit) invariant condition holds.
     * <p>From package UML::StateMachines.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.State#getConnection}</li>
     * <li>{@link uml.State#getConnectionPoint}</li>
     * <li>{@link uml.State#getDeferrableTrigger}</li>
     * <li>{@link uml.State#getDoActivity}</li>
     * <li>{@link uml.State#getEntry}</li>
     * <li>{@link uml.State#getExit}</li>
     * <li>{@link uml.State#isIsComposite}</li>
     * <li>{@link uml.State#isIsOrthogonal}</li>
     * <li>{@link uml.State#isIsSimple}</li>
     * <li>{@link uml.State#isIsSubmachineState}</li>
     * <li>{@link uml.State#getRedefinedState}</li>
     * <li>{@link uml.State#getStateInvariant}</li>
     * <li>{@link uml.State#getSubmachine}</li>
     * <li>{@link uml.State#getRegion}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getState()
     * @model
     * @generated
     * @class
     */
    export interface State extends uml.Namespace, uml.RedefinableElement, uml.Vertex {
        /**
         * Returns the value of the '<em><b>Connection</b></em>' containment reference list.
         * The list contents are of type {@link uml.ConnectionPointReference}.
         * It is bidirectional and its opposite is '{@link uml.ConnectionPointReference#getState}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The entry and exit connection points used in conjunction with this (submachine) State, i.e., as targets and sources, respectively, in the Region with the submachine State. A connection point reference references the corresponding definition of a connection point Pseudostate in the StateMachine referenced by the submachine State.
         * <p>From package UML::StateMachines.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Connection</em>' containment reference list.
         * @see uml.UmlPackage#getState_Connection()
         * @see uml.ConnectionPointReference#getState
         * @model opposite="state" containment="true" ordered="false"
         * @generated
         */
        getConnection() : org.eclipse.emf.common.util.EList<uml.ConnectionPointReference>;

        /**
         * Returns the value of the '<em><b>Connection Point</b></em>' containment reference list.
         * The list contents are of type {@link uml.Pseudostate}.
         * It is bidirectional and its opposite is '{@link uml.Pseudostate#getState}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The entry and exit Pseudostates of a composite State. These can only be entry or exit Pseudostates, and they must have different names. They can only be defined for composite States.
         * <p>From package UML::StateMachines.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Connection Point</em>' containment reference list.
         * @see uml.UmlPackage#getState_ConnectionPoint()
         * @see uml.Pseudostate#getState
         * @model opposite="state" containment="true" ordered="false"
         * @generated
         */
        getConnectionPoint() : org.eclipse.emf.common.util.EList<uml.Pseudostate>;

        /**
         * Returns the value of the '<em><b>Deferrable Trigger</b></em>' containment reference list.
         * The list contents are of type {@link uml.Trigger}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A list of Triggers that are candidates to be retained by the StateMachine if they trigger no Transitions out of the State (not consumed). A deferred Trigger is retained until the StateMachine reaches a State configuration where it is no longer deferred.
         * <p>From package UML::StateMachines.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Deferrable Trigger</em>' containment reference list.
         * @see uml.UmlPackage#getState_DeferrableTrigger()
         * @model containment="true" ordered="false"
         * @generated
         */
        getDeferrableTrigger() : org.eclipse.emf.common.util.EList<uml.Trigger>;

        /**
         * Returns the value of the '<em><b>Do Activity</b></em>' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * An optional Behavior that is executed while being in the State. The execution starts when this State is entered, and ceases either by itself when done, or when the State is exited, whichever comes first.
         * <p>From package UML::StateMachines.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Do Activity</em>' containment reference.
         * @see #setDoActivity(Behavior)
         * @see uml.UmlPackage#getState_DoActivity()
         * @model containment="true" ordered="false"
         * @generated
         */
        getDoActivity() : uml.Behavior;

        /**
         * Sets the value of the '{@link uml.State#getDoActivity}' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Do Activity</em>' containment reference.
         * @see #getDoActivity()
         * @generated
         */
        setDoActivity(value : uml.Behavior);

        /**
         * Returns the value of the '<em><b>Entry</b></em>' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * An optional Behavior that is executed whenever this State is entered regardless of the Transition taken to reach the State. If defined, entry Behaviors are always executed to completion prior to any internal Behavior or Transitions performed within the State.
         * <p>From package UML::StateMachines.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Entry</em>' containment reference.
         * @see #setEntry(Behavior)
         * @see uml.UmlPackage#getState_Entry()
         * @model containment="true" ordered="false"
         * @generated
         */
        getEntry() : uml.Behavior;

        /**
         * Sets the value of the '{@link uml.State#getEntry}' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Entry</em>' containment reference.
         * @see #getEntry()
         * @generated
         */
        setEntry(value : uml.Behavior);

        /**
         * Returns the value of the '<em><b>Exit</b></em>' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * An optional Behavior that is executed whenever this State is exited regardless of which Transition was taken out of the State. If defined, exit Behaviors are always executed to completion only after all internal and transition Behaviors have completed execution.
         * <p>From package UML::StateMachines.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Exit</em>' containment reference.
         * @see #setExit(Behavior)
         * @see uml.UmlPackage#getState_Exit()
         * @model containment="true" ordered="false"
         * @generated
         */
        getExit() : uml.Behavior;

        /**
         * Sets the value of the '{@link uml.State#getExit}' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Exit</em>' containment reference.
         * @see #getExit()
         * @generated
         */
        setExit(value : uml.Behavior);

        /**
         * Returns the value of the '<em><b>Is Composite</b></em>' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A state with isComposite=true is said to be a composite State. A composite State is a State that contains at least one Region.
         * <p>From package UML::StateMachines.</p>
         * <!-- end-model-doc -->
         * @return {boolean} the value of the '<em>Is Composite</em>' attribute.
         * @see uml.UmlPackage#getState_IsComposite()
         * @model dataType="types.Boolean" required="true" transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        isIsComposite() : boolean;

        /**
         * Returns the value of the '<em><b>Is Orthogonal</b></em>' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A State with isOrthogonal=true is said to be an orthogonal composite State An orthogonal composite State contains two or more Regions.
         * <p>From package UML::StateMachines.</p>
         * <!-- end-model-doc -->
         * @return {boolean} the value of the '<em>Is Orthogonal</em>' attribute.
         * @see uml.UmlPackage#getState_IsOrthogonal()
         * @model dataType="types.Boolean" required="true" transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        isIsOrthogonal() : boolean;

        /**
         * Returns the value of the '<em><b>Is Simple</b></em>' attribute.
         * The default value is <code>"true"</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A State with isSimple=true is said to be a simple State A simple State does not have any Regions and it does not refer to any submachine StateMachine.
         * <p>From package UML::StateMachines.</p>
         * <!-- end-model-doc -->
         * @return {boolean} the value of the '<em>Is Simple</em>' attribute.
         * @see uml.UmlPackage#getState_IsSimple()
         * @model default="true" dataType="types.Boolean" required="true" transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        isIsSimple() : boolean;

        /**
         * Returns the value of the '<em><b>Is Submachine State</b></em>' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A State with isSubmachineState=true is said to be a submachine State Such a State refers to another StateMachine(submachine).
         * <p>From package UML::StateMachines.</p>
         * <!-- end-model-doc -->
         * @return {boolean} the value of the '<em>Is Submachine State</em>' attribute.
         * @see uml.UmlPackage#getState_IsSubmachineState()
         * @model dataType="types.Boolean" required="true" transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        isIsSubmachineState() : boolean;

        /**
         * Returns the value of the '<em><b>Redefined State</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The State of which this State is a redefinition.
         * <p>From package UML::StateMachines.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Redefined State</em>' reference.
         * @see #setRedefinedState(State)
         * @see uml.UmlPackage#getState_RedefinedState()
         * @model ordered="false"
         * @generated
         */
        getRedefinedState() : State;

        /**
         * Sets the value of the '{@link uml.State#getRedefinedState}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Redefined State</em>' reference.
         * @see #getRedefinedState()
         * @generated
         */
        setRedefinedState(value : State);

        /**
         * Returns the value of the '<em><b>State Invariant</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Specifies conditions that are always true when this State is the current State. In ProtocolStateMachines state invariants are additional conditions to the preconditions of the outgoing Transitions, and to the postcondition of the incoming Transitions.
         * <p>From package UML::StateMachines.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>State Invariant</em>' reference.
         * @see #setStateInvariant(Constraint)
         * @see uml.UmlPackage#getState_StateInvariant()
         * @model ordered="false"
         * @generated
         */
        getStateInvariant() : uml.Constraint;

        /**
         * Sets the value of the '{@link uml.State#getStateInvariant}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>State Invariant</em>' reference.
         * @see #getStateInvariant()
         * @generated
         */
        setStateInvariant(value : uml.Constraint);

        /**
         * Returns the value of the '<em><b>Submachine</b></em>' reference.
         * It is bidirectional and its opposite is '{@link uml.StateMachine#getSubmachineState}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The StateMachine that is to be inserted in place of the (submachine) State.
         * <p>From package UML::StateMachines.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Submachine</em>' reference.
         * @see #setSubmachine(StateMachine)
         * @see uml.UmlPackage#getState_Submachine()
         * @see uml.StateMachine#getSubmachineState
         * @model opposite="submachineState" ordered="false"
         * @generated
         */
        getSubmachine() : uml.StateMachine;

        /**
         * Sets the value of the '{@link uml.State#getSubmachine}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Submachine</em>' reference.
         * @see #getSubmachine()
         * @generated
         */
        setSubmachine(value : uml.StateMachine);

        /**
         * Returns the value of the '<em><b>Region</b></em>' containment reference list.
         * The list contents are of type {@link uml.Region}.
         * It is bidirectional and its opposite is '{@link uml.Region#getState}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Regions owned directly by the State.
         * <p>From package UML::StateMachines.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Region</em>' containment reference list.
         * @see uml.UmlPackage#getState_Region()
         * @see uml.Region#getState
         * @model opposite="state" containment="true" ordered="false"
         * @generated
         */
        getRegion() : org.eclipse.emf.common.util.EList<uml.Region>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Only entry or exit Pseudostates can serve as connection points.
         * connectionPoint->forAll(kind = PseudostateKind::entryPoint or kind = PseudostateKind::exitPoint)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        entry_or_exit(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Only submachine States can have connection point references.
         * isSubmachineState implies connection->notEmpty( )
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        submachine_states(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Only composite States can have entry or exit Pseudostates defined.
         * connectionPoint->notEmpty() implies isComposite
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        composite_states(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The connection point references used as destinations/sources of Transitions associated with a submachine State must be defined as entry/exit points in the submachine StateMachine.
         * self.isSubmachineState implies (self.connection->forAll (cp |
         * cp.entry->forAll (ps | ps.stateMachine = self.submachine) and
         * cp.exit->forAll (ps | ps.stateMachine = self.submachine)))
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        destinations_or_sources_of_transitions(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A State is not allowed to have both a submachine and Regions.
         * isComposite implies not isSubmachineState
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        submachine_or_regions(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A composite State is a State with at least one Region.
         * result = (region->notEmpty())
         * <p>From package UML::StateMachines.</p>
         * <!-- end-model-doc -->
         * @model kind="operation" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         * @return {boolean}
         */
        isComposite() : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * An orthogonal State is a composite state with at least 2 regions.
         * result = (region->size () > 1)
         * <p>From package UML::StateMachines.</p>
         * <!-- end-model-doc -->
         * @model kind="operation" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         * @return {boolean}
         */
        isOrthogonal() : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A simple State is a State without any regions.
         * result = ((region->isEmpty()) and not isSubmachineState())
         * <p>From package UML::StateMachines.</p>
         * <!-- end-model-doc -->
         * @model kind="operation" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         * @return {boolean}
         */
        isSimple() : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Only submachine State references another StateMachine.
         * result = (submachine <> null)
         * <p>From package UML::StateMachines.</p>
         * <!-- end-model-doc -->
         * @model kind="operation" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         * @return {boolean}
         */
        isSubmachineState() : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The redefinition context of a State is the nearest containing StateMachine.
         * result = (let sm : StateMachine = containingStateMachine() in
         * if sm._'context' = null or sm.general->notEmpty() then
         * sm
         * else
         * sm._'context'
         * endif)
         * <p>From package UML::StateMachines.</p>
         * <!-- end-model-doc -->
         * @model required="true" ordered="false"
         * @generated
         * @return {*}
         */
        redefinitionContext() : uml.Classifier;
    }
}

