/**
 */
package uml.impl;

import org.eclipse.emf.common.util.EList;

import org.eclipse.emf.ecore.EClass;

import uml.DeployedArtifact;
import uml.Deployment;
import uml.DeploymentSpecification;
import uml.DeploymentTarget;
import uml.UmlPackage;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Deployment</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link uml.impl.DeploymentImpl#getConfiguration <em>Configuration</em>}</li>
 *   <li>{@link uml.impl.DeploymentImpl#getDeployedArtifact <em>Deployed Artifact</em>}</li>
 *   <li>{@link uml.impl.DeploymentImpl#getLocation <em>Location</em>}</li>
 * </ul>
 *
 * @generated
 */
public class DeploymentImpl extends DependencyImpl implements Deployment {
	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected DeploymentImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return UmlPackage.eINSTANCE.getDeployment();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<DeploymentSpecification> getConfiguration() {
		return (EList<DeploymentSpecification>)eGet(UmlPackage.eINSTANCE.getDeployment_Configuration(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<DeployedArtifact> getDeployedArtifact() {
		return (EList<DeployedArtifact>)eGet(UmlPackage.eINSTANCE.getDeployment_DeployedArtifact(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public DeploymentTarget getLocation() {
		return (DeploymentTarget)eGet(UmlPackage.eINSTANCE.getDeployment_Location(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setLocation(DeploymentTarget newLocation) {
		eSet(UmlPackage.eINSTANCE.getDeployment_Location(), newLocation);
	}

} //DeploymentImpl
