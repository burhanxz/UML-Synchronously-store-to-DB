/**
 */
package uml;

import java.util.Map;

import org.eclipse.emf.common.util.DiagnosticChain;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Actor</b></em>'.
 * <!-- end-user-doc -->
 *
 * <!-- begin-model-doc -->
 * An Actor specifies a role played by a user or any other system that interacts with the subject.
 * <p>From package UML::UseCases.</p>
 * <!-- end-model-doc -->
 *
 *
 * @see uml.UmlPackage#getActor()
 * @model
 * @generated
 */
public interface Actor extends BehavioredClassifier {
	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * An Actor can only have Associations to UseCases, Components, and Classes. Furthermore these Associations must be binary.
	 * Association.allInstances()->forAll( a |
	 *   a.memberEnd->collect(type)->includes(self) implies
	 *   (
	 *     a.memberEnd->size() = 2 and
	 *     let actorEnd : Property = a.memberEnd->any(type = self) in
	 *       actorEnd.opposite.class.oclIsKindOf(UseCase) or
	 *       ( actorEnd.opposite.class.oclIsKindOf(Class) and not
	 *          actorEnd.opposite.class.oclIsKindOf(Behavior))
	 *       )
	 *   )
	 * @param diagnostics The chain of diagnostics to which problems are to be appended.
	 * @param context The cache of context-specific information.
	 * <!-- end-model-doc -->
	 * @model
	 * @generated
	 */
	boolean associations(DiagnosticChain diagnostics, Map<Object, Object> context);

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * An Actor must have a name.
	 * name->notEmpty()
	 * @param diagnostics The chain of diagnostics to which problems are to be appended.
	 * @param context The cache of context-specific information.
	 * <!-- end-model-doc -->
	 * @model
	 * @generated
	 */
	boolean must_have_name(DiagnosticChain diagnostics, Map<Object, Object> context);

} // Actor
