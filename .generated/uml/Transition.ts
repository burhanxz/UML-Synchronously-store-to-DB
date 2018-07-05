/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Transition</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A Transition represents an arc between exactly one source Vertex and exactly one Target vertex (the source and targets may be the same Vertex). It may form part of a compound transition, which takes the StateMachine from one steady State configuration to another, representing the full response of the StateMachine to an occurrence of an Event that triggered it.
     * <p>From package UML::StateMachines.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.Transition#getEffect}</li>
     * <li>{@link uml.Transition#getGuard}</li>
     * <li>{@link uml.Transition#getKind}</li>
     * <li>{@link uml.Transition#getRedefinedTransition}</li>
     * <li>{@link uml.Transition#getSource}</li>
     * <li>{@link uml.Transition#getTarget}</li>
     * <li>{@link uml.Transition#getTrigger}</li>
     * <li>{@link uml.Transition#getContainer}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getTransition()
     * @model
     * @generated
     * @class
     */
    export interface Transition extends uml.Namespace, uml.RedefinableElement {
        /**
         * Returns the value of the '<em><b>Effect</b></em>' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Specifies an optional behavior to be performed when the Transition fires.
         * <p>From package UML::StateMachines.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Effect</em>' containment reference.
         * @see #setEffect(Behavior)
         * @see uml.UmlPackage#getTransition_Effect()
         * @model containment="true" ordered="false"
         * @generated
         */
        getEffect() : uml.Behavior;

        /**
         * Sets the value of the '{@link uml.Transition#getEffect}' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Effect</em>' containment reference.
         * @see #getEffect()
         * @generated
         */
        setEffect(value : uml.Behavior);

        /**
         * Returns the value of the '<em><b>Guard</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A guard is a Constraint that provides a fine-grained control over the firing of the Transition. The guard is evaluated when an Event occurrence is dispatched by the StateMachine. If the guard is true at that time, the Transition may be enabled, otherwise, it is disabled. Guards should be pure expressions without side effects. Guard expressions with side effects are ill formed.
         * <p>From package UML::StateMachines.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Guard</em>' reference.
         * @see #setGuard(Constraint)
         * @see uml.UmlPackage#getTransition_Guard()
         * @model ordered="false"
         * @generated
         */
        getGuard() : uml.Constraint;

        /**
         * Sets the value of the '{@link uml.Transition#getGuard}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Guard</em>' reference.
         * @see #getGuard()
         * @generated
         */
        setGuard(value : uml.Constraint);

        /**
         * Returns the value of the '<em><b>Kind</b></em>' attribute.
         * The default value is <code>"external"</code>.
         * The literals are from the enumeration {@link uml.TransitionKind}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Indicates the precise type of the Transition.
         * <p>From package UML::StateMachines.</p>
         * <!-- end-model-doc -->
         * @return {uml.TransitionKind} the value of the '<em>Kind</em>' attribute.
         * @see uml.TransitionKind
         * @see #setKind(TransitionKind)
         * @see uml.UmlPackage#getTransition_Kind()
         * @model default="external" required="true" ordered="false"
         * @generated
         */
        getKind() : uml.TransitionKind;

        /**
         * Sets the value of the '{@link uml.Transition#getKind}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {uml.TransitionKind} value the new value of the '<em>Kind</em>' attribute.
         * @see uml.TransitionKind
         * @see #getKind()
         * @generated
         */
        setKind(value : uml.TransitionKind);

        /**
         * Returns the value of the '<em><b>Redefined Transition</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Transition that is redefined by this Transition.
         * <p>From package UML::StateMachines.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Redefined Transition</em>' reference.
         * @see #setRedefinedTransition(Transition)
         * @see uml.UmlPackage#getTransition_RedefinedTransition()
         * @model ordered="false"
         * @generated
         */
        getRedefinedTransition() : Transition;

        /**
         * Sets the value of the '{@link uml.Transition#getRedefinedTransition}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Redefined Transition</em>' reference.
         * @see #getRedefinedTransition()
         * @generated
         */
        setRedefinedTransition(value : Transition);

        /**
         * Returns the value of the '<em><b>Source</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Designates the originating Vertex (State or Pseudostate) of the Transition.
         * <p>From package UML::StateMachines.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Source</em>' reference.
         * @see #setSource(Vertex)
         * @see uml.UmlPackage#getTransition_Source()
         * @model required="true" ordered="false"
         * @generated
         */
        getSource() : uml.Vertex;

        /**
         * Sets the value of the '{@link uml.Transition#getSource}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Source</em>' reference.
         * @see #getSource()
         * @generated
         */
        setSource(value : uml.Vertex);

        /**
         * Returns the value of the '<em><b>Target</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Designates the target Vertex that is reached when the Transition is taken.
         * <p>From package UML::StateMachines.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Target</em>' reference.
         * @see #setTarget(Vertex)
         * @see uml.UmlPackage#getTransition_Target()
         * @model required="true" ordered="false"
         * @generated
         */
        getTarget() : uml.Vertex;

        /**
         * Sets the value of the '{@link uml.Transition#getTarget}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Target</em>' reference.
         * @see #getTarget()
         * @generated
         */
        setTarget(value : uml.Vertex);

        /**
         * Returns the value of the '<em><b>Trigger</b></em>' containment reference list.
         * The list contents are of type {@link uml.Trigger}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Specifies the Triggers that may fire the transition.
         * <p>From package UML::StateMachines.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Trigger</em>' containment reference list.
         * @see uml.UmlPackage#getTransition_Trigger()
         * @model containment="true" ordered="false"
         * @generated
         */
        getTrigger() : org.eclipse.emf.common.util.EList<uml.Trigger>;

        /**
         * Returns the value of the '<em><b>Container</b></em>' container reference.
         * It is bidirectional and its opposite is '{@link uml.Region#getTransition}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Designates the Region that owns this Transition.
         * <p>From package UML::StateMachines.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Container</em>' container reference.
         * @see #setContainer(Region)
         * @see uml.UmlPackage#getTransition_Container()
         * @see uml.Region#getTransition
         * @model opposite="transition" required="true" transient="false" ordered="false"
         * @generated
         */
        getContainer() : uml.Region;

        /**
         * Sets the value of the '{@link uml.Transition#getContainer}' container reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Container</em>' container reference.
         * @see #getContainer()
         * @generated
         */
        setContainer(value : uml.Region);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A Transition with kind external can source any Vertex except entry points.
         * (kind = TransitionKind::external) implies
         * not (source.oclIsKindOf(Pseudostate) and source.oclAsType(Pseudostate).kind = PseudostateKind::entryPoint)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        state_is_external(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A join segment must not have Guards or Triggers.
         * (target.oclIsKindOf(Pseudostate) and target.oclAsType(Pseudostate).kind = PseudostateKind::join) implies (guard = null and trigger->isEmpty())
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        join_segment_guards(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A Transition with kind internal must have a State as its source, and its source and target must be equal.
         * (kind = TransitionKind::internal) implies
         * (source.oclIsKindOf (State) and source = target)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        state_is_internal(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Transitions outgoing Pseudostates may not have a Trigger.
         * source.oclIsKindOf(Pseudostate) and (source.oclAsType(Pseudostate).kind <> PseudostateKind::initial) implies trigger->isEmpty()
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        outgoing_pseudostates(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A join segment must always originate from a State.
         * (target.oclIsKindOf(Pseudostate) and target.oclAsType(Pseudostate).kind = PseudostateKind::join) implies (source.oclIsKindOf(State))
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        join_segment_state(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A fork segment must always target a State.
         * (source.oclIsKindOf(Pseudostate) and  source.oclAsType(Pseudostate).kind = PseudostateKind::fork) implies (target.oclIsKindOf(State))
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        fork_segment_state(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A Transition with kind local must have a composite State or an entry point as its source.
         * (kind = TransitionKind::local) implies
         * ((source.oclIsKindOf (State) and source.oclAsType(State).isComposite) or
         * (source.oclIsKindOf (Pseudostate) and source.oclAsType(Pseudostate).kind = PseudostateKind::entryPoint))
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        state_is_local(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * An initial Transition at the topmost level Region of a StateMachine that has no Trigger.
         * (source.oclIsKindOf(Pseudostate) and container.stateMachine->notEmpty()) implies
         * trigger->isEmpty()
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        initial_transition(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A fork segment must not have Guards or Triggers.
         * (source.oclIsKindOf(Pseudostate) and source.oclAsType(Pseudostate).kind = PseudostateKind::fork) implies (guard = null and trigger->isEmpty())
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        fork_segment_guards(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The query containingStateMachine() returns the StateMachine that contains the Transition either directly or transitively.
         * result = (container.containingStateMachine())
         * <p>From package UML::StateMachines.</p>
         * <!-- end-model-doc -->
         * @model required="true" ordered="false"
         * @generated
         * @return {*}
         */
        containingStateMachine() : uml.StateMachine;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The redefinition context of a Transition is the nearest containing StateMachine.
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

