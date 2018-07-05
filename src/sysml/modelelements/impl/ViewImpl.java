/**
 */
package sysml.modelelements.impl;

import org.eclipse.emf.ecore.EClass;

import org.eclipse.emf.ecore.impl.EStoreEObjectImpl;

import sysml.modelelements.ModelelementsPackage;
import sysml.modelelements.View;
import sysml.modelelements.ViewPoint;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>View</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link sysml.modelelements.impl.ViewImpl#getViewPoint <em>View Point</em>}</li>
 *   <li>{@link sysml.modelelements.impl.ViewImpl#getBase_Package <em>Base Package</em>}</li>
 * </ul>
 *
 * @generated
 */
public class ViewImpl extends EStoreEObjectImpl implements View {
	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected ViewImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return ModelelementsPackage.Literals.VIEW;
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
	public ViewPoint getViewPoint() {
		return (ViewPoint)eGet(ModelelementsPackage.Literals.VIEW__VIEW_POINT, true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public uml.Package getBase_Package() {
		return (uml.Package)eGet(ModelelementsPackage.Literals.VIEW__BASE_PACKAGE, true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setBase_Package(uml.Package newBase_Package) {
		eSet(ModelelementsPackage.Literals.VIEW__BASE_PACKAGE, newBase_Package);
	}

} //ViewImpl
