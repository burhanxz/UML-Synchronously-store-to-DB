/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.blocks.util {
    /**
     * Creates an instance of the adapter factory.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @generated
     * @class
     * @extends org.eclipse.emf.common.notify.impl.AdapterFactoryImpl
     */
    export class BlocksAdapterFactory extends org.eclipse.emf.common.notify.impl.AdapterFactoryImpl {
        /**
         * The cached model package.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        static modelPackage : sysml.blocks.BlocksPackage = null;

        public constructor() {
            super();
            if(BlocksAdapterFactory.modelPackage == null) {
                BlocksAdapterFactory.modelPackage = sysml.blocks.BlocksPackage.eINSTANCE;
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
            if(object === BlocksAdapterFactory.modelPackage) {
                return true;
            }
            if(object != null && (object["__interfaces"] != null && object["__interfaces"].indexOf("org.eclipse.emf.ecore.EObject") >= 0 || object.constructor != null && object.constructor["__interfaces"] != null && object.constructor["__interfaces"].indexOf("org.eclipse.emf.ecore.EObject") >= 0)) {
                return (<org.eclipse.emf.ecore.EObject><any>object).eClass().getEPackage() === BlocksAdapterFactory.modelPackage;
            }
            return false;
        }

        /**
         * The switch that delegates to the <code>createXXX</code> methods.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        modelSwitch : sysml.blocks.util.BlocksSwitch<org.eclipse.emf.common.notify.Adapter> = new BlocksAdapterFactory.BlocksAdapterFactory$0(this);

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
         * @see sysml.blocks.Block
         * @generated
         */
        public createBlockAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see sysml.blocks.DistributedProperty
         * @generated
         */
        public createDistributedPropertyAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see sysml.blocks.Dimension
         * @generated
         */
        public createDimensionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see sysml.blocks.Unit
         * @generated
         */
        public createUnitAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see sysml.blocks.ValueType
         * @generated
         */
        public createValueTypeAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see sysml.blocks.NestedConnectorEnd
         * @generated
         */
        public createNestedConnectorEndAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see sysml.blocks.ParticipantProperty
         * @generated
         */
        public createParticipantPropertyAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see sysml.blocks.ConnectorProperty
         * @generated
         */
        public createConnectorPropertyAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see sysml.blocks.BindingConnector
         * @generated
         */
        public createBindingConnectorAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see sysml.blocks.PropertySpecificType
         * @generated
         */
        public createPropertySpecificTypeAdapter() : org.eclipse.emf.common.notify.Adapter {
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
    BlocksAdapterFactory["__class"] = "sysml.blocks.util.BlocksAdapterFactory";
    BlocksAdapterFactory["__interfaces"] = ["org.eclipse.emf.common.notify.AdapterFactory"];



    export namespace BlocksAdapterFactory {

        export class BlocksAdapterFactory$0 extends sysml.blocks.util.BlocksSwitch<org.eclipse.emf.common.notify.Adapter> {
            public __parent: any;
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
            public caseDistributedProperty(object : sysml.blocks.DistributedProperty) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createDistributedPropertyAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseDimension(object : sysml.blocks.Dimension) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createDimensionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseUnit(object : sysml.blocks.Unit) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createUnitAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseValueType(object : sysml.blocks.ValueType) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createValueTypeAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseNestedConnectorEnd(object : sysml.blocks.NestedConnectorEnd) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createNestedConnectorEndAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseParticipantProperty(object : sysml.blocks.ParticipantProperty) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createParticipantPropertyAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseConnectorProperty(object : sysml.blocks.ConnectorProperty) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createConnectorPropertyAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseBindingConnector(object : sysml.blocks.BindingConnector) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createBindingConnectorAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public casePropertySpecificType(object : sysml.blocks.PropertySpecificType) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createPropertySpecificTypeAdapter();
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

