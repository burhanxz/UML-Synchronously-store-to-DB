/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Behavior Execution Specification</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A BehaviorExecutionSpecification is a kind of ExecutionSpecification representing the execution of a Behavior.
     * <p>From package UML::Interactions.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.BehaviorExecutionSpecification#getBehavior}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getBehaviorExecutionSpecification()
     * @model
     * @generated
     * @class
     */
    export interface BehaviorExecutionSpecification extends uml.ExecutionSpecification {
        /**
         * Returns the value of the '<em><b>Behavior</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Behavior whose execution is occurring.
         * <p>From package UML::Interactions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Behavior</em>' reference.
         * @see #setBehavior(Behavior)
         * @see uml.UmlPackage#getBehaviorExecutionSpecification_Behavior()
         * @model ordered="false"
         * @generated
         */
        getBehavior() : uml.Behavior;

        /**
         * Sets the value of the '{@link uml.BehaviorExecutionSpecification#getBehavior}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Behavior</em>' reference.
         * @see #getBehavior()
         * @generated
         */
        setBehavior(value : uml.Behavior);
    }
}

