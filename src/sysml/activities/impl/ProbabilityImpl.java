/**
 */
package sysml.activities.impl;

import org.eclipse.emf.ecore.EClass;

import org.eclipse.emf.ecore.impl.EStoreEObjectImpl;

import sysml.activities.ActivitiesPackage;
import sysml.activities.Probability;

import uml.ActivityEdge;
import uml.ParameterSet;
import uml.ValueSpecification;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Probability</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link sysml.activities.impl.ProbabilityImpl#getBase_ActivityEdge <em>Base Activity Edge</em>}</li>
 *   <li>{@link sysml.activities.impl.ProbabilityImpl#getBase_ParameterSet <em>Base Parameter Set</em>}</li>
 *   <li>{@link sysml.activities.impl.ProbabilityImpl#getProbability <em>Probability</em>}</li>
 * </ul>
 *
 * @generated
 */
public class ProbabilityImpl extends EStoreEObjectImpl implements Probability {
	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected ProbabilityImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return ActivitiesPackage.Literals.PROBABILITY;
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
	public ActivityEdge getBase_ActivityEdge() {
		return (ActivityEdge)eGet(ActivitiesPackage.Literals.PROBABILITY__BASE_ACTIVITY_EDGE, true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setBase_ActivityEdge(ActivityEdge newBase_ActivityEdge) {
		eSet(ActivitiesPackage.Literals.PROBABILITY__BASE_ACTIVITY_EDGE, newBase_ActivityEdge);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public ParameterSet getBase_ParameterSet() {
		return (ParameterSet)eGet(ActivitiesPackage.Literals.PROBABILITY__BASE_PARAMETER_SET, true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setBase_ParameterSet(ParameterSet newBase_ParameterSet) {
		eSet(ActivitiesPackage.Literals.PROBABILITY__BASE_PARAMETER_SET, newBase_ParameterSet);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public ValueSpecification getProbability() {
		return (ValueSpecification)eGet(ActivitiesPackage.Literals.PROBABILITY__PROBABILITY, true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setProbability(ValueSpecification newProbability) {
		eSet(ActivitiesPackage.Literals.PROBABILITY__PROBABILITY, newProbability);
	}

} //ProbabilityImpl
