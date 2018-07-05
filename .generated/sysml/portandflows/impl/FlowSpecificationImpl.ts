/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.portandflows.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Flow Specification</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link sysml.portandflows.impl.FlowSpecificationImpl#getBase_Interface}</li>
     * </ul>
     * 
     * @generated
     * @extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl
     * @class
     */
    export class FlowSpecificationImpl extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl implements sysml.portandflows.FlowSpecification {
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
            return sysml.portandflows.PortandflowsPackage.Literals.FLOW_SPECIFICATION;
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
        public getBase_Interface() : uml.Interface {
            return <uml.Interface><any>this.eGet(sysml.portandflows.PortandflowsPackage.Literals.FLOW_SPECIFICATION__BASE_INTERFACE, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newBase_Interface
         */
        public setBase_Interface(newBase_Interface : uml.Interface) {
            this.eSet(sysml.portandflows.PortandflowsPackage.Literals.FLOW_SPECIFICATION__BASE_INTERFACE, newBase_Interface);
        }
    }
    FlowSpecificationImpl["__class"] = "sysml.portandflows.impl.FlowSpecificationImpl";
    FlowSpecificationImpl["__interfaces"] = ["sysml.portandflows.FlowSpecification","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

