/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Conditional Node</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.ConditionalNodeImpl#getClause}</li>
     * <li>{@link uml.impl.ConditionalNodeImpl#isIsAssured}</li>
     * <li>{@link uml.impl.ConditionalNodeImpl#isIsDeterminate}</li>
     * <li>{@link uml.impl.ConditionalNodeImpl#getResult}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.StructuredActivityNodeImpl
     * @class
     */
    export class ConditionalNodeImpl extends uml.impl.StructuredActivityNodeImpl implements uml.ConditionalNode {
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
            return uml.UmlPackage.eINSTANCE.getConditionalNode();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getClause() : org.eclipse.emf.common.util.EList<uml.Clause> {
            return <org.eclipse.emf.common.util.EList<uml.Clause>><any>this.eGet(uml.UmlPackage.eINSTANCE.getConditionalNode_Clause(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isIsAssured() : boolean {
            return <boolean>this.eGet(uml.UmlPackage.eINSTANCE.getConditionalNode_IsAssured(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {boolean} newIsAssured
         */
        public setIsAssured(newIsAssured : boolean) {
            this.eSet(uml.UmlPackage.eINSTANCE.getConditionalNode_IsAssured(), newIsAssured);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isIsDeterminate() : boolean {
            return <boolean>this.eGet(uml.UmlPackage.eINSTANCE.getConditionalNode_IsDeterminate(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {boolean} newIsDeterminate
         */
        public setIsDeterminate(newIsDeterminate : boolean) {
            this.eSet(uml.UmlPackage.eINSTANCE.getConditionalNode_IsDeterminate(), newIsDeterminate);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getResult() : org.eclipse.emf.common.util.EList<uml.OutputPin> {
            return <org.eclipse.emf.common.util.EList<uml.OutputPin>><any>this.eGet(uml.UmlPackage.eINSTANCE.getConditionalNode_Result(), true);
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
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.CONDITIONAL_NODE__RESULT_NO_INCOMING, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["result_no_incoming", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public no_input_pins(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.CONDITIONAL_NODE__NO_INPUT_PINS, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["no_input_pins", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public one_clause_with_executable_node(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.CONDITIONAL_NODE__ONE_CLAUSE_WITH_EXECUTABLE_NODE, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["one_clause_with_executable_node", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.CONDITIONAL_NODE__MATCHING_OUTPUT_PINS, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["matching_output_pins", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.CONDITIONAL_NODE__EXECUTABLE_NODES, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["executable_nodes", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public clause_no_predecessor(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.CONDITIONAL_NODE__CLAUSE_NO_PREDECESSOR, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["clause_no_predecessor", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
            case uml.UmlPackage.CONDITIONAL_NODE___RESULT_NO_INCOMING__DIAGNOSTICCHAIN_MAP:
                return this.result_no_incoming(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.CONDITIONAL_NODE___NO_INPUT_PINS__DIAGNOSTICCHAIN_MAP:
                return this.no_input_pins(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.CONDITIONAL_NODE___ONE_CLAUSE_WITH_EXECUTABLE_NODE__DIAGNOSTICCHAIN_MAP:
                return this.one_clause_with_executable_node(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.CONDITIONAL_NODE___MATCHING_OUTPUT_PINS__DIAGNOSTICCHAIN_MAP:
                return this.matching_output_pins(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.CONDITIONAL_NODE___EXECUTABLE_NODES__DIAGNOSTICCHAIN_MAP:
                return this.executable_nodes(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.CONDITIONAL_NODE___CLAUSE_NO_PREDECESSOR__DIAGNOSTICCHAIN_MAP:
                return this.clause_no_predecessor(<any>__arguments.get(0), <any>__arguments.get(1));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    ConditionalNodeImpl["__class"] = "uml.impl.ConditionalNodeImpl";
    ConditionalNodeImpl["__interfaces"] = ["ecore4m.EModelElement","uml.ActivityGroup","uml.Namespace","org.eclipse.emf.ecore.EObject","uml.NamedElement","uml.ActivityContent","org.eclipse.emf.common.notify.Notifier","uml.ExecutableNode","uml.RedefinableElement","uml.Action","org.eclipse.emf.ecore.EModelElement","uml.ConditionalNode","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","uml.ActivityNode","uml.StructuredActivityNode","org.eclipse.emf.ecore.InternalEObject"];


}

