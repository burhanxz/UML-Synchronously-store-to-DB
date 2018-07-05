/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Call Action</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * CallAction is an abstract class for Actions that invoke a Behavior with given argument values and (if the invocation is synchronous) receive reply values.
     * <p>From package UML::Actions.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.CallAction#isIsSynchronous}</li>
     * <li>{@link uml.CallAction#getResult}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getCallAction()
     * @model abstract="true"
     * @generated
     * @class
     */
    export interface CallAction extends uml.InvocationAction {
        /**
         * Returns the value of the '<em><b>Is Synchronous</b></em>' attribute.
         * The default value is <code>"true"</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If true, the call is synchronous and the caller waits for completion of the invoked Behavior. If false, the call is asynchronous and the caller proceeds immediately and cannot receive return values.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {boolean} the value of the '<em>Is Synchronous</em>' attribute.
         * @see #setIsSynchronous(boolean)
         * @see uml.UmlPackage#getCallAction_IsSynchronous()
         * @model default="true" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         */
        isIsSynchronous() : boolean;

        /**
         * Sets the value of the '{@link uml.CallAction#isIsSynchronous}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {boolean} value the new value of the '<em>Is Synchronous</em>' attribute.
         * @see #isIsSynchronous()
         * @generated
         */
        setIsSynchronous(value : boolean);

        /**
         * Returns the value of the '<em><b>Result</b></em>' containment reference list.
         * The list contents are of type {@link uml.OutputPin}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The OutputPins on which the reply values from the invocation are placed (if the call is synchronous).
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Result</em>' containment reference list.
         * @see uml.UmlPackage#getCallAction_Result()
         * @model containment="true"
         * @generated
         */
        getResult() : org.eclipse.emf.common.util.EList<uml.OutputPin>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The number of argument InputPins must be the same as the number of input (in and inout) ownedParameters of the called Behavior or Operation. The type, ordering and multiplicity of each argument InputPin must be consistent with the corresponding input Parameter.
         * let parameter: OrderedSet(Parameter) = self.inputParameters() in
         * argument->size() = parameter->size() and
         * Sequence{1..argument->size()}->forAll(i |
         * argument->at(i).type.conformsTo(parameter->at(i).type) and
         * argument->at(i).isOrdered = parameter->at(i).isOrdered and
         * argument->at(i).compatibleWith(parameter->at(i)))
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        argument_pins(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The number of result OutputPins must be the same as the number of output (inout, out and return) ownedParameters of the called Behavior or Operation. The type, ordering and multiplicity of each result OutputPin must be consistent with the corresponding input Parameter.
         * let parameter: OrderedSet(Parameter) = self.outputParameters() in
         * result->size() = parameter->size() and
         * Sequence{1..result->size()}->forAll(i |
         * parameter->at(i).type.conformsTo(result->at(i).type) and
         * parameter->at(i).isOrdered = result->at(i).isOrdered and
         * parameter->at(i).compatibleWith(result->at(i)))
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        result_pins(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Only synchronous CallActions can have result OutputPins.
         * result->notEmpty() implies isSynchronous
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        synchronous_call(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Return the in and inout ownedParameters of the Behavior or Operation being called. (This operation is abstract and should be overridden by subclasses of CallAction.)
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {*}
         */
        inputParameters() : org.eclipse.emf.common.util.EList<uml.Parameter>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Return the inout, out and return ownedParameters of the Behavior or Operation being called. (This operation is abstract and should be overridden by subclasses of CallAction.)
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {*}
         */
        outputParameters() : org.eclipse.emf.common.util.EList<uml.Parameter>;
    }
}
