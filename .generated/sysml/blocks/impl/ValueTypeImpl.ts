/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.blocks.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Value Type</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link sysml.blocks.impl.ValueTypeImpl#getBase_DataType}</li>
     * <li>{@link sysml.blocks.impl.ValueTypeImpl#getUnit}</li>
     * <li>{@link sysml.blocks.impl.ValueTypeImpl#getDimension}</li>
     * </ul>
     * 
     * @generated
     * @extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl
     * @class
     */
    export class ValueTypeImpl extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl implements sysml.blocks.ValueType {
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
            return sysml.blocks.BlocksPackage.Literals.VALUE_TYPE;
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
        public getBase_DataType() : uml.DataType {
            return <uml.DataType><any>this.eGet(sysml.blocks.BlocksPackage.Literals.VALUE_TYPE__BASE_DATA_TYPE, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newBase_DataType
         */
        public setBase_DataType(newBase_DataType : uml.DataType) {
            this.eSet(sysml.blocks.BlocksPackage.Literals.VALUE_TYPE__BASE_DATA_TYPE, newBase_DataType);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getUnit() : sysml.blocks.Unit {
            return <sysml.blocks.Unit><any>this.eGet(sysml.blocks.BlocksPackage.Literals.VALUE_TYPE__UNIT, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newUnit
         */
        public setUnit(newUnit : sysml.blocks.Unit) {
            this.eSet(sysml.blocks.BlocksPackage.Literals.VALUE_TYPE__UNIT, newUnit);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getDimension() : sysml.blocks.Dimension {
            return <sysml.blocks.Dimension><any>this.eGet(sysml.blocks.BlocksPackage.Literals.VALUE_TYPE__DIMENSION, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newDimension
         */
        public setDimension(newDimension : sysml.blocks.Dimension) {
            this.eSet(sysml.blocks.BlocksPackage.Literals.VALUE_TYPE__DIMENSION, newDimension);
        }
    }
    ValueTypeImpl["__class"] = "sysml.blocks.impl.ValueTypeImpl";
    ValueTypeImpl["__interfaces"] = ["org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject","sysml.blocks.ValueType"];


}

