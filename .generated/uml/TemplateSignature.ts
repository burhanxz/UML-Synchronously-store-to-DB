/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Template Signature</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A Template Signature bundles the set of formal TemplateParameters for a template.
     * <p>From package UML::CommonStructure.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.TemplateSignature#getParameter}</li>
     * <li>{@link uml.TemplateSignature#getTemplate}</li>
     * <li>{@link uml.TemplateSignature#getOwnedParameter}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getTemplateSignature()
     * @model
     * @generated
     * @class
     */
    export interface TemplateSignature extends uml.Element {
        /**
         * Returns the value of the '<em><b>Parameter</b></em>' reference list.
         * The list contents are of type {@link uml.TemplateParameter}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The ordered set of all formal TemplateParameters for this TemplateSignature.
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Parameter</em>' reference list.
         * @see uml.UmlPackage#getTemplateSignature_Parameter()
         * @model required="true"
         * @generated
         */
        getParameter() : org.eclipse.emf.common.util.EList<uml.TemplateParameter>;

        /**
         * Returns the value of the '<em><b>Template</b></em>' container reference.
         * It is bidirectional and its opposite is '{@link uml.TemplateableElement#getOwnedTemplateSignature}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The TemplateableElement that owns this TemplateSignature.
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Template</em>' container reference.
         * @see #setTemplate(TemplateableElement)
         * @see uml.UmlPackage#getTemplateSignature_Template()
         * @see uml.TemplateableElement#getOwnedTemplateSignature
         * @model opposite="ownedTemplateSignature" required="true" transient="false" ordered="false"
         * @generated
         */
        getTemplate() : uml.TemplateableElement;

        /**
         * Sets the value of the '{@link uml.TemplateSignature#getTemplate}' container reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Template</em>' container reference.
         * @see #getTemplate()
         * @generated
         */
        setTemplate(value : uml.TemplateableElement);

        /**
         * Returns the value of the '<em><b>Owned Parameter</b></em>' containment reference list.
         * The list contents are of type {@link uml.TemplateParameter}.
         * It is bidirectional and its opposite is '{@link uml.TemplateParameter#getSignature}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The formal parameters that are owned by this TemplateSignature.
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Owned Parameter</em>' containment reference list.
         * @see uml.UmlPackage#getTemplateSignature_OwnedParameter()
         * @see uml.TemplateParameter#getSignature
         * @model opposite="signature" containment="true"
         * @generated
         */
        getOwnedParameter() : org.eclipse.emf.common.util.EList<uml.TemplateParameter>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Parameters must own the ParameterableElements they parameter or those ParameterableElements must be owned by the TemplateableElement being templated.
         * template.ownedElement->includesAll(parameter.parameteredElement->asSet() - parameter.ownedParameteredElement->asSet())
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        own_elements(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The names of the parameters of a TemplateSignature are unique.
         * parameter->forAll( p1, p2 | (p1 <> p2 and p1.parameteredElement.oclIsKindOf(NamedElement) and p2.parameteredElement.oclIsKindOf(NamedElement) ) implies
         * p1.parameteredElement.oclAsType(NamedElement).name <> p2.parameteredElement.oclAsType(NamedElement).name)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        unique_parameters(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

