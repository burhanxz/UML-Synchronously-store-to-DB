/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.modelelements.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>View Point</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link sysml.modelelements.impl.ViewPointImpl#getBase_Class}</li>
     * <li>{@link sysml.modelelements.impl.ViewPointImpl#getStakeHolders}</li>
     * <li>{@link sysml.modelelements.impl.ViewPointImpl#getPurpose}</li>
     * <li>{@link sysml.modelelements.impl.ViewPointImpl#getConcerns}</li>
     * <li>{@link sysml.modelelements.impl.ViewPointImpl#getLanguages}</li>
     * <li>{@link sysml.modelelements.impl.ViewPointImpl#getMethods}</li>
     * </ul>
     * 
     * @generated
     * @extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl
     * @class
     */
    export class ViewPointImpl extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl implements sysml.modelelements.ViewPoint {
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
            return sysml.modelelements.ModelelementsPackage.Literals.VIEW_POINT;
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
        public getBase_Class() : uml.Class {
            return <uml.Class><any>this.eGet(sysml.modelelements.ModelelementsPackage.Literals.VIEW_POINT__BASE_CLASS, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newBase_Class
         */
        public setBase_Class(newBase_Class : uml.Class) {
            this.eSet(sysml.modelelements.ModelelementsPackage.Literals.VIEW_POINT__BASE_CLASS, newBase_Class);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getStakeHolders() : org.eclipse.emf.common.util.EList<string> {
            return <org.eclipse.emf.common.util.EList<string>><any>this.eGet(sysml.modelelements.ModelelementsPackage.Literals.VIEW_POINT__STAKE_HOLDERS, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {string}
         */
        public getPurpose() : string {
            return <string>this.eGet(sysml.modelelements.ModelelementsPackage.Literals.VIEW_POINT__PURPOSE, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {string} newPurpose
         */
        public setPurpose(newPurpose : string) {
            this.eSet(sysml.modelelements.ModelelementsPackage.Literals.VIEW_POINT__PURPOSE, newPurpose);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getConcerns() : org.eclipse.emf.common.util.EList<string> {
            return <org.eclipse.emf.common.util.EList<string>><any>this.eGet(sysml.modelelements.ModelelementsPackage.Literals.VIEW_POINT__CONCERNS, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getLanguages() : org.eclipse.emf.common.util.EList<string> {
            return <org.eclipse.emf.common.util.EList<string>><any>this.eGet(sysml.modelelements.ModelelementsPackage.Literals.VIEW_POINT__LANGUAGES, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getMethods() : org.eclipse.emf.common.util.EList<string> {
            return <org.eclipse.emf.common.util.EList<string>><any>this.eGet(sysml.modelelements.ModelelementsPackage.Literals.VIEW_POINT__METHODS, true);
        }
    }
    ViewPointImpl["__class"] = "sysml.modelelements.impl.ViewPointImpl";
    ViewPointImpl["__interfaces"] = ["org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.common.notify.Notifier","sysml.modelelements.ViewPoint","org.eclipse.emf.ecore.InternalEObject"];


}

