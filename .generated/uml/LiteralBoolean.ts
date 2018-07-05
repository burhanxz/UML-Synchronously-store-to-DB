/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Literal Boolean</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A LiteralBoolean is a specification of a Boolean value.
     * <p>From package UML::Values.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.LiteralBoolean#isValue}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getLiteralBoolean()
     * @model
     * @generated
     * @class
     */
    export interface LiteralBoolean extends uml.LiteralSpecification {
        /**
         * Returns the value of the '<em><b>Value</b></em>' attribute.
         * The default value is <code>"false"</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The specified Boolean value.
         * <p>From package UML::Values.</p>
         * <!-- end-model-doc -->
         * @return {boolean} the value of the '<em>Value</em>' attribute.
         * @see #setValue(boolean)
         * @see uml.UmlPackage#getLiteralBoolean_Value()
         * @model default="false" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         */
        isValue() : boolean;

        setValue(stereotype? : any, propertyName? : any, newValue? : any) : any;
    }
}

