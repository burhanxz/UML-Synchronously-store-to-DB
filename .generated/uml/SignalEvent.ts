/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Signal Event</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A SignalEvent represents the receipt of an asynchronous Signal instance.
     * <p>From package UML::CommonBehavior.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.SignalEvent#getSignal}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getSignalEvent()
     * @model
     * @generated
     * @class
     */
    export interface SignalEvent extends uml.MessageEvent {
        /**
         * Returns the value of the '<em><b>Signal</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The specific Signal that is associated with this SignalEvent.
         * <p>From package UML::CommonBehavior.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Signal</em>' reference.
         * @see #setSignal(Signal)
         * @see uml.UmlPackage#getSignalEvent_Signal()
         * @model required="true" ordered="false"
         * @generated
         */
        getSignal() : uml.Signal;

        /**
         * Sets the value of the '{@link uml.SignalEvent#getSignal}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Signal</em>' reference.
         * @see #getSignal()
         * @generated
         */
        setSignal(value : uml.Signal);
    }
}

