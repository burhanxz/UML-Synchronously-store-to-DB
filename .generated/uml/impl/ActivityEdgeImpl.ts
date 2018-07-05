/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Activity Edge</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.ActivityEdgeImpl#getActivity}</li>
     * <li>{@link uml.impl.ActivityEdgeImpl#getGuard}</li>
     * <li>{@link uml.impl.ActivityEdgeImpl#getInPartition}</li>
     * <li>{@link uml.impl.ActivityEdgeImpl#getInterrupts}</li>
     * <li>{@link uml.impl.ActivityEdgeImpl#getInStructuredNode}</li>
     * <li>{@link uml.impl.ActivityEdgeImpl#getTarget}</li>
     * <li>{@link uml.impl.ActivityEdgeImpl#getSource}</li>
     * <li>{@link uml.impl.ActivityEdgeImpl#getRedefinedEdge}</li>
     * <li>{@link uml.impl.ActivityEdgeImpl#getWeight}</li>
     * <li>{@link uml.impl.ActivityEdgeImpl#getInGroup}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.RedefinableElementImpl
     * @class
     */
    export abstract class ActivityEdgeImpl extends uml.impl.RedefinableElementImpl implements uml.ActivityEdge {
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
            return uml.UmlPackage.eINSTANCE.getActivityEdge();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getActivity() : uml.Activity {
            return <uml.Activity><any>this.eGet(uml.UmlPackage.eINSTANCE.getActivityEdge_Activity(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newActivity
         */
        public setActivity(newActivity : uml.Activity) {
            this.eSet(uml.UmlPackage.eINSTANCE.getActivityEdge_Activity(), newActivity);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getGuard() : uml.ValueSpecification {
            return <uml.ValueSpecification><any>this.eGet(uml.UmlPackage.eINSTANCE.getActivityEdge_Guard(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newGuard
         */
        public setGuard(newGuard : uml.ValueSpecification) {
            this.eSet(uml.UmlPackage.eINSTANCE.getActivityEdge_Guard(), newGuard);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getInPartition() : org.eclipse.emf.common.util.EList<uml.ActivityPartition> {
            return <org.eclipse.emf.common.util.EList<uml.ActivityPartition>><any>this.eGet(uml.UmlPackage.eINSTANCE.getActivityEdge_InPartition(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getInterrupts() : uml.InterruptibleActivityRegion {
            return <uml.InterruptibleActivityRegion><any>this.eGet(uml.UmlPackage.eINSTANCE.getActivityEdge_Interrupts(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newInterrupts
         */
        public setInterrupts(newInterrupts : uml.InterruptibleActivityRegion) {
            this.eSet(uml.UmlPackage.eINSTANCE.getActivityEdge_Interrupts(), newInterrupts);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getInStructuredNode() : uml.StructuredActivityNode {
            return <uml.StructuredActivityNode><any>this.eGet(uml.UmlPackage.eINSTANCE.getActivityEdge_InStructuredNode(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newInStructuredNode
         */
        public setInStructuredNode(newInStructuredNode : uml.StructuredActivityNode) {
            this.eSet(uml.UmlPackage.eINSTANCE.getActivityEdge_InStructuredNode(), newInStructuredNode);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getTarget() : uml.ActivityNode {
            return <uml.ActivityNode><any>this.eGet(uml.UmlPackage.eINSTANCE.getActivityEdge_Target(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newTarget
         */
        public setTarget(newTarget : uml.ActivityNode) {
            this.eSet(uml.UmlPackage.eINSTANCE.getActivityEdge_Target(), newTarget);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getSource() : uml.ActivityNode {
            return <uml.ActivityNode><any>this.eGet(uml.UmlPackage.eINSTANCE.getActivityEdge_Source(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newSource
         */
        public setSource(newSource : uml.ActivityNode) {
            this.eSet(uml.UmlPackage.eINSTANCE.getActivityEdge_Source(), newSource);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getRedefinedEdge() : org.eclipse.emf.common.util.EList<uml.ActivityEdge> {
            return <org.eclipse.emf.common.util.EList<uml.ActivityEdge>><any>this.eGet(uml.UmlPackage.eINSTANCE.getActivityEdge_RedefinedEdge(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getWeight() : uml.ValueSpecification {
            return <uml.ValueSpecification><any>this.eGet(uml.UmlPackage.eINSTANCE.getActivityEdge_Weight(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newWeight
         */
        public setWeight(newWeight : uml.ValueSpecification) {
            this.eSet(uml.UmlPackage.eINSTANCE.getActivityEdge_Weight(), newWeight);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getInGroup() : org.eclipse.emf.common.util.EList<uml.ActivityGroup> {
            return <org.eclipse.emf.common.util.EList<uml.ActivityGroup>><any>this.eGet(uml.UmlPackage.eINSTANCE.getActivityEdge_InGroup(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public source_and_target(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.ACTIVITY_EDGE__SOURCE_AND_TARGET, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["source_and_target", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
            case uml.UmlPackage.ACTIVITY_EDGE___SOURCE_AND_TARGET__DIAGNOSTICCHAIN_MAP:
                return this.source_and_target(<any>__arguments.get(0), <any>__arguments.get(1));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    ActivityEdgeImpl["__class"] = "uml.impl.ActivityEdgeImpl";
    ActivityEdgeImpl["__interfaces"] = ["uml.RedefinableElement","ecore4m.EModelElement","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","uml.ActivityEdge","org.eclipse.emf.ecore.EObject","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

