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

import uml.Activity;
import uml.ActivityEdge;
import uml.ActivityGroup;
import uml.ActivityNode;
import uml.Constraint;
import uml.ElementImport;
import uml.InputPin;
import uml.NamedElement;
import uml.Namespace;
import uml.OutputPin;
import uml.PackageImport;
import uml.PackageableElement;
import uml.StructuredActivityNode;
import uml.UmlPackage;
import uml.Variable;
import uml.VisibilityKind;

import uml.util.UmlValidator;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Structured Activity Node</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link uml.impl.StructuredActivityNodeImpl#getOwnedRule <em>Owned Rule</em>}</li>
 *   <li>{@link uml.impl.StructuredActivityNodeImpl#getElementImport <em>Element Import</em>}</li>
 *   <li>{@link uml.impl.StructuredActivityNodeImpl#getPackageImport <em>Package Import</em>}</li>
 *   <li>{@link uml.impl.StructuredActivityNodeImpl#getOwnedMember <em>Owned Member</em>}</li>
 *   <li>{@link uml.impl.StructuredActivityNodeImpl#getImportedMember <em>Imported Member</em>}</li>
 *   <li>{@link uml.impl.StructuredActivityNodeImpl#getMember <em>Member</em>}</li>
 *   <li>{@link uml.impl.StructuredActivityNodeImpl#getContainedEdge <em>Contained Edge</em>}</li>
 *   <li>{@link uml.impl.StructuredActivityNodeImpl#getContainedNode <em>Contained Node</em>}</li>
 *   <li>{@link uml.impl.StructuredActivityNodeImpl#getInActivity <em>In Activity</em>}</li>
 *   <li>{@link uml.impl.StructuredActivityNodeImpl#getSubgroup <em>Subgroup</em>}</li>
 *   <li>{@link uml.impl.StructuredActivityNodeImpl#getSuperGroup <em>Super Group</em>}</li>
 *   <li>{@link uml.impl.StructuredActivityNodeImpl#getEdge <em>Edge</em>}</li>
 *   <li>{@link uml.impl.StructuredActivityNodeImpl#isMustIsolate <em>Must Isolate</em>}</li>
 *   <li>{@link uml.impl.StructuredActivityNodeImpl#getStructuredNodeInput <em>Structured Node Input</em>}</li>
 *   <li>{@link uml.impl.StructuredActivityNodeImpl#getStructuredNodeOutput <em>Structured Node Output</em>}</li>
 *   <li>{@link uml.impl.StructuredActivityNodeImpl#getVariable <em>Variable</em>}</li>
 *   <li>{@link uml.impl.StructuredActivityNodeImpl#getNode <em>Node</em>}</li>
 * </ul>
 *
 * @generated
 */
public class StructuredActivityNodeImpl extends ActionImpl implements StructuredActivityNode {
	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected StructuredActivityNodeImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return UmlPackage.eINSTANCE.getStructuredActivityNode();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<Constraint> getOwnedRule() {
		return (EList<Constraint>)eGet(UmlPackage.eINSTANCE.getNamespace_OwnedRule(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<ElementImport> getElementImport() {
		return (EList<ElementImport>)eGet(UmlPackage.eINSTANCE.getNamespace_ElementImport(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<PackageImport> getPackageImport() {
		return (EList<PackageImport>)eGet(UmlPackage.eINSTANCE.getNamespace_PackageImport(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<NamedElement> getOwnedMember() {
		return (EList<NamedElement>)eGet(UmlPackage.eINSTANCE.getNamespace_OwnedMember(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<PackageableElement> getImportedMember() {
		return (EList<PackageableElement>)eGet(UmlPackage.eINSTANCE.getNamespace_ImportedMember(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<NamedElement> getMember() {
		return (EList<NamedElement>)eGet(UmlPackage.eINSTANCE.getNamespace_Member(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<ActivityEdge> getContainedEdge() {
		return (EList<ActivityEdge>)eGet(UmlPackage.eINSTANCE.getActivityGroup_ContainedEdge(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<ActivityNode> getContainedNode() {
		return (EList<ActivityNode>)eGet(UmlPackage.eINSTANCE.getActivityGroup_ContainedNode(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Activity getInActivity() {
		return (Activity)eGet(UmlPackage.eINSTANCE.getActivityGroup_InActivity(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setInActivity(Activity newInActivity) {
		eSet(UmlPackage.eINSTANCE.getActivityGroup_InActivity(), newInActivity);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<ActivityGroup> getSubgroup() {
		return (EList<ActivityGroup>)eGet(UmlPackage.eINSTANCE.getActivityGroup_Subgroup(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public ActivityGroup getSuperGroup() {
		return (ActivityGroup)eGet(UmlPackage.eINSTANCE.getActivityGroup_SuperGroup(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<ActivityEdge> getEdge() {
		return (EList<ActivityEdge>)eGet(UmlPackage.eINSTANCE.getStructuredActivityNode_Edge(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean isMustIsolate() {
		return (Boolean)eGet(UmlPackage.eINSTANCE.getStructuredActivityNode_MustIsolate(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setMustIsolate(boolean newMustIsolate) {
		eSet(UmlPackage.eINSTANCE.getStructuredActivityNode_MustIsolate(), newMustIsolate);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<InputPin> getStructuredNodeInput() {
		return (EList<InputPin>)eGet(UmlPackage.eINSTANCE.getStructuredActivityNode_StructuredNodeInput(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<OutputPin> getStructuredNodeOutput() {
		return (EList<OutputPin>)eGet(UmlPackage.eINSTANCE.getStructuredActivityNode_StructuredNodeOutput(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<Variable> getVariable() {
		return (EList<Variable>)eGet(UmlPackage.eINSTANCE.getStructuredActivityNode_Variable(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<ActivityNode> getNode() {
		return (EList<ActivityNode>)eGet(UmlPackage.eINSTANCE.getStructuredActivityNode_Node(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean output_pin_edges(DiagnosticChain diagnostics, Map<Object, Object> context) {
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
						 UmlValidator.STRUCTURED_ACTIVITY_NODE__OUTPUT_PIN_EDGES,
						 EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", new Object[] { "output_pin_edges", EObjectValidator.getObjectLabel(this, context) }),
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
	public boolean edges(DiagnosticChain diagnostics, Map<Object, Object> context) {
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
						 UmlValidator.STRUCTURED_ACTIVITY_NODE__EDGES,
						 EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", new Object[] { "edges", EObjectValidator.getObjectLabel(this, context) }),
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
	public boolean input_pin_edges(DiagnosticChain diagnostics, Map<Object, Object> context) {
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
						 UmlValidator.STRUCTURED_ACTIVITY_NODE__INPUT_PIN_EDGES,
						 EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", new Object[] { "input_pin_edges", EObjectValidator.getObjectLabel(this, context) }),
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
	public EList<ActivityNode> sourceNodes() {
		// TODO: implement this method
		// Ensure that you remove @generated or mark it @generated NOT
		throw new UnsupportedOperationException();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public EList<ActivityNode> targetNodes() {
		// TODO: implement this method
		// Ensure that you remove @generated or mark it @generated NOT
		throw new UnsupportedOperationException();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean nodes_and_edges(DiagnosticChain diagnostics, Map<Object, Object> context) {
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
						 UmlValidator.ACTIVITY_GROUP__NODES_AND_EDGES,
						 EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", new Object[] { "nodes_and_edges", EObjectValidator.getObjectLabel(this, context) }),
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
	public boolean not_contained(DiagnosticChain diagnostics, Map<Object, Object> context) {
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
						 UmlValidator.ACTIVITY_GROUP__NOT_CONTAINED,
						 EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", new Object[] { "not_contained", EObjectValidator.getObjectLabel(this, context) }),
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
	public boolean members_distinguishable(DiagnosticChain diagnostics, Map<Object, Object> context) {
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
						 UmlValidator.NAMESPACE__MEMBERS_DISTINGUISHABLE,
						 EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", new Object[] { "members_distinguishable", EObjectValidator.getObjectLabel(this, context) }),
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
	public boolean cannot_import_self(DiagnosticChain diagnostics, Map<Object, Object> context) {
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
						 UmlValidator.NAMESPACE__CANNOT_IMPORT_SELF,
						 EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", new Object[] { "cannot_import_self", EObjectValidator.getObjectLabel(this, context) }),
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
	public boolean cannot_import_ownedMembers(DiagnosticChain diagnostics, Map<Object, Object> context) {
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
						 UmlValidator.NAMESPACE__CANNOT_IMPORT_OWNED_MEMBERS,
						 EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", new Object[] { "cannot_import_ownedMembers", EObjectValidator.getObjectLabel(this, context) }),
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
	public ElementImport createElementImport(PackageableElement element, VisibilityKind visibility) {
		// TODO: implement this method
		// Ensure that you remove @generated or mark it @generated NOT
		throw new UnsupportedOperationException();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public PackageImport createPackageImport(uml.Package package_, VisibilityKind visibility) {
		// TODO: implement this method
		// Ensure that you remove @generated or mark it @generated NOT
		throw new UnsupportedOperationException();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public EList<PackageableElement> getImportedElements() {
		// TODO: implement this method
		// Ensure that you remove @generated or mark it @generated NOT
		throw new UnsupportedOperationException();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public EList<uml.Package> getImportedPackages() {
		// TODO: implement this method
		// Ensure that you remove @generated or mark it @generated NOT
		throw new UnsupportedOperationException();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public EList<NamedElement> getOwnedMembers() {
		// TODO: implement this method
		// Ensure that you remove @generated or mark it @generated NOT
		throw new UnsupportedOperationException();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public EList<PackageableElement> excludeCollisions(EList<PackageableElement> imps) {
		// TODO: implement this method
		// Ensure that you remove @generated or mark it @generated NOT
		throw new UnsupportedOperationException();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public EList<String> getNamesOfMember(NamedElement element) {
		// TODO: implement this method
		// Ensure that you remove @generated or mark it @generated NOT
		throw new UnsupportedOperationException();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public EList<PackageableElement> importMembers(EList<PackageableElement> imps) {
		// TODO: implement this method
		// Ensure that you remove @generated or mark it @generated NOT
		throw new UnsupportedOperationException();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public EList<PackageableElement> getImportedMembers() {
		// TODO: implement this method
		// Ensure that you remove @generated or mark it @generated NOT
		throw new UnsupportedOperationException();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean membersAreDistinguishable() {
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
		if (baseClass == Namespace.class) {
			switch (derivedFeatureID) {
				case UmlPackage.STRUCTURED_ACTIVITY_NODE__OWNED_RULE: return UmlPackage.NAMESPACE__OWNED_RULE;
				case UmlPackage.STRUCTURED_ACTIVITY_NODE__ELEMENT_IMPORT: return UmlPackage.NAMESPACE__ELEMENT_IMPORT;
				case UmlPackage.STRUCTURED_ACTIVITY_NODE__PACKAGE_IMPORT: return UmlPackage.NAMESPACE__PACKAGE_IMPORT;
				case UmlPackage.STRUCTURED_ACTIVITY_NODE__OWNED_MEMBER: return UmlPackage.NAMESPACE__OWNED_MEMBER;
				case UmlPackage.STRUCTURED_ACTIVITY_NODE__IMPORTED_MEMBER: return UmlPackage.NAMESPACE__IMPORTED_MEMBER;
				case UmlPackage.STRUCTURED_ACTIVITY_NODE__MEMBER: return UmlPackage.NAMESPACE__MEMBER;
				default: return -1;
			}
		}
		if (baseClass == ActivityGroup.class) {
			switch (derivedFeatureID) {
				case UmlPackage.STRUCTURED_ACTIVITY_NODE__CONTAINED_EDGE: return UmlPackage.ACTIVITY_GROUP__CONTAINED_EDGE;
				case UmlPackage.STRUCTURED_ACTIVITY_NODE__CONTAINED_NODE: return UmlPackage.ACTIVITY_GROUP__CONTAINED_NODE;
				case UmlPackage.STRUCTURED_ACTIVITY_NODE__IN_ACTIVITY: return UmlPackage.ACTIVITY_GROUP__IN_ACTIVITY;
				case UmlPackage.STRUCTURED_ACTIVITY_NODE__SUBGROUP: return UmlPackage.ACTIVITY_GROUP__SUBGROUP;
				case UmlPackage.STRUCTURED_ACTIVITY_NODE__SUPER_GROUP: return UmlPackage.ACTIVITY_GROUP__SUPER_GROUP;
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
		if (baseClass == Namespace.class) {
			switch (baseFeatureID) {
				case UmlPackage.NAMESPACE__OWNED_RULE: return UmlPackage.STRUCTURED_ACTIVITY_NODE__OWNED_RULE;
				case UmlPackage.NAMESPACE__ELEMENT_IMPORT: return UmlPackage.STRUCTURED_ACTIVITY_NODE__ELEMENT_IMPORT;
				case UmlPackage.NAMESPACE__PACKAGE_IMPORT: return UmlPackage.STRUCTURED_ACTIVITY_NODE__PACKAGE_IMPORT;
				case UmlPackage.NAMESPACE__OWNED_MEMBER: return UmlPackage.STRUCTURED_ACTIVITY_NODE__OWNED_MEMBER;
				case UmlPackage.NAMESPACE__IMPORTED_MEMBER: return UmlPackage.STRUCTURED_ACTIVITY_NODE__IMPORTED_MEMBER;
				case UmlPackage.NAMESPACE__MEMBER: return UmlPackage.STRUCTURED_ACTIVITY_NODE__MEMBER;
				default: return -1;
			}
		}
		if (baseClass == ActivityGroup.class) {
			switch (baseFeatureID) {
				case UmlPackage.ACTIVITY_GROUP__CONTAINED_EDGE: return UmlPackage.STRUCTURED_ACTIVITY_NODE__CONTAINED_EDGE;
				case UmlPackage.ACTIVITY_GROUP__CONTAINED_NODE: return UmlPackage.STRUCTURED_ACTIVITY_NODE__CONTAINED_NODE;
				case UmlPackage.ACTIVITY_GROUP__IN_ACTIVITY: return UmlPackage.STRUCTURED_ACTIVITY_NODE__IN_ACTIVITY;
				case UmlPackage.ACTIVITY_GROUP__SUBGROUP: return UmlPackage.STRUCTURED_ACTIVITY_NODE__SUBGROUP;
				case UmlPackage.ACTIVITY_GROUP__SUPER_GROUP: return UmlPackage.STRUCTURED_ACTIVITY_NODE__SUPER_GROUP;
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
		if (baseClass == Namespace.class) {
			switch (baseOperationID) {
				case UmlPackage.NAMESPACE___MEMBERS_DISTINGUISHABLE__DIAGNOSTICCHAIN_MAP: return UmlPackage.STRUCTURED_ACTIVITY_NODE___MEMBERS_DISTINGUISHABLE__DIAGNOSTICCHAIN_MAP;
				case UmlPackage.NAMESPACE___CANNOT_IMPORT_SELF__DIAGNOSTICCHAIN_MAP: return UmlPackage.STRUCTURED_ACTIVITY_NODE___CANNOT_IMPORT_SELF__DIAGNOSTICCHAIN_MAP;
				case UmlPackage.NAMESPACE___CANNOT_IMPORT_OWNED_MEMBERS__DIAGNOSTICCHAIN_MAP: return UmlPackage.STRUCTURED_ACTIVITY_NODE___CANNOT_IMPORT_OWNED_MEMBERS__DIAGNOSTICCHAIN_MAP;
				case UmlPackage.NAMESPACE___CREATE_ELEMENT_IMPORT__PACKAGEABLEELEMENT_VISIBILITYKIND: return UmlPackage.STRUCTURED_ACTIVITY_NODE___CREATE_ELEMENT_IMPORT__PACKAGEABLEELEMENT_VISIBILITYKIND;
				case UmlPackage.NAMESPACE___CREATE_PACKAGE_IMPORT__PACKAGE_VISIBILITYKIND: return UmlPackage.STRUCTURED_ACTIVITY_NODE___CREATE_PACKAGE_IMPORT__PACKAGE_VISIBILITYKIND;
				case UmlPackage.NAMESPACE___GET_IMPORTED_ELEMENTS: return UmlPackage.STRUCTURED_ACTIVITY_NODE___GET_IMPORTED_ELEMENTS;
				case UmlPackage.NAMESPACE___GET_IMPORTED_PACKAGES: return UmlPackage.STRUCTURED_ACTIVITY_NODE___GET_IMPORTED_PACKAGES;
				case UmlPackage.NAMESPACE___GET_OWNED_MEMBERS: return UmlPackage.STRUCTURED_ACTIVITY_NODE___GET_OWNED_MEMBERS;
				case UmlPackage.NAMESPACE___EXCLUDE_COLLISIONS__ELIST: return UmlPackage.STRUCTURED_ACTIVITY_NODE___EXCLUDE_COLLISIONS__ELIST;
				case UmlPackage.NAMESPACE___GET_NAMES_OF_MEMBER__NAMEDELEMENT: return UmlPackage.STRUCTURED_ACTIVITY_NODE___GET_NAMES_OF_MEMBER__NAMEDELEMENT;
				case UmlPackage.NAMESPACE___IMPORT_MEMBERS__ELIST: return UmlPackage.STRUCTURED_ACTIVITY_NODE___IMPORT_MEMBERS__ELIST;
				case UmlPackage.NAMESPACE___GET_IMPORTED_MEMBERS: return UmlPackage.STRUCTURED_ACTIVITY_NODE___GET_IMPORTED_MEMBERS;
				case UmlPackage.NAMESPACE___MEMBERS_ARE_DISTINGUISHABLE: return UmlPackage.STRUCTURED_ACTIVITY_NODE___MEMBERS_ARE_DISTINGUISHABLE;
				default: return -1;
			}
		}
		if (baseClass == ActivityGroup.class) {
			switch (baseOperationID) {
				case UmlPackage.ACTIVITY_GROUP___NODES_AND_EDGES__DIAGNOSTICCHAIN_MAP: return UmlPackage.STRUCTURED_ACTIVITY_NODE___NODES_AND_EDGES__DIAGNOSTICCHAIN_MAP;
				case UmlPackage.ACTIVITY_GROUP___NOT_CONTAINED__DIAGNOSTICCHAIN_MAP: return UmlPackage.STRUCTURED_ACTIVITY_NODE___NOT_CONTAINED__DIAGNOSTICCHAIN_MAP;
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
			case UmlPackage.STRUCTURED_ACTIVITY_NODE___OUTPUT_PIN_EDGES__DIAGNOSTICCHAIN_MAP:
				return output_pin_edges((DiagnosticChain)arguments.get(0), (Map<Object, Object>)arguments.get(1));
			case UmlPackage.STRUCTURED_ACTIVITY_NODE___EDGES__DIAGNOSTICCHAIN_MAP:
				return edges((DiagnosticChain)arguments.get(0), (Map<Object, Object>)arguments.get(1));
			case UmlPackage.STRUCTURED_ACTIVITY_NODE___INPUT_PIN_EDGES__DIAGNOSTICCHAIN_MAP:
				return input_pin_edges((DiagnosticChain)arguments.get(0), (Map<Object, Object>)arguments.get(1));
			case UmlPackage.STRUCTURED_ACTIVITY_NODE___SOURCE_NODES:
				return sourceNodes();
			case UmlPackage.STRUCTURED_ACTIVITY_NODE___TARGET_NODES:
				return targetNodes();
			case UmlPackage.STRUCTURED_ACTIVITY_NODE___NODES_AND_EDGES__DIAGNOSTICCHAIN_MAP:
				return nodes_and_edges((DiagnosticChain)arguments.get(0), (Map<Object, Object>)arguments.get(1));
			case UmlPackage.STRUCTURED_ACTIVITY_NODE___NOT_CONTAINED__DIAGNOSTICCHAIN_MAP:
				return not_contained((DiagnosticChain)arguments.get(0), (Map<Object, Object>)arguments.get(1));
			case UmlPackage.STRUCTURED_ACTIVITY_NODE___MEMBERS_DISTINGUISHABLE__DIAGNOSTICCHAIN_MAP:
				return members_distinguishable((DiagnosticChain)arguments.get(0), (Map<Object, Object>)arguments.get(1));
			case UmlPackage.STRUCTURED_ACTIVITY_NODE___CANNOT_IMPORT_SELF__DIAGNOSTICCHAIN_MAP:
				return cannot_import_self((DiagnosticChain)arguments.get(0), (Map<Object, Object>)arguments.get(1));
			case UmlPackage.STRUCTURED_ACTIVITY_NODE___CANNOT_IMPORT_OWNED_MEMBERS__DIAGNOSTICCHAIN_MAP:
				return cannot_import_ownedMembers((DiagnosticChain)arguments.get(0), (Map<Object, Object>)arguments.get(1));
			case UmlPackage.STRUCTURED_ACTIVITY_NODE___CREATE_ELEMENT_IMPORT__PACKAGEABLEELEMENT_VISIBILITYKIND:
				return createElementImport((PackageableElement)arguments.get(0), (VisibilityKind)arguments.get(1));
			case UmlPackage.STRUCTURED_ACTIVITY_NODE___CREATE_PACKAGE_IMPORT__PACKAGE_VISIBILITYKIND:
				return createPackageImport((uml.Package)arguments.get(0), (VisibilityKind)arguments.get(1));
			case UmlPackage.STRUCTURED_ACTIVITY_NODE___GET_IMPORTED_ELEMENTS:
				return getImportedElements();
			case UmlPackage.STRUCTURED_ACTIVITY_NODE___GET_IMPORTED_PACKAGES:
				return getImportedPackages();
			case UmlPackage.STRUCTURED_ACTIVITY_NODE___GET_OWNED_MEMBERS:
				return getOwnedMembers();
			case UmlPackage.STRUCTURED_ACTIVITY_NODE___EXCLUDE_COLLISIONS__ELIST:
				return excludeCollisions((EList<PackageableElement>)arguments.get(0));
			case UmlPackage.STRUCTURED_ACTIVITY_NODE___GET_NAMES_OF_MEMBER__NAMEDELEMENT:
				return getNamesOfMember((NamedElement)arguments.get(0));
			case UmlPackage.STRUCTURED_ACTIVITY_NODE___IMPORT_MEMBERS__ELIST:
				return importMembers((EList<PackageableElement>)arguments.get(0));
			case UmlPackage.STRUCTURED_ACTIVITY_NODE___GET_IMPORTED_MEMBERS:
				return getImportedMembers();
			case UmlPackage.STRUCTURED_ACTIVITY_NODE___MEMBERS_ARE_DISTINGUISHABLE:
				return membersAreDistinguishable();
		}
		return super.eInvoke(operationID, arguments);
	}

} //StructuredActivityNodeImpl
