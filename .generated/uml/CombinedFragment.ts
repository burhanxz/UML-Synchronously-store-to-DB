/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Combined Fragment</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A CombinedFragment defines an expression of InteractionFragments. A CombinedFragment is defined by an interaction operator and corresponding InteractionOperands. Through the use of CombinedFragments the user will be able to describe a number of traces in a compact and concise manner.
     * <p>From package UML::Interactions.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.CombinedFragment#getCfragmentGate}</li>
     * <li>{@link uml.CombinedFragment#getInteractionOperator}</li>
     * <li>{@link uml.CombinedFragment#getOperand}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getCombinedFragment()
     * @model
     * @generated
     * @class
     */
    export interface CombinedFragment extends uml.InteractionFragment {
        /**
         * Returns the value of the '<em><b>Cfragment Gate</b></em>' containment reference list.
         * The list contents are of type {@link uml.Gate}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Specifies the gates that form the interface between this CombinedFragment and its surroundings
         * <p>From package UML::Interactions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Cfragment Gate</em>' containment reference list.
         * @see uml.UmlPackage#getCombinedFragment_CfragmentGate()
         * @model containment="true" ordered="false"
         * @generated
         */
        getCfragmentGate() : org.eclipse.emf.common.util.EList<uml.Gate>;

        /**
         * Returns the value of the '<em><b>Interaction Operator</b></em>' attribute.
         * The default value is <code>"seq"</code>.
         * The literals are from the enumeration {@link uml.InteractionOperatorKind}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Specifies the operation which defines the semantics of this combination of InteractionFragments.
         * <p>From package UML::Interactions.</p>
         * <!-- end-model-doc -->
         * @return {uml.InteractionOperatorKind} the value of the '<em>Interaction Operator</em>' attribute.
         * @see uml.InteractionOperatorKind
         * @see #setInteractionOperator(InteractionOperatorKind)
         * @see uml.UmlPackage#getCombinedFragment_InteractionOperator()
         * @model default="seq" required="true" ordered="false"
         * @generated
         */
        getInteractionOperator() : uml.InteractionOperatorKind;

        /**
         * Sets the value of the '{@link uml.CombinedFragment#getInteractionOperator}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {uml.InteractionOperatorKind} value the new value of the '<em>Interaction Operator</em>' attribute.
         * @see uml.InteractionOperatorKind
         * @see #getInteractionOperator()
         * @generated
         */
        setInteractionOperator(value : uml.InteractionOperatorKind);

        /**
         * Returns the value of the '<em><b>Operand</b></em>' containment reference list.
         * The list contents are of type {@link uml.InteractionOperand}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The set of operands of the combined fragment.
         * <p>From package UML::Interactions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Operand</em>' containment reference list.
         * @see uml.UmlPackage#getCombinedFragment_Operand()
         * @model containment="true" required="true"
         * @generated
         */
        getOperand() : org.eclipse.emf.common.util.EList<uml.InteractionOperand>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If the interactionOperator is break, the corresponding InteractionOperand must cover all Lifelines covered by the enclosing InteractionFragment.
         * interactionOperator=InteractionOperatorKind::break  implies
         * enclosingInteraction.oclAsType(InteractionFragment)->asSet()->union(
         * enclosingOperand.oclAsType(InteractionFragment)->asSet()).covered->asSet() = self.covered->asSet()
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        break_(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The interaction operators 'consider' and 'ignore' can only be used for the ConsiderIgnoreFragment subtype of CombinedFragment
         * ((interactionOperator = InteractionOperatorKind::consider) or (interactionOperator =  InteractionOperatorKind::ignore)) implies oclIsKindOf(ConsiderIgnoreFragment)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        consider_and_ignore(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If the interactionOperator is opt, loop, break, assert or neg, there must be exactly one operand.
         * (interactionOperator =  InteractionOperatorKind::opt or interactionOperator = InteractionOperatorKind::loop or
         * interactionOperator = InteractionOperatorKind::break or interactionOperator = InteractionOperatorKind::assert or
         * interactionOperator = InteractionOperatorKind::neg)
         * implies operand->size()=1
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        opt_loop_break_neg(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

