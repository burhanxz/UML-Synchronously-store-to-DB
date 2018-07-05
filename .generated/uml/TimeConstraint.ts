/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Time Constraint</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A TimeConstraint is a Constraint that refers to a TimeInterval.
     * <p>From package UML::Values.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.TimeConstraint#isFirstEvent}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getTimeConstraint()
     * @model
     * @generated
     * @class
     */
    export interface TimeConstraint extends uml.IntervalConstraint {
        /**
         * Returns the value of the '<em><b>First Event</b></em>' attribute.
         * The default value is <code>"true"</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The value of firstEvent is related to the constrainedElement. If firstEvent is true, then the corresponding observation event is the first time instant the execution enters the constrainedElement. If firstEvent is false, then the corresponding observation event is the last time instant the execution is within the constrainedElement.
         * <p>From package UML::Values.</p>
         * <!-- end-model-doc -->
         * @return {boolean} the value of the '<em>First Event</em>' attribute.
         * @see #setFirstEvent(boolean)
         * @see uml.UmlPackage#getTimeConstraint_FirstEvent()
         * @model default="true" dataType="types.Boolean" ordered="false"
         * @generated
         */
        isFirstEvent() : boolean;

        /**
         * Sets the value of the '{@link uml.TimeConstraint#isFirstEvent}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {boolean} value the new value of the '<em>First Event</em>' attribute.
         * @see #isFirstEvent()
         * @generated
         */
        setFirstEvent(value : boolean);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A TimeConstraint has one constrainedElement.
         * constrainedElement->size() = 1
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        has_one_constrainedElement(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

