/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.allocations.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Allocate</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link sysml.allocations.impl.AllocateImpl#getBase_Abstraction}</li>
     * </ul>
     * 
     * @generated
     * @extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl
     * @class
     */
    export class AllocateImpl extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl implements sysml.allocations.Allocate {
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
            return sysml.allocations.AllocationsPackage.Literals.ALLOCATE;
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
        public getBase_Abstraction() : uml.Abstraction {
            return <uml.Abstraction><any>this.eGet(sysml.allocations.AllocationsPackage.Literals.ALLOCATE__BASE_ABSTRACTION, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newBase_Abstraction
         */
        public setBase_Abstraction(newBase_Abstraction : uml.Abstraction) {
            this.eSet(sysml.allocations.AllocationsPackage.Literals.ALLOCATE__BASE_ABSTRACTION, newBase_Abstraction);
        }
    }
    AllocateImpl["__class"] = "sysml.allocations.impl.AllocateImpl";
    AllocateImpl["__interfaces"] = ["org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.common.notify.Notifier","sysml.allocations.Allocate","org.eclipse.emf.ecore.InternalEObject"];


}

