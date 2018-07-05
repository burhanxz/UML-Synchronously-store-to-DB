/**
 */
package uml.impl;

import org.eclipse.emf.common.util.EList;

import org.eclipse.emf.ecore.EClass;

import uml.GeneralOrdering;
import uml.Interaction;
import uml.InteractionFragment;
import uml.InteractionOperand;
import uml.Lifeline;
import uml.UmlPackage;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Interaction Fragment</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link uml.impl.InteractionFragmentImpl#getCovered <em>Covered</em>}</li>
 *   <li>{@link uml.impl.InteractionFragmentImpl#getEnclosingOperand <em>Enclosing Operand</em>}</li>
 *   <li>{@link uml.impl.InteractionFragmentImpl#getEnclosingInteraction <em>Enclosing Interaction</em>}</li>
 *   <li>{@link uml.impl.InteractionFragmentImpl#getGeneralOrdering <em>General Ordering</em>}</li>
 * </ul>
 *
 * @generated
 */
public abstract class InteractionFragmentImpl extends NamedElementImpl implements InteractionFragment {
	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected InteractionFragmentImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return UmlPackage.eINSTANCE.getInteractionFragment();
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

} //InteractionFragmentImpl
