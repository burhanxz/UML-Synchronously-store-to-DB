/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Feature</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.FeatureImpl#getFeaturingClassifier}</li>
     * <li>{@link uml.impl.FeatureImpl#isIsStatic}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.RedefinableElementImpl
     * @class
     */
    export abstract class FeatureImpl extends uml.impl.RedefinableElementImpl implements uml.Feature {
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
            return uml.UmlPackage.eINSTANCE.getFeature();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getFeaturingClassifier() : org.eclipse.emf.common.util.EList<uml.Classifier> {
            return <org.eclipse.emf.common.util.EList<uml.Classifier>><any>this.eGet(uml.UmlPackage.eINSTANCE.getFeature_FeaturingClassifier(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isIsStatic() : boolean {
            return <boolean>this.eGet(uml.UmlPackage.eINSTANCE.getFeature_IsStatic(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {boolean} newIsStatic
         */
        public setIsStatic(newIsStatic : boolean) {
            this.eSet(uml.UmlPackage.eINSTANCE.getFeature_IsStatic(), newIsStatic);
        }
    }
    FeatureImpl["__class"] = "uml.impl.FeatureImpl";
    FeatureImpl["__interfaces"] = ["uml.RedefinableElement","ecore4m.EModelElement","uml.Feature","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

