/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Template Binding</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.TemplateBindingImpl#getParameterSubstitution}</li>
     * <li>{@link uml.impl.TemplateBindingImpl#getSignature}</li>
     * <li>{@link uml.impl.TemplateBindingImpl#getBoundElement}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.DirectedRelationshipImpl
     * @class
     */
    export class TemplateBindingImpl extends uml.impl.DirectedRelationshipImpl implements uml.TemplateBinding {
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
            return uml.UmlPackage.eINSTANCE.getTemplateBinding();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getParameterSubstitution() : org.eclipse.emf.common.util.EList<uml.TemplateParameterSubstitution> {
            return <org.eclipse.emf.common.util.EList<uml.TemplateParameterSubstitution>><any>this.eGet(uml.UmlPackage.eINSTANCE.getTemplateBinding_ParameterSubstitution(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getSignature() : uml.TemplateSignature {
            return <uml.TemplateSignature><any>this.eGet(uml.UmlPackage.eINSTANCE.getTemplateBinding_Signature(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newSignature
         */
        public setSignature(newSignature : uml.TemplateSignature) {
            this.eSet(uml.UmlPackage.eINSTANCE.getTemplateBinding_Signature(), newSignature);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getBoundElement() : uml.TemplateableElement {
            return <uml.TemplateableElement><any>this.eGet(uml.UmlPackage.eINSTANCE.getTemplateBinding_BoundElement(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newBoundElement
         */
        public setBoundElement(newBoundElement : uml.TemplateableElement) {
            this.eSet(uml.UmlPackage.eINSTANCE.getTemplateBinding_BoundElement(), newBoundElement);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public parameter_substitution_formal(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.TEMPLATE_BINDING__PARAMETER_SUBSTITUTION_FORMAL, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["parameter_substitution_formal", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public one_parameter_substitution(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.TEMPLATE_BINDING__ONE_PARAMETER_SUBSTITUTION, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["one_parameter_substitution", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
            case uml.UmlPackage.TEMPLATE_BINDING___PARAMETER_SUBSTITUTION_FORMAL__DIAGNOSTICCHAIN_MAP:
                return this.parameter_substitution_formal(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.TEMPLATE_BINDING___ONE_PARAMETER_SUBSTITUTION__DIAGNOSTICCHAIN_MAP:
                return this.one_parameter_substitution(<any>__arguments.get(0), <any>__arguments.get(1));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    TemplateBindingImpl["__class"] = "uml.impl.TemplateBindingImpl";
    TemplateBindingImpl["__interfaces"] = ["uml.Relationship","ecore4m.EModelElement","uml.DirectedRelationship","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","uml.TemplateBinding","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

