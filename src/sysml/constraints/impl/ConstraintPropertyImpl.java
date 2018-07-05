/**
 */
package sysml.constraints.impl;

import org.eclipse.emf.ecore.EClass;

import org.eclipse.emf.ecore.impl.EStoreEObjectImpl;

import sysml.constraints.ConstraintProperty;
import sysml.constraints.ConstraintsPackage;

import uml.Property;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Constraint Property</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link sysml.constraints.impl.ConstraintPropertyImpl#getBase_Property <em>Base Property</em>}</li>
 * </ul>
 *
 * @generated
 */
public class ConstraintPropertyImpl extends EStoreEObjectImpl implements ConstraintProperty {
	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected ConstraintPropertyImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return ConstraintsPackage.Literals.CONSTRAINT_PROPERTY;
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
		return (Property)eGet(ConstraintsPackage.Literals.CONSTRAINT_PROPERTY__BASE_PROPERTY, true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setBase_Property(Property newBase_Property) {
		eSet(ConstraintsPackage.Literals.CONSTRAINT_PROPERTY__BASE_PROPERTY, newBase_Property);
	}

} //ConstraintPropertyImpl
