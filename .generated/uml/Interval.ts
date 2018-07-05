/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Interval</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * An Interval defines the range between two ValueSpecifications.
     * <p>From package UML::Values.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.Interval#getMax}</li>
     * <li>{@link uml.Interval#getMin}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getInterval()
     * @model
     * @generated
     * @class
     */
    export interface Interval extends uml.ValueSpecification {
        /**
         * Returns the value of the '<em><b>Max</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Refers to the ValueSpecification denoting the maximum value of the range.
         * <p>From package UML::Values.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Max</em>' reference.
         * @see #setMax(ValueSpecification)
         * @see uml.UmlPackage#getInterval_Max()
         * @model required="true" ordered="false"
         * @generated
         */
        getMax() : uml.ValueSpecification;

        /**
         * Sets the value of the '{@link uml.Interval#getMax}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Max</em>' reference.
         * @see #getMax()
         * @generated
         */
        setMax(value : uml.ValueSpecification);

        /**
         * Returns the value of the '<em><b>Min</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Refers to the ValueSpecification denoting the minimum value of the range.
         * <p>From package UML::Values.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Min</em>' reference.
         * @see #setMin(ValueSpecification)
         * @see uml.UmlPackage#getInterval_Min()
         * @model required="true" ordered="false"
         * @generated
         */
        getMin() : uml.ValueSpecification;

        /**
         * Sets the value of the '{@link uml.Interval#getMin}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Min</em>' reference.
         * @see #getMin()
         * @generated
         */
        setMin(value : uml.ValueSpecification);
    }
}

