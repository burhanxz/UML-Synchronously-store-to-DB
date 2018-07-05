/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Loop Node</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.LoopNodeImpl#getBodyOutput}</li>
     * <li>{@link uml.impl.LoopNodeImpl#getBodyPart}</li>
     * <li>{@link uml.impl.LoopNodeImpl#getDecider}</li>
     * <li>{@link uml.impl.LoopNodeImpl#isIsTestedFirst}</li>
     * <li>{@link uml.impl.LoopNodeImpl#getLoopVariable}</li>
     * <li>{@link uml.impl.LoopNodeImpl#getLoopVariableInput}</li>
     * <li>{@link uml.impl.LoopNodeImpl#getResult}</li>
     * <li>{@link uml.impl.LoopNodeImpl#getSetupPart}</li>
     * <li>{@link uml.impl.LoopNodeImpl#getTest}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.StructuredActivityNodeImpl
     * @class
     */
    export class LoopNodeImpl extends uml.impl.StructuredActivityNodeImpl implements uml.LoopNode {
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
            return uml.UmlPackage.eINSTANCE.getLoopNode();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getBodyOutput() : org.eclipse.emf.common.util.EList<uml.OutputPin> {
            return <org.eclipse.emf.common.util.EList<uml.OutputPin>><any>this.eGet(uml.UmlPackage.eINSTANCE.getLoopNode_BodyOutput(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getBodyPart() : org.eclipse.emf.common.util.EList<uml.ExecutableNode> {
            return <org.eclipse.emf.common.util.EList<uml.ExecutableNode>><any>this.eGet(uml.UmlPackage.eINSTANCE.getLoopNode_BodyPart(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getDecider() : uml.OutputPin {
            return <uml.OutputPin><any>this.eGet(uml.UmlPackage.eINSTANCE.getLoopNode_Decider(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newDecider
         */
        public setDecider(newDecider : uml.OutputPin) {
            this.eSet(uml.UmlPackage.eINSTANCE.getLoopNode_Decider(), newDecider);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isIsTestedFirst() : boolean {
            return <boolean>this.eGet(uml.UmlPackage.eINSTANCE.getLoopNode_IsTestedFirst(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {boolean} newIsTestedFirst
         */
        public setIsTestedFirst(newIsTestedFirst : boolean) {
            this.eSet(uml.UmlPackage.eINSTANCE.getLoopNode_IsTestedFirst(), newIsTestedFirst);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getLoopVariable() : org.eclipse.emf.common.util.EList<uml.OutputPin> {
            return <org.eclipse.emf.common.util.EList<uml.OutputPin>><any>this.eGet(uml.UmlPackage.eINSTANCE.getLoopNode_LoopVariable(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getLoopVariableInput() : org.eclipse.emf.common.util.EList<uml.InputPin> {
            return <org.eclipse.emf.common.util.EList<uml.InputPin>><any>this.eGet(uml.UmlPackage.eINSTANCE.getLoopNode_LoopVariableInput(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getResult() : org.eclipse.emf.common.util.EList<uml.OutputPin> {
            return <org.eclipse.emf.common.util.EList<uml.OutputPin>><any>this.eGet(uml.UmlPackage.eINSTANCE.getLoopNode_Result(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getSetupPart() : org.eclipse.emf.common.util.EList<uml.ExecutableNode> {
            return <org.eclipse.emf.common.util.EList<uml.ExecutableNode>><any>this.eGet(uml.UmlPackage.eINSTANCE.getLoopNode_SetupPart(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getTest() : org.eclipse.emf.common.util.EList<uml.ExecutableNode> {
            return <org.eclipse.emf.common.util.EList<uml.ExecutableNode>><any>this.eGet(uml.UmlPackage.eINSTANCE.getLoopNode_Test(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public result_no_incoming(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.LOOP_NODE__RESULT_NO_INCOMING, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["result_no_incoming", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public input_edges(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.LOOP_NODE__INPUT_EDGES, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["input_edges", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public executable_nodes(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.LOOP_NODE__EXECUTABLE_NODES, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["executable_nodes", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public body_output_pins(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.LOOP_NODE__BODY_OUTPUT_PINS, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["body_output_pins", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public setup_test_and_body(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.LOOP_NODE__SETUP_TEST_AND_BODY, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["setup_test_and_body", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public matching_output_pins(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.LOOP_NODE__MATCHING_OUTPUT_PINS, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["matching_output_pins", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public matching_loop_variables(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.LOOP_NODE__MATCHING_LOOP_VARIABLES, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["matching_loop_variables", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public matching_result_pins(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.LOOP_NODE__MATCHING_RESULT_PINS, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["matching_result_pins", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public loop_variable_outgoing(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.LOOP_NODE__LOOP_VARIABLE_OUTGOING, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["loop_variable_outgoing", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
            case uml.UmlPackage.LOOP_NODE___RESULT_NO_INCOMING__DIAGNOSTICCHAIN_MAP:
                return this.result_no_incoming(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.LOOP_NODE___INPUT_EDGES__DIAGNOSTICCHAIN_MAP:
                return this.input_edges(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.LOOP_NODE___EXECUTABLE_NODES__DIAGNOSTICCHAIN_MAP:
                return this.executable_nodes(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.LOOP_NODE___BODY_OUTPUT_PINS__DIAGNOSTICCHAIN_MAP:
                return this.body_output_pins(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.LOOP_NODE___SETUP_TEST_AND_BODY__DIAGNOSTICCHAIN_MAP:
                return this.setup_test_and_body(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.LOOP_NODE___MATCHING_OUTPUT_PINS__DIAGNOSTICCHAIN_MAP:
                return this.matching_output_pins(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.LOOP_NODE___MATCHING_LOOP_VARIABLES__DIAGNOSTICCHAIN_MAP:
                return this.matching_loop_variables(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.LOOP_NODE___MATCHING_RESULT_PINS__DIAGNOSTICCHAIN_MAP:
                return this.matching_result_pins(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.LOOP_NODE___LOOP_VARIABLE_OUTGOING__DIAGNOSTICCHAIN_MAP:
                return this.loop_variable_outgoing(<any>__arguments.get(0), <any>__arguments.get(1));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    LoopNodeImpl["__class"] = "uml.impl.LoopNodeImpl";
    LoopNodeImpl["__interfaces"] = ["ecore4m.EModelElement","uml.ActivityGroup","uml.Namespace","org.eclipse.emf.ecore.EObject","uml.NamedElement","uml.ActivityContent","org.eclipse.emf.common.notify.Notifier","uml.ExecutableNode","uml.RedefinableElement","uml.Action","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","uml.ActivityNode","uml.StructuredActivityNode","uml.LoopNode","org.eclipse.emf.ecore.InternalEObject"];


}

