/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Action Execution Specification</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * An ActionExecutionSpecification is a kind of ExecutionSpecification representing the execution of an Action.
     * <p>From package UML::Interactions.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.ActionExecutionSpecification#getAction}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getActionExecutionSpecification()
     * @model
     * @generated
     * @class
     */
    export interface ActionExecutionSpecification extends uml.ExecutionSpecification {
        /**
         * Returns the value of the '<em><b>Action</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Action whose execution is occurring.
         * <p>From package UML::Interactions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Action</em>' reference.
         * @see #setAction(Action)
         * @see uml.UmlPackage#getActionExecutionSpecification_Action()
         * @model required="true" ordered="false"
         * @generated
         */
        getAction() : uml.Action;

        /**
         * Sets the value of the '{@link uml.ActionExecutionSpecification#getAction}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Action</em>' reference.
         * @see #getAction()
         * @generated
         */
        setAction(value : uml.Action);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Action referenced by the ActionExecutionSpecification must be owned by the Interaction owning that ActionExecutionSpecification.
         * (enclosingInteraction->notEmpty() or enclosingOperand.combinedFragment->notEmpty()) and
         * let parentInteraction : Set(Interaction) = enclosingInteraction.oclAsType(Interaction)->asSet()->union(
         * enclosingOperand.combinedFragment->closure(enclosingOperand.combinedFragment)->
         * collect(enclosingInteraction).oclAsType(Interaction)->asSet()) in
         * (parentInteraction->size() = 1) and self.action.interaction->asSet() = parentInteraction
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        action_referenced(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

