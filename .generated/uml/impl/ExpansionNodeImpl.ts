/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Expansion Node</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.ExpansionNodeImpl#getRegionAsInput}</li>
     * <li>{@link uml.impl.ExpansionNodeImpl#getRegionAsOutput}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.ObjectNodeImpl
     * @class
     */
    export class ExpansionNodeImpl extends uml.impl.ObjectNodeImpl implements uml.ExpansionNode {
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
            return uml.UmlPackage.eINSTANCE.getExpansionNode();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getRegionAsInput() : uml.ExpansionRegion {
            return <uml.ExpansionRegion><any>this.eGet(uml.UmlPackage.eINSTANCE.getExpansionNode_RegionAsInput(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newRegionAsInput
         */
        public setRegionAsInput(newRegionAsInput : uml.ExpansionRegion) {
            this.eSet(uml.UmlPackage.eINSTANCE.getExpansionNode_RegionAsInput(), newRegionAsInput);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getRegionAsOutput() : uml.ExpansionRegion {
            return <uml.ExpansionRegion><any>this.eGet(uml.UmlPackage.eINSTANCE.getExpansionNode_RegionAsOutput(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newRegionAsOutput
         */
        public setRegionAsOutput(newRegionAsOutput : uml.ExpansionRegion) {
            this.eSet(uml.UmlPackage.eINSTANCE.getExpansionNode_RegionAsOutput(), newRegionAsOutput);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public region_as_input_or_output(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.EXPANSION_NODE__REGION_AS_INPUT_OR_OUTPUT, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["region_as_input_or_output", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
            case uml.UmlPackage.EXPANSION_NODE___REGION_AS_INPUT_OR_OUTPUT__DIAGNOSTICCHAIN_MAP:
                return this.region_as_input_or_output(<any>__arguments.get(0), <any>__arguments.get(1));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    ExpansionNodeImpl["__class"] = "uml.impl.ExpansionNodeImpl";
    ExpansionNodeImpl["__interfaces"] = ["ecore4m.EModelElement","uml.TypedElement","org.eclipse.emf.ecore.EObject","uml.NamedElement","uml.ActivityContent","uml.ObjectNode","org.eclipse.emf.common.notify.Notifier","uml.RedefinableElement","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","uml.ActivityNode","uml.ExpansionNode","org.eclipse.emf.ecore.InternalEObject"];


}

