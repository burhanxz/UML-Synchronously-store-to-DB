/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Duration Constraint</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A DurationConstraint is a Constraint that refers to a DurationInterval.
     * <p>From package UML::Values.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.DurationConstraint#getFirstEvent}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getDurationConstraint()
     * @model
     * @generated
     * @class
     */
    export interface DurationConstraint extends uml.IntervalConstraint {
        /**
         * Returns the value of the '<em><b>First Event</b></em>' attribute list.
         * The list contents are of type {@link java.lang.Boolean}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The value of firstEvent[i] is related to constrainedElement[i] (where i is 1 or 2). If firstEvent[i] is true, then the corresponding observation event is the first time instant the execution enters constrainedElement[i]. If firstEvent[i] is false, then the corresponding observation event is the last time instant the execution is within constrainedElement[i].
         * <p>From package UML::Values.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>First Event</em>' attribute list.
         * @see uml.UmlPackage#getDurationConstraint_FirstEvent()
         * @model dataType="types.Boolean" upper="2" ordered="false"
         * @generated
         */
        getFirstEvent() : org.eclipse.emf.common.util.EList<boolean>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The multiplicity of firstEvent must be 2 if the multiplicity of constrainedElement is 2. Otherwise the multiplicity of firstEvent is 0.
         * if (constrainedElement->size() = 2)
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

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A DurationConstraint has either one or two constrainedElements.
         * constrainedElement->size() = 1 or constrainedElement->size()=2
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        has_one_or_two_constrainedElements(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

