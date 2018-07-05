/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Templateable Element</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A TemplateableElement is an Element that can optionally be defined as a template and bound to other templates.
     * <p>From package UML::CommonStructure.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.TemplateableElement#getTemplateBinding}</li>
     * <li>{@link uml.TemplateableElement#getOwnedTemplateSignature}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getTemplateableElement()
     * @model abstract="true"
     * @generated
     * @class
     */
    export interface TemplateableElement extends uml.Element {
        /**
         * Returns the value of the '<em><b>Template Binding</b></em>' containment reference list.
         * The list contents are of type {@link uml.TemplateBinding}.
         * It is bidirectional and its opposite is '{@link uml.TemplateBinding#getBoundElement}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The optional TemplateBindings from this TemplateableElement to one or more templates.
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Template Binding</em>' containment reference list.
         * @see uml.UmlPackage#getTemplateableElement_TemplateBinding()
         * @see uml.TemplateBinding#getBoundElement
         * @model opposite="boundElement" containment="true" ordered="false"
         * @generated
         */
        getTemplateBinding() : org.eclipse.emf.common.util.EList<uml.TemplateBinding>;

        /**
         * Returns the value of the '<em><b>Owned Template Signature</b></em>' containment reference.
         * It is bidirectional and its opposite is '{@link uml.TemplateSignature#getTemplate}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The optional TemplateSignature specifying the formal TemplateParameters for this TemplateableElement. If a TemplateableElement has a TemplateSignature, then it is a template.
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Owned Template Signature</em>' containment reference.
         * @see #setOwnedTemplateSignature(TemplateSignature)
         * @see uml.UmlPackage#getTemplateableElement_OwnedTemplateSignature()
         * @see uml.TemplateSignature#getTemplate
         * @model opposite="template" containment="true" ordered="false"
         * @generated
         */
        getOwnedTemplateSignature() : uml.TemplateSignature;

        /**
         * Sets the value of the '{@link uml.TemplateableElement#getOwnedTemplateSignature}' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Owned Template Signature</em>' containment reference.
         * @see #getOwnedTemplateSignature()
         * @generated
         */
        setOwnedTemplateSignature(value : uml.TemplateSignature);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The query isTemplate() returns whether this TemplateableElement is actually a template.
         * result = (ownedTemplateSignature <> null)
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @model kind="operation" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         * @return {boolean}
         */
        isTemplate() : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The query parameterableElements() returns the set of ParameterableElements that may be used as the parameteredElements for a TemplateParameter of this TemplateableElement. By default, this set includes all the ownedElements. Subclasses may override this operation if they choose to restrict the set of ParameterableElements.
         * result = (self.allOwnedElements()->select(oclIsKindOf(ParameterableElement)).oclAsType(ParameterableElement)->asSet())
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @model ordered="false"
         * @generated
         * @return {*}
         */
        parameterableElements() : org.eclipse.emf.common.util.EList<uml.ParameterableElement>;
    }
}

