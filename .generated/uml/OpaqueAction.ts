/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Opaque Action</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * An OpaqueAction is an Action whose functionality is not specified within UML.
     * <p>From package UML::Actions.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.OpaqueAction#getBody}</li>
     * <li>{@link uml.OpaqueAction#getInputValue}</li>
     * <li>{@link uml.OpaqueAction#getLanguage}</li>
     * <li>{@link uml.OpaqueAction#getOutputValue}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getOpaqueAction()
     * @model
     * @generated
     * @class
     */
    export interface OpaqueAction extends uml.Action {
        /**
         * Returns the value of the '<em><b>Body</b></em>' attribute list.
         * The list contents are of type {@link java.lang.String}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Provides a textual specification of the functionality of the Action, in one or more languages other than UML.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Body</em>' attribute list.
         * @see #isSetBody()
         * @see #unsetBody()
         * @see uml.UmlPackage#getOpaqueAction_Body()
         * @model unique="false" unsettable="true" dataType="types.String"
         * extendedMetaData="kind='element'"
         * @generated
         */
        getBody() : org.eclipse.emf.common.util.EList<string>;

        /**
         * Unsets the value of the '{@link uml.OpaqueAction#getBody}' attribute list.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #isSetBody()
         * @see #getBody()
         * @generated
         */
        unsetBody();

        /**
         * Returns whether the value of the '{@link uml.OpaqueAction#getBody}' attribute list is set.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {boolean} whether the value of the '<em>Body</em>' attribute list is set.
         * @see #unsetBody()
         * @see #getBody()
         * @generated
         */
        isSetBody() : boolean;

        /**
         * Returns the value of the '<em><b>Input Value</b></em>' containment reference list.
         * The list contents are of type {@link uml.InputPin}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The InputPins providing inputs to the OpaqueAction.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Input Value</em>' containment reference list.
         * @see uml.UmlPackage#getOpaqueAction_InputValue()
         * @model containment="true" ordered="false"
         * @generated
         */
        getInputValue() : org.eclipse.emf.common.util.EList<uml.InputPin>;

        /**
         * Returns the value of the '<em><b>Language</b></em>' attribute list.
         * The list contents are of type {@link java.lang.String}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If provided, a specification of the language used for each of the body Strings.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Language</em>' attribute list.
         * @see #isSetLanguage()
         * @see #unsetLanguage()
         * @see uml.UmlPackage#getOpaqueAction_Language()
         * @model unsettable="true" dataType="types.String"
         * @generated
         */
        getLanguage() : org.eclipse.emf.common.util.EList<string>;

        /**
         * Unsets the value of the '{@link uml.OpaqueAction#getLanguage}' attribute list.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #isSetLanguage()
         * @see #getLanguage()
         * @generated
         */
        unsetLanguage();

        /**
         * Returns whether the value of the '{@link uml.OpaqueAction#getLanguage}' attribute list is set.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {boolean} whether the value of the '<em>Language</em>' attribute list is set.
         * @see #unsetLanguage()
         * @see #getLanguage()
         * @generated
         */
        isSetLanguage() : boolean;

        /**
         * Returns the value of the '<em><b>Output Value</b></em>' containment reference list.
         * The list contents are of type {@link uml.OutputPin}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The OutputPins on which the OpaqueAction provides outputs.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Output Value</em>' containment reference list.
         * @see uml.UmlPackage#getOpaqueAction_OutputValue()
         * @model containment="true" ordered="false"
         * @generated
         */
        getOutputValue() : org.eclipse.emf.common.util.EList<uml.OutputPin>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If the language attribute is not empty, then the size of the body and language lists must be the same.
         * language->notEmpty() implies (_'body'->size() = language->size())
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        language_body_size(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

