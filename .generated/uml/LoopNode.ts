/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Loop Node</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A LoopNode is a StructuredActivityNode that represents an iterative loop with setup, test, and body sections.
     * <p>From package UML::Actions.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.LoopNode#getBodyOutput}</li>
     * <li>{@link uml.LoopNode#getBodyPart}</li>
     * <li>{@link uml.LoopNode#getDecider}</li>
     * <li>{@link uml.LoopNode#isIsTestedFirst}</li>
     * <li>{@link uml.LoopNode#getLoopVariable}</li>
     * <li>{@link uml.LoopNode#getLoopVariableInput}</li>
     * <li>{@link uml.LoopNode#getResult}</li>
     * <li>{@link uml.LoopNode#getSetupPart}</li>
     * <li>{@link uml.LoopNode#getTest}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getLoopNode()
     * @model
     * @generated
     * @class
     */
    export interface LoopNode extends uml.StructuredActivityNode {
        /**
         * Returns the value of the '<em><b>Body Output</b></em>' reference list.
         * The list contents are of type {@link uml.OutputPin}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The OutputPins on Actions within the bodyPart, the values of which are moved to the loopVariable OutputPins after the completion of each execution of the bodyPart, before the next iteration of the loop begins or before the loop exits.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Body Output</em>' reference list.
         * @see uml.UmlPackage#getLoopNode_BodyOutput()
         * @model
         * @generated
         */
        getBodyOutput() : org.eclipse.emf.common.util.EList<uml.OutputPin>;

        /**
         * Returns the value of the '<em><b>Body Part</b></em>' reference list.
         * The list contents are of type {@link uml.ExecutableNode}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The set of ExecutableNodes that perform the repetitive computations of the loop. The bodyPart is executed as long as the test section produces a true value.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Body Part</em>' reference list.
         * @see uml.UmlPackage#getLoopNode_BodyPart()
         * @model ordered="false"
         * @generated
         */
        getBodyPart() : org.eclipse.emf.common.util.EList<uml.ExecutableNode>;

        /**
         * Returns the value of the '<em><b>Decider</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * An OutputPin on an Action in the test section whose Boolean value determines whether to continue executing the loop bodyPart.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Decider</em>' reference.
         * @see #setDecider(OutputPin)
         * @see uml.UmlPackage#getLoopNode_Decider()
         * @model required="true" ordered="false"
         * @generated
         */
        getDecider() : uml.OutputPin;

        /**
         * Sets the value of the '{@link uml.LoopNode#getDecider}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Decider</em>' reference.
         * @see #getDecider()
         * @generated
         */
        setDecider(value : uml.OutputPin);

        /**
         * Returns the value of the '<em><b>Is Tested First</b></em>' attribute.
         * The default value is <code>"false"</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If true, the test is performed before the first execution of the bodyPart. If false, the bodyPart is executed once before the test is performed.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {boolean} the value of the '<em>Is Tested First</em>' attribute.
         * @see #setIsTestedFirst(boolean)
         * @see uml.UmlPackage#getLoopNode_IsTestedFirst()
         * @model default="false" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         */
        isIsTestedFirst() : boolean;

        /**
         * Sets the value of the '{@link uml.LoopNode#isIsTestedFirst}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {boolean} value the new value of the '<em>Is Tested First</em>' attribute.
         * @see #isIsTestedFirst()
         * @generated
         */
        setIsTestedFirst(value : boolean);

        /**
         * Returns the value of the '<em><b>Loop Variable</b></em>' containment reference list.
         * The list contents are of type {@link uml.OutputPin}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A list of OutputPins that hold the values of the loop variables during an execution of the loop. When the test fails, the values are moved to the result OutputPins of the loop.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Loop Variable</em>' containment reference list.
         * @see uml.UmlPackage#getLoopNode_LoopVariable()
         * @model containment="true"
         * @generated
         */
        getLoopVariable() : org.eclipse.emf.common.util.EList<uml.OutputPin>;

        /**
         * Returns the value of the '<em><b>Loop Variable Input</b></em>' containment reference list.
         * The list contents are of type {@link uml.InputPin}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A list of InputPins whose values are moved into the loopVariable Pins before the first iteration of the loop.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Loop Variable Input</em>' containment reference list.
         * @see uml.UmlPackage#getLoopNode_LoopVariableInput()
         * @model containment="true"
         * @generated
         */
        getLoopVariableInput() : org.eclipse.emf.common.util.EList<uml.InputPin>;

        /**
         * Returns the value of the '<em><b>Result</b></em>' containment reference list.
         * The list contents are of type {@link uml.OutputPin}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A list of OutputPins that receive the loopVariable values after the last iteration of the loop and constitute the output of the LoopNode.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Result</em>' containment reference list.
         * @see uml.UmlPackage#getLoopNode_Result()
         * @model containment="true"
         * @generated
         */
        getResult() : org.eclipse.emf.common.util.EList<uml.OutputPin>;

        /**
         * Returns the value of the '<em><b>Setup Part</b></em>' reference list.
         * The list contents are of type {@link uml.ExecutableNode}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The set of ExecutableNodes executed before the first iteration of the loop, in order to initialize values or perform other setup computations.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Setup Part</em>' reference list.
         * @see uml.UmlPackage#getLoopNode_SetupPart()
         * @model ordered="false"
         * @generated
         */
        getSetupPart() : org.eclipse.emf.common.util.EList<uml.ExecutableNode>;

        /**
         * Returns the value of the '<em><b>Test</b></em>' reference list.
         * The list contents are of type {@link uml.ExecutableNode}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The set of ExecutableNodes executed in order to provide the test result for the loop.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Test</em>' reference list.
         * @see uml.UmlPackage#getLoopNode_Test()
         * @model required="true" ordered="false"
         * @generated
         */
        getTest() : org.eclipse.emf.common.util.EList<uml.ExecutableNode>;

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
         * The loopVariableInputs must not have outgoing edges.
         * loopVariableInput.outgoing->isEmpty()
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        input_edges(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The union of the ExecutableNodes in the setupPart, test and bodyPart of a LoopNode must be the same as the subset of nodes contained in the LoopNode (considered as a StructuredActivityNode) that are ExecutableNodes.
         * setupPart->union(test)->union(bodyPart)=node->select(oclIsKindOf(ExecutableNode)).oclAsType(ExecutableNode)->asSet()
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
         * The bodyOutput pins are OutputPins on Actions in the body of the LoopNode.
         * bodyPart.oclAsType(Action).allActions().output->includesAll(bodyOutput)
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
         * The test and body parts of a ConditionalNode must be disjoint with each other.
         * setupPart->intersection(test)->isEmpty() and
         * setupPart->intersection(bodyPart)->isEmpty() and
         * test->intersection(bodyPart)->isEmpty()
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        setup_test_and_body(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A LoopNode must have the same number of bodyOutput Pins as loopVariables, and each bodyOutput Pin must be compatible with the corresponding loopVariable (by positional order) in type, multiplicity, ordering and uniqueness.
         * bodyOutput->size()=loopVariable->size() and
         * Sequence{1..loopVariable->size()}->forAll(i |
         * bodyOutput->at(i).type.conformsTo(loopVariable->at(i).type) and
         * bodyOutput->at(i).isOrdered = loopVariable->at(i).isOrdered and
         * bodyOutput->at(i).isUnique = loopVariable->at(i).isUnique and
         * loopVariable->at(i).includesMultiplicity(bodyOutput->at(i)))
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
         * A LoopNode must have the same number of loopVariableInputs and loopVariables, and they must match in type, uniqueness and multiplicity.
         * loopVariableInput->size()=loopVariable->size() and
         * loopVariableInput.type=loopVariable.type and
         * loopVariableInput.isUnique=loopVariable.isUnique and
         * loopVariableInput.lower=loopVariable.lower and
         * loopVariableInput.upper=loopVariable.upper
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        matching_loop_variables(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A LoopNode must have the same number of result OutputPins and loopVariables, and they must match in type, uniqueness and multiplicity.
         * result->size()=loopVariable->size() and
         * result.type=loopVariable.type and
         * result.isUnique=loopVariable.isUnique and
         * result.lower=loopVariable.lower and
         * result.upper=loopVariable.upper
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        matching_result_pins(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * All ActivityEdges outgoing from loopVariable OutputPins must have targets within the LoopNode.
         * allOwnedNodes()->includesAll(loopVariable.outgoing.target)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        loop_variable_outgoing(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

