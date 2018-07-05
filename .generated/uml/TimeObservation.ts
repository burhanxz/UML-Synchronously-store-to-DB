/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Time Observation</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A TimeObservation is a reference to a time instant during an execution. It points out the NamedElement in the model to observe and whether the observation is when this NamedElement is entered or when it is exited.
     * <p>From package UML::Values.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.TimeObservation#getEvent}</li>
     * <li>{@link uml.TimeObservation#isFirstEvent}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getTimeObservation()
     * @model
     * @generated
     * @class
     */
    export interface TimeObservation extends uml.Observation {
        /**
         * Returns the value of the '<em><b>Event</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The TimeObservation is determined by the entering or exiting of the event Element during execution.
         * <p>From package UML::Values.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Event</em>' reference.
         * @see #setEvent(NamedElement)
         * @see uml.UmlPackage#getTimeObservation_Event()
         * @model required="true" ordered="false"
         * @generated
         */
        getEvent() : uml.NamedElement;

        /**
         * Sets the value of the '{@link uml.TimeObservation#getEvent}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Event</em>' reference.
         * @see #getEvent()
         * @generated
         */
        setEvent(value : uml.NamedElement);

        /**
         * Returns the value of the '<em><b>First Event</b></em>' attribute.
         * The default value is <code>"true"</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The value of firstEvent is related to the event. If firstEvent is true, then the corresponding observation event is the first time instant the execution enters the event Element. If firstEvent is false, then the corresponding observation event is the time instant the execution exits the event Element.
         * <p>From package UML::Values.</p>
         * <!-- end-model-doc -->
         * @return {boolean} the value of the '<em>First Event</em>' attribute.
         * @see #setFirstEvent(boolean)
         * @see uml.UmlPackage#getTimeObservation_FirstEvent()
         * @model default="true" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         */
        isFirstEvent() : boolean;

        /**
         * Sets the value of the '{@link uml.TimeObservation#isFirstEvent}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {boolean} value the new value of the '<em>First Event</em>' attribute.
         * @see #isFirstEvent()
         * @generated
         */
        setFirstEvent(value : boolean);
    }
}

