/**
 */
package uml.impl;

import java.lang.reflect.InvocationTargetException;

import org.eclipse.emf.common.util.EList;

import org.eclipse.emf.ecore.EClass;

import org.eclipse.emf.ecore.ENamedElement;
import org.eclipse.emf.ecore.EPackage;
import uml.NamedElement;
import uml.Profile;
import uml.ProfileApplication;
import uml.UmlPackage;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Profile Application</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link uml.impl.ProfileApplicationImpl#getAppliedProfile <em>Applied Profile</em>}</li>
 *   <li>{@link uml.impl.ProfileApplicationImpl#isIsStrict <em>Is Strict</em>}</li>
 *   <li>{@link uml.impl.ProfileApplicationImpl#getApplyingPackage <em>Applying Package</em>}</li>
 * </ul>
 *
 * @generated
 */
public class ProfileApplicationImpl extends DirectedRelationshipImpl implements ProfileApplication {
	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected ProfileApplicationImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return UmlPackage.eINSTANCE.getProfileApplication();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Profile getAppliedProfile() {
		return (Profile)eGet(UmlPackage.eINSTANCE.getProfileApplication_AppliedProfile(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setAppliedProfile(Profile newAppliedProfile) {
		eSet(UmlPackage.eINSTANCE.getProfileApplication_AppliedProfile(), newAppliedProfile);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean isIsStrict() {
		return (Boolean)eGet(UmlPackage.eINSTANCE.getProfileApplication_IsStrict(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setIsStrict(boolean newIsStrict) {
		eSet(UmlPackage.eINSTANCE.getProfileApplication_IsStrict(), newIsStrict);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public uml.Package getApplyingPackage() {
		return (uml.Package)eGet(UmlPackage.eINSTANCE.getProfileApplication_ApplyingPackage(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setApplyingPackage(uml.Package newApplyingPackage) {
		eSet(UmlPackage.eINSTANCE.getProfileApplication_ApplyingPackage(), newApplyingPackage);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public EPackage getAppliedDefinition() {
		// TODO: implement this method
		// Ensure that you remove @generated or mark it @generated NOT
		throw new UnsupportedOperationException();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public ENamedElement getAppliedDefinition(NamedElement namedElement) {
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
			case UmlPackage.PROFILE_APPLICATION___GET_APPLIED_DEFINITION:
				return getAppliedDefinition();
			case UmlPackage.PROFILE_APPLICATION___GET_APPLIED_DEFINITION__NAMEDELEMENT:
				return getAppliedDefinition((NamedElement)arguments.get(0));
		}
		return super.eInvoke(operationID, arguments);
	}

} //ProfileApplicationImpl
