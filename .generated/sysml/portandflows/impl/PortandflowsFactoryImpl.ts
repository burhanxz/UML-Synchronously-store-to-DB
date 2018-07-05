/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.portandflows.impl {
    /**
     * Creates an instance of the factory.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @generated
     * @class
     * @extends org.eclipse.emf.ecore.impl.EFactoryImpl
     */
    export class PortandflowsFactoryImpl extends org.eclipse.emf.ecore.impl.EFactoryImpl implements sysml.portandflows.PortandflowsFactory {
        /**
         * Creates the default factory implementation.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public static init() : sysml.portandflows.PortandflowsFactory {
            try {
                let thePortandflowsFactory : sysml.portandflows.PortandflowsFactory = <sysml.portandflows.PortandflowsFactory><any>org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEFactory(sysml.portandflows.PortandflowsPackage.eNS_URI);
                if(thePortandflowsFactory != null) {
                    return thePortandflowsFactory;
                }
            } catch(exception) {
                org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.log(exception);
            };
            return new PortandflowsFactoryImpl();
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
            case sysml.portandflows.PortandflowsPackage.FLOW_PORT:
                return this.createFlowPort();
            case sysml.portandflows.PortandflowsPackage.FLOW_PROPERTY:
                return this.createFlowProperty();
            case sysml.portandflows.PortandflowsPackage.FLOW_SPECIFICATION:
                return this.createFlowSpecification();
            case sysml.portandflows.PortandflowsPackage.ITEM_FLOW:
                return this.createItemFlow();
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
         * @param {*} eDataType
         * @param {string} initialValue
         * @return {*}
         */
        public createFromString(eDataType : org.eclipse.emf.ecore.EDataType, initialValue : string) : any {
            switch((eDataType.getClassifierID())) {
            case sysml.portandflows.PortandflowsPackage.FLOW_DIRECTION:
                return this.createFlowDirectionFromString(eDataType, initialValue);
            default:
                throw Object.defineProperty(new Error("The datatype \'" + eDataType.getName() + "\' is not a valid classifier"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
            }
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} eDataType
         * @param {*} instanceValue
         * @return {string}
         */
        public convertToString(eDataType : org.eclipse.emf.ecore.EDataType, instanceValue : any) : string {
            switch((eDataType.getClassifierID())) {
            case sysml.portandflows.PortandflowsPackage.FLOW_DIRECTION:
                return this.convertFlowDirectionToString(eDataType, instanceValue);
            default:
                throw Object.defineProperty(new Error("The datatype \'" + eDataType.getName() + "\' is not a valid classifier"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
            }
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createFlowPort() : sysml.portandflows.FlowPort {
            let flowPort : sysml.portandflows.impl.FlowPortImpl = new sysml.portandflows.impl.FlowPortImpl();
            return flowPort;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createFlowProperty() : sysml.portandflows.FlowProperty {
            let flowProperty : sysml.portandflows.impl.FlowPropertyImpl = new sysml.portandflows.impl.FlowPropertyImpl();
            return flowProperty;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createFlowSpecification() : sysml.portandflows.FlowSpecification {
            let flowSpecification : sysml.portandflows.impl.FlowSpecificationImpl = new sysml.portandflows.impl.FlowSpecificationImpl();
            return flowSpecification;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createItemFlow() : sysml.portandflows.ItemFlow {
            let itemFlow : sysml.portandflows.impl.ItemFlowImpl = new sysml.portandflows.impl.ItemFlowImpl();
            return itemFlow;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} eDataType
         * @param {string} initialValue
         * @return {sysml.portandflows.FlowDirection}
         */
        public createFlowDirectionFromString(eDataType : org.eclipse.emf.ecore.EDataType, initialValue : string) : sysml.portandflows.FlowDirection {
            let result : sysml.portandflows.FlowDirection = sysml.portandflows.FlowDirection_$WRAPPER.get(initialValue);
            if(result == null) throw Object.defineProperty(new Error("The value \'" + initialValue + "\' is not a valid enumerator of \'" + eDataType.getName() + "\'"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
            return result;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} eDataType
         * @param {*} instanceValue
         * @return {string}
         */
        public convertFlowDirectionToString(eDataType : org.eclipse.emf.ecore.EDataType, instanceValue : any) : string {
            return instanceValue == null?null:instanceValue.toString();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getPortandflowsPackage() : sysml.portandflows.PortandflowsPackage {
            return <sysml.portandflows.PortandflowsPackage><any>this.getEPackage();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @deprecated
         * @generated
         * @return {*}
         */
        public static getPackage() : sysml.portandflows.PortandflowsPackage {
            return sysml.portandflows.PortandflowsPackage.eINSTANCE;
        }
    }
    PortandflowsFactoryImpl["__class"] = "sysml.portandflows.impl.PortandflowsFactoryImpl";
    PortandflowsFactoryImpl["__interfaces"] = ["sysml.portandflows.PortandflowsFactory","org.eclipse.emf.ecore.EModelElement","org.eclipse.emf.ecore.EFactory","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject","org.eclipse.emf.ecore.resource.impl.BinaryResourceImpl.DataConverter.Factory"];


}

