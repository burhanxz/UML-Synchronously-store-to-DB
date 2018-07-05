/**
 */
package sysml.activities;

import org.eclipse.emf.ecore.EObject;

import uml.ActivityEdge;
import uml.ParameterSet;
import uml.ValueSpecification;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Probability</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * </p>
 * <ul>
 *   <li>{@link sysml.activities.Probability#getBase_ActivityEdge <em>Base Activity Edge</em>}</li>
 *   <li>{@link sysml.activities.Probability#getBase_ParameterSet <em>Base Parameter Set</em>}</li>
 *   <li>{@link sysml.activities.Probability#getProbability <em>Probability</em>}</li>
 * </ul>
 *
 * @see sysml.activities.ActivitiesPackage#getProbability()
 * @model
 * @generated
 */
public interface Probability extends EObject {
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
	 * @see sysml.activities.ActivitiesPackage#getProbability_Base_ActivityEdge()
	 * @model required="true" ordered="false"
	 * @generated
	 */
	ActivityEdge getBase_ActivityEdge();

	/**
	 * Sets the value of the '{@link sysml.activities.Probability#getBase_ActivityEdge <em>Base Activity Edge</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Base Activity Edge</em>' reference.
	 * @see #getBase_ActivityEdge()
	 * @generated
	 */
	void setBase_ActivityEdge(ActivityEdge value);

	/**
	 * Returns the value of the '<em><b>Base Parameter Set</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Base Parameter Set</em>' reference isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Base Parameter Set</em>' reference.
	 * @see #setBase_ParameterSet(ParameterSet)
	 * @see sysml.activities.ActivitiesPackage#getProbability_Base_ParameterSet()
	 * @model required="true" ordered="false"
	 * @generated
	 */
	ParameterSet getBase_ParameterSet();

	/**
	 * Sets the value of the '{@link sysml.activities.Probability#getBase_ParameterSet <em>Base Parameter Set</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Base Parameter Set</em>' reference.
	 * @see #getBase_ParameterSet()
	 * @generated
	 */
	void setBase_ParameterSet(ParameterSet value);

	/**
	 * Returns the value of the '<em><b>Probability</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Probability</em>' reference isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Probability</em>' reference.
	 * @see #setProbability(ValueSpecification)
	 * @see sysml.activities.ActivitiesPackage#getProbability_Probability()
	 * @model ordered="false"
	 * @generated
	 */
	ValueSpecification getProbability();

	/**
	 * Sets the value of the '{@link sysml.activities.Probability#getProbability <em>Probability</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Probability</em>' reference.
	 * @see #getProbability()
	 * @generated
	 */
	void setProbability(ValueSpecification value);

} // Probability
