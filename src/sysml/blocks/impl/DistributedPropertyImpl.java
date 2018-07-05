/**
 */
package sysml.blocks.impl;

import org.eclipse.emf.ecore.EClass;

import org.eclipse.emf.ecore.impl.EStoreEObjectImpl;

import sysml.blocks.BlocksPackage;
import sysml.blocks.DistributedProperty;

import uml.Property;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Distributed Property</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link sysml.blocks.impl.DistributedPropertyImpl#getBase_Property <em>Base Property</em>}</li>
 * </ul>
 *
 * @generated
 */
public class DistributedPropertyImpl extends EStoreEObjectImpl implements DistributedProperty {
	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected DistributedPropertyImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return BlocksPackage.Literals.DISTRIBUTED_PROPERTY;
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
		return (Property)eGet(BlocksPackage.Literals.DISTRIBUTED_PROPERTY__BASE_PROPERTY, true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setBase_Property(Property newBase_Property) {
		eSet(BlocksPackage.Literals.DISTRIBUTED_PROPERTY__BASE_PROPERTY, newBase_Property);
	}

} //DistributedPropertyImpl
