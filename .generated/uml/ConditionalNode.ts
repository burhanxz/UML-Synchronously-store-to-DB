/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Conditional Node</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A ConditionalNode is a StructuredActivityNode that chooses one among some number of alternative collections of ExecutableNodes to execute.
     * <p>From package UML::Actions.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.ConditionalNode#getClause}</li>
     * <li>{@link uml.ConditionalNode#isIsAssured}</li>
     * <li>{@link uml.ConditionalNode#isIsDeterminate}</li>
     * <li>{@link uml.ConditionalNode#getResult}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getConditionalNode()
     * @model
     * @generated
     * @class
     */
    export interface ConditionalNode extends uml.StructuredActivityNode {
        /**
         * Returns the value of the '<em><b>Clause</b></em>' containment reference list.
         * The list contents are of type {@link uml.Clause}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The set of Clauses composing the ConditionalNode.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Clause</em>' containment reference list.
         * @see uml.UmlPackage#getConditionalNode_Clause()
         * @model containment="true" required="true" ordered="false"
         * @generated
         */
        getClause() : org.eclipse.emf.common.util.EList<uml.Clause>;

        /**
         * Returns the value of the '<em><b>Is Assured</b></em>' attribute.
         * The default value is <code>"false"</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If true, the modeler asserts that the test for at least one Clause of the ConditionalNode will succeed.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {boolean} the value of the '<em>Is Assured</em>' attribute.
         * @see #setIsAssured(boolean)
         * @see uml.UmlPackage#getConditionalNode_IsAssured()
         * @model default="false" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         */
        isIsAssured() : boolean;

        /**
         * Sets the value of the '{@link uml.ConditionalNode#isIsAssured}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {boolean} value the new value of the '<em>Is Assured</em>' attribute.
         * @see #isIsAssured()
         * @generated
         */
        setIsAssured(value : boolean);

        /**
         * Returns the value of the '<em><b>Is Determinate</b></em>' attribute.
         * The default value is <code>"false"</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If true, the modeler asserts that the test for at most one Clause of the ConditionalNode will succeed.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {boolean} the value of the '<em>Is Determinate</em>' attribute.
         * @see #setIsDeterminate(boolean)
         * @see uml.UmlPackage#getConditionalNode_IsDeterminate()
         * @model default="false" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         */
        isIsDeterminate() : boolean;

        /**
         * Sets the value of the '{@link uml.ConditionalNode#isIsDeterminate}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {boolean} value the new value of the '<em>Is Determinate</em>' attribute.
         * @see #isIsDeterminate()
         * @generated
         */
        setIsDeterminate(value : boolean);

        /**
         * Returns the value of the '<em><b>Result</b></em>' containment reference list.
         * The list contents are of type {@link uml.OutputPin}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The OutputPins that onto which are moved values from the bodyOutputs of the Clause selected for execution.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Result</em>' containment reference list.
         * @see uml.UmlPackage#getConditionalNode_Result()
         * @model containment="true"
         * @generated
         */
        getResult() : org.eclipse.emf.common.util.EList<uml.OutputPin>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The result OutputPins have no incoming edges.
         * result.incoming->isEmpty()
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        result_no_incoming(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A ConditionalNode has no InputPins.
         * input->isEmpty()
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
         * No ExecutableNode in the ConditionNode may appear in the test or body part of more than one clause of a ConditionalNode.
         * node->select(oclIsKindOf(ExecutableNode)).oclAsType(ExecutableNode)->forAll(n |
         * self.clause->select(test->union(_'body')->includes(n))->size()=1)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        one_clause_with_executable_node(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Each clause of a ConditionalNode must have the same number of bodyOutput pins as the ConditionalNode has result OutputPins, and each clause bodyOutput Pin must be compatible with the corresponding result OutputPin (by positional order) in type, multiplicity, ordering, and uniqueness.
         * clause->forAll(
         * bodyOutput->size()=self.result->size() and
         * Sequence{1..self.result->size()}->forAll(i |
         * bodyOutput->at(i).type.conformsTo(result->at(i).type) and
         * bodyOutput->at(i).isOrdered = result->at(i).isOrdered and
         * bodyOutput->at(i).isUnique = result->at(i).isUnique and
         * bodyOutput->at(i).compatibleWith(result->at(i))))
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        matching_output_pins(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The union of the ExecutableNodes in the test and body parts of all clauses must be the same as the subset of nodes contained in the ConditionalNode (considered as a StructuredActivityNode) that are ExecutableNodes.
         * clause.test->union(clause._'body') = node->select(oclIsKindOf(ExecutableNode)).oclAsType(ExecutableNode)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        executable_nodes(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * No two clauses within a ConditionalNode may be predecessorClauses of each other, either directly or indirectly.
         * clause->closure(predecessorClause)->intersection(clause)->isEmpty()
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        clause_no_predecessor(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

