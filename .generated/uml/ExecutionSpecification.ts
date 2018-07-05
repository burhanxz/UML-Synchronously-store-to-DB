/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Execution Specification</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * An ExecutionSpecification is a specification of the execution of a unit of Behavior or Action within the Lifeline. The duration of an ExecutionSpecification is represented by two OccurrenceSpecifications, the start OccurrenceSpecification and the finish OccurrenceSpecification.
     * <p>From package UML::Interactions.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.ExecutionSpecification#getFinish}</li>
     * <li>{@link uml.ExecutionSpecification#getStart}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getExecutionSpecification()
     * @model abstract="true"
     * @generated
     * @class
     */
    export interface ExecutionSpecification extends uml.InteractionFragment {
        /**
         * Returns the value of the '<em><b>Finish</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * References the OccurrenceSpecification that designates the finish of the Action or Behavior.
         * <p>From package UML::Interactions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Finish</em>' reference.
         * @see #setFinish(OccurrenceSpecification)
         * @see uml.UmlPackage#getExecutionSpecification_Finish()
         * @model required="true" ordered="false"
         * @generated
         */
        getFinish() : uml.OccurrenceSpecification;

        /**
         * Sets the value of the '{@link uml.ExecutionSpecification#getFinish}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Finish</em>' reference.
         * @see #getFinish()
         * @generated
         */
        setFinish(value : uml.OccurrenceSpecification);

        /**
         * Returns the value of the '<em><b>Start</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * References the OccurrenceSpecification that designates the start of the Action or Behavior.
         * <p>From package UML::Interactions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Start</em>' reference.
         * @see #setStart(OccurrenceSpecification)
         * @see uml.UmlPackage#getExecutionSpecification_Start()
         * @model required="true" ordered="false"
         * @generated
         */
        getStart() : uml.OccurrenceSpecification;

        /**
         * Sets the value of the '{@link uml.ExecutionSpecification#getStart}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Start</em>' reference.
         * @see #getStart()
         * @generated
         */
        setStart(value : uml.OccurrenceSpecification);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The startEvent and the finishEvent must be on the same Lifeline.
         * start.covered = finish.covered
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        same_lifeline(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

