/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Reply Action</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.ReplyActionImpl#getReplyToCall}</li>
     * <li>{@link uml.impl.ReplyActionImpl#getReplyValue}</li>
     * <li>{@link uml.impl.ReplyActionImpl#getReturnInformation}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.ActionImpl
     * @class
     */
    export class ReplyActionImpl extends uml.impl.ActionImpl implements uml.ReplyAction {
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
            return uml.UmlPackage.eINSTANCE.getReplyAction();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getReplyToCall() : uml.Trigger {
            return <uml.Trigger><any>this.eGet(uml.UmlPackage.eINSTANCE.getReplyAction_ReplyToCall(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newReplyToCall
         */
        public setReplyToCall(newReplyToCall : uml.Trigger) {
            this.eSet(uml.UmlPackage.eINSTANCE.getReplyAction_ReplyToCall(), newReplyToCall);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getReplyValue() : org.eclipse.emf.common.util.EList<uml.InputPin> {
            return <org.eclipse.emf.common.util.EList<uml.InputPin>><any>this.eGet(uml.UmlPackage.eINSTANCE.getReplyAction_ReplyValue(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getReturnInformation() : uml.InputPin {
            return <uml.InputPin><any>this.eGet(uml.UmlPackage.eINSTANCE.getReplyAction_ReturnInformation(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newReturnInformation
         */
        public setReturnInformation(newReturnInformation : uml.InputPin) {
            this.eSet(uml.UmlPackage.eINSTANCE.getReplyAction_ReturnInformation(), newReturnInformation);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public pins_match_parameter(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.REPLY_ACTION__PINS_MATCH_PARAMETER, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["pins_match_parameter", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public event_on_reply_to_call_trigger(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.REPLY_ACTION__EVENT_ON_REPLY_TO_CALL_TRIGGER, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["event_on_reply_to_call_trigger", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
            case uml.UmlPackage.REPLY_ACTION___PINS_MATCH_PARAMETER__DIAGNOSTICCHAIN_MAP:
                return this.pins_match_parameter(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.REPLY_ACTION___EVENT_ON_REPLY_TO_CALL_TRIGGER__DIAGNOSTICCHAIN_MAP:
                return this.event_on_reply_to_call_trigger(<any>__arguments.get(0), <any>__arguments.get(1));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    ReplyActionImpl["__class"] = "uml.impl.ReplyActionImpl";
    ReplyActionImpl["__interfaces"] = ["ecore4m.EModelElement","org.eclipse.emf.ecore.EObject","uml.NamedElement","uml.ActivityContent","org.eclipse.emf.common.notify.Notifier","uml.ExecutableNode","uml.RedefinableElement","uml.Action","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","uml.ActivityNode","org.eclipse.emf.ecore.InternalEObject","uml.ReplyAction"];


}

