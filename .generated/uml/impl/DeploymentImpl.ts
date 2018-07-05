/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Deployment</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.DeploymentImpl#getConfiguration}</li>
     * <li>{@link uml.impl.DeploymentImpl#getDeployedArtifact}</li>
     * <li>{@link uml.impl.DeploymentImpl#getLocation}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.DependencyImpl
     * @class
     */
    export class DeploymentImpl extends uml.impl.DependencyImpl implements uml.Deployment {
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
            return uml.UmlPackage.eINSTANCE.getDeployment();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getConfiguration() : org.eclipse.emf.common.util.EList<uml.DeploymentSpecification> {
            return <org.eclipse.emf.common.util.EList<uml.DeploymentSpecification>><any>this.eGet(uml.UmlPackage.eINSTANCE.getDeployment_Configuration(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getDeployedArtifact() : org.eclipse.emf.common.util.EList<uml.DeployedArtifact> {
            return <org.eclipse.emf.common.util.EList<uml.DeployedArtifact>><any>this.eGet(uml.UmlPackage.eINSTANCE.getDeployment_DeployedArtifact(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getLocation() : uml.DeploymentTarget {
            return <uml.DeploymentTarget><any>this.eGet(uml.UmlPackage.eINSTANCE.getDeployment_Location(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newLocation
         */
        public setLocation(newLocation : uml.DeploymentTarget) {
            this.eSet(uml.UmlPackage.eINSTANCE.getDeployment_Location(), newLocation);
        }
    }
    DeploymentImpl["__class"] = "uml.impl.DeploymentImpl";
    DeploymentImpl["__interfaces"] = ["uml.Deployment","ecore4m.EModelElement","org.eclipse.emf.ecore.EObject","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","uml.Relationship","uml.ParameterableElement","uml.DirectedRelationship","uml.Dependency","uml.PackageableElement","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.InternalEObject"];


}

