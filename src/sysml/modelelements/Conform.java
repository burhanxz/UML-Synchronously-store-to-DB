/**
 */
package sysml.modelelements;

import org.eclipse.emf.ecore.EObject;

import uml.Dependency;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Conform</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * </p>
 * <ul>
 *   <li>{@link sysml.modelelements.Conform#getBase_Dependency <em>Base Dependency</em>}</li>
 * </ul>
 *
 * @see sysml.modelelements.ModelelementsPackage#getConform()
 * @model
 * @generated
 */
public interface Conform extends EObject {
	/**
	 * Returns the value of the '<em><b>Base Dependency</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Base Dependency</em>' reference isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Base Dependency</em>' reference.
	 * @see #setBase_Dependency(Dependency)
	 * @see sysml.modelelements.ModelelementsPackage#getConform_Base_Dependency()
	 * @model required="true" ordered="false"
	 * @generated
	 */
	Dependency getBase_Dependency();

	/**
	 * Sets the value of the '{@link sysml.modelelements.Conform#getBase_Dependency <em>Base Dependency</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Base Dependency</em>' reference.
	 * @see #getBase_Dependency()
	 * @generated
	 */
	void setBase_Dependency(Dependency value);

} // Conform
