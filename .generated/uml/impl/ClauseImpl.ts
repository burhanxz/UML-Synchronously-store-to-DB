/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Clause</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.ClauseImpl#getBody}</li>
     * <li>{@link uml.impl.ClauseImpl#getBodyOutput}</li>
     * <li>{@link uml.impl.ClauseImpl#getDecider}</li>
     * <li>{@link uml.impl.ClauseImpl#getPredecessorClause}</li>
     * <li>{@link uml.impl.ClauseImpl#getSuccessorClause}</li>
     * <li>{@link uml.impl.ClauseImpl#getTest}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.ElementImpl
     * @class
     */
    export class ClauseImpl extends uml.impl.ElementImpl implements uml.Clause {
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
            return uml.UmlPackage.eINSTANCE.getClause();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getBody() : org.eclipse.emf.common.util.EList<uml.ExecutableNode> {
            return <org.eclipse.emf.common.util.EList<uml.ExecutableNode>><any>this.eGet(uml.UmlPackage.eINSTANCE.getClause_Body(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getBodyOutput() : org.eclipse.emf.common.util.EList<uml.OutputPin> {
            return <org.eclipse.emf.common.util.EList<uml.OutputPin>><any>this.eGet(uml.UmlPackage.eINSTANCE.getClause_BodyOutput(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getDecider() : uml.OutputPin {
            return <uml.OutputPin><any>this.eGet(uml.UmlPackage.eINSTANCE.getClause_Decider(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newDecider
         */
        public setDecider(newDecider : uml.OutputPin) {
            this.eSet(uml.UmlPackage.eINSTANCE.getClause_Decider(), newDecider);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getPredecessorClause() : org.eclipse.emf.common.util.EList<uml.Clause> {
            return <org.eclipse.emf.common.util.EList<uml.Clause>><any>this.eGet(uml.UmlPackage.eINSTANCE.getClause_PredecessorClause(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getSuccessorClause() : org.eclipse.emf.common.util.EList<uml.Clause> {
            return <org.eclipse.emf.common.util.EList<uml.Clause>><any>this.eGet(uml.UmlPackage.eINSTANCE.getClause_SuccessorClause(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getTest() : org.eclipse.emf.common.util.EList<uml.ExecutableNode> {
            return <org.eclipse.emf.common.util.EList<uml.ExecutableNode>><any>this.eGet(uml.UmlPackage.eINSTANCE.getClause_Test(), true);
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
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.CLAUSE__BODY_OUTPUT_PINS, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["body_output_pins", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public decider_output(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.CLAUSE__DECIDER_OUTPUT, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["decider_output", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public test_and_body(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.CLAUSE__TEST_AND_BODY, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["test_and_body", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
            case uml.UmlPackage.CLAUSE___BODY_OUTPUT_PINS__DIAGNOSTICCHAIN_MAP:
                return this.body_output_pins(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.CLAUSE___DECIDER_OUTPUT__DIAGNOSTICCHAIN_MAP:
                return this.decider_output(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.CLAUSE___TEST_AND_BODY__DIAGNOSTICCHAIN_MAP:
                return this.test_and_body(<any>__arguments.get(0), <any>__arguments.get(1));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    ClauseImpl["__class"] = "uml.impl.ClauseImpl";
    ClauseImpl["__interfaces"] = ["ecore4m.EModelElement","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject","uml.Clause"];


}

