/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Action Input Pin</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * An ActionInputPin is a kind of InputPin that executes an Action to determine the values to input to another Action.
     * <p>From package UML::Actions.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.ActionInputPin#getFromAction}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getActionInputPin()
     * @model
     * @generated
     * @class
     */
    export interface ActionInputPin extends uml.InputPin {
        /**
         * Returns the value of the '<em><b>From Action</b></em>' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Action used to provide the values of the ActionInputPin.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>From Action</em>' containment reference.
         * @see #setFromAction(Action)
         * @see uml.UmlPackage#getActionInputPin_FromAction()
         * @model containment="true" required="true" ordered="false"
         * @generated
         */
        getFromAction() : uml.Action;

        /**
         * Sets the value of the '{@link uml.ActionInputPin#getFromAction}' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>From Action</em>' containment reference.
         * @see #getFromAction()
         * @generated
         */
        setFromAction(value : uml.Action);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The fromAction of an ActionInputPin must only have ActionInputPins as InputPins.
         * fromAction.input->forAll(oclIsKindOf(ActionInputPin))
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        input_pin(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The fromAction of an ActionInputPin must have exactly one OutputPin.
         * fromAction.output->size() = 1
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        one_output_pin(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The fromAction of an ActionInputPin cannot have ActivityEdges coming into or out of it or its Pins.
         * fromAction.incoming->union(outgoing)->isEmpty() and
         * fromAction.input.incoming->isEmpty() and
         * fromAction.output.outgoing->isEmpty()
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        no_control_or_object_flow(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

