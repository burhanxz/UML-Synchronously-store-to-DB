/**
 */
package sysml.portandflows.impl;

import org.eclipse.emf.ecore.EClass;

import org.eclipse.emf.ecore.impl.EStoreEObjectImpl;

import sysml.portandflows.ItemFlow;
import sysml.portandflows.PortandflowsPackage;

import uml.InformationFlow;
import uml.Property;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Item Flow</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link sysml.portandflows.impl.ItemFlowImpl#getBase_InformationFlow <em>Base Information Flow</em>}</li>
 *   <li>{@link sysml.portandflows.impl.ItemFlowImpl#getItemProperty <em>Item Property</em>}</li>
 * </ul>
 *
 * @generated
 */
public class ItemFlowImpl extends EStoreEObjectImpl implements ItemFlow {
	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected ItemFlowImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return PortandflowsPackage.Literals.ITEM_FLOW;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected int eStaticFeatureCount() {
		return 0;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public InformationFlow getBase_InformationFlow() {
		return (InformationFlow)eGet(PortandflowsPackage.Literals.ITEM_FLOW__BASE_INFORMATION_FLOW, true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setBase_InformationFlow(InformationFlow newBase_InformationFlow) {
		eSet(PortandflowsPackage.Literals.ITEM_FLOW__BASE_INFORMATION_FLOW, newBase_InformationFlow);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Property getItemProperty() {
		return (Property)eGet(PortandflowsPackage.Literals.ITEM_FLOW__ITEM_PROPERTY, true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setItemProperty(Property newItemProperty) {
		eSet(PortandflowsPackage.Literals.ITEM_FLOW__ITEM_PROPERTY, newItemProperty);
	}

} //ItemFlowImpl
