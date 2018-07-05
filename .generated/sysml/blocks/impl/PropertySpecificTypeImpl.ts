/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.blocks.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Property Specific Type</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link sysml.blocks.impl.PropertySpecificTypeImpl#getBase_Classifier}</li>
     * </ul>
     * 
     * @generated
     * @extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl
     * @class
     */
    export class PropertySpecificTypeImpl extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl implements sysml.blocks.PropertySpecificType {
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
            return sysml.blocks.BlocksPackage.Literals.PROPERTY_SPECIFIC_TYPE;
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
        public getBase_Classifier() : uml.Classifier {
            return <uml.Classifier><any>this.eGet(sysml.blocks.BlocksPackage.Literals.PROPERTY_SPECIFIC_TYPE__BASE_CLASSIFIER, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newBase_Classifier
         */
        public setBase_Classifier(newBase_Classifier : uml.Classifier) {
            this.eSet(sysml.blocks.BlocksPackage.Literals.PROPERTY_SPECIFIC_TYPE__BASE_CLASSIFIER, newBase_Classifier);
        }
    }
    PropertySpecificTypeImpl["__class"] = "sysml.blocks.impl.PropertySpecificTypeImpl";
    PropertySpecificTypeImpl["__interfaces"] = ["org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.common.notify.Notifier","sysml.blocks.PropertySpecificType","org.eclipse.emf.ecore.InternalEObject"];


}

