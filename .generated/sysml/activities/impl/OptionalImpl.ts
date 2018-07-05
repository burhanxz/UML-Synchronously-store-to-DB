/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.activities.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Optional</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link sysml.activities.impl.OptionalImpl#getBase_Parameter}</li>
     * </ul>
     * 
     * @generated
     * @extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl
     * @class
     */
    export class OptionalImpl extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl implements sysml.activities.Optional {
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
            return sysml.activities.ActivitiesPackage.Literals.OPTIONAL;
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
        public getBase_Parameter() : uml.Parameter {
            return <uml.Parameter><any>this.eGet(sysml.activities.ActivitiesPackage.Literals.OPTIONAL__BASE_PARAMETER, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newBase_Parameter
         */
        public setBase_Parameter(newBase_Parameter : uml.Parameter) {
            this.eSet(sysml.activities.ActivitiesPackage.Literals.OPTIONAL__BASE_PARAMETER, newBase_Parameter);
        }
    }
    OptionalImpl["__class"] = "sysml.activities.impl.OptionalImpl";
    OptionalImpl["__interfaces"] = ["sysml.activities.Optional","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

