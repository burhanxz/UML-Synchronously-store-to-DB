/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Abstraction</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * An Abstraction is a Relationship that relates two Elements or sets of Elements that represent the same concept at different levels of abstraction or from different viewpoints.
     * <p>From package UML::CommonStructure.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.Abstraction#getMapping}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getAbstraction()
     * @model
     * @generated
     * @class
     */
    export interface Abstraction extends uml.Dependency {
        /**
         * Returns the value of the '<em><b>Mapping</b></em>' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * An OpaqueExpression that states the abstraction relationship between the supplier(s) and the client(s). In some cases, such as derivation, it is usually formal and unidirectional; in other cases, such as trace, it is usually informal and bidirectional. The mapping expression is optional and may be omitted if the precise relationship between the Elements is not specified.
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Mapping</em>' containment reference.
         * @see #setMapping(OpaqueExpression)
         * @see uml.UmlPackage#getAbstraction_Mapping()
         * @model containment="true" ordered="false"
         * @generated
         */
        getMapping() : uml.OpaqueExpression;

        /**
         * Sets the value of the '{@link uml.Abstraction#getMapping}' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Mapping</em>' containment reference.
         * @see #getMapping()
         * @generated
         */
        setMapping(value : uml.OpaqueExpression);
    }
}

