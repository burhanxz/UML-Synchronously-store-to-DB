/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Protocol State Machine</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A ProtocolStateMachine is always defined in the context of a Classifier. It specifies which BehavioralFeatures of the Classifier can be called in which State and under which conditions, thus specifying the allowed invocation sequences on the Classifier's BehavioralFeatures. A ProtocolStateMachine specifies the possible and permitted Transitions on the instances of its context Classifier, together with the BehavioralFeatures that carry the Transitions. In this manner, an instance lifecycle can be specified for a Classifier, by defining the order in which the BehavioralFeatures can be activated and the States through which an instance progresses during its existence.
     * <p>From package UML::StateMachines.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.ProtocolStateMachine#getConformance}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getProtocolStateMachine()
     * @model
     * @generated
     * @class
     */
    export interface ProtocolStateMachine extends uml.StateMachine {
        /**
         * Returns the value of the '<em><b>Conformance</b></em>' containment reference list.
         * The list contents are of type {@link uml.ProtocolConformance}.
         * It is bidirectional and its opposite is '{@link uml.ProtocolConformance#getSpecificMachine}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Conformance between ProtocolStateMachine
         * <p>From package UML::StateMachines.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Conformance</em>' containment reference list.
         * @see uml.UmlPackage#getProtocolStateMachine_Conformance()
         * @see uml.ProtocolConformance#getSpecificMachine
         * @model opposite="specificMachine" containment="true" ordered="false"
         * @generated
         */
        getConformance() : org.eclipse.emf.common.util.EList<uml.ProtocolConformance>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * ProtocolStateMachines cannot have deep or shallow history Pseudostates.
         * region->forAll (r | r.subvertex->forAll (v | v.oclIsKindOf(Pseudostate) implies
         * ((v.oclAsType(Pseudostate).kind <>  PseudostateKind::deepHistory) and (v.oclAsType(Pseudostate).kind <> PseudostateKind::shallowHistory))))
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        deep_or_shallow_history(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The states of a ProtocolStateMachine cannot have entry, exit, or do activity Behaviors.
         * region->forAll(r | r.subvertex->forAll(v | v.oclIsKindOf(State) implies
         * (v.oclAsType(State).entry->isEmpty() and v.oclAsType(State).exit->isEmpty() and v.oclAsType(State).doActivity->isEmpty())))
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        entry_exit_do(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * All Transitions of a ProtocolStateMachine must be ProtocolTransitions.
         * region->forAll(r | r.transition->forAll(t | t.oclIsTypeOf(ProtocolTransition)))
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        protocol_transitions(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

