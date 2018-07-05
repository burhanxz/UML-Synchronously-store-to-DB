/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.allocations.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Allocate Activity Partition</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link sysml.allocations.impl.AllocateActivityPartitionImpl#getBase_ActivityPartition}</li>
     * </ul>
     * 
     * @generated
     * @extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl
     * @class
     */
    export class AllocateActivityPartitionImpl extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl implements sysml.allocations.AllocateActivityPartition {
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
            return sysml.allocations.AllocationsPackage.Literals.ALLOCATE_ACTIVITY_PARTITION;
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
        public getBase_ActivityPartition() : uml.ActivityPartition {
            return <uml.ActivityPartition><any>this.eGet(sysml.allocations.AllocationsPackage.Literals.ALLOCATE_ACTIVITY_PARTITION__BASE_ACTIVITY_PARTITION, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newBase_ActivityPartition
         */
        public setBase_ActivityPartition(newBase_ActivityPartition : uml.ActivityPartition) {
            this.eSet(sysml.allocations.AllocationsPackage.Literals.ALLOCATE_ACTIVITY_PARTITION__BASE_ACTIVITY_PARTITION, newBase_ActivityPartition);
        }
    }
    AllocateActivityPartitionImpl["__class"] = "sysml.allocations.impl.AllocateActivityPartitionImpl";
    AllocateActivityPartitionImpl["__interfaces"] = ["org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","sysml.allocations.AllocateActivityPartition","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

