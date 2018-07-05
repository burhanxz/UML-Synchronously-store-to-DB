/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.interactions {
    /**
     * <!-- begin-user-doc -->
     * The <b>Factory</b> for the model.
     * It provides a create method for each non-abstract class of the model.
     * <!-- end-user-doc -->
     * @see sysml.interactions.InteractionsPackage
     * @generated
     * @class
     */
    export interface InteractionsFactory extends org.eclipse.emf.ecore.EFactory {
        /**
         * Returns the package supported by this factory.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the package supported by this factory.
         * @generated
         */
        getInteractionsPackage() : sysml.interactions.InteractionsPackage;
    }

    export namespace InteractionsFactory {

        /**
         * The singleton instance of the factory.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        export let eINSTANCE : InteractionsFactory = sysml.interactions.impl.InteractionsFactoryImpl.init();
    }

}

