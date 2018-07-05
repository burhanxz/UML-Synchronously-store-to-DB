/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Activity</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.ActivityImpl#getOwnedGroup}</li>
     * <li>{@link uml.impl.ActivityImpl#getEdge}</li>
     * <li>{@link uml.impl.ActivityImpl#getNode}</li>
     * <li>{@link uml.impl.ActivityImpl#getVariable}</li>
     * <li>{@link uml.impl.ActivityImpl#getGroup}</li>
     * <li>{@link uml.impl.ActivityImpl#getOwnedNode}</li>
     * <li>{@link uml.impl.ActivityImpl#isIsReadOnly}</li>
     * <li>{@link uml.impl.ActivityImpl#isIsSingleExecution}</li>
     * <li>{@link uml.impl.ActivityImpl#getPartition}</li>
     * <li>{@link uml.impl.ActivityImpl#getStructuredNode}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.BehaviorImpl
     * @class
     */
    export class ActivityImpl extends uml.impl.BehaviorImpl implements uml.Activity {
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
            return uml.UmlPackage.eINSTANCE.getActivity();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getOwnedGroup() : org.eclipse.emf.common.util.EList<uml.ActivityGroup> {
            return <org.eclipse.emf.common.util.EList<uml.ActivityGroup>><any>this.eGet(uml.UmlPackage.eINSTANCE.getActivity_OwnedGroup(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getEdge() : org.eclipse.emf.common.util.EList<uml.ActivityEdge> {
            return <org.eclipse.emf.common.util.EList<uml.ActivityEdge>><any>this.eGet(uml.UmlPackage.eINSTANCE.getActivity_Edge(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getNode() : org.eclipse.emf.common.util.EList<uml.ActivityNode> {
            return <org.eclipse.emf.common.util.EList<uml.ActivityNode>><any>this.eGet(uml.UmlPackage.eINSTANCE.getActivity_Node(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getVariable() : org.eclipse.emf.common.util.EList<uml.Variable> {
            return <org.eclipse.emf.common.util.EList<uml.Variable>><any>this.eGet(uml.UmlPackage.eINSTANCE.getActivity_Variable(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getGroup() : org.eclipse.emf.common.util.EList<uml.ActivityGroup> {
            return <org.eclipse.emf.common.util.EList<uml.ActivityGroup>><any>this.eGet(uml.UmlPackage.eINSTANCE.getActivity_Group(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getOwnedNode() : org.eclipse.emf.common.util.EList<uml.ActivityNode> {
            return <org.eclipse.emf.common.util.EList<uml.ActivityNode>><any>this.eGet(uml.UmlPackage.eINSTANCE.getActivity_OwnedNode(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isIsReadOnly() : boolean {
            return <boolean>this.eGet(uml.UmlPackage.eINSTANCE.getActivity_IsReadOnly(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {boolean} newIsReadOnly
         */
        public setIsReadOnly(newIsReadOnly : boolean) {
            this.eSet(uml.UmlPackage.eINSTANCE.getActivity_IsReadOnly(), newIsReadOnly);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isIsSingleExecution() : boolean {
            return <boolean>this.eGet(uml.UmlPackage.eINSTANCE.getActivity_IsSingleExecution(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {boolean} newIsSingleExecution
         */
        public setIsSingleExecution(newIsSingleExecution : boolean) {
            this.eSet(uml.UmlPackage.eINSTANCE.getActivity_IsSingleExecution(), newIsSingleExecution);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getPartition() : org.eclipse.emf.common.util.EList<uml.ActivityPartition> {
            return <org.eclipse.emf.common.util.EList<uml.ActivityPartition>><any>this.eGet(uml.UmlPackage.eINSTANCE.getActivity_Partition(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getStructuredNode() : org.eclipse.emf.common.util.EList<uml.StructuredActivityNode> {
            return <org.eclipse.emf.common.util.EList<uml.StructuredActivityNode>><any>this.eGet(uml.UmlPackage.eINSTANCE.getActivity_StructuredNode(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public maximum_one_parameter_node(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.ACTIVITY__MAXIMUM_ONE_PARAMETER_NODE, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["maximum_one_parameter_node", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public maximum_two_parameter_nodes(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.ACTIVITY__MAXIMUM_TWO_PARAMETER_NODES, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["maximum_two_parameter_nodes", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
            case uml.UmlPackage.ACTIVITY___MAXIMUM_ONE_PARAMETER_NODE__DIAGNOSTICCHAIN_MAP:
                return this.maximum_one_parameter_node(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.ACTIVITY___MAXIMUM_TWO_PARAMETER_NODES__DIAGNOSTICCHAIN_MAP:
                return this.maximum_two_parameter_nodes(<any>__arguments.get(0), <any>__arguments.get(1));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    ActivityImpl["__class"] = "uml.impl.ActivityImpl";
    ActivityImpl["__interfaces"] = ["uml.Classifier","ecore4m.EModelElement","uml.Namespace","org.eclipse.emf.ecore.EObject","uml.NamedElement","uml.Behavior","org.eclipse.emf.common.notify.Notifier","uml.StructuredClassifier","uml.BehavioredClassifier","uml.RedefinableElement","uml.ParameterableElement","uml.PackageableElement","uml.EncapsulatedClassifier","uml.TemplateableElement","uml.Activity","uml.Class","org.eclipse.emf.ecore.EModelElement","uml.Type","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.InternalEObject"];


}

