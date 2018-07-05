/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Message</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.MessageImpl#getArgument}</li>
     * <li>{@link uml.impl.MessageImpl#getConnector}</li>
     * <li>{@link uml.impl.MessageImpl#getInteraction}</li>
     * <li>{@link uml.impl.MessageImpl#getMessageKind}</li>
     * <li>{@link uml.impl.MessageImpl#getMessageSort}</li>
     * <li>{@link uml.impl.MessageImpl#getReceiveEvent}</li>
     * <li>{@link uml.impl.MessageImpl#getSendEvent}</li>
     * <li>{@link uml.impl.MessageImpl#getSignature}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.NamedElementImpl
     * @class
     */
    export class MessageImpl extends uml.impl.NamedElementImpl implements uml.Message {
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
            return uml.UmlPackage.eINSTANCE.getMessage();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getArgument() : org.eclipse.emf.common.util.EList<uml.ValueSpecification> {
            return <org.eclipse.emf.common.util.EList<uml.ValueSpecification>><any>this.eGet(uml.UmlPackage.eINSTANCE.getMessage_Argument(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getConnector() : uml.Connector {
            return <uml.Connector><any>this.eGet(uml.UmlPackage.eINSTANCE.getMessage_Connector(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newConnector
         */
        public setConnector(newConnector : uml.Connector) {
            this.eSet(uml.UmlPackage.eINSTANCE.getMessage_Connector(), newConnector);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getInteraction() : uml.Interaction {
            return <uml.Interaction><any>this.eGet(uml.UmlPackage.eINSTANCE.getMessage_Interaction(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newInteraction
         */
        public setInteraction(newInteraction : uml.Interaction) {
            this.eSet(uml.UmlPackage.eINSTANCE.getMessage_Interaction(), newInteraction);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {uml.MessageKind}
         */
        public getMessageKind() : uml.MessageKind {
            return <uml.MessageKind>this.eGet(uml.UmlPackage.eINSTANCE.getMessage_MessageKind(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {uml.MessageSort}
         */
        public getMessageSort() : uml.MessageSort {
            return <uml.MessageSort>this.eGet(uml.UmlPackage.eINSTANCE.getMessage_MessageSort(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {uml.MessageSort} newMessageSort
         */
        public setMessageSort(newMessageSort : uml.MessageSort) {
            this.eSet(uml.UmlPackage.eINSTANCE.getMessage_MessageSort(), newMessageSort);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getReceiveEvent() : uml.MessageEnd {
            return <uml.MessageEnd><any>this.eGet(uml.UmlPackage.eINSTANCE.getMessage_ReceiveEvent(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newReceiveEvent
         */
        public setReceiveEvent(newReceiveEvent : uml.MessageEnd) {
            this.eSet(uml.UmlPackage.eINSTANCE.getMessage_ReceiveEvent(), newReceiveEvent);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getSendEvent() : uml.MessageEnd {
            return <uml.MessageEnd><any>this.eGet(uml.UmlPackage.eINSTANCE.getMessage_SendEvent(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newSendEvent
         */
        public setSendEvent(newSendEvent : uml.MessageEnd) {
            this.eSet(uml.UmlPackage.eINSTANCE.getMessage_SendEvent(), newSendEvent);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getSignature() : uml.NamedElement {
            return <uml.NamedElement><any>this.eGet(uml.UmlPackage.eINSTANCE.getMessage_Signature(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newSignature
         */
        public setSignature(newSignature : uml.NamedElement) {
            this.eSet(uml.UmlPackage.eINSTANCE.getMessage_Signature(), newSignature);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public sending_receiving_message_event(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.MESSAGE__SENDING_RECEIVING_MESSAGE_EVENT, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["sending_receiving_message_event", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public arguments(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.MESSAGE__ARGUMENTS, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["arguments", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public cannot_cross_boundaries(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.MESSAGE__CANNOT_CROSS_BOUNDARIES, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["cannot_cross_boundaries", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public signature_is_signal(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.MESSAGE__SIGNATURE_IS_SIGNAL, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["signature_is_signal", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public occurrence_specifications(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.MESSAGE__OCCURRENCE_SPECIFICATIONS, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["occurrence_specifications", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public signature_refer_to(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.MESSAGE__SIGNATURE_REFER_TO, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["signature_refer_to", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public signature_is_operation_request(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.MESSAGE__SIGNATURE_IS_OPERATION_REQUEST, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["signature_is_operation_request", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public signature_is_operation_reply(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.MESSAGE__SIGNATURE_IS_OPERATION_REPLY, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["signature_is_operation_reply", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
            case uml.UmlPackage.MESSAGE___SENDING_RECEIVING_MESSAGE_EVENT__DIAGNOSTICCHAIN_MAP:
                return this.sending_receiving_message_event(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.MESSAGE___ARGUMENTS__DIAGNOSTICCHAIN_MAP:
                return this.arguments(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.MESSAGE___CANNOT_CROSS_BOUNDARIES__DIAGNOSTICCHAIN_MAP:
                return this.cannot_cross_boundaries(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.MESSAGE___SIGNATURE_IS_SIGNAL__DIAGNOSTICCHAIN_MAP:
                return this.signature_is_signal(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.MESSAGE___OCCURRENCE_SPECIFICATIONS__DIAGNOSTICCHAIN_MAP:
                return this.occurrence_specifications(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.MESSAGE___SIGNATURE_REFER_TO__DIAGNOSTICCHAIN_MAP:
                return this.signature_refer_to(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.MESSAGE___SIGNATURE_IS_OPERATION_REQUEST__DIAGNOSTICCHAIN_MAP:
                return this.signature_is_operation_request(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.MESSAGE___SIGNATURE_IS_OPERATION_REPLY__DIAGNOSTICCHAIN_MAP:
                return this.signature_is_operation_reply(<any>__arguments.get(0), <any>__arguments.get(1));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    MessageImpl["__class"] = "uml.impl.MessageImpl";
    MessageImpl["__interfaces"] = ["ecore4m.EModelElement","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","uml.Message","org.eclipse.emf.ecore.InternalEObject"];


}

