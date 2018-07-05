/**
 */
package uml.impl;

import org.eclipse.emf.ecore.EClass;

import uml.NamedElement;
import uml.TimeObservation;
import uml.UmlPackage;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Time Observation</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link uml.impl.TimeObservationImpl#getEvent <em>Event</em>}</li>
 *   <li>{@link uml.impl.TimeObservationImpl#isFirstEvent <em>First Event</em>}</li>
 * </ul>
 *
 * @generated
 */
public class TimeObservationImpl extends ObservationImpl implements TimeObservation {
	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected TimeObservationImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return UmlPackage.eINSTANCE.getTimeObservation();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public NamedElement getEvent() {
		return (NamedElement)eGet(UmlPackage.eINSTANCE.getTimeObservation_Event(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setEvent(NamedElement newEvent) {
		eSet(UmlPackage.eINSTANCE.getTimeObservation_Event(), newEvent);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean isFirstEvent() {
		return (Boolean)eGet(UmlPackage.eINSTANCE.getTimeObservation_FirstEvent(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setFirstEvent(boolean newFirstEvent) {
		eSet(UmlPackage.eINSTANCE.getTimeObservation_FirstEvent(), newFirstEvent);
	}

} //TimeObservationImpl
