/**
 */
package standard;

import org.eclipse.emf.ecore.EObject;

import uml.Abstraction;
import uml.ValueSpecification;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Derive</b></em>'.
 * <!-- end-user-doc -->
 *
 * <!-- begin-model-doc -->
 * Specifies a derivation relationship among model elements that are usually, but not necessarily, of the same type. A derived dependency specifies that the client may be computed from the supplier. The mapping specifies the computation. The client may be implemented for design reasons, such as efficiency, even though it is logically redundant.
 * <p>From package StandardProfile (URI {@literal http://www.omg.org/spec/UML/20131001/StandardProfile}).</p>
 * <!-- end-model-doc -->
 *
 * <p>
 * The following features are supported:
 * </p>
 * <ul>
 *   <li>{@link standard.Derive#getComputation <em>Computation</em>}</li>
 *   <li>{@link standard.Derive#getBase_Abstraction <em>Base Abstraction</em>}</li>
 * </ul>
 *
 * @see standard.StandardPackage#getDerive()
 * @model
 * @generated
 */
public interface Derive extends EObject {
	/**
	 * Returns the value of the '<em><b>Computation</b></em>' containment reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * The specification for computing the derived client element from the derivation supplier element.
	 * <!-- end-model-doc -->
	 * @return the value of the '<em>Computation</em>' containment reference.
	 * @see #setComputation(ValueSpecification)
	 * @see standard.StandardPackage#getDerive_Computation()
	 * @model containment="true" required="true" ordered="false"
	 * @generated
	 */
	ValueSpecification getComputation();

	/**
	 * Sets the value of the '{@link standard.Derive#getComputation <em>Computation</em>}' containment reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Computation</em>' containment reference.
	 * @see #getComputation()
	 * @generated
	 */
	void setComputation(ValueSpecification value);

	/**
	 * Returns the value of the '<em><b>Base Abstraction</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * <p>From package StandardProfile (URI {@literal http://www.omg.org/spec/UML/20131001/StandardProfile}).</p>
	 * <!-- end-model-doc -->
	 * @return the value of the '<em>Base Abstraction</em>' reference.
	 * @see #setBase_Abstraction(Abstraction)
	 * @see standard.StandardPackage#getDerive_Base_Abstraction()
	 * @model required="true" ordered="false"
	 * @generated
	 */
	Abstraction getBase_Abstraction();

	/**
	 * Sets the value of the '{@link standard.Derive#getBase_Abstraction <em>Base Abstraction</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Base Abstraction</em>' reference.
	 * @see #getBase_Abstraction()
	 * @generated
	 */
	void setBase_Abstraction(Abstraction value);

} // Derive
