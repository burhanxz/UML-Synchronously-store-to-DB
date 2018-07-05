/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Duration Observation</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A DurationObservation is a reference to a duration during an execution. It points out the NamedElement(s) in the model to observe and whether the observations are when this NamedElement is entered or when it is exited.
     * <p>From package UML::Values.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.DurationObservation#getEvent}</li>
     * <li>{@link uml.DurationObservation#getFirstEvent}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getDurationObservation()
     * @model
     * @generated
     * @class
     */
    export interface DurationObservation extends uml.Observation {
        /**
         * Returns the value of the '<em><b>Event</b></em>' reference list.
         * The list contents are of type {@link uml.NamedElement}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The DurationObservation is determined as the duration between the entering or exiting of a single event Element during execution, or the entering/exiting of one event Element and the entering/exiting of a second.
         * <p>From package UML::Values.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Event</em>' reference list.
         * @see uml.UmlPackage#getDurationObservation_Event()
         * @model required="true" upper="2"
         * @generated
         */
        getEvent() : org.eclipse.emf.common.util.EList<uml.NamedElement>;

        /**
         * Returns the value of the '<em><b>First Event</b></em>' attribute list.
         * The list contents are of type {@link java.lang.Boolean}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The value of firstEvent[i] is related to event[i] (where i is 1 or 2). If firstEvent[i] is true, then the corresponding observation event is the first time instant the execution enters event[i]. If firstEvent[i] is false, then the corresponding observation event is the time instant the execution exits event[i].
         * <p>From package UML::Values.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>First Event</em>' attribute list.
         * @see uml.UmlPackage#getDurationObservation_FirstEvent()
         * @model dataType="types.Boolean" upper="2" ordered="false"
         * @generated
         */
        getFirstEvent() : org.eclipse.emf.common.util.EList<boolean>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The multiplicity of firstEvent must be 2 if the multiplicity of event is 2. Otherwise the multiplicity of firstEvent is 0.
         * if (event->size() = 2)
         * then (firstEvent->size() = 2) else (firstEvent->size() = 0)
         * endif
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        first_event_multiplicity(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

