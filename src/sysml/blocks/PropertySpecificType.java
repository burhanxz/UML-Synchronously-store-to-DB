/**
 */
package sysml.blocks;

import org.eclipse.emf.ecore.EObject;

import uml.Classifier;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Property Specific Type</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * </p>
 * <ul>
 *   <li>{@link sysml.blocks.PropertySpecificType#getBase_Classifier <em>Base Classifier</em>}</li>
 * </ul>
 *
 * @see sysml.blocks.BlocksPackage#getPropertySpecificType()
 * @model
 * @generated
 */
public interface PropertySpecificType extends EObject {
	/**
	 * Returns the value of the '<em><b>Base Classifier</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Base Classifier</em>' reference isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Base Classifier</em>' reference.
	 * @see #setBase_Classifier(Classifier)
	 * @see sysml.blocks.BlocksPackage#getPropertySpecificType_Base_Classifier()
	 * @model required="true" ordered="false"
	 * @generated
	 */
	Classifier getBase_Classifier();

	/**
	 * Sets the value of the '{@link sysml.blocks.PropertySpecificType#getBase_Classifier <em>Base Classifier</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Base Classifier</em>' reference.
	 * @see #getBase_Classifier()
	 * @generated
	 */
	void setBase_Classifier(Classifier value);

} // PropertySpecificType
