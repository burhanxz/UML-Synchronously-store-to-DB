/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>String Expression</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.StringExpressionImpl#getTemplateBinding}</li>
     * <li>{@link uml.impl.StringExpressionImpl#getOwnedTemplateSignature}</li>
     * <li>{@link uml.impl.StringExpressionImpl#getOwningExpression}</li>
     * <li>{@link uml.impl.StringExpressionImpl#getSubExpression}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.ExpressionImpl
     * @class
     */
    export class StringExpressionImpl extends uml.impl.ExpressionImpl implements uml.StringExpression {
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
            return uml.UmlPackage.eINSTANCE.getStringExpression();
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
         * @return {*}
         */
        public getOwningExpression() : uml.StringExpression {
            return <uml.StringExpression><any>this.eGet(uml.UmlPackage.eINSTANCE.getStringExpression_OwningExpression(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newOwningExpression
         */
        public setOwningExpression(newOwningExpression : uml.StringExpression) {
            this.eSet(uml.UmlPackage.eINSTANCE.getStringExpression_OwningExpression(), newOwningExpression);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getSubExpression() : org.eclipse.emf.common.util.EList<uml.StringExpression> {
            return <org.eclipse.emf.common.util.EList<uml.StringExpression>><any>this.eGet(uml.UmlPackage.eINSTANCE.getStringExpression_SubExpression(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public operands(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.STRING_EXPRESSION__OPERANDS, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["operands", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public subexpressions(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.STRING_EXPRESSION__SUBEXPRESSIONS, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["subexpressions", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
                }
                return false;
            }
            return true;
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
         * @param {number} derivedFeatureID
         * @param {*} baseClass
         * @return {number}
         */
        public eBaseStructuralFeatureID(derivedFeatureID : number, baseClass : any) : number {
            if(baseClass === "uml.TemplateableElement") {
                switch((derivedFeatureID)) {
                case uml.UmlPackage.STRING_EXPRESSION__TEMPLATE_BINDING:
                    return uml.UmlPackage.TEMPLATEABLE_ELEMENT__TEMPLATE_BINDING;
                case uml.UmlPackage.STRING_EXPRESSION__OWNED_TEMPLATE_SIGNATURE:
                    return uml.UmlPackage.TEMPLATEABLE_ELEMENT__OWNED_TEMPLATE_SIGNATURE;
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
            if(baseClass === "uml.TemplateableElement") {
                switch((baseFeatureID)) {
                case uml.UmlPackage.TEMPLATEABLE_ELEMENT__TEMPLATE_BINDING:
                    return uml.UmlPackage.STRING_EXPRESSION__TEMPLATE_BINDING;
                case uml.UmlPackage.TEMPLATEABLE_ELEMENT__OWNED_TEMPLATE_SIGNATURE:
                    return uml.UmlPackage.STRING_EXPRESSION__OWNED_TEMPLATE_SIGNATURE;
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
            if(baseClass === "uml.TemplateableElement") {
                switch((baseOperationID)) {
                case uml.UmlPackage.TEMPLATEABLE_ELEMENT___IS_TEMPLATE:
                    return uml.UmlPackage.STRING_EXPRESSION___IS_TEMPLATE;
                case uml.UmlPackage.TEMPLATEABLE_ELEMENT___PARAMETERABLE_ELEMENTS:
                    return uml.UmlPackage.STRING_EXPRESSION___PARAMETERABLE_ELEMENTS;
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
            case uml.UmlPackage.STRING_EXPRESSION___OPERANDS__DIAGNOSTICCHAIN_MAP:
                return this.operands(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.STRING_EXPRESSION___SUBEXPRESSIONS__DIAGNOSTICCHAIN_MAP:
                return this.subexpressions(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.STRING_EXPRESSION___IS_TEMPLATE:
                return this.isTemplate();
            case uml.UmlPackage.STRING_EXPRESSION___PARAMETERABLE_ELEMENTS:
                return this.parameterableElements();
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    StringExpressionImpl["__class"] = "uml.impl.StringExpressionImpl";
    StringExpressionImpl["__interfaces"] = ["ecore4m.EModelElement","uml.TypedElement","org.eclipse.emf.ecore.EObject","uml.Expression","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","uml.StringExpression","uml.ValueSpecification","uml.ParameterableElement","uml.PackageableElement","uml.TemplateableElement","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.InternalEObject"];


}

