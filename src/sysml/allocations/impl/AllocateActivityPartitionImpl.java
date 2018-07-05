/**
 */
package sysml.allocations.impl;

import org.eclipse.emf.ecore.EClass;

import org.eclipse.emf.ecore.impl.EStoreEObjectImpl;

import sysml.allocations.AllocateActivityPartition;
import sysml.allocations.AllocationsPackage;

import uml.ActivityPartition;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Allocate Activity Partition</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link sysml.allocations.impl.AllocateActivityPartitionImpl#getBase_ActivityPartition <em>Base Activity Partition</em>}</li>
 * </ul>
 *
 * @generated
 */
public class AllocateActivityPartitionImpl extends EStoreEObjectImpl implements AllocateActivityPartition {
	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected AllocateActivityPartitionImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return AllocationsPackage.Literals.ALLOCATE_ACTIVITY_PARTITION;
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
	public ActivityPartition getBase_ActivityPartition() {
		return (ActivityPartition)eGet(AllocationsPackage.Literals.ALLOCATE_ACTIVITY_PARTITION__BASE_ACTIVITY_PARTITION, true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setBase_ActivityPartition(ActivityPartition newBase_ActivityPartition) {
		eSet(AllocationsPackage.Literals.ALLOCATE_ACTIVITY_PARTITION__BASE_ACTIVITY_PARTITION, newBase_ActivityPartition);
	}

} //AllocateActivityPartitionImpl
