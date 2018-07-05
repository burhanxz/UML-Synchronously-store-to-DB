/**
 */
package sysml.portandflows.impl;

import java.lang.reflect.InvocationTargetException;

import org.eclipse.emf.common.util.EList;

import org.eclipse.emf.ecore.EClass;

import org.eclipse.emf.ecore.impl.EStoreEObjectImpl;

import sysml.portandflows.FlowDirection;
import sysml.portandflows.FlowProperty;
import sysml.portandflows.PortandflowsPackage;

import uml.Image;
import uml.Property;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Flow Property</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link sysml.portandflows.impl.FlowPropertyImpl#getBase_Property <em>Base Property</em>}</li>
 *   <li>{@link sysml.portandflows.impl.FlowPropertyImpl#getDirection <em>Direction</em>}</li>
 * </ul>
 *
 * @generated
 */
public class FlowPropertyImpl extends EStoreEObjectImpl implements FlowProperty {
	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected FlowPropertyImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return PortandflowsPackage.Literals.FLOW_PROPERTY;
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
	public Property getBase_Property() {
		return (Property)eGet(PortandflowsPackage.Literals.FLOW_PROPERTY__BASE_PROPERTY, true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setBase_Property(Property newBase_Property) {
		eSet(PortandflowsPackage.Literals.FLOW_PROPERTY__BASE_PROPERTY, newBase_Property);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public FlowDirection getDirection() {
		return (FlowDirection)eGet(PortandflowsPackage.Literals.FLOW_PROPERTY__DIRECTION, true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setDirection(FlowDirection newDirection) {
		eSet(PortandflowsPackage.Literals.FLOW_PROPERTY__DIRECTION, newDirection);
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
			case PortandflowsPackage.FLOW_PROPERTY___GET_ICON:
				return getIcon();
		}
		return super.eInvoke(operationID, arguments);
	}

} //FlowPropertyImpl
