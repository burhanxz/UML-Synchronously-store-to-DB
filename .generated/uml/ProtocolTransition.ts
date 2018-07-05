/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Protocol Transition</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A ProtocolTransition specifies a legal Transition for an Operation. Transitions of ProtocolStateMachines have the following information: a pre-condition (guard), a Trigger, and a post-condition. Every ProtocolTransition is associated with at most one BehavioralFeature belonging to the context Classifier of the ProtocolStateMachine.
     * <p>From package UML::StateMachines.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.ProtocolTransition#getPostCondition}</li>
     * <li>{@link uml.ProtocolTransition#getPreCondition}</li>
     * <li>{@link uml.ProtocolTransition#getReferred}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getProtocolTransition()
     * @model
     * @generated
     * @class
     */
    export interface ProtocolTransition extends uml.Transition {
        /**
         * Returns the value of the '<em><b>Post Condition</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Specifies the post condition of the Transition which is the Condition that should be obtained once the Transition is triggered. This post condition is part of the post condition of the Operation connected to the Transition.
         * <p>From package UML::StateMachines.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Post Condition</em>' reference.
         * @see #setPostCondition(Constraint)
         * @see uml.UmlPackage#getProtocolTransition_PostCondition()
         * @model ordered="false"
         * @generated
         */
        getPostCondition() : uml.Constraint;

        /**
         * Sets the value of the '{@link uml.ProtocolTransition#getPostCondition}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Post Condition</em>' reference.
         * @see #getPostCondition()
         * @generated
         */
        setPostCondition(value : uml.Constraint);

        /**
         * Returns the value of the '<em><b>Pre Condition</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Specifies the precondition of the Transition. It specifies the Condition that should be verified before triggering the Transition. This guard condition added to the source State will be evaluated as part of the precondition of the Operation referred by the Transition if any.
         * <p>From package UML::StateMachines.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Pre Condition</em>' reference.
         * @see #setPreCondition(Constraint)
         * @see uml.UmlPackage#getProtocolTransition_PreCondition()
         * @model ordered="false"
         * @generated
         */
        getPreCondition() : uml.Constraint;

        /**
         * Sets the value of the '{@link uml.ProtocolTransition#getPreCondition}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Pre Condition</em>' reference.
         * @see #getPreCondition()
         * @generated
         */
        setPreCondition(value : uml.Constraint);

        /**
         * Returns the value of the '<em><b>Referred</b></em>' reference list.
         * The list contents are of type {@link uml.Operation}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * This association refers to the associated Operation. It is derived from the Operation of the CallEvent Trigger when applicable.
         * <p>From package UML::StateMachines.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Referred</em>' reference list.
         * @see uml.UmlPackage#getProtocolTransition_Referred()
         * @model transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getReferred() : org.eclipse.emf.common.util.EList<uml.Operation>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If a ProtocolTransition refers to an Operation (i.e., has a CallEvent trigger corresponding to an Operation), then that Operation should apply to the context Classifier of the StateMachine of the ProtocolTransition.
         * if (referred()->notEmpty() and containingStateMachine()._'context'->notEmpty()) then
         * containingStateMachine()._'context'.oclAsType(BehavioredClassifier).allFeatures()->includesAll(referred())
         * else true endif
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        refers_to_operation(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A ProtocolTransition never has associated Behaviors.
         * effect = null
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        associated_actions(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A ProtocolTransition always belongs to a ProtocolStateMachine.
         * container.belongsToPSM()
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        belongs_to_psm(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

