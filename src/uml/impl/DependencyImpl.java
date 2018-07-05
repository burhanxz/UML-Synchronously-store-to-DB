/**
 */
package uml.impl;

import org.eclipse.emf.common.util.EList;

import org.eclipse.emf.ecore.EClass;

import uml.Dependency;
import uml.DirectedRelationship;
import uml.Element;
import uml.NamedElement;
import uml.Relationship;
import uml.UmlPackage;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Dependency</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link uml.impl.DependencyImpl#getRelatedElement <em>Related Element</em>}</li>
 *   <li>{@link uml.impl.DependencyImpl#getSource <em>Source</em>}</li>
 *   <li>{@link uml.impl.DependencyImpl#getTarget <em>Target</em>}</li>
 *   <li>{@link uml.impl.DependencyImpl#getClient <em>Client</em>}</li>
 *   <li>{@link uml.impl.DependencyImpl#getSupplier <em>Supplier</em>}</li>
 * </ul>
 *
 * @generated
 */
public class DependencyImpl extends PackageableElementImpl implements Dependency {
	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected DependencyImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return UmlPackage.eINSTANCE.getDependency();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<Element> getRelatedElement() {
		return (EList<Element>)eGet(UmlPackage.eINSTANCE.getRelationship_RelatedElement(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<Element> getSource() {
		return (EList<Element>)eGet(UmlPackage.eINSTANCE.getDirectedRelationship_Source(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<Element> getTarget() {
		return (EList<Element>)eGet(UmlPackage.eINSTANCE.getDirectedRelationship_Target(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<NamedElement> getClient() {
		return (EList<NamedElement>)eGet(UmlPackage.eINSTANCE.getDependency_Client(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<NamedElement> getSupplier() {
		return (EList<NamedElement>)eGet(UmlPackage.eINSTANCE.getDependency_Supplier(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public int eBaseStructuralFeatureID(int derivedFeatureID, Class<?> baseClass) {
		if (baseClass == Relationship.class) {
			switch (derivedFeatureID) {
				case UmlPackage.DEPENDENCY__RELATED_ELEMENT: return UmlPackage.RELATIONSHIP__RELATED_ELEMENT;
				default: return -1;
			}
		}
		if (baseClass == DirectedRelationship.class) {
			switch (derivedFeatureID) {
				case UmlPackage.DEPENDENCY__SOURCE: return UmlPackage.DIRECTED_RELATIONSHIP__SOURCE;
				case UmlPackage.DEPENDENCY__TARGET: return UmlPackage.DIRECTED_RELATIONSHIP__TARGET;
				default: return -1;
			}
		}
		return super.eBaseStructuralFeatureID(derivedFeatureID, baseClass);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public int eDerivedStructuralFeatureID(int baseFeatureID, Class<?> baseClass) {
		if (baseClass == Relationship.class) {
			switch (baseFeatureID) {
				case UmlPackage.RELATIONSHIP__RELATED_ELEMENT: return UmlPackage.DEPENDENCY__RELATED_ELEMENT;
				default: return -1;
			}
		}
		if (baseClass == DirectedRelationship.class) {
			switch (baseFeatureID) {
				case UmlPackage.DIRECTED_RELATIONSHIP__SOURCE: return UmlPackage.DEPENDENCY__SOURCE;
				case UmlPackage.DIRECTED_RELATIONSHIP__TARGET: return UmlPackage.DEPENDENCY__TARGET;
				default: return -1;
			}
		}
		return super.eDerivedStructuralFeatureID(baseFeatureID, baseClass);
	}

} //DependencyImpl
