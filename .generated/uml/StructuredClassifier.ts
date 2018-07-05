/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Structured Classifier</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * StructuredClassifiers may contain an internal structure of connected elements each of which plays a role in the overall Behavior modeled by the StructuredClassifier.
     * <p>From package UML::StructuredClassifiers.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.StructuredClassifier#getOwnedAttribute}</li>
     * <li>{@link uml.StructuredClassifier#getOwnedConnector}</li>
     * <li>{@link uml.StructuredClassifier#getPart}</li>
     * <li>{@link uml.StructuredClassifier#getRole}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getStructuredClassifier()
     * @model abstract="true"
     * @generated
     * @class
     */
    export interface StructuredClassifier extends uml.Classifier {
        /**
         * Returns the value of the '<em><b>Owned Attribute</b></em>' containment reference list.
         * The list contents are of type {@link uml.Property}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Properties owned by the StructuredClassifier.
         * <p>From package UML::StructuredClassifiers.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Owned Attribute</em>' containment reference list.
         * @see uml.UmlPackage#getStructuredClassifier_OwnedAttribute()
         * @model containment="true"
         * @generated
         */
        getOwnedAttribute() : org.eclipse.emf.common.util.EList<uml.Property>;

        /**
         * Returns the value of the '<em><b>Owned Connector</b></em>' containment reference list.
         * The list contents are of type {@link uml.Connector}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The connectors owned by the StructuredClassifier.
         * <p>From package UML::StructuredClassifiers.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Owned Connector</em>' containment reference list.
         * @see uml.UmlPackage#getStructuredClassifier_OwnedConnector()
         * @model containment="true" ordered="false"
         * @generated
         */
        getOwnedConnector() : org.eclipse.emf.common.util.EList<uml.Connector>;

        /**
         * Returns the value of the '<em><b>Part</b></em>' reference list.
         * The list contents are of type {@link uml.Property}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Properties specifying instances that the StructuredClassifier owns by composition. This collection is derived, selecting those owned Properties where isComposite is true.
         * <p>From package UML::StructuredClassifiers.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Part</em>' reference list.
         * @see uml.UmlPackage#getStructuredClassifier_Part()
         * @model transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getPart() : org.eclipse.emf.common.util.EList<uml.Property>;

        /**
         * Returns the value of the '<em><b>Role</b></em>' reference list.
         * The list contents are of type {@link uml.ConnectableElement}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The roles that instances may play in this StructuredClassifier.
         * <p>From package UML::StructuredClassifiers.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Role</em>' reference list.
         * @see uml.UmlPackage#getStructuredClassifier_Role()
         * @model transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getRole() : org.eclipse.emf.common.util.EList<uml.ConnectableElement>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Creates a property with the specified name, type, lower bound, and upper bound as an owned attribute of this structured classifier.
         * @param {string} name The name for the new attribute, or null.
         * @param {*} type The type for the new attribute, or null.
         * @param {number} lower The lower bound for the new attribute.
         * @param {number} upper The upper bound for the new attribute.
         * <!-- end-model-doc -->
         * @model required="true" ordered="false" nameDataType="types.String" nameOrdered="false" typeOrdered="false" lowerDataType="types.Integer" lowerRequired="true" lowerOrdered="false" upperDataType="types.UnlimitedNatural" upperRequired="true" upperOrdered="false"
         * @generated
         * @return {*}
         */
        createOwnedAttribute(name : string, type : uml.Type, lower : number, upper : number) : uml.Property;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * All features of type ConnectableElement, equivalent to all direct and inherited roles.
         * result = (allFeatures()->select(oclIsKindOf(ConnectableElement))->collect(oclAsType(ConnectableElement))->asSet())
         * <p>From package UML::StructuredClassifiers.</p>
         * <!-- end-model-doc -->
         * @model ordered="false"
         * @generated
         * @return {*}
         */
        allRoles() : org.eclipse.emf.common.util.EList<uml.ConnectableElement>;
    }
}

