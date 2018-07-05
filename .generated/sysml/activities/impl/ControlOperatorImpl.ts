/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.activities.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Control Operator</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link sysml.activities.impl.ControlOperatorImpl#getBase_Operation}</li>
     * <li>{@link sysml.activities.impl.ControlOperatorImpl#getBase_Behavior}</li>
     * </ul>
     * 
     * @generated
     * @extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl
     * @class
     */
    export class ControlOperatorImpl extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl implements sysml.activities.ControlOperator {
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
            return sysml.activities.ActivitiesPackage.Literals.CONTROL_OPERATOR;
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
        public getBase_Operation() : uml.Operation {
            return <uml.Operation><any>this.eGet(sysml.activities.ActivitiesPackage.Literals.CONTROL_OPERATOR__BASE_OPERATION, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newBase_Operation
         */
        public setBase_Operation(newBase_Operation : uml.Operation) {
            this.eSet(sysml.activities.ActivitiesPackage.Literals.CONTROL_OPERATOR__BASE_OPERATION, newBase_Operation);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getBase_Behavior() : uml.Behavior {
            return <uml.Behavior><any>this.eGet(sysml.activities.ActivitiesPackage.Literals.CONTROL_OPERATOR__BASE_BEHAVIOR, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newBase_Behavior
         */
        public setBase_Behavior(newBase_Behavior : uml.Behavior) {
            this.eSet(sysml.activities.ActivitiesPackage.Literals.CONTROL_OPERATOR__BASE_BEHAVIOR, newBase_Behavior);
        }
    }
    ControlOperatorImpl["__class"] = "sysml.activities.impl.ControlOperatorImpl";
    ControlOperatorImpl["__interfaces"] = ["org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.common.notify.Notifier","sysml.activities.ControlOperator","org.eclipse.emf.ecore.InternalEObject"];


}

