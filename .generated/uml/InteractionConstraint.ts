/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Interaction Constraint</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * An InteractionConstraint is a Boolean expression that guards an operand in a CombinedFragment.
     * <p>From package UML::Interactions.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.InteractionConstraint#getMaxint}</li>
     * <li>{@link uml.InteractionConstraint#getMinint}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getInteractionConstraint()
     * @model
     * @generated
     * @class
     */
    export interface InteractionConstraint extends uml.Constraint {
        /**
         * Returns the value of the '<em><b>Maxint</b></em>' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The maximum number of iterations of a loop
         * <p>From package UML::Interactions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Maxint</em>' containment reference.
         * @see #setMaxint(ValueSpecification)
         * @see uml.UmlPackage#getInteractionConstraint_Maxint()
         * @model containment="true" ordered="false"
         * @generated
         */
        getMaxint() : uml.ValueSpecification;

        /**
         * Sets the value of the '{@link uml.InteractionConstraint#getMaxint}' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Maxint</em>' containment reference.
         * @see #getMaxint()
         * @generated
         */
        setMaxint(value : uml.ValueSpecification);

        /**
         * Returns the value of the '<em><b>Minint</b></em>' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The minimum number of iterations of a loop
         * <p>From package UML::Interactions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Minint</em>' containment reference.
         * @see #setMinint(ValueSpecification)
         * @see uml.UmlPackage#getInteractionConstraint_Minint()
         * @model containment="true" ordered="false"
         * @generated
         */
        getMinint() : uml.ValueSpecification;

        /**
         * Sets the value of the '{@link uml.InteractionConstraint#getMinint}' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Minint</em>' containment reference.
         * @see #getMinint()
         * @generated
         */
        setMinint(value : uml.ValueSpecification);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Minint/maxint can only be present if the InteractionConstraint is associated with the operand of a loop CombinedFragment.
         * maxint->notEmpty() or minint->notEmpty() implies
         * interactionOperand.combinedFragment.interactionOperator =
         * InteractionOperatorKind::loop
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        minint_maxint(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If minint is specified, then the expression must evaluate to a non-negative integer.
         * minint->notEmpty() implies
         * minint->asSequence()->first().integerValue() >= 0
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        minint_non_negative(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If maxint is specified, then the expression must evaluate to a positive integer.
         * maxint->notEmpty() implies
         * maxint->asSequence()->first().integerValue() > 0
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        maxint_positive(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The dynamic variables that take part in the constraint must be owned by the ConnectableElement corresponding to the covered Lifeline.
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        dynamic_variables(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The constraint may contain references to global data or write-once data.
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        global_data(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If maxint is specified, then minint must be specified and the evaluation of maxint must be >= the evaluation of minint.
         * maxint->notEmpty() implies (minint->notEmpty() and
         * maxint->asSequence()->first().integerValue() >=
         * minint->asSequence()->first().integerValue() )
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        maxint_greater_equal_minint(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

