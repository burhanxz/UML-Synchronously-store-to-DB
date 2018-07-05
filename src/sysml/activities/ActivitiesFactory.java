/**
 */
package sysml.activities;

import org.eclipse.emf.ecore.EFactory;

/**
 * <!-- begin-user-doc -->
 * The <b>Factory</b> for the model.
 * It provides a create method for each non-abstract class of the model.
 * <!-- end-user-doc -->
 * @see sysml.activities.ActivitiesPackage
 * @generated
 */
public interface ActivitiesFactory extends EFactory {
	/**
	 * The singleton instance of the factory.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	ActivitiesFactory eINSTANCE = sysml.activities.impl.ActivitiesFactoryImpl.init();

	/**
	 * Returns a new object of class '<em>Optional</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return a new object of class '<em>Optional</em>'.
	 * @generated
	 */
	Optional createOptional();

	/**
	 * Returns a new object of class '<em>Rate</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return a new object of class '<em>Rate</em>'.
	 * @generated
	 */
	Rate createRate();

	/**
	 * Returns a new object of class '<em>Probability</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return a new object of class '<em>Probability</em>'.
	 * @generated
	 */
	Probability createProbability();

	/**
	 * Returns a new object of class '<em>Continuous</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return a new object of class '<em>Continuous</em>'.
	 * @generated
	 */
	Continuous createContinuous();

	/**
	 * Returns a new object of class '<em>Discrete</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return a new object of class '<em>Discrete</em>'.
	 * @generated
	 */
	Discrete createDiscrete();

	/**
	 * Returns a new object of class '<em>Control Operator</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return a new object of class '<em>Control Operator</em>'.
	 * @generated
	 */
	ControlOperator createControlOperator();

	/**
	 * Returns a new object of class '<em>No Buffer</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return a new object of class '<em>No Buffer</em>'.
	 * @generated
	 */
	NoBuffer createNoBuffer();

	/**
	 * Returns a new object of class '<em>Overwrite</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return a new object of class '<em>Overwrite</em>'.
	 * @generated
	 */
	Overwrite createOverwrite();

	/**
	 * Returns the package supported by this factory.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the package supported by this factory.
	 * @generated
	 */
	ActivitiesPackage getActivitiesPackage();

} //ActivitiesFactory
