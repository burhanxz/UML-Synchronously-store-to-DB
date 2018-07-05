/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Parameterable Element</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A ParameterableElement is an Element that can be exposed as a formal TemplateParameter for a template, or specified as an actual parameter in a binding of a template.
     * <p>From package UML::CommonStructure.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.ParameterableElement#getOwningTemplateParameter}</li>
     * <li>{@link uml.ParameterableElement#getTemplateParameter}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getParameterableElement()
     * @model abstract="true"
     * @generated
     * @class
     */
    export interface ParameterableElement extends uml.Element {
        /**
         * Returns the value of the '<em><b>Owning Template Parameter</b></em>' container reference.
         * It is bidirectional and its opposite is '{@link uml.TemplateParameter#getOwnedParameteredElement}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The formal TemplateParameter that owns this ParameterableElement.
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Owning Template Parameter</em>' container reference.
         * @see #setOwningTemplateParameter(TemplateParameter)
         * @see uml.UmlPackage#getParameterableElement_OwningTemplateParameter()
         * @see uml.TemplateParameter#getOwnedParameteredElement
         * @model opposite="ownedParameteredElement" transient="false" ordered="false"
         * @generated
         */
        getOwningTemplateParameter() : uml.TemplateParameter;

        /**
         * Sets the value of the '{@link uml.ParameterableElement#getOwningTemplateParameter}' container reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Owning Template Parameter</em>' container reference.
         * @see #getOwningTemplateParameter()
         * @generated
         */
        setOwningTemplateParameter(value : uml.TemplateParameter);

        /**
         * Returns the value of the '<em><b>Template Parameter</b></em>' reference.
         * It is bidirectional and its opposite is '{@link uml.TemplateParameter#getParameteredElement}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The TemplateParameter that exposes this ParameterableElement as a formal parameter.
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Template Parameter</em>' reference.
         * @see #setTemplateParameter(TemplateParameter)
         * @see uml.UmlPackage#getParameterableElement_TemplateParameter()
         * @see uml.TemplateParameter#getParameteredElement
         * @model opposite="parameteredElement" ordered="false"
         * @generated
         */
        getTemplateParameter() : uml.TemplateParameter;

        /**
         * Sets the value of the '{@link uml.ParameterableElement#getTemplateParameter}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Template Parameter</em>' reference.
         * @see #getTemplateParameter()
         * @generated
         */
        setTemplateParameter(value : uml.TemplateParameter);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The query isCompatibleWith() determines if this ParameterableElement is compatible with the specified ParameterableElement. By default, this ParameterableElement is compatible with another ParameterableElement p if the kind of this ParameterableElement is the same as or a subtype of the kind of p. Subclasses of ParameterableElement should override this operation to specify different compatibility constraints.
         * result = (self.oclIsKindOf(p.oclType()))
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @model dataType="types.Boolean" required="true" ordered="false" pRequired="true" pOrdered="false"
         * @generated
         * @param {*} p
         * @return {boolean}
         */
        isCompatibleWith(p : ParameterableElement) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The query isTemplateParameter() determines if this ParameterableElement is exposed as a formal TemplateParameter.
         * result = (templateParameter->notEmpty())
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @model kind="operation" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         * @return {boolean}
         */
        isTemplateParameter() : boolean;
    }
}

