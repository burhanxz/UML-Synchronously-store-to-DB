/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Decision Node</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.DecisionNodeImpl#getDecisionInput}</li>
     * <li>{@link uml.impl.DecisionNodeImpl#getDecisionInputFlow}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.ControlNodeImpl
     * @class
     */
    export class DecisionNodeImpl extends uml.impl.ControlNodeImpl implements uml.DecisionNode {
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
            return uml.UmlPackage.eINSTANCE.getDecisionNode();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getDecisionInput() : uml.Behavior {
            return <uml.Behavior><any>this.eGet(uml.UmlPackage.eINSTANCE.getDecisionNode_DecisionInput(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newDecisionInput
         */
        public setDecisionInput(newDecisionInput : uml.Behavior) {
            this.eSet(uml.UmlPackage.eINSTANCE.getDecisionNode_DecisionInput(), newDecisionInput);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getDecisionInputFlow() : uml.ObjectFlow {
            return <uml.ObjectFlow><any>this.eGet(uml.UmlPackage.eINSTANCE.getDecisionNode_DecisionInputFlow(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newDecisionInputFlow
         */
        public setDecisionInputFlow(newDecisionInputFlow : uml.ObjectFlow) {
            this.eSet(uml.UmlPackage.eINSTANCE.getDecisionNode_DecisionInputFlow(), newDecisionInputFlow);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public zero_input_parameters(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.DECISION_NODE__ZERO_INPUT_PARAMETERS, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["zero_input_parameters", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public edges(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.DECISION_NODE__EDGES, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["edges", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public decision_input_flow_incoming(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.DECISION_NODE__DECISION_INPUT_FLOW_INCOMING, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["decision_input_flow_incoming", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public two_input_parameters(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.DECISION_NODE__TWO_INPUT_PARAMETERS, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["two_input_parameters", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public incoming_outgoing_edges(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.DECISION_NODE__INCOMING_OUTGOING_EDGES, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["incoming_outgoing_edges", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public incoming_control_one_input_parameter(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.DECISION_NODE__INCOMING_CONTROL_ONE_INPUT_PARAMETER, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["incoming_control_one_input_parameter", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public parameters(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.DECISION_NODE__PARAMETERS, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["parameters", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public incoming_object_one_input_parameter(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.DECISION_NODE__INCOMING_OBJECT_ONE_INPUT_PARAMETER, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["incoming_object_one_input_parameter", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
            case uml.UmlPackage.DECISION_NODE___ZERO_INPUT_PARAMETERS__DIAGNOSTICCHAIN_MAP:
                return this.zero_input_parameters(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.DECISION_NODE___EDGES__DIAGNOSTICCHAIN_MAP:
                return this.edges(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.DECISION_NODE___DECISION_INPUT_FLOW_INCOMING__DIAGNOSTICCHAIN_MAP:
                return this.decision_input_flow_incoming(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.DECISION_NODE___TWO_INPUT_PARAMETERS__DIAGNOSTICCHAIN_MAP:
                return this.two_input_parameters(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.DECISION_NODE___INCOMING_OUTGOING_EDGES__DIAGNOSTICCHAIN_MAP:
                return this.incoming_outgoing_edges(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.DECISION_NODE___INCOMING_CONTROL_ONE_INPUT_PARAMETER__DIAGNOSTICCHAIN_MAP:
                return this.incoming_control_one_input_parameter(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.DECISION_NODE___PARAMETERS__DIAGNOSTICCHAIN_MAP:
                return this.parameters(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.DECISION_NODE___INCOMING_OBJECT_ONE_INPUT_PARAMETER__DIAGNOSTICCHAIN_MAP:
                return this.incoming_object_one_input_parameter(<any>__arguments.get(0), <any>__arguments.get(1));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    DecisionNodeImpl["__class"] = "uml.impl.DecisionNodeImpl";
    DecisionNodeImpl["__interfaces"] = ["ecore4m.EModelElement","org.eclipse.emf.ecore.EObject","uml.NamedElement","uml.ActivityContent","org.eclipse.emf.common.notify.Notifier","uml.DecisionNode","uml.RedefinableElement","uml.ControlNode","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","uml.ActivityNode","org.eclipse.emf.ecore.InternalEObject"];


}

