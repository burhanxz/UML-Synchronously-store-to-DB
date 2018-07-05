/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Variable Action</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * VariableAction is an abstract class for Actions that operate on a specified Variable.
     * <p>From package UML::Actions.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.VariableAction#getVariable}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getVariableAction()
     * @model abstract="true"
     * @generated
     * @class
     */
    export interface VariableAction extends uml.Action {
        /**
         * Returns the value of the '<em><b>Variable</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Variable to be read or written.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Variable</em>' reference.
         * @see #setVariable(Variable)
         * @see uml.UmlPackage#getVariableAction_Variable()
         * @model required="true" ordered="false"
         * @generated
         */
        getVariable() : uml.Variable;

        /**
         * Sets the value of the '{@link uml.VariableAction#getVariable}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Variable</em>' reference.
         * @see #getVariable()
         * @generated
         */
        setVariable(value : uml.Variable);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The VariableAction must be in the scope of the variable.
         * variable.isAccessibleBy(self)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        scope_of_variable(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

