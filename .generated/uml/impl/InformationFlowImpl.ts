/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Information Flow</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.InformationFlowImpl#getRelatedElement}</li>
     * <li>{@link uml.impl.InformationFlowImpl#getSource}</li>
     * <li>{@link uml.impl.InformationFlowImpl#getTarget}</li>
     * <li>{@link uml.impl.InformationFlowImpl#getConveyed}</li>
     * <li>{@link uml.impl.InformationFlowImpl#getInformationSource}</li>
     * <li>{@link uml.impl.InformationFlowImpl#getInformationTarget}</li>
     * <li>{@link uml.impl.InformationFlowImpl#getRealization}</li>
     * <li>{@link uml.impl.InformationFlowImpl#getRealizingActivityEdge}</li>
     * <li>{@link uml.impl.InformationFlowImpl#getRealizingConnector}</li>
     * <li>{@link uml.impl.InformationFlowImpl#getRealizingMessage}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.PackageableElementImpl
     * @class
     */
    export class InformationFlowImpl extends uml.impl.PackageableElementImpl implements uml.InformationFlow {
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
            return uml.UmlPackage.eINSTANCE.getInformationFlow();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getRelatedElement() : org.eclipse.emf.common.util.EList<uml.Element> {
            return <org.eclipse.emf.common.util.EList<uml.Element>><any>this.eGet(uml.UmlPackage.eINSTANCE.getRelationship_RelatedElement(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getSource() : org.eclipse.emf.common.util.EList<uml.Element> {
            return <org.eclipse.emf.common.util.EList<uml.Element>><any>this.eGet(uml.UmlPackage.eINSTANCE.getDirectedRelationship_Source(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getTarget() : org.eclipse.emf.common.util.EList<uml.Element> {
            return <org.eclipse.emf.common.util.EList<uml.Element>><any>this.eGet(uml.UmlPackage.eINSTANCE.getDirectedRelationship_Target(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getConveyed() : org.eclipse.emf.common.util.EList<uml.Classifier> {
            return <org.eclipse.emf.common.util.EList<uml.Classifier>><any>this.eGet(uml.UmlPackage.eINSTANCE.getInformationFlow_Conveyed(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getInformationSource() : org.eclipse.emf.common.util.EList<uml.NamedElement> {
            return <org.eclipse.emf.common.util.EList<uml.NamedElement>><any>this.eGet(uml.UmlPackage.eINSTANCE.getInformationFlow_InformationSource(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getInformationTarget() : org.eclipse.emf.common.util.EList<uml.NamedElement> {
            return <org.eclipse.emf.common.util.EList<uml.NamedElement>><any>this.eGet(uml.UmlPackage.eINSTANCE.getInformationFlow_InformationTarget(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getRealization() : org.eclipse.emf.common.util.EList<uml.Relationship> {
            return <org.eclipse.emf.common.util.EList<uml.Relationship>><any>this.eGet(uml.UmlPackage.eINSTANCE.getInformationFlow_Realization(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getRealizingActivityEdge() : org.eclipse.emf.common.util.EList<uml.ActivityEdge> {
            return <org.eclipse.emf.common.util.EList<uml.ActivityEdge>><any>this.eGet(uml.UmlPackage.eINSTANCE.getInformationFlow_RealizingActivityEdge(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getRealizingConnector() : org.eclipse.emf.common.util.EList<uml.Connector> {
            return <org.eclipse.emf.common.util.EList<uml.Connector>><any>this.eGet(uml.UmlPackage.eINSTANCE.getInformationFlow_RealizingConnector(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getRealizingMessage() : org.eclipse.emf.common.util.EList<uml.Message> {
            return <org.eclipse.emf.common.util.EList<uml.Message>><any>this.eGet(uml.UmlPackage.eINSTANCE.getInformationFlow_RealizingMessage(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public must_conform(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.INFORMATION_FLOW__MUST_CONFORM, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["must_conform", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public sources_and_targets_kind(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.INFORMATION_FLOW__SOURCES_AND_TARGETS_KIND, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["sources_and_targets_kind", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public convey_classifiers(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.INFORMATION_FLOW__CONVEY_CLASSIFIERS, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["convey_classifiers", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
                }
                return false;
            }
            return true;
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
            if(baseClass === "uml.Relationship") {
                switch((derivedFeatureID)) {
                case uml.UmlPackage.INFORMATION_FLOW__RELATED_ELEMENT:
                    return uml.UmlPackage.RELATIONSHIP__RELATED_ELEMENT;
                default:
                    return -1;
                }
            }
            if(baseClass === "uml.DirectedRelationship") {
                switch((derivedFeatureID)) {
                case uml.UmlPackage.INFORMATION_FLOW__SOURCE:
                    return uml.UmlPackage.DIRECTED_RELATIONSHIP__SOURCE;
                case uml.UmlPackage.INFORMATION_FLOW__TARGET:
                    return uml.UmlPackage.DIRECTED_RELATIONSHIP__TARGET;
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
            if(baseClass === "uml.Relationship") {
                switch((baseFeatureID)) {
                case uml.UmlPackage.RELATIONSHIP__RELATED_ELEMENT:
                    return uml.UmlPackage.INFORMATION_FLOW__RELATED_ELEMENT;
                default:
                    return -1;
                }
            }
            if(baseClass === "uml.DirectedRelationship") {
                switch((baseFeatureID)) {
                case uml.UmlPackage.DIRECTED_RELATIONSHIP__SOURCE:
                    return uml.UmlPackage.INFORMATION_FLOW__SOURCE;
                case uml.UmlPackage.DIRECTED_RELATIONSHIP__TARGET:
                    return uml.UmlPackage.INFORMATION_FLOW__TARGET;
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
         * @param {number} operationID
         * @param {*} arguments
         * @return {*}
         */
        public eInvoke(operationID : number, __arguments : org.eclipse.emf.common.util.EList<any>) : any {
            switch((operationID)) {
            case uml.UmlPackage.INFORMATION_FLOW___MUST_CONFORM__DIAGNOSTICCHAIN_MAP:
                return this.must_conform(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.INFORMATION_FLOW___SOURCES_AND_TARGETS_KIND__DIAGNOSTICCHAIN_MAP:
                return this.sources_and_targets_kind(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.INFORMATION_FLOW___CONVEY_CLASSIFIERS__DIAGNOSTICCHAIN_MAP:
                return this.convey_classifiers(<any>__arguments.get(0), <any>__arguments.get(1));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    InformationFlowImpl["__class"] = "uml.impl.InformationFlowImpl";
    InformationFlowImpl["__interfaces"] = ["ecore4m.EModelElement","org.eclipse.emf.ecore.EObject","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","uml.InformationFlow","uml.Relationship","uml.ParameterableElement","uml.DirectedRelationship","uml.PackageableElement","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.InternalEObject"];


}

