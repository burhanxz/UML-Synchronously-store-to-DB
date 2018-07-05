/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace standard.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Derive</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link standard.impl.DeriveImpl#getComputation}</li>
     * <li>{@link standard.impl.DeriveImpl#getBase_Abstraction}</li>
     * </ul>
     * 
     * @generated
     * @extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl
     * @class
     */
    export class DeriveImpl extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl implements standard.Derive {
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
            return standard.StandardPackage.Literals.DERIVE;
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
        public getComputation() : uml.ValueSpecification {
            return <uml.ValueSpecification><any>this.eGet(standard.StandardPackage.Literals.DERIVE__COMPUTATION, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newComputation
         */
        public setComputation(newComputation : uml.ValueSpecification) {
            this.eSet(standard.StandardPackage.Literals.DERIVE__COMPUTATION, newComputation);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getBase_Abstraction() : uml.Abstraction {
            return <uml.Abstraction><any>this.eGet(standard.StandardPackage.Literals.DERIVE__BASE_ABSTRACTION, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newBase_Abstraction
         */
        public setBase_Abstraction(newBase_Abstraction : uml.Abstraction) {
            this.eSet(standard.StandardPackage.Literals.DERIVE__BASE_ABSTRACTION, newBase_Abstraction);
        }
    }
    DeriveImpl["__class"] = "standard.impl.DeriveImpl";
    DeriveImpl["__interfaces"] = ["standard.Derive","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

