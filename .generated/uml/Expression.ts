/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Expression</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * An Expression represents a node in an expression tree, which may be non-terminal or terminal. It defines a symbol, and has a possibly empty sequence of operands that are ValueSpecifications. It denotes a (possibly empty) set of values when evaluated in a context.
     * <p>From package UML::Values.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.Expression#getOperand}</li>
     * <li>{@link uml.Expression#getSymbol}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getExpression()
     * @model
     * @generated
     * @class
     */
    export interface Expression extends uml.ValueSpecification {
        /**
         * Returns the value of the '<em><b>Operand</b></em>' containment reference list.
         * The list contents are of type {@link uml.ValueSpecification}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Specifies a sequence of operand ValueSpecifications.
         * <p>From package UML::Values.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Operand</em>' containment reference list.
         * @see uml.UmlPackage#getExpression_Operand()
         * @model containment="true"
         * @generated
         */
        getOperand() : org.eclipse.emf.common.util.EList<uml.ValueSpecification>;

        /**
         * Returns the value of the '<em><b>Symbol</b></em>' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The symbol associated with this node in the expression tree.
         * <p>From package UML::Values.</p>
         * <!-- end-model-doc -->
         * @return {string} the value of the '<em>Symbol</em>' attribute.
         * @see #isSetSymbol()
         * @see #unsetSymbol()
         * @see #setSymbol(String)
         * @see uml.UmlPackage#getExpression_Symbol()
         * @model unsettable="true" dataType="types.String" ordered="false"
         * @generated
         */
        getSymbol() : string;

        /**
         * Sets the value of the '{@link uml.Expression#getSymbol}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {string} value the new value of the '<em>Symbol</em>' attribute.
         * @see #isSetSymbol()
         * @see #unsetSymbol()
         * @see #getSymbol()
         * @generated
         */
        setSymbol(value : string);

        /**
         * Unsets the value of the '{@link uml.Expression#getSymbol}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #isSetSymbol()
         * @see #getSymbol()
         * @see #setSymbol(String)
         * @generated
         */
        unsetSymbol();

        /**
         * Returns whether the value of the '{@link uml.Expression#getSymbol}' attribute is set.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {boolean} whether the value of the '<em>Symbol</em>' attribute is set.
         * @see #unsetSymbol()
         * @see #getSymbol()
         * @see #setSymbol(String)
         * @generated
         */
        isSetSymbol() : boolean;
    }
}

