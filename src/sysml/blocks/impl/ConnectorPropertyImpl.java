/**
 */
package sysml.blocks.impl;

import org.eclipse.emf.ecore.EClass;

import org.eclipse.emf.ecore.impl.EStoreEObjectImpl;

import sysml.blocks.BlocksPackage;
import sysml.blocks.ConnectorProperty;

import uml.Connector;
import uml.Property;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Connector Property</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link sysml.blocks.impl.ConnectorPropertyImpl#getBase_Property <em>Base Property</em>}</li>
 *   <li>{@link sysml.blocks.impl.ConnectorPropertyImpl#getConnector <em>Connector</em>}</li>
 * </ul>
 *
 * @generated
 */
public class ConnectorPropertyImpl extends EStoreEObjectImpl implements ConnectorProperty {
	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected ConnectorPropertyImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return BlocksPackage.Literals.CONNECTOR_PROPERTY;
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
	public Property getBase_Property() {
		return (Property)eGet(BlocksPackage.Literals.CONNECTOR_PROPERTY__BASE_PROPERTY, true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setBase_Property(Property newBase_Property) {
		eSet(BlocksPackage.Literals.CONNECTOR_PROPERTY__BASE_PROPERTY, newBase_Property);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Connector getConnector() {
		return (Connector)eGet(BlocksPackage.Literals.CONNECTOR_PROPERTY__CONNECTOR, true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setConnector(Connector newConnector) {
		eSet(BlocksPackage.Literals.CONNECTOR_PROPERTY__CONNECTOR, newConnector);
	}

} //ConnectorPropertyImpl
