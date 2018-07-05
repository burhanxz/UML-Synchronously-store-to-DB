/**
 */
package uml;

import org.eclipse.emf.common.util.EList;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Sequence Node</b></em>'.
 * <!-- end-user-doc -->
 *
 * <!-- begin-model-doc -->
 * A SequenceNode is a StructuredActivityNode that executes a sequence of ExecutableNodes in order.
 * <p>From package UML::Actions.</p>
 * <!-- end-model-doc -->
 *
 * <p>
 * The following features are supported:
 * </p>
 * <ul>
 *   <li>{@link uml.SequenceNode#getExecutableNode <em>Executable Node</em>}</li>
 * </ul>
 *
 * @see uml.UmlPackage#getSequenceNode()
 * @model
 * @generated
 */
public interface SequenceNode extends StructuredActivityNode {
	/**
	 * Returns the value of the '<em><b>Executable Node</b></em>' containment reference list.
	 * The list contents are of type {@link uml.ExecutableNode}.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * The ordered set of ExecutableNodes to be sequenced.
	 * <p>From package UML::Actions.</p>
	 * <!-- end-model-doc -->
	 * @return the value of the '<em>Executable Node</em>' containment reference list.
	 * @see uml.UmlPackage#getSequenceNode_ExecutableNode()
	 * @model containment="true"
	 * @generated
	 */
	EList<ExecutableNode> getExecutableNode();

} // SequenceNode
