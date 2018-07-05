/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Activity Group</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.ActivityGroupImpl#getContainedEdge}</li>
     * <li>{@link uml.impl.ActivityGroupImpl#getContainedNode}</li>
     * <li>{@link uml.impl.ActivityGroupImpl#getInActivity}</li>
     * <li>{@link uml.impl.ActivityGroupImpl#getSubgroup}</li>
     * <li>{@link uml.impl.ActivityGroupImpl#getSuperGroup}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.NamedElementImpl
     * @class
     */
    export abstract class ActivityGroupImpl extends uml.impl.NamedElementImpl implements uml.ActivityGroup {
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
            return uml.UmlPackage.eINSTANCE.getActivityGroup();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getContainedEdge() : org.eclipse.emf.common.util.EList<uml.ActivityEdge> {
            return <org.eclipse.emf.common.util.EList<uml.ActivityEdge>><any>this.eGet(uml.UmlPackage.eINSTANCE.getActivityGroup_ContainedEdge(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getContainedNode() : org.eclipse.emf.common.util.EList<uml.ActivityNode> {
            return <org.eclipse.emf.common.util.EList<uml.ActivityNode>><any>this.eGet(uml.UmlPackage.eINSTANCE.getActivityGroup_ContainedNode(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getInActivity() : uml.Activity {
            return <uml.Activity><any>this.eGet(uml.UmlPackage.eINSTANCE.getActivityGroup_InActivity(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newInActivity
         */
        public setInActivity(newInActivity : uml.Activity) {
            this.eSet(uml.UmlPackage.eINSTANCE.getActivityGroup_InActivity(), newInActivity);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getSubgroup() : org.eclipse.emf.common.util.EList<uml.ActivityGroup> {
            return <org.eclipse.emf.common.util.EList<uml.ActivityGroup>><any>this.eGet(uml.UmlPackage.eINSTANCE.getActivityGroup_Subgroup(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getSuperGroup() : uml.ActivityGroup {
            return <uml.ActivityGroup><any>this.eGet(uml.UmlPackage.eINSTANCE.getActivityGroup_SuperGroup(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public nodes_and_edges(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.ACTIVITY_GROUP__NODES_AND_EDGES, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["nodes_and_edges", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public not_contained(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.ACTIVITY_GROUP__NOT_CONTAINED, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["not_contained", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
                }
                return false;
            }
            return true;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public containingActivity() : uml.Activity {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {number} baseOperationID
         * @param {*} baseClass
         * @return {number}
         */
        public eDerivedOperationID(baseOperationID : number, baseClass : any) : number {
            if(baseClass === "uml.ActivityContent") {
                switch((baseOperationID)) {
                case uml.UmlPackage.ACTIVITY_CONTENT___CONTAINING_ACTIVITY:
                    return uml.UmlPackage.ACTIVITY_GROUP___CONTAINING_ACTIVITY;
                default:
                    return -1;
                }
            }
            return super.eDerivedOperationID(baseOperationID, baseClass);
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
            case uml.UmlPackage.ACTIVITY_GROUP___NODES_AND_EDGES__DIAGNOSTICCHAIN_MAP:
                return this.nodes_and_edges(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.ACTIVITY_GROUP___NOT_CONTAINED__DIAGNOSTICCHAIN_MAP:
                return this.not_contained(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.ACTIVITY_GROUP___CONTAINING_ACTIVITY:
                return this.containingActivity();
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    ActivityGroupImpl["__class"] = "uml.impl.ActivityGroupImpl";
    ActivityGroupImpl["__interfaces"] = ["ecore4m.EModelElement","uml.ActivityGroup","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","uml.NamedElement","uml.ActivityContent","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

