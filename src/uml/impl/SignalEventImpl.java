/**
 */
package uml.impl;

import org.eclipse.emf.ecore.EClass;

import uml.Signal;
import uml.SignalEvent;
import uml.UmlPackage;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Signal Event</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link uml.impl.SignalEventImpl#getSignal <em>Signal</em>}</li>
 * </ul>
 *
 * @generated
 */
public class SignalEventImpl extends MessageEventImpl implements SignalEvent {
	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected SignalEventImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return UmlPackage.eINSTANCE.getSignalEvent();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Signal getSignal() {
		return (Signal)eGet(UmlPackage.eINSTANCE.getSignalEvent_Signal(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setSignal(Signal newSignal) {
		eSet(UmlPackage.eINSTANCE.getSignalEvent_Signal(), newSignal);
	}

} //SignalEventImpl
