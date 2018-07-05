/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Combined Fragment</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.CombinedFragmentImpl#getCfragmentGate}</li>
     * <li>{@link uml.impl.CombinedFragmentImpl#getInteractionOperator}</li>
     * <li>{@link uml.impl.CombinedFragmentImpl#getOperand}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.InteractionFragmentImpl
     * @class
     */
    export class CombinedFragmentImpl extends uml.impl.InteractionFragmentImpl implements uml.CombinedFragment {
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
            return uml.UmlPackage.eINSTANCE.getCombinedFragment();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getCfragmentGate() : org.eclipse.emf.common.util.EList<uml.Gate> {
            return <org.eclipse.emf.common.util.EList<uml.Gate>><any>this.eGet(uml.UmlPackage.eINSTANCE.getCombinedFragment_CfragmentGate(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {uml.InteractionOperatorKind}
         */
        public getInteractionOperator() : uml.InteractionOperatorKind {
            return <uml.InteractionOperatorKind>this.eGet(uml.UmlPackage.eINSTANCE.getCombinedFragment_InteractionOperator(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {uml.InteractionOperatorKind} newInteractionOperator
         */
        public setInteractionOperator(newInteractionOperator : uml.InteractionOperatorKind) {
            this.eSet(uml.UmlPackage.eINSTANCE.getCombinedFragment_InteractionOperator(), newInteractionOperator);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getOperand() : org.eclipse.emf.common.util.EList<uml.InteractionOperand> {
            return <org.eclipse.emf.common.util.EList<uml.InteractionOperand>><any>this.eGet(uml.UmlPackage.eINSTANCE.getCombinedFragment_Operand(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public break_(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.COMBINED_FRAGMENT__BREAK_, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["break_", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public consider_and_ignore(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.COMBINED_FRAGMENT__CONSIDER_AND_IGNORE, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["consider_and_ignore", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public opt_loop_break_neg(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.COMBINED_FRAGMENT__OPT_LOOP_BREAK_NEG, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["opt_loop_break_neg", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
            case uml.UmlPackage.COMBINED_FRAGMENT___BREAK____DIAGNOSTICCHAIN_MAP:
                return this.break_(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.COMBINED_FRAGMENT___CONSIDER_AND_IGNORE__DIAGNOSTICCHAIN_MAP:
                return this.consider_and_ignore(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.COMBINED_FRAGMENT___OPT_LOOP_BREAK_NEG__DIAGNOSTICCHAIN_MAP:
                return this.opt_loop_break_neg(<any>__arguments.get(0), <any>__arguments.get(1));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    CombinedFragmentImpl["__class"] = "uml.impl.CombinedFragmentImpl";
    CombinedFragmentImpl["__interfaces"] = ["uml.CombinedFragment","ecore4m.EModelElement","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","uml.NamedElement","uml.InteractionFragment","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

