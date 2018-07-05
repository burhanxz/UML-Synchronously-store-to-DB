/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Call Event</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A CallEvent models the receipt by an object of a message invoking a call of an Operation.
     * <p>From package UML::CommonBehavior.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.CallEvent#getOperation}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getCallEvent()
     * @model
     * @generated
     * @class
     */
    export interface CallEvent extends uml.MessageEvent {
        /**
         * Returns the value of the '<em><b>Operation</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Designates the Operation whose invocation raised the CalEvent.
         * <p>From package UML::CommonBehavior.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Operation</em>' reference.
         * @see #setOperation(Operation)
         * @see uml.UmlPackage#getCallEvent_Operation()
         * @model required="true" ordered="false"
         * @generated
         */
        getOperation() : uml.Operation;

        /**
         * Sets the value of the '{@link uml.CallEvent#getOperation}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Operation</em>' reference.
         * @see #getOperation()
         * @generated
         */
        setOperation(value : uml.Operation);
    }
}

