/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace standard.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Model Library</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link standard.impl.ModelLibraryImpl#getBase_Package}</li>
     * </ul>
     * 
     * @generated
     * @extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl
     * @class
     */
    export class ModelLibraryImpl extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl implements standard.ModelLibrary {
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
            return standard.StandardPackage.Literals.MODEL_LIBRARY;
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
        public getBase_Package() : uml.Package {
            return <uml.Package><any>this.eGet(standard.StandardPackage.Literals.MODEL_LIBRARY__BASE_PACKAGE, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newBase_Package
         */
        public setBase_Package(newBase_Package : uml.Package) {
            this.eSet(standard.StandardPackage.Literals.MODEL_LIBRARY__BASE_PACKAGE, newBase_Package);
        }
    }
    ModelLibraryImpl["__class"] = "standard.impl.ModelLibraryImpl";
    ModelLibraryImpl["__interfaces"] = ["standard.ModelLibrary","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

