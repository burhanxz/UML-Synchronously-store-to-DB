/**
 */
package sysml.portandflows.impl;

import java.lang.reflect.InvocationTargetException;

import org.eclipse.emf.common.util.EList;

import org.eclipse.emf.ecore.EClass;

import org.eclipse.emf.ecore.impl.EStoreEObjectImpl;

import sysml.portandflows.FlowDirection;
import sysml.portandflows.FlowPort;
import sysml.portandflows.PortandflowsPackage;

import uml.Image;
import uml.Port;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Flow Port</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link sysml.portandflows.impl.FlowPortImpl#getBase_Port <em>Base Port</em>}</li>
 *   <li>{@link sysml.portandflows.impl.FlowPortImpl#isIsAtomic <em>Is Atomic</em>}</li>
 *   <li>{@link sysml.portandflows.impl.FlowPortImpl#isIsConjugated <em>Is Conjugated</em>}</li>
 *   <li>{@link sysml.portandflows.impl.FlowPortImpl#getDirection <em>Direction</em>}</li>
 * </ul>
 *
 * @generated
 */
public class FlowPortImpl extends EStoreEObjectImpl implements FlowPort {
	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected FlowPortImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return PortandflowsPackage.Literals.FLOW_PORT;
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
	public Port getBase_Port() {
		return (Port)eGet(PortandflowsPackage.Literals.FLOW_PORT__BASE_PORT, true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setBase_Port(Port newBase_Port) {
		eSet(PortandflowsPackage.Literals.FLOW_PORT__BASE_PORT, newBase_Port);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean isIsAtomic() {
		return (Boolean)eGet(PortandflowsPackage.Literals.FLOW_PORT__IS_ATOMIC, true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean isIsConjugated() {
		return (Boolean)eGet(PortandflowsPackage.Literals.FLOW_PORT__IS_CONJUGATED, true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setIsConjugated(boolean newIsConjugated) {
		eSet(PortandflowsPackage.Literals.FLOW_PORT__IS_CONJUGATED, newIsConjugated);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public FlowDirection getDirection() {
		return (FlowDirection)eGet(PortandflowsPackage.Literals.FLOW_PORT__DIRECTION, true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setDirection(FlowDirection newDirection) {
		eSet(PortandflowsPackage.Literals.FLOW_PORT__DIRECTION, newDirection);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Image getIcon() {
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
	public Object eInvoke(int operationID, EList<?> arguments) throws InvocationTargetException {
		switch (operationID) {
			case PortandflowsPackage.FLOW_PORT___GET_ICON:
				return getIcon();
		}
		return super.eInvoke(operationID, arguments);
	}

} //FlowPortImpl
