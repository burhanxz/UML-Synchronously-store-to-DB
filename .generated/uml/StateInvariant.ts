/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>State Invariant</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A StateInvariant is a runtime constraint on the participants of the Interaction. It may be used to specify a variety of different kinds of Constraints, such as values of Attributes or Variables, internal or external States, and so on. A StateInvariant is an InteractionFragment and it is placed on a Lifeline.
     * <p>From package UML::Interactions.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.StateInvariant#getInvariant}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getStateInvariant()
     * @model
     * @generated
     * @class
     */
    export interface StateInvariant extends uml.InteractionFragment {
        /**
         * Returns the value of the '<em><b>Invariant</b></em>' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A Constraint that should hold at runtime for this StateInvariant.
         * <p>From package UML::Interactions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Invariant</em>' containment reference.
         * @see #setInvariant(Constraint)
         * @see uml.UmlPackage#getStateInvariant_Invariant()
         * @model containment="true" required="true" ordered="false"
         * @generated
         */
        getInvariant() : uml.Constraint;

        /**
         * Sets the value of the '{@link uml.StateInvariant#getInvariant}' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Invariant</em>' containment reference.
         * @see #getInvariant()
         * @generated
         */
        setInvariant(value : uml.Constraint);
    }
}

