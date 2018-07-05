/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Region</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.RegionImpl#isIsLeaf}</li>
     * <li>{@link uml.impl.RegionImpl#getRedefinedElement}</li>
     * <li>{@link uml.impl.RegionImpl#getRedefinitionContext}</li>
     * <li>{@link uml.impl.RegionImpl#getExtendedRegion}</li>
     * <li>{@link uml.impl.RegionImpl#getState}</li>
     * <li>{@link uml.impl.RegionImpl#getStateMachine}</li>
     * <li>{@link uml.impl.RegionImpl#getTransition}</li>
     * <li>{@link uml.impl.RegionImpl#getSubvertex}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.NamespaceImpl
     * @class
     */
    export class RegionImpl extends uml.impl.NamespaceImpl implements uml.Region {
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
            return uml.UmlPackage.eINSTANCE.getRegion();
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
        public getExtendedRegion() : uml.Region {
            return <uml.Region><any>this.eGet(uml.UmlPackage.eINSTANCE.getRegion_ExtendedRegion(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newExtendedRegion
         */
        public setExtendedRegion(newExtendedRegion : uml.Region) {
            this.eSet(uml.UmlPackage.eINSTANCE.getRegion_ExtendedRegion(), newExtendedRegion);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getState() : uml.State {
            return <uml.State><any>this.eGet(uml.UmlPackage.eINSTANCE.getRegion_State(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newState
         */
        public setState(newState : uml.State) {
            this.eSet(uml.UmlPackage.eINSTANCE.getRegion_State(), newState);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getStateMachine() : uml.StateMachine {
            return <uml.StateMachine><any>this.eGet(uml.UmlPackage.eINSTANCE.getRegion_StateMachine(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newStateMachine
         */
        public setStateMachine(newStateMachine : uml.StateMachine) {
            this.eSet(uml.UmlPackage.eINSTANCE.getRegion_StateMachine(), newStateMachine);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getTransition() : org.eclipse.emf.common.util.EList<uml.Transition> {
            return <org.eclipse.emf.common.util.EList<uml.Transition>><any>this.eGet(uml.UmlPackage.eINSTANCE.getRegion_Transition(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getSubvertex() : org.eclipse.emf.common.util.EList<uml.Vertex> {
            return <org.eclipse.emf.common.util.EList<uml.Vertex>><any>this.eGet(uml.UmlPackage.eINSTANCE.getRegion_Subvertex(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public deep_history_vertex(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.REGION__DEEP_HISTORY_VERTEX, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["deep_history_vertex", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public shallow_history_vertex(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.REGION__SHALLOW_HISTORY_VERTEX, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["shallow_history_vertex", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public owned(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.REGION__OWNED, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["owned", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public initial_vertex(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.REGION__INITIAL_VERTEX, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["initial_vertex", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public belongsToPSM() : boolean {
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
                case uml.UmlPackage.REGION__IS_LEAF:
                    return uml.UmlPackage.REDEFINABLE_ELEMENT__IS_LEAF;
                case uml.UmlPackage.REGION__REDEFINED_ELEMENT:
                    return uml.UmlPackage.REDEFINABLE_ELEMENT__REDEFINED_ELEMENT;
                case uml.UmlPackage.REGION__REDEFINITION_CONTEXT:
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
                    return uml.UmlPackage.REGION__IS_LEAF;
                case uml.UmlPackage.REDEFINABLE_ELEMENT__REDEFINED_ELEMENT:
                    return uml.UmlPackage.REGION__REDEFINED_ELEMENT;
                case uml.UmlPackage.REDEFINABLE_ELEMENT__REDEFINITION_CONTEXT:
                    return uml.UmlPackage.REGION__REDEFINITION_CONTEXT;
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
                    return uml.UmlPackage.REGION___REDEFINITION_CONSISTENT__DIAGNOSTICCHAIN_MAP;
                case uml.UmlPackage.REDEFINABLE_ELEMENT___NON_LEAF_REDEFINITION__DIAGNOSTICCHAIN_MAP:
                    return uml.UmlPackage.REGION___NON_LEAF_REDEFINITION__DIAGNOSTICCHAIN_MAP;
                case uml.UmlPackage.REDEFINABLE_ELEMENT___REDEFINITION_CONTEXT_VALID__DIAGNOSTICCHAIN_MAP:
                    return uml.UmlPackage.REGION___REDEFINITION_CONTEXT_VALID__DIAGNOSTICCHAIN_MAP;
                case uml.UmlPackage.REDEFINABLE_ELEMENT___IS_CONSISTENT_WITH__REDEFINABLEELEMENT:
                    return uml.UmlPackage.REGION___IS_CONSISTENT_WITH__REDEFINABLEELEMENT;
                case uml.UmlPackage.REDEFINABLE_ELEMENT___IS_REDEFINITION_CONTEXT_VALID__REDEFINABLEELEMENT:
                    return uml.UmlPackage.REGION___IS_REDEFINITION_CONTEXT_VALID__REDEFINABLEELEMENT;
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
            case uml.UmlPackage.REGION___DEEP_HISTORY_VERTEX__DIAGNOSTICCHAIN_MAP:
                return this.deep_history_vertex(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.REGION___SHALLOW_HISTORY_VERTEX__DIAGNOSTICCHAIN_MAP:
                return this.shallow_history_vertex(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.REGION___OWNED__DIAGNOSTICCHAIN_MAP:
                return this.owned(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.REGION___INITIAL_VERTEX__DIAGNOSTICCHAIN_MAP:
                return this.initial_vertex(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.REGION___BELONGS_TO_PSM:
                return this.belongsToPSM();
            case uml.UmlPackage.REGION___CONTAINING_STATE_MACHINE:
                return this.containingStateMachine();
            case uml.UmlPackage.REGION___REDEFINITION_CONTEXT:
                return this.redefinitionContext();
            case uml.UmlPackage.REGION___REDEFINITION_CONSISTENT__DIAGNOSTICCHAIN_MAP:
                return this.redefinition_consistent(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.REGION___NON_LEAF_REDEFINITION__DIAGNOSTICCHAIN_MAP:
                return this.non_leaf_redefinition(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.REGION___REDEFINITION_CONTEXT_VALID__DIAGNOSTICCHAIN_MAP:
                return this.redefinition_context_valid(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.REGION___IS_CONSISTENT_WITH__REDEFINABLEELEMENT:
                return this.isConsistentWith(<any>__arguments.get(0));
            case uml.UmlPackage.REGION___IS_REDEFINITION_CONTEXT_VALID__REDEFINABLEELEMENT:
                return this.isRedefinitionContextValid(<any>__arguments.get(0));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    RegionImpl["__class"] = "uml.impl.RegionImpl";
    RegionImpl["__interfaces"] = ["uml.Region","uml.RedefinableElement","ecore4m.EModelElement","org.eclipse.emf.ecore.EModelElement","uml.Namespace","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

