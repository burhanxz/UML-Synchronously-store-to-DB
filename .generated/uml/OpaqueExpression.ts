/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Opaque Expression</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * An OpaqueExpression is a ValueSpecification that specifies the computation of a collection of values either in terms of a UML Behavior or based on a textual statement in a language other than UML
     * <p>From package UML::Values.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.OpaqueExpression#getBehavior}</li>
     * <li>{@link uml.OpaqueExpression#getBody}</li>
     * <li>{@link uml.OpaqueExpression#getLanguage}</li>
     * <li>{@link uml.OpaqueExpression#getResult}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getOpaqueExpression()
     * @model
     * @generated
     * @class
     */
    export interface OpaqueExpression extends uml.ValueSpecification {
        /**
         * Returns the value of the '<em><b>Behavior</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Specifies the behavior of the OpaqueExpression as a UML Behavior.
         * <p>From package UML::Values.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Behavior</em>' reference.
         * @see #setBehavior(Behavior)
         * @see uml.UmlPackage#getOpaqueExpression_Behavior()
         * @model ordered="false"
         * @generated
         */
        getBehavior() : uml.Behavior;

        /**
         * Sets the value of the '{@link uml.OpaqueExpression#getBehavior}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Behavior</em>' reference.
         * @see #getBehavior()
         * @generated
         */
        setBehavior(value : uml.Behavior);

        /**
         * Returns the value of the '<em><b>Body</b></em>' attribute list.
         * The list contents are of type {@link java.lang.String}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A textual definition of the behavior of the OpaqueExpression, possibly in multiple languages.
         * <p>From package UML::Values.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Body</em>' attribute list.
         * @see #isSetBody()
         * @see #unsetBody()
         * @see uml.UmlPackage#getOpaqueExpression_Body()
         * @model unique="false" unsettable="true" dataType="types.String"
         * extendedMetaData="kind='element'"
         * @generated
         */
        getBody() : org.eclipse.emf.common.util.EList<string>;

        /**
         * Unsets the value of the '{@link uml.OpaqueExpression#getBody}' attribute list.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #isSetBody()
         * @see #getBody()
         * @generated
         */
        unsetBody();

        /**
         * Returns whether the value of the '{@link uml.OpaqueExpression#getBody}' attribute list is set.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {boolean} whether the value of the '<em>Body</em>' attribute list is set.
         * @see #unsetBody()
         * @see #getBody()
         * @generated
         */
        isSetBody() : boolean;

        /**
         * Returns the value of the '<em><b>Language</b></em>' attribute list.
         * The list contents are of type {@link java.lang.String}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Specifies the languages used to express the textual bodies of the OpaqueExpression.  Languages are matched to body Strings by order. The interpretation of the body depends on the languages. If the languages are unspecified, they may be implicit from the expression body or the context.
         * <p>From package UML::Values.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Language</em>' attribute list.
         * @see #isSetLanguage()
         * @see #unsetLanguage()
         * @see uml.UmlPackage#getOpaqueExpression_Language()
         * @model unsettable="true" dataType="types.String"
         * @generated
         */
        getLanguage() : org.eclipse.emf.common.util.EList<string>;

        /**
         * Unsets the value of the '{@link uml.OpaqueExpression#getLanguage}' attribute list.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #isSetLanguage()
         * @see #getLanguage()
         * @generated
         */
        unsetLanguage();

        /**
         * Returns whether the value of the '{@link uml.OpaqueExpression#getLanguage}' attribute list is set.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {boolean} whether the value of the '<em>Language</em>' attribute list is set.
         * @see #unsetLanguage()
         * @see #getLanguage()
         * @generated
         */
        isSetLanguage() : boolean;

        /**
         * Returns the value of the '<em><b>Result</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If an OpaqueExpression is specified using a UML Behavior, then this refers to the single required return Parameter of that Behavior. When the Behavior completes execution, the values on this Parameter give the result of evaluating the OpaqueExpression.
         * <p>From package UML::Values.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Result</em>' reference.
         * @see uml.UmlPackage#getOpaqueExpression_Result()
         * @model transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getResult() : uml.Parameter;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If the language attribute is not empty, then the size of the body and language arrays must be the same.
         * language->notEmpty() implies (_'body'->size() = language->size())
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        language_body_size(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The behavior must have exactly one return result parameter.
         * behavior <> null implies
         * behavior.ownedParameter->select(direction=ParameterDirectionKind::return)->size() = 1
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        one_return_result_parameter(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The behavior may only have return result parameters.
         * behavior <> null implies behavior.ownedParameter->select(direction<>ParameterDirectionKind::return)->isEmpty()
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        only_return_result_parameters(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The query isIntegral() tells whether an expression is intended to produce an Integer.
         * result = (false)
         * <p>From package UML::Values.</p>
         * <!-- end-model-doc -->
         * @model kind="operation" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         * @return {boolean}
         */
        isIntegral() : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The query isNonNegative() tells whether an integer expression has a non-negative value.
         * self.isIntegral()
         * result = (false)
         * <p>From package UML::Values.</p>
         * <!-- end-model-doc -->
         * @model kind="operation" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         * @return {boolean}
         */
        isNonNegative() : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The query isPositive() tells whether an integer expression has a positive value.
         * result = (false)
         * self.isIntegral()
         * <p>From package UML::Values.</p>
         * <!-- end-model-doc -->
         * @model kind="operation" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         * @return {boolean}
         */
        isPositive() : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The query value() gives an integer value for an expression intended to produce one.
         * self.isIntegral()
         * result = (0)
         * <p>From package UML::Values.</p>
         * <!-- end-model-doc -->
         * @model dataType="types.Integer" required="true" ordered="false"
         * @generated
         * @return {number}
         */
        value() : number;
    }
}

