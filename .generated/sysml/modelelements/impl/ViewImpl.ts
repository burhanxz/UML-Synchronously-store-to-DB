/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.modelelements.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>View</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link sysml.modelelements.impl.ViewImpl#getViewPoint}</li>
     * <li>{@link sysml.modelelements.impl.ViewImpl#getBase_Package}</li>
     * </ul>
     * 
     * @generated
     * @extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl
     * @class
     */
    export class ViewImpl extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl implements sysml.modelelements.View {
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
            return sysml.modelelements.ModelelementsPackage.Literals.VIEW;
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
        public getViewPoint() : sysml.modelelements.ViewPoint {
            return <sysml.modelelements.ViewPoint><any>this.eGet(sysml.modelelements.ModelelementsPackage.Literals.VIEW__VIEW_POINT, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getBase_Package() : uml.Package {
            return <uml.Package><any>this.eGet(sysml.modelelements.ModelelementsPackage.Literals.VIEW__BASE_PACKAGE, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newBase_Package
         */
        public setBase_Package(newBase_Package : uml.Package) {
            this.eSet(sysml.modelelements.ModelelementsPackage.Literals.VIEW__BASE_PACKAGE, newBase_Package);
        }
    }
    ViewImpl["__class"] = "sysml.modelelements.impl.ViewImpl";
    ViewImpl["__interfaces"] = ["sysml.modelelements.View","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

