/**
 */
package standard.impl;

import org.eclipse.emf.ecore.EClass;

import org.eclipse.emf.ecore.impl.EStoreEObjectImpl;

import standard.Derive;
import standard.StandardPackage;

import uml.Abstraction;
import uml.ValueSpecification;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Derive</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link standard.impl.DeriveImpl#getComputation <em>Computation</em>}</li>
 *   <li>{@link standard.impl.DeriveImpl#getBase_Abstraction <em>Base Abstraction</em>}</li>
 * </ul>
 *
 * @generated
 */
public class DeriveImpl extends EStoreEObjectImpl implements Derive {
	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected DeriveImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return StandardPackage.Literals.DERIVE;
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
	public ValueSpecification getComputation() {
		return (ValueSpecification)eGet(StandardPackage.Literals.DERIVE__COMPUTATION, true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setComputation(ValueSpecification newComputation) {
		eSet(StandardPackage.Literals.DERIVE__COMPUTATION, newComputation);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Abstraction getBase_Abstraction() {
		return (Abstraction)eGet(StandardPackage.Literals.DERIVE__BASE_ABSTRACTION, true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setBase_Abstraction(Abstraction newBase_Abstraction) {
		eSet(StandardPackage.Literals.DERIVE__BASE_ABSTRACTION, newBase_Abstraction);
	}

} //DeriveImpl
