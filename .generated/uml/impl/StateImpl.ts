/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>State</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.StateImpl#isIsLeaf}</li>
     * <li>{@link uml.impl.StateImpl#getRedefinedElement}</li>
     * <li>{@link uml.impl.StateImpl#getRedefinitionContext}</li>
     * <li>{@link uml.impl.StateImpl#getContainer}</li>
     * <li>{@link uml.impl.StateImpl#getIncoming}</li>
     * <li>{@link uml.impl.StateImpl#getOutgoing}</li>
     * <li>{@link uml.impl.StateImpl#getConnection}</li>
     * <li>{@link uml.impl.StateImpl#getConnectionPoint}</li>
     * <li>{@link uml.impl.StateImpl#getDeferrableTrigger}</li>
     * <li>{@link uml.impl.StateImpl#getDoActivity}</li>
     * <li>{@link uml.impl.StateImpl#getEntry}</li>
     * <li>{@link uml.impl.StateImpl#getExit}</li>
     * <li>{@link uml.impl.StateImpl#isIsComposite}</li>
     * <li>{@link uml.impl.StateImpl#isIsOrthogonal}</li>
     * <li>{@link uml.impl.StateImpl#isIsSimple}</li>
     * <li>{@link uml.impl.StateImpl#isIsSubmachineState}</li>
     * <li>{@link uml.impl.StateImpl#getRedefinedState}</li>
     * <li>{@link uml.impl.StateImpl#getStateInvariant}</li>
     * <li>{@link uml.impl.StateImpl#getSubmachine}</li>
     * <li>{@link uml.impl.StateImpl#getRegion}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.NamespaceImpl
     * @class
     */
    export class StateImpl extends uml.impl.NamespaceImpl implements uml.State {
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
            return uml.UmlPackage.eINSTANCE.getState();
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
        public getContainer() : uml.Region {
            return <uml.Region><any>this.eGet(uml.UmlPackage.eINSTANCE.getVertex_Container(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newContainer
         */
        public setContainer(newContainer : uml.Region) {
            this.eSet(uml.UmlPackage.eINSTANCE.getVertex_Container(), newContainer);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getIncoming() : org.eclipse.emf.common.util.EList<uml.Transition> {
            return <org.eclipse.emf.common.util.EList<uml.Transition>><any>this.eGet(uml.UmlPackage.eINSTANCE.getVertex_Incoming(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getOutgoing() : org.eclipse.emf.common.util.EList<uml.Transition> {
            return <org.eclipse.emf.common.util.EList<uml.Transition>><any>this.eGet(uml.UmlPackage.eINSTANCE.getVertex_Outgoing(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getConnection() : org.eclipse.emf.common.util.EList<uml.ConnectionPointReference> {
            return <org.eclipse.emf.common.util.EList<uml.ConnectionPointReference>><any>this.eGet(uml.UmlPackage.eINSTANCE.getState_Connection(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getConnectionPoint() : org.eclipse.emf.common.util.EList<uml.Pseudostate> {
            return <org.eclipse.emf.common.util.EList<uml.Pseudostate>><any>this.eGet(uml.UmlPackage.eINSTANCE.getState_ConnectionPoint(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getDeferrableTrigger() : org.eclipse.emf.common.util.EList<uml.Trigger> {
            return <org.eclipse.emf.common.util.EList<uml.Trigger>><any>this.eGet(uml.UmlPackage.eINSTANCE.getState_DeferrableTrigger(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getDoActivity() : uml.Behavior {
            return <uml.Behavior><any>this.eGet(uml.UmlPackage.eINSTANCE.getState_DoActivity(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newDoActivity
         */
        public setDoActivity(newDoActivity : uml.Behavior) {
            this.eSet(uml.UmlPackage.eINSTANCE.getState_DoActivity(), newDoActivity);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getEntry() : uml.Behavior {
            return <uml.Behavior><any>this.eGet(uml.UmlPackage.eINSTANCE.getState_Entry(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newEntry
         */
        public setEntry(newEntry : uml.Behavior) {
            this.eSet(uml.UmlPackage.eINSTANCE.getState_Entry(), newEntry);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getExit() : uml.Behavior {
            return <uml.Behavior><any>this.eGet(uml.UmlPackage.eINSTANCE.getState_Exit(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newExit
         */
        public setExit(newExit : uml.Behavior) {
            this.eSet(uml.UmlPackage.eINSTANCE.getState_Exit(), newExit);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isIsComposite() : boolean {
            return <boolean>this.eGet(uml.UmlPackage.eINSTANCE.getState_IsComposite(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isIsOrthogonal() : boolean {
            return <boolean>this.eGet(uml.UmlPackage.eINSTANCE.getState_IsOrthogonal(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isIsSimple() : boolean {
            return <boolean>this.eGet(uml.UmlPackage.eINSTANCE.getState_IsSimple(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isIsSubmachineState() : boolean {
            return <boolean>this.eGet(uml.UmlPackage.eINSTANCE.getState_IsSubmachineState(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getRedefinedState() : uml.State {
            return <uml.State><any>this.eGet(uml.UmlPackage.eINSTANCE.getState_RedefinedState(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newRedefinedState
         */
        public setRedefinedState(newRedefinedState : uml.State) {
            this.eSet(uml.UmlPackage.eINSTANCE.getState_RedefinedState(), newRedefinedState);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getStateInvariant() : uml.Constraint {
            return <uml.Constraint><any>this.eGet(uml.UmlPackage.eINSTANCE.getState_StateInvariant(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newStateInvariant
         */
        public setStateInvariant(newStateInvariant : uml.Constraint) {
            this.eSet(uml.UmlPackage.eINSTANCE.getState_StateInvariant(), newStateInvariant);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getSubmachine() : uml.StateMachine {
            return <uml.StateMachine><any>this.eGet(uml.UmlPackage.eINSTANCE.getState_Submachine(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newSubmachine
         */
        public setSubmachine(newSubmachine : uml.StateMachine) {
            this.eSet(uml.UmlPackage.eINSTANCE.getState_Submachine(), newSubmachine);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getRegion() : org.eclipse.emf.common.util.EList<uml.Region> {
            return <org.eclipse.emf.common.util.EList<uml.Region>><any>this.eGet(uml.UmlPackage.eINSTANCE.getState_Region(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public entry_or_exit(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.STATE__ENTRY_OR_EXIT, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["entry_or_exit", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public submachine_states(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.STATE__SUBMACHINE_STATES, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["submachine_states", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public composite_states(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.STATE__COMPOSITE_STATES, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["composite_states", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public destinations_or_sources_of_transitions(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.STATE__DESTINATIONS_OR_SOURCES_OF_TRANSITIONS, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["destinations_or_sources_of_transitions", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public submachine_or_regions(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.STATE__SUBMACHINE_OR_REGIONS, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["submachine_or_regions", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public isComposite() : boolean {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isOrthogonal() : boolean {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isSimple() : boolean {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isSubmachineState() : boolean {
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
        public getIncomings() : org.eclipse.emf.common.util.EList<uml.Transition> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getOutgoings() : org.eclipse.emf.common.util.EList<uml.Transition> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} s
         * @return {boolean}
         */
        public isContainedInState(s : uml.State) : boolean {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} r
         * @return {boolean}
         */
        public isContainedInRegion(r : uml.Region) : boolean {
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
                case uml.UmlPackage.STATE__IS_LEAF:
                    return uml.UmlPackage.REDEFINABLE_ELEMENT__IS_LEAF;
                case uml.UmlPackage.STATE__REDEFINED_ELEMENT:
                    return uml.UmlPackage.REDEFINABLE_ELEMENT__REDEFINED_ELEMENT;
                case uml.UmlPackage.STATE__REDEFINITION_CONTEXT:
                    return uml.UmlPackage.REDEFINABLE_ELEMENT__REDEFINITION_CONTEXT;
                default:
                    return -1;
                }
            }
            if(baseClass === "uml.Vertex") {
                switch((derivedFeatureID)) {
                case uml.UmlPackage.STATE__CONTAINER:
                    return uml.UmlPackage.VERTEX__CONTAINER;
                case uml.UmlPackage.STATE__INCOMING:
                    return uml.UmlPackage.VERTEX__INCOMING;
                case uml.UmlPackage.STATE__OUTGOING:
                    return uml.UmlPackage.VERTEX__OUTGOING;
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
                    return uml.UmlPackage.STATE__IS_LEAF;
                case uml.UmlPackage.REDEFINABLE_ELEMENT__REDEFINED_ELEMENT:
                    return uml.UmlPackage.STATE__REDEFINED_ELEMENT;
                case uml.UmlPackage.REDEFINABLE_ELEMENT__REDEFINITION_CONTEXT:
                    return uml.UmlPackage.STATE__REDEFINITION_CONTEXT;
                default:
                    return -1;
                }
            }
            if(baseClass === "uml.Vertex") {
                switch((baseFeatureID)) {
                case uml.UmlPackage.VERTEX__CONTAINER:
                    return uml.UmlPackage.STATE__CONTAINER;
                case uml.UmlPackage.VERTEX__INCOMING:
                    return uml.UmlPackage.STATE__INCOMING;
                case uml.UmlPackage.VERTEX__OUTGOING:
                    return uml.UmlPackage.STATE__OUTGOING;
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
                    return uml.UmlPackage.STATE___REDEFINITION_CONSISTENT__DIAGNOSTICCHAIN_MAP;
                case uml.UmlPackage.REDEFINABLE_ELEMENT___NON_LEAF_REDEFINITION__DIAGNOSTICCHAIN_MAP:
                    return uml.UmlPackage.STATE___NON_LEAF_REDEFINITION__DIAGNOSTICCHAIN_MAP;
                case uml.UmlPackage.REDEFINABLE_ELEMENT___REDEFINITION_CONTEXT_VALID__DIAGNOSTICCHAIN_MAP:
                    return uml.UmlPackage.STATE___REDEFINITION_CONTEXT_VALID__DIAGNOSTICCHAIN_MAP;
                case uml.UmlPackage.REDEFINABLE_ELEMENT___IS_CONSISTENT_WITH__REDEFINABLEELEMENT:
                    return uml.UmlPackage.STATE___IS_CONSISTENT_WITH__REDEFINABLEELEMENT;
                case uml.UmlPackage.REDEFINABLE_ELEMENT___IS_REDEFINITION_CONTEXT_VALID__REDEFINABLEELEMENT:
                    return uml.UmlPackage.STATE___IS_REDEFINITION_CONTEXT_VALID__REDEFINABLEELEMENT;
                default:
                    return -1;
                }
            }
            if(baseClass === "uml.Vertex") {
                switch((baseOperationID)) {
                case uml.UmlPackage.VERTEX___CONTAINING_STATE_MACHINE:
                    return uml.UmlPackage.STATE___CONTAINING_STATE_MACHINE;
                case uml.UmlPackage.VERTEX___GET_INCOMINGS:
                    return uml.UmlPackage.STATE___GET_INCOMINGS;
                case uml.UmlPackage.VERTEX___GET_OUTGOINGS:
                    return uml.UmlPackage.STATE___GET_OUTGOINGS;
                case uml.UmlPackage.VERTEX___IS_CONTAINED_IN_STATE__STATE:
                    return uml.UmlPackage.STATE___IS_CONTAINED_IN_STATE__STATE;
                case uml.UmlPackage.VERTEX___IS_CONTAINED_IN_REGION__REGION:
                    return uml.UmlPackage.STATE___IS_CONTAINED_IN_REGION__REGION;
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
            case uml.UmlPackage.STATE___ENTRY_OR_EXIT__DIAGNOSTICCHAIN_MAP:
                return this.entry_or_exit(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.STATE___SUBMACHINE_STATES__DIAGNOSTICCHAIN_MAP:
                return this.submachine_states(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.STATE___COMPOSITE_STATES__DIAGNOSTICCHAIN_MAP:
                return this.composite_states(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.STATE___DESTINATIONS_OR_SOURCES_OF_TRANSITIONS__DIAGNOSTICCHAIN_MAP:
                return this.destinations_or_sources_of_transitions(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.STATE___SUBMACHINE_OR_REGIONS__DIAGNOSTICCHAIN_MAP:
                return this.submachine_or_regions(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.STATE___IS_COMPOSITE:
                return this.isComposite();
            case uml.UmlPackage.STATE___IS_ORTHOGONAL:
                return this.isOrthogonal();
            case uml.UmlPackage.STATE___IS_SIMPLE:
                return this.isSimple();
            case uml.UmlPackage.STATE___IS_SUBMACHINE_STATE:
                return this.isSubmachineState();
            case uml.UmlPackage.STATE___REDEFINITION_CONTEXT:
                return this.redefinitionContext();
            case uml.UmlPackage.STATE___CONTAINING_STATE_MACHINE:
                return this.containingStateMachine();
            case uml.UmlPackage.STATE___GET_INCOMINGS:
                return this.getIncomings();
            case uml.UmlPackage.STATE___GET_OUTGOINGS:
                return this.getOutgoings();
            case uml.UmlPackage.STATE___IS_CONTAINED_IN_STATE__STATE:
                return this.isContainedInState(<any>__arguments.get(0));
            case uml.UmlPackage.STATE___IS_CONTAINED_IN_REGION__REGION:
                return this.isContainedInRegion(<any>__arguments.get(0));
            case uml.UmlPackage.STATE___REDEFINITION_CONSISTENT__DIAGNOSTICCHAIN_MAP:
                return this.redefinition_consistent(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.STATE___NON_LEAF_REDEFINITION__DIAGNOSTICCHAIN_MAP:
                return this.non_leaf_redefinition(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.STATE___REDEFINITION_CONTEXT_VALID__DIAGNOSTICCHAIN_MAP:
                return this.redefinition_context_valid(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.STATE___IS_CONSISTENT_WITH__REDEFINABLEELEMENT:
                return this.isConsistentWith(<any>__arguments.get(0));
            case uml.UmlPackage.STATE___IS_REDEFINITION_CONTEXT_VALID__REDEFINABLEELEMENT:
                return this.isRedefinitionContextValid(<any>__arguments.get(0));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    StateImpl["__class"] = "uml.impl.StateImpl";
    StateImpl["__interfaces"] = ["uml.RedefinableElement","ecore4m.EModelElement","org.eclipse.emf.ecore.EModelElement","uml.State","uml.Namespace","uml.Element","uml.Vertex","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

