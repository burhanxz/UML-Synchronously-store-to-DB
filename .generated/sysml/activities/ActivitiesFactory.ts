/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.activities {
    /**
     * <!-- begin-user-doc -->
     * The <b>Factory</b> for the model.
     * It provides a create method for each non-abstract class of the model.
     * <!-- end-user-doc -->
     * @see sysml.activities.ActivitiesPackage
     * @generated
     * @class
     */
    export interface ActivitiesFactory extends org.eclipse.emf.ecore.EFactory {
        /**
         * Returns a new object of class '<em>Optional</em>'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} a new object of class '<em>Optional</em>'.
         * @generated
         */
        createOptional() : sysml.activities.Optional;

        /**
         * Returns a new object of class '<em>Rate</em>'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} a new object of class '<em>Rate</em>'.
         * @generated
         */
        createRate() : sysml.activities.Rate;

        /**
         * Returns a new object of class '<em>Probability</em>'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} a new object of class '<em>Probability</em>'.
         * @generated
         */
        createProbability() : sysml.activities.Probability;

        /**
         * Returns a new object of class '<em>Continuous</em>'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} a new object of class '<em>Continuous</em>'.
         * @generated
         */
        createContinuous() : sysml.activities.Continuous;

        /**
         * Returns a new object of class '<em>Discrete</em>'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} a new object of class '<em>Discrete</em>'.
         * @generated
         */
        createDiscrete() : sysml.activities.Discrete;

        /**
         * Returns a new object of class '<em>Control Operator</em>'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} a new object of class '<em>Control Operator</em>'.
         * @generated
         */
        createControlOperator() : sysml.activities.ControlOperator;

        /**
         * Returns a new object of class '<em>No Buffer</em>'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} a new object of class '<em>No Buffer</em>'.
         * @generated
         */
        createNoBuffer() : sysml.activities.NoBuffer;

        /**
         * Returns a new object of class '<em>Overwrite</em>'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} a new object of class '<em>Overwrite</em>'.
         * @generated
         */
        createOverwrite() : sysml.activities.Overwrite;

        /**
         * Returns the package supported by this factory.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the package supported by this factory.
         * @generated
         */
        getActivitiesPackage() : sysml.activities.ActivitiesPackage;
    }

    export namespace ActivitiesFactory {

        /**
         * The singleton instance of the factory.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        export let eINSTANCE : ActivitiesFactory = sysml.activities.impl.ActivitiesFactoryImpl.init();
    }

}

