/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Deployment Specification</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.DeploymentSpecificationImpl#getDeploymentLocation}</li>
     * <li>{@link uml.impl.DeploymentSpecificationImpl#getExecutionLocation}</li>
     * <li>{@link uml.impl.DeploymentSpecificationImpl#getDeployment}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.ArtifactImpl
     * @class
     */
    export class DeploymentSpecificationImpl extends uml.impl.ArtifactImpl implements uml.DeploymentSpecification {
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
            return uml.UmlPackage.eINSTANCE.getDeploymentSpecification();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {string}
         */
        public getDeploymentLocation() : string {
            return <string>this.eGet(uml.UmlPackage.eINSTANCE.getDeploymentSpecification_DeploymentLocation(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {string} newDeploymentLocation
         */
        public setDeploymentLocation(newDeploymentLocation : string) {
            this.eSet(uml.UmlPackage.eINSTANCE.getDeploymentSpecification_DeploymentLocation(), newDeploymentLocation);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        public unsetDeploymentLocation() {
            this.eUnset(uml.UmlPackage.eINSTANCE.getDeploymentSpecification_DeploymentLocation());
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isSetDeploymentLocation() : boolean {
            return this.eIsSet(uml.UmlPackage.eINSTANCE.getDeploymentSpecification_DeploymentLocation());
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {string}
         */
        public getExecutionLocation() : string {
            return <string>this.eGet(uml.UmlPackage.eINSTANCE.getDeploymentSpecification_ExecutionLocation(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {string} newExecutionLocation
         */
        public setExecutionLocation(newExecutionLocation : string) {
            this.eSet(uml.UmlPackage.eINSTANCE.getDeploymentSpecification_ExecutionLocation(), newExecutionLocation);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        public unsetExecutionLocation() {
            this.eUnset(uml.UmlPackage.eINSTANCE.getDeploymentSpecification_ExecutionLocation());
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isSetExecutionLocation() : boolean {
            return this.eIsSet(uml.UmlPackage.eINSTANCE.getDeploymentSpecification_ExecutionLocation());
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getDeployment() : uml.Deployment {
            return <uml.Deployment><any>this.eGet(uml.UmlPackage.eINSTANCE.getDeploymentSpecification_Deployment(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newDeployment
         */
        public setDeployment(newDeployment : uml.Deployment) {
            this.eSet(uml.UmlPackage.eINSTANCE.getDeploymentSpecification_Deployment(), newDeployment);
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
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.DEPLOYMENT_SPECIFICATION__DEPLOYMENT_TARGET, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["deployment_target", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public deployed_elements(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.DEPLOYMENT_SPECIFICATION__DEPLOYED_ELEMENTS, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["deployed_elements", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
            case uml.UmlPackage.DEPLOYMENT_SPECIFICATION___DEPLOYMENT_TARGET__DIAGNOSTICCHAIN_MAP:
                return this.deployment_target(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.DEPLOYMENT_SPECIFICATION___DEPLOYED_ELEMENTS__DIAGNOSTICCHAIN_MAP:
                return this.deployed_elements(<any>__arguments.get(0), <any>__arguments.get(1));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    DeploymentSpecificationImpl["__class"] = "uml.impl.DeploymentSpecificationImpl";
    DeploymentSpecificationImpl["__interfaces"] = ["uml.Classifier","ecore4m.EModelElement","uml.DeploymentSpecification","uml.Namespace","org.eclipse.emf.ecore.EObject","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","uml.RedefinableElement","uml.DeployedArtifact","uml.ParameterableElement","uml.PackageableElement","uml.TemplateableElement","org.eclipse.emf.ecore.EModelElement","uml.Artifact","uml.Type","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.InternalEObject"];


}

