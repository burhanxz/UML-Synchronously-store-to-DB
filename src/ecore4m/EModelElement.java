/**
 */
package ecore4m;

import org.eclipse.emf.common.util.EList;
import org.eclipse.emf.ecore.EAnnotation;
import org.eclipse.emf.ecore.EObject;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>EModel Element</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * </p>
 * <ul>
 *   <li>{@link ecore4m.EModelElement#getEAnnotations <em>EAnnotations</em>}</li>
 * </ul>
 *
 * @see ecore.EcorePackage#getEModelElement()
 * @model abstract="true"
 * @generated
 */
public interface EModelElement extends EObject {
	/**
	 * Returns the value of the '<em><b>EAnnotations</b></em>' containment reference list.
	 * The list contents are of type {@link ecore.EAnnotation}.
	 * It is bidirectional and its opposite is '{@link ecore.EAnnotation#getEModelElement <em>EModel Element</em>}'.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>EAnnotations</em>' containment reference list isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>EAnnotations</em>' containment reference list.
	 * @see ecore.EcorePackage#getEModelElement_EAnnotations()
	 * @see ecore.EAnnotation#getEModelElement
	 * @model opposite="eModelElement" containment="true"
	 * @generated
	 */
	EList<EAnnotation> getEAnnotations();

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @model
	 * @generated
	 */
	EAnnotation getEAnnotation(String source);

} // EModelElement
