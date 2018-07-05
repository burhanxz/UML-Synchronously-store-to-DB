/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Call Operation Action</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.CallOperationActionImpl#getOperation}</li>
     * <li>{@link uml.impl.CallOperationActionImpl#getTarget}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.CallActionImpl
     * @class
     */
    export class CallOperationActionImpl extends uml.impl.CallActionImpl implements uml.CallOperationAction {
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
            return uml.UmlPackage.eINSTANCE.getCallOperationAction();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getOperation() : uml.Operation {
            return <uml.Operation><any>this.eGet(uml.UmlPackage.eINSTANCE.getCallOperationAction_Operation(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newOperation
         */
        public setOperation(newOperation : uml.Operation) {
            this.eSet(uml.UmlPackage.eINSTANCE.getCallOperationAction_Operation(), newOperation);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getTarget() : uml.InputPin {
            return <uml.InputPin><any>this.eGet(uml.UmlPackage.eINSTANCE.getCallOperationAction_Target(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newTarget
         */
        public setTarget(newTarget : uml.InputPin) {
            this.eSet(uml.UmlPackage.eINSTANCE.getCallOperationAction_Target(), newTarget);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public type_target_pin(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.CALL_OPERATION_ACTION__TYPE_TARGET_PIN, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["type_target_pin", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
            case uml.UmlPackage.CALL_OPERATION_ACTION___TYPE_TARGET_PIN__DIAGNOSTICCHAIN_MAP:
                return this.type_target_pin(<any>__arguments.get(0), <any>__arguments.get(1));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    CallOperationActionImpl["__class"] = "uml.impl.CallOperationActionImpl";
    CallOperationActionImpl["__interfaces"] = ["ecore4m.EModelElement","uml.CallAction","org.eclipse.emf.ecore.EObject","uml.NamedElement","uml.ActivityContent","org.eclipse.emf.common.notify.Notifier","uml.ExecutableNode","uml.RedefinableElement","uml.Action","uml.InvocationAction","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","uml.ActivityNode","uml.CallOperationAction","org.eclipse.emf.ecore.InternalEObject"];


}

