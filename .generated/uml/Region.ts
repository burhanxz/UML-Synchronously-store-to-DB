/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Region</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A Region is a top-level part of a StateMachine or a composite State, that serves as a container for the Vertices and Transitions of the StateMachine. A StateMachine or composite State may contain multiple Regions representing behaviors that may occur in parallel.
     * <p>From package UML::StateMachines.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.Region#getExtendedRegion}</li>
     * <li>{@link uml.Region#getState}</li>
     * <li>{@link uml.Region#getStateMachine}</li>
     * <li>{@link uml.Region#getTransition}</li>
     * <li>{@link uml.Region#getSubvertex}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getRegion()
     * @model
     * @generated
     * @class
     */
    export interface Region extends uml.Namespace, uml.RedefinableElement {
        /**
         * Returns the value of the '<em><b>Extended Region</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The region of which this region is an extension.
         * <p>From package UML::StateMachines.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Extended Region</em>' reference.
         * @see #setExtendedRegion(Region)
         * @see uml.UmlPackage#getRegion_ExtendedRegion()
         * @model ordered="false"
         * @generated
         */
        getExtendedRegion() : Region;

        /**
         * Sets the value of the '{@link uml.Region#getExtendedRegion}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Extended Region</em>' reference.
         * @see #getExtendedRegion()
         * @generated
         */
        setExtendedRegion(value : Region);

        /**
         * Returns the value of the '<em><b>State</b></em>' container reference.
         * It is bidirectional and its opposite is '{@link uml.State#getRegion}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The State that owns the Region. If a Region is owned by a State, then it cannot also be owned by a StateMachine.
         * <p>From package UML::StateMachines.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>State</em>' container reference.
         * @see #setState(State)
         * @see uml.UmlPackage#getRegion_State()
         * @see uml.State#getRegion
         * @model opposite="region" transient="false" ordered="false"
         * @generated
         */
        getState() : uml.State;

        /**
         * Sets the value of the '{@link uml.Region#getState}' container reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>State</em>' container reference.
         * @see #getState()
         * @generated
         */
        setState(value : uml.State);

        /**
         * Returns the value of the '<em><b>State Machine</b></em>' container reference.
         * It is bidirectional and its opposite is '{@link uml.StateMachine#getRegion}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The StateMachine that owns the Region. If a Region is owned by a StateMachine, then it cannot also be owned by a State.
         * <p>From package UML::StateMachines.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>State Machine</em>' container reference.
         * @see #setStateMachine(StateMachine)
         * @see uml.UmlPackage#getRegion_StateMachine()
         * @see uml.StateMachine#getRegion
         * @model opposite="region" transient="false" ordered="false"
         * @generated
         */
        getStateMachine() : uml.StateMachine;

        /**
         * Sets the value of the '{@link uml.Region#getStateMachine}' container reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>State Machine</em>' container reference.
         * @see #getStateMachine()
         * @generated
         */
        setStateMachine(value : uml.StateMachine);

        /**
         * Returns the value of the '<em><b>Transition</b></em>' containment reference list.
         * The list contents are of type {@link uml.Transition}.
         * It is bidirectional and its opposite is '{@link uml.Transition#getContainer}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The set of Transitions owned by the Region.
         * <p>From package UML::StateMachines.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Transition</em>' containment reference list.
         * @see uml.UmlPackage#getRegion_Transition()
         * @see uml.Transition#getContainer
         * @model opposite="container" containment="true" ordered="false"
         * @generated
         */
        getTransition() : org.eclipse.emf.common.util.EList<uml.Transition>;

        /**
         * Returns the value of the '<em><b>Subvertex</b></em>' containment reference list.
         * The list contents are of type {@link uml.Vertex}.
         * It is bidirectional and its opposite is '{@link uml.Vertex#getContainer}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The set of Vertices that are owned by this Region.
         * <p>From package UML::StateMachines.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Subvertex</em>' containment reference list.
         * @see uml.UmlPackage#getRegion_Subvertex()
         * @see uml.Vertex#getContainer
         * @model opposite="container" containment="true" ordered="false"
         * @generated
         */
        getSubvertex() : org.eclipse.emf.common.util.EList<uml.Vertex>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A Region can have at most one deep history Vertex.
         * self.subvertex->select (oclIsKindOf(Pseudostate))->collect(oclAsType(Pseudostate))->
         * select(kind = PseudostateKind::deepHistory)->size() <= 1
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        deep_history_vertex(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A Region can have at most one shallow history Vertex.
         * subvertex->select(oclIsKindOf(Pseudostate))->collect(oclAsType(Pseudostate))->
         * select(kind = PseudostateKind::shallowHistory)->size() <= 1
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        shallow_history_vertex(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If a Region is owned by a StateMachine, then it cannot also be owned by a State and vice versa.
         * (stateMachine <> null implies state = null) and (state <> null implies stateMachine = null)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        owned(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A Region can have at most one initial Vertex.
         * self.subvertex->select (oclIsKindOf(Pseudostate))->collect(oclAsType(Pseudostate))->
         * select(kind = PseudostateKind::initial)->size() <= 1
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
         * The operation belongsToPSM () checks if the Region belongs to a ProtocolStateMachine.
         * result = (if  stateMachine <> null
         * then
         * stateMachine.oclIsKindOf(ProtocolStateMachine)
         * else
         * state <> null  implies  state.container.belongsToPSM()
         * endif )
         * <p>From package UML::StateMachines.</p>
         * <!-- end-model-doc -->
         * @model dataType="types.Boolean" required="true" ordered="false"
         * @generated
         * @return {boolean}
         */
        belongsToPSM() : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The operation containingStateMachine() returns the StateMachine in which this Region is defined.
         * result = (if stateMachine = null
         * then
         * state.containingStateMachine()
         * else
         * stateMachine
         * endif)
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
         * The redefinition context of a Region is the nearest containing StateMachine.
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

