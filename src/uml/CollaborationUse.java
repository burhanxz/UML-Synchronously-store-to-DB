/**
 */
package uml;

import java.util.Map;

import org.eclipse.emf.common.util.DiagnosticChain;
import org.eclipse.emf.common.util.EList;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Collaboration Use</b></em>'.
 * <!-- end-user-doc -->
 *
 * <!-- begin-model-doc -->
 * A CollaborationUse is used to specify the application of a pattern specified by a Collaboration to a specific situation.
 * <p>From package UML::StructuredClassifiers.</p>
 * <!-- end-model-doc -->
 *
 * <p>
 * The following features are supported:
 * </p>
 * <ul>
 *   <li>{@link uml.CollaborationUse#getRoleBinding <em>Role Binding</em>}</li>
 *   <li>{@link uml.CollaborationUse#getType <em>Type</em>}</li>
 * </ul>
 *
 * @see uml.UmlPackage#getCollaborationUse()
 * @model
 * @generated
 */
public interface CollaborationUse extends NamedElement {
	/**
	 * Returns the value of the '<em><b>Role Binding</b></em>' containment reference list.
	 * The list contents are of type {@link uml.Dependency}.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * A mapping between features of the Collaboration and features of the owning Classifier. This mapping indicates which ConnectableElement of the Classifier plays which role(s) in the Collaboration. A ConnectableElement may be bound to multiple roles in the same CollaborationUse (that is, it may play multiple roles).
	 * <p>From package UML::StructuredClassifiers.</p>
	 * <!-- end-model-doc -->
	 * @return the value of the '<em>Role Binding</em>' containment reference list.
	 * @see uml.UmlPackage#getCollaborationUse_RoleBinding()
	 * @model containment="true" ordered="false"
	 * @generated
	 */
	EList<Dependency> getRoleBinding();

	/**
	 * Returns the value of the '<em><b>Type</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * The Collaboration which is used in this CollaborationUse. The Collaboration defines the cooperation between its roles which are mapped to ConnectableElements relating to the Classifier owning the CollaborationUse.
	 * <p>From package UML::StructuredClassifiers.</p>
	 * <!-- end-model-doc -->
	 * @return the value of the '<em>Type</em>' reference.
	 * @see #setType(Collaboration)
	 * @see uml.UmlPackage#getCollaborationUse_Type()
	 * @model required="true" ordered="false"
	 * @generated
	 */
	Collaboration getType();

	/**
	 * Sets the value of the '{@link uml.CollaborationUse#getType <em>Type</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Type</em>' reference.
	 * @see #getType()
	 * @generated
	 */
	void setType(Collaboration value);

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * All the client elements of a roleBinding are in one Classifier and all supplier elements of a roleBinding are in one Collaboration.
	 * roleBinding->collect(client)->forAll(ne1, ne2 |
	 *   ne1.oclIsKindOf(ConnectableElement) and ne2.oclIsKindOf(ConnectableElement) and
	 *     let ce1 : ConnectableElement = ne1.oclAsType(ConnectableElement), ce2 : ConnectableElement = ne2.oclAsType(ConnectableElement) in
	 *       ce1.structuredClassifier = ce2.structuredClassifier)
	 * and
	 *   roleBinding->collect(supplier)->forAll(ne1, ne2 |
	 *   ne1.oclIsKindOf(ConnectableElement) and ne2.oclIsKindOf(ConnectableElement) and
	 *     let ce1 : ConnectableElement = ne1.oclAsType(ConnectableElement), ce2 : ConnectableElement = ne2.oclAsType(ConnectableElement) in
	 *       ce1.collaboration = ce2.collaboration)
	 * @param diagnostics The chain of diagnostics to which problems are to be appended.
	 * @param context The cache of context-specific information.
	 * <!-- end-model-doc -->
	 * @model
	 * @generated
	 */
	boolean client_elements(DiagnosticChain diagnostics, Map<Object, Object> context);

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * Every collaborationRole in the Collaboration is bound within the CollaborationUse.
	 * type.collaborationRole->forAll(role | roleBinding->exists(rb | rb.supplier->includes(role)))
	 * @param diagnostics The chain of diagnostics to which problems are to be appended.
	 * @param context The cache of context-specific information.
	 * <!-- end-model-doc -->
	 * @model
	 * @generated
	 */
	boolean every_role(DiagnosticChain diagnostics, Map<Object, Object> context);

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * Connectors in a Collaboration typing a CollaborationUse must have corresponding Connectors between elements bound in the context Classifier, and these corresponding Connectors must have the same or more general type than the Collaboration Connectors.
	 * type.ownedConnector->forAll(connector |
	 *   let rolesConnectedInCollab : Set(ConnectableElement) = connector.end.role->asSet(),
	 *         relevantBindings : Set(Dependency) = roleBinding->select(rb | rb.supplier->intersection(rolesConnectedInCollab)->notEmpty()),
	 *         boundRoles : Set(ConnectableElement) = relevantBindings->collect(client.oclAsType(ConnectableElement))->asSet(),
	 *         contextClassifier : StructuredClassifier = boundRoles->any(true).structuredClassifier->any(true) in
	 *           contextClassifier.ownedConnector->exists( correspondingConnector | 
	 *               correspondingConnector.end.role->forAll( role | boundRoles->includes(role) )
	 *               and (connector.type->notEmpty() and correspondingConnector.type->notEmpty()) implies connector.type->forAll(conformsTo(correspondingConnector.type)) )
	 * )
	 * @param diagnostics The chain of diagnostics to which problems are to be appended.
	 * @param context The cache of context-specific information.
	 * <!-- end-model-doc -->
	 * @model
	 * @generated
	 */
	boolean connectors(DiagnosticChain diagnostics, Map<Object, Object> context);

} // CollaborationUse
