/**
 */
package uml;

import java.util.Map;

import org.eclipse.emf.common.util.DiagnosticChain;
import org.eclipse.emf.common.util.EList;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Extend</b></em>'.
 * <!-- end-user-doc -->
 *
 * <!-- begin-model-doc -->
 * A relationship from an extending UseCase to an extended UseCase that specifies how and when the behavior defined in the extending UseCase can be inserted into the behavior defined in the extended UseCase.
 * <p>From package UML::UseCases.</p>
 * <!-- end-model-doc -->
 *
 * <p>
 * The following features are supported:
 * </p>
 * <ul>
 *   <li>{@link uml.Extend#getCondition <em>Condition</em>}</li>
 *   <li>{@link uml.Extend#getExtendedCase <em>Extended Case</em>}</li>
 *   <li>{@link uml.Extend#getExtensionLocation <em>Extension Location</em>}</li>
 *   <li>{@link uml.Extend#getExtension <em>Extension</em>}</li>
 * </ul>
 *
 * @see uml.UmlPackage#getExtend()
 * @model
 * @generated
 */
public interface Extend extends NamedElement, DirectedRelationship {
	/**
	 * Returns the value of the '<em><b>Condition</b></em>' containment reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * References the condition that must hold when the first ExtensionPoint is reached for the extension to take place. If no constraint is associated with the Extend relationship, the extension is unconditional.
	 * <p>From package UML::UseCases.</p>
	 * <!-- end-model-doc -->
	 * @return the value of the '<em>Condition</em>' containment reference.
	 * @see #setCondition(Constraint)
	 * @see uml.UmlPackage#getExtend_Condition()
	 * @model containment="true" ordered="false"
	 * @generated
	 */
	Constraint getCondition();

	/**
	 * Sets the value of the '{@link uml.Extend#getCondition <em>Condition</em>}' containment reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Condition</em>' containment reference.
	 * @see #getCondition()
	 * @generated
	 */
	void setCondition(Constraint value);

	/**
	 * Returns the value of the '<em><b>Extended Case</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * The UseCase that is being extended.
	 * <p>From package UML::UseCases.</p>
	 * <!-- end-model-doc -->
	 * @return the value of the '<em>Extended Case</em>' reference.
	 * @see #setExtendedCase(UseCase)
	 * @see uml.UmlPackage#getExtend_ExtendedCase()
	 * @model required="true" ordered="false"
	 * @generated
	 */
	UseCase getExtendedCase();

	/**
	 * Sets the value of the '{@link uml.Extend#getExtendedCase <em>Extended Case</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Extended Case</em>' reference.
	 * @see #getExtendedCase()
	 * @generated
	 */
	void setExtendedCase(UseCase value);

	/**
	 * Returns the value of the '<em><b>Extension Location</b></em>' reference list.
	 * The list contents are of type {@link uml.ExtensionPoint}.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * An ordered list of ExtensionPoints belonging to the extended UseCase, specifying where the respective behavioral fragments of the extending UseCase are to be inserted. The first fragment in the extending UseCase is associated with the first extension point in the list, the second fragment with the second point, and so on. Note that, in most practical cases, the extending UseCase has just a single behavior fragment, so that the list of ExtensionPoints is trivial.
	 * <p>From package UML::UseCases.</p>
	 * <!-- end-model-doc -->
	 * @return the value of the '<em>Extension Location</em>' reference list.
	 * @see uml.UmlPackage#getExtend_ExtensionLocation()
	 * @model required="true"
	 * @generated
	 */
	EList<ExtensionPoint> getExtensionLocation();

	/**
	 * Returns the value of the '<em><b>Extension</b></em>' container reference.
	 * It is bidirectional and its opposite is '{@link uml.UseCase#getExtend <em>Extend</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * The UseCase that represents the extension and owns the Extend relationship.
	 * <p>From package UML::UseCases.</p>
	 * <!-- end-model-doc -->
	 * @return the value of the '<em>Extension</em>' container reference.
	 * @see #setExtension(UseCase)
	 * @see uml.UmlPackage#getExtend_Extension()
	 * @see uml.UseCase#getExtend
	 * @model opposite="extend" required="true" transient="false" ordered="false"
	 * @generated
	 */
	UseCase getExtension();

	/**
	 * Sets the value of the '{@link uml.Extend#getExtension <em>Extension</em>}' container reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Extension</em>' container reference.
	 * @see #getExtension()
	 * @generated
	 */
	void setExtension(UseCase value);

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * The ExtensionPoints referenced by the Extend relationship must belong to the UseCase that is being extended.
	 * extensionLocation->forAll (xp | extendedCase.extensionPoint->includes(xp))
	 * @param diagnostics The chain of diagnostics to which problems are to be appended.
	 * @param context The cache of context-specific information.
	 * <!-- end-model-doc -->
	 * @model
	 * @generated
	 */
	boolean extension_points(DiagnosticChain diagnostics, Map<Object, Object> context);

} // Extend
