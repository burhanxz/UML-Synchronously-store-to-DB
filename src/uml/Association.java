/**
 */
package uml;

import java.util.Map;

import org.eclipse.emf.common.util.DiagnosticChain;
import org.eclipse.emf.common.util.EList;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Association</b></em>'.
 * <!-- end-user-doc -->
 *
 * <!-- begin-model-doc -->
 * A link is a tuple of values that refer to typed objects.  An Association classifies a set of links, each of which is an instance of the Association.  Each value in the link refers to an instance of the type of the corresponding end of the Association.
 * <p>From package UML::StructuredClassifiers.</p>
 * <!-- end-model-doc -->
 *
 * <p>
 * The following features are supported:
 * </p>
 * <ul>
 *   <li>{@link uml.Association#getEndType <em>End Type</em>}</li>
 *   <li>{@link uml.Association#isIsDerived <em>Is Derived</em>}</li>
 *   <li>{@link uml.Association#getMemberEnd <em>Member End</em>}</li>
 *   <li>{@link uml.Association#getOwnedEnd <em>Owned End</em>}</li>
 *   <li>{@link uml.Association#getNavigableOwnedEnd <em>Navigable Owned End</em>}</li>
 * </ul>
 *
 * @see uml.UmlPackage#getAssociation()
 * @model
 * @generated
 */
public interface Association extends Classifier, Relationship {
	/**
	 * Returns the value of the '<em><b>End Type</b></em>' reference list.
	 * The list contents are of type {@link uml.Type}.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * The Classifiers that are used as types of the ends of the Association.
	 * <p>From package UML::StructuredClassifiers.</p>
	 * <!-- end-model-doc -->
	 * @return the value of the '<em>End Type</em>' reference list.
	 * @see uml.UmlPackage#getAssociation_EndType()
	 * @model required="true" transient="true" changeable="false" volatile="true" derived="true" ordered="false"
	 * @generated
	 */
	EList<Type> getEndType();

	/**
	 * Returns the value of the '<em><b>Is Derived</b></em>' attribute.
	 * The default value is <code>"false"</code>.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * Specifies whether the Association is derived from other model elements such as other Associations.
	 * <p>From package UML::StructuredClassifiers.</p>
	 * <!-- end-model-doc -->
	 * @return the value of the '<em>Is Derived</em>' attribute.
	 * @see #setIsDerived(boolean)
	 * @see uml.UmlPackage#getAssociation_IsDerived()
	 * @model default="false" dataType="types.Boolean" required="true" ordered="false"
	 * @generated
	 */
	boolean isIsDerived();

	/**
	 * Sets the value of the '{@link uml.Association#isIsDerived <em>Is Derived</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Is Derived</em>' attribute.
	 * @see #isIsDerived()
	 * @generated
	 */
	void setIsDerived(boolean value);

	/**
	 * Returns the value of the '<em><b>Member End</b></em>' reference list.
	 * The list contents are of type {@link uml.Property}.
	 * It is bidirectional and its opposite is '{@link uml.Property#getAssociation <em>Association</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * Each end represents participation of instances of the Classifier connected to the end in links of the Association.
	 * <p>From package UML::StructuredClassifiers.</p>
	 * <!-- end-model-doc -->
	 * @return the value of the '<em>Member End</em>' reference list.
	 * @see uml.UmlPackage#getAssociation_MemberEnd()
	 * @see uml.Property#getAssociation
	 * @model opposite="association" lower="2"
	 * @generated
	 */
	EList<Property> getMemberEnd();

	/**
	 * Returns the value of the '<em><b>Owned End</b></em>' containment reference list.
	 * The list contents are of type {@link uml.Property}.
	 * It is bidirectional and its opposite is '{@link uml.Property#getOwningAssociation <em>Owning Association</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * The ends that are owned by the Association itself.
	 * <p>From package UML::StructuredClassifiers.</p>
	 * <!-- end-model-doc -->
	 * @return the value of the '<em>Owned End</em>' containment reference list.
	 * @see uml.UmlPackage#getAssociation_OwnedEnd()
	 * @see uml.Property#getOwningAssociation
	 * @model opposite="owningAssociation" containment="true"
	 * @generated
	 */
	EList<Property> getOwnedEnd();

	/**
	 * Returns the value of the '<em><b>Navigable Owned End</b></em>' reference list.
	 * The list contents are of type {@link uml.Property}.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * The navigable ends that are owned by the Association itself.
	 * <p>From package UML::StructuredClassifiers.</p>
	 * <!-- end-model-doc -->
	 * @return the value of the '<em>Navigable Owned End</em>' reference list.
	 * @see uml.UmlPackage#getAssociation_NavigableOwnedEnd()
	 * @model ordered="false"
	 * @generated
	 */
	EList<Property> getNavigableOwnedEnd();

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * An Association specializing another Association has the same number of ends as the other Association.
	 * parents()->select(oclIsKindOf(Association)).oclAsType(Association)->forAll(p | p.memberEnd->size() = self.memberEnd->size())
	 * @param diagnostics The chain of diagnostics to which problems are to be appended.
	 * @param context The cache of context-specific information.
	 * <!-- end-model-doc -->
	 * @model
	 * @generated
	 */
	boolean specialized_end_number(DiagnosticChain diagnostics, Map<Object, Object> context);

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * When an Association specializes another Association, every end of the specific Association corresponds to an end of the general Association, and the specific end reaches the same type or a subtype of the corresponding general end.
	 * Sequence{1..memberEnd->size()}->
	 * 	forAll(i | general->select(oclIsKindOf(Association)).oclAsType(Association)->
	 * 		forAll(ga | self.memberEnd->at(i).type.conformsTo(ga.memberEnd->at(i).type)))
	 * @param diagnostics The chain of diagnostics to which problems are to be appended.
	 * @param context The cache of context-specific information.
	 * <!-- end-model-doc -->
	 * @model
	 * @generated
	 */
	boolean specialized_end_types(DiagnosticChain diagnostics, Map<Object, Object> context);

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * Only binary Associations can be aggregations.
	 * memberEnd->exists(aggregation <> AggregationKind::none) implies (memberEnd->size() = 2 and memberEnd->exists(aggregation = AggregationKind::none))
	 * @param diagnostics The chain of diagnostics to which problems are to be appended.
	 * @param context The cache of context-specific information.
	 * <!-- end-model-doc -->
	 * @model
	 * @generated
	 */
	boolean binary_associations(DiagnosticChain diagnostics, Map<Object, Object> context);

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * Ends of Associations with more than two ends must be owned by the Association itself.
	 * memberEnd->size() > 2 implies ownedEnd->includesAll(memberEnd)
	 * @param diagnostics The chain of diagnostics to which problems are to be appended.
	 * @param context The cache of context-specific information.
	 * <!-- end-model-doc -->
	 * @model
	 * @generated
	 */
	boolean association_ends(DiagnosticChain diagnostics, Map<Object, Object> context);

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * memberEnd->forAll(type->notEmpty())
	 * @param diagnostics The chain of diagnostics to which problems are to be appended.
	 * @param context The cache of context-specific information.
	 * <!-- end-model-doc -->
	 * @model
	 * @generated
	 */
	boolean ends_must_be_typed(DiagnosticChain diagnostics, Map<Object, Object> context);

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * Determines whether this association is a binary association, i.e. whether it has exactly two member ends.
	 * <!-- end-model-doc -->
	 * @model kind="operation" dataType="types.Boolean" required="true" ordered="false"
	 * @generated
	 */
	boolean isBinary();

} // Association
