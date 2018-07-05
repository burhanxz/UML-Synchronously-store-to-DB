/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.portandflows.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Flow Property</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link sysml.portandflows.impl.FlowPropertyImpl#getBase_Property}</li>
     * <li>{@link sysml.portandflows.impl.FlowPropertyImpl#getDirection}</li>
     * </ul>
     * 
     * @generated
     * @extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl
     * @class
     */
    export class FlowPropertyImpl extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl implements sysml.portandflows.FlowProperty {
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
            return sysml.portandflows.PortandflowsPackage.Literals.FLOW_PROPERTY;
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
            return <uml.Property><any>this.eGet(sysml.portandflows.PortandflowsPackage.Literals.FLOW_PROPERTY__BASE_PROPERTY, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newBase_Property
         */
        public setBase_Property(newBase_Property : uml.Property) {
            this.eSet(sysml.portandflows.PortandflowsPackage.Literals.FLOW_PROPERTY__BASE_PROPERTY, newBase_Property);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {sysml.portandflows.FlowDirection}
         */
        public getDirection() : sysml.portandflows.FlowDirection {
            return <sysml.portandflows.FlowDirection>this.eGet(sysml.portandflows.PortandflowsPackage.Literals.FLOW_PROPERTY__DIRECTION, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {sysml.portandflows.FlowDirection} newDirection
         */
        public setDirection(newDirection : sysml.portandflows.FlowDirection) {
            this.eSet(sysml.portandflows.PortandflowsPackage.Literals.FLOW_PROPERTY__DIRECTION, newDirection);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getIcon() : uml.Image {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {number} operationID
         * @param {*} arguments
         * @return {*}
         */
        public eInvoke(operationID : number, __arguments : org.eclipse.emf.common.util.EList<any>) : any {
            switch((operationID)) {
            case sysml.portandflows.PortandflowsPackage.FLOW_PROPERTY___GET_ICON:
                return this.getIcon();
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    FlowPropertyImpl["__class"] = "sysml.portandflows.impl.FlowPropertyImpl";
    FlowPropertyImpl["__interfaces"] = ["sysml.portandflows.FlowProperty","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

