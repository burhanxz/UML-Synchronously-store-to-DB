/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Remove Variable Value Action</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.RemoveVariableValueActionImpl#isIsRemoveDuplicates}</li>
     * <li>{@link uml.impl.RemoveVariableValueActionImpl#getRemoveAt}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.WriteVariableActionImpl
     * @class
     */
    export class RemoveVariableValueActionImpl extends uml.impl.WriteVariableActionImpl implements uml.RemoveVariableValueAction {
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
            return uml.UmlPackage.eINSTANCE.getRemoveVariableValueAction();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isIsRemoveDuplicates() : boolean {
            return <boolean>this.eGet(uml.UmlPackage.eINSTANCE.getRemoveVariableValueAction_IsRemoveDuplicates(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {boolean} newIsRemoveDuplicates
         */
        public setIsRemoveDuplicates(newIsRemoveDuplicates : boolean) {
            this.eSet(uml.UmlPackage.eINSTANCE.getRemoveVariableValueAction_IsRemoveDuplicates(), newIsRemoveDuplicates);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getRemoveAt() : uml.InputPin {
            return <uml.InputPin><any>this.eGet(uml.UmlPackage.eINSTANCE.getRemoveVariableValueAction_RemoveAt(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newRemoveAt
         */
        public setRemoveAt(newRemoveAt : uml.InputPin) {
            this.eSet(uml.UmlPackage.eINSTANCE.getRemoveVariableValueAction_RemoveAt(), newRemoveAt);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public removeAt_and_value(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.REMOVE_VARIABLE_VALUE_ACTION__REMOVE_AT_AND_VALUE, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["removeAt_and_value", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
            case uml.UmlPackage.REMOVE_VARIABLE_VALUE_ACTION___REMOVE_AT_AND_VALUE__DIAGNOSTICCHAIN_MAP:
                return this.removeAt_and_value(<any>__arguments.get(0), <any>__arguments.get(1));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    RemoveVariableValueActionImpl["__class"] = "uml.impl.RemoveVariableValueActionImpl";
    RemoveVariableValueActionImpl["__interfaces"] = ["uml.RemoveVariableValueAction","ecore4m.EModelElement","org.eclipse.emf.ecore.EObject","uml.NamedElement","uml.ActivityContent","org.eclipse.emf.common.notify.Notifier","uml.ExecutableNode","uml.RedefinableElement","uml.Action","org.eclipse.emf.ecore.EModelElement","uml.VariableAction","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","uml.ActivityNode","uml.WriteVariableAction","org.eclipse.emf.ecore.InternalEObject"];


}

