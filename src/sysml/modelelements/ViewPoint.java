/**
 */
package sysml.modelelements;

import org.eclipse.emf.common.util.EList;

import org.eclipse.emf.ecore.EObject;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>View Point</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * </p>
 * <ul>
 *   <li>{@link sysml.modelelements.ViewPoint#getBase_Class <em>Base Class</em>}</li>
 *   <li>{@link sysml.modelelements.ViewPoint#getStakeHolders <em>Stake Holders</em>}</li>
 *   <li>{@link sysml.modelelements.ViewPoint#getPurpose <em>Purpose</em>}</li>
 *   <li>{@link sysml.modelelements.ViewPoint#getConcerns <em>Concerns</em>}</li>
 *   <li>{@link sysml.modelelements.ViewPoint#getLanguages <em>Languages</em>}</li>
 *   <li>{@link sysml.modelelements.ViewPoint#getMethods <em>Methods</em>}</li>
 * </ul>
 *
 * @see sysml.modelelements.ModelelementsPackage#getViewPoint()
 * @model
 * @generated
 */
public interface ViewPoint extends EObject {
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
	 * @see sysml.modelelements.ModelelementsPackage#getViewPoint_Base_Class()
	 * @model required="true" ordered="false"
	 * @generated
	 */
	uml.Class getBase_Class();

	/**
	 * Sets the value of the '{@link sysml.modelelements.ViewPoint#getBase_Class <em>Base Class</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Base Class</em>' reference.
	 * @see #getBase_Class()
	 * @generated
	 */
	void setBase_Class(uml.Class value);

	/**
	 * Returns the value of the '<em><b>Stake Holders</b></em>' attribute list.
	 * The list contents are of type {@link java.lang.String}.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Stake Holders</em>' attribute list isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Stake Holders</em>' attribute list.
	 * @see sysml.modelelements.ModelelementsPackage#getViewPoint_StakeHolders()
	 * @model unique="false" dataType="types.String" ordered="false"
	 * @generated
	 */
	EList<String> getStakeHolders();

	/**
	 * Returns the value of the '<em><b>Purpose</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Purpose</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Purpose</em>' attribute.
	 * @see #setPurpose(String)
	 * @see sysml.modelelements.ModelelementsPackage#getViewPoint_Purpose()
	 * @model unique="false" dataType="types.String" ordered="false"
	 * @generated
	 */
	String getPurpose();

	/**
	 * Sets the value of the '{@link sysml.modelelements.ViewPoint#getPurpose <em>Purpose</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Purpose</em>' attribute.
	 * @see #getPurpose()
	 * @generated
	 */
	void setPurpose(String value);

	/**
	 * Returns the value of the '<em><b>Concerns</b></em>' attribute list.
	 * The list contents are of type {@link java.lang.String}.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Concerns</em>' attribute list isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Concerns</em>' attribute list.
	 * @see sysml.modelelements.ModelelementsPackage#getViewPoint_Concerns()
	 * @model unique="false" dataType="types.String" ordered="false"
	 * @generated
	 */
	EList<String> getConcerns();

	/**
	 * Returns the value of the '<em><b>Languages</b></em>' attribute list.
	 * The list contents are of type {@link java.lang.String}.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Languages</em>' attribute list isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Languages</em>' attribute list.
	 * @see sysml.modelelements.ModelelementsPackage#getViewPoint_Languages()
	 * @model unique="false" dataType="types.String" ordered="false"
	 * @generated
	 */
	EList<String> getLanguages();

	/**
	 * Returns the value of the '<em><b>Methods</b></em>' attribute list.
	 * The list contents are of type {@link java.lang.String}.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Methods</em>' attribute list isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Methods</em>' attribute list.
	 * @see sysml.modelelements.ModelelementsPackage#getViewPoint_Methods()
	 * @model unique="false" dataType="types.String" ordered="false"
	 * @generated
	 */
	EList<String> getMethods();

} // ViewPoint
