/**
 */
package uml.impl;

import org.eclipse.emf.common.util.EList;

import org.eclipse.emf.ecore.EClass;

import uml.InputPin;
import uml.InvocationAction;
import uml.Port;
import uml.UmlPackage;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Invocation Action</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link uml.impl.InvocationActionImpl#getArgument <em>Argument</em>}</li>
 *   <li>{@link uml.impl.InvocationActionImpl#getOnPort <em>On Port</em>}</li>
 * </ul>
 *
 * @generated
 */
public abstract class InvocationActionImpl extends ActionImpl implements InvocationAction {
	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected InvocationActionImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return UmlPackage.eINSTANCE.getInvocationAction();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	public EList<InputPin> getArgument() {
		return (EList<InputPin>)eGet(UmlPackage.eINSTANCE.getInvocationAction_Argument(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Port getOnPort() {
		return (Port)eGet(UmlPackage.eINSTANCE.getInvocationAction_OnPort(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setOnPort(Port newOnPort) {
		eSet(UmlPackage.eINSTANCE.getInvocationAction_OnPort(), newOnPort);
	}

} //InvocationActionImpl
