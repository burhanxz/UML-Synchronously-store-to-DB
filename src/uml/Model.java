/**
 */
package uml;


/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Model</b></em>'.
 * <!-- end-user-doc -->
 *
 * <!-- begin-model-doc -->
 * A model captures a view of a physical system. It is an abstraction of the physical system, with a certain purpose. This purpose determines what is to be included in the model and what is irrelevant. Thus the model completely describes those aspects of the physical system that are relevant to the purpose of the model, at the appropriate level of detail.
 * <p>From package UML::Packages.</p>
 * <!-- end-model-doc -->
 *
 * <p>
 * The following features are supported:
 * </p>
 * <ul>
 *   <li>{@link uml.Model#getViewpoint <em>Viewpoint</em>}</li>
 * </ul>
 *
 * @see uml.UmlPackage#getModel()
 * @model
 * @generated
 */
public interface Model extends uml.Package {
	/**
	 * Returns the value of the '<em><b>Viewpoint</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * The name of the viewpoint that is expressed by a model (this name may refer to a profile definition).
	 * <p>From package UML::Packages.</p>
	 * <!-- end-model-doc -->
	 * @return the value of the '<em>Viewpoint</em>' attribute.
	 * @see #isSetViewpoint()
	 * @see #unsetViewpoint()
	 * @see #setViewpoint(String)
	 * @see uml.UmlPackage#getModel_Viewpoint()
	 * @model unsettable="true" dataType="types.String" ordered="false"
	 * @generated
	 */
	String getViewpoint();

	/**
	 * Sets the value of the '{@link uml.Model#getViewpoint <em>Viewpoint</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Viewpoint</em>' attribute.
	 * @see #isSetViewpoint()
	 * @see #unsetViewpoint()
	 * @see #getViewpoint()
	 * @generated
	 */
	void setViewpoint(String value);

	/**
	 * Unsets the value of the '{@link uml.Model#getViewpoint <em>Viewpoint</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #isSetViewpoint()
	 * @see #getViewpoint()
	 * @see #setViewpoint(String)
	 * @generated
	 */
	void unsetViewpoint();

	/**
	 * Returns whether the value of the '{@link uml.Model#getViewpoint <em>Viewpoint</em>}' attribute is set.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return whether the value of the '<em>Viewpoint</em>' attribute is set.
	 * @see #unsetViewpoint()
	 * @see #getViewpoint()
	 * @see #setViewpoint(String)
	 * @generated
	 */
	boolean isSetViewpoint();

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * Determines whether this model is a metamodel.
	 * <!-- end-model-doc -->
	 * @model kind="operation" dataType="types.Boolean" required="true" ordered="false"
	 * @generated
	 */
	boolean isMetamodel();

} // Model
