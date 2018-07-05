/**
 */
package uml.impl;

import org.eclipse.emf.ecore.EClass;

import uml.ExecutionOccurrenceSpecification;
import uml.ExecutionSpecification;
import uml.UmlPackage;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Execution Occurrence Specification</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link uml.impl.ExecutionOccurrenceSpecificationImpl#getExecution <em>Execution</em>}</li>
 * </ul>
 *
 * @generated
 */
public class ExecutionOccurrenceSpecificationImpl extends OccurrenceSpecificationImpl implements ExecutionOccurrenceSpecification {
	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected ExecutionOccurrenceSpecificationImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return UmlPackage.eINSTANCE.getExecutionOccurrenceSpecification();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public ExecutionSpecification getExecution() {
		return (ExecutionSpecification)eGet(UmlPackage.eINSTANCE.getExecutionOccurrenceSpecification_Execution(), true);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setExecution(ExecutionSpecification newExecution) {
		eSet(UmlPackage.eINSTANCE.getExecutionOccurrenceSpecification_Execution(), newExecution);
	}

} //ExecutionOccurrenceSpecificationImpl
