/**
 */
package sysml.modelelements.impl;

import org.eclipse.emf.common.util.EList;

import org.eclipse.emf.ecore.EClass;

import org.eclipse.emf.ecore.impl.EStoreEObjectImpl;

import sysml.modelelements.ModelelementsPackage;
import sysml.modelelements.ViewPoint;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>View Point</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link sysml.modelelements.impl.ViewPointImpl#getBase_Class <em>Base Class</em>}</li>
 *   <li>{@link sysml.modelelements.impl.ViewPointImpl#getStakeHolders <em>Stake Holders</em>}</li>
 *   <li>{@link sysml.modelelements.impl.ViewPointImpl#getPurpose <em>Purpose</em>}</li>
 *   <li>{@link sysml.modelelements.impl.ViewPointImpl#getConcerns <em>Concerns</em>}</li>
 *   <li>{@link sysml.modelelements.impl.ViewPointImpl#getLanguages <em>Languages</em>}</li>
 *   <li>{@link sysml.modelelements.impl.ViewPointImpl#getMethods <em>Methods</em>}</li>
 * </ul>
 *
 * @generated
 */
public class ViewPointImpl extends EStoreEObjectImpl implements ViewPoint {
	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected ViewPointImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return ModelelementsPackage.Literals.VIEW_POINT;
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
	public uml.Class getBase_Class() {
		return (uml.Class)eGet(ModelelementsPackage.Literals.VIEW_POINT__BASE_CLASS, true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setBase_Class(uml.Class newBase_Class) {
		eSet(ModelelementsPackage.Literals.VIEW_POINT__BASE_CLASS, newBase_Class);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<String> getStakeHolders() {
		return (EList<String>)eGet(ModelelementsPackage.Literals.VIEW_POINT__STAKE_HOLDERS, true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public String getPurpose() {
		return (String)eGet(ModelelementsPackage.Literals.VIEW_POINT__PURPOSE, true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setPurpose(String newPurpose) {
		eSet(ModelelementsPackage.Literals.VIEW_POINT__PURPOSE, newPurpose);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<String> getConcerns() {
		return (EList<String>)eGet(ModelelementsPackage.Literals.VIEW_POINT__CONCERNS, true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<String> getLanguages() {
		return (EList<String>)eGet(ModelelementsPackage.Literals.VIEW_POINT__LANGUAGES, true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<String> getMethods() {
		return (EList<String>)eGet(ModelelementsPackage.Literals.VIEW_POINT__METHODS, true);
	}

} //ViewPointImpl
