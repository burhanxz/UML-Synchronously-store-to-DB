/**
 */
package sysml.activities.impl;

import org.eclipse.emf.ecore.EClass;

import org.eclipse.emf.ecore.impl.EStoreEObjectImpl;

import sysml.activities.ActivitiesPackage;
import sysml.activities.ControlOperator;

import uml.Behavior;
import uml.Operation;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Control Operator</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link sysml.activities.impl.ControlOperatorImpl#getBase_Operation <em>Base Operation</em>}</li>
 *   <li>{@link sysml.activities.impl.ControlOperatorImpl#getBase_Behavior <em>Base Behavior</em>}</li>
 * </ul>
 *
 * @generated
 */
public class ControlOperatorImpl extends EStoreEObjectImpl implements ControlOperator {
	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected ControlOperatorImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return ActivitiesPackage.Literals.CONTROL_OPERATOR;
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
	public Operation getBase_Operation() {
		return (Operation)eGet(ActivitiesPackage.Literals.CONTROL_OPERATOR__BASE_OPERATION, true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setBase_Operation(Operation newBase_Operation) {
		eSet(ActivitiesPackage.Literals.CONTROL_OPERATOR__BASE_OPERATION, newBase_Operation);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Behavior getBase_Behavior() {
		return (Behavior)eGet(ActivitiesPackage.Literals.CONTROL_OPERATOR__BASE_BEHAVIOR, true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setBase_Behavior(Behavior newBase_Behavior) {
		eSet(ActivitiesPackage.Literals.CONTROL_OPERATOR__BASE_BEHAVIOR, newBase_Behavior);
	}

} //ControlOperatorImpl
