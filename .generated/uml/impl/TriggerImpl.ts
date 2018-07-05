/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Trigger</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.TriggerImpl#getEvent}</li>
     * <li>{@link uml.impl.TriggerImpl#getPort}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.NamedElementImpl
     * @class
     */
    export class TriggerImpl extends uml.impl.NamedElementImpl implements uml.Trigger {
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
            return uml.UmlPackage.eINSTANCE.getTrigger();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getEvent() : uml.Event {
            return <uml.Event><any>this.eGet(uml.UmlPackage.eINSTANCE.getTrigger_Event(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newEvent
         */
        public setEvent(newEvent : uml.Event) {
            this.eSet(uml.UmlPackage.eINSTANCE.getTrigger_Event(), newEvent);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getPort() : org.eclipse.emf.common.util.EList<uml.Port> {
            return <org.eclipse.emf.common.util.EList<uml.Port>><any>this.eGet(uml.UmlPackage.eINSTANCE.getTrigger_Port(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public trigger_with_ports(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.TRIGGER__TRIGGER_WITH_PORTS, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["trigger_with_ports", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
            case uml.UmlPackage.TRIGGER___TRIGGER_WITH_PORTS__DIAGNOSTICCHAIN_MAP:
                return this.trigger_with_ports(<any>__arguments.get(0), <any>__arguments.get(1));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    TriggerImpl["__class"] = "uml.impl.TriggerImpl";
    TriggerImpl["__interfaces"] = ["ecore4m.EModelElement","uml.Trigger","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

