/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Literal String</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A LiteralString is a specification of a String value.
     * <p>From package UML::Values.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.LiteralString#getValue}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getLiteralString()
     * @model
     * @generated
     * @class
     */
    export interface LiteralString extends uml.LiteralSpecification {
        getValue(stereotype? : any, propertyName? : any) : any;

        setValue(stereotype? : any, propertyName? : any, newValue? : any) : any;

        /**
         * Unsets the value of the '{@link uml.LiteralString#getValue}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #isSetValue()
         * @see #getValue()
         * @see #setValue(String)
         * @generated
         */
        unsetValue();

        /**
         * Returns whether the value of the '{@link uml.LiteralString#getValue}' attribute is set.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {boolean} whether the value of the '<em>Value</em>' attribute is set.
         * @see #unsetValue()
         * @see #getValue()
         * @see #setValue(String)
         * @generated
         */
        isSetValue() : boolean;
    }
}

