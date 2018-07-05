/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.blocks.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Binding Connector</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link sysml.blocks.impl.BindingConnectorImpl#getBase_Connector}</li>
     * </ul>
     * 
     * @generated
     * @extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl
     * @class
     */
    export class BindingConnectorImpl extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl implements sysml.blocks.BindingConnector {
        constructor() {
            super();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        eStaticClass() : org.eclipse.emf.ecore.EClass {
            return sysml.blocks.BlocksPackage.Literals.BINDING_CONNECTOR;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {number}
         */
        eStaticFeatureCount() : number {
            return 0;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getBase_Connector() : uml.Connector {
            return <uml.Connector><any>this.eGet(sysml.blocks.BlocksPackage.Literals.BINDING_CONNECTOR__BASE_CONNECTOR, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newBase_Connector
         */
        public setBase_Connector(newBase_Connector : uml.Connector) {
            this.eSet(sysml.blocks.BlocksPackage.Literals.BINDING_CONNECTOR__BASE_CONNECTOR, newBase_Connector);
        }
    }
    BindingConnectorImpl["__class"] = "sysml.blocks.impl.BindingConnectorImpl";
    BindingConnectorImpl["__interfaces"] = ["sysml.blocks.BindingConnector","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

