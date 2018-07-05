/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Destruction Occurrence Specification</b></em>'.
     * <!-- end-user-doc -->
     * 
     * @generated
     * @extends uml.impl.MessageOccurrenceSpecificationImpl
     * @class
     */
    export class DestructionOccurrenceSpecificationImpl extends uml.impl.MessageOccurrenceSpecificationImpl implements uml.DestructionOccurrenceSpecification {
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
            return uml.UmlPackage.eINSTANCE.getDestructionOccurrenceSpecification();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public no_occurrence_specifications_below(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.DESTRUCTION_OCCURRENCE_SPECIFICATION__NO_OCCURRENCE_SPECIFICATIONS_BELOW, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["no_occurrence_specifications_below", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
            case uml.UmlPackage.DESTRUCTION_OCCURRENCE_SPECIFICATION___NO_OCCURRENCE_SPECIFICATIONS_BELOW__DIAGNOSTICCHAIN_MAP:
                return this.no_occurrence_specifications_below(<any>__arguments.get(0), <any>__arguments.get(1));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    DestructionOccurrenceSpecificationImpl["__class"] = "uml.impl.DestructionOccurrenceSpecificationImpl";
    DestructionOccurrenceSpecificationImpl["__interfaces"] = ["ecore4m.EModelElement","uml.DestructionOccurrenceSpecification","org.eclipse.emf.ecore.EObject","uml.NamedElement","uml.MessageOccurrenceSpecification","org.eclipse.emf.common.notify.Notifier","uml.OccurrenceSpecification","uml.MessageEnd","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","uml.InteractionFragment","org.eclipse.emf.ecore.InternalEObject"];


}

