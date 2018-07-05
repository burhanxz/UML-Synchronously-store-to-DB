/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Parameterable Element</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.ParameterableElementImpl#getOwningTemplateParameter}</li>
     * <li>{@link uml.impl.ParameterableElementImpl#getTemplateParameter}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.ElementImpl
     * @class
     */
    export abstract class ParameterableElementImpl extends uml.impl.ElementImpl implements uml.ParameterableElement {
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
            return uml.UmlPackage.eINSTANCE.getParameterableElement();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getOwningTemplateParameter() : uml.TemplateParameter {
            return <uml.TemplateParameter><any>this.eGet(uml.UmlPackage.eINSTANCE.getParameterableElement_OwningTemplateParameter(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newOwningTemplateParameter
         */
        public setOwningTemplateParameter(newOwningTemplateParameter : uml.TemplateParameter) {
            this.eSet(uml.UmlPackage.eINSTANCE.getParameterableElement_OwningTemplateParameter(), newOwningTemplateParameter);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getTemplateParameter() : uml.TemplateParameter {
            return <uml.TemplateParameter><any>this.eGet(uml.UmlPackage.eINSTANCE.getParameterableElement_TemplateParameter(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newTemplateParameter
         */
        public setTemplateParameter(newTemplateParameter : uml.TemplateParameter) {
            this.eSet(uml.UmlPackage.eINSTANCE.getParameterableElement_TemplateParameter(), newTemplateParameter);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} p
         * @return {boolean}
         */
        public isCompatibleWith(p : uml.ParameterableElement) : boolean {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isTemplateParameter() : boolean {
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
            case uml.UmlPackage.PARAMETERABLE_ELEMENT___IS_COMPATIBLE_WITH__PARAMETERABLEELEMENT:
                return this.isCompatibleWith(<any>__arguments.get(0));
            case uml.UmlPackage.PARAMETERABLE_ELEMENT___IS_TEMPLATE_PARAMETER:
                return this.isTemplateParameter();
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    ParameterableElementImpl["__class"] = "uml.impl.ParameterableElementImpl";
    ParameterableElementImpl["__interfaces"] = ["ecore4m.EModelElement","uml.ParameterableElement","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

