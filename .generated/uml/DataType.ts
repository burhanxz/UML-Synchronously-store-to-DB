/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Data Type</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A DataType is a type whose instances are identified only by their value.
     * <p>From package UML::SimpleClassifiers.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.DataType#getOwnedAttribute}</li>
     * <li>{@link uml.DataType#getOwnedOperation}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getDataType()
     * @model
     * @generated
     * @class
     */
    export interface DataType extends uml.Classifier {
        /**
         * Returns the value of the '<em><b>Owned Attribute</b></em>' containment reference list.
         * The list contents are of type {@link uml.Property}.
         * It is bidirectional and its opposite is '{@link uml.Property#getDatatype}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The attributes owned by the DataType.
         * <p>From package UML::SimpleClassifiers.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Owned Attribute</em>' containment reference list.
         * @see uml.UmlPackage#getDataType_OwnedAttribute()
         * @see uml.Property#getDatatype
         * @model opposite="datatype" containment="true"
         * @generated
         */
        getOwnedAttribute() : org.eclipse.emf.common.util.EList<uml.Property>;

        /**
         * Returns the value of the '<em><b>Owned Operation</b></em>' containment reference list.
         * The list contents are of type {@link uml.Operation}.
         * It is bidirectional and its opposite is '{@link uml.Operation#getDatatype}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Operations owned by the DataType.
         * <p>From package UML::SimpleClassifiers.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Owned Operation</em>' containment reference list.
         * @see uml.UmlPackage#getDataType_OwnedOperation()
         * @see uml.Operation#getDatatype
         * @model opposite="datatype" containment="true"
         * @generated
         */
        getOwnedOperation() : org.eclipse.emf.common.util.EList<uml.Operation>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Creates a property with the specified name, type, lower bound, and upper bound as an owned attribute of this data type.
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
         * Creates an operation with the specified name, parameter names, parameter types, and return type (or null) as an owned operation of this data type.
         * @param {string} name The name for the new operation, or null.
         * @param {*} parameterNames The parameter names for the new operation, or null.
         * @param {*} parameterTypes The parameter types for the new operation, or null.
         * @param {*} returnType The return type for the new operation, or null.
         * <!-- end-model-doc -->
         * @model required="true" ordered="false" nameDataType="types.String" nameOrdered="false" parameterNamesDataType="types.String" parameterNamesMany="true" parameterNamesOrdered="false" parameterTypesMany="true" parameterTypesOrdered="false" returnTypeOrdered="false"
         * @generated
         * @return {*}
         */
        createOwnedOperation(name : string, parameterNames : org.eclipse.emf.common.util.EList<string>, parameterTypes : org.eclipse.emf.common.util.EList<uml.Type>, returnType : uml.Type) : uml.Operation;
    }
}

