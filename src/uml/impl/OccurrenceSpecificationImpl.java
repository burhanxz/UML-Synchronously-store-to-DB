/**
 */
package uml.impl;

import java.lang.reflect.InvocationTargetException;

import org.eclipse.emf.common.util.EList;

import org.eclipse.emf.ecore.EClass;

import uml.GeneralOrdering;
import uml.Lifeline;
import uml.OccurrenceSpecification;
import uml.UmlPackage;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Occurrence Specification</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link uml.impl.OccurrenceSpecificationImpl#getToAfter <em>To After</em>}</li>
 *   <li>{@link uml.impl.OccurrenceSpecificationImpl#getToBefore <em>To Before</em>}</li>
 * </ul>
 *
 * @generated
 */
public class OccurrenceSpecificationImpl extends InteractionFragmentImpl implements OccurrenceSpecification {
	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected OccurrenceSpecificationImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return UmlPackage.eINSTANCE.getOccurrenceSpecification();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<GeneralOrdering> getToAfter() {
		return (EList<GeneralOrdering>)eGet(UmlPackage.eINSTANCE.getOccurrenceSpecification_ToAfter(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<GeneralOrdering> getToBefore() {
		return (EList<GeneralOrdering>)eGet(UmlPackage.eINSTANCE.getOccurrenceSpecification_ToBefore(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Lifeline getCovered() {
		// TODO: implement this method
		// Ensure that you remove @generated or mark it @generated NOT
		throw new UnsupportedOperationException();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setCovered(Lifeline value) {
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
			case UmlPackage.OCCURRENCE_SPECIFICATION___GET_COVERED:
				return getCovered();
			case UmlPackage.OCCURRENCE_SPECIFICATION___SET_COVERED__LIFELINE:
				setCovered((Lifeline)arguments.get(0));
				return null;
		}
		return super.eInvoke(operationID, arguments);
	}

} //OccurrenceSpecificationImpl
