/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.constraints {
    /**
     * <!-- begin-user-doc -->
     * The <b>Factory</b> for the model.
     * It provides a create method for each non-abstract class of the model.
     * <!-- end-user-doc -->
     * @see sysml.constraints.ConstraintsPackage
     * @generated
     * @class
     */
    export interface ConstraintsFactory extends org.eclipse.emf.ecore.EFactory {
        /**
         * Returns a new object of class '<em>Constraint Block</em>'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} a new object of class '<em>Constraint Block</em>'.
         * @generated
         */
        createConstraintBlock() : sysml.constraints.ConstraintBlock;

        /**
         * Returns a new object of class '<em>Constraint Property</em>'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} a new object of class '<em>Constraint Property</em>'.
         * @generated
         */
        createConstraintProperty() : sysml.constraints.ConstraintProperty;

        /**
         * Returns the package supported by this factory.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the package supported by this factory.
         * @generated
         */
        getConstraintsPackage() : sysml.constraints.ConstraintsPackage;
    }

    export namespace ConstraintsFactory {

        /**
         * The singleton instance of the factory.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        export let eINSTANCE : ConstraintsFactory = sysml.constraints.impl.ConstraintsFactoryImpl.init();
    }

}

