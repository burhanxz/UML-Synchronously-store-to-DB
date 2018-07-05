/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Template Binding</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A TemplateBinding is a DirectedRelationship between a TemplateableElement and a template. A TemplateBinding specifies the TemplateParameterSubstitutions of actual parameters for the formal parameters of the template.
     * <p>From package UML::CommonStructure.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.TemplateBinding#getParameterSubstitution}</li>
     * <li>{@link uml.TemplateBinding#getSignature}</li>
     * <li>{@link uml.TemplateBinding#getBoundElement}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getTemplateBinding()
     * @model
     * @generated
     * @class
     */
    export interface TemplateBinding extends uml.DirectedRelationship {
        /**
         * Returns the value of the '<em><b>Parameter Substitution</b></em>' containment reference list.
         * The list contents are of type {@link uml.TemplateParameterSubstitution}.
         * It is bidirectional and its opposite is '{@link uml.TemplateParameterSubstitution#getTemplateBinding}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The TemplateParameterSubstitutions owned by this TemplateBinding.
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Parameter Substitution</em>' containment reference list.
         * @see uml.UmlPackage#getTemplateBinding_ParameterSubstitution()
         * @see uml.TemplateParameterSubstitution#getTemplateBinding
         * @model opposite="templateBinding" containment="true" ordered="false"
         * @generated
         */
        getParameterSubstitution() : org.eclipse.emf.common.util.EList<uml.TemplateParameterSubstitution>;

        /**
         * Returns the value of the '<em><b>Signature</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The TemplateSignature for the template that is the target of this TemplateBinding.
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Signature</em>' reference.
         * @see #setSignature(TemplateSignature)
         * @see uml.UmlPackage#getTemplateBinding_Signature()
         * @model required="true" ordered="false"
         * @generated
         */
        getSignature() : uml.TemplateSignature;

        /**
         * Sets the value of the '{@link uml.TemplateBinding#getSignature}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Signature</em>' reference.
         * @see #getSignature()
         * @generated
         */
        setSignature(value : uml.TemplateSignature);

        /**
         * Returns the value of the '<em><b>Bound Element</b></em>' container reference.
         * It is bidirectional and its opposite is '{@link uml.TemplateableElement#getTemplateBinding}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The TemplateableElement that is bound by this TemplateBinding.
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Bound Element</em>' container reference.
         * @see #setBoundElement(TemplateableElement)
         * @see uml.UmlPackage#getTemplateBinding_BoundElement()
         * @see uml.TemplateableElement#getTemplateBinding
         * @model opposite="templateBinding" required="true" transient="false" ordered="false"
         * @generated
         */
        getBoundElement() : uml.TemplateableElement;

        /**
         * Sets the value of the '{@link uml.TemplateBinding#getBoundElement}' container reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Bound Element</em>' container reference.
         * @see #getBoundElement()
         * @generated
         */
        setBoundElement(value : uml.TemplateableElement);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Each parameterSubstitution must refer to a formal TemplateParameter of the target TemplateSignature.
         * parameterSubstitution->forAll(b | signature.parameter->includes(b.formal))
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        parameter_substitution_formal(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A TemplateBiinding contains at most one TemplateParameterSubstitution for each formal TemplateParameter of the target TemplateSignature.
         * signature.parameter->forAll(p | parameterSubstitution->select(b | b.formal = p)->size() <= 1)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        one_parameter_substitution(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

