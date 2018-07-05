/**
 */
package uml.impl;

import org.eclipse.emf.ecore.EClass;

import uml.CallEvent;
import uml.Operation;
import uml.UmlPackage;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Call Event</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link uml.impl.CallEventImpl#getOperation <em>Operation</em>}</li>
 * </ul>
 *
 * @generated
 */
public class CallEventImpl extends MessageEventImpl implements CallEvent {
	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected CallEventImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return UmlPackage.eINSTANCE.getCallEvent();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Operation getOperation() {
		return (Operation)eGet(UmlPackage.eINSTANCE.getCallEvent_Operation(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setOperation(Operation newOperation) {
		eSet(UmlPackage.eINSTANCE.getCallEvent_Operation(), newOperation);
	}

} //CallEventImpl
