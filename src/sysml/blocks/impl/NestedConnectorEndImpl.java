/**
 */
package sysml.blocks.impl;

import org.eclipse.emf.common.util.EList;

import org.eclipse.emf.ecore.EClass;

import org.eclipse.emf.ecore.impl.EStoreEObjectImpl;

import sysml.blocks.BlocksPackage;
import sysml.blocks.NestedConnectorEnd;

import uml.ConnectorEnd;
import uml.Property;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Nested Connector End</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link sysml.blocks.impl.NestedConnectorEndImpl#getPropertyPath <em>Property Path</em>}</li>
 *   <li>{@link sysml.blocks.impl.NestedConnectorEndImpl#getBase_ConnectorEnd <em>Base Connector End</em>}</li>
 * </ul>
 *
 * @generated
 */
public class NestedConnectorEndImpl extends EStoreEObjectImpl implements NestedConnectorEnd {
	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected NestedConnectorEndImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return BlocksPackage.Literals.NESTED_CONNECTOR_END;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected int eStaticFeatureCount() {
		return 0;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<Property> getPropertyPath() {
		return (EList<Property>)eGet(BlocksPackage.Literals.NESTED_CONNECTOR_END__PROPERTY_PATH, true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public ConnectorEnd getBase_ConnectorEnd() {
		return (ConnectorEnd)eGet(BlocksPackage.Literals.NESTED_CONNECTOR_END__BASE_CONNECTOR_END, true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setBase_ConnectorEnd(ConnectorEnd newBase_ConnectorEnd) {
		eSet(BlocksPackage.Literals.NESTED_CONNECTOR_END__BASE_CONNECTOR_END, newBase_ConnectorEnd);
	}

} //NestedConnectorEndImpl
