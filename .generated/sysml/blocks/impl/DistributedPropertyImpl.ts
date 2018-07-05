/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.blocks.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Distributed Property</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link sysml.blocks.impl.DistributedPropertyImpl#getBase_Property}</li>
     * </ul>
     * 
     * @generated
     * @extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl
     * @class
     */
    export class DistributedPropertyImpl extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl implements sysml.blocks.DistributedProperty {
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
            return sysml.blocks.BlocksPackage.Literals.DISTRIBUTED_PROPERTY;
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
            return <uml.Property><any>this.eGet(sysml.blocks.BlocksPackage.Literals.DISTRIBUTED_PROPERTY__BASE_PROPERTY, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newBase_Property
         */
        public setBase_Property(newBase_Property : uml.Property) {
            this.eSet(sysml.blocks.BlocksPackage.Literals.DISTRIBUTED_PROPERTY__BASE_PROPERTY, newBase_Property);
        }
    }
    DistributedPropertyImpl["__class"] = "sysml.blocks.impl.DistributedPropertyImpl";
    DistributedPropertyImpl["__interfaces"] = ["org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","sysml.blocks.DistributedProperty","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

