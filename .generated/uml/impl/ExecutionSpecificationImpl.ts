/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Execution Specification</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.ExecutionSpecificationImpl#getFinish}</li>
     * <li>{@link uml.impl.ExecutionSpecificationImpl#getStart}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.InteractionFragmentImpl
     * @class
     */
    export abstract class ExecutionSpecificationImpl extends uml.impl.InteractionFragmentImpl implements uml.ExecutionSpecification {
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
            return uml.UmlPackage.eINSTANCE.getExecutionSpecification();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getFinish() : uml.OccurrenceSpecification {
            return <uml.OccurrenceSpecification><any>this.eGet(uml.UmlPackage.eINSTANCE.getExecutionSpecification_Finish(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newFinish
         */
        public setFinish(newFinish : uml.OccurrenceSpecification) {
            this.eSet(uml.UmlPackage.eINSTANCE.getExecutionSpecification_Finish(), newFinish);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getStart() : uml.OccurrenceSpecification {
            return <uml.OccurrenceSpecification><any>this.eGet(uml.UmlPackage.eINSTANCE.getExecutionSpecification_Start(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newStart
         */
        public setStart(newStart : uml.OccurrenceSpecification) {
            this.eSet(uml.UmlPackage.eINSTANCE.getExecutionSpecification_Start(), newStart);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public same_lifeline(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.EXECUTION_SPECIFICATION__SAME_LIFELINE, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["same_lifeline", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
            case uml.UmlPackage.EXECUTION_SPECIFICATION___SAME_LIFELINE__DIAGNOSTICCHAIN_MAP:
                return this.same_lifeline(<any>__arguments.get(0), <any>__arguments.get(1));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    ExecutionSpecificationImpl["__class"] = "uml.impl.ExecutionSpecificationImpl";
    ExecutionSpecificationImpl["__interfaces"] = ["ecore4m.EModelElement","uml.ExecutionSpecification","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","uml.NamedElement","uml.InteractionFragment","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

