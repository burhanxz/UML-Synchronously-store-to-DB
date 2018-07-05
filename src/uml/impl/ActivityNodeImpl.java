/**
 */
package uml.impl;

import java.lang.reflect.InvocationTargetException;

import org.eclipse.emf.common.util.EList;

import org.eclipse.emf.ecore.EClass;

import uml.Activity;
import uml.ActivityContent;
import uml.ActivityEdge;
import uml.ActivityGroup;
import uml.ActivityNode;
import uml.ActivityPartition;
import uml.InterruptibleActivityRegion;
import uml.StructuredActivityNode;
import uml.UmlPackage;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Activity Node</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link uml.impl.ActivityNodeImpl#getActivity <em>Activity</em>}</li>
 *   <li>{@link uml.impl.ActivityNodeImpl#getInGroup <em>In Group</em>}</li>
 *   <li>{@link uml.impl.ActivityNodeImpl#getInInterruptibleRegion <em>In Interruptible Region</em>}</li>
 *   <li>{@link uml.impl.ActivityNodeImpl#getInStructuredNode <em>In Structured Node</em>}</li>
 *   <li>{@link uml.impl.ActivityNodeImpl#getIncoming <em>Incoming</em>}</li>
 *   <li>{@link uml.impl.ActivityNodeImpl#getOutgoing <em>Outgoing</em>}</li>
 *   <li>{@link uml.impl.ActivityNodeImpl#getRedefinedNode <em>Redefined Node</em>}</li>
 *   <li>{@link uml.impl.ActivityNodeImpl#getInPartition <em>In Partition</em>}</li>
 * </ul>
 *
 * @generated
 */
public abstract class ActivityNodeImpl extends RedefinableElementImpl implements ActivityNode {
	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected ActivityNodeImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return UmlPackage.eINSTANCE.getActivityNode();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Activity getActivity() {
		return (Activity)eGet(UmlPackage.eINSTANCE.getActivityNode_Activity(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setActivity(Activity newActivity) {
		eSet(UmlPackage.eINSTANCE.getActivityNode_Activity(), newActivity);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<ActivityGroup> getInGroup() {
		return (EList<ActivityGroup>)eGet(UmlPackage.eINSTANCE.getActivityNode_InGroup(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<InterruptibleActivityRegion> getInInterruptibleRegion() {
		return (EList<InterruptibleActivityRegion>)eGet(UmlPackage.eINSTANCE.getActivityNode_InInterruptibleRegion(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public StructuredActivityNode getInStructuredNode() {
		return (StructuredActivityNode)eGet(UmlPackage.eINSTANCE.getActivityNode_InStructuredNode(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setInStructuredNode(StructuredActivityNode newInStructuredNode) {
		eSet(UmlPackage.eINSTANCE.getActivityNode_InStructuredNode(), newInStructuredNode);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<ActivityEdge> getIncoming() {
		return (EList<ActivityEdge>)eGet(UmlPackage.eINSTANCE.getActivityNode_Incoming(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<ActivityEdge> getOutgoing() {
		return (EList<ActivityEdge>)eGet(UmlPackage.eINSTANCE.getActivityNode_Outgoing(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<ActivityNode> getRedefinedNode() {
		return (EList<ActivityNode>)eGet(UmlPackage.eINSTANCE.getActivityNode_RedefinedNode(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<ActivityPartition> getInPartition() {
		return (EList<ActivityPartition>)eGet(UmlPackage.eINSTANCE.getActivityNode_InPartition(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Activity containingActivity() {
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
	public int eDerivedOperationID(int baseOperationID, Class<?> baseClass) {
		if (baseClass == ActivityContent.class) {
			switch (baseOperationID) {
				case UmlPackage.ACTIVITY_CONTENT___CONTAINING_ACTIVITY: return UmlPackage.ACTIVITY_NODE___CONTAINING_ACTIVITY;
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
	public Object eInvoke(int operationID, EList<?> arguments) throws InvocationTargetException {
		switch (operationID) {
			case UmlPackage.ACTIVITY_NODE___CONTAINING_ACTIVITY:
				return containingActivity();
		}
		return super.eInvoke(operationID, arguments);
	}

} //ActivityNodeImpl
