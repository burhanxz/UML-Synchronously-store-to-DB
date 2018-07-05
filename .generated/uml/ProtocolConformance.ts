/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Protocol Conformance</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A ProtocolStateMachine can be redefined into a more specific ProtocolStateMachine or into behavioral StateMachine. ProtocolConformance declares that the specific ProtocolStateMachine specifies a protocol that conforms to the general ProtocolStateMachine or that the specific behavioral StateMachine abides by the protocol of the general ProtocolStateMachine.
     * <p>From package UML::StateMachines.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.ProtocolConformance#getGeneralMachine}</li>
     * <li>{@link uml.ProtocolConformance#getSpecificMachine}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getProtocolConformance()
     * @model
     * @generated
     * @class
     */
    export interface ProtocolConformance extends uml.DirectedRelationship {
        /**
         * Returns the value of the '<em><b>General Machine</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Specifies the ProtocolStateMachine to which the specific ProtocolStateMachine conforms.
         * <p>From package UML::StateMachines.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>General Machine</em>' reference.
         * @see #setGeneralMachine(ProtocolStateMachine)
         * @see uml.UmlPackage#getProtocolConformance_GeneralMachine()
         * @model required="true" ordered="false"
         * @generated
         */
        getGeneralMachine() : uml.ProtocolStateMachine;

        /**
         * Sets the value of the '{@link uml.ProtocolConformance#getGeneralMachine}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>General Machine</em>' reference.
         * @see #getGeneralMachine()
         * @generated
         */
        setGeneralMachine(value : uml.ProtocolStateMachine);

        /**
         * Returns the value of the '<em><b>Specific Machine</b></em>' container reference.
         * It is bidirectional and its opposite is '{@link uml.ProtocolStateMachine#getConformance}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Specifies the ProtocolStateMachine which conforms to the general ProtocolStateMachine.
         * <p>From package UML::StateMachines.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Specific Machine</em>' container reference.
         * @see #setSpecificMachine(ProtocolStateMachine)
         * @see uml.UmlPackage#getProtocolConformance_SpecificMachine()
         * @see uml.ProtocolStateMachine#getConformance
         * @model opposite="conformance" required="true" transient="false" ordered="false"
         * @generated
         */
        getSpecificMachine() : uml.ProtocolStateMachine;

        /**
         * Sets the value of the '{@link uml.ProtocolConformance#getSpecificMachine}' container reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Specific Machine</em>' container reference.
         * @see #getSpecificMachine()
         * @generated
         */
        setSpecificMachine(value : uml.ProtocolStateMachine);
    }
}

