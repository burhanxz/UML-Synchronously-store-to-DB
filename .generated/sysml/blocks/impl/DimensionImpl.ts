/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.blocks.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Dimension</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link sysml.blocks.impl.DimensionImpl#getBase_InstanceSpecification}</li>
     * </ul>
     * 
     * @generated
     * @extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl
     * @class
     */
    export class DimensionImpl extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl implements sysml.blocks.Dimension {
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
            return sysml.blocks.BlocksPackage.Literals.DIMENSION;
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
        public getBase_InstanceSpecification() : uml.InstanceSpecification {
            return <uml.InstanceSpecification><any>this.eGet(sysml.blocks.BlocksPackage.Literals.DIMENSION__BASE_INSTANCE_SPECIFICATION, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newBase_InstanceSpecification
         */
        public setBase_InstanceSpecification(newBase_InstanceSpecification : uml.InstanceSpecification) {
            this.eSet(sysml.blocks.BlocksPackage.Literals.DIMENSION__BASE_INSTANCE_SPECIFICATION, newBase_InstanceSpecification);
        }
    }
    DimensionImpl["__class"] = "sysml.blocks.impl.DimensionImpl";
    DimensionImpl["__interfaces"] = ["sysml.blocks.Dimension","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

