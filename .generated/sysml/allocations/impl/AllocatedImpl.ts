/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.allocations.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Allocated</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link sysml.allocations.impl.AllocatedImpl#getBase_NamedElement}</li>
     * <li>{@link sysml.allocations.impl.AllocatedImpl#getAllocatedFrom}</li>
     * <li>{@link sysml.allocations.impl.AllocatedImpl#getAllocatedTo}</li>
     * </ul>
     * 
     * @generated
     * @extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl
     * @class
     */
    export class AllocatedImpl extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl implements sysml.allocations.Allocated {
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
            return sysml.allocations.AllocationsPackage.Literals.ALLOCATED;
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
        public getBase_NamedElement() : uml.NamedElement {
            return <uml.NamedElement><any>this.eGet(sysml.allocations.AllocationsPackage.Literals.ALLOCATED__BASE_NAMED_ELEMENT, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newBase_NamedElement
         */
        public setBase_NamedElement(newBase_NamedElement : uml.NamedElement) {
            this.eSet(sysml.allocations.AllocationsPackage.Literals.ALLOCATED__BASE_NAMED_ELEMENT, newBase_NamedElement);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getAllocatedFrom() : org.eclipse.emf.common.util.EList<uml.NamedElement> {
            return <org.eclipse.emf.common.util.EList<uml.NamedElement>><any>this.eGet(sysml.allocations.AllocationsPackage.Literals.ALLOCATED__ALLOCATED_FROM, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getAllocatedTo() : org.eclipse.emf.common.util.EList<uml.NamedElement> {
            return <org.eclipse.emf.common.util.EList<uml.NamedElement>><any>this.eGet(sysml.allocations.AllocationsPackage.Literals.ALLOCATED__ALLOCATED_TO, true);
        }
    }
    AllocatedImpl["__class"] = "sysml.allocations.impl.AllocatedImpl";
    AllocatedImpl["__interfaces"] = ["sysml.allocations.Allocated","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

