/**
 */
package sysml.blocks;

import org.eclipse.emf.common.util.EList;

import org.eclipse.emf.ecore.EObject;

import uml.ConnectorEnd;
import uml.Property;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Nested Connector End</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * </p>
 * <ul>
 *   <li>{@link sysml.blocks.NestedConnectorEnd#getPropertyPath <em>Property Path</em>}</li>
 *   <li>{@link sysml.blocks.NestedConnectorEnd#getBase_ConnectorEnd <em>Base Connector End</em>}</li>
 * </ul>
 *
 * @see sysml.blocks.BlocksPackage#getNestedConnectorEnd()
 * @model
 * @generated
 */
public interface NestedConnectorEnd extends EObject {
	/**
	 * Returns the value of the '<em><b>Property Path</b></em>' reference list.
	 * The list contents are of type {@link uml.Property}.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Property Path</em>' reference list isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Property Path</em>' reference list.
	 * @see sysml.blocks.BlocksPackage#getNestedConnectorEnd_PropertyPath()
	 * @model required="true"
	 * @generated
	 */
	EList<Property> getPropertyPath();

	/**
	 * Returns the value of the '<em><b>Base Connector End</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Base Connector End</em>' reference isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Base Connector End</em>' reference.
	 * @see #setBase_ConnectorEnd(ConnectorEnd)
	 * @see sysml.blocks.BlocksPackage#getNestedConnectorEnd_Base_ConnectorEnd()
	 * @model required="true" ordered="false"
	 * @generated
	 */
	ConnectorEnd getBase_ConnectorEnd();

	/**
	 * Sets the value of the '{@link sysml.blocks.NestedConnectorEnd#getBase_ConnectorEnd <em>Base Connector End</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Base Connector End</em>' reference.
	 * @see #getBase_ConnectorEnd()
	 * @generated
	 */
	void setBase_ConnectorEnd(ConnectorEnd value);

} // NestedConnectorEnd
