/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>State Machine</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.StateMachineImpl#getConnectionPoint}</li>
     * <li>{@link uml.impl.StateMachineImpl#getSubmachineState}</li>
     * <li>{@link uml.impl.StateMachineImpl#getRegion}</li>
     * <li>{@link uml.impl.StateMachineImpl#getExtendedStateMachine}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.BehaviorImpl
     * @class
     */
    export class StateMachineImpl extends uml.impl.BehaviorImpl implements uml.StateMachine {
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
            return uml.UmlPackage.eINSTANCE.getStateMachine();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getConnectionPoint() : org.eclipse.emf.common.util.EList<uml.Pseudostate> {
            return <org.eclipse.emf.common.util.EList<uml.Pseudostate>><any>this.eGet(uml.UmlPackage.eINSTANCE.getStateMachine_ConnectionPoint(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getSubmachineState() : org.eclipse.emf.common.util.EList<uml.State> {
            return <org.eclipse.emf.common.util.EList<uml.State>><any>this.eGet(uml.UmlPackage.eINSTANCE.getStateMachine_SubmachineState(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getRegion() : org.eclipse.emf.common.util.EList<uml.Region> {
            return <org.eclipse.emf.common.util.EList<uml.Region>><any>this.eGet(uml.UmlPackage.eINSTANCE.getStateMachine_Region(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getExtendedStateMachine() : org.eclipse.emf.common.util.EList<uml.StateMachine> {
            return <org.eclipse.emf.common.util.EList<uml.StateMachine>><any>this.eGet(uml.UmlPackage.eINSTANCE.getStateMachine_ExtendedStateMachine(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public connection_points(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.STATE_MACHINE__CONNECTION_POINTS, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["connection_points", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public classifier_context(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.STATE_MACHINE__CLASSIFIER_CONTEXT, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["classifier_context", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public method(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.STATE_MACHINE__METHOD, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["method", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public context_classifier(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.STATE_MACHINE__CONTEXT_CLASSIFIER, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["context_classifier", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
                }
                return false;
            }
            return true;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} s1
         * @param {*} s2
         * @return {*}
         */
        public LCA(s1 : uml.Vertex, s2 : uml.Vertex) : uml.Region {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} s1
         * @param {*} s2
         * @return {boolean}
         */
        public ancestor(s1 : uml.Vertex, s2 : uml.Vertex) : boolean {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} v1
         * @param {*} v2
         * @return {*}
         */
        public LCAState(v1 : uml.Vertex, v2 : uml.Vertex) : uml.State {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
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
            case uml.UmlPackage.STATE_MACHINE___CONNECTION_POINTS__DIAGNOSTICCHAIN_MAP:
                return this.connection_points(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.STATE_MACHINE___CLASSIFIER_CONTEXT__DIAGNOSTICCHAIN_MAP:
                return this.classifier_context(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.STATE_MACHINE___METHOD__DIAGNOSTICCHAIN_MAP:
                return this.method(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.STATE_MACHINE___CONTEXT_CLASSIFIER__DIAGNOSTICCHAIN_MAP:
                return this.context_classifier(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.STATE_MACHINE___LCA__VERTEX_VERTEX:
                return this.LCA(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.STATE_MACHINE___ANCESTOR__VERTEX_VERTEX:
                return this.ancestor(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.STATE_MACHINE___LCA_STATE__VERTEX_VERTEX:
                return this.LCAState(<any>__arguments.get(0), <any>__arguments.get(1));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    StateMachineImpl["__class"] = "uml.impl.StateMachineImpl";
    StateMachineImpl["__interfaces"] = ["uml.Classifier","ecore4m.EModelElement","uml.Namespace","org.eclipse.emf.ecore.EObject","uml.NamedElement","uml.Behavior","org.eclipse.emf.common.notify.Notifier","uml.StructuredClassifier","uml.BehavioredClassifier","uml.RedefinableElement","uml.StateMachine","uml.ParameterableElement","uml.PackageableElement","uml.EncapsulatedClassifier","uml.TemplateableElement","uml.Class","org.eclipse.emf.ecore.EModelElement","uml.Type","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.InternalEObject"];


}

