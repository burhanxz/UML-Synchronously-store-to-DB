/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Join Node</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A JoinNode is a ControlNode that synchronizes multiple flows.
     * <p>From package UML::Activities.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.JoinNode#isIsCombineDuplicate}</li>
     * <li>{@link uml.JoinNode#getJoinSpec}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getJoinNode()
     * @model
     * @generated
     * @class
     */
    export interface JoinNode extends uml.ControlNode {
        /**
         * Returns the value of the '<em><b>Is Combine Duplicate</b></em>' attribute.
         * The default value is <code>"true"</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Indicates whether incoming tokens having objects with the same identity are combined into one by the JoinNode.
         * <p>From package UML::Activities.</p>
         * <!-- end-model-doc -->
         * @return {boolean} the value of the '<em>Is Combine Duplicate</em>' attribute.
         * @see #setIsCombineDuplicate(boolean)
         * @see uml.UmlPackage#getJoinNode_IsCombineDuplicate()
         * @model default="true" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         */
        isIsCombineDuplicate() : boolean;

        /**
         * Sets the value of the '{@link uml.JoinNode#isIsCombineDuplicate}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {boolean} value the new value of the '<em>Is Combine Duplicate</em>' attribute.
         * @see #isIsCombineDuplicate()
         * @generated
         */
        setIsCombineDuplicate(value : boolean);

        /**
         * Returns the value of the '<em><b>Join Spec</b></em>' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A ValueSpecification giving the condition under which the JoinNode will offer a token on its outgoing ActivityEdge. If no joinSpec is specified, then the JoinNode will offer an outgoing token if tokens are offered on all of its incoming ActivityEdges (an "and" condition).
         * <p>From package UML::Activities.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Join Spec</em>' containment reference.
         * @see #setJoinSpec(ValueSpecification)
         * @see uml.UmlPackage#getJoinNode_JoinSpec()
         * @model containment="true" ordered="false"
         * @generated
         */
        getJoinSpec() : uml.ValueSpecification;

        /**
         * Sets the value of the '{@link uml.JoinNode#getJoinSpec}' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Join Spec</em>' containment reference.
         * @see #getJoinSpec()
         * @generated
         */
        setJoinSpec(value : uml.ValueSpecification);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A JoinNode has one outgoing ActivityEdge.
         * outgoing->size() = 1
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        one_outgoing_edge(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If one of the incoming ActivityEdges of a JoinNode is an ObjectFlow, then its outgoing ActivityEdge must be an ObjectFlow. Otherwise its outgoing ActivityEdge must be a ControlFlow.
         * if incoming->exists(oclIsKindOf(ObjectFlow)) then outgoing->forAll(oclIsKindOf(ObjectFlow))
         * else outgoing->forAll(oclIsKindOf(ControlFlow))
         * endif
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        incoming_object_flow(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

