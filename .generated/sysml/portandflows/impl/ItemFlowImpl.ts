/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.portandflows.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Item Flow</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link sysml.portandflows.impl.ItemFlowImpl#getBase_InformationFlow}</li>
     * <li>{@link sysml.portandflows.impl.ItemFlowImpl#getItemProperty}</li>
     * </ul>
     * 
     * @generated
     * @extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl
     * @class
     */
    export class ItemFlowImpl extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl implements sysml.portandflows.ItemFlow {
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
            return sysml.portandflows.PortandflowsPackage.Literals.ITEM_FLOW;
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
        public getBase_InformationFlow() : uml.InformationFlow {
            return <uml.InformationFlow><any>this.eGet(sysml.portandflows.PortandflowsPackage.Literals.ITEM_FLOW__BASE_INFORMATION_FLOW, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newBase_InformationFlow
         */
        public setBase_InformationFlow(newBase_InformationFlow : uml.InformationFlow) {
            this.eSet(sysml.portandflows.PortandflowsPackage.Literals.ITEM_FLOW__BASE_INFORMATION_FLOW, newBase_InformationFlow);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getItemProperty() : uml.Property {
            return <uml.Property><any>this.eGet(sysml.portandflows.PortandflowsPackage.Literals.ITEM_FLOW__ITEM_PROPERTY, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newItemProperty
         */
        public setItemProperty(newItemProperty : uml.Property) {
            this.eSet(sysml.portandflows.PortandflowsPackage.Literals.ITEM_FLOW__ITEM_PROPERTY, newItemProperty);
        }
    }
    ItemFlowImpl["__class"] = "sysml.portandflows.impl.ItemFlowImpl";
    ItemFlowImpl["__interfaces"] = ["sysml.portandflows.ItemFlow","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

