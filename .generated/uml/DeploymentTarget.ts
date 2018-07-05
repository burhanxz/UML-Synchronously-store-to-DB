/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Deployment Target</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A deployment target is the location for a deployed artifact.
     * <p>From package UML::Deployments.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.DeploymentTarget#getDeployedElement}</li>
     * <li>{@link uml.DeploymentTarget#getDeployment}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getDeploymentTarget()
     * @model abstract="true"
     * @generated
     * @class
     */
    export interface DeploymentTarget extends uml.NamedElement {
        /**
         * Returns the value of the '<em><b>Deployed Element</b></em>' reference list.
         * The list contents are of type {@link uml.PackageableElement}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The set of elements that are manifested in an Artifact that is involved in Deployment to a DeploymentTarget.
         * <p>From package UML::Deployments.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Deployed Element</em>' reference list.
         * @see uml.UmlPackage#getDeploymentTarget_DeployedElement()
         * @model transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getDeployedElement() : org.eclipse.emf.common.util.EList<uml.PackageableElement>;

        /**
         * Returns the value of the '<em><b>Deployment</b></em>' containment reference list.
         * The list contents are of type {@link uml.Deployment}.
         * It is bidirectional and its opposite is '{@link uml.Deployment#getLocation}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The set of Deployments for a DeploymentTarget.
         * <p>From package UML::Deployments.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Deployment</em>' containment reference list.
         * @see uml.UmlPackage#getDeploymentTarget_Deployment()
         * @see uml.Deployment#getLocation
         * @model opposite="location" containment="true" ordered="false"
         * @generated
         */
        getDeployment() : org.eclipse.emf.common.util.EList<uml.Deployment>;
    }
}

