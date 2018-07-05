/**
 */
package sysml.portandflows.impl;

import org.eclipse.emf.ecore.EClass;

import org.eclipse.emf.ecore.impl.EStoreEObjectImpl;

import sysml.portandflows.FlowSpecification;
import sysml.portandflows.PortandflowsPackage;

import uml.Interface;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Flow Specification</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link sysml.portandflows.impl.FlowSpecificationImpl#getBase_Interface <em>Base Interface</em>}</li>
 * </ul>
 *
 * @generated
 */
public class FlowSpecificationImpl extends EStoreEObjectImpl implements FlowSpecification {
	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected FlowSpecificationImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return PortandflowsPackage.Literals.FLOW_SPECIFICATION;
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
	public Interface getBase_Interface() {
		return (Interface)eGet(PortandflowsPackage.Literals.FLOW_SPECIFICATION__BASE_INTERFACE, true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setBase_Interface(Interface newBase_Interface) {
		eSet(PortandflowsPackage.Literals.FLOW_SPECIFICATION__BASE_INTERFACE, newBase_Interface);
	}

} //FlowSpecificationImpl
