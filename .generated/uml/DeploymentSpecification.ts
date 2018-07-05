/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Deployment Specification</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A deployment specification specifies a set of properties that determine execution parameters of a component artifact that is deployed on a node. A deployment specification can be aimed at a specific type of container. An artifact that reifies or implements deployment specification properties is a deployment descriptor.
     * <p>From package UML::Deployments.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.DeploymentSpecification#getDeploymentLocation}</li>
     * <li>{@link uml.DeploymentSpecification#getExecutionLocation}</li>
     * <li>{@link uml.DeploymentSpecification#getDeployment}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getDeploymentSpecification()
     * @model
     * @generated
     * @class
     */
    export interface DeploymentSpecification extends uml.Artifact {
        /**
         * Returns the value of the '<em><b>Deployment Location</b></em>' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The location where an Artifact is deployed onto a Node. This is typically a 'directory' or 'memory address.'
         * <p>From package UML::Deployments.</p>
         * <!-- end-model-doc -->
         * @return {string} the value of the '<em>Deployment Location</em>' attribute.
         * @see #isSetDeploymentLocation()
         * @see #unsetDeploymentLocation()
         * @see #setDeploymentLocation(String)
         * @see uml.UmlPackage#getDeploymentSpecification_DeploymentLocation()
         * @model unsettable="true" dataType="types.String" ordered="false"
         * @generated
         */
        getDeploymentLocation() : string;

        /**
         * Sets the value of the '{@link uml.DeploymentSpecification#getDeploymentLocation}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {string} value the new value of the '<em>Deployment Location</em>' attribute.
         * @see #isSetDeploymentLocation()
         * @see #unsetDeploymentLocation()
         * @see #getDeploymentLocation()
         * @generated
         */
        setDeploymentLocation(value : string);

        /**
         * Unsets the value of the '{@link uml.DeploymentSpecification#getDeploymentLocation}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #isSetDeploymentLocation()
         * @see #getDeploymentLocation()
         * @see #setDeploymentLocation(String)
         * @generated
         */
        unsetDeploymentLocation();

        /**
         * Returns whether the value of the '{@link uml.DeploymentSpecification#getDeploymentLocation}' attribute is set.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {boolean} whether the value of the '<em>Deployment Location</em>' attribute is set.
         * @see #unsetDeploymentLocation()
         * @see #getDeploymentLocation()
         * @see #setDeploymentLocation(String)
         * @generated
         */
        isSetDeploymentLocation() : boolean;

        /**
         * Returns the value of the '<em><b>Execution Location</b></em>' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The location where a component Artifact executes. This may be a local or remote location.
         * <p>From package UML::Deployments.</p>
         * <!-- end-model-doc -->
         * @return {string} the value of the '<em>Execution Location</em>' attribute.
         * @see #isSetExecutionLocation()
         * @see #unsetExecutionLocation()
         * @see #setExecutionLocation(String)
         * @see uml.UmlPackage#getDeploymentSpecification_ExecutionLocation()
         * @model unsettable="true" dataType="types.String" ordered="false"
         * @generated
         */
        getExecutionLocation() : string;

        /**
         * Sets the value of the '{@link uml.DeploymentSpecification#getExecutionLocation}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {string} value the new value of the '<em>Execution Location</em>' attribute.
         * @see #isSetExecutionLocation()
         * @see #unsetExecutionLocation()
         * @see #getExecutionLocation()
         * @generated
         */
        setExecutionLocation(value : string);

        /**
         * Unsets the value of the '{@link uml.DeploymentSpecification#getExecutionLocation}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #isSetExecutionLocation()
         * @see #getExecutionLocation()
         * @see #setExecutionLocation(String)
         * @generated
         */
        unsetExecutionLocation();

        /**
         * Returns whether the value of the '{@link uml.DeploymentSpecification#getExecutionLocation}' attribute is set.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {boolean} whether the value of the '<em>Execution Location</em>' attribute is set.
         * @see #unsetExecutionLocation()
         * @see #getExecutionLocation()
         * @see #setExecutionLocation(String)
         * @generated
         */
        isSetExecutionLocation() : boolean;

        /**
         * Returns the value of the '<em><b>Deployment</b></em>' container reference.
         * It is bidirectional and its opposite is '{@link uml.Deployment#getConfiguration}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The deployment with which the DeploymentSpecification is associated.
         * <p>From package UML::Deployments.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Deployment</em>' container reference.
         * @see #setDeployment(Deployment)
         * @see uml.UmlPackage#getDeploymentSpecification_Deployment()
         * @see uml.Deployment#getConfiguration
         * @model opposite="configuration" transient="false" ordered="false"
         * @generated
         */
        getDeployment() : uml.Deployment;

        /**
         * Sets the value of the '{@link uml.DeploymentSpecification#getDeployment}' container reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Deployment</em>' container reference.
         * @see #getDeployment()
         * @generated
         */
        setDeployment(value : uml.Deployment);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The DeploymentTarget of a DeploymentSpecification is a kind of ExecutionEnvironment.
         * deployment->forAll (location.oclIsKindOf(ExecutionEnvironment))
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        deployment_target(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The deployedElements of a DeploymentTarget that are involved in a Deployment that has an associated Deployment-Specification is a kind of Component (i.e., the configured components).
         * deployment->forAll (location.deployedElement->forAll (oclIsKindOf(Component)))
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        deployed_elements(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

