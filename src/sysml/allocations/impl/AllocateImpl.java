/**
 */
package sysml.allocations.impl;

import org.eclipse.emf.ecore.EClass;

import org.eclipse.emf.ecore.impl.EStoreEObjectImpl;

import sysml.allocations.Allocate;
import sysml.allocations.AllocationsPackage;

import uml.Abstraction;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Allocate</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link sysml.allocations.impl.AllocateImpl#getBase_Abstraction <em>Base Abstraction</em>}</li>
 * </ul>
 *
 * @generated
 */
public class AllocateImpl extends EStoreEObjectImpl implements Allocate {
	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected AllocateImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return AllocationsPackage.Literals.ALLOCATE;
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
	public Abstraction getBase_Abstraction() {
		return (Abstraction)eGet(AllocationsPackage.Literals.ALLOCATE__BASE_ABSTRACTION, true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setBase_Abstraction(Abstraction newBase_Abstraction) {
		eSet(AllocationsPackage.Literals.ALLOCATE__BASE_ABSTRACTION, newBase_Abstraction);
	}

} //AllocateImpl
