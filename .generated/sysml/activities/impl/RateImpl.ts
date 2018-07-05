/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.activities.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Rate</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link sysml.activities.impl.RateImpl#getBase_Parameter}</li>
     * <li>{@link sysml.activities.impl.RateImpl#getBase_ActivityEdge}</li>
     * <li>{@link sysml.activities.impl.RateImpl#getRate}</li>
     * </ul>
     * 
     * @generated
     * @extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl
     * @class
     */
    export class RateImpl extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl implements sysml.activities.Rate {
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
            return sysml.activities.ActivitiesPackage.Literals.RATE;
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
            return <uml.Parameter><any>this.eGet(sysml.activities.ActivitiesPackage.Literals.RATE__BASE_PARAMETER, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newBase_Parameter
         */
        public setBase_Parameter(newBase_Parameter : uml.Parameter) {
            this.eSet(sysml.activities.ActivitiesPackage.Literals.RATE__BASE_PARAMETER, newBase_Parameter);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getBase_ActivityEdge() : uml.ActivityEdge {
            return <uml.ActivityEdge><any>this.eGet(sysml.activities.ActivitiesPackage.Literals.RATE__BASE_ACTIVITY_EDGE, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newBase_ActivityEdge
         */
        public setBase_ActivityEdge(newBase_ActivityEdge : uml.ActivityEdge) {
            this.eSet(sysml.activities.ActivitiesPackage.Literals.RATE__BASE_ACTIVITY_EDGE, newBase_ActivityEdge);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getRate() : uml.InstanceSpecification {
            return <uml.InstanceSpecification><any>this.eGet(sysml.activities.ActivitiesPackage.Literals.RATE__RATE, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newRate
         */
        public setRate(newRate : uml.InstanceSpecification) {
            this.eSet(sysml.activities.ActivitiesPackage.Literals.RATE__RATE, newRate);
        }
    }
    RateImpl["__class"] = "sysml.activities.impl.RateImpl";
    RateImpl["__interfaces"] = ["sysml.activities.Rate","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

