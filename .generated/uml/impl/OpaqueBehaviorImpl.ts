/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Opaque Behavior</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.OpaqueBehaviorImpl#getBody}</li>
     * <li>{@link uml.impl.OpaqueBehaviorImpl#getLanguage}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.BehaviorImpl
     * @class
     */
    export class OpaqueBehaviorImpl extends uml.impl.BehaviorImpl implements uml.OpaqueBehavior {
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
            return uml.UmlPackage.eINSTANCE.getOpaqueBehavior();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getBody() : org.eclipse.emf.common.util.EList<string> {
            return <org.eclipse.emf.common.util.EList<string>><any>this.eGet(uml.UmlPackage.eINSTANCE.getOpaqueBehavior_Body(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        public unsetBody() {
            this.eUnset(uml.UmlPackage.eINSTANCE.getOpaqueBehavior_Body());
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isSetBody() : boolean {
            return this.eIsSet(uml.UmlPackage.eINSTANCE.getOpaqueBehavior_Body());
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getLanguage() : org.eclipse.emf.common.util.EList<string> {
            return <org.eclipse.emf.common.util.EList<string>><any>this.eGet(uml.UmlPackage.eINSTANCE.getOpaqueBehavior_Language(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        public unsetLanguage() {
            this.eUnset(uml.UmlPackage.eINSTANCE.getOpaqueBehavior_Language());
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isSetLanguage() : boolean {
            return this.eIsSet(uml.UmlPackage.eINSTANCE.getOpaqueBehavior_Language());
        }
    }
    OpaqueBehaviorImpl["__class"] = "uml.impl.OpaqueBehaviorImpl";
    OpaqueBehaviorImpl["__interfaces"] = ["uml.Classifier","ecore4m.EModelElement","uml.Namespace","org.eclipse.emf.ecore.EObject","uml.NamedElement","uml.Behavior","org.eclipse.emf.common.notify.Notifier","uml.StructuredClassifier","uml.BehavioredClassifier","uml.RedefinableElement","uml.ParameterableElement","uml.PackageableElement","uml.EncapsulatedClassifier","uml.TemplateableElement","uml.Class","org.eclipse.emf.ecore.EModelElement","uml.Type","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","uml.OpaqueBehavior","org.eclipse.emf.ecore.InternalEObject"];


}

