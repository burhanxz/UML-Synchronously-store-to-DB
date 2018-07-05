/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Package Merge</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.PackageMergeImpl#getMergedPackage}</li>
     * <li>{@link uml.impl.PackageMergeImpl#getReceivingPackage}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.DirectedRelationshipImpl
     * @class
     */
    export class PackageMergeImpl extends uml.impl.DirectedRelationshipImpl implements uml.PackageMerge {
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
            return uml.UmlPackage.eINSTANCE.getPackageMerge();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getMergedPackage() : uml.Package {
            return <uml.Package><any>this.eGet(uml.UmlPackage.eINSTANCE.getPackageMerge_MergedPackage(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newMergedPackage
         */
        public setMergedPackage(newMergedPackage : uml.Package) {
            this.eSet(uml.UmlPackage.eINSTANCE.getPackageMerge_MergedPackage(), newMergedPackage);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getReceivingPackage() : uml.Package {
            return <uml.Package><any>this.eGet(uml.UmlPackage.eINSTANCE.getPackageMerge_ReceivingPackage(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newReceivingPackage
         */
        public setReceivingPackage(newReceivingPackage : uml.Package) {
            this.eSet(uml.UmlPackage.eINSTANCE.getPackageMerge_ReceivingPackage(), newReceivingPackage);
        }
    }
    PackageMergeImpl["__class"] = "uml.impl.PackageMergeImpl";
    PackageMergeImpl["__interfaces"] = ["uml.Relationship","ecore4m.EModelElement","uml.DirectedRelationship","uml.PackageMerge","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

