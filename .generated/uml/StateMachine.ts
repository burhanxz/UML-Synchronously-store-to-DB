/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>State Machine</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * StateMachines can be used to express event-driven behaviors of parts of a system. Behavior is modeled as a traversal of a graph of Vertices interconnected by one or more joined Transition arcs that are triggered by the dispatching of successive Event occurrences. During this traversal, the StateMachine may execute a sequence of Behaviors associated with various elements of the StateMachine.
     * <p>From package UML::StateMachines.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.StateMachine#getConnectionPoint}</li>
     * <li>{@link uml.StateMachine#getSubmachineState}</li>
     * <li>{@link uml.StateMachine#getRegion}</li>
     * <li>{@link uml.StateMachine#getExtendedStateMachine}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getStateMachine()
     * @model
     * @generated
     * @class
     */
    export interface StateMachine extends uml.Behavior {
        /**
         * Returns the value of the '<em><b>Connection Point</b></em>' containment reference list.
         * The list contents are of type {@link uml.Pseudostate}.
         * It is bidirectional and its opposite is '{@link uml.Pseudostate#getStateMachine}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The connection points defined for this StateMachine. They represent the interface of the StateMachine when used as part of submachine State
         * <p>From package UML::StateMachines.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Connection Point</em>' containment reference list.
         * @see uml.UmlPackage#getStateMachine_ConnectionPoint()
         * @see uml.Pseudostate#getStateMachine
         * @model opposite="stateMachine" containment="true" ordered="false"
         * @generated
         */
        getConnectionPoint() : org.eclipse.emf.common.util.EList<uml.Pseudostate>;

        /**
         * Returns the value of the '<em><b>Submachine State</b></em>' reference list.
         * The list contents are of type {@link uml.State}.
         * It is bidirectional and its opposite is '{@link uml.State#getSubmachine}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * References the submachine(s) in case of a submachine State. Multiple machines are referenced in case of a concurrent State.
         * <p>From package UML::StateMachines.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Submachine State</em>' reference list.
         * @see uml.UmlPackage#getStateMachine_SubmachineState()
         * @see uml.State#getSubmachine
         * @model opposite="submachine" ordered="false"
         * @generated
         */
        getSubmachineState() : org.eclipse.emf.common.util.EList<uml.State>;

        /**
         * Returns the value of the '<em><b>Region</b></em>' containment reference list.
         * The list contents are of type {@link uml.Region}.
         * It is bidirectional and its opposite is '{@link uml.Region#getStateMachine}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Regions owned directly by the StateMachine.
         * <p>From package UML::StateMachines.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Region</em>' containment reference list.
         * @see uml.UmlPackage#getStateMachine_Region()
         * @see uml.Region#getStateMachine
         * @model opposite="stateMachine" containment="true" required="true" ordered="false"
         * @generated
         */
        getRegion() : org.eclipse.emf.common.util.EList<uml.Region>;

        /**
         * Returns the value of the '<em><b>Extended State Machine</b></em>' reference list.
         * The list contents are of type {@link uml.StateMachine}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The StateMachines of which this is an extension.
         * <p>From package UML::StateMachines.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Extended State Machine</em>' reference list.
         * @see uml.UmlPackage#getStateMachine_ExtendedStateMachine()
         * @model ordered="false"
         * @generated
         */
        getExtendedStateMachine() : org.eclipse.emf.common.util.EList<StateMachine>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The connection points of a StateMachine are Pseudostates of kind entry point or exit point.
         * connectionPoint->forAll (kind = PseudostateKind::entryPoint or kind = PseudostateKind::exitPoint)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        connection_points(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Classifier context of a StateMachine cannot be an Interface.
         * _'context' <> null implies not _'context'.oclIsKindOf(Interface)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        classifier_context(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A StateMachine as the method for a BehavioralFeature cannot have entry/exit connection points.
         * specification <> null implies connectionPoint->isEmpty()
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        method(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The context Classifier of the method StateMachine of a BehavioralFeature must be the Classifier that owns the BehavioralFeature.
         * specification <> null implies ( _'context' <> null and specification.featuringClassifier->exists(c | c = _'context'))
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        context_classifier(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The operation LCA(s1,s2) returns the Region that is the least common ancestor of Vertices s1 and s2, based on the StateMachine containment hierarchy.
         * result = (if ancestor(s1, s2) then
         * s2.container
         * else
         * if ancestor(s2, s1) then
         * s1.container
         * else
         * LCA(s1.container.state, s2.container.state)
         * endif
         * endif)
         * <p>From package UML::StateMachines.</p>
         * <!-- end-model-doc -->
         * @model required="true" ordered="false" s1Required="true" s1Ordered="false" s2Required="true" s2Ordered="false"
         * @generated
         * @param {*} s1
         * @param {*} s2
         * @return {*}
         */
        LCA(s1 : uml.Vertex, s2 : uml.Vertex) : uml.Region;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The query ancestor(s1, s2) checks whether Vertex s2 is an ancestor of Vertex s1.
         * result = (if (s2 = s1) then
         * true
         * else
         * if s1.container.stateMachine->notEmpty() then
         * true
         * else
         * if s2.container.stateMachine->notEmpty() then
         * false
         * else
         * ancestor(s1, s2.container.state)
         * endif
         * endif
         * endif  )
         * <p>From package UML::StateMachines.</p>
         * <!-- end-model-doc -->
         * @model dataType="types.Boolean" required="true" ordered="false" s1Required="true" s1Ordered="false" s2Required="true" s2Ordered="false"
         * @generated
         * @param {*} s1
         * @param {*} s2
         * @return {boolean}
         */
        ancestor(s1 : uml.Vertex, s2 : uml.Vertex) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * This utility funciton is like the LCA, except that it returns the nearest composite State that contains both input Vertices.
         * result = (if v2.oclIsTypeOf(State) and ancestor(v1, v2) then
         * v2.oclAsType(State)
         * else if v1.oclIsTypeOf(State) and ancestor(v2, v1) then
         * v1.oclAsType(State)
         * else if (v1.container.state->isEmpty() or v2.container.state->isEmpty()) then
         * null.oclAsType(State)
         * else LCAState(v1.container.state, v2.container.state)
         * endif endif endif)
         * <p>From package UML::StateMachines.</p>
         * <!-- end-model-doc -->
         * @model required="true" ordered="false" v1Required="true" v1Ordered="false" v2Required="true" v2Ordered="false"
         * @generated
         * @param {*} v1
         * @param {*} v2
         * @return {*}
         */
        LCAState(v1 : uml.Vertex, v2 : uml.Vertex) : uml.State;
    }
}

