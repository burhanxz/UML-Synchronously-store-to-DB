/**
 */
package sysml.requirements.impl;

import org.eclipse.emf.common.util.EList;

import org.eclipse.emf.ecore.EClass;

import org.eclipse.emf.ecore.impl.EStoreEObjectImpl;

import sysml.requirements.Requirement;
import sysml.requirements.RequirementRelated;
import sysml.requirements.RequirementsPackage;

import uml.NamedElement;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Requirement Related</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link sysml.requirements.impl.RequirementRelatedImpl#getBase_NamedElement <em>Base Named Element</em>}</li>
 *   <li>{@link sysml.requirements.impl.RequirementRelatedImpl#getTracedFrom <em>Traced From</em>}</li>
 *   <li>{@link sysml.requirements.impl.RequirementRelatedImpl#getSatisfies <em>Satisfies</em>}</li>
 *   <li>{@link sysml.requirements.impl.RequirementRelatedImpl#getRefines <em>Refines</em>}</li>
 *   <li>{@link sysml.requirements.impl.RequirementRelatedImpl#getVerifies <em>Verifies</em>}</li>
 * </ul>
 *
 * @generated
 */
public class RequirementRelatedImpl extends EStoreEObjectImpl implements RequirementRelated {
	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected RequirementRelatedImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return RequirementsPackage.Literals.REQUIREMENT_RELATED;
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
	public NamedElement getBase_NamedElement() {
		return (NamedElement)eGet(RequirementsPackage.Literals.REQUIREMENT_RELATED__BASE_NAMED_ELEMENT, true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setBase_NamedElement(NamedElement newBase_NamedElement) {
		eSet(RequirementsPackage.Literals.REQUIREMENT_RELATED__BASE_NAMED_ELEMENT, newBase_NamedElement);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<Requirement> getTracedFrom() {
		return (EList<Requirement>)eGet(RequirementsPackage.Literals.REQUIREMENT_RELATED__TRACED_FROM, true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<Requirement> getSatisfies() {
		return (EList<Requirement>)eGet(RequirementsPackage.Literals.REQUIREMENT_RELATED__SATISFIES, true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<Requirement> getRefines() {
		return (EList<Requirement>)eGet(RequirementsPackage.Literals.REQUIREMENT_RELATED__REFINES, true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<Requirement> getVerifies() {
		return (EList<Requirement>)eGet(RequirementsPackage.Literals.REQUIREMENT_RELATED__VERIFIES, true);
	}

} //RequirementRelatedImpl
