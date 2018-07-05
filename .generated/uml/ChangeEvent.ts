/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Change Event</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A ChangeEvent models a change in the system configuration that makes a condition true.
     * <p>From package UML::CommonBehavior.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.ChangeEvent#getChangeExpression}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getChangeEvent()
     * @model
     * @generated
     * @class
     */
    export interface ChangeEvent extends uml.Event {
        /**
         * Returns the value of the '<em><b>Change Expression</b></em>' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A Boolean-valued ValueSpecification that will result in a ChangeEvent whenever its value changes from false to true.
         * <p>From package UML::CommonBehavior.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Change Expression</em>' containment reference.
         * @see #setChangeExpression(ValueSpecification)
         * @see uml.UmlPackage#getChangeEvent_ChangeExpression()
         * @model containment="true" required="true" ordered="false"
         * @generated
         */
        getChangeExpression() : uml.ValueSpecification;

        /**
         * Sets the value of the '{@link uml.ChangeEvent#getChangeExpression}' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Change Expression</em>' containment reference.
         * @see #getChangeExpression()
         * @generated
         */
        setChangeExpression(value : uml.ValueSpecification);
    }
}

