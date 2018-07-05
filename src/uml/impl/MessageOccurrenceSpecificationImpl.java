/**
 */
package uml.impl;

import java.lang.reflect.InvocationTargetException;

import org.eclipse.emf.common.util.EList;

import org.eclipse.emf.ecore.EClass;

import uml.InteractionFragment;
import uml.Message;
import uml.MessageEnd;
import uml.MessageOccurrenceSpecification;
import uml.UmlPackage;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Message Occurrence Specification</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link uml.impl.MessageOccurrenceSpecificationImpl#getMessage <em>Message</em>}</li>
 * </ul>
 *
 * @generated
 */
public class MessageOccurrenceSpecificationImpl extends OccurrenceSpecificationImpl implements MessageOccurrenceSpecification {
	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected MessageOccurrenceSpecificationImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return UmlPackage.eINSTANCE.getMessageOccurrenceSpecification();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Message getMessage() {
		return (Message)eGet(UmlPackage.eINSTANCE.getMessageEnd_Message(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setMessage(Message newMessage) {
		eSet(UmlPackage.eINSTANCE.getMessageEnd_Message(), newMessage);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public EList<MessageEnd> oppositeEnd() {
		// TODO: implement this method
		// Ensure that you remove @generated or mark it @generated NOT
		throw new UnsupportedOperationException();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean isSend() {
		// TODO: implement this method
		// Ensure that you remove @generated or mark it @generated NOT
		throw new UnsupportedOperationException();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean isReceive() {
		// TODO: implement this method
		// Ensure that you remove @generated or mark it @generated NOT
		throw new UnsupportedOperationException();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public EList<InteractionFragment> enclosingFragment() {
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
		if (baseClass == MessageEnd.class) {
			switch (derivedFeatureID) {
				case UmlPackage.MESSAGE_OCCURRENCE_SPECIFICATION__MESSAGE: return UmlPackage.MESSAGE_END__MESSAGE;
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
		if (baseClass == MessageEnd.class) {
			switch (baseFeatureID) {
				case UmlPackage.MESSAGE_END__MESSAGE: return UmlPackage.MESSAGE_OCCURRENCE_SPECIFICATION__MESSAGE;
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
		if (baseClass == MessageEnd.class) {
			switch (baseOperationID) {
				case UmlPackage.MESSAGE_END___OPPOSITE_END: return UmlPackage.MESSAGE_OCCURRENCE_SPECIFICATION___OPPOSITE_END;
				case UmlPackage.MESSAGE_END___IS_SEND: return UmlPackage.MESSAGE_OCCURRENCE_SPECIFICATION___IS_SEND;
				case UmlPackage.MESSAGE_END___IS_RECEIVE: return UmlPackage.MESSAGE_OCCURRENCE_SPECIFICATION___IS_RECEIVE;
				case UmlPackage.MESSAGE_END___ENCLOSING_FRAGMENT: return UmlPackage.MESSAGE_OCCURRENCE_SPECIFICATION___ENCLOSING_FRAGMENT;
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
			case UmlPackage.MESSAGE_OCCURRENCE_SPECIFICATION___OPPOSITE_END:
				return oppositeEnd();
			case UmlPackage.MESSAGE_OCCURRENCE_SPECIFICATION___IS_SEND:
				return isSend();
			case UmlPackage.MESSAGE_OCCURRENCE_SPECIFICATION___IS_RECEIVE:
				return isReceive();
			case UmlPackage.MESSAGE_OCCURRENCE_SPECIFICATION___ENCLOSING_FRAGMENT:
				return enclosingFragment();
		}
		return super.eInvoke(operationID, arguments);
	}

} //MessageOccurrenceSpecificationImpl
