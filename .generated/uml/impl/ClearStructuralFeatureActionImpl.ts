/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Clear Structural Feature Action</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.ClearStructuralFeatureActionImpl#getResult}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.StructuralFeatureActionImpl
     * @class
     */
    export class ClearStructuralFeatureActionImpl extends uml.impl.StructuralFeatureActionImpl implements uml.ClearStructuralFeatureAction {
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
            return uml.UmlPackage.eINSTANCE.getClearStructuralFeatureAction();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getResult() : uml.OutputPin {
            return <uml.OutputPin><any>this.eGet(uml.UmlPackage.eINSTANCE.getClearStructuralFeatureAction_Result(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newResult
         */
        public setResult(newResult : uml.OutputPin) {
            this.eSet(uml.UmlPackage.eINSTANCE.getClearStructuralFeatureAction_Result(), newResult);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public type_of_result(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.CLEAR_STRUCTURAL_FEATURE_ACTION__TYPE_OF_RESULT, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["type_of_result", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public multiplicity_of_result(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.CLEAR_STRUCTURAL_FEATURE_ACTION__MULTIPLICITY_OF_RESULT, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["multiplicity_of_result", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
            case uml.UmlPackage.CLEAR_STRUCTURAL_FEATURE_ACTION___TYPE_OF_RESULT__DIAGNOSTICCHAIN_MAP:
                return this.type_of_result(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.CLEAR_STRUCTURAL_FEATURE_ACTION___MULTIPLICITY_OF_RESULT__DIAGNOSTICCHAIN_MAP:
                return this.multiplicity_of_result(<any>__arguments.get(0), <any>__arguments.get(1));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    ClearStructuralFeatureActionImpl["__class"] = "uml.impl.ClearStructuralFeatureActionImpl";
    ClearStructuralFeatureActionImpl["__interfaces"] = ["uml.ClearStructuralFeatureAction","ecore4m.EModelElement","org.eclipse.emf.ecore.EObject","uml.NamedElement","uml.ActivityContent","uml.StructuralFeatureAction","org.eclipse.emf.common.notify.Notifier","uml.ExecutableNode","uml.RedefinableElement","uml.Action","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","uml.ActivityNode","org.eclipse.emf.ecore.InternalEObject"];


}

