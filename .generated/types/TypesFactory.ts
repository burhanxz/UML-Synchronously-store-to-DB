/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace types {
    /**
     * <!-- begin-user-doc -->
     * The <b>Factory</b> for the model.
     * It provides a create method for each non-abstract class of the model.
     * <!-- end-user-doc -->
     * @see types.TypesPackage
     * @generated
     * @class
     */
    export interface TypesFactory extends org.eclipse.emf.ecore.EFactory {
        /**
         * Returns the package supported by this factory.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the package supported by this factory.
         * @generated
         */
        getTypesPackage() : types.TypesPackage;
    }

    export namespace TypesFactory {

        /**
         * The singleton instance of the factory.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        export let eINSTANCE : TypesFactory = types.impl.TypesFactoryImpl.init();
    }

}

