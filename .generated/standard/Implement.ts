/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace standard {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Implement</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A component definition that is not intended to have a specification itself. Rather, it is an implementation for a separate ?Specification? to which it has a Dependency.
     * <p>From package StandardProfile (URI {@literal http://www.omg.org/spec/UML/20131001/StandardProfile}).</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link standard.Implement#getBase_Component}</li>
     * </ul>
     * 
     * @see standard.StandardPackage#getImplement()
     * @model
     * @generated
     * @class
     */
    export interface Implement extends org.eclipse.emf.ecore.EObject {
        /**
         * Returns the value of the '<em><b>Base Component</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * <p>From package StandardProfile (URI {@literal http://www.omg.org/spec/UML/20131001/StandardProfile}).</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Base Component</em>' reference.
         * @see #setBase_Component(Component)
         * @see standard.StandardPackage#getImplement_Base_Component()
         * @model required="true" ordered="false"
         * @generated
         */
        getBase_Component() : uml.Component;

        /**
         * Sets the value of the '{@link standard.Implement#getBase_Component}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Base Component</em>' reference.
         * @see #getBase_Component()
         * @generated
         */
        setBase_Component(value : uml.Component);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * self.base_Component.clientDependency.supplier->select(oclIsKindOf(Classifier)).oclAsType(Classifier).extension_Specificaiton->notEmpty()
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        implements_specification(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

