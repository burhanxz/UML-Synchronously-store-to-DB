/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Output Pin</b></em>'.
     * <!-- end-user-doc -->
     * 
     * @generated
     * @extends uml.impl.PinImpl
     * @class
     */
    export class OutputPinImpl extends uml.impl.PinImpl implements uml.OutputPin {
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
            return uml.UmlPackage.eINSTANCE.getOutputPin();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public incoming_edges_structured_only(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.OUTPUT_PIN__INCOMING_EDGES_STRUCTURED_ONLY, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["incoming_edges_structured_only", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
            case uml.UmlPackage.OUTPUT_PIN___INCOMING_EDGES_STRUCTURED_ONLY__DIAGNOSTICCHAIN_MAP:
                return this.incoming_edges_structured_only(<any>__arguments.get(0), <any>__arguments.get(1));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    OutputPinImpl["__class"] = "uml.impl.OutputPinImpl";
    OutputPinImpl["__interfaces"] = ["ecore4m.EModelElement","uml.TypedElement","uml.OutputPin","org.eclipse.emf.ecore.EObject","uml.NamedElement","uml.ActivityContent","uml.ObjectNode","org.eclipse.emf.common.notify.Notifier","uml.MultiplicityElement","uml.RedefinableElement","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","uml.Pin","uml.ActivityNode","org.eclipse.emf.ecore.InternalEObject"];


}

