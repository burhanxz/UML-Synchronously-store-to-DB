/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace standard.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Metamodel</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link standard.impl.MetamodelImpl#getBase_Model}</li>
     * </ul>
     * 
     * @generated
     * @extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl
     * @class
     */
    export class MetamodelImpl extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl implements standard.Metamodel {
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
            return standard.StandardPackage.Literals.METAMODEL;
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
        public getBase_Model() : uml.Model {
            return <uml.Model><any>this.eGet(standard.StandardPackage.Literals.METAMODEL__BASE_MODEL, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newBase_Model
         */
        public setBase_Model(newBase_Model : uml.Model) {
            this.eSet(standard.StandardPackage.Literals.METAMODEL__BASE_MODEL, newBase_Model);
        }
    }
    MetamodelImpl["__class"] = "standard.impl.MetamodelImpl";
    MetamodelImpl["__interfaces"] = ["standard.Metamodel","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

