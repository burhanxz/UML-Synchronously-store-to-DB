/**
 */
package uml;


/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Raise Exception Action</b></em>'.
 * <!-- end-user-doc -->
 *
 * <!-- begin-model-doc -->
 * A RaiseExceptionAction is an Action that causes an exception to occur. The input value becomes the exception object.
 * <p>From package UML::Actions.</p>
 * <!-- end-model-doc -->
 *
 * <p>
 * The following features are supported:
 * </p>
 * <ul>
 *   <li>{@link uml.RaiseExceptionAction#getException <em>Exception</em>}</li>
 * </ul>
 *
 * @see uml.UmlPackage#getRaiseExceptionAction()
 * @model
 * @generated
 */
public interface RaiseExceptionAction extends Action {
	/**
	 * Returns the value of the '<em><b>Exception</b></em>' containment reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * An InputPin whose value becomes the exception object.
	 * <p>From package UML::Actions.</p>
	 * <!-- end-model-doc -->
	 * @return the value of the '<em>Exception</em>' containment reference.
	 * @see #setException(InputPin)
	 * @see uml.UmlPackage#getRaiseExceptionAction_Exception()
	 * @model containment="true" required="true" ordered="false"
	 * @generated
	 */
	InputPin getException();

	/**
	 * Sets the value of the '{@link uml.RaiseExceptionAction#getException <em>Exception</em>}' containment reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Exception</em>' containment reference.
	 * @see #getException()
	 * @generated
	 */
	void setException(InputPin value);

} // RaiseExceptionAction
