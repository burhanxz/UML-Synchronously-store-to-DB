/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Protocol State Machine</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.ProtocolStateMachineImpl#getConformance}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.StateMachineImpl
     * @class
     */
    export class ProtocolStateMachineImpl extends uml.impl.StateMachineImpl implements uml.ProtocolStateMachine {
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
            return uml.UmlPackage.eINSTANCE.getProtocolStateMachine();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getConformance() : org.eclipse.emf.common.util.EList<uml.ProtocolConformance> {
            return <org.eclipse.emf.common.util.EList<uml.ProtocolConformance>><any>this.eGet(uml.UmlPackage.eINSTANCE.getProtocolStateMachine_Conformance(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public deep_or_shallow_history(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.PROTOCOL_STATE_MACHINE__DEEP_OR_SHALLOW_HISTORY, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["deep_or_shallow_history", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public entry_exit_do(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.PROTOCOL_STATE_MACHINE__ENTRY_EXIT_DO, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["entry_exit_do", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public protocol_transitions(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.PROTOCOL_STATE_MACHINE__PROTOCOL_TRANSITIONS, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["protocol_transitions", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
            case uml.UmlPackage.PROTOCOL_STATE_MACHINE___DEEP_OR_SHALLOW_HISTORY__DIAGNOSTICCHAIN_MAP:
                return this.deep_or_shallow_history(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.PROTOCOL_STATE_MACHINE___ENTRY_EXIT_DO__DIAGNOSTICCHAIN_MAP:
                return this.entry_exit_do(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.PROTOCOL_STATE_MACHINE___PROTOCOL_TRANSITIONS__DIAGNOSTICCHAIN_MAP:
                return this.protocol_transitions(<any>__arguments.get(0), <any>__arguments.get(1));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    ProtocolStateMachineImpl["__class"] = "uml.impl.ProtocolStateMachineImpl";
    ProtocolStateMachineImpl["__interfaces"] = ["uml.Classifier","ecore4m.EModelElement","uml.Namespace","uml.ProtocolStateMachine","org.eclipse.emf.ecore.EObject","uml.NamedElement","uml.Behavior","org.eclipse.emf.common.notify.Notifier","uml.StructuredClassifier","uml.BehavioredClassifier","uml.RedefinableElement","uml.StateMachine","uml.ParameterableElement","uml.PackageableElement","uml.EncapsulatedClassifier","uml.TemplateableElement","uml.Class","org.eclipse.emf.ecore.EModelElement","uml.Type","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.InternalEObject"];


}

