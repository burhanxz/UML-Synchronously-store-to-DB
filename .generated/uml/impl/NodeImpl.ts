/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Node</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.NodeImpl#getDeployedElement}</li>
     * <li>{@link uml.impl.NodeImpl#getDeployment}</li>
     * <li>{@link uml.impl.NodeImpl#getNestedNode}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.ClassImpl
     * @class
     */
    export class NodeImpl extends uml.impl.ClassImpl implements uml.Node {
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
            return uml.UmlPackage.eINSTANCE.getNode();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getDeployedElement() : org.eclipse.emf.common.util.EList<uml.PackageableElement> {
            return <org.eclipse.emf.common.util.EList<uml.PackageableElement>><any>this.eGet(uml.UmlPackage.eINSTANCE.getDeploymentTarget_DeployedElement(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getDeployment() : org.eclipse.emf.common.util.EList<uml.Deployment> {
            return <org.eclipse.emf.common.util.EList<uml.Deployment>><any>this.eGet(uml.UmlPackage.eINSTANCE.getDeploymentTarget_Deployment(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getNestedNode() : org.eclipse.emf.common.util.EList<uml.Node> {
            return <org.eclipse.emf.common.util.EList<uml.Node>><any>this.eGet(uml.UmlPackage.eINSTANCE.getNode_NestedNode(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public internal_structure(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.NODE__INTERNAL_STRUCTURE, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["internal_structure", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
                }
                return false;
            }
            return true;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {boolean} end1IsNavigable
         * @param {uml.AggregationKind} end1Aggregation
         * @param {string} end1Name
         * @param {number} end1Lower
         * @param {number} end1Upper
         * @param {*} end1Node
         * @param {boolean} end2IsNavigable
         * @param {uml.AggregationKind} end2Aggregation
         * @param {string} end2Name
         * @param {number} end2Lower
         * @param {number} end2Upper
         * @return {*}
         */
        public createCommunicationPath(end1IsNavigable : boolean, end1Aggregation : uml.AggregationKind, end1Name : string, end1Lower : number, end1Upper : number, end1Node : uml.Node, end2IsNavigable : boolean, end2Aggregation : uml.AggregationKind, end2Name : string, end2Lower : number, end2Upper : number) : uml.CommunicationPath {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getCommunicationPaths() : org.eclipse.emf.common.util.EList<uml.CommunicationPath> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getDeployedElements() : org.eclipse.emf.common.util.EList<uml.PackageableElement> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {number} derivedFeatureID
         * @param {*} baseClass
         * @return {number}
         */
        public eBaseStructuralFeatureID(derivedFeatureID : number, baseClass : any) : number {
            if(baseClass === "uml.DeploymentTarget") {
                switch((derivedFeatureID)) {
                case uml.UmlPackage.NODE__DEPLOYED_ELEMENT:
                    return uml.UmlPackage.DEPLOYMENT_TARGET__DEPLOYED_ELEMENT;
                case uml.UmlPackage.NODE__DEPLOYMENT:
                    return uml.UmlPackage.DEPLOYMENT_TARGET__DEPLOYMENT;
                default:
                    return -1;
                }
            }
            return super.eBaseStructuralFeatureID(derivedFeatureID, baseClass);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {number} baseFeatureID
         * @param {*} baseClass
         * @return {number}
         */
        public eDerivedStructuralFeatureID(baseFeatureID : number, baseClass : any) : number {
            if(baseClass === "uml.DeploymentTarget") {
                switch((baseFeatureID)) {
                case uml.UmlPackage.DEPLOYMENT_TARGET__DEPLOYED_ELEMENT:
                    return uml.UmlPackage.NODE__DEPLOYED_ELEMENT;
                case uml.UmlPackage.DEPLOYMENT_TARGET__DEPLOYMENT:
                    return uml.UmlPackage.NODE__DEPLOYMENT;
                default:
                    return -1;
                }
            }
            return super.eDerivedStructuralFeatureID(baseFeatureID, baseClass);
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
            if(baseClass === "uml.DeploymentTarget") {
                switch((baseOperationID)) {
                case uml.UmlPackage.DEPLOYMENT_TARGET___GET_DEPLOYED_ELEMENTS:
                    return uml.UmlPackage.NODE___GET_DEPLOYED_ELEMENTS;
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
            case uml.UmlPackage.NODE___INTERNAL_STRUCTURE__DIAGNOSTICCHAIN_MAP:
                return this.internal_structure(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.NODE___CREATE_COMMUNICATION_PATH__BOOLEAN_AGGREGATIONKIND_STRING_INT_INT_NODE_BOOLEAN_AGGREGATIONKIND_STRING_INT_INT:
                return this.createCommunicationPath(<any>__arguments.get(0), <any>__arguments.get(1), <any>__arguments.get(2), <any>__arguments.get(3), <any>__arguments.get(4), <any>__arguments.get(5), <any>__arguments.get(6), <any>__arguments.get(7), <any>__arguments.get(8), <any>__arguments.get(9), <any>__arguments.get(10));
            case uml.UmlPackage.NODE___GET_COMMUNICATION_PATHS:
                return this.getCommunicationPaths();
            case uml.UmlPackage.NODE___GET_DEPLOYED_ELEMENTS:
                return this.getDeployedElements();
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    NodeImpl["__class"] = "uml.impl.NodeImpl";
    NodeImpl["__interfaces"] = ["uml.Classifier","ecore4m.EModelElement","uml.Namespace","org.eclipse.emf.ecore.EObject","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","uml.StructuredClassifier","uml.BehavioredClassifier","uml.RedefinableElement","uml.ParameterableElement","uml.PackageableElement","uml.Node","uml.EncapsulatedClassifier","uml.TemplateableElement","uml.Class","org.eclipse.emf.ecore.EModelElement","uml.Type","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","uml.DeploymentTarget","org.eclipse.emf.ecore.InternalEObject"];


}

