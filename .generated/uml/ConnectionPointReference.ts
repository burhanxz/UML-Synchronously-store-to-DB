/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Connection Point Reference</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A ConnectionPointReference represents a usage (as part of a submachine State) of an entry/exit point Pseudostate defined in the StateMachine referenced by the submachine State.
     * <p>From package UML::StateMachines.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.ConnectionPointReference#getEntry}</li>
     * <li>{@link uml.ConnectionPointReference#getExit}</li>
     * <li>{@link uml.ConnectionPointReference#getState}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getConnectionPointReference()
     * @model
     * @generated
     * @class
     */
    export interface ConnectionPointReference extends uml.Vertex {
        /**
         * Returns the value of the '<em><b>Entry</b></em>' reference list.
         * The list contents are of type {@link uml.Pseudostate}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The entryPoint Pseudostates corresponding to this connection point.
         * <p>From package UML::StateMachines.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Entry</em>' reference list.
         * @see uml.UmlPackage#getConnectionPointReference_Entry()
         * @model ordered="false"
         * @generated
         */
        getEntry() : org.eclipse.emf.common.util.EList<uml.Pseudostate>;

        /**
         * Returns the value of the '<em><b>Exit</b></em>' reference list.
         * The list contents are of type {@link uml.Pseudostate}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The exitPoints kind Pseudostates corresponding to this connection point.
         * <p>From package UML::StateMachines.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Exit</em>' reference list.
         * @see uml.UmlPackage#getConnectionPointReference_Exit()
         * @model ordered="false"
         * @generated
         */
        getExit() : org.eclipse.emf.common.util.EList<uml.Pseudostate>;

        /**
         * Returns the value of the '<em><b>State</b></em>' container reference.
         * It is bidirectional and its opposite is '{@link uml.State#getConnection}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The State in which the ConnectionPointReference is defined.
         * <p>From package UML::StateMachines.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>State</em>' container reference.
         * @see #setState(State)
         * @see uml.UmlPackage#getConnectionPointReference_State()
         * @see uml.State#getConnection
         * @model opposite="connection" transient="false" ordered="false"
         * @generated
         */
        getState() : uml.State;

        /**
         * Sets the value of the '{@link uml.ConnectionPointReference#getState}' container reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>State</em>' container reference.
         * @see #getState()
         * @generated
         */
        setState(value : uml.State);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The exit Pseudostates must be Pseudostates with kind exitPoint.
         * exit->forAll(kind = PseudostateKind::exitPoint)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        exit_pseudostates(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The entry Pseudostates must be Pseudostates with kind entryPoint.
         * entry->forAll(kind = PseudostateKind::entryPoint)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        entry_pseudostates(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

