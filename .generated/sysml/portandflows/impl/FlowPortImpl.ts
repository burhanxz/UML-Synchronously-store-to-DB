/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.portandflows.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Flow Port</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link sysml.portandflows.impl.FlowPortImpl#getBase_Port}</li>
     * <li>{@link sysml.portandflows.impl.FlowPortImpl#isIsAtomic}</li>
     * <li>{@link sysml.portandflows.impl.FlowPortImpl#isIsConjugated}</li>
     * <li>{@link sysml.portandflows.impl.FlowPortImpl#getDirection}</li>
     * </ul>
     * 
     * @generated
     * @extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl
     * @class
     */
    export class FlowPortImpl extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl implements sysml.portandflows.FlowPort {
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
            return sysml.portandflows.PortandflowsPackage.Literals.FLOW_PORT;
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
        public getBase_Port() : uml.Port {
            return <uml.Port><any>this.eGet(sysml.portandflows.PortandflowsPackage.Literals.FLOW_PORT__BASE_PORT, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newBase_Port
         */
        public setBase_Port(newBase_Port : uml.Port) {
            this.eSet(sysml.portandflows.PortandflowsPackage.Literals.FLOW_PORT__BASE_PORT, newBase_Port);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isIsAtomic() : boolean {
            return <boolean>this.eGet(sysml.portandflows.PortandflowsPackage.Literals.FLOW_PORT__IS_ATOMIC, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isIsConjugated() : boolean {
            return <boolean>this.eGet(sysml.portandflows.PortandflowsPackage.Literals.FLOW_PORT__IS_CONJUGATED, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {boolean} newIsConjugated
         */
        public setIsConjugated(newIsConjugated : boolean) {
            this.eSet(sysml.portandflows.PortandflowsPackage.Literals.FLOW_PORT__IS_CONJUGATED, newIsConjugated);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {sysml.portandflows.FlowDirection}
         */
        public getDirection() : sysml.portandflows.FlowDirection {
            return <sysml.portandflows.FlowDirection>this.eGet(sysml.portandflows.PortandflowsPackage.Literals.FLOW_PORT__DIRECTION, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {sysml.portandflows.FlowDirection} newDirection
         */
        public setDirection(newDirection : sysml.portandflows.FlowDirection) {
            this.eSet(sysml.portandflows.PortandflowsPackage.Literals.FLOW_PORT__DIRECTION, newDirection);
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
            case sysml.portandflows.PortandflowsPackage.FLOW_PORT___GET_ICON:
                return this.getIcon();
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    FlowPortImpl["__class"] = "sysml.portandflows.impl.FlowPortImpl";
    FlowPortImpl["__interfaces"] = ["sysml.portandflows.FlowPort","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

