/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace standard.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Responsibility</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link standard.impl.ResponsibilityImpl#getBase_Usage}</li>
     * </ul>
     * 
     * @generated
     * @extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl
     * @class
     */
    export class ResponsibilityImpl extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl implements standard.Responsibility {
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
            return standard.StandardPackage.Literals.RESPONSIBILITY;
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
        public getBase_Usage() : uml.Usage {
            return <uml.Usage><any>this.eGet(standard.StandardPackage.Literals.RESPONSIBILITY__BASE_USAGE, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newBase_Usage
         */
        public setBase_Usage(newBase_Usage : uml.Usage) {
            this.eSet(standard.StandardPackage.Literals.RESPONSIBILITY__BASE_USAGE, newBase_Usage);
        }
    }
    ResponsibilityImpl["__class"] = "standard.impl.ResponsibilityImpl";
    ResponsibilityImpl["__interfaces"] = ["org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","standard.Responsibility","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

