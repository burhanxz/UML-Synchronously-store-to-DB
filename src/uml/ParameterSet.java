/**
 */
package uml;

import java.util.Map;

import org.eclipse.emf.common.util.DiagnosticChain;
import org.eclipse.emf.common.util.EList;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Parameter Set</b></em>'.
 * <!-- end-user-doc -->
 *
 * <!-- begin-model-doc -->
 * A ParameterSet designates alternative sets of inputs or outputs that a Behavior may use.
 * <p>From package UML::Classification.</p>
 * <!-- end-model-doc -->
 *
 * <p>
 * The following features are supported:
 * </p>
 * <ul>
 *   <li>{@link uml.ParameterSet#getCondition <em>Condition</em>}</li>
 *   <li>{@link uml.ParameterSet#getParameter <em>Parameter</em>}</li>
 * </ul>
 *
 * @see uml.UmlPackage#getParameterSet()
 * @model
 * @generated
 */
public interface ParameterSet extends NamedElement {
	/**
	 * Returns the value of the '<em><b>Condition</b></em>' containment reference list.
	 * The list contents are of type {@link uml.Constraint}.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * A constraint that should be satisfied for the owner of the Parameters in an input ParameterSet to start execution using the values provided for those Parameters, or the owner of the Parameters in an output ParameterSet to end execution providing the values for those Parameters, if all preconditions and conditions on input ParameterSets were satisfied.
	 * <p>From package UML::Classification.</p>
	 * <!-- end-model-doc -->
	 * @return the value of the '<em>Condition</em>' containment reference list.
	 * @see uml.UmlPackage#getParameterSet_Condition()
	 * @model containment="true" ordered="false"
	 * @generated
	 */
	EList<Constraint> getCondition();

	/**
	 * Returns the value of the '<em><b>Parameter</b></em>' reference list.
	 * The list contents are of type {@link uml.Parameter}.
	 * It is bidirectional and its opposite is '{@link uml.Parameter#getParameterSet <em>Parameter Set</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * Parameters in the ParameterSet.
	 * <p>From package UML::Classification.</p>
	 * <!-- end-model-doc -->
	 * @return the value of the '<em>Parameter</em>' reference list.
	 * @see uml.UmlPackage#getParameterSet_Parameter()
	 * @see uml.Parameter#getParameterSet
	 * @model opposite="parameterSet" required="true" ordered="false"
	 * @generated
	 */
	EList<Parameter> getParameter();

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * The Parameters in a ParameterSet must all be inputs or all be outputs of the same parameterized entity, and the ParameterSet is owned by that entity.
	 * parameter->forAll(p1, p2 | self.owner = p1.owner and self.owner = p2.owner and p1.direction = p2.direction)
	 * @param diagnostics The chain of diagnostics to which problems are to be appended.
	 * @param context The cache of context-specific information.
	 * <!-- end-model-doc -->
	 * @model
	 * @generated
	 */
	boolean same_parameterized_entity(DiagnosticChain diagnostics, Map<Object, Object> context);

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * If a parameterized entity has input Parameters that are in a ParameterSet, then any inputs that are not in a ParameterSet must be streaming. Same for output Parameters.
	 * ((parameter->exists(direction = ParameterDirectionKind::_'in')) implies 
	 *     behavioralFeature.ownedParameter->select(p | p.direction = ParameterDirectionKind::_'in' and p.parameterSet->isEmpty())->forAll(isStream))
	 *     and
	 * ((parameter->exists(direction = ParameterDirectionKind::out)) implies 
	 *     behavioralFeature.ownedParameter->select(p | p.direction = ParameterDirectionKind::out and p.parameterSet->isEmpty())->forAll(isStream))
	 * @param diagnostics The chain of diagnostics to which problems are to be appended.
	 * @param context The cache of context-specific information.
	 * <!-- end-model-doc -->
	 * @model
	 * @generated
	 */
	boolean input(DiagnosticChain diagnostics, Map<Object, Object> context);

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * Two ParameterSets cannot have exactly the same set of Parameters.
	 * parameter->forAll(parameterSet->forAll(s1, s2 | s1->size() = s2->size() implies s1.parameter->exists(p | not s2.parameter->includes(p))))
	 * @param diagnostics The chain of diagnostics to which problems are to be appended.
	 * @param context The cache of context-specific information.
	 * <!-- end-model-doc -->
	 * @model
	 * @generated
	 */
	boolean two_parameter_sets(DiagnosticChain diagnostics, Map<Object, Object> context);

} // ParameterSet
