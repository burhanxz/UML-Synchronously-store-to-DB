/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Template Signature</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.TemplateSignatureImpl#getParameter}</li>
     * <li>{@link uml.impl.TemplateSignatureImpl#getTemplate}</li>
     * <li>{@link uml.impl.TemplateSignatureImpl#getOwnedParameter}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.ElementImpl
     * @class
     */
    export class TemplateSignatureImpl extends uml.impl.ElementImpl implements uml.TemplateSignature {
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
            return uml.UmlPackage.eINSTANCE.getTemplateSignature();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getParameter() : org.eclipse.emf.common.util.EList<uml.TemplateParameter> {
            return <org.eclipse.emf.common.util.EList<uml.TemplateParameter>><any>this.eGet(uml.UmlPackage.eINSTANCE.getTemplateSignature_Parameter(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getTemplate() : uml.TemplateableElement {
            return <uml.TemplateableElement><any>this.eGet(uml.UmlPackage.eINSTANCE.getTemplateSignature_Template(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newTemplate
         */
        public setTemplate(newTemplate : uml.TemplateableElement) {
            this.eSet(uml.UmlPackage.eINSTANCE.getTemplateSignature_Template(), newTemplate);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getOwnedParameter() : org.eclipse.emf.common.util.EList<uml.TemplateParameter> {
            return <org.eclipse.emf.common.util.EList<uml.TemplateParameter>><any>this.eGet(uml.UmlPackage.eINSTANCE.getTemplateSignature_OwnedParameter(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public own_elements(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.TEMPLATE_SIGNATURE__OWN_ELEMENTS, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["own_elements", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
                }
                return false;
            }
            return true;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public unique_parameters(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.TEMPLATE_SIGNATURE__UNIQUE_PARAMETERS, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["unique_parameters", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
                }
                return false;
            }
            return true;
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
            case uml.UmlPackage.TEMPLATE_SIGNATURE___OWN_ELEMENTS__DIAGNOSTICCHAIN_MAP:
                return this.own_elements(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.TEMPLATE_SIGNATURE___UNIQUE_PARAMETERS__DIAGNOSTICCHAIN_MAP:
                return this.unique_parameters(<any>__arguments.get(0), <any>__arguments.get(1));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    TemplateSignatureImpl["__class"] = "uml.impl.TemplateSignatureImpl";
    TemplateSignatureImpl["__interfaces"] = ["uml.TemplateSignature","ecore4m.EModelElement","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

