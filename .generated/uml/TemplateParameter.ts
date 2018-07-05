/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Template Parameter</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A TemplateParameter exposes a ParameterableElement as a formal parameter of a template.
     * <p>From package UML::CommonStructure.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.TemplateParameter#getDefault}</li>
     * <li>{@link uml.TemplateParameter#getOwnedDefault}</li>
     * <li>{@link uml.TemplateParameter#getParameteredElement}</li>
     * <li>{@link uml.TemplateParameter#getSignature}</li>
     * <li>{@link uml.TemplateParameter#getOwnedParameteredElement}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getTemplateParameter()
     * @model
     * @generated
     * @class
     */
    export interface TemplateParameter extends uml.Element {
        /**
         * Returns the value of the '<em><b>Default</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The ParameterableElement that is the default for this formal TemplateParameter.
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Default</em>' reference.
         * @see #setDefault(ParameterableElement)
         * @see uml.UmlPackage#getTemplateParameter_Default()
         * @model ordered="false"
         * @generated
         */
        getDefault() : uml.ParameterableElement;

        /**
         * Sets the value of the '{@link uml.TemplateParameter#getDefault}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Default</em>' reference.
         * @see #getDefault()
         * @generated
         */
        setDefault(value : uml.ParameterableElement);

        /**
         * Returns the value of the '<em><b>Owned Default</b></em>' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The ParameterableElement that is owned by this TemplateParameter for the purpose of providing a default.
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Owned Default</em>' containment reference.
         * @see #setOwnedDefault(ParameterableElement)
         * @see uml.UmlPackage#getTemplateParameter_OwnedDefault()
         * @model containment="true" ordered="false"
         * @generated
         */
        getOwnedDefault() : uml.ParameterableElement;

        /**
         * Sets the value of the '{@link uml.TemplateParameter#getOwnedDefault}' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Owned Default</em>' containment reference.
         * @see #getOwnedDefault()
         * @generated
         */
        setOwnedDefault(value : uml.ParameterableElement);

        /**
         * Returns the value of the '<em><b>Parametered Element</b></em>' reference.
         * It is bidirectional and its opposite is '{@link uml.ParameterableElement#getTemplateParameter}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The ParameterableElement exposed by this TemplateParameter.
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Parametered Element</em>' reference.
         * @see #setParameteredElement(ParameterableElement)
         * @see uml.UmlPackage#getTemplateParameter_ParameteredElement()
         * @see uml.ParameterableElement#getTemplateParameter
         * @model opposite="templateParameter" required="true" ordered="false"
         * @generated
         */
        getParameteredElement() : uml.ParameterableElement;

        /**
         * Sets the value of the '{@link uml.TemplateParameter#getParameteredElement}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Parametered Element</em>' reference.
         * @see #getParameteredElement()
         * @generated
         */
        setParameteredElement(value : uml.ParameterableElement);

        /**
         * Returns the value of the '<em><b>Signature</b></em>' container reference.
         * It is bidirectional and its opposite is '{@link uml.TemplateSignature#getOwnedParameter}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The TemplateSignature that owns this TemplateParameter.
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Signature</em>' container reference.
         * @see #setSignature(TemplateSignature)
         * @see uml.UmlPackage#getTemplateParameter_Signature()
         * @see uml.TemplateSignature#getOwnedParameter
         * @model opposite="ownedParameter" required="true" transient="false" ordered="false"
         * @generated
         */
        getSignature() : uml.TemplateSignature;

        /**
         * Sets the value of the '{@link uml.TemplateParameter#getSignature}' container reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Signature</em>' container reference.
         * @see #getSignature()
         * @generated
         */
        setSignature(value : uml.TemplateSignature);

        /**
         * Returns the value of the '<em><b>Owned Parametered Element</b></em>' containment reference.
         * It is bidirectional and its opposite is '{@link uml.ParameterableElement#getOwningTemplateParameter}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The ParameterableElement that is owned by this TemplateParameter for the purpose of exposing it as the parameteredElement.
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Owned Parametered Element</em>' containment reference.
         * @see #setOwnedParameteredElement(ParameterableElement)
         * @see uml.UmlPackage#getTemplateParameter_OwnedParameteredElement()
         * @see uml.ParameterableElement#getOwningTemplateParameter
         * @model opposite="owningTemplateParameter" containment="true" ordered="false"
         * @generated
         */
        getOwnedParameteredElement() : uml.ParameterableElement;

        /**
         * Sets the value of the '{@link uml.TemplateParameter#getOwnedParameteredElement}' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Owned Parametered Element</em>' containment reference.
         * @see #getOwnedParameteredElement()
         * @generated
         */
        setOwnedParameteredElement(value : uml.ParameterableElement);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The default must be compatible with the formal TemplateParameter.
         * default <> null implies default.isCompatibleWith(parameteredElement)
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

