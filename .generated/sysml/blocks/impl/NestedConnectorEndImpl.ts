/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.blocks.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Nested Connector End</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link sysml.blocks.impl.NestedConnectorEndImpl#getPropertyPath}</li>
     * <li>{@link sysml.blocks.impl.NestedConnectorEndImpl#getBase_ConnectorEnd}</li>
     * </ul>
     * 
     * @generated
     * @extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl
     * @class
     */
    export class NestedConnectorEndImpl extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl implements sysml.blocks.NestedConnectorEnd {
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
            return sysml.blocks.BlocksPackage.Literals.NESTED_CONNECTOR_END;
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
        public getPropertyPath() : org.eclipse.emf.common.util.EList<uml.Property> {
            return <org.eclipse.emf.common.util.EList<uml.Property>><any>this.eGet(sysml.blocks.BlocksPackage.Literals.NESTED_CONNECTOR_END__PROPERTY_PATH, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getBase_ConnectorEnd() : uml.ConnectorEnd {
            return <uml.ConnectorEnd><any>this.eGet(sysml.blocks.BlocksPackage.Literals.NESTED_CONNECTOR_END__BASE_CONNECTOR_END, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newBase_ConnectorEnd
         */
        public setBase_ConnectorEnd(newBase_ConnectorEnd : uml.ConnectorEnd) {
            this.eSet(sysml.blocks.BlocksPackage.Literals.NESTED_CONNECTOR_END__BASE_CONNECTOR_END, newBase_ConnectorEnd);
        }
    }
    NestedConnectorEndImpl["__class"] = "sysml.blocks.impl.NestedConnectorEndImpl";
    NestedConnectorEndImpl["__interfaces"] = ["sysml.blocks.NestedConnectorEnd","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

