/**
 */
package uml;

import java.util.Map;

import org.eclipse.emf.common.util.DiagnosticChain;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Destruction Occurrence Specification</b></em>'.
 * <!-- end-user-doc -->
 *
 * <!-- begin-model-doc -->
 * A DestructionOccurenceSpecification models the destruction of an object.
 * <p>From package UML::Interactions.</p>
 * <!-- end-model-doc -->
 *
 *
 * @see uml.UmlPackage#getDestructionOccurrenceSpecification()
 * @model
 * @generated
 */
public interface DestructionOccurrenceSpecification extends MessageOccurrenceSpecification {
	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * No other OccurrenceSpecifications on a given Lifeline in an InteractionOperand may appear below a DestructionOccurrenceSpecification.
	 * let o : InteractionOperand = enclosingOperand in o->notEmpty() and 
	 * let peerEvents : OrderedSet(OccurrenceSpecification) = covered.events->select(enclosingOperand = o)
	 * in peerEvents->last() = self
	 * @param diagnostics The chain of diagnostics to which problems are to be appended.
	 * @param context The cache of context-specific information.
	 * <!-- end-model-doc -->
	 * @model
	 * @generated
	 */
	boolean no_occurrence_specifications_below(DiagnosticChain diagnostics, Map<Object, Object> context);

} // DestructionOccurrenceSpecification
