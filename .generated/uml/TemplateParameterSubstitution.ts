/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Template Parameter Substitution</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A TemplateParameterSubstitution relates the actual parameter to a formal TemplateParameter as part of a template binding.
     * <p>From package UML::CommonStructure.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.TemplateParameterSubstitution#getActual}</li>
     * <li>{@link uml.TemplateParameterSubstitution#getFormal}</li>
     * <li>{@link uml.TemplateParameterSubstitution#getOwnedActual}</li>
     * <li>{@link uml.TemplateParameterSubstitution#getTemplateBinding}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getTemplateParameterSubstitution()
     * @model
     * @generated
     * @class
     */
    export interface TemplateParameterSubstitution extends uml.Element {
        /**
         * Returns the value of the '<em><b>Actual</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The ParameterableElement that is the actual parameter for this TemplateParameterSubstitution.
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Actual</em>' reference.
         * @see #setActual(ParameterableElement)
         * @see uml.UmlPackage#getTemplateParameterSubstitution_Actual()
         * @model required="true" ordered="false"
         * @generated
         */
        getActual() : uml.ParameterableElement;

        /**
         * Sets the value of the '{@link uml.TemplateParameterSubstitution#getActual}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Actual</em>' reference.
         * @see #getActual()
         * @generated
         */
        setActual(value : uml.ParameterableElement);

        /**
         * Returns the value of the '<em><b>Formal</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The formal TemplateParameter that is associated with this TemplateParameterSubstitution.
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Formal</em>' reference.
         * @see #setFormal(TemplateParameter)
         * @see uml.UmlPackage#getTemplateParameterSubstitution_Formal()
         * @model required="true" ordered="false"
         * @generated
         */
        getFormal() : uml.TemplateParameter;

        /**
         * Sets the value of the '{@link uml.TemplateParameterSubstitution#getFormal}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Formal</em>' reference.
         * @see #getFormal()
         * @generated
         */
        setFormal(value : uml.TemplateParameter);

        /**
         * Returns the value of the '<em><b>Owned Actual</b></em>' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The ParameterableElement that is owned by this TemplateParameterSubstitution as its actual parameter.
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Owned Actual</em>' containment reference.
         * @see #setOwnedActual(ParameterableElement)
         * @see uml.UmlPackage#getTemplateParameterSubstitution_OwnedActual()
         * @model containment="true" ordered="false"
         * @generated
         */
        getOwnedActual() : uml.ParameterableElement;

        /**
         * Sets the value of the '{@link uml.TemplateParameterSubstitution#getOwnedActual}' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Owned Actual</em>' containment reference.
         * @see #getOwnedActual()
         * @generated
         */
        setOwnedActual(value : uml.ParameterableElement);

        /**
         * Returns the value of the '<em><b>Template Binding</b></em>' container reference.
         * It is bidirectional and its opposite is '{@link uml.TemplateBinding#getParameterSubstitution}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The TemplateBinding that owns this TemplateParameterSubstitution.
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Template Binding</em>' container reference.
         * @see #setTemplateBinding(TemplateBinding)
         * @see uml.UmlPackage#getTemplateParameterSubstitution_TemplateBinding()
         * @see uml.TemplateBinding#getParameterSubstitution
         * @model opposite="parameterSubstitution" required="true" transient="false" ordered="false"
         * @generated
         */
        getTemplateBinding() : uml.TemplateBinding;

        /**
         * Sets the value of the '{@link uml.TemplateParameterSubstitution#getTemplateBinding}' container reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Template Binding</em>' container reference.
         * @see #getTemplateBinding()
         * @generated
         */
        setTemplateBinding(value : uml.TemplateBinding);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The actual ParameterableElement must be compatible with the formal TemplateParameter, e.g., the actual ParameterableElement for a Class TemplateParameter must be a Class.
         * actual->forAll(a | a.isCompatibleWith(formal.parameteredElement))
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        must_be_compatible(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

