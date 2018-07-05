/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>String Expression</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A StringExpression is an Expression that specifies a String value that is derived by concatenating a sequence of operands with String values or a sequence of subExpressions, some of which might be template parameters.
     * <p>From package UML::Values.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.StringExpression#getOwningExpression}</li>
     * <li>{@link uml.StringExpression#getSubExpression}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getStringExpression()
     * @model
     * @generated
     * @class
     */
    export interface StringExpression extends uml.Expression, uml.TemplateableElement {
        /**
         * Returns the value of the '<em><b>Owning Expression</b></em>' container reference.
         * It is bidirectional and its opposite is '{@link uml.StringExpression#getSubExpression}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The StringExpression of which this StringExpression is a subExpression.
         * <p>From package UML::Values.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Owning Expression</em>' container reference.
         * @see #setOwningExpression(StringExpression)
         * @see uml.UmlPackage#getStringExpression_OwningExpression()
         * @see uml.StringExpression#getSubExpression
         * @model opposite="subExpression" transient="false" ordered="false"
         * @generated
         */
        getOwningExpression() : StringExpression;

        /**
         * Sets the value of the '{@link uml.StringExpression#getOwningExpression}' container reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Owning Expression</em>' container reference.
         * @see #getOwningExpression()
         * @generated
         */
        setOwningExpression(value : StringExpression);

        /**
         * Returns the value of the '<em><b>Sub Expression</b></em>' containment reference list.
         * The list contents are of type {@link uml.StringExpression}.
         * It is bidirectional and its opposite is '{@link uml.StringExpression#getOwningExpression}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The StringExpressions that constitute this StringExpression.
         * <p>From package UML::Values.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Sub Expression</em>' containment reference list.
         * @see uml.UmlPackage#getStringExpression_SubExpression()
         * @see uml.StringExpression#getOwningExpression
         * @model opposite="owningExpression" containment="true"
         * @generated
         */
        getSubExpression() : org.eclipse.emf.common.util.EList<StringExpression>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * All the operands of a StringExpression must be LiteralStrings
         * operand->forAll (oclIsKindOf (LiteralString))
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        operands(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If a StringExpression has sub-expressions, it cannot have operands and vice versa (this avoids the problem of having to define a collating sequence between operands and subexpressions).
         * if subExpression->notEmpty() then operand->isEmpty() else operand->notEmpty() endif
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        subexpressions(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

