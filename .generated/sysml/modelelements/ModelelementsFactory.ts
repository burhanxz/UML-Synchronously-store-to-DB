/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.modelelements {
    /**
     * <!-- begin-user-doc -->
     * The <b>Factory</b> for the model.
     * It provides a create method for each non-abstract class of the model.
     * <!-- end-user-doc -->
     * @see sysml.modelelements.ModelelementsPackage
     * @generated
     * @class
     */
    export interface ModelelementsFactory extends org.eclipse.emf.ecore.EFactory {
        /**
         * Returns a new object of class '<em>Conform</em>'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} a new object of class '<em>Conform</em>'.
         * @generated
         */
        createConform() : sysml.modelelements.Conform;

        /**
         * Returns a new object of class '<em>View</em>'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} a new object of class '<em>View</em>'.
         * @generated
         */
        createView() : sysml.modelelements.View;

        /**
         * Returns a new object of class '<em>View Point</em>'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} a new object of class '<em>View Point</em>'.
         * @generated
         */
        createViewPoint() : sysml.modelelements.ViewPoint;

        /**
         * Returns a new object of class '<em>Rationale</em>'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} a new object of class '<em>Rationale</em>'.
         * @generated
         */
        createRationale() : sysml.modelelements.Rationale;

        /**
         * Returns a new object of class '<em>Problem</em>'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} a new object of class '<em>Problem</em>'.
         * @generated
         */
        createProblem() : sysml.modelelements.Problem;

        /**
         * Returns the package supported by this factory.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the package supported by this factory.
         * @generated
         */
        getModelelementsPackage() : sysml.modelelements.ModelelementsPackage;
    }

    export namespace ModelelementsFactory {

        /**
         * The singleton instance of the factory.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        export let eINSTANCE : ModelelementsFactory = sysml.modelelements.impl.ModelelementsFactoryImpl.init();
    }

}

