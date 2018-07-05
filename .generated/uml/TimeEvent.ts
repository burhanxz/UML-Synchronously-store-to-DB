/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Time Event</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A TimeEvent is an Event that occurs at a specific point in time.
     * <p>From package UML::CommonBehavior.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.TimeEvent#isIsRelative}</li>
     * <li>{@link uml.TimeEvent#getWhen}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getTimeEvent()
     * @model
     * @generated
     * @class
     */
    export interface TimeEvent extends uml.Event {
        /**
         * Returns the value of the '<em><b>Is Relative</b></em>' attribute.
         * The default value is <code>"false"</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Specifies whether the TimeEvent is specified as an absolute or relative time.
         * <p>From package UML::CommonBehavior.</p>
         * <!-- end-model-doc -->
         * @return {boolean} the value of the '<em>Is Relative</em>' attribute.
         * @see #setIsRelative(boolean)
         * @see uml.UmlPackage#getTimeEvent_IsRelative()
         * @model default="false" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         */
        isIsRelative() : boolean;

        /**
         * Sets the value of the '{@link uml.TimeEvent#isIsRelative}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {boolean} value the new value of the '<em>Is Relative</em>' attribute.
         * @see #isIsRelative()
         * @generated
         */
        setIsRelative(value : boolean);

        /**
         * Returns the value of the '<em><b>When</b></em>' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Specifies the time of the TimeEvent.
         * <p>From package UML::CommonBehavior.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>When</em>' containment reference.
         * @see #setWhen(TimeExpression)
         * @see uml.UmlPackage#getTimeEvent_When()
         * @model containment="true" required="true" ordered="false"
         * @generated
         */
        getWhen() : uml.TimeExpression;

        /**
         * Sets the value of the '{@link uml.TimeEvent#getWhen}' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>When</em>' containment reference.
         * @see #getWhen()
         * @generated
         */
        setWhen(value : uml.TimeExpression);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The ValueSpecification when must return a non-negative Integer.
         * when.integerValue() >= 0
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        when_non_negative(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

