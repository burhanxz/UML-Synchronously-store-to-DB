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

import uml.Activity;
import uml.ActivityEdge;
import uml.ActivityGroup;
import uml.ActivityNode;
import uml.ActivityPartition;
import uml.StructuredActivityNode;
import uml.UmlPackage;
import uml.Variable;

import uml.util.UmlValidator;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Activity</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link uml.impl.ActivityImpl#getOwnedGroup <em>Owned Group</em>}</li>
 *   <li>{@link uml.impl.ActivityImpl#getEdge <em>Edge</em>}</li>
 *   <li>{@link uml.impl.ActivityImpl#getNode <em>Node</em>}</li>
 *   <li>{@link uml.impl.ActivityImpl#getVariable <em>Variable</em>}</li>
 *   <li>{@link uml.impl.ActivityImpl#getGroup <em>Group</em>}</li>
 *   <li>{@link uml.impl.ActivityImpl#getOwnedNode <em>Owned Node</em>}</li>
 *   <li>{@link uml.impl.ActivityImpl#isIsReadOnly <em>Is Read Only</em>}</li>
 *   <li>{@link uml.impl.ActivityImpl#isIsSingleExecution <em>Is Single Execution</em>}</li>
 *   <li>{@link uml.impl.ActivityImpl#getPartition <em>Partition</em>}</li>
 *   <li>{@link uml.impl.ActivityImpl#getStructuredNode <em>Structured Node</em>}</li>
 * </ul>
 *
 * @generated
 */
public class ActivityImpl extends BehaviorImpl implements Activity {
	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected ActivityImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return UmlPackage.eINSTANCE.getActivity();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<ActivityGroup> getOwnedGroup() {
		return (EList<ActivityGroup>)eGet(UmlPackage.eINSTANCE.getActivity_OwnedGroup(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<ActivityEdge> getEdge() {
		return (EList<ActivityEdge>)eGet(UmlPackage.eINSTANCE.getActivity_Edge(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<ActivityNode> getNode() {
		return (EList<ActivityNode>)eGet(UmlPackage.eINSTANCE.getActivity_Node(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<Variable> getVariable() {
		return (EList<Variable>)eGet(UmlPackage.eINSTANCE.getActivity_Variable(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<ActivityGroup> getGroup() {
		return (EList<ActivityGroup>)eGet(UmlPackage.eINSTANCE.getActivity_Group(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<ActivityNode> getOwnedNode() {
		return (EList<ActivityNode>)eGet(UmlPackage.eINSTANCE.getActivity_OwnedNode(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean isIsReadOnly() {
		return (Boolean)eGet(UmlPackage.eINSTANCE.getActivity_IsReadOnly(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setIsReadOnly(boolean newIsReadOnly) {
		eSet(UmlPackage.eINSTANCE.getActivity_IsReadOnly(), newIsReadOnly);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean isIsSingleExecution() {
		return (Boolean)eGet(UmlPackage.eINSTANCE.getActivity_IsSingleExecution(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setIsSingleExecution(boolean newIsSingleExecution) {
		eSet(UmlPackage.eINSTANCE.getActivity_IsSingleExecution(), newIsSingleExecution);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<ActivityPartition> getPartition() {
		return (EList<ActivityPartition>)eGet(UmlPackage.eINSTANCE.getActivity_Partition(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<StructuredActivityNode> getStructuredNode() {
		return (EList<StructuredActivityNode>)eGet(UmlPackage.eINSTANCE.getActivity_StructuredNode(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean maximum_one_parameter_node(DiagnosticChain diagnostics, Map<Object, Object> context) {
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
						 UmlValidator.ACTIVITY__MAXIMUM_ONE_PARAMETER_NODE,
						 EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", new Object[] { "maximum_one_parameter_node", EObjectValidator.getObjectLabel(this, context) }),
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
	public boolean maximum_two_parameter_nodes(DiagnosticChain diagnostics, Map<Object, Object> context) {
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
						 UmlValidator.ACTIVITY__MAXIMUM_TWO_PARAMETER_NODES,
						 EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", new Object[] { "maximum_two_parameter_nodes", EObjectValidator.getObjectLabel(this, context) }),
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
	@Override
	@SuppressWarnings("unchecked")
	public Object eInvoke(int operationID, EList<?> arguments) throws InvocationTargetException {
		switch (operationID) {
			case UmlPackage.ACTIVITY___MAXIMUM_ONE_PARAMETER_NODE__DIAGNOSTICCHAIN_MAP:
				return maximum_one_parameter_node((DiagnosticChain)arguments.get(0), (Map<Object, Object>)arguments.get(1));
			case UmlPackage.ACTIVITY___MAXIMUM_TWO_PARAMETER_NODES__DIAGNOSTICCHAIN_MAP:
				return maximum_two_parameter_nodes((DiagnosticChain)arguments.get(0), (Map<Object, Object>)arguments.get(1));
		}
		return super.eInvoke(operationID, arguments);
	}

} //ActivityImpl
