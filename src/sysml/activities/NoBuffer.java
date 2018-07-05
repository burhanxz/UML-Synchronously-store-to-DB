/**
 */
package sysml.activities;

import org.eclipse.emf.ecore.EObject;

import uml.ObjectNode;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>No Buffer</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * </p>
 * <ul>
 *   <li>{@link sysml.activities.NoBuffer#getBase_ObjectNode <em>Base Object Node</em>}</li>
 * </ul>
 *
 * @see sysml.activities.ActivitiesPackage#getNoBuffer()
 * @model
 * @generated
 */
public interface NoBuffer extends EObject {
	/**
	 * Returns the value of the '<em><b>Base Object Node</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Base Object Node</em>' reference isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Base Object Node</em>' reference.
	 * @see #setBase_ObjectNode(ObjectNode)
	 * @see sysml.activities.ActivitiesPackage#getNoBuffer_Base_ObjectNode()
	 * @model required="true" ordered="false"
	 * @generated
	 */
	ObjectNode getBase_ObjectNode();

	/**
	 * Sets the value of the '{@link sysml.activities.NoBuffer#getBase_ObjectNode <em>Base Object Node</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Base Object Node</em>' reference.
	 * @see #getBase_ObjectNode()
	 * @generated
	 */
	void setBase_ObjectNode(ObjectNode value);

} // NoBuffer
