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

import uml.Action;
import uml.Gate;
import uml.GeneralOrdering;
import uml.Interaction;
import uml.InteractionFragment;
import uml.InteractionOperand;
import uml.Lifeline;
import uml.Message;
import uml.UmlPackage;

import uml.util.UmlValidator;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Interaction</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link uml.impl.InteractionImpl#getCovered <em>Covered</em>}</li>
 *   <li>{@link uml.impl.InteractionImpl#getEnclosingOperand <em>Enclosing Operand</em>}</li>
 *   <li>{@link uml.impl.InteractionImpl#getEnclosingInteraction <em>Enclosing Interaction</em>}</li>
 *   <li>{@link uml.impl.InteractionImpl#getGeneralOrdering <em>General Ordering</em>}</li>
 *   <li>{@link uml.impl.InteractionImpl#getLifeline <em>Lifeline</em>}</li>
 *   <li>{@link uml.impl.InteractionImpl#getFragment <em>Fragment</em>}</li>
 *   <li>{@link uml.impl.InteractionImpl#getAction <em>Action</em>}</li>
 *   <li>{@link uml.impl.InteractionImpl#getFormalGate <em>Formal Gate</em>}</li>
 *   <li>{@link uml.impl.InteractionImpl#getMessage <em>Message</em>}</li>
 * </ul>
 *
 * @generated
 */
public class InteractionImpl extends BehaviorImpl implements Interaction {
	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected InteractionImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return UmlPackage.eINSTANCE.getInteraction();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<Lifeline> getCovereds() {
		return (EList<Lifeline>)eGet(UmlPackage.eINSTANCE.getInteractionFragment_Covered(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public InteractionOperand getEnclosingOperand() {
		return (InteractionOperand)eGet(UmlPackage.eINSTANCE.getInteractionFragment_EnclosingOperand(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setEnclosingOperand(InteractionOperand newEnclosingOperand) {
		eSet(UmlPackage.eINSTANCE.getInteractionFragment_EnclosingOperand(), newEnclosingOperand);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Interaction getEnclosingInteraction() {
		return (Interaction)eGet(UmlPackage.eINSTANCE.getInteractionFragment_EnclosingInteraction(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setEnclosingInteraction(Interaction newEnclosingInteraction) {
		eSet(UmlPackage.eINSTANCE.getInteractionFragment_EnclosingInteraction(), newEnclosingInteraction);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<GeneralOrdering> getGeneralOrdering() {
		return (EList<GeneralOrdering>)eGet(UmlPackage.eINSTANCE.getInteractionFragment_GeneralOrdering(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<Lifeline> getLifeline() {
		return (EList<Lifeline>)eGet(UmlPackage.eINSTANCE.getInteraction_Lifeline(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<InteractionFragment> getFragment() {
		return (EList<InteractionFragment>)eGet(UmlPackage.eINSTANCE.getInteraction_Fragment(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<Action> getAction() {
		return (EList<Action>)eGet(UmlPackage.eINSTANCE.getInteraction_Action(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<Gate> getFormalGate() {
		return (EList<Gate>)eGet(UmlPackage.eINSTANCE.getInteraction_FormalGate(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<Message> getMessage() {
		return (EList<Message>)eGet(UmlPackage.eINSTANCE.getInteraction_Message(), true);
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
						 UmlValidator.INTERACTION__NOT_CONTAINED,
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
	@Override
	public int eBaseStructuralFeatureID(int derivedFeatureID, Class<?> baseClass) {
		if (baseClass == InteractionFragment.class) {
			switch (derivedFeatureID) {
				case UmlPackage.INTERACTION__COVERED: return UmlPackage.INTERACTION_FRAGMENT__COVERED;
				case UmlPackage.INTERACTION__ENCLOSING_OPERAND: return UmlPackage.INTERACTION_FRAGMENT__ENCLOSING_OPERAND;
				case UmlPackage.INTERACTION__ENCLOSING_INTERACTION: return UmlPackage.INTERACTION_FRAGMENT__ENCLOSING_INTERACTION;
				case UmlPackage.INTERACTION__GENERAL_ORDERING: return UmlPackage.INTERACTION_FRAGMENT__GENERAL_ORDERING;
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
		if (baseClass == InteractionFragment.class) {
			switch (baseFeatureID) {
				case UmlPackage.INTERACTION_FRAGMENT__COVERED: return UmlPackage.INTERACTION__COVERED;
				case UmlPackage.INTERACTION_FRAGMENT__ENCLOSING_OPERAND: return UmlPackage.INTERACTION__ENCLOSING_OPERAND;
				case UmlPackage.INTERACTION_FRAGMENT__ENCLOSING_INTERACTION: return UmlPackage.INTERACTION__ENCLOSING_INTERACTION;
				case UmlPackage.INTERACTION_FRAGMENT__GENERAL_ORDERING: return UmlPackage.INTERACTION__GENERAL_ORDERING;
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
	@SuppressWarnings("unchecked")
	public Object eInvoke(int operationID, EList<?> arguments) throws InvocationTargetException {
		switch (operationID) {
			case UmlPackage.INTERACTION___NOT_CONTAINED__DIAGNOSTICCHAIN_MAP:
				return not_contained((DiagnosticChain)arguments.get(0), (Map<Object, Object>)arguments.get(1));
		}
		return super.eInvoke(operationID, arguments);
	}

} //InteractionImpl
