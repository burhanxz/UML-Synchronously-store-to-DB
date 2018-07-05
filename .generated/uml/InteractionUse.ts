/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Interaction Use</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * An InteractionUse refers to an Interaction. The InteractionUse is a shorthand for copying the contents of the referenced Interaction where the InteractionUse is. To be accurate the copying must take into account substituting parameters with arguments and connect the formal Gates with the actual ones.
     * <p>From package UML::Interactions.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.InteractionUse#getActualGate}</li>
     * <li>{@link uml.InteractionUse#getArgument}</li>
     * <li>{@link uml.InteractionUse#getRefersTo}</li>
     * <li>{@link uml.InteractionUse#getReturnValue}</li>
     * <li>{@link uml.InteractionUse#getReturnValueRecipient}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getInteractionUse()
     * @model
     * @generated
     * @class
     */
    export interface InteractionUse extends uml.InteractionFragment {
        /**
         * Returns the value of the '<em><b>Actual Gate</b></em>' containment reference list.
         * The list contents are of type {@link uml.Gate}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The actual gates of the InteractionUse.
         * <p>From package UML::Interactions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Actual Gate</em>' containment reference list.
         * @see uml.UmlPackage#getInteractionUse_ActualGate()
         * @model containment="true" ordered="false"
         * @generated
         */
        getActualGate() : org.eclipse.emf.common.util.EList<uml.Gate>;

        /**
         * Returns the value of the '<em><b>Argument</b></em>' containment reference list.
         * The list contents are of type {@link uml.ValueSpecification}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The actual arguments of the Interaction.
         * <p>From package UML::Interactions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Argument</em>' containment reference list.
         * @see uml.UmlPackage#getInteractionUse_Argument()
         * @model containment="true"
         * @generated
         */
        getArgument() : org.eclipse.emf.common.util.EList<uml.ValueSpecification>;

        /**
         * Returns the value of the '<em><b>Refers To</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Refers to the Interaction that defines its meaning.
         * <p>From package UML::Interactions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Refers To</em>' reference.
         * @see #setRefersTo(Interaction)
         * @see uml.UmlPackage#getInteractionUse_RefersTo()
         * @model required="true" ordered="false"
         * @generated
         */
        getRefersTo() : uml.Interaction;

        /**
         * Sets the value of the '{@link uml.InteractionUse#getRefersTo}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Refers To</em>' reference.
         * @see #getRefersTo()
         * @generated
         */
        setRefersTo(value : uml.Interaction);

        /**
         * Returns the value of the '<em><b>Return Value</b></em>' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The value of the executed Interaction.
         * <p>From package UML::Interactions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Return Value</em>' containment reference.
         * @see #setReturnValue(ValueSpecification)
         * @see uml.UmlPackage#getInteractionUse_ReturnValue()
         * @model containment="true" ordered="false"
         * @generated
         */
        getReturnValue() : uml.ValueSpecification;

        /**
         * Sets the value of the '{@link uml.InteractionUse#getReturnValue}' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Return Value</em>' containment reference.
         * @see #getReturnValue()
         * @generated
         */
        setReturnValue(value : uml.ValueSpecification);

        /**
         * Returns the value of the '<em><b>Return Value Recipient</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The recipient of the return value.
         * <p>From package UML::Interactions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Return Value Recipient</em>' reference.
         * @see #setReturnValueRecipient(Property)
         * @see uml.UmlPackage#getInteractionUse_ReturnValueRecipient()
         * @model ordered="false"
         * @generated
         */
        getReturnValueRecipient() : uml.Property;

        /**
         * Sets the value of the '{@link uml.InteractionUse#getReturnValueRecipient}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Return Value Recipient</em>' reference.
         * @see #getReturnValueRecipient()
         * @generated
         */
        setReturnValueRecipient(value : uml.Property);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Actual Gates of the InteractionUse must match Formal Gates of the referred Interaction. Gates match when their names are equal and their messages correspond.
         * actualGate->notEmpty() implies
         * refersTo.formalGate->forAll( fg : Gate | self.actualGate->select(matches(fg))->size()=1) and
         * self.actualGate->forAll(ag : Gate | refersTo.formalGate->select(matches(ag))->size()=1)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        gates_match(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The arguments must only be constants, parameters of the enclosing Interaction or attributes of the classifier owning the enclosing Interaction.
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        arguments_are_constants(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The returnValueRecipient must be a Property of a ConnectableElement that is represented by a Lifeline covered by this InteractionUse.
         * returnValueRecipient->asSet()->notEmpty() implies
         * let covCE : Set(ConnectableElement) = covered.represents->asSet() in
         * covCE->notEmpty() and let classes:Set(Classifier) = covCE.type.oclIsKindOf(Classifier).oclAsType(Classifier)->asSet() in
         * let allProps : Set(Property) = classes.attribute->union(classes.allParents().attribute)->asSet() in
         * allProps->includes(returnValueRecipient)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        returnValueRecipient_coverage(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The arguments of the InteractionUse must correspond to parameters of the referred Interaction.
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        arguments_correspond_to_parameters(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The type of the returnValue must correspond to the type of the returnValueRecipient.
         * returnValue.type->asSequence()->notEmpty() implies returnValue.type->asSequence()->first() = returnValueRecipient.type->asSequence()->first()
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        returnValue_type_recipient_correspondence(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The InteractionUse must cover all Lifelines of the enclosing Interaction that are common with the lifelines covered by the referred Interaction. Lifelines are common if they have the same selector and represents associationEnd values.
         * let parentInteraction : Set(Interaction) = enclosingInteraction->asSet()->
         * union(enclosingOperand.combinedFragment->closure(enclosingOperand.combinedFragment)->
         * collect(enclosingInteraction).oclAsType(Interaction)->asSet()) in
         * parentInteraction->size()=1 and let refInteraction : Interaction = refersTo in
         * parentInteraction.covered-> forAll(intLifeline : Lifeline | refInteraction.covered->
         * forAll( refLifeline : Lifeline | refLifeline.represents = intLifeline.represents and
         * (
         * ( refLifeline.selector.oclIsKindOf(LiteralString) implies
         * intLifeline.selector.oclIsKindOf(LiteralString) and
         * refLifeline.selector.oclAsType(LiteralString).value = intLifeline.selector.oclAsType(LiteralString).value ) and
         * ( refLifeline.selector.oclIsKindOf(LiteralInteger) implies
         * intLifeline.selector.oclIsKindOf(LiteralInteger) and
         * refLifeline.selector.oclAsType(LiteralInteger).value = intLifeline.selector.oclAsType(LiteralInteger).value )
         * )
         * implies self.covered->asSet()->includes(intLifeline)))
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        all_lifelines(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

