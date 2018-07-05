/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.statemachines {
    /**
     * <!-- begin-user-doc -->
     * The <b>Factory</b> for the model.
     * It provides a create method for each non-abstract class of the model.
     * <!-- end-user-doc -->
     * @see sysml.statemachines.StatemachinesPackage
     * @generated
     * @class
     */
    export interface StatemachinesFactory extends org.eclipse.emf.ecore.EFactory {
        /**
         * Returns the package supported by this factory.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the package supported by this factory.
         * @generated
         */
        getStatemachinesPackage() : sysml.statemachines.StatemachinesPackage;
    }

    export namespace StatemachinesFactory {

        /**
         * The singleton instance of the factory.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        export let eINSTANCE : StatemachinesFactory = sysml.statemachines.impl.StatemachinesFactoryImpl.init();
    }

}

