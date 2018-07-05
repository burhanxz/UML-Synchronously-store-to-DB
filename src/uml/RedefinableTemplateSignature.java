/**
 */
package uml;

import java.util.Map;

import org.eclipse.emf.common.util.DiagnosticChain;
import org.eclipse.emf.common.util.EList;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Redefinable Template Signature</b></em>'.
 * <!-- end-user-doc -->
 *
 * <!-- begin-model-doc -->
 * A RedefinableTemplateSignature supports the addition of formal template parameters in a specialization of a template classifier.
 * <p>From package UML::Classification.</p>
 * <!-- end-model-doc -->
 *
 * <p>
 * The following features are supported:
 * </p>
 * <ul>
 *   <li>{@link uml.RedefinableTemplateSignature#getExtendedSignature <em>Extended Signature</em>}</li>
 *   <li>{@link uml.RedefinableTemplateSignature#getInheritedParameter <em>Inherited Parameter</em>}</li>
 *   <li>{@link uml.RedefinableTemplateSignature#getClassifier <em>Classifier</em>}</li>
 * </ul>
 *
 * @see uml.UmlPackage#getRedefinableTemplateSignature()
 * @model
 * @generated
 */
public interface RedefinableTemplateSignature extends RedefinableElement, TemplateSignature {
	/**
	 * Returns the value of the '<em><b>Extended Signature</b></em>' reference list.
	 * The list contents are of type {@link uml.RedefinableTemplateSignature}.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * The signatures extended by this RedefinableTemplateSignature.
	 * <p>From package UML::Classification.</p>
	 * <!-- end-model-doc -->
	 * @return the value of the '<em>Extended Signature</em>' reference list.
	 * @see uml.UmlPackage#getRedefinableTemplateSignature_ExtendedSignature()
	 * @model ordered="false"
	 * @generated
	 */
	EList<RedefinableTemplateSignature> getExtendedSignature();

	/**
	 * Returns the value of the '<em><b>Inherited Parameter</b></em>' reference list.
	 * The list contents are of type {@link uml.TemplateParameter}.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * The formal template parameters of the extended signatures.
	 * <p>From package UML::Classification.</p>
	 * <!-- end-model-doc -->
	 * @return the value of the '<em>Inherited Parameter</em>' reference list.
	 * @see uml.UmlPackage#getRedefinableTemplateSignature_InheritedParameter()
	 * @model transient="true" changeable="false" volatile="true" derived="true" ordered="false"
	 * @generated
	 */
	EList<TemplateParameter> getInheritedParameter();

	/**
	 * Returns the value of the '<em><b>Classifier</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * The Classifier that owns this RedefinableTemplateSignature.
	 * <p>From package UML::Classification.</p>
	 * <!-- end-model-doc -->
	 * @return the value of the '<em>Classifier</em>' reference.
	 * @see uml.UmlPackage#getRedefinableTemplateSignature_Classifier()
	 * @model required="true" transient="true" changeable="false" volatile="true" ordered="false"
	 * @generated
	 */
	Classifier getClassifier();

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * If any of the parent Classifiers are a template, then the extendedSignature must include the signature of that Classifier.
	 * classifier.allParents()->forAll(c | c.ownedTemplateSignature->notEmpty() implies self->closure(extendedSignature)->includes(c.ownedTemplateSignature))
	 * @param diagnostics The chain of diagnostics to which problems are to be appended.
	 * @param context The cache of context-specific information.
	 * <!-- end-model-doc -->
	 * @model
	 * @generated
	 */
	boolean redefines_parents(DiagnosticChain diagnostics, Map<Object, Object> context);

} // RedefinableTemplateSignature
