/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace standard.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>File</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link standard.impl.FileImpl#getBase_Artifact}</li>
     * </ul>
     * 
     * @generated
     * @extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl
     * @class
     */
    export abstract class FileImpl extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl implements standard.File {
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
            return standard.StandardPackage.Literals.FILE;
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
        public getBase_Artifact() : uml.Artifact {
            return <uml.Artifact><any>this.eGet(standard.StandardPackage.Literals.FILE__BASE_ARTIFACT, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newBase_Artifact
         */
        public setBase_Artifact(newBase_Artifact : uml.Artifact) {
            this.eSet(standard.StandardPackage.Literals.FILE__BASE_ARTIFACT, newBase_Artifact);
        }
    }
    FileImpl["__class"] = "standard.impl.FileImpl";
    FileImpl["__interfaces"] = ["org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.common.notify.Notifier","standard.File","org.eclipse.emf.ecore.InternalEObject"];


}

