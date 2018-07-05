/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Interruptible Activity Region</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.InterruptibleActivityRegionImpl#getInterruptingEdge}</li>
     * <li>{@link uml.impl.InterruptibleActivityRegionImpl#getNode}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.ActivityGroupImpl
     * @class
     */
    export class InterruptibleActivityRegionImpl extends uml.impl.ActivityGroupImpl implements uml.InterruptibleActivityRegion {
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
            return uml.UmlPackage.eINSTANCE.getInterruptibleActivityRegion();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getInterruptingEdge() : org.eclipse.emf.common.util.EList<uml.ActivityEdge> {
            return <org.eclipse.emf.common.util.EList<uml.ActivityEdge>><any>this.eGet(uml.UmlPackage.eINSTANCE.getInterruptibleActivityRegion_InterruptingEdge(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getNode() : org.eclipse.emf.common.util.EList<uml.ActivityNode> {
            return <org.eclipse.emf.common.util.EList<uml.ActivityNode>><any>this.eGet(uml.UmlPackage.eINSTANCE.getInterruptibleActivityRegion_Node(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public interrupting_edges(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.INTERRUPTIBLE_ACTIVITY_REGION__INTERRUPTING_EDGES, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["interrupting_edges", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
            case uml.UmlPackage.INTERRUPTIBLE_ACTIVITY_REGION___INTERRUPTING_EDGES__DIAGNOSTICCHAIN_MAP:
                return this.interrupting_edges(<any>__arguments.get(0), <any>__arguments.get(1));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    InterruptibleActivityRegionImpl["__class"] = "uml.impl.InterruptibleActivityRegionImpl";
    InterruptibleActivityRegionImpl["__interfaces"] = ["uml.InterruptibleActivityRegion","ecore4m.EModelElement","uml.ActivityGroup","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","uml.NamedElement","uml.ActivityContent","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

