/**
 */
package uml;

import org.eclipse.emf.common.util.EList;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Vertex</b></em>'.
 * <!-- end-user-doc -->
 *
 * <!-- begin-model-doc -->
 * A Vertex is an abstraction of a node in a StateMachine graph. It can be the source or destination of any number of Transitions.
 * <p>From package UML::StateMachines.</p>
 * <!-- end-model-doc -->
 *
 * <p>
 * The following features are supported:
 * </p>
 * <ul>
 *   <li>{@link uml.Vertex#getContainer <em>Container</em>}</li>
 *   <li>{@link uml.Vertex#getIncoming <em>Incoming</em>}</li>
 *   <li>{@link uml.Vertex#getOutgoing <em>Outgoing</em>}</li>
 * </ul>
 *
 * @see uml.UmlPackage#getVertex()
 * @model abstract="true"
 * @generated
 */
public interface Vertex extends NamedElement {
	/**
	 * Returns the value of the '<em><b>Container</b></em>' container reference.
	 * It is bidirectional and its opposite is '{@link uml.Region#getSubvertex <em>Subvertex</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * The Region that contains this Vertex.
	 * <p>From package UML::StateMachines.</p>
	 * <!-- end-model-doc -->
	 * @return the value of the '<em>Container</em>' container reference.
	 * @see #setContainer(Region)
	 * @see uml.UmlPackage#getVertex_Container()
	 * @see uml.Region#getSubvertex
	 * @model opposite="subvertex" transient="false" ordered="false"
	 * @generated
	 */
	Region getContainer();

	/**
	 * Sets the value of the '{@link uml.Vertex#getContainer <em>Container</em>}' container reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Container</em>' container reference.
	 * @see #getContainer()
	 * @generated
	 */
	void setContainer(Region value);

	/**
	 * Returns the value of the '<em><b>Incoming</b></em>' reference list.
	 * The list contents are of type {@link uml.Transition}.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * Specifies the Transitions entering this Vertex.
	 * <p>From package UML::StateMachines.</p>
	 * <!-- end-model-doc -->
	 * @return the value of the '<em>Incoming</em>' reference list.
	 * @see uml.UmlPackage#getVertex_Incoming()
	 * @model transient="true" changeable="false" volatile="true" derived="true" ordered="false"
	 * @generated
	 */
	EList<Transition> getIncoming();

	/**
	 * Returns the value of the '<em><b>Outgoing</b></em>' reference list.
	 * The list contents are of type {@link uml.Transition}.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * Specifies the Transitions departing from this Vertex.
	 * <p>From package UML::StateMachines.</p>
	 * <!-- end-model-doc -->
	 * @return the value of the '<em>Outgoing</em>' reference list.
	 * @see uml.UmlPackage#getVertex_Outgoing()
	 * @model transient="true" changeable="false" volatile="true" derived="true" ordered="false"
	 * @generated
	 */
	EList<Transition> getOutgoing();

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * The operation containingStateMachine() returns the StateMachine in which this Vertex is defined.
	 * result = (if container <> null
	 * then
	 * -- the container is a region
	 *    container.containingStateMachine()
	 * else 
	 *    if (self.oclIsKindOf(Pseudostate)) and ((self.oclAsType(Pseudostate).kind = PseudostateKind::entryPoint) or (self.oclAsType(Pseudostate).kind = PseudostateKind::exitPoint)) then
	 *       self.oclAsType(Pseudostate).stateMachine
	 *    else 
	 *       if (self.oclIsKindOf(ConnectionPointReference)) then
	 *           self.oclAsType(ConnectionPointReference).state.containingStateMachine() -- no other valid cases possible
	 *       else 
	 *           null
	 *       endif
	 *    endif
	 * endif
	 * )
	 * <p>From package UML::StateMachines.</p>
	 * <!-- end-model-doc -->
	 * @model required="true" ordered="false"
	 * @generated
	 */
	StateMachine containingStateMachine();

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * This utility operation returns true if the Vertex is contained in the State s (input argument).
	 * result = (if not s.isComposite() or container->isEmpty() then
	 * 	false
	 * else
	 * 	if container.state = s then 
	 * 		true
	 * 	else
	 * 		container.state.isContainedInState(s)
	 * 	endif
	 * endif)
	 * <p>From package UML::StateMachines.</p>
	 * <!-- end-model-doc -->
	 * @model dataType="types.Boolean" required="true" ordered="false" sRequired="true" sOrdered="false"
	 * @generated
	 */
	boolean isContainedInState(State s);

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * This utility query returns true if the Vertex is contained in the Region r (input argument).
	 * result = (if (container = r) then
	 * 	true
	 * else
	 * 	if (r.state->isEmpty()) then
	 * 		false
	 * 	else
	 * 		container.state.isContainedInRegion(r)
	 * 	endif
	 * endif)
	 * <p>From package UML::StateMachines.</p>
	 * <!-- end-model-doc -->
	 * @model dataType="types.Boolean" required="true" ordered="false" rRequired="true" rOrdered="false"
	 * @generated
	 */
	boolean isContainedInRegion(Region r);

} // Vertex
