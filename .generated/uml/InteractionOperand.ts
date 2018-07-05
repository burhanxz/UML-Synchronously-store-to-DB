/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Interaction Operand</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * An InteractionOperand is contained in a CombinedFragment. An InteractionOperand represents one operand of the expression given by the enclosing CombinedFragment.
     * <p>From package UML::Interactions.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.InteractionOperand#getFragment}</li>
     * <li>{@link uml.InteractionOperand#getGuard}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getInteractionOperand()
     * @model
     * @generated
     * @class
     */
    export interface InteractionOperand extends uml.Namespace, uml.InteractionFragment {
        /**
         * Returns the value of the '<em><b>Fragment</b></em>' containment reference list.
         * The list contents are of type {@link uml.InteractionFragment}.
         * It is bidirectional and its opposite is '{@link uml.InteractionFragment#getEnclosingOperand}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The fragments of the operand.
         * <p>From package UML::Interactions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Fragment</em>' containment reference list.
         * @see uml.UmlPackage#getInteractionOperand_Fragment()
         * @see uml.InteractionFragment#getEnclosingOperand
         * @model opposite="enclosingOperand" containment="true"
         * @generated
         */
        getFragment() : org.eclipse.emf.common.util.EList<uml.InteractionFragment>;

        /**
         * Returns the value of the '<em><b>Guard</b></em>' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Constraint of the operand.
         * <p>From package UML::Interactions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Guard</em>' containment reference.
         * @see #setGuard(InteractionConstraint)
         * @see uml.UmlPackage#getInteractionOperand_Guard()
         * @model containment="true" ordered="false"
         * @generated
         */
        getGuard() : uml.InteractionConstraint;

        /**
         * Sets the value of the '{@link uml.InteractionOperand#getGuard}' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Guard</em>' containment reference.
         * @see #getGuard()
         * @generated
         */
        setGuard(value : uml.InteractionConstraint);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The guard must contain only references to values local to the Lifeline on which it resides, or values global to the whole Interaction.
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        guard_contain_references(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The guard must be placed directly prior to (above) the OccurrenceSpecification that will become the first OccurrenceSpecification within this InteractionOperand.
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        guard_directly_prior(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

