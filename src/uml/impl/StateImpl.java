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

import uml.Behavior;
import uml.Classifier;
import uml.ConnectionPointReference;
import uml.Constraint;
import uml.Pseudostate;
import uml.RedefinableElement;
import uml.Region;
import uml.State;
import uml.StateMachine;
import uml.Transition;
import uml.Trigger;
import uml.UmlPackage;
import uml.Vertex;

import uml.util.UmlValidator;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>State</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link uml.impl.StateImpl#isIsLeaf <em>Is Leaf</em>}</li>
 *   <li>{@link uml.impl.StateImpl#getRedefinedElement <em>Redefined Element</em>}</li>
 *   <li>{@link uml.impl.StateImpl#getRedefinitionContext <em>Redefinition Context</em>}</li>
 *   <li>{@link uml.impl.StateImpl#getContainer <em>Container</em>}</li>
 *   <li>{@link uml.impl.StateImpl#getIncoming <em>Incoming</em>}</li>
 *   <li>{@link uml.impl.StateImpl#getOutgoing <em>Outgoing</em>}</li>
 *   <li>{@link uml.impl.StateImpl#getConnection <em>Connection</em>}</li>
 *   <li>{@link uml.impl.StateImpl#getConnectionPoint <em>Connection Point</em>}</li>
 *   <li>{@link uml.impl.StateImpl#getDeferrableTrigger <em>Deferrable Trigger</em>}</li>
 *   <li>{@link uml.impl.StateImpl#getDoActivity <em>Do Activity</em>}</li>
 *   <li>{@link uml.impl.StateImpl#getEntry <em>Entry</em>}</li>
 *   <li>{@link uml.impl.StateImpl#getExit <em>Exit</em>}</li>
 *   <li>{@link uml.impl.StateImpl#isIsComposite <em>Is Composite</em>}</li>
 *   <li>{@link uml.impl.StateImpl#isIsOrthogonal <em>Is Orthogonal</em>}</li>
 *   <li>{@link uml.impl.StateImpl#isIsSimple <em>Is Simple</em>}</li>
 *   <li>{@link uml.impl.StateImpl#isIsSubmachineState <em>Is Submachine State</em>}</li>
 *   <li>{@link uml.impl.StateImpl#getRedefinedState <em>Redefined State</em>}</li>
 *   <li>{@link uml.impl.StateImpl#getStateInvariant <em>State Invariant</em>}</li>
 *   <li>{@link uml.impl.StateImpl#getSubmachine <em>Submachine</em>}</li>
 *   <li>{@link uml.impl.StateImpl#getRegion <em>Region</em>}</li>
 * </ul>
 *
 * @generated
 */
public class StateImpl extends NamespaceImpl implements State {
	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected StateImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return UmlPackage.eINSTANCE.getState();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean isIsLeaf() {
		return (Boolean)eGet(UmlPackage.eINSTANCE.getRedefinableElement_IsLeaf(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setIsLeaf(boolean newIsLeaf) {
		eSet(UmlPackage.eINSTANCE.getRedefinableElement_IsLeaf(), newIsLeaf);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<RedefinableElement> getRedefinedElement() {
		return (EList<RedefinableElement>)eGet(UmlPackage.eINSTANCE.getRedefinableElement_RedefinedElement(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<Classifier> getRedefinitionContext() {
		return (EList<Classifier>)eGet(UmlPackage.eINSTANCE.getRedefinableElement_RedefinitionContext(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Region getContainer() {
		return (Region)eGet(UmlPackage.eINSTANCE.getVertex_Container(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setContainer(Region newContainer) {
		eSet(UmlPackage.eINSTANCE.getVertex_Container(), newContainer);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<Transition> getIncoming() {
		return (EList<Transition>)eGet(UmlPackage.eINSTANCE.getVertex_Incoming(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<Transition> getOutgoing() {
		return (EList<Transition>)eGet(UmlPackage.eINSTANCE.getVertex_Outgoing(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<ConnectionPointReference> getConnection() {
		return (EList<ConnectionPointReference>)eGet(UmlPackage.eINSTANCE.getState_Connection(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<Pseudostate> getConnectionPoint() {
		return (EList<Pseudostate>)eGet(UmlPackage.eINSTANCE.getState_ConnectionPoint(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<Trigger> getDeferrableTrigger() {
		return (EList<Trigger>)eGet(UmlPackage.eINSTANCE.getState_DeferrableTrigger(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Behavior getDoActivity() {
		return (Behavior)eGet(UmlPackage.eINSTANCE.getState_DoActivity(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setDoActivity(Behavior newDoActivity) {
		eSet(UmlPackage.eINSTANCE.getState_DoActivity(), newDoActivity);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Behavior getEntry() {
		return (Behavior)eGet(UmlPackage.eINSTANCE.getState_Entry(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setEntry(Behavior newEntry) {
		eSet(UmlPackage.eINSTANCE.getState_Entry(), newEntry);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Behavior getExit() {
		return (Behavior)eGet(UmlPackage.eINSTANCE.getState_Exit(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setExit(Behavior newExit) {
		eSet(UmlPackage.eINSTANCE.getState_Exit(), newExit);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean isIsComposite() {
		return (Boolean)eGet(UmlPackage.eINSTANCE.getState_IsComposite(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean isIsOrthogonal() {
		return (Boolean)eGet(UmlPackage.eINSTANCE.getState_IsOrthogonal(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean isIsSimple() {
		return (Boolean)eGet(UmlPackage.eINSTANCE.getState_IsSimple(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean isIsSubmachineState() {
		return (Boolean)eGet(UmlPackage.eINSTANCE.getState_IsSubmachineState(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public State getRedefinedState() {
		return (State)eGet(UmlPackage.eINSTANCE.getState_RedefinedState(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setRedefinedState(State newRedefinedState) {
		eSet(UmlPackage.eINSTANCE.getState_RedefinedState(), newRedefinedState);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Constraint getStateInvariant() {
		return (Constraint)eGet(UmlPackage.eINSTANCE.getState_StateInvariant(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setStateInvariant(Constraint newStateInvariant) {
		eSet(UmlPackage.eINSTANCE.getState_StateInvariant(), newStateInvariant);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public StateMachine getSubmachine() {
		return (StateMachine)eGet(UmlPackage.eINSTANCE.getState_Submachine(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setSubmachine(StateMachine newSubmachine) {
		eSet(UmlPackage.eINSTANCE.getState_Submachine(), newSubmachine);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<Region> getRegion() {
		return (EList<Region>)eGet(UmlPackage.eINSTANCE.getState_Region(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean entry_or_exit(DiagnosticChain diagnostics, Map<Object, Object> context) {
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
						 UmlValidator.STATE__ENTRY_OR_EXIT,
						 EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", new Object[] { "entry_or_exit", EObjectValidator.getObjectLabel(this, context) }),
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
	public boolean submachine_states(DiagnosticChain diagnostics, Map<Object, Object> context) {
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
						 UmlValidator.STATE__SUBMACHINE_STATES,
						 EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", new Object[] { "submachine_states", EObjectValidator.getObjectLabel(this, context) }),
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
	public boolean composite_states(DiagnosticChain diagnostics, Map<Object, Object> context) {
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
						 UmlValidator.STATE__COMPOSITE_STATES,
						 EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", new Object[] { "composite_states", EObjectValidator.getObjectLabel(this, context) }),
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
	public boolean destinations_or_sources_of_transitions(DiagnosticChain diagnostics, Map<Object, Object> context) {
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
						 UmlValidator.STATE__DESTINATIONS_OR_SOURCES_OF_TRANSITIONS,
						 EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", new Object[] { "destinations_or_sources_of_transitions", EObjectValidator.getObjectLabel(this, context) }),
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
	public boolean submachine_or_regions(DiagnosticChain diagnostics, Map<Object, Object> context) {
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
						 UmlValidator.STATE__SUBMACHINE_OR_REGIONS,
						 EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", new Object[] { "submachine_or_regions", EObjectValidator.getObjectLabel(this, context) }),
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
	public boolean isComposite() {
		// TODO: implement this method
		// Ensure that you remove @generated or mark it @generated NOT
		throw new UnsupportedOperationException();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean isOrthogonal() {
		// TODO: implement this method
		// Ensure that you remove @generated or mark it @generated NOT
		throw new UnsupportedOperationException();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean isSimple() {
		// TODO: implement this method
		// Ensure that you remove @generated or mark it @generated NOT
		throw new UnsupportedOperationException();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean isSubmachineState() {
		// TODO: implement this method
		// Ensure that you remove @generated or mark it @generated NOT
		throw new UnsupportedOperationException();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Classifier redefinitionContext() {
		// TODO: implement this method
		// Ensure that you remove @generated or mark it @generated NOT
		throw new UnsupportedOperationException();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public StateMachine containingStateMachine() {
		// TODO: implement this method
		// Ensure that you remove @generated or mark it @generated NOT
		throw new UnsupportedOperationException();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public EList<Transition> getIncomings() {
		// TODO: implement this method
		// Ensure that you remove @generated or mark it @generated NOT
		throw new UnsupportedOperationException();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public EList<Transition> getOutgoings() {
		// TODO: implement this method
		// Ensure that you remove @generated or mark it @generated NOT
		throw new UnsupportedOperationException();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean isContainedInState(State s) {
		// TODO: implement this method
		// Ensure that you remove @generated or mark it @generated NOT
		throw new UnsupportedOperationException();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean isContainedInRegion(Region r) {
		// TODO: implement this method
		// Ensure that you remove @generated or mark it @generated NOT
		throw new UnsupportedOperationException();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean redefinition_consistent(DiagnosticChain diagnostics, Map<Object, Object> context) {
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
						 UmlValidator.REDEFINABLE_ELEMENT__REDEFINITION_CONSISTENT,
						 EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", new Object[] { "redefinition_consistent", EObjectValidator.getObjectLabel(this, context) }),
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
	public boolean non_leaf_redefinition(DiagnosticChain diagnostics, Map<Object, Object> context) {
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
						 UmlValidator.REDEFINABLE_ELEMENT__NON_LEAF_REDEFINITION,
						 EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", new Object[] { "non_leaf_redefinition", EObjectValidator.getObjectLabel(this, context) }),
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
	public boolean redefinition_context_valid(DiagnosticChain diagnostics, Map<Object, Object> context) {
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
						 UmlValidator.REDEFINABLE_ELEMENT__REDEFINITION_CONTEXT_VALID,
						 EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", new Object[] { "redefinition_context_valid", EObjectValidator.getObjectLabel(this, context) }),
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
	public boolean isConsistentWith(RedefinableElement redefiningElement) {
		// TODO: implement this method
		// Ensure that you remove @generated or mark it @generated NOT
		throw new UnsupportedOperationException();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean isRedefinitionContextValid(RedefinableElement redefinedElement) {
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
		if (baseClass == RedefinableElement.class) {
			switch (derivedFeatureID) {
				case UmlPackage.STATE__IS_LEAF: return UmlPackage.REDEFINABLE_ELEMENT__IS_LEAF;
				case UmlPackage.STATE__REDEFINED_ELEMENT: return UmlPackage.REDEFINABLE_ELEMENT__REDEFINED_ELEMENT;
				case UmlPackage.STATE__REDEFINITION_CONTEXT: return UmlPackage.REDEFINABLE_ELEMENT__REDEFINITION_CONTEXT;
				default: return -1;
			}
		}
		if (baseClass == Vertex.class) {
			switch (derivedFeatureID) {
				case UmlPackage.STATE__CONTAINER: return UmlPackage.VERTEX__CONTAINER;
				case UmlPackage.STATE__INCOMING: return UmlPackage.VERTEX__INCOMING;
				case UmlPackage.STATE__OUTGOING: return UmlPackage.VERTEX__OUTGOING;
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
		if (baseClass == RedefinableElement.class) {
			switch (baseFeatureID) {
				case UmlPackage.REDEFINABLE_ELEMENT__IS_LEAF: return UmlPackage.STATE__IS_LEAF;
				case UmlPackage.REDEFINABLE_ELEMENT__REDEFINED_ELEMENT: return UmlPackage.STATE__REDEFINED_ELEMENT;
				case UmlPackage.REDEFINABLE_ELEMENT__REDEFINITION_CONTEXT: return UmlPackage.STATE__REDEFINITION_CONTEXT;
				default: return -1;
			}
		}
		if (baseClass == Vertex.class) {
			switch (baseFeatureID) {
				case UmlPackage.VERTEX__CONTAINER: return UmlPackage.STATE__CONTAINER;
				case UmlPackage.VERTEX__INCOMING: return UmlPackage.STATE__INCOMING;
				case UmlPackage.VERTEX__OUTGOING: return UmlPackage.STATE__OUTGOING;
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
		if (baseClass == RedefinableElement.class) {
			switch (baseOperationID) {
				case UmlPackage.REDEFINABLE_ELEMENT___REDEFINITION_CONSISTENT__DIAGNOSTICCHAIN_MAP: return UmlPackage.STATE___REDEFINITION_CONSISTENT__DIAGNOSTICCHAIN_MAP;
				case UmlPackage.REDEFINABLE_ELEMENT___NON_LEAF_REDEFINITION__DIAGNOSTICCHAIN_MAP: return UmlPackage.STATE___NON_LEAF_REDEFINITION__DIAGNOSTICCHAIN_MAP;
				case UmlPackage.REDEFINABLE_ELEMENT___REDEFINITION_CONTEXT_VALID__DIAGNOSTICCHAIN_MAP: return UmlPackage.STATE___REDEFINITION_CONTEXT_VALID__DIAGNOSTICCHAIN_MAP;
				case UmlPackage.REDEFINABLE_ELEMENT___IS_CONSISTENT_WITH__REDEFINABLEELEMENT: return UmlPackage.STATE___IS_CONSISTENT_WITH__REDEFINABLEELEMENT;
				case UmlPackage.REDEFINABLE_ELEMENT___IS_REDEFINITION_CONTEXT_VALID__REDEFINABLEELEMENT: return UmlPackage.STATE___IS_REDEFINITION_CONTEXT_VALID__REDEFINABLEELEMENT;
				default: return -1;
			}
		}
		if (baseClass == Vertex.class) {
			switch (baseOperationID) {
				case UmlPackage.VERTEX___CONTAINING_STATE_MACHINE: return UmlPackage.STATE___CONTAINING_STATE_MACHINE;
				case UmlPackage.VERTEX___GET_INCOMINGS: return UmlPackage.STATE___GET_INCOMINGS;
				case UmlPackage.VERTEX___GET_OUTGOINGS: return UmlPackage.STATE___GET_OUTGOINGS;
				case UmlPackage.VERTEX___IS_CONTAINED_IN_STATE__STATE: return UmlPackage.STATE___IS_CONTAINED_IN_STATE__STATE;
				case UmlPackage.VERTEX___IS_CONTAINED_IN_REGION__REGION: return UmlPackage.STATE___IS_CONTAINED_IN_REGION__REGION;
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
			case UmlPackage.STATE___ENTRY_OR_EXIT__DIAGNOSTICCHAIN_MAP:
				return entry_or_exit((DiagnosticChain)arguments.get(0), (Map<Object, Object>)arguments.get(1));
			case UmlPackage.STATE___SUBMACHINE_STATES__DIAGNOSTICCHAIN_MAP:
				return submachine_states((DiagnosticChain)arguments.get(0), (Map<Object, Object>)arguments.get(1));
			case UmlPackage.STATE___COMPOSITE_STATES__DIAGNOSTICCHAIN_MAP:
				return composite_states((DiagnosticChain)arguments.get(0), (Map<Object, Object>)arguments.get(1));
			case UmlPackage.STATE___DESTINATIONS_OR_SOURCES_OF_TRANSITIONS__DIAGNOSTICCHAIN_MAP:
				return destinations_or_sources_of_transitions((DiagnosticChain)arguments.get(0), (Map<Object, Object>)arguments.get(1));
			case UmlPackage.STATE___SUBMACHINE_OR_REGIONS__DIAGNOSTICCHAIN_MAP:
				return submachine_or_regions((DiagnosticChain)arguments.get(0), (Map<Object, Object>)arguments.get(1));
			case UmlPackage.STATE___IS_COMPOSITE:
				return isComposite();
			case UmlPackage.STATE___IS_ORTHOGONAL:
				return isOrthogonal();
			case UmlPackage.STATE___IS_SIMPLE:
				return isSimple();
			case UmlPackage.STATE___IS_SUBMACHINE_STATE:
				return isSubmachineState();
			case UmlPackage.STATE___REDEFINITION_CONTEXT:
				return redefinitionContext();
			case UmlPackage.STATE___CONTAINING_STATE_MACHINE:
				return containingStateMachine();
			case UmlPackage.STATE___GET_INCOMINGS:
				return getIncomings();
			case UmlPackage.STATE___GET_OUTGOINGS:
				return getOutgoings();
			case UmlPackage.STATE___IS_CONTAINED_IN_STATE__STATE:
				return isContainedInState((State)arguments.get(0));
			case UmlPackage.STATE___IS_CONTAINED_IN_REGION__REGION:
				return isContainedInRegion((Region)arguments.get(0));
			case UmlPackage.STATE___REDEFINITION_CONSISTENT__DIAGNOSTICCHAIN_MAP:
				return redefinition_consistent((DiagnosticChain)arguments.get(0), (Map<Object, Object>)arguments.get(1));
			case UmlPackage.STATE___NON_LEAF_REDEFINITION__DIAGNOSTICCHAIN_MAP:
				return non_leaf_redefinition((DiagnosticChain)arguments.get(0), (Map<Object, Object>)arguments.get(1));
			case UmlPackage.STATE___REDEFINITION_CONTEXT_VALID__DIAGNOSTICCHAIN_MAP:
				return redefinition_context_valid((DiagnosticChain)arguments.get(0), (Map<Object, Object>)arguments.get(1));
			case UmlPackage.STATE___IS_CONSISTENT_WITH__REDEFINABLEELEMENT:
				return isConsistentWith((RedefinableElement)arguments.get(0));
			case UmlPackage.STATE___IS_REDEFINITION_CONTEXT_VALID__REDEFINABLEELEMENT:
				return isRedefinitionContextValid((RedefinableElement)arguments.get(0));
		}
		return super.eInvoke(operationID, arguments);
	}

} //StateImpl
