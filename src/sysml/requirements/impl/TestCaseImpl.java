/**
 */
package sysml.requirements.impl;

import org.eclipse.emf.common.util.EList;

import org.eclipse.emf.ecore.EClass;

import org.eclipse.emf.ecore.impl.EStoreEObjectImpl;

import sysml.requirements.Requirement;
import sysml.requirements.RequirementsPackage;
import sysml.requirements.TestCase;

import uml.Behavior;
import uml.Operation;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Test Case</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link sysml.requirements.impl.TestCaseImpl#getBase_Behavior <em>Base Behavior</em>}</li>
 *   <li>{@link sysml.requirements.impl.TestCaseImpl#getBase_Operation <em>Base Operation</em>}</li>
 *   <li>{@link sysml.requirements.impl.TestCaseImpl#getVerifies <em>Verifies</em>}</li>
 * </ul>
 *
 * @generated
 */
public class TestCaseImpl extends EStoreEObjectImpl implements TestCase {
	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected TestCaseImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return RequirementsPackage.Literals.TEST_CASE;
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
	public Behavior getBase_Behavior() {
		return (Behavior)eGet(RequirementsPackage.Literals.TEST_CASE__BASE_BEHAVIOR, true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setBase_Behavior(Behavior newBase_Behavior) {
		eSet(RequirementsPackage.Literals.TEST_CASE__BASE_BEHAVIOR, newBase_Behavior);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Operation getBase_Operation() {
		return (Operation)eGet(RequirementsPackage.Literals.TEST_CASE__BASE_OPERATION, true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setBase_Operation(Operation newBase_Operation) {
		eSet(RequirementsPackage.Literals.TEST_CASE__BASE_OPERATION, newBase_Operation);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<Requirement> getVerifies() {
		return (EList<Requirement>)eGet(RequirementsPackage.Literals.TEST_CASE__VERIFIES, true);
	}

} //TestCaseImpl
