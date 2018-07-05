/**
 */
package uml.impl;

import java.lang.reflect.InvocationTargetException;

import java.util.Map;

import org.eclipse.emf.common.util.BasicDiagnostic;
import org.eclipse.emf.common.util.Diagnostic;
import org.eclipse.emf.common.util.DiagnosticChain;
import org.eclipse.emf.common.util.EList;

import org.eclipse.emf.ecore.EClass;

import org.eclipse.emf.ecore.plugin.EcorePlugin;

import org.eclipse.emf.ecore.util.EObjectValidator;

import uml.Association;
import uml.AssociationClass;
import uml.Element;
import uml.Property;
import uml.Relationship;
import uml.Type;
import uml.UmlPackage;

import uml.util.UmlValidator;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Association Class</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link uml.impl.AssociationClassImpl#getRelatedElement <em>Related Element</em>}</li>
 *   <li>{@link uml.impl.AssociationClassImpl#getEndType <em>End Type</em>}</li>
 *   <li>{@link uml.impl.AssociationClassImpl#isIsDerived <em>Is Derived</em>}</li>
 *   <li>{@link uml.impl.AssociationClassImpl#getMemberEnd <em>Member End</em>}</li>
 *   <li>{@link uml.impl.AssociationClassImpl#getOwnedEnd <em>Owned End</em>}</li>
 *   <li>{@link uml.impl.AssociationClassImpl#getNavigableOwnedEnd <em>Navigable Owned End</em>}</li>
 * </ul>
 *
 * @generated
 */
public class AssociationClassImpl extends ClassImpl implements AssociationClass {
	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected AssociationClassImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return UmlPackage.eINSTANCE.getAssociationClass();
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
	public EList<Type> getEndType() {
		return (EList<Type>)eGet(UmlPackage.eINSTANCE.getAssociation_EndType(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean isIsDerived() {
		return (Boolean)eGet(UmlPackage.eINSTANCE.getAssociation_IsDerived(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setIsDerived(boolean newIsDerived) {
		eSet(UmlPackage.eINSTANCE.getAssociation_IsDerived(), newIsDerived);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<Property> getMemberEnd() {
		return (EList<Property>)eGet(UmlPackage.eINSTANCE.getAssociation_MemberEnd(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<Property> getOwnedEnd() {
		return (EList<Property>)eGet(UmlPackage.eINSTANCE.getAssociation_OwnedEnd(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<Property> getNavigableOwnedEnd() {
		return (EList<Property>)eGet(UmlPackage.eINSTANCE.getAssociation_NavigableOwnedEnd(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean cannot_be_defined(DiagnosticChain diagnostics, Map<Object, Object> context) {
		// TODO: implement this method
		// -> specify the condition that violates the invariant
		// -> verify the details of the diagnostic, including severity and message
		// Ensure that you remove @generated or mark it @generated NOT
		if (false) {
			if (diagnostics != null) {
				diagnostics.add
					(new BasicDiagnostic
						(Diagnostic.ERROR,
						 UmlValidator.DIAGNOSTIC_SOURCE,
						 UmlValidator.ASSOCIATION_CLASS__CANNOT_BE_DEFINED,
						 EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", new Object[] { "cannot_be_defined", EObjectValidator.getObjectLabel(this, context) }),
						 new Object [] { this }));
			}
			return false;
		}
		return true;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean disjoint_attributes_ends(DiagnosticChain diagnostics, Map<Object, Object> context) {
		// TODO: implement this method
		// -> specify the condition that violates the invariant
		// -> verify the details of the diagnostic, including severity and message
		// Ensure that you remove @generated or mark it @generated NOT
		if (false) {
			if (diagnostics != null) {
				diagnostics.add
					(new BasicDiagnostic
						(Diagnostic.ERROR,
						 UmlValidator.DIAGNOSTIC_SOURCE,
						 UmlValidator.ASSOCIATION_CLASS__DISJOINT_ATTRIBUTES_ENDS,
						 EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", new Object[] { "disjoint_attributes_ends", EObjectValidator.getObjectLabel(this, context) }),
						 new Object [] { this }));
			}
			return false;
		}
		return true;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean specialized_end_number(DiagnosticChain diagnostics, Map<Object, Object> context) {
		// TODO: implement this method
		// -> specify the condition that violates the invariant
		// -> verify the details of the diagnostic, including severity and message
		// Ensure that you remove @generated or mark it @generated NOT
		if (false) {
			if (diagnostics != null) {
				diagnostics.add
					(new BasicDiagnostic
						(Diagnostic.ERROR,
						 UmlValidator.DIAGNOSTIC_SOURCE,
						 UmlValidator.ASSOCIATION__SPECIALIZED_END_NUMBER,
						 EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", new Object[] { "specialized_end_number", EObjectValidator.getObjectLabel(this, context) }),
						 new Object [] { this }));
			}
			return false;
		}
		return true;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean specialized_end_types(DiagnosticChain diagnostics, Map<Object, Object> context) {
		// TODO: implement this method
		// -> specify the condition that violates the invariant
		// -> verify the details of the diagnostic, including severity and message
		// Ensure that you remove @generated or mark it @generated NOT
		if (false) {
			if (diagnostics != null) {
				diagnostics.add
					(new BasicDiagnostic
						(Diagnostic.ERROR,
						 UmlValidator.DIAGNOSTIC_SOURCE,
						 UmlValidator.ASSOCIATION__SPECIALIZED_END_TYPES,
						 EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", new Object[] { "specialized_end_types", EObjectValidator.getObjectLabel(this, context) }),
						 new Object [] { this }));
			}
			return false;
		}
		return true;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean binary_associations(DiagnosticChain diagnostics, Map<Object, Object> context) {
		// TODO: implement this method
		// -> specify the condition that violates the invariant
		// -> verify the details of the diagnostic, including severity and message
		// Ensure that you remove @generated or mark it @generated NOT
		if (false) {
			if (diagnostics != null) {
				diagnostics.add
					(new BasicDiagnostic
						(Diagnostic.ERROR,
						 UmlValidator.DIAGNOSTIC_SOURCE,
						 UmlValidator.ASSOCIATION__BINARY_ASSOCIATIONS,
						 EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", new Object[] { "binary_associations", EObjectValidator.getObjectLabel(this, context) }),
						 new Object [] { this }));
			}
			return false;
		}
		return true;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean association_ends(DiagnosticChain diagnostics, Map<Object, Object> context) {
		// TODO: implement this method
		// -> specify the condition that violates the invariant
		// -> verify the details of the diagnostic, including severity and message
		// Ensure that you remove @generated or mark it @generated NOT
		if (false) {
			if (diagnostics != null) {
				diagnostics.add
					(new BasicDiagnostic
						(Diagnostic.ERROR,
						 UmlValidator.DIAGNOSTIC_SOURCE,
						 UmlValidator.ASSOCIATION__ASSOCIATION_ENDS,
						 EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", new Object[] { "association_ends", EObjectValidator.getObjectLabel(this, context) }),
						 new Object [] { this }));
			}
			return false;
		}
		return true;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean ends_must_be_typed(DiagnosticChain diagnostics, Map<Object, Object> context) {
		// TODO: implement this method
		// -> specify the condition that violates the invariant
		// -> verify the details of the diagnostic, including severity and message
		// Ensure that you remove @generated or mark it @generated NOT
		if (false) {
			if (diagnostics != null) {
				diagnostics.add
					(new BasicDiagnostic
						(Diagnostic.ERROR,
						 UmlValidator.DIAGNOSTIC_SOURCE,
						 UmlValidator.ASSOCIATION__ENDS_MUST_BE_TYPED,
						 EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", new Object[] { "ends_must_be_typed", EObjectValidator.getObjectLabel(this, context) }),
						 new Object [] { this }));
			}
			return false;
		}
		return true;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean isBinary() {
		// TODO: implement this method
		// Ensure that you remove @generated or mark it @generated NOT
		throw new UnsupportedOperationException();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public EList<Type> getEndTypes() {
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
	public int eBaseStructuralFeatureID(int derivedFeatureID, Class<?> baseClass) {
		if (baseClass == Relationship.class) {
			switch (derivedFeatureID) {
				case UmlPackage.ASSOCIATION_CLASS__RELATED_ELEMENT: return UmlPackage.RELATIONSHIP__RELATED_ELEMENT;
				default: return -1;
			}
		}
		if (baseClass == Association.class) {
			switch (derivedFeatureID) {
				case UmlPackage.ASSOCIATION_CLASS__END_TYPE: return UmlPackage.ASSOCIATION__END_TYPE;
				case UmlPackage.ASSOCIATION_CLASS__IS_DERIVED: return UmlPackage.ASSOCIATION__IS_DERIVED;
				case UmlPackage.ASSOCIATION_CLASS__MEMBER_END: return UmlPackage.ASSOCIATION__MEMBER_END;
				case UmlPackage.ASSOCIATION_CLASS__OWNED_END: return UmlPackage.ASSOCIATION__OWNED_END;
				case UmlPackage.ASSOCIATION_CLASS__NAVIGABLE_OWNED_END: return UmlPackage.ASSOCIATION__NAVIGABLE_OWNED_END;
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
				case UmlPackage.RELATIONSHIP__RELATED_ELEMENT: return UmlPackage.ASSOCIATION_CLASS__RELATED_ELEMENT;
				default: return -1;
			}
		}
		if (baseClass == Association.class) {
			switch (baseFeatureID) {
				case UmlPackage.ASSOCIATION__END_TYPE: return UmlPackage.ASSOCIATION_CLASS__END_TYPE;
				case UmlPackage.ASSOCIATION__IS_DERIVED: return UmlPackage.ASSOCIATION_CLASS__IS_DERIVED;
				case UmlPackage.ASSOCIATION__MEMBER_END: return UmlPackage.ASSOCIATION_CLASS__MEMBER_END;
				case UmlPackage.ASSOCIATION__OWNED_END: return UmlPackage.ASSOCIATION_CLASS__OWNED_END;
				case UmlPackage.ASSOCIATION__NAVIGABLE_OWNED_END: return UmlPackage.ASSOCIATION_CLASS__NAVIGABLE_OWNED_END;
				default: return -1;
			}
		}
		return super.eDerivedStructuralFeatureID(baseFeatureID, baseClass);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public int eDerivedOperationID(int baseOperationID, Class<?> baseClass) {
		if (baseClass == Relationship.class) {
			switch (baseOperationID) {
				default: return -1;
			}
		}
		if (baseClass == Association.class) {
			switch (baseOperationID) {
				case UmlPackage.ASSOCIATION___SPECIALIZED_END_NUMBER__DIAGNOSTICCHAIN_MAP: return UmlPackage.ASSOCIATION_CLASS___SPECIALIZED_END_NUMBER__DIAGNOSTICCHAIN_MAP;
				case UmlPackage.ASSOCIATION___SPECIALIZED_END_TYPES__DIAGNOSTICCHAIN_MAP: return UmlPackage.ASSOCIATION_CLASS___SPECIALIZED_END_TYPES__DIAGNOSTICCHAIN_MAP;
				case UmlPackage.ASSOCIATION___BINARY_ASSOCIATIONS__DIAGNOSTICCHAIN_MAP: return UmlPackage.ASSOCIATION_CLASS___BINARY_ASSOCIATIONS__DIAGNOSTICCHAIN_MAP;
				case UmlPackage.ASSOCIATION___ASSOCIATION_ENDS__DIAGNOSTICCHAIN_MAP: return UmlPackage.ASSOCIATION_CLASS___ASSOCIATION_ENDS__DIAGNOSTICCHAIN_MAP;
				case UmlPackage.ASSOCIATION___ENDS_MUST_BE_TYPED__DIAGNOSTICCHAIN_MAP: return UmlPackage.ASSOCIATION_CLASS___ENDS_MUST_BE_TYPED__DIAGNOSTICCHAIN_MAP;
				case UmlPackage.ASSOCIATION___IS_BINARY: return UmlPackage.ASSOCIATION_CLASS___IS_BINARY;
				case UmlPackage.ASSOCIATION___GET_END_TYPES: return UmlPackage.ASSOCIATION_CLASS___GET_END_TYPES;
				default: return -1;
			}
		}
		return super.eDerivedOperationID(baseOperationID, baseClass);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	@SuppressWarnings("unchecked")
	public Object eInvoke(int operationID, EList<?> arguments) throws InvocationTargetException {
		switch (operationID) {
			case UmlPackage.ASSOCIATION_CLASS___CANNOT_BE_DEFINED__DIAGNOSTICCHAIN_MAP:
				return cannot_be_defined((DiagnosticChain)arguments.get(0), (Map<Object, Object>)arguments.get(1));
			case UmlPackage.ASSOCIATION_CLASS___DISJOINT_ATTRIBUTES_ENDS__DIAGNOSTICCHAIN_MAP:
				return disjoint_attributes_ends((DiagnosticChain)arguments.get(0), (Map<Object, Object>)arguments.get(1));
			case UmlPackage.ASSOCIATION_CLASS___SPECIALIZED_END_NUMBER__DIAGNOSTICCHAIN_MAP:
				return specialized_end_number((DiagnosticChain)arguments.get(0), (Map<Object, Object>)arguments.get(1));
			case UmlPackage.ASSOCIATION_CLASS___SPECIALIZED_END_TYPES__DIAGNOSTICCHAIN_MAP:
				return specialized_end_types((DiagnosticChain)arguments.get(0), (Map<Object, Object>)arguments.get(1));
			case UmlPackage.ASSOCIATION_CLASS___BINARY_ASSOCIATIONS__DIAGNOSTICCHAIN_MAP:
				return binary_associations((DiagnosticChain)arguments.get(0), (Map<Object, Object>)arguments.get(1));
			case UmlPackage.ASSOCIATION_CLASS___ASSOCIATION_ENDS__DIAGNOSTICCHAIN_MAP:
				return association_ends((DiagnosticChain)arguments.get(0), (Map<Object, Object>)arguments.get(1));
			case UmlPackage.ASSOCIATION_CLASS___ENDS_MUST_BE_TYPED__DIAGNOSTICCHAIN_MAP:
				return ends_must_be_typed((DiagnosticChain)arguments.get(0), (Map<Object, Object>)arguments.get(1));
			case UmlPackage.ASSOCIATION_CLASS___IS_BINARY:
				return isBinary();
			case UmlPackage.ASSOCIATION_CLASS___GET_END_TYPES:
				return getEndTypes();
		}
		return super.eInvoke(operationID, arguments);
	}

} //AssociationClassImpl
