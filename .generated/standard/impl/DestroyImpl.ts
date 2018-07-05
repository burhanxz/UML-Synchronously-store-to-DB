/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace standard.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Destroy</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link standard.impl.DestroyImpl#getBase_BehavioralFeature}</li>
     * </ul>
     * 
     * @generated
     * @extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl
     * @class
     */
    export class DestroyImpl extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl implements standard.Destroy {
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
            return standard.StandardPackage.Literals.DESTROY;
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
        public getBase_BehavioralFeature() : uml.BehavioralFeature {
            return <uml.BehavioralFeature><any>this.eGet(standard.StandardPackage.Literals.DESTROY__BASE_BEHAVIORAL_FEATURE, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newBase_BehavioralFeature
         */
        public setBase_BehavioralFeature(newBase_BehavioralFeature : uml.BehavioralFeature) {
            this.eSet(standard.StandardPackage.Literals.DESTROY__BASE_BEHAVIORAL_FEATURE, newBase_BehavioralFeature);
        }
    }
    DestroyImpl["__class"] = "standard.impl.DestroyImpl";
    DestroyImpl["__interfaces"] = ["org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.common.notify.Notifier","standard.Destroy","org.eclipse.emf.ecore.InternalEObject"];


}

