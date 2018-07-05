/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.blocks.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Connector Property</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link sysml.blocks.impl.ConnectorPropertyImpl#getBase_Property}</li>
     * <li>{@link sysml.blocks.impl.ConnectorPropertyImpl#getConnector}</li>
     * </ul>
     * 
     * @generated
     * @extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl
     * @class
     */
    export class ConnectorPropertyImpl extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl implements sysml.blocks.ConnectorProperty {
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
            return sysml.blocks.BlocksPackage.Literals.CONNECTOR_PROPERTY;
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
        public getBase_Property() : uml.Property {
            return <uml.Property><any>this.eGet(sysml.blocks.BlocksPackage.Literals.CONNECTOR_PROPERTY__BASE_PROPERTY, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newBase_Property
         */
        public setBase_Property(newBase_Property : uml.Property) {
            this.eSet(sysml.blocks.BlocksPackage.Literals.CONNECTOR_PROPERTY__BASE_PROPERTY, newBase_Property);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getConnector() : uml.Connector {
            return <uml.Connector><any>this.eGet(sysml.blocks.BlocksPackage.Literals.CONNECTOR_PROPERTY__CONNECTOR, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newConnector
         */
        public setConnector(newConnector : uml.Connector) {
            this.eSet(sysml.blocks.BlocksPackage.Literals.CONNECTOR_PROPERTY__CONNECTOR, newConnector);
        }
    }
    ConnectorPropertyImpl["__class"] = "sysml.blocks.impl.ConnectorPropertyImpl";
    ConnectorPropertyImpl["__interfaces"] = ["org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","sysml.blocks.ConnectorProperty","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

