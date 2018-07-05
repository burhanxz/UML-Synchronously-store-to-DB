/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Exception Handler</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * An ExceptionHandler is an Element that specifies a handlerBody ExecutableNode to execute in case the specified exception occurs during the execution of the protected ExecutableNode.
     * <p>From package UML::Activities.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.ExceptionHandler#getExceptionInput}</li>
     * <li>{@link uml.ExceptionHandler#getExceptionType}</li>
     * <li>{@link uml.ExceptionHandler#getHandlerBody}</li>
     * <li>{@link uml.ExceptionHandler#getProtectedNode}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getExceptionHandler()
     * @model
     * @generated
     * @class
     */
    export interface ExceptionHandler extends uml.Element {
        /**
         * Returns the value of the '<em><b>Exception Input</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * An ObjectNode within the handlerBody. When the ExceptionHandler catches an exception, the exception token is placed on this ObjectNode, causing the handlerBody to execute.
         * <p>From package UML::Activities.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Exception Input</em>' reference.
         * @see #setExceptionInput(ObjectNode)
         * @see uml.UmlPackage#getExceptionHandler_ExceptionInput()
         * @model required="true" ordered="false"
         * @generated
         */
        getExceptionInput() : uml.ObjectNode;

        /**
         * Sets the value of the '{@link uml.ExceptionHandler#getExceptionInput}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Exception Input</em>' reference.
         * @see #getExceptionInput()
         * @generated
         */
        setExceptionInput(value : uml.ObjectNode);

        /**
         * Returns the value of the '<em><b>Exception Type</b></em>' reference list.
         * The list contents are of type {@link uml.Classifier}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Classifiers whose instances the ExceptionHandler catches as exceptions. If an exception occurs whose type is any exceptionType, the ExceptionHandler catches the exception and executes the handlerBody.
         * <p>From package UML::Activities.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Exception Type</em>' reference list.
         * @see uml.UmlPackage#getExceptionHandler_ExceptionType()
         * @model required="true" ordered="false"
         * @generated
         */
        getExceptionType() : org.eclipse.emf.common.util.EList<uml.Classifier>;

        /**
         * Returns the value of the '<em><b>Handler Body</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * An ExecutableNode that is executed if the ExceptionHandler catches an exception.
         * <p>From package UML::Activities.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Handler Body</em>' reference.
         * @see #setHandlerBody(ExecutableNode)
         * @see uml.UmlPackage#getExceptionHandler_HandlerBody()
         * @model required="true" ordered="false"
         * @generated
         */
        getHandlerBody() : uml.ExecutableNode;

        /**
         * Sets the value of the '{@link uml.ExceptionHandler#getHandlerBody}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Handler Body</em>' reference.
         * @see #getHandlerBody()
         * @generated
         */
        setHandlerBody(value : uml.ExecutableNode);

        /**
         * Returns the value of the '<em><b>Protected Node</b></em>' container reference.
         * It is bidirectional and its opposite is '{@link uml.ExecutableNode#getHandler}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The ExecutableNode protected by the ExceptionHandler. If an exception propagates out of the protectedNode and has a type matching one of the exceptionTypes, then it is caught by this ExceptionHandler.
         * <p>From package UML::Activities.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Protected Node</em>' container reference.
         * @see #setProtectedNode(ExecutableNode)
         * @see uml.UmlPackage#getExceptionHandler_ProtectedNode()
         * @see uml.ExecutableNode#getHandler
         * @model opposite="handler" required="true" transient="false" ordered="false"
         * @generated
         */
        getProtectedNode() : uml.ExecutableNode;

        /**
         * Sets the value of the '{@link uml.ExceptionHandler#getProtectedNode}' container reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Protected Node</em>' container reference.
         * @see #getProtectedNode()
         * @generated
         */
        setProtectedNode(value : uml.ExecutableNode);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The handlerBody has no incoming or outgoing ActivityEdges and the exceptionInput has no incoming ActivityEdges.
         * handlerBody.incoming->isEmpty() and handlerBody.outgoing->isEmpty() and exceptionInput.incoming->isEmpty()
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        handler_body_edges(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If the protectedNode is an Action with OutputPins, then the handlerBody must also be an Action with the same number of OutputPins, which are compatible in type, ordering, and multiplicity to those of the protectedNode.
         * (protectedNode.oclIsKindOf(Action) and protectedNode.oclAsType(Action).output->notEmpty()) implies
         * (
         * handlerBody.oclIsKindOf(Action) and
         * let protectedNodeOutput : OrderedSet(OutputPin) = protectedNode.oclAsType(Action).output,
         * handlerBodyOutput : OrderedSet(OutputPin) =  handlerBody.oclAsType(Action).output in
         * protectedNodeOutput->size() = handlerBodyOutput->size() and
         * Sequence{1..protectedNodeOutput->size()}->forAll(i |
         * handlerBodyOutput->at(i).type.conformsTo(protectedNodeOutput->at(i).type) and
         * handlerBodyOutput->at(i).isOrdered=protectedNodeOutput->at(i).isOrdered and
         * handlerBodyOutput->at(i).compatibleWith(protectedNodeOutput->at(i)))
         * )
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        output_pins(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The handlerBody is an Action with one InputPin, and that InputPin is the same as the exceptionInput.
         * handlerBody.oclIsKindOf(Action) and
         * let inputs: OrderedSet(InputPin) = handlerBody.oclAsType(Action).input in
         * inputs->size()=1 and inputs->first()=exceptionInput
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        one_input(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * An ActivityEdge that has a source within the handlerBody of an ExceptionHandler must have its target in the handlerBody also, and vice versa.
         * let nodes:Set(ActivityNode) = handlerBody.oclAsType(Action).allOwnedNodes() in
         * nodes.outgoing->forAll(nodes->includes(target)) and
         * nodes.incoming->forAll(nodes->includes(source))
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        edge_source_target(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The handlerBody must have the same owner as the protectedNode.
         * handlerBody.owner=protectedNode.owner
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        handler_body_owner(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The exceptionInput must either have no type or every exceptionType must conform to the exceptionInput type.
         * exceptionInput.type=null or
         * exceptionType->forAll(conformsTo(exceptionInput.type.oclAsType(Classifier)))
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        exception_input_type(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

