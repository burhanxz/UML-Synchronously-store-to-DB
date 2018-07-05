/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Protocol Transition</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.ProtocolTransitionImpl#getPostCondition}</li>
     * <li>{@link uml.impl.ProtocolTransitionImpl#getPreCondition}</li>
     * <li>{@link uml.impl.ProtocolTransitionImpl#getReferred}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.TransitionImpl
     * @class
     */
    export class ProtocolTransitionImpl extends uml.impl.TransitionImpl implements uml.ProtocolTransition {
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
            return uml.UmlPackage.eINSTANCE.getProtocolTransition();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getPostCondition() : uml.Constraint {
            return <uml.Constraint><any>this.eGet(uml.UmlPackage.eINSTANCE.getProtocolTransition_PostCondition(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newPostCondition
         */
        public setPostCondition(newPostCondition : uml.Constraint) {
            this.eSet(uml.UmlPackage.eINSTANCE.getProtocolTransition_PostCondition(), newPostCondition);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getPreCondition() : uml.Constraint {
            return <uml.Constraint><any>this.eGet(uml.UmlPackage.eINSTANCE.getProtocolTransition_PreCondition(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newPreCondition
         */
        public setPreCondition(newPreCondition : uml.Constraint) {
            this.eSet(uml.UmlPackage.eINSTANCE.getProtocolTransition_PreCondition(), newPreCondition);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getReferred() : org.eclipse.emf.common.util.EList<uml.Operation> {
            return <org.eclipse.emf.common.util.EList<uml.Operation>><any>this.eGet(uml.UmlPackage.eINSTANCE.getProtocolTransition_Referred(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public refers_to_operation(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.PROTOCOL_TRANSITION__REFERS_TO_OPERATION, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["refers_to_operation", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public associated_actions(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.PROTOCOL_TRANSITION__ASSOCIATED_ACTIONS, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["associated_actions", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public belongs_to_psm(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.PROTOCOL_TRANSITION__BELONGS_TO_PSM, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["belongs_to_psm", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public getReferreds() : org.eclipse.emf.common.util.EList<uml.Operation> {
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
            case uml.UmlPackage.PROTOCOL_TRANSITION___REFERS_TO_OPERATION__DIAGNOSTICCHAIN_MAP:
                return this.refers_to_operation(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.PROTOCOL_TRANSITION___ASSOCIATED_ACTIONS__DIAGNOSTICCHAIN_MAP:
                return this.associated_actions(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.PROTOCOL_TRANSITION___BELONGS_TO_PSM__DIAGNOSTICCHAIN_MAP:
                return this.belongs_to_psm(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.PROTOCOL_TRANSITION___GET_REFERREDS:
                return this.getReferreds();
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    ProtocolTransitionImpl["__class"] = "uml.impl.ProtocolTransitionImpl";
    ProtocolTransitionImpl["__interfaces"] = ["uml.Transition","uml.RedefinableElement","ecore4m.EModelElement","org.eclipse.emf.ecore.EModelElement","uml.ProtocolTransition","uml.Namespace","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

