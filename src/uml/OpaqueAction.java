/**
 */
package uml;

import java.util.Map;

import org.eclipse.emf.common.util.DiagnosticChain;
import org.eclipse.emf.common.util.EList;

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
 *   <li>{@link uml.OpaqueAction#getBody <em>Body</em>}</li>
 *   <li>{@link uml.OpaqueAction#getInputValue <em>Input Value</em>}</li>
 *   <li>{@link uml.OpaqueAction#getLanguage <em>Language</em>}</li>
 *   <li>{@link uml.OpaqueAction#getOutputValue <em>Output Value</em>}</li>
 * </ul>
 *
 * @see uml.UmlPackage#getOpaqueAction()
 * @model
 * @generated
 */
public interface OpaqueAction extends Action {
	/**
	 * Returns the value of the '<em><b>Body</b></em>' attribute list.
	 * The list contents are of type {@link java.lang.String}.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * Provides a textual specification of the functionality of the Action, in one or more languages other than UML.
	 * <p>From package UML::Actions.</p>
	 * <!-- end-model-doc -->
	 * @return the value of the '<em>Body</em>' attribute list.
	 * @see #isSetBody()
	 * @see #unsetBody()
	 * @see uml.UmlPackage#getOpaqueAction_Body()
	 * @model unique="false" unsettable="true" dataType="types.String"
	 *        extendedMetaData="kind='element'"
	 * @generated
	 */
	EList<String> getBody();

	/**
	 * Unsets the value of the '{@link uml.OpaqueAction#getBody <em>Body</em>}' attribute list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #isSetBody()
	 * @see #getBody()
	 * @generated
	 */
	void unsetBody();

	/**
	 * Returns whether the value of the '{@link uml.OpaqueAction#getBody <em>Body</em>}' attribute list is set.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return whether the value of the '<em>Body</em>' attribute list is set.
	 * @see #unsetBody()
	 * @see #getBody()
	 * @generated
	 */
	boolean isSetBody();

	/**
	 * Returns the value of the '<em><b>Input Value</b></em>' containment reference list.
	 * The list contents are of type {@link uml.InputPin}.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * The InputPins providing inputs to the OpaqueAction.
	 * <p>From package UML::Actions.</p>
	 * <!-- end-model-doc -->
	 * @return the value of the '<em>Input Value</em>' containment reference list.
	 * @see uml.UmlPackage#getOpaqueAction_InputValue()
	 * @model containment="true" ordered="false"
	 * @generated
	 */
	EList<InputPin> getInputValue();

	/**
	 * Returns the value of the '<em><b>Language</b></em>' attribute list.
	 * The list contents are of type {@link java.lang.String}.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * If provided, a specification of the language used for each of the body Strings.
	 * <p>From package UML::Actions.</p>
	 * <!-- end-model-doc -->
	 * @return the value of the '<em>Language</em>' attribute list.
	 * @see #isSetLanguage()
	 * @see #unsetLanguage()
	 * @see uml.UmlPackage#getOpaqueAction_Language()
	 * @model unsettable="true" dataType="types.String"
	 * @generated
	 */
	EList<String> getLanguage();

	/**
	 * Unsets the value of the '{@link uml.OpaqueAction#getLanguage <em>Language</em>}' attribute list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #isSetLanguage()
	 * @see #getLanguage()
	 * @generated
	 */
	void unsetLanguage();

	/**
	 * Returns whether the value of the '{@link uml.OpaqueAction#getLanguage <em>Language</em>}' attribute list is set.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return whether the value of the '<em>Language</em>' attribute list is set.
	 * @see #unsetLanguage()
	 * @see #getLanguage()
	 * @generated
	 */
	boolean isSetLanguage();

	/**
	 * Returns the value of the '<em><b>Output Value</b></em>' containment reference list.
	 * The list contents are of type {@link uml.OutputPin}.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * The OutputPins on which the OpaqueAction provides outputs.
	 * <p>From package UML::Actions.</p>
	 * <!-- end-model-doc -->
	 * @return the value of the '<em>Output Value</em>' containment reference list.
	 * @see uml.UmlPackage#getOpaqueAction_OutputValue()
	 * @model containment="true" ordered="false"
	 * @generated
	 */
	EList<OutputPin> getOutputValue();

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * If the language attribute is not empty, then the size of the body and language lists must be the same.
	 * language->notEmpty() implies (_'body'->size() = language->size())
	 * @param diagnostics The chain of diagnostics to which problems are to be appended.
	 * @param context The cache of context-specific information.
	 * <!-- end-model-doc -->
	 * @model
	 * @generated
	 */
	boolean language_body_size(DiagnosticChain diagnostics, Map<Object, Object> context);

} // OpaqueAction
