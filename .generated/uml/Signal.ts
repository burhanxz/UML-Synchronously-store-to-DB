/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Signal</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A Signal is a specification of a kind of communication between objects in which a reaction is asynchronously triggered in the receiver without a reply.
     * <p>From package UML::SimpleClassifiers.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.Signal#getOwnedAttribute}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getSignal()
     * @model
     * @generated
     * @class
     */
    export interface Signal extends uml.Classifier {
        /**
         * Returns the value of the '<em><b>Owned Attribute</b></em>' containment reference list.
         * The list contents are of type {@link uml.Property}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The attributes owned by the Signal.
         * <p>From package UML::SimpleClassifiers.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Owned Attribute</em>' containment reference list.
         * @see uml.UmlPackage#getSignal_OwnedAttribute()
         * @model containment="true"
         * @generated
         */
        getOwnedAttribute() : org.eclipse.emf.common.util.EList<uml.Property>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Creates a property with the specified name, type, lower bound, and upper bound as an owned attribute of this signal.
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
    }
}

