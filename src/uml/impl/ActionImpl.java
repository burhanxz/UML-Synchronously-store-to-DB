/**
 */
package uml.impl;

import java.lang.reflect.InvocationTargetException;

import org.eclipse.emf.common.util.EList;

import org.eclipse.emf.ecore.EClass;

import uml.Action;
import uml.ActivityNode;
import uml.Behavior;
import uml.Classifier;
import uml.Constraint;
import uml.InputPin;
import uml.OutputPin;
import uml.UmlPackage;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Action</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link uml.impl.ActionImpl#getContext <em>Context</em>}</li>
 *   <li>{@link uml.impl.ActionImpl#getInput <em>Input</em>}</li>
 *   <li>{@link uml.impl.ActionImpl#isIsLocallyReentrant <em>Is Locally Reentrant</em>}</li>
 *   <li>{@link uml.impl.ActionImpl#getLocalPostcondition <em>Local Postcondition</em>}</li>
 *   <li>{@link uml.impl.ActionImpl#getLocalPrecondition <em>Local Precondition</em>}</li>
 *   <li>{@link uml.impl.ActionImpl#getOutput <em>Output</em>}</li>
 * </ul>
 *
 * @generated
 */
public abstract class ActionImpl extends ExecutableNodeImpl implements Action {
	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected ActionImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return UmlPackage.eINSTANCE.getAction();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Classifier getContext() {
		return (Classifier)eGet(UmlPackage.eINSTANCE.getAction_Context(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<InputPin> getInput() {
		return (EList<InputPin>)eGet(UmlPackage.eINSTANCE.getAction_Input(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean isIsLocallyReentrant() {
		return (Boolean)eGet(UmlPackage.eINSTANCE.getAction_IsLocallyReentrant(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setIsLocallyReentrant(boolean newIsLocallyReentrant) {
		eSet(UmlPackage.eINSTANCE.getAction_IsLocallyReentrant(), newIsLocallyReentrant);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<Constraint> getLocalPostcondition() {
		return (EList<Constraint>)eGet(UmlPackage.eINSTANCE.getAction_LocalPostcondition(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<Constraint> getLocalPrecondition() {
		return (EList<Constraint>)eGet(UmlPackage.eINSTANCE.getAction_LocalPrecondition(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<OutputPin> getOutput() {
		return (EList<OutputPin>)eGet(UmlPackage.eINSTANCE.getAction_Output(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public EList<Action> allActions() {
		// TODO: implement this method
		// Ensure that you remove @generated or mark it @generated NOT
		throw new UnsupportedOperationException();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public EList<ActivityNode> allOwnedNodes() {
		// TODO: implement this method
		// Ensure that you remove @generated or mark it @generated NOT
		throw new UnsupportedOperationException();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Behavior containingBehavior() {
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
			case UmlPackage.ACTION___ALL_ACTIONS:
				return allActions();
			case UmlPackage.ACTION___ALL_OWNED_NODES:
				return allOwnedNodes();
			case UmlPackage.ACTION___CONTAINING_BEHAVIOR:
				return containingBehavior();
		}
		return super.eInvoke(operationID, arguments);
	}

} //ActionImpl
