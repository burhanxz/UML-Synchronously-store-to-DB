/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Pseudostate</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A Pseudostate is an abstraction that encompasses different types of transient Vertices in the StateMachine graph. A StateMachine instance never comes to rest in a Pseudostate, instead, it will exit and enter the Pseudostate within a single run-to-completion step.
     * <p>From package UML::StateMachines.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.Pseudostate#getState}</li>
     * <li>{@link uml.Pseudostate#getKind}</li>
     * <li>{@link uml.Pseudostate#getStateMachine}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getPseudostate()
     * @model
     * @generated
     * @class
     */
    export interface Pseudostate extends uml.Vertex {
        /**
         * Returns the value of the '<em><b>State</b></em>' container reference.
         * It is bidirectional and its opposite is '{@link uml.State#getConnectionPoint}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The State that owns this Pseudostate and in which it appears.
         * <p>From package UML::StateMachines.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>State</em>' container reference.
         * @see #setState(State)
         * @see uml.UmlPackage#getPseudostate_State()
         * @see uml.State#getConnectionPoint
         * @model opposite="connectionPoint" transient="false" ordered="false"
         * @generated
         */
        getState() : uml.State;

        /**
         * Sets the value of the '{@link uml.Pseudostate#getState}' container reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>State</em>' container reference.
         * @see #getState()
         * @generated
         */
        setState(value : uml.State);

        /**
         * Returns the value of the '<em><b>Kind</b></em>' attribute.
         * The default value is <code>"initial"</code>.
         * The literals are from the enumeration {@link uml.PseudostateKind}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Determines the precise type of the Pseudostate and can be one of: entryPoint, exitPoint, initial, deepHistory, shallowHistory, join, fork, junction, terminate or choice.
         * <p>From package UML::StateMachines.</p>
         * <!-- end-model-doc -->
         * @return {uml.PseudostateKind} the value of the '<em>Kind</em>' attribute.
         * @see uml.PseudostateKind
         * @see #setKind(PseudostateKind)
         * @see uml.UmlPackage#getPseudostate_Kind()
         * @model default="initial" required="true" ordered="false"
         * @generated
         */
        getKind() : uml.PseudostateKind;

        /**
         * Sets the value of the '{@link uml.Pseudostate#getKind}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {uml.PseudostateKind} value the new value of the '<em>Kind</em>' attribute.
         * @see uml.PseudostateKind
         * @see #getKind()
         * @generated
         */
        setKind(value : uml.PseudostateKind);

        /**
         * Returns the value of the '<em><b>State Machine</b></em>' container reference.
         * It is bidirectional and its opposite is '{@link uml.StateMachine#getConnectionPoint}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The StateMachine in which this Pseudostate is defined. This only applies to Pseudostates of the kind entryPoint or exitPoint.
         * <p>From package UML::StateMachines.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>State Machine</em>' container reference.
         * @see #setStateMachine(StateMachine)
         * @see uml.UmlPackage#getPseudostate_StateMachine()
         * @see uml.StateMachine#getConnectionPoint
         * @model opposite="connectionPoint" transient="false" ordered="false"
         * @generated
         */
        getStateMachine() : uml.StateMachine;

        /**
         * Sets the value of the '{@link uml.Pseudostate#getStateMachine}' container reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>State Machine</em>' container reference.
         * @see #getStateMachine()
         * @generated
         */
        setStateMachine(value : uml.StateMachine);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * All transitions outgoing a fork vertex must target states in different regions of an orthogonal state.
         * (kind = PseudostateKind::fork) implies
         * 
         * -- for any pair of outgoing transitions there exists an orthogonal state which contains the targets of these transitions
         * -- such that these targets belong to different regions of that orthogonal state
         * 
         * outgoing->forAll(t1:Transition, t2:Transition | let contState:State = containingStateMachine().LCAState(t1.target, t2.target) in
         * ((contState <> null) and (contState.region
         * ->exists(r1:Region, r2: Region | (r1 <> r2) and t1.target.isContainedInRegion(r1) and t2.target.isContainedInRegion(r2)))))
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        transitions_outgoing(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * In a complete statemachine, a choice Vertex must have at least one incoming and one outgoing Transition.
         * (kind = PseudostateKind::choice) implies (incoming->size() >= 1 and outgoing->size() >= 1)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        choice_vertex(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The outgoing Transition from an initial vertex may have a behavior, but not a trigger or a guard.
         * (kind = PseudostateKind::initial) implies (outgoing.guard = null and outgoing.trigger->isEmpty())
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        outgoing_from_initial(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * In a complete StateMachine, a join Vertex must have at least two incoming Transitions and exactly one outgoing Transition.
         * (kind = PseudostateKind::join) implies (outgoing->size() = 1 and incoming->size() >= 2)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        join_vertex(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * In a complete StateMachine, a junction Vertex must have at least one incoming and one outgoing Transition.
         * (kind = PseudostateKind::junction) implies (incoming->size() >= 1 and outgoing->size() >= 1)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        junction_vertex(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * History Vertices can have at most one outgoing Transition.
         * ((kind = PseudostateKind::deepHistory) or (kind = PseudostateKind::shallowHistory)) implies (outgoing->size() <= 1)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        history_vertices(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * An initial Vertex can have at most one outgoing Transition.
         * (kind = PseudostateKind::initial) implies (outgoing->size() <= 1)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        initial_vertex(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * In a complete StateMachine, a fork Vertex must have at least two outgoing Transitions and exactly one incoming Transition.
         * (kind = PseudostateKind::fork) implies (incoming->size() = 1 and outgoing->size() >= 2)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        fork_vertex(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * All Transitions incoming a join Vertex must originate in different Regions of an orthogonal State.
         * (kind = PseudostateKind::join) implies
         * 
         * -- for any pair of incoming transitions there exists an orthogonal state which contains the source vetices of these transitions
         * -- such that these source vertices belong to different regions of that orthogonal state
         * 
         * incoming->forAll(t1:Transition, t2:Transition | let contState:State = containingStateMachine().LCAState(t1.source, t2.source) in
         * ((contState <> null) and (contState.region
         * ->exists(r1:Region, r2: Region | (r1 <> r2) and t1.source.isContainedInRegion(r1) and t2.source.isContainedInRegion(r2)))))
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        transitions_incoming(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

