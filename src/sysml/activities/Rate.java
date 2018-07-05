/**
 */
package sysml.activities;

import org.eclipse.emf.ecore.EObject;

import uml.ActivityEdge;
import uml.InstanceSpecification;
import uml.Parameter;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Rate</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * </p>
 * <ul>
 *   <li>{@link sysml.activities.Rate#getBase_Parameter <em>Base Parameter</em>}</li>
 *   <li>{@link sysml.activities.Rate#getBase_ActivityEdge <em>Base Activity Edge</em>}</li>
 *   <li>{@link sysml.activities.Rate#getRate <em>Rate</em>}</li>
 * </ul>
 *
 * @see sysml.activities.ActivitiesPackage#getRate()
 * @model
 * @generated
 */
public interface Rate extends EObject {
	/**
	 * Returns the value of the '<em><b>Base Parameter</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Base Parameter</em>' reference isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Base Parameter</em>' reference.
	 * @see #setBase_Parameter(Parameter)
	 * @see sysml.activities.ActivitiesPackage#getRate_Base_Parameter()
	 * @model required="true" ordered="false"
	 * @generated
	 */
	Parameter getBase_Parameter();

	/**
	 * Sets the value of the '{@link sysml.activities.Rate#getBase_Parameter <em>Base Parameter</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Base Parameter</em>' reference.
	 * @see #getBase_Parameter()
	 * @generated
	 */
	void setBase_Parameter(Parameter value);

	/**
	 * Returns the value of the '<em><b>Base Activity Edge</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Base Activity Edge</em>' reference isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Base Activity Edge</em>' reference.
	 * @see #setBase_ActivityEdge(ActivityEdge)
	 * @see sysml.activities.ActivitiesPackage#getRate_Base_ActivityEdge()
	 * @model required="true" ordered="false"
	 * @generated
	 */
	ActivityEdge getBase_ActivityEdge();

	/**
	 * Sets the value of the '{@link sysml.activities.Rate#getBase_ActivityEdge <em>Base Activity Edge</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Base Activity Edge</em>' reference.
	 * @see #getBase_ActivityEdge()
	 * @generated
	 */
	void setBase_ActivityEdge(ActivityEdge value);

	/**
	 * Returns the value of the '<em><b>Rate</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Rate</em>' reference isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Rate</em>' reference.
	 * @see #setRate(InstanceSpecification)
	 * @see sysml.activities.ActivitiesPackage#getRate_Rate()
	 * @model ordered="false"
	 * @generated
	 */
	InstanceSpecification getRate();

	/**
	 * Sets the value of the '{@link sysml.activities.Rate#getRate <em>Rate</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Rate</em>' reference.
	 * @see #getRate()
	 * @generated
	 */
	void setRate(InstanceSpecification value);

} // Rate
