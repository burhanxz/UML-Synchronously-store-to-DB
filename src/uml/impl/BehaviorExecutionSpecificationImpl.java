/**
 */
package uml.impl;

import org.eclipse.emf.ecore.EClass;

import uml.Behavior;
import uml.BehaviorExecutionSpecification;
import uml.UmlPackage;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Behavior Execution Specification</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link uml.impl.BehaviorExecutionSpecificationImpl#getBehavior <em>Behavior</em>}</li>
 * </ul>
 *
 * @generated
 */
public class BehaviorExecutionSpecificationImpl extends ExecutionSpecificationImpl implements BehaviorExecutionSpecification {
	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected BehaviorExecutionSpecificationImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return UmlPackage.eINSTANCE.getBehaviorExecutionSpecification();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Behavior getBehavior() {
		return (Behavior)eGet(UmlPackage.eINSTANCE.getBehaviorExecutionSpecification_Behavior(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setBehavior(Behavior newBehavior) {
		eSet(UmlPackage.eINSTANCE.getBehaviorExecutionSpecification_Behavior(), newBehavior);
	}

} //BehaviorExecutionSpecificationImpl
