/**
 */
package uml;

import org.eclipse.emf.common.util.EList;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Executable Node</b></em>'.
 * <!-- end-user-doc -->
 *
 * <!-- begin-model-doc -->
 * An ExecutableNode is an abstract class for ActivityNodes whose execution may be controlled using ControlFlows and to which ExceptionHandlers may be attached.
 * <p>From package UML::Activities.</p>
 * <!-- end-model-doc -->
 *
 * <p>
 * The following features are supported:
 * </p>
 * <ul>
 *   <li>{@link uml.ExecutableNode#getHandler <em>Handler</em>}</li>
 * </ul>
 *
 * @see uml.UmlPackage#getExecutableNode()
 * @model abstract="true"
 * @generated
 */
public interface ExecutableNode extends ActivityNode {
	/**
	 * Returns the value of the '<em><b>Handler</b></em>' containment reference list.
	 * The list contents are of type {@link uml.ExceptionHandler}.
	 * It is bidirectional and its opposite is '{@link uml.ExceptionHandler#getProtectedNode <em>Protected Node</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * A set of ExceptionHandlers that are examined if an exception propagates out of the ExceptionNode.
	 * <p>From package UML::Activities.</p>
	 * <!-- end-model-doc -->
	 * @return the value of the '<em>Handler</em>' containment reference list.
	 * @see uml.UmlPackage#getExecutableNode_Handler()
	 * @see uml.ExceptionHandler#getProtectedNode
	 * @model opposite="protectedNode" containment="true" ordered="false"
	 * @generated
	 */
	EList<ExceptionHandler> getHandler();

} // ExecutableNode
