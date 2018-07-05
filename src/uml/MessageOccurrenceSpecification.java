/**
 */
package uml;


/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Message Occurrence Specification</b></em>'.
 * <!-- end-user-doc -->
 *
 * <!-- begin-model-doc -->
 * A MessageOccurrenceSpecification specifies the occurrence of Message events, such as sending and receiving of Signals or invoking or receiving of Operation calls. A MessageOccurrenceSpecification is a kind of MessageEnd. Messages are generated either by synchronous Operation calls or asynchronous Signal sends. They are received by the execution of corresponding AcceptEventActions.
 * <p>From package UML::Interactions.</p>
 * <!-- end-model-doc -->
 *
 *
 * @see uml.UmlPackage#getMessageOccurrenceSpecification()
 * @model
 * @generated
 */
public interface MessageOccurrenceSpecification extends OccurrenceSpecification, MessageEnd {
} // MessageOccurrenceSpecification
