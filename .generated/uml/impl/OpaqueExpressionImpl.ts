/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Opaque Expression</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.OpaqueExpressionImpl#getBehavior}</li>
     * <li>{@link uml.impl.OpaqueExpressionImpl#getBody}</li>
     * <li>{@link uml.impl.OpaqueExpressionImpl#getLanguage}</li>
     * <li>{@link uml.impl.OpaqueExpressionImpl#getResult}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.ValueSpecificationImpl
     * @class
     */
    export class OpaqueExpressionImpl extends uml.impl.ValueSpecificationImpl implements uml.OpaqueExpression {
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
            return uml.UmlPackage.eINSTANCE.getOpaqueExpression();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getBehavior() : uml.Behavior {
            return <uml.Behavior><any>this.eGet(uml.UmlPackage.eINSTANCE.getOpaqueExpression_Behavior(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newBehavior
         */
        public setBehavior(newBehavior : uml.Behavior) {
            this.eSet(uml.UmlPackage.eINSTANCE.getOpaqueExpression_Behavior(), newBehavior);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getBody() : org.eclipse.emf.common.util.EList<string> {
            return <org.eclipse.emf.common.util.EList<string>><any>this.eGet(uml.UmlPackage.eINSTANCE.getOpaqueExpression_Body(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        public unsetBody() {
            this.eUnset(uml.UmlPackage.eINSTANCE.getOpaqueExpression_Body());
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isSetBody() : boolean {
            return this.eIsSet(uml.UmlPackage.eINSTANCE.getOpaqueExpression_Body());
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getLanguage() : org.eclipse.emf.common.util.EList<string> {
            return <org.eclipse.emf.common.util.EList<string>><any>this.eGet(uml.UmlPackage.eINSTANCE.getOpaqueExpression_Language(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        public unsetLanguage() {
            this.eUnset(uml.UmlPackage.eINSTANCE.getOpaqueExpression_Language());
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isSetLanguage() : boolean {
            return this.eIsSet(uml.UmlPackage.eINSTANCE.getOpaqueExpression_Language());
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getResult() : uml.Parameter {
            return <uml.Parameter><any>this.eGet(uml.UmlPackage.eINSTANCE.getOpaqueExpression_Result(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public language_body_size(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.OPAQUE_EXPRESSION__LANGUAGE_BODY_SIZE, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["language_body_size", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public one_return_result_parameter(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.OPAQUE_EXPRESSION__ONE_RETURN_RESULT_PARAMETER, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["one_return_result_parameter", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public only_return_result_parameters(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.OPAQUE_EXPRESSION__ONLY_RETURN_RESULT_PARAMETERS, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["only_return_result_parameters", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public isIntegral() : boolean {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isNonNegative() : boolean {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isPositive() : boolean {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {number}
         */
        public value() : number {
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
            case uml.UmlPackage.OPAQUE_EXPRESSION___LANGUAGE_BODY_SIZE__DIAGNOSTICCHAIN_MAP:
                return this.language_body_size(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.OPAQUE_EXPRESSION___ONE_RETURN_RESULT_PARAMETER__DIAGNOSTICCHAIN_MAP:
                return this.one_return_result_parameter(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.OPAQUE_EXPRESSION___ONLY_RETURN_RESULT_PARAMETERS__DIAGNOSTICCHAIN_MAP:
                return this.only_return_result_parameters(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.OPAQUE_EXPRESSION___IS_INTEGRAL:
                return this.isIntegral();
            case uml.UmlPackage.OPAQUE_EXPRESSION___IS_NON_NEGATIVE:
                return this.isNonNegative();
            case uml.UmlPackage.OPAQUE_EXPRESSION___IS_POSITIVE:
                return this.isPositive();
            case uml.UmlPackage.OPAQUE_EXPRESSION___VALUE:
                return this.value();
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    OpaqueExpressionImpl["__class"] = "uml.impl.OpaqueExpressionImpl";
    OpaqueExpressionImpl["__interfaces"] = ["ecore4m.EModelElement","uml.TypedElement","org.eclipse.emf.ecore.EObject","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","uml.ValueSpecification","uml.ParameterableElement","uml.PackageableElement","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","uml.OpaqueExpression","org.eclipse.emf.ecore.InternalEObject"];


}

