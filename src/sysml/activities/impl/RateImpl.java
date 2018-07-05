/**
 */
package sysml.activities.impl;

import org.eclipse.emf.ecore.EClass;

import org.eclipse.emf.ecore.impl.EStoreEObjectImpl;

import sysml.activities.ActivitiesPackage;
import sysml.activities.Rate;

import uml.ActivityEdge;
import uml.InstanceSpecification;
import uml.Parameter;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Rate</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link sysml.activities.impl.RateImpl#getBase_Parameter <em>Base Parameter</em>}</li>
 *   <li>{@link sysml.activities.impl.RateImpl#getBase_ActivityEdge <em>Base Activity Edge</em>}</li>
 *   <li>{@link sysml.activities.impl.RateImpl#getRate <em>Rate</em>}</li>
 * </ul>
 *
 * @generated
 */
public class RateImpl extends EStoreEObjectImpl implements Rate {
	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected RateImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return ActivitiesPackage.Literals.RATE;
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
	public Parameter getBase_Parameter() {
		return (Parameter)eGet(ActivitiesPackage.Literals.RATE__BASE_PARAMETER, true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setBase_Parameter(Parameter newBase_Parameter) {
		eSet(ActivitiesPackage.Literals.RATE__BASE_PARAMETER, newBase_Parameter);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public ActivityEdge getBase_ActivityEdge() {
		return (ActivityEdge)eGet(ActivitiesPackage.Literals.RATE__BASE_ACTIVITY_EDGE, true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setBase_ActivityEdge(ActivityEdge newBase_ActivityEdge) {
		eSet(ActivitiesPackage.Literals.RATE__BASE_ACTIVITY_EDGE, newBase_ActivityEdge);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public InstanceSpecification getRate() {
		return (InstanceSpecification)eGet(ActivitiesPackage.Literals.RATE__RATE, true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setRate(InstanceSpecification newRate) {
		eSet(ActivitiesPackage.Literals.RATE__RATE, newRate);
	}

} //RateImpl
