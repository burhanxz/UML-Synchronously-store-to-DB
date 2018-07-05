/**
 */
package standard;

import org.eclipse.emf.ecore.EObject;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Focus</b></em>'.
 * <!-- end-user-doc -->
 *
 * <!-- begin-model-doc -->
 * A class that defines the core logic or control flow for one or more auxiliary classes that support it. Focus classes are typically used together with one or more Auxiliary classes, and are particularly useful for specifying the core business logic or control flow of components during design. See also: ?Auxiliary?.
 * <p>From package StandardProfile (URI {@literal http://www.omg.org/spec/UML/20131001/StandardProfile}).</p>
 * <!-- end-model-doc -->
 *
 * <p>
 * The following features are supported:
 * </p>
 * <ul>
 *   <li>{@link standard.Focus#getBase_Class <em>Base Class</em>}</li>
 * </ul>
 *
 * @see standard.StandardPackage#getFocus()
 * @model
 * @generated
 */
public interface Focus extends EObject {
	/**
	 * Returns the value of the '<em><b>Base Class</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * <p>From package StandardProfile (URI {@literal http://www.omg.org/spec/UML/20131001/StandardProfile}).</p>
	 * <!-- end-model-doc -->
	 * @return the value of the '<em>Base Class</em>' reference.
	 * @see #setBase_Class(uml.Class)
	 * @see standard.StandardPackage#getFocus_Base_Class()
	 * @model required="true" ordered="false"
	 * @generated
	 */
	uml.Class getBase_Class();

	/**
	 * Sets the value of the '{@link standard.Focus#getBase_Class <em>Base Class</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Base Class</em>' reference.
	 * @see #getBase_Class()
	 * @generated
	 */
	void setBase_Class(uml.Class value);

} // Focus
