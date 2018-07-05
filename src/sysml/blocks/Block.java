/**
 */
package sysml.blocks;

import org.eclipse.emf.ecore.EObject;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Block</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * </p>
 * <ul>
 *   <li>{@link sysml.blocks.Block#isIsEncapsulated <em>Is Encapsulated</em>}</li>
 *   <li>{@link sysml.blocks.Block#getBase_Class <em>Base Class</em>}</li>
 * </ul>
 *
 * @see sysml.blocks.BlocksPackage#getBlock()
 * @model
 * @generated
 */
public interface Block extends EObject {
	/**
	 * Returns the value of the '<em><b>Is Encapsulated</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Is Encapsulated</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Is Encapsulated</em>' attribute.
	 * @see #setIsEncapsulated(boolean)
	 * @see sysml.blocks.BlocksPackage#getBlock_IsEncapsulated()
	 * @model unique="false" dataType="types.Boolean" ordered="false"
	 * @generated
	 */
	boolean isIsEncapsulated();

	/**
	 * Sets the value of the '{@link sysml.blocks.Block#isIsEncapsulated <em>Is Encapsulated</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Is Encapsulated</em>' attribute.
	 * @see #isIsEncapsulated()
	 * @generated
	 */
	void setIsEncapsulated(boolean value);

	/**
	 * Returns the value of the '<em><b>Base Class</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Base Class</em>' reference isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Base Class</em>' reference.
	 * @see #setBase_Class(uml.Class)
	 * @see sysml.blocks.BlocksPackage#getBlock_Base_Class()
	 * @model required="true" ordered="false"
	 * @generated
	 */
	uml.Class getBase_Class();

	/**
	 * Sets the value of the '{@link sysml.blocks.Block#getBase_Class <em>Base Class</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Base Class</em>' reference.
	 * @see #getBase_Class()
	 * @generated
	 */
	void setBase_Class(uml.Class value);

} // Block
