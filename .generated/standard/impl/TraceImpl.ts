/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace standard.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Trace</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link standard.impl.TraceImpl#getBase_Abstraction}</li>
     * </ul>
     * 
     * @generated
     * @extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl
     * @class
     */
    export class TraceImpl extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl implements standard.Trace {
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
            return standard.StandardPackage.Literals.TRACE;
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
        public getBase_Abstraction() : uml.Abstraction {
            return <uml.Abstraction><any>this.eGet(standard.StandardPackage.Literals.TRACE__BASE_ABSTRACTION, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newBase_Abstraction
         */
        public setBase_Abstraction(newBase_Abstraction : uml.Abstraction) {
            this.eSet(standard.StandardPackage.Literals.TRACE__BASE_ABSTRACTION, newBase_Abstraction);
        }
    }
    TraceImpl["__class"] = "standard.impl.TraceImpl";
    TraceImpl["__interfaces"] = ["standard.Trace","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

