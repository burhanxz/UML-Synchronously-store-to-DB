/**
 */
package sysml.allocations.impl;

import org.eclipse.emf.common.util.EList;

import org.eclipse.emf.ecore.EClass;

import org.eclipse.emf.ecore.impl.EStoreEObjectImpl;

import sysml.allocations.Allocated;
import sysml.allocations.AllocationsPackage;

import uml.NamedElement;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Allocated</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link sysml.allocations.impl.AllocatedImpl#getBase_NamedElement <em>Base Named Element</em>}</li>
 *   <li>{@link sysml.allocations.impl.AllocatedImpl#getAllocatedFrom <em>Allocated From</em>}</li>
 *   <li>{@link sysml.allocations.impl.AllocatedImpl#getAllocatedTo <em>Allocated To</em>}</li>
 * </ul>
 *
 * @generated
 */
public class AllocatedImpl extends EStoreEObjectImpl implements Allocated {
	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected AllocatedImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return AllocationsPackage.Literals.ALLOCATED;
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
	public NamedElement getBase_NamedElement() {
		return (NamedElement)eGet(AllocationsPackage.Literals.ALLOCATED__BASE_NAMED_ELEMENT, true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setBase_NamedElement(NamedElement newBase_NamedElement) {
		eSet(AllocationsPackage.Literals.ALLOCATED__BASE_NAMED_ELEMENT, newBase_NamedElement);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<NamedElement> getAllocatedFrom() {
		return (EList<NamedElement>)eGet(AllocationsPackage.Literals.ALLOCATED__ALLOCATED_FROM, true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<NamedElement> getAllocatedTo() {
		return (EList<NamedElement>)eGet(AllocationsPackage.Literals.ALLOCATED__ALLOCATED_TO, true);
	}

} //AllocatedImpl
