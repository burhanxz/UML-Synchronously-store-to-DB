/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Generalization</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.GeneralizationImpl#getGeneral}</li>
     * <li>{@link uml.impl.GeneralizationImpl#getGeneralizationSet}</li>
     * <li>{@link uml.impl.GeneralizationImpl#isIsSubstitutable}</li>
     * <li>{@link uml.impl.GeneralizationImpl#getSpecific}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.DirectedRelationshipImpl
     * @class
     */
    export class GeneralizationImpl extends uml.impl.DirectedRelationshipImpl implements uml.Generalization {
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
            return uml.UmlPackage.eINSTANCE.getGeneralization();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getGeneral() : uml.Classifier {
            return <uml.Classifier><any>this.eGet(uml.UmlPackage.eINSTANCE.getGeneralization_General(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newGeneral
         */
        public setGeneral(newGeneral : uml.Classifier) {
            this.eSet(uml.UmlPackage.eINSTANCE.getGeneralization_General(), newGeneral);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getGeneralizationSet() : org.eclipse.emf.common.util.EList<uml.GeneralizationSet> {
            return <org.eclipse.emf.common.util.EList<uml.GeneralizationSet>><any>this.eGet(uml.UmlPackage.eINSTANCE.getGeneralization_GeneralizationSet(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isIsSubstitutable() : boolean {
            return <boolean>this.eGet(uml.UmlPackage.eINSTANCE.getGeneralization_IsSubstitutable(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {boolean} newIsSubstitutable
         */
        public setIsSubstitutable(newIsSubstitutable : boolean) {
            this.eSet(uml.UmlPackage.eINSTANCE.getGeneralization_IsSubstitutable(), newIsSubstitutable);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getSpecific() : uml.Classifier {
            return <uml.Classifier><any>this.eGet(uml.UmlPackage.eINSTANCE.getGeneralization_Specific(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newSpecific
         */
        public setSpecific(newSpecific : uml.Classifier) {
            this.eSet(uml.UmlPackage.eINSTANCE.getGeneralization_Specific(), newSpecific);
        }
    }
    GeneralizationImpl["__class"] = "uml.impl.GeneralizationImpl";
    GeneralizationImpl["__interfaces"] = ["uml.Generalization","uml.Relationship","ecore4m.EModelElement","uml.DirectedRelationship","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

