/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Interaction Use</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.InteractionUseImpl#getActualGate}</li>
     * <li>{@link uml.impl.InteractionUseImpl#getArgument}</li>
     * <li>{@link uml.impl.InteractionUseImpl#getRefersTo}</li>
     * <li>{@link uml.impl.InteractionUseImpl#getReturnValue}</li>
     * <li>{@link uml.impl.InteractionUseImpl#getReturnValueRecipient}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.InteractionFragmentImpl
     * @class
     */
    export class InteractionUseImpl extends uml.impl.InteractionFragmentImpl implements uml.InteractionUse {
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
            return uml.UmlPackage.eINSTANCE.getInteractionUse();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getActualGate() : org.eclipse.emf.common.util.EList<uml.Gate> {
            return <org.eclipse.emf.common.util.EList<uml.Gate>><any>this.eGet(uml.UmlPackage.eINSTANCE.getInteractionUse_ActualGate(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getArgument() : org.eclipse.emf.common.util.EList<uml.ValueSpecification> {
            return <org.eclipse.emf.common.util.EList<uml.ValueSpecification>><any>this.eGet(uml.UmlPackage.eINSTANCE.getInteractionUse_Argument(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getRefersTo() : uml.Interaction {
            return <uml.Interaction><any>this.eGet(uml.UmlPackage.eINSTANCE.getInteractionUse_RefersTo(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newRefersTo
         */
        public setRefersTo(newRefersTo : uml.Interaction) {
            this.eSet(uml.UmlPackage.eINSTANCE.getInteractionUse_RefersTo(), newRefersTo);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getReturnValue() : uml.ValueSpecification {
            return <uml.ValueSpecification><any>this.eGet(uml.UmlPackage.eINSTANCE.getInteractionUse_ReturnValue(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newReturnValue
         */
        public setReturnValue(newReturnValue : uml.ValueSpecification) {
            this.eSet(uml.UmlPackage.eINSTANCE.getInteractionUse_ReturnValue(), newReturnValue);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getReturnValueRecipient() : uml.Property {
            return <uml.Property><any>this.eGet(uml.UmlPackage.eINSTANCE.getInteractionUse_ReturnValueRecipient(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newReturnValueRecipient
         */
        public setReturnValueRecipient(newReturnValueRecipient : uml.Property) {
            this.eSet(uml.UmlPackage.eINSTANCE.getInteractionUse_ReturnValueRecipient(), newReturnValueRecipient);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public gates_match(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.INTERACTION_USE__GATES_MATCH, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["gates_match", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public arguments_are_constants(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.INTERACTION_USE__ARGUMENTS_ARE_CONSTANTS, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["arguments_are_constants", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public returnValueRecipient_coverage(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.INTERACTION_USE__RETURN_VALUE_RECIPIENT_COVERAGE, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["returnValueRecipient_coverage", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public arguments_correspond_to_parameters(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.INTERACTION_USE__ARGUMENTS_CORRESPOND_TO_PARAMETERS, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["arguments_correspond_to_parameters", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public returnValue_type_recipient_correspondence(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.INTERACTION_USE__RETURN_VALUE_TYPE_RECIPIENT_CORRESPONDENCE, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["returnValue_type_recipient_correspondence", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public all_lifelines(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.INTERACTION_USE__ALL_LIFELINES, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["all_lifelines", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
            case uml.UmlPackage.INTERACTION_USE___GATES_MATCH__DIAGNOSTICCHAIN_MAP:
                return this.gates_match(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.INTERACTION_USE___ARGUMENTS_ARE_CONSTANTS__DIAGNOSTICCHAIN_MAP:
                return this.arguments_are_constants(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.INTERACTION_USE___RETURN_VALUE_RECIPIENT_COVERAGE__DIAGNOSTICCHAIN_MAP:
                return this.returnValueRecipient_coverage(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.INTERACTION_USE___ARGUMENTS_CORRESPOND_TO_PARAMETERS__DIAGNOSTICCHAIN_MAP:
                return this.arguments_correspond_to_parameters(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.INTERACTION_USE___RETURN_VALUE_TYPE_RECIPIENT_CORRESPONDENCE__DIAGNOSTICCHAIN_MAP:
                return this.returnValue_type_recipient_correspondence(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.INTERACTION_USE___ALL_LIFELINES__DIAGNOSTICCHAIN_MAP:
                return this.all_lifelines(<any>__arguments.get(0), <any>__arguments.get(1));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    InteractionUseImpl["__class"] = "uml.impl.InteractionUseImpl";
    InteractionUseImpl["__interfaces"] = ["ecore4m.EModelElement","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","uml.NamedElement","uml.InteractionFragment","org.eclipse.emf.common.notify.Notifier","uml.InteractionUse","org.eclipse.emf.ecore.InternalEObject"];


}

