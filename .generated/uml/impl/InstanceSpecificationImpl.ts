/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Instance Specification</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.InstanceSpecificationImpl#getOwningTemplateParameter}</li>
     * <li>{@link uml.impl.InstanceSpecificationImpl#getTemplateParameter}</li>
     * <li>{@link uml.impl.InstanceSpecificationImpl#getClassifier}</li>
     * <li>{@link uml.impl.InstanceSpecificationImpl#getSlot}</li>
     * <li>{@link uml.impl.InstanceSpecificationImpl#getSpecification}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.DeploymentTargetImpl
     * @class
     */
    export class InstanceSpecificationImpl extends uml.impl.DeploymentTargetImpl implements uml.InstanceSpecification {
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
            return uml.UmlPackage.eINSTANCE.getInstanceSpecification();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getOwningTemplateParameter() : uml.TemplateParameter {
            return <uml.TemplateParameter><any>this.eGet(uml.UmlPackage.eINSTANCE.getParameterableElement_OwningTemplateParameter(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newOwningTemplateParameter
         */
        public setOwningTemplateParameter(newOwningTemplateParameter : uml.TemplateParameter) {
            this.eSet(uml.UmlPackage.eINSTANCE.getParameterableElement_OwningTemplateParameter(), newOwningTemplateParameter);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getTemplateParameter() : uml.TemplateParameter {
            return <uml.TemplateParameter><any>this.eGet(uml.UmlPackage.eINSTANCE.getParameterableElement_TemplateParameter(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newTemplateParameter
         */
        public setTemplateParameter(newTemplateParameter : uml.TemplateParameter) {
            this.eSet(uml.UmlPackage.eINSTANCE.getParameterableElement_TemplateParameter(), newTemplateParameter);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getClassifiers() : org.eclipse.emf.common.util.EList<uml.Classifier> {
            return <org.eclipse.emf.common.util.EList<uml.Classifier>><any>this.eGet(uml.UmlPackage.eINSTANCE.getInstanceSpecification_Classifier(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getSlot() : org.eclipse.emf.common.util.EList<uml.Slot> {
            return <org.eclipse.emf.common.util.EList<uml.Slot>><any>this.eGet(uml.UmlPackage.eINSTANCE.getInstanceSpecification_Slot(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getSpecification() : uml.ValueSpecification {
            return <uml.ValueSpecification><any>this.eGet(uml.UmlPackage.eINSTANCE.getInstanceSpecification_Specification(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newSpecification
         */
        public setSpecification(newSpecification : uml.ValueSpecification) {
            this.eSet(uml.UmlPackage.eINSTANCE.getInstanceSpecification_Specification(), newSpecification);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public deployment_artifact(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.INSTANCE_SPECIFICATION__DEPLOYMENT_ARTIFACT, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["deployment_artifact", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public structural_feature(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.INSTANCE_SPECIFICATION__STRUCTURAL_FEATURE, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["structural_feature", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public defining_feature(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.INSTANCE_SPECIFICATION__DEFINING_FEATURE, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["defining_feature", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public deployment_target(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.INSTANCE_SPECIFICATION__DEPLOYMENT_TARGET, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["deployment_target", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public namespace_needs_visibility(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.PACKAGEABLE_ELEMENT__NAMESPACE_NEEDS_VISIBILITY, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["namespace_needs_visibility", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
                }
                return false;
            }
            return true;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} p
         * @return {boolean}
         */
        public isCompatibleWith(p : uml.ParameterableElement) : boolean {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isTemplateParameter() : boolean {
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
            if(baseClass === "uml.ParameterableElement") {
                switch((derivedFeatureID)) {
                case uml.UmlPackage.INSTANCE_SPECIFICATION__OWNING_TEMPLATE_PARAMETER:
                    return uml.UmlPackage.PARAMETERABLE_ELEMENT__OWNING_TEMPLATE_PARAMETER;
                case uml.UmlPackage.INSTANCE_SPECIFICATION__TEMPLATE_PARAMETER:
                    return uml.UmlPackage.PARAMETERABLE_ELEMENT__TEMPLATE_PARAMETER;
                default:
                    return -1;
                }
            }
            if(baseClass === "uml.PackageableElement") {
                switch((derivedFeatureID)) {
                default:
                    return -1;
                }
            }
            if(baseClass === "uml.DeployedArtifact") {
                switch((derivedFeatureID)) {
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
            if(baseClass === "uml.ParameterableElement") {
                switch((baseFeatureID)) {
                case uml.UmlPackage.PARAMETERABLE_ELEMENT__OWNING_TEMPLATE_PARAMETER:
                    return uml.UmlPackage.INSTANCE_SPECIFICATION__OWNING_TEMPLATE_PARAMETER;
                case uml.UmlPackage.PARAMETERABLE_ELEMENT__TEMPLATE_PARAMETER:
                    return uml.UmlPackage.INSTANCE_SPECIFICATION__TEMPLATE_PARAMETER;
                default:
                    return -1;
                }
            }
            if(baseClass === "uml.PackageableElement") {
                switch((baseFeatureID)) {
                default:
                    return -1;
                }
            }
            if(baseClass === "uml.DeployedArtifact") {
                switch((baseFeatureID)) {
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
            if(baseClass === "uml.ParameterableElement") {
                switch((baseOperationID)) {
                case uml.UmlPackage.PARAMETERABLE_ELEMENT___IS_COMPATIBLE_WITH__PARAMETERABLEELEMENT:
                    return uml.UmlPackage.INSTANCE_SPECIFICATION___IS_COMPATIBLE_WITH__PARAMETERABLEELEMENT;
                case uml.UmlPackage.PARAMETERABLE_ELEMENT___IS_TEMPLATE_PARAMETER:
                    return uml.UmlPackage.INSTANCE_SPECIFICATION___IS_TEMPLATE_PARAMETER;
                default:
                    return -1;
                }
            }
            if(baseClass === "uml.PackageableElement") {
                switch((baseOperationID)) {
                case uml.UmlPackage.PACKAGEABLE_ELEMENT___NAMESPACE_NEEDS_VISIBILITY__DIAGNOSTICCHAIN_MAP:
                    return uml.UmlPackage.INSTANCE_SPECIFICATION___NAMESPACE_NEEDS_VISIBILITY__DIAGNOSTICCHAIN_MAP;
                default:
                    return -1;
                }
            }
            if(baseClass === "uml.DeployedArtifact") {
                switch((baseOperationID)) {
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
            case uml.UmlPackage.INSTANCE_SPECIFICATION___DEPLOYMENT_ARTIFACT__DIAGNOSTICCHAIN_MAP:
                return this.deployment_artifact(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.INSTANCE_SPECIFICATION___STRUCTURAL_FEATURE__DIAGNOSTICCHAIN_MAP:
                return this.structural_feature(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.INSTANCE_SPECIFICATION___DEFINING_FEATURE__DIAGNOSTICCHAIN_MAP:
                return this.defining_feature(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.INSTANCE_SPECIFICATION___DEPLOYMENT_TARGET__DIAGNOSTICCHAIN_MAP:
                return this.deployment_target(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.INSTANCE_SPECIFICATION___NAMESPACE_NEEDS_VISIBILITY__DIAGNOSTICCHAIN_MAP:
                return this.namespace_needs_visibility(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.INSTANCE_SPECIFICATION___IS_COMPATIBLE_WITH__PARAMETERABLEELEMENT:
                return this.isCompatibleWith(<any>__arguments.get(0));
            case uml.UmlPackage.INSTANCE_SPECIFICATION___IS_TEMPLATE_PARAMETER:
                return this.isTemplateParameter();
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    InstanceSpecificationImpl["__class"] = "uml.impl.InstanceSpecificationImpl";
    InstanceSpecificationImpl["__interfaces"] = ["ecore4m.EModelElement","org.eclipse.emf.ecore.EObject","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","uml.DeployedArtifact","uml.ParameterableElement","uml.PackageableElement","org.eclipse.emf.ecore.EModelElement","uml.InstanceSpecification","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","uml.DeploymentTarget","org.eclipse.emf.ecore.InternalEObject"];


}

