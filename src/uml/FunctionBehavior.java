/**
 */
package uml;

import java.util.Map;

import org.eclipse.emf.common.util.DiagnosticChain;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Function Behavior</b></em>'.
 * <!-- end-user-doc -->
 *
 * <!-- begin-model-doc -->
 * A FunctionBehavior is an OpaqueBehavior that does not access or modify any objects or other external data.
 * <p>From package UML::CommonBehavior.</p>
 * <!-- end-model-doc -->
 *
 *
 * @see uml.UmlPackage#getFunctionBehavior()
 * @model
 * @generated
 */
public interface FunctionBehavior extends OpaqueBehavior {
	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * A FunctionBehavior has at least one output Parameter.
	 * self.ownedParameter->
	 *   select(p | p.direction = ParameterDirectionKind::out or p.direction= ParameterDirectionKind::inout or p.direction= ParameterDirectionKind::return)->size() >= 1
	 * @param diagnostics The chain of diagnostics to which problems are to be appended.
	 * @param context The cache of context-specific information.
	 * <!-- end-model-doc -->
	 * @model
	 * @generated
	 */
	boolean one_output_parameter(DiagnosticChain diagnostics, Map<Object, Object> context);

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * The types of the ownedParameters are all DataTypes, which may not nest anything but other DataTypes.
	 * ownedParameter->forAll(p | p.type <> null and
	 *   p.type.oclIsTypeOf(DataType) and hasAllDataTypeAttributes(p.type.oclAsType(DataType)))
	 * @param diagnostics The chain of diagnostics to which problems are to be appended.
	 * @param context The cache of context-specific information.
	 * <!-- end-model-doc -->
	 * @model
	 * @generated
	 */
	boolean types_of_parameters(DiagnosticChain diagnostics, Map<Object, Object> context);

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * The hasAllDataTypeAttributes query tests whether the types of the attributes of the given DataType are all DataTypes, and similarly for all those DataTypes.
	 * result = (d.ownedAttribute->forAll(a |
	 *     a.type.oclIsKindOf(DataType) and
	 *       hasAllDataTypeAttributes(a.type.oclAsType(DataType))))
	 * <p>From package UML::CommonBehavior.</p>
	 * <!-- end-model-doc -->
	 * @model dataType="types.Boolean" required="true" ordered="false" dRequired="true" dOrdered="false"
	 * @generated
	 */
	boolean hasAllDataTypeAttributes(DataType d);

} // FunctionBehavior
