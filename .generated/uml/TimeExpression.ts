/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Time Expression</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A TimeExpression is a ValueSpecification that represents a time value.
     * <p>From package UML::Values.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.TimeExpression#getExpr}</li>
     * <li>{@link uml.TimeExpression#getObservation}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getTimeExpression()
     * @model
     * @generated
     * @class
     */
    export interface TimeExpression extends uml.ValueSpecification {
        /**
         * Returns the value of the '<em><b>Expr</b></em>' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A ValueSpecification that evaluates to the value of the TimeExpression.
         * <p>From package UML::Values.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Expr</em>' containment reference.
         * @see #setExpr(ValueSpecification)
         * @see uml.UmlPackage#getTimeExpression_Expr()
         * @model containment="true" ordered="false"
         * @generated
         */
        getExpr() : uml.ValueSpecification;

        /**
         * Sets the value of the '{@link uml.TimeExpression#getExpr}' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Expr</em>' containment reference.
         * @see #getExpr()
         * @generated
         */
        setExpr(value : uml.ValueSpecification);

        /**
         * Returns the value of the '<em><b>Observation</b></em>' reference list.
         * The list contents are of type {@link uml.Observation}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Refers to the Observations that are involved in the computation of the TimeExpression value.
         * <p>From package UML::Values.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Observation</em>' reference list.
         * @see uml.UmlPackage#getTimeExpression_Observation()
         * @model ordered="false"
         * @generated
         */
        getObservation() : org.eclipse.emf.common.util.EList<uml.Observation>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If a TimeExpression has no expr, then it must have a single observation that is a TimeObservation.
         * expr = null implies (observation->size() = 1 and observation->forAll(oclIsKindOf(TimeObservation)))
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        no_expr_requires_observation(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

