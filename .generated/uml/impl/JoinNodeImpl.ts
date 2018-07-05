/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Join Node</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.JoinNodeImpl#isIsCombineDuplicate}</li>
     * <li>{@link uml.impl.JoinNodeImpl#getJoinSpec}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.ControlNodeImpl
     * @class
     */
    export class JoinNodeImpl extends uml.impl.ControlNodeImpl implements uml.JoinNode {
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
            return uml.UmlPackage.eINSTANCE.getJoinNode();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isIsCombineDuplicate() : boolean {
            return <boolean>this.eGet(uml.UmlPackage.eINSTANCE.getJoinNode_IsCombineDuplicate(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {boolean} newIsCombineDuplicate
         */
        public setIsCombineDuplicate(newIsCombineDuplicate : boolean) {
            this.eSet(uml.UmlPackage.eINSTANCE.getJoinNode_IsCombineDuplicate(), newIsCombineDuplicate);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getJoinSpec() : uml.ValueSpecification {
            return <uml.ValueSpecification><any>this.eGet(uml.UmlPackage.eINSTANCE.getJoinNode_JoinSpec(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newJoinSpec
         */
        public setJoinSpec(newJoinSpec : uml.ValueSpecification) {
            this.eSet(uml.UmlPackage.eINSTANCE.getJoinNode_JoinSpec(), newJoinSpec);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public one_outgoing_edge(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.JOIN_NODE__ONE_OUTGOING_EDGE, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["one_outgoing_edge", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public incoming_object_flow(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.JOIN_NODE__INCOMING_OBJECT_FLOW, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["incoming_object_flow", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
            case uml.UmlPackage.JOIN_NODE___ONE_OUTGOING_EDGE__DIAGNOSTICCHAIN_MAP:
                return this.one_outgoing_edge(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.JOIN_NODE___INCOMING_OBJECT_FLOW__DIAGNOSTICCHAIN_MAP:
                return this.incoming_object_flow(<any>__arguments.get(0), <any>__arguments.get(1));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    JoinNodeImpl["__class"] = "uml.impl.JoinNodeImpl";
    JoinNodeImpl["__interfaces"] = ["ecore4m.EModelElement","uml.JoinNode","org.eclipse.emf.ecore.EObject","uml.NamedElement","uml.ActivityContent","org.eclipse.emf.common.notify.Notifier","uml.RedefinableElement","uml.ControlNode","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","uml.ActivityNode","org.eclipse.emf.ecore.InternalEObject"];


}

