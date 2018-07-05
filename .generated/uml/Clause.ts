/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Clause</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A Clause is an Element that represents a single branch of a ConditionalNode, including a test and a body section. The body section is executed only if (but not necessarily if) the test section evaluates to true.
     * <p>From package UML::Actions.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.Clause#getBody}</li>
     * <li>{@link uml.Clause#getBodyOutput}</li>
     * <li>{@link uml.Clause#getDecider}</li>
     * <li>{@link uml.Clause#getPredecessorClause}</li>
     * <li>{@link uml.Clause#getSuccessorClause}</li>
     * <li>{@link uml.Clause#getTest}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getClause()
     * @model
     * @generated
     * @class
     */
    export interface Clause extends uml.Element {
        /**
         * Returns the value of the '<em><b>Body</b></em>' reference list.
         * The list contents are of type {@link uml.ExecutableNode}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The set of ExecutableNodes that are executed if the test evaluates to true and the Clause is chosen over other Clauses within the ConditionalNode that also have tests that evaluate to true.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Body</em>' reference list.
         * @see uml.UmlPackage#getClause_Body()
         * @model ordered="false"
         * @generated
         */
        getBody() : org.eclipse.emf.common.util.EList<uml.ExecutableNode>;

        /**
         * Returns the value of the '<em><b>Body Output</b></em>' reference list.
         * The list contents are of type {@link uml.OutputPin}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The OutputPins on Actions within the body section whose values are moved to the result OutputPins of the containing ConditionalNode after execution of the body.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Body Output</em>' reference list.
         * @see uml.UmlPackage#getClause_BodyOutput()
         * @model
         * @generated
         */
        getBodyOutput() : org.eclipse.emf.common.util.EList<uml.OutputPin>;

        /**
         * Returns the value of the '<em><b>Decider</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * An OutputPin on an Action in the test section whose Boolean value determines the result of the test.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Decider</em>' reference.
         * @see #setDecider(OutputPin)
         * @see uml.UmlPackage#getClause_Decider()
         * @model required="true" ordered="false"
         * @generated
         */
        getDecider() : uml.OutputPin;

        /**
         * Sets the value of the '{@link uml.Clause#getDecider}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Decider</em>' reference.
         * @see #getDecider()
         * @generated
         */
        setDecider(value : uml.OutputPin);

        /**
         * Returns the value of the '<em><b>Predecessor Clause</b></em>' reference list.
         * The list contents are of type {@link uml.Clause}.
         * It is bidirectional and its opposite is '{@link uml.Clause#getSuccessorClause}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A set of Clauses whose tests must all evaluate to false before this Clause can evaluate its test.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Predecessor Clause</em>' reference list.
         * @see uml.UmlPackage#getClause_PredecessorClause()
         * @see uml.Clause#getSuccessorClause
         * @model opposite="successorClause" ordered="false"
         * @generated
         */
        getPredecessorClause() : org.eclipse.emf.common.util.EList<Clause>;

        /**
         * Returns the value of the '<em><b>Successor Clause</b></em>' reference list.
         * The list contents are of type {@link uml.Clause}.
         * It is bidirectional and its opposite is '{@link uml.Clause#getPredecessorClause}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A set of Clauses that may not evaluate their tests unless the test for this Clause evaluates to false.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Successor Clause</em>' reference list.
         * @see uml.UmlPackage#getClause_SuccessorClause()
         * @see uml.Clause#getPredecessorClause
         * @model opposite="predecessorClause" ordered="false"
         * @generated
         */
        getSuccessorClause() : org.eclipse.emf.common.util.EList<Clause>;

        /**
         * Returns the value of the '<em><b>Test</b></em>' reference list.
         * The list contents are of type {@link uml.ExecutableNode}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The set of ExecutableNodes that are executed in order to provide a test result for the Clause.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Test</em>' reference list.
         * @see uml.UmlPackage#getClause_Test()
         * @model required="true" ordered="false"
         * @generated
         */
        getTest() : org.eclipse.emf.common.util.EList<uml.ExecutableNode>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The bodyOutput Pins are OutputPins on Actions in the body of the Clause.
         * _'body'.oclAsType(Action).allActions().output->includesAll(bodyOutput)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        body_output_pins(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The decider Pin must be on an Action in the test section of the Clause and must be of type Boolean with multiplicity 1..1.
         * test.oclAsType(Action).allActions().output->includes(decider) and
         * decider.type = Boolean and
         * decider.is(1,1)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        decider_output(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The test and body parts of a ConditionalNode must be disjoint with each other.
         * test->intersection(_'body')->isEmpty()
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        test_and_body(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

