/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Add Variable Value Action</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.AddVariableValueActionImpl#getInsertAt}</li>
     * <li>{@link uml.impl.AddVariableValueActionImpl#isIsReplaceAll}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.WriteVariableActionImpl
     * @class
     */
    export class AddVariableValueActionImpl extends uml.impl.WriteVariableActionImpl implements uml.AddVariableValueAction {
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
            return uml.UmlPackage.eINSTANCE.getAddVariableValueAction();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getInsertAt() : uml.InputPin {
            return <uml.InputPin><any>this.eGet(uml.UmlPackage.eINSTANCE.getAddVariableValueAction_InsertAt(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newInsertAt
         */
        public setInsertAt(newInsertAt : uml.InputPin) {
            this.eSet(uml.UmlPackage.eINSTANCE.getAddVariableValueAction_InsertAt(), newInsertAt);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isIsReplaceAll() : boolean {
            return <boolean>this.eGet(uml.UmlPackage.eINSTANCE.getAddVariableValueAction_IsReplaceAll(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {boolean} newIsReplaceAll
         */
        public setIsReplaceAll(newIsReplaceAll : boolean) {
            this.eSet(uml.UmlPackage.eINSTANCE.getAddVariableValueAction_IsReplaceAll(), newIsReplaceAll);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public required_value(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.ADD_VARIABLE_VALUE_ACTION__REQUIRED_VALUE, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["required_value", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public insertAt_pin(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.ADD_VARIABLE_VALUE_ACTION__INSERT_AT_PIN, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["insertAt_pin", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
            case uml.UmlPackage.ADD_VARIABLE_VALUE_ACTION___REQUIRED_VALUE__DIAGNOSTICCHAIN_MAP:
                return this.required_value(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.ADD_VARIABLE_VALUE_ACTION___INSERT_AT_PIN__DIAGNOSTICCHAIN_MAP:
                return this.insertAt_pin(<any>__arguments.get(0), <any>__arguments.get(1));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    AddVariableValueActionImpl["__class"] = "uml.impl.AddVariableValueActionImpl";
    AddVariableValueActionImpl["__interfaces"] = ["ecore4m.EModelElement","org.eclipse.emf.ecore.EObject","uml.NamedElement","uml.ActivityContent","org.eclipse.emf.common.notify.Notifier","uml.ExecutableNode","uml.RedefinableElement","uml.Action","org.eclipse.emf.ecore.EModelElement","uml.VariableAction","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","uml.ActivityNode","uml.AddVariableValueAction","uml.WriteVariableAction","org.eclipse.emf.ecore.InternalEObject"];


}

