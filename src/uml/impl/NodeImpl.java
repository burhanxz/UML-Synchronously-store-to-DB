/**
 */
package uml.impl;

import java.lang.reflect.InvocationTargetException;

import java.util.Map;

import org.eclipse.emf.common.util.BasicDiagnostic;
import org.eclipse.emf.common.util.Diagnostic;
import org.eclipse.emf.common.util.DiagnosticChain;
import org.eclipse.emf.common.util.EList;

import org.eclipse.emf.ecore.EClass;

import org.eclipse.emf.ecore.plugin.EcorePlugin;

import org.eclipse.emf.ecore.util.EObjectValidator;

import uml.AggregationKind;
import uml.CommunicationPath;
import uml.Deployment;
import uml.DeploymentTarget;
import uml.Node;
import uml.PackageableElement;
import uml.UmlPackage;

import uml.util.UmlValidator;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Node</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link uml.impl.NodeImpl#getDeployedElement <em>Deployed Element</em>}</li>
 *   <li>{@link uml.impl.NodeImpl#getDeployment <em>Deployment</em>}</li>
 *   <li>{@link uml.impl.NodeImpl#getNestedNode <em>Nested Node</em>}</li>
 * </ul>
 *
 * @generated
 */
public class NodeImpl extends ClassImpl implements Node {
	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected NodeImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return UmlPackage.eINSTANCE.getNode();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<PackageableElement> getDeployedElement() {
		return (EList<PackageableElement>)eGet(UmlPackage.eINSTANCE.getDeploymentTarget_DeployedElement(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<Deployment> getDeployment() {
		return (EList<Deployment>)eGet(UmlPackage.eINSTANCE.getDeploymentTarget_Deployment(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<Node> getNestedNode() {
		return (EList<Node>)eGet(UmlPackage.eINSTANCE.getNode_NestedNode(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean internal_structure(DiagnosticChain diagnostics, Map<Object, Object> context) {
		// TODO: implement this method
		// -> specify the condition that violates the invariant
		// -> verify the details of the diagnostic, including severity and message
		// Ensure that you remove @generated or mark it @generated NOT
		if (false) {
			if (diagnostics != null) {
				diagnostics.add
					(new BasicDiagnostic
						(Diagnostic.ERROR,
						 UmlValidator.DIAGNOSTIC_SOURCE,
						 UmlValidator.NODE__INTERNAL_STRUCTURE,
						 EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", new Object[] { "internal_structure", EObjectValidator.getObjectLabel(this, context) }),
						 new Object [] { this }));
			}
			return false;
		}
		return true;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public CommunicationPath createCommunicationPath(boolean end1IsNavigable, AggregationKind end1Aggregation, String end1Name, int end1Lower, int end1Upper, Node end1Node, boolean end2IsNavigable, AggregationKind end2Aggregation, String end2Name, int end2Lower, int end2Upper) {
		// TODO: implement this method
		// Ensure that you remove @generated or mark it @generated NOT
		throw new UnsupportedOperationException();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public EList<CommunicationPath> getCommunicationPaths() {
		// TODO: implement this method
		// Ensure that you remove @generated or mark it @generated NOT
		throw new UnsupportedOperationException();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public EList<PackageableElement> getDeployedElements() {
		// TODO: implement this method
		// Ensure that you remove @generated or mark it @generated NOT
		throw new UnsupportedOperationException();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public int eBaseStructuralFeatureID(int derivedFeatureID, Class<?> baseClass) {
		if (baseClass == DeploymentTarget.class) {
			switch (derivedFeatureID) {
				case UmlPackage.NODE__DEPLOYED_ELEMENT: return UmlPackage.DEPLOYMENT_TARGET__DEPLOYED_ELEMENT;
				case UmlPackage.NODE__DEPLOYMENT: return UmlPackage.DEPLOYMENT_TARGET__DEPLOYMENT;
				default: return -1;
			}
		}
		return super.eBaseStructuralFeatureID(derivedFeatureID, baseClass);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public int eDerivedStructuralFeatureID(int baseFeatureID, Class<?> baseClass) {
		if (baseClass == DeploymentTarget.class) {
			switch (baseFeatureID) {
				case UmlPackage.DEPLOYMENT_TARGET__DEPLOYED_ELEMENT: return UmlPackage.NODE__DEPLOYED_ELEMENT;
				case UmlPackage.DEPLOYMENT_TARGET__DEPLOYMENT: return UmlPackage.NODE__DEPLOYMENT;
				default: return -1;
			}
		}
		return super.eDerivedStructuralFeatureID(baseFeatureID, baseClass);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public int eDerivedOperationID(int baseOperationID, Class<?> baseClass) {
		if (baseClass == DeploymentTarget.class) {
			switch (baseOperationID) {
				case UmlPackage.DEPLOYMENT_TARGET___GET_DEPLOYED_ELEMENTS: return UmlPackage.NODE___GET_DEPLOYED_ELEMENTS;
				default: return -1;
			}
		}
		return super.eDerivedOperationID(baseOperationID, baseClass);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	@SuppressWarnings("unchecked")
	public Object eInvoke(int operationID, EList<?> arguments) throws InvocationTargetException {
		switch (operationID) {
			case UmlPackage.NODE___INTERNAL_STRUCTURE__DIAGNOSTICCHAIN_MAP:
				return internal_structure((DiagnosticChain)arguments.get(0), (Map<Object, Object>)arguments.get(1));
			case UmlPackage.NODE___CREATE_COMMUNICATION_PATH__BOOLEAN_AGGREGATIONKIND_STRING_INT_INT_NODE_BOOLEAN_AGGREGATIONKIND_STRING_INT_INT:
				return createCommunicationPath((Boolean)arguments.get(0), (AggregationKind)arguments.get(1), (String)arguments.get(2), (Integer)arguments.get(3), (Integer)arguments.get(4), (Node)arguments.get(5), (Boolean)arguments.get(6), (AggregationKind)arguments.get(7), (String)arguments.get(8), (Integer)arguments.get(9), (Integer)arguments.get(10));
			case UmlPackage.NODE___GET_COMMUNICATION_PATHS:
				return getCommunicationPaths();
			case UmlPackage.NODE___GET_DEPLOYED_ELEMENTS:
				return getDeployedElements();
		}
		return super.eInvoke(operationID, arguments);
	}

} //NodeImpl
