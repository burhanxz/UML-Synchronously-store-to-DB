/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Transition</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.TransitionImpl#isIsLeaf}</li>
     * <li>{@link uml.impl.TransitionImpl#getRedefinedElement}</li>
     * <li>{@link uml.impl.TransitionImpl#getRedefinitionContext}</li>
     * <li>{@link uml.impl.TransitionImpl#getEffect}</li>
     * <li>{@link uml.impl.TransitionImpl#getGuard}</li>
     * <li>{@link uml.impl.TransitionImpl#getKind}</li>
     * <li>{@link uml.impl.TransitionImpl#getRedefinedTransition}</li>
     * <li>{@link uml.impl.TransitionImpl#getSource}</li>
     * <li>{@link uml.impl.TransitionImpl#getTarget}</li>
     * <li>{@link uml.impl.TransitionImpl#getTrigger}</li>
     * <li>{@link uml.impl.TransitionImpl#getContainer}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.NamespaceImpl
     * @class
     */
    export class TransitionImpl extends uml.impl.NamespaceImpl implements uml.Transition {
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
            return uml.UmlPackage.eINSTANCE.getTransition();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isIsLeaf() : boolean {
            return <boolean>this.eGet(uml.UmlPackage.eINSTANCE.getRedefinableElement_IsLeaf(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {boolean} newIsLeaf
         */
        public setIsLeaf(newIsLeaf : boolean) {
            this.eSet(uml.UmlPackage.eINSTANCE.getRedefinableElement_IsLeaf(), newIsLeaf);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getRedefinedElement() : org.eclipse.emf.common.util.EList<uml.RedefinableElement> {
            return <org.eclipse.emf.common.util.EList<uml.RedefinableElement>><any>this.eGet(uml.UmlPackage.eINSTANCE.getRedefinableElement_RedefinedElement(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getRedefinitionContext() : org.eclipse.emf.common.util.EList<uml.Classifier> {
            return <org.eclipse.emf.common.util.EList<uml.Classifier>><any>this.eGet(uml.UmlPackage.eINSTANCE.getRedefinableElement_RedefinitionContext(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getEffect() : uml.Behavior {
            return <uml.Behavior><any>this.eGet(uml.UmlPackage.eINSTANCE.getTransition_Effect(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newEffect
         */
        public setEffect(newEffect : uml.Behavior) {
            this.eSet(uml.UmlPackage.eINSTANCE.getTransition_Effect(), newEffect);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getGuard() : uml.Constraint {
            return <uml.Constraint><any>this.eGet(uml.UmlPackage.eINSTANCE.getTransition_Guard(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newGuard
         */
        public setGuard(newGuard : uml.Constraint) {
            this.eSet(uml.UmlPackage.eINSTANCE.getTransition_Guard(), newGuard);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {uml.TransitionKind}
         */
        public getKind() : uml.TransitionKind {
            return <uml.TransitionKind>this.eGet(uml.UmlPackage.eINSTANCE.getTransition_Kind(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {uml.TransitionKind} newKind
         */
        public setKind(newKind : uml.TransitionKind) {
            this.eSet(uml.UmlPackage.eINSTANCE.getTransition_Kind(), newKind);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getRedefinedTransition() : uml.Transition {
            return <uml.Transition><any>this.eGet(uml.UmlPackage.eINSTANCE.getTransition_RedefinedTransition(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newRedefinedTransition
         */
        public setRedefinedTransition(newRedefinedTransition : uml.Transition) {
            this.eSet(uml.UmlPackage.eINSTANCE.getTransition_RedefinedTransition(), newRedefinedTransition);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getSource() : uml.Vertex {
            return <uml.Vertex><any>this.eGet(uml.UmlPackage.eINSTANCE.getTransition_Source(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newSource
         */
        public setSource(newSource : uml.Vertex) {
            this.eSet(uml.UmlPackage.eINSTANCE.getTransition_Source(), newSource);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getTarget() : uml.Vertex {
            return <uml.Vertex><any>this.eGet(uml.UmlPackage.eINSTANCE.getTransition_Target(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newTarget
         */
        public setTarget(newTarget : uml.Vertex) {
            this.eSet(uml.UmlPackage.eINSTANCE.getTransition_Target(), newTarget);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getTrigger() : org.eclipse.emf.common.util.EList<uml.Trigger> {
            return <org.eclipse.emf.common.util.EList<uml.Trigger>><any>this.eGet(uml.UmlPackage.eINSTANCE.getTransition_Trigger(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getContainer() : uml.Region {
            return <uml.Region><any>this.eGet(uml.UmlPackage.eINSTANCE.getTransition_Container(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newContainer
         */
        public setContainer(newContainer : uml.Region) {
            this.eSet(uml.UmlPackage.eINSTANCE.getTransition_Container(), newContainer);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public state_is_external(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.TRANSITION__STATE_IS_EXTERNAL, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["state_is_external", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public join_segment_guards(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.TRANSITION__JOIN_SEGMENT_GUARDS, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["join_segment_guards", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public state_is_internal(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.TRANSITION__STATE_IS_INTERNAL, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["state_is_internal", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public outgoing_pseudostates(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.TRANSITION__OUTGOING_PSEUDOSTATES, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["outgoing_pseudostates", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public join_segment_state(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.TRANSITION__JOIN_SEGMENT_STATE, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["join_segment_state", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public fork_segment_state(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.TRANSITION__FORK_SEGMENT_STATE, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["fork_segment_state", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public state_is_local(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.TRANSITION__STATE_IS_LOCAL, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["state_is_local", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public initial_transition(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.TRANSITION__INITIAL_TRANSITION, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["initial_transition", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public fork_segment_guards(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.TRANSITION__FORK_SEGMENT_GUARDS, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["fork_segment_guards", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
                }
                return false;
            }
            return true;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public containingStateMachine() : uml.StateMachine {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public redefinitionContext() : uml.Classifier {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public redefinition_consistent(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.REDEFINABLE_ELEMENT__REDEFINITION_CONSISTENT, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["redefinition_consistent", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public non_leaf_redefinition(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.REDEFINABLE_ELEMENT__NON_LEAF_REDEFINITION, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["non_leaf_redefinition", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public redefinition_context_valid(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.REDEFINABLE_ELEMENT__REDEFINITION_CONTEXT_VALID, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["redefinition_context_valid", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
                }
                return false;
            }
            return true;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} redefiningElement
         * @return {boolean}
         */
        public isConsistentWith(redefiningElement : uml.RedefinableElement) : boolean {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} redefinedElement
         * @return {boolean}
         */
        public isRedefinitionContextValid(redefinedElement : uml.RedefinableElement) : boolean {
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
            if(baseClass === "uml.RedefinableElement") {
                switch((derivedFeatureID)) {
                case uml.UmlPackage.TRANSITION__IS_LEAF:
                    return uml.UmlPackage.REDEFINABLE_ELEMENT__IS_LEAF;
                case uml.UmlPackage.TRANSITION__REDEFINED_ELEMENT:
                    return uml.UmlPackage.REDEFINABLE_ELEMENT__REDEFINED_ELEMENT;
                case uml.UmlPackage.TRANSITION__REDEFINITION_CONTEXT:
                    return uml.UmlPackage.REDEFINABLE_ELEMENT__REDEFINITION_CONTEXT;
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
            if(baseClass === "uml.RedefinableElement") {
                switch((baseFeatureID)) {
                case uml.UmlPackage.REDEFINABLE_ELEMENT__IS_LEAF:
                    return uml.UmlPackage.TRANSITION__IS_LEAF;
                case uml.UmlPackage.REDEFINABLE_ELEMENT__REDEFINED_ELEMENT:
                    return uml.UmlPackage.TRANSITION__REDEFINED_ELEMENT;
                case uml.UmlPackage.REDEFINABLE_ELEMENT__REDEFINITION_CONTEXT:
                    return uml.UmlPackage.TRANSITION__REDEFINITION_CONTEXT;
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
            if(baseClass === "uml.RedefinableElement") {
                switch((baseOperationID)) {
                case uml.UmlPackage.REDEFINABLE_ELEMENT___REDEFINITION_CONSISTENT__DIAGNOSTICCHAIN_MAP:
                    return uml.UmlPackage.TRANSITION___REDEFINITION_CONSISTENT__DIAGNOSTICCHAIN_MAP;
                case uml.UmlPackage.REDEFINABLE_ELEMENT___NON_LEAF_REDEFINITION__DIAGNOSTICCHAIN_MAP:
                    return uml.UmlPackage.TRANSITION___NON_LEAF_REDEFINITION__DIAGNOSTICCHAIN_MAP;
                case uml.UmlPackage.REDEFINABLE_ELEMENT___REDEFINITION_CONTEXT_VALID__DIAGNOSTICCHAIN_MAP:
                    return uml.UmlPackage.TRANSITION___REDEFINITION_CONTEXT_VALID__DIAGNOSTICCHAIN_MAP;
                case uml.UmlPackage.REDEFINABLE_ELEMENT___IS_CONSISTENT_WITH__REDEFINABLEELEMENT:
                    return uml.UmlPackage.TRANSITION___IS_CONSISTENT_WITH__REDEFINABLEELEMENT;
                case uml.UmlPackage.REDEFINABLE_ELEMENT___IS_REDEFINITION_CONTEXT_VALID__REDEFINABLEELEMENT:
                    return uml.UmlPackage.TRANSITION___IS_REDEFINITION_CONTEXT_VALID__REDEFINABLEELEMENT;
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
            case uml.UmlPackage.TRANSITION___STATE_IS_EXTERNAL__DIAGNOSTICCHAIN_MAP:
                return this.state_is_external(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.TRANSITION___JOIN_SEGMENT_GUARDS__DIAGNOSTICCHAIN_MAP:
                return this.join_segment_guards(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.TRANSITION___STATE_IS_INTERNAL__DIAGNOSTICCHAIN_MAP:
                return this.state_is_internal(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.TRANSITION___OUTGOING_PSEUDOSTATES__DIAGNOSTICCHAIN_MAP:
                return this.outgoing_pseudostates(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.TRANSITION___JOIN_SEGMENT_STATE__DIAGNOSTICCHAIN_MAP:
                return this.join_segment_state(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.TRANSITION___FORK_SEGMENT_STATE__DIAGNOSTICCHAIN_MAP:
                return this.fork_segment_state(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.TRANSITION___STATE_IS_LOCAL__DIAGNOSTICCHAIN_MAP:
                return this.state_is_local(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.TRANSITION___INITIAL_TRANSITION__DIAGNOSTICCHAIN_MAP:
                return this.initial_transition(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.TRANSITION___FORK_SEGMENT_GUARDS__DIAGNOSTICCHAIN_MAP:
                return this.fork_segment_guards(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.TRANSITION___CONTAINING_STATE_MACHINE:
                return this.containingStateMachine();
            case uml.UmlPackage.TRANSITION___REDEFINITION_CONTEXT:
                return this.redefinitionContext();
            case uml.UmlPackage.TRANSITION___REDEFINITION_CONSISTENT__DIAGNOSTICCHAIN_MAP:
                return this.redefinition_consistent(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.TRANSITION___NON_LEAF_REDEFINITION__DIAGNOSTICCHAIN_MAP:
                return this.non_leaf_redefinition(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.TRANSITION___REDEFINITION_CONTEXT_VALID__DIAGNOSTICCHAIN_MAP:
                return this.redefinition_context_valid(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.TRANSITION___IS_CONSISTENT_WITH__REDEFINABLEELEMENT:
                return this.isConsistentWith(<any>__arguments.get(0));
            case uml.UmlPackage.TRANSITION___IS_REDEFINITION_CONTEXT_VALID__REDEFINABLEELEMENT:
                return this.isRedefinitionContextValid(<any>__arguments.get(0));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    TransitionImpl["__class"] = "uml.impl.TransitionImpl";
    TransitionImpl["__interfaces"] = ["uml.Transition","uml.RedefinableElement","ecore4m.EModelElement","org.eclipse.emf.ecore.EModelElement","uml.Namespace","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

