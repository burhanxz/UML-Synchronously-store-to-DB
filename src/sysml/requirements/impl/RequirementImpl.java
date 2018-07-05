/**
 */
package sysml.requirements.impl;

import org.eclipse.emf.common.util.EList;

import org.eclipse.emf.ecore.EClass;

import org.eclipse.emf.ecore.impl.EStoreEObjectImpl;

import sysml.requirements.Requirement;
import sysml.requirements.RequirementsPackage;

import uml.NamedElement;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Requirement</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link sysml.requirements.impl.RequirementImpl#getText <em>Text</em>}</li>
 *   <li>{@link sysml.requirements.impl.RequirementImpl#getId <em>Id</em>}</li>
 *   <li>{@link sysml.requirements.impl.RequirementImpl#getDerived <em>Derived</em>}</li>
 *   <li>{@link sysml.requirements.impl.RequirementImpl#getDerivedFrom <em>Derived From</em>}</li>
 *   <li>{@link sysml.requirements.impl.RequirementImpl#getSatisfiedBy <em>Satisfied By</em>}</li>
 *   <li>{@link sysml.requirements.impl.RequirementImpl#getRefinedBy <em>Refined By</em>}</li>
 *   <li>{@link sysml.requirements.impl.RequirementImpl#getTracedTo <em>Traced To</em>}</li>
 *   <li>{@link sysml.requirements.impl.RequirementImpl#getVerifiedBy <em>Verified By</em>}</li>
 *   <li>{@link sysml.requirements.impl.RequirementImpl#getMaster <em>Master</em>}</li>
 *   <li>{@link sysml.requirements.impl.RequirementImpl#getBase_Class <em>Base Class</em>}</li>
 * </ul>
 *
 * @generated
 */
public class RequirementImpl extends EStoreEObjectImpl implements Requirement {
	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected RequirementImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return RequirementsPackage.Literals.REQUIREMENT;
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
	public String getText() {
		return (String)eGet(RequirementsPackage.Literals.REQUIREMENT__TEXT, true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setText(String newText) {
		eSet(RequirementsPackage.Literals.REQUIREMENT__TEXT, newText);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public String getId() {
		return (String)eGet(RequirementsPackage.Literals.REQUIREMENT__ID, true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setId(String newId) {
		eSet(RequirementsPackage.Literals.REQUIREMENT__ID, newId);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<Requirement> getDerived() {
		return (EList<Requirement>)eGet(RequirementsPackage.Literals.REQUIREMENT__DERIVED, true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<Requirement> getDerivedFrom() {
		return (EList<Requirement>)eGet(RequirementsPackage.Literals.REQUIREMENT__DERIVED_FROM, true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<NamedElement> getSatisfiedBy() {
		return (EList<NamedElement>)eGet(RequirementsPackage.Literals.REQUIREMENT__SATISFIED_BY, true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<NamedElement> getRefinedBy() {
		return (EList<NamedElement>)eGet(RequirementsPackage.Literals.REQUIREMENT__REFINED_BY, true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<NamedElement> getTracedTo() {
		return (EList<NamedElement>)eGet(RequirementsPackage.Literals.REQUIREMENT__TRACED_TO, true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<NamedElement> getVerifiedBy() {
		return (EList<NamedElement>)eGet(RequirementsPackage.Literals.REQUIREMENT__VERIFIED_BY, true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Requirement getMaster() {
		return (Requirement)eGet(RequirementsPackage.Literals.REQUIREMENT__MASTER, true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public uml.Class getBase_Class() {
		return (uml.Class)eGet(RequirementsPackage.Literals.REQUIREMENT__BASE_CLASS, true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setBase_Class(uml.Class newBase_Class) {
		eSet(RequirementsPackage.Literals.REQUIREMENT__BASE_CLASS, newBase_Class);
	}

} //RequirementImpl
