/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Remove Structural Feature Value Action</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.RemoveStructuralFeatureValueActionImpl#isIsRemoveDuplicates}</li>
     * <li>{@link uml.impl.RemoveStructuralFeatureValueActionImpl#getRemoveAt}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.WriteStructuralFeatureActionImpl
     * @class
     */
    export class RemoveStructuralFeatureValueActionImpl extends uml.impl.WriteStructuralFeatureActionImpl implements uml.RemoveStructuralFeatureValueAction {
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
            return uml.UmlPackage.eINSTANCE.getRemoveStructuralFeatureValueAction();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isIsRemoveDuplicates() : boolean {
            return <boolean>this.eGet(uml.UmlPackage.eINSTANCE.getRemoveStructuralFeatureValueAction_IsRemoveDuplicates(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {boolean} newIsRemoveDuplicates
         */
        public setIsRemoveDuplicates(newIsRemoveDuplicates : boolean) {
            this.eSet(uml.UmlPackage.eINSTANCE.getRemoveStructuralFeatureValueAction_IsRemoveDuplicates(), newIsRemoveDuplicates);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getRemoveAt() : uml.InputPin {
            return <uml.InputPin><any>this.eGet(uml.UmlPackage.eINSTANCE.getRemoveStructuralFeatureValueAction_RemoveAt(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newRemoveAt
         */
        public setRemoveAt(newRemoveAt : uml.InputPin) {
            this.eSet(uml.UmlPackage.eINSTANCE.getRemoveStructuralFeatureValueAction_RemoveAt(), newRemoveAt);
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
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.REMOVE_STRUCTURAL_FEATURE_VALUE_ACTION__REMOVE_AT_AND_VALUE, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["removeAt_and_value", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
            case uml.UmlPackage.REMOVE_STRUCTURAL_FEATURE_VALUE_ACTION___REMOVE_AT_AND_VALUE__DIAGNOSTICCHAIN_MAP:
                return this.removeAt_and_value(<any>__arguments.get(0), <any>__arguments.get(1));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    RemoveStructuralFeatureValueActionImpl["__class"] = "uml.impl.RemoveStructuralFeatureValueActionImpl";
    RemoveStructuralFeatureValueActionImpl["__interfaces"] = ["ecore4m.EModelElement","org.eclipse.emf.ecore.EObject","uml.NamedElement","uml.ActivityContent","uml.StructuralFeatureAction","org.eclipse.emf.common.notify.Notifier","uml.ExecutableNode","uml.RedefinableElement","uml.WriteStructuralFeatureAction","uml.Action","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","uml.ActivityNode","org.eclipse.emf.ecore.InternalEObject","uml.RemoveStructuralFeatureValueAction"];


}

