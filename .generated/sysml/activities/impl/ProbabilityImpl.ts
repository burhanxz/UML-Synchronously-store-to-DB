/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.activities.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Probability</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link sysml.activities.impl.ProbabilityImpl#getBase_ActivityEdge}</li>
     * <li>{@link sysml.activities.impl.ProbabilityImpl#getBase_ParameterSet}</li>
     * <li>{@link sysml.activities.impl.ProbabilityImpl#getProbability}</li>
     * </ul>
     * 
     * @generated
     * @extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl
     * @class
     */
    export class ProbabilityImpl extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl implements sysml.activities.Probability {
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
            return sysml.activities.ActivitiesPackage.Literals.PROBABILITY;
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
        public getBase_ActivityEdge() : uml.ActivityEdge {
            return <uml.ActivityEdge><any>this.eGet(sysml.activities.ActivitiesPackage.Literals.PROBABILITY__BASE_ACTIVITY_EDGE, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newBase_ActivityEdge
         */
        public setBase_ActivityEdge(newBase_ActivityEdge : uml.ActivityEdge) {
            this.eSet(sysml.activities.ActivitiesPackage.Literals.PROBABILITY__BASE_ACTIVITY_EDGE, newBase_ActivityEdge);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getBase_ParameterSet() : uml.ParameterSet {
            return <uml.ParameterSet><any>this.eGet(sysml.activities.ActivitiesPackage.Literals.PROBABILITY__BASE_PARAMETER_SET, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newBase_ParameterSet
         */
        public setBase_ParameterSet(newBase_ParameterSet : uml.ParameterSet) {
            this.eSet(sysml.activities.ActivitiesPackage.Literals.PROBABILITY__BASE_PARAMETER_SET, newBase_ParameterSet);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getProbability() : uml.ValueSpecification {
            return <uml.ValueSpecification><any>this.eGet(sysml.activities.ActivitiesPackage.Literals.PROBABILITY__PROBABILITY, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newProbability
         */
        public setProbability(newProbability : uml.ValueSpecification) {
            this.eSet(sysml.activities.ActivitiesPackage.Literals.PROBABILITY__PROBABILITY, newProbability);
        }
    }
    ProbabilityImpl["__class"] = "sysml.activities.impl.ProbabilityImpl";
    ProbabilityImpl["__interfaces"] = ["org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","sysml.activities.Probability","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

