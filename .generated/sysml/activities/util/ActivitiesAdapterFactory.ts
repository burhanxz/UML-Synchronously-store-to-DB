/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.activities.util {
    /**
     * Creates an instance of the adapter factory.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @generated
     * @class
     * @extends org.eclipse.emf.common.notify.impl.AdapterFactoryImpl
     */
    export class ActivitiesAdapterFactory extends org.eclipse.emf.common.notify.impl.AdapterFactoryImpl {
        /**
         * The cached model package.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        static modelPackage : sysml.activities.ActivitiesPackage = null;

        public constructor() {
            super();
            if(ActivitiesAdapterFactory.modelPackage == null) {
                ActivitiesAdapterFactory.modelPackage = sysml.activities.ActivitiesPackage.eINSTANCE;
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
            if(object === ActivitiesAdapterFactory.modelPackage) {
                return true;
            }
            if(object != null && (object["__interfaces"] != null && object["__interfaces"].indexOf("org.eclipse.emf.ecore.EObject") >= 0 || object.constructor != null && object.constructor["__interfaces"] != null && object.constructor["__interfaces"].indexOf("org.eclipse.emf.ecore.EObject") >= 0)) {
                return (<org.eclipse.emf.ecore.EObject><any>object).eClass().getEPackage() === ActivitiesAdapterFactory.modelPackage;
            }
            return false;
        }

        /**
         * The switch that delegates to the <code>createXXX</code> methods.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        modelSwitch : sysml.activities.util.ActivitiesSwitch<org.eclipse.emf.common.notify.Adapter> = new ActivitiesAdapterFactory.ActivitiesAdapterFactory$0(this);

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
         * @see sysml.activities.Optional
         * @generated
         */
        public createOptionalAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see sysml.activities.Rate
         * @generated
         */
        public createRateAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see sysml.activities.Probability
         * @generated
         */
        public createProbabilityAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see sysml.activities.Continuous
         * @generated
         */
        public createContinuousAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see sysml.activities.Discrete
         * @generated
         */
        public createDiscreteAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see sysml.activities.ControlOperator
         * @generated
         */
        public createControlOperatorAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see sysml.activities.NoBuffer
         * @generated
         */
        public createNoBufferAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see sysml.activities.Overwrite
         * @generated
         */
        public createOverwriteAdapter() : org.eclipse.emf.common.notify.Adapter {
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
    ActivitiesAdapterFactory["__class"] = "sysml.activities.util.ActivitiesAdapterFactory";
    ActivitiesAdapterFactory["__interfaces"] = ["org.eclipse.emf.common.notify.AdapterFactory"];



    export namespace ActivitiesAdapterFactory {

        export class ActivitiesAdapterFactory$0 extends sysml.activities.util.ActivitiesSwitch<org.eclipse.emf.common.notify.Adapter> {
            public __parent: any;
            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseOptional(object : sysml.activities.Optional) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createOptionalAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseRate(object : sysml.activities.Rate) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createRateAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseProbability(object : sysml.activities.Probability) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createProbabilityAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseContinuous(object : sysml.activities.Continuous) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createContinuousAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseDiscrete(object : sysml.activities.Discrete) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createDiscreteAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseControlOperator(object : sysml.activities.ControlOperator) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createControlOperatorAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseNoBuffer(object : sysml.activities.NoBuffer) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createNoBufferAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseOverwrite(object : sysml.activities.Overwrite) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createOverwriteAdapter();
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

