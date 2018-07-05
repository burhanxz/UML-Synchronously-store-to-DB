/**
 */
package uml.impl;

import org.eclipse.emf.common.util.EList;

import org.eclipse.emf.ecore.EClass;

import uml.DirectedRelationship;
import uml.Element;
import uml.Include;
import uml.Relationship;
import uml.UmlPackage;
import uml.UseCase;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Include</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link uml.impl.IncludeImpl#getRelatedElement <em>Related Element</em>}</li>
 *   <li>{@link uml.impl.IncludeImpl#getSource <em>Source</em>}</li>
 *   <li>{@link uml.impl.IncludeImpl#getTarget <em>Target</em>}</li>
 *   <li>{@link uml.impl.IncludeImpl#getAddition <em>Addition</em>}</li>
 *   <li>{@link uml.impl.IncludeImpl#getIncludingCase <em>Including Case</em>}</li>
 * </ul>
 *
 * @generated
 */
public class IncludeImpl extends NamedElementImpl implements Include {
	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected IncludeImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return UmlPackage.eINSTANCE.getInclude();
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
	public UseCase getAddition() {
		return (UseCase)eGet(UmlPackage.eINSTANCE.getInclude_Addition(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setAddition(UseCase newAddition) {
		eSet(UmlPackage.eINSTANCE.getInclude_Addition(), newAddition);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public UseCase getIncludingCase() {
		return (UseCase)eGet(UmlPackage.eINSTANCE.getInclude_IncludingCase(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setIncludingCase(UseCase newIncludingCase) {
		eSet(UmlPackage.eINSTANCE.getInclude_IncludingCase(), newIncludingCase);
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
				case UmlPackage.INCLUDE__RELATED_ELEMENT: return UmlPackage.RELATIONSHIP__RELATED_ELEMENT;
				default: return -1;
			}
		}
		if (baseClass == DirectedRelationship.class) {
			switch (derivedFeatureID) {
				case UmlPackage.INCLUDE__SOURCE: return UmlPackage.DIRECTED_RELATIONSHIP__SOURCE;
				case UmlPackage.INCLUDE__TARGET: return UmlPackage.DIRECTED_RELATIONSHIP__TARGET;
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
				case UmlPackage.RELATIONSHIP__RELATED_ELEMENT: return UmlPackage.INCLUDE__RELATED_ELEMENT;
				default: return -1;
			}
		}
		if (baseClass == DirectedRelationship.class) {
			switch (baseFeatureID) {
				case UmlPackage.DIRECTED_RELATIONSHIP__SOURCE: return UmlPackage.INCLUDE__SOURCE;
				case UmlPackage.DIRECTED_RELATIONSHIP__TARGET: return UmlPackage.INCLUDE__TARGET;
				default: return -1;
			}
		}
		return super.eDerivedStructuralFeatureID(baseFeatureID, baseClass);
	}

} //IncludeImpl
