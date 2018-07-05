/**
 */
package sysml.constraints;

import org.eclipse.emf.ecore.EObject;

import uml.Property;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Constraint Property</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * </p>
 * <ul>
 *   <li>{@link sysml.constraints.ConstraintProperty#getBase_Property <em>Base Property</em>}</li>
 * </ul>
 *
 * @see sysml.constraints.ConstraintsPackage#getConstraintProperty()
 * @model
 * @generated
 */
public interface ConstraintProperty extends EObject {
	/**
	 * Returns the value of the '<em><b>Base Property</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Base Property</em>' reference isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Base Property</em>' reference.
	 * @see #setBase_Property(Property)
	 * @see sysml.constraints.ConstraintsPackage#getConstraintProperty_Base_Property()
	 * @model required="true" ordered="false"
	 * @generated
	 */
	Property getBase_Property();

	/**
	 * Sets the value of the '{@link sysml.constraints.ConstraintProperty#getBase_Property <em>Base Property</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Base Property</em>' reference.
	 * @see #getBase_Property()
	 * @generated
	 */
	void setBase_Property(Property value);

} // ConstraintProperty
