/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Templateable Element</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.TemplateableElementImpl#getTemplateBinding}</li>
     * <li>{@link uml.impl.TemplateableElementImpl#getOwnedTemplateSignature}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.ElementImpl
     * @class
     */
    export abstract class TemplateableElementImpl extends uml.impl.ElementImpl implements uml.TemplateableElement {
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
            return uml.UmlPackage.eINSTANCE.getTemplateableElement();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getTemplateBinding() : org.eclipse.emf.common.util.EList<uml.TemplateBinding> {
            return <org.eclipse.emf.common.util.EList<uml.TemplateBinding>><any>this.eGet(uml.UmlPackage.eINSTANCE.getTemplateableElement_TemplateBinding(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getOwnedTemplateSignature() : uml.TemplateSignature {
            return <uml.TemplateSignature><any>this.eGet(uml.UmlPackage.eINSTANCE.getTemplateableElement_OwnedTemplateSignature(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newOwnedTemplateSignature
         */
        public setOwnedTemplateSignature(newOwnedTemplateSignature : uml.TemplateSignature) {
            this.eSet(uml.UmlPackage.eINSTANCE.getTemplateableElement_OwnedTemplateSignature(), newOwnedTemplateSignature);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isTemplate() : boolean {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public parameterableElements() : org.eclipse.emf.common.util.EList<uml.ParameterableElement> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {number} operationID
         * @param {*} arguments
         * @return {*}
         */
        public eInvoke(operationID : number, __arguments : org.eclipse.emf.common.util.EList<any>) : any {
            switch((operationID)) {
            case uml.UmlPackage.TEMPLATEABLE_ELEMENT___IS_TEMPLATE:
                return this.isTemplate();
            case uml.UmlPackage.TEMPLATEABLE_ELEMENT___PARAMETERABLE_ELEMENTS:
                return this.parameterableElements();
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    TemplateableElementImpl["__class"] = "uml.impl.TemplateableElementImpl";
    TemplateableElementImpl["__interfaces"] = ["ecore4m.EModelElement","uml.TemplateableElement","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

