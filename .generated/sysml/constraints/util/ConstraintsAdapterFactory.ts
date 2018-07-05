/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.constraints.util {
    /**
     * Creates an instance of the adapter factory.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @generated
     * @class
     * @extends org.eclipse.emf.common.notify.impl.AdapterFactoryImpl
     */
    export class ConstraintsAdapterFactory extends org.eclipse.emf.common.notify.impl.AdapterFactoryImpl {
        /**
         * The cached model package.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        static modelPackage : sysml.constraints.ConstraintsPackage = null;

        public constructor() {
            super();
            if(ConstraintsAdapterFactory.modelPackage == null) {
                ConstraintsAdapterFactory.modelPackage = sysml.constraints.ConstraintsPackage.eINSTANCE;
            }
        }

        /**
         * Returns whether this factory is applicable for the type of the object.
         * <!-- begin-user-doc -->
         * This implementation returns <code>true</code> if the object is either the model's package or is an instance object of the model.
         * <!-- end-user-doc -->
         * @return {boolean} whether this factory is applicable for the type of the object.
         * @generated
         * @param {*} object
         */
        public isFactoryForType(object : any) : boolean {
            if(object === ConstraintsAdapterFactory.modelPackage) {
                return true;
            }
            if(object != null && (object["__interfaces"] != null && object["__interfaces"].indexOf("org.eclipse.emf.ecore.EObject") >= 0 || object.constructor != null && object.constructor["__interfaces"] != null && object.constructor["__interfaces"].indexOf("org.eclipse.emf.ecore.EObject") >= 0)) {
                return (<org.eclipse.emf.ecore.EObject><any>object).eClass().getEPackage() === ConstraintsAdapterFactory.modelPackage;
            }
            return false;
        }

        /**
         * The switch that delegates to the <code>createXXX</code> methods.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        modelSwitch : sysml.constraints.util.ConstraintsSwitch<org.eclipse.emf.common.notify.Adapter> = new ConstraintsAdapterFactory.ConstraintsAdapterFactory$0(this);

        /**
         * Creates an adapter for the <code>target</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} target the object to adapt.
         * @return {*} the adapter for the <code>target</code>.
         * @generated
         */
        public createAdapter(target : org.eclipse.emf.common.notify.Notifier) : org.eclipse.emf.common.notify.Adapter {
            return this.modelSwitch.doSwitch(<org.eclipse.emf.ecore.EObject><any>target);
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see sysml.constraints.ConstraintBlock
         * @generated
         */
        public createConstraintBlockAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see sysml.constraints.ConstraintProperty
         * @generated
         */
        public createConstraintPropertyAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see sysml.blocks.Block
         * @generated
         */
        public createBlockAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for the default case.
         * <!-- begin-user-doc -->
         * This default implementation returns null.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @generated
         */
        public createEObjectAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }
    }
    ConstraintsAdapterFactory["__class"] = "sysml.constraints.util.ConstraintsAdapterFactory";
    ConstraintsAdapterFactory["__interfaces"] = ["org.eclipse.emf.common.notify.AdapterFactory"];



    export namespace ConstraintsAdapterFactory {

        export class ConstraintsAdapterFactory$0 extends sysml.constraints.util.ConstraintsSwitch<org.eclipse.emf.common.notify.Adapter> {
            public __parent: any;
            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseConstraintBlock(object : sysml.constraints.ConstraintBlock) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createConstraintBlockAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseConstraintProperty(object : sysml.constraints.ConstraintProperty) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createConstraintPropertyAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseBlock(object : sysml.blocks.Block) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createBlockAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public defaultCase(object : org.eclipse.emf.ecore.EObject) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createEObjectAdapter();
            }

            constructor(__parent: any) {
                super();
                this.__parent = __parent;
            }
        }

    }

}

