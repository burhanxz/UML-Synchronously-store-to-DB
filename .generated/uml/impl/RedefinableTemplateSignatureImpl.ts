/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Redefinable Template Signature</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.RedefinableTemplateSignatureImpl#getParameter}</li>
     * <li>{@link uml.impl.RedefinableTemplateSignatureImpl#getTemplate}</li>
     * <li>{@link uml.impl.RedefinableTemplateSignatureImpl#getOwnedParameter}</li>
     * <li>{@link uml.impl.RedefinableTemplateSignatureImpl#getExtendedSignature}</li>
     * <li>{@link uml.impl.RedefinableTemplateSignatureImpl#getInheritedParameter}</li>
     * <li>{@link uml.impl.RedefinableTemplateSignatureImpl#getClassifier}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.RedefinableElementImpl
     * @class
     */
    export class RedefinableTemplateSignatureImpl extends uml.impl.RedefinableElementImpl implements uml.RedefinableTemplateSignature {
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
            return uml.UmlPackage.eINSTANCE.getRedefinableTemplateSignature();
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
         * @return {*}
         */
        public getExtendedSignature() : org.eclipse.emf.common.util.EList<uml.RedefinableTemplateSignature> {
            return <org.eclipse.emf.common.util.EList<uml.RedefinableTemplateSignature>><any>this.eGet(uml.UmlPackage.eINSTANCE.getRedefinableTemplateSignature_ExtendedSignature(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getInheritedParameter() : org.eclipse.emf.common.util.EList<uml.TemplateParameter> {
            return <org.eclipse.emf.common.util.EList<uml.TemplateParameter>><any>this.eGet(uml.UmlPackage.eINSTANCE.getRedefinableTemplateSignature_InheritedParameter(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getClassifier() : uml.Classifier {
            return <uml.Classifier><any>this.eGet(uml.UmlPackage.eINSTANCE.getRedefinableTemplateSignature_Classifier(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public redefines_parents(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.REDEFINABLE_TEMPLATE_SIGNATURE__REDEFINES_PARENTS, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["redefines_parents", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
                }
                return false;
            }
            return true;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getInheritedParameters() : org.eclipse.emf.common.util.EList<uml.TemplateParameter> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
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
         * @param {number} derivedFeatureID
         * @param {*} baseClass
         * @return {number}
         */
        public eBaseStructuralFeatureID(derivedFeatureID : number, baseClass : any) : number {
            if(baseClass === "uml.TemplateSignature") {
                switch((derivedFeatureID)) {
                case uml.UmlPackage.REDEFINABLE_TEMPLATE_SIGNATURE__PARAMETER:
                    return uml.UmlPackage.TEMPLATE_SIGNATURE__PARAMETER;
                case uml.UmlPackage.REDEFINABLE_TEMPLATE_SIGNATURE__TEMPLATE:
                    return uml.UmlPackage.TEMPLATE_SIGNATURE__TEMPLATE;
                case uml.UmlPackage.REDEFINABLE_TEMPLATE_SIGNATURE__OWNED_PARAMETER:
                    return uml.UmlPackage.TEMPLATE_SIGNATURE__OWNED_PARAMETER;
                default:
                    return -1;
                }
            }
            return super.eBaseStructuralFeatureID(derivedFeatureID, baseClass);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {number} baseFeatureID
         * @param {*} baseClass
         * @return {number}
         */
        public eDerivedStructuralFeatureID(baseFeatureID : number, baseClass : any) : number {
            if(baseClass === "uml.TemplateSignature") {
                switch((baseFeatureID)) {
                case uml.UmlPackage.TEMPLATE_SIGNATURE__PARAMETER:
                    return uml.UmlPackage.REDEFINABLE_TEMPLATE_SIGNATURE__PARAMETER;
                case uml.UmlPackage.TEMPLATE_SIGNATURE__TEMPLATE:
                    return uml.UmlPackage.REDEFINABLE_TEMPLATE_SIGNATURE__TEMPLATE;
                case uml.UmlPackage.TEMPLATE_SIGNATURE__OWNED_PARAMETER:
                    return uml.UmlPackage.REDEFINABLE_TEMPLATE_SIGNATURE__OWNED_PARAMETER;
                default:
                    return -1;
                }
            }
            return super.eDerivedStructuralFeatureID(baseFeatureID, baseClass);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {number} baseOperationID
         * @param {*} baseClass
         * @return {number}
         */
        public eDerivedOperationID(baseOperationID : number, baseClass : any) : number {
            if(baseClass === "uml.TemplateSignature") {
                switch((baseOperationID)) {
                case uml.UmlPackage.TEMPLATE_SIGNATURE___OWN_ELEMENTS__DIAGNOSTICCHAIN_MAP:
                    return uml.UmlPackage.REDEFINABLE_TEMPLATE_SIGNATURE___OWN_ELEMENTS__DIAGNOSTICCHAIN_MAP;
                case uml.UmlPackage.TEMPLATE_SIGNATURE___UNIQUE_PARAMETERS__DIAGNOSTICCHAIN_MAP:
                    return uml.UmlPackage.REDEFINABLE_TEMPLATE_SIGNATURE___UNIQUE_PARAMETERS__DIAGNOSTICCHAIN_MAP;
                default:
                    return -1;
                }
            }
            return super.eDerivedOperationID(baseOperationID, baseClass);
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
            case uml.UmlPackage.REDEFINABLE_TEMPLATE_SIGNATURE___REDEFINES_PARENTS__DIAGNOSTICCHAIN_MAP:
                return this.redefines_parents(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.REDEFINABLE_TEMPLATE_SIGNATURE___GET_INHERITED_PARAMETERS:
                return this.getInheritedParameters();
            case uml.UmlPackage.REDEFINABLE_TEMPLATE_SIGNATURE___OWN_ELEMENTS__DIAGNOSTICCHAIN_MAP:
                return this.own_elements(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.REDEFINABLE_TEMPLATE_SIGNATURE___UNIQUE_PARAMETERS__DIAGNOSTICCHAIN_MAP:
                return this.unique_parameters(<any>__arguments.get(0), <any>__arguments.get(1));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    RedefinableTemplateSignatureImpl["__class"] = "uml.impl.RedefinableTemplateSignatureImpl";
    RedefinableTemplateSignatureImpl["__interfaces"] = ["uml.RedefinableElement","ecore4m.EModelElement","uml.TemplateSignature","uml.RedefinableTemplateSignature","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

