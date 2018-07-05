/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Decision Node</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A DecisionNode is a ControlNode that chooses between outgoing ActivityEdges for the routing of tokens.
     * <p>From package UML::Activities.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.DecisionNode#getDecisionInput}</li>
     * <li>{@link uml.DecisionNode#getDecisionInputFlow}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getDecisionNode()
     * @model
     * @generated
     * @class
     */
    export interface DecisionNode extends uml.ControlNode {
        /**
         * Returns the value of the '<em><b>Decision Input</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A Behavior that is executed to provide an input to guard ValueSpecifications on ActivityEdges outgoing from the DecisionNode.
         * <p>From package UML::Activities.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Decision Input</em>' reference.
         * @see #setDecisionInput(Behavior)
         * @see uml.UmlPackage#getDecisionNode_DecisionInput()
         * @model ordered="false"
         * @generated
         */
        getDecisionInput() : uml.Behavior;

        /**
         * Sets the value of the '{@link uml.DecisionNode#getDecisionInput}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Decision Input</em>' reference.
         * @see #getDecisionInput()
         * @generated
         */
        setDecisionInput(value : uml.Behavior);

        /**
         * Returns the value of the '<em><b>Decision Input Flow</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * An additional ActivityEdge incoming to the DecisionNode that provides a decision input value for the guards ValueSpecifications on ActivityEdges outgoing from the DecisionNode.
         * <p>From package UML::Activities.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Decision Input Flow</em>' reference.
         * @see #setDecisionInputFlow(ObjectFlow)
         * @see uml.UmlPackage#getDecisionNode_DecisionInputFlow()
         * @model ordered="false"
         * @generated
         */
        getDecisionInputFlow() : uml.ObjectFlow;

        /**
         * Sets the value of the '{@link uml.DecisionNode#getDecisionInputFlow}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Decision Input Flow</em>' reference.
         * @see #getDecisionInputFlow()
         * @generated
         */
        setDecisionInputFlow(value : uml.ObjectFlow);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If the DecisionNode has no decisionInputFlow and an incoming ControlFlow, then any decisionInput Behavior has no in parameters.
         * (decisionInput<>null and decisionInputFlow=null and incoming->exists(oclIsKindOf(ControlFlow))) implies
         * decisionInput.inputParameters()->isEmpty()
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        zero_input_parameters(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The ActivityEdges incoming to and outgoing from a DecisionNode, other than the decisionInputFlow (if any), must be either all ObjectFlows or all ControlFlows.
         * let allEdges: Set(ActivityEdge) = incoming->union(outgoing) in
         * let allRelevantEdges: Set(ActivityEdge) = if decisionInputFlow->notEmpty() then allEdges->excluding(decisionInputFlow) else allEdges endif in
         * allRelevantEdges->forAll(oclIsKindOf(ControlFlow)) or allRelevantEdges->forAll(oclIsKindOf(ObjectFlow))
         * 
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        edges(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The decisionInputFlow of a DecisionNode must be an incoming ActivityEdge of the DecisionNode.
         * incoming->includes(decisionInputFlow)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        decision_input_flow_incoming(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If the DecisionNode has a decisionInputFlow and an second incoming ObjectFlow, then any decisionInput has two in Parameters, the first of which has a type that is the same as or a supertype of the type of object tokens offered on the non-decisionInputFlow and the second of which has a type that is the same as or a supertype of the type of object tokens offered on the decisionInputFlow.
         * (decisionInput<>null and decisionInputFlow<>null and incoming->forAll(oclIsKindOf(ObjectFlow))) implies
         * decisionInput.inputParameters()->size()=2
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        two_input_parameters(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A DecisionNode has one or two incoming ActivityEdges and at least one outgoing ActivityEdge.
         * (incoming->size() = 1 or incoming->size() = 2) and outgoing->size() > 0
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        incoming_outgoing_edges(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If the DecisionNode has a decisionInputFlow and an incoming ControlFlow, then any decisionInput Behavior has one in Parameter whose type is the same as or a supertype of the type of object tokens offered on the decisionInputFlow.
         * (decisionInput<>null and decisionInputFlow<>null and incoming->exists(oclIsKindOf(ControlFlow))) implies
         * decisionInput.inputParameters()->size()=1
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        incoming_control_one_input_parameter(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A decisionInput Behavior has no out parameters, no inout parameters, and one return parameter.
         * decisionInput<>null implies
         * (decisionInput.ownedParameter->forAll(par |
         * par.direction <> ParameterDirectionKind::out and
         * par.direction <> ParameterDirectionKind::inout ) and
         * decisionInput.ownedParameter->one(par |
         * par.direction <> ParameterDirectionKind::return))
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        parameters(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If the DecisionNode has no decisionInputFlow and an incoming ObjectFlow, then any decisionInput Behavior has one in Parameter whose type is the same as or a supertype of the type of object tokens offered on the incoming ObjectFlow.
         * (decisionInput<>null and decisionInputFlow=null and incoming->forAll(oclIsKindOf(ObjectFlow))) implies
         * decisionInput.inputParameters()->size()=1
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        incoming_object_one_input_parameter(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

