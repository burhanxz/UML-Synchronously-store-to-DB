/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.blocks.impl {
    /**
     * Creates an instance of the factory.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @generated
     * @class
     * @extends org.eclipse.emf.ecore.impl.EFactoryImpl
     */
    export class BlocksFactoryImpl extends org.eclipse.emf.ecore.impl.EFactoryImpl implements sysml.blocks.BlocksFactory {
        /**
         * Creates the default factory implementation.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public static init() : sysml.blocks.BlocksFactory {
            try {
                let theBlocksFactory : sysml.blocks.BlocksFactory = <sysml.blocks.BlocksFactory><any>org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEFactory(sysml.blocks.BlocksPackage.eNS_URI);
                if(theBlocksFactory != null) {
                    return theBlocksFactory;
                }
            } catch(exception) {
                org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.log(exception);
            };
            return new BlocksFactoryImpl();
        }

        public constructor() {
            super();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} eClass
         * @return {*}
         */
        public createGen(eClass : org.eclipse.emf.ecore.EClass) : org.eclipse.emf.ecore.EObject {
            switch((eClass.getClassifierID())) {
            case sysml.blocks.BlocksPackage.BLOCK:
                return this.createBlock();
            case sysml.blocks.BlocksPackage.DISTRIBUTED_PROPERTY:
                return this.createDistributedProperty();
            case sysml.blocks.BlocksPackage.DIMENSION:
                return this.createDimension();
            case sysml.blocks.BlocksPackage.UNIT:
                return this.createUnit();
            case sysml.blocks.BlocksPackage.VALUE_TYPE:
                return this.createValueType();
            case sysml.blocks.BlocksPackage.NESTED_CONNECTOR_END:
                return this.createNestedConnectorEnd();
            case sysml.blocks.BlocksPackage.PARTICIPANT_PROPERTY:
                return this.createParticipantProperty();
            case sysml.blocks.BlocksPackage.CONNECTOR_PROPERTY:
                return this.createConnectorProperty();
            case sysml.blocks.BlocksPackage.BINDING_CONNECTOR:
                return this.createBindingConnector();
            case sysml.blocks.BlocksPackage.PROPERTY_SPECIFIC_TYPE:
                return this.createPropertySpecificType();
            default:
                throw Object.defineProperty(new Error("The class \'" + eClass.getName() + "\' is not a valid classifier"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
            }
        }

        /**
         * 
         * @param {*} eClass
         * @return {*}
         */
        public create(eClass : org.eclipse.emf.ecore.EClass) : org.eclipse.emf.ecore.EObject {
            let newObject : org.eclipse.emf.ecore.InternalEObject = <org.eclipse.emf.ecore.InternalEObject><any>this.createGen(eClass);
            newObject.eSetStore(a.store.MyStore.INSTANCE_$LI$());
            return newObject;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createBlock() : sysml.blocks.Block {
            let block : sysml.blocks.impl.BlockImpl = new sysml.blocks.impl.BlockImpl();
            return block;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createDistributedProperty() : sysml.blocks.DistributedProperty {
            let distributedProperty : sysml.blocks.impl.DistributedPropertyImpl = new sysml.blocks.impl.DistributedPropertyImpl();
            return distributedProperty;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createDimension() : sysml.blocks.Dimension {
            let dimension : sysml.blocks.impl.DimensionImpl = new sysml.blocks.impl.DimensionImpl();
            return dimension;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createUnit() : sysml.blocks.Unit {
            let unit : sysml.blocks.impl.UnitImpl = new sysml.blocks.impl.UnitImpl();
            return unit;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createValueType() : sysml.blocks.ValueType {
            let valueType : sysml.blocks.impl.ValueTypeImpl = new sysml.blocks.impl.ValueTypeImpl();
            return valueType;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createNestedConnectorEnd() : sysml.blocks.NestedConnectorEnd {
            let nestedConnectorEnd : sysml.blocks.impl.NestedConnectorEndImpl = new sysml.blocks.impl.NestedConnectorEndImpl();
            return nestedConnectorEnd;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createParticipantProperty() : sysml.blocks.ParticipantProperty {
            let participantProperty : sysml.blocks.impl.ParticipantPropertyImpl = new sysml.blocks.impl.ParticipantPropertyImpl();
            return participantProperty;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createConnectorProperty() : sysml.blocks.ConnectorProperty {
            let connectorProperty : sysml.blocks.impl.ConnectorPropertyImpl = new sysml.blocks.impl.ConnectorPropertyImpl();
            return connectorProperty;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createBindingConnector() : sysml.blocks.BindingConnector {
            let bindingConnector : sysml.blocks.impl.BindingConnectorImpl = new sysml.blocks.impl.BindingConnectorImpl();
            return bindingConnector;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createPropertySpecificType() : sysml.blocks.PropertySpecificType {
            let propertySpecificType : sysml.blocks.impl.PropertySpecificTypeImpl = new sysml.blocks.impl.PropertySpecificTypeImpl();
            return propertySpecificType;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getBlocksPackage() : sysml.blocks.BlocksPackage {
            return <sysml.blocks.BlocksPackage><any>this.getEPackage();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @deprecated
         * @generated
         * @return {*}
         */
        public static getPackage() : sysml.blocks.BlocksPackage {
            return sysml.blocks.BlocksPackage.eINSTANCE;
        }
    }
    BlocksFactoryImpl["__class"] = "sysml.blocks.impl.BlocksFactoryImpl";
    BlocksFactoryImpl["__interfaces"] = ["org.eclipse.emf.ecore.EModelElement","org.eclipse.emf.ecore.EFactory","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","sysml.blocks.BlocksFactory","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject","org.eclipse.emf.ecore.resource.impl.BinaryResourceImpl.DataConverter.Factory"];


}

