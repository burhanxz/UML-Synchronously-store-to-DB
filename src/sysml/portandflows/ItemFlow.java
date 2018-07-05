/**
 */
package sysml.portandflows;

import org.eclipse.emf.ecore.EObject;

import uml.InformationFlow;
import uml.Property;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Item Flow</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * </p>
 * <ul>
 *   <li>{@link sysml.portandflows.ItemFlow#getBase_InformationFlow <em>Base Information Flow</em>}</li>
 *   <li>{@link sysml.portandflows.ItemFlow#getItemProperty <em>Item Property</em>}</li>
 * </ul>
 *
 * @see sysml.portandflows.PortandflowsPackage#getItemFlow()
 * @model
 * @generated
 */
public interface ItemFlow extends EObject {
	/**
	 * Returns the value of the '<em><b>Base Information Flow</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Base Information Flow</em>' reference isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Base Information Flow</em>' reference.
	 * @see #setBase_InformationFlow(InformationFlow)
	 * @see sysml.portandflows.PortandflowsPackage#getItemFlow_Base_InformationFlow()
	 * @model required="true" ordered="false"
	 * @generated
	 */
	InformationFlow getBase_InformationFlow();

	/**
	 * Sets the value of the '{@link sysml.portandflows.ItemFlow#getBase_InformationFlow <em>Base Information Flow</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Base Information Flow</em>' reference.
	 * @see #getBase_InformationFlow()
	 * @generated
	 */
	void setBase_InformationFlow(InformationFlow value);

	/**
	 * Returns the value of the '<em><b>Item Property</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Item Property</em>' reference isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Item Property</em>' reference.
	 * @see #setItemProperty(Property)
	 * @see sysml.portandflows.PortandflowsPackage#getItemFlow_ItemProperty()
	 * @model ordered="false"
	 * @generated
	 */
	Property getItemProperty();

	/**
	 * Sets the value of the '{@link sysml.portandflows.ItemFlow#getItemProperty <em>Item Property</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Item Property</em>' reference.
	 * @see #getItemProperty()
	 * @generated
	 */
	void setItemProperty(Property value);

} // ItemFlow
