/**
 */
package uml.impl;

import org.eclipse.emf.ecore.EClass;

import uml.LiteralReal;
import uml.UmlPackage;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Literal Real</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link uml.impl.LiteralRealImpl#getValue <em>Value</em>}</li>
 * </ul>
 *
 * @generated
 */
public class LiteralRealImpl extends LiteralSpecificationImpl implements LiteralReal {
	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected LiteralRealImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return UmlPackage.eINSTANCE.getLiteralReal();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public double getValue() {
		return (Double)eGet(UmlPackage.eINSTANCE.getLiteralReal_Value(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setValue(double newValue) {
		eSet(UmlPackage.eINSTANCE.getLiteralReal_Value(), newValue);
	}

} //LiteralRealImpl
