/**
 */
package uml.impl;

import org.eclipse.emf.ecore.EClass;

import uml.Interval;
import uml.UmlPackage;
import uml.ValueSpecification;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Interval</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link uml.impl.IntervalImpl#getMax <em>Max</em>}</li>
 *   <li>{@link uml.impl.IntervalImpl#getMin <em>Min</em>}</li>
 * </ul>
 *
 * @generated
 */
public class IntervalImpl extends ValueSpecificationImpl implements Interval {
	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected IntervalImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return UmlPackage.eINSTANCE.getInterval();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public ValueSpecification getMax() {
		return (ValueSpecification)eGet(UmlPackage.eINSTANCE.getInterval_Max(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setMax(ValueSpecification newMax) {
		eSet(UmlPackage.eINSTANCE.getInterval_Max(), newMax);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public ValueSpecification getMin() {
		return (ValueSpecification)eGet(UmlPackage.eINSTANCE.getInterval_Min(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setMin(ValueSpecification newMin) {
		eSet(UmlPackage.eINSTANCE.getInterval_Min(), newMin);
	}

} //IntervalImpl
