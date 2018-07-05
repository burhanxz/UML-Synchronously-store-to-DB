/**
 */
package uml;


/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Variable</b></em>'.
 * <!-- end-user-doc -->
 *
 * <!-- begin-model-doc -->
 * A Variable is a ConnectableElement that may store values during the execution of an Activity. Reading and writing the values of a Variable provides an alternative means for passing data than the use of ObjectFlows. A Variable may be owned directly by an Activity, in which case it is accessible from anywhere within that activity, or it may be owned by a StructuredActivityNode, in which case it is only accessible within that node.
 * <p>From package UML::Activities.</p>
 * <!-- end-model-doc -->
 *
 * <p>
 * The following features are supported:
 * </p>
 * <ul>
 *   <li>{@link uml.Variable#getActivityScope <em>Activity Scope</em>}</li>
 *   <li>{@link uml.Variable#getScope <em>Scope</em>}</li>
 * </ul>
 *
 * @see uml.UmlPackage#getVariable()
 * @model
 * @generated
 */
public interface Variable extends ConnectableElement, MultiplicityElement {
	/**
	 * Returns the value of the '<em><b>Activity Scope</b></em>' container reference.
	 * It is bidirectional and its opposite is '{@link uml.Activity#getVariable <em>Variable</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * An Activity that owns the Variable.
	 * <p>From package UML::Activities.</p>
	 * <!-- end-model-doc -->
	 * @return the value of the '<em>Activity Scope</em>' container reference.
	 * @see #setActivityScope(Activity)
	 * @see uml.UmlPackage#getVariable_ActivityScope()
	 * @see uml.Activity#getVariable
	 * @model opposite="variable" transient="false" ordered="false"
	 * @generated
	 */
	Activity getActivityScope();

	/**
	 * Sets the value of the '{@link uml.Variable#getActivityScope <em>Activity Scope</em>}' container reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Activity Scope</em>' container reference.
	 * @see #getActivityScope()
	 * @generated
	 */
	void setActivityScope(Activity value);

	/**
	 * Returns the value of the '<em><b>Scope</b></em>' container reference.
	 * It is bidirectional and its opposite is '{@link uml.StructuredActivityNode#getVariable <em>Variable</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * A StructuredActivityNode that owns the Variable.
	 * <p>From package UML::Activities.</p>
	 * <!-- end-model-doc -->
	 * @return the value of the '<em>Scope</em>' container reference.
	 * @see #setScope(StructuredActivityNode)
	 * @see uml.UmlPackage#getVariable_Scope()
	 * @see uml.StructuredActivityNode#getVariable
	 * @model opposite="variable" transient="false" ordered="false"
	 * @generated
	 */
	StructuredActivityNode getScope();

	/**
	 * Sets the value of the '{@link uml.Variable#getScope <em>Scope</em>}' container reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Scope</em>' container reference.
	 * @see #getScope()
	 * @generated
	 */
	void setScope(StructuredActivityNode value);

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * A Variable is accessible by Actions within its scope (the Activity or StructuredActivityNode that owns it).
	 * result = (if scope<>null then scope.allOwnedNodes()->includes(a)
	 * else a.containingActivity()=activityScope
	 * endif)
	 * <p>From package UML::Activities.</p>
	 * <!-- end-model-doc -->
	 * @model dataType="types.Boolean" required="true" ordered="false" aRequired="true" aOrdered="false"
	 * @generated
	 */
	boolean isAccessibleBy(Action a);

} // Variable
