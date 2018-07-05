/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Instance Value</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * An InstanceValue is a ValueSpecification that identifies an instance.
     * <p>From package UML::Classification.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.InstanceValue#getInstance}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getInstanceValue()
     * @model
     * @generated
     * @class
     */
    export interface InstanceValue extends uml.ValueSpecification {
        /**
         * Returns the value of the '<em><b>Instance</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The InstanceSpecification that represents the specified value.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Instance</em>' reference.
         * @see #setInstance(InstanceSpecification)
         * @see uml.UmlPackage#getInstanceValue_Instance()
         * @model required="true" ordered="false"
         * @generated
         */
        getInstance() : uml.InstanceSpecification;

        /**
         * Sets the value of the '{@link uml.InstanceValue#getInstance}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Instance</em>' reference.
         * @see #getInstance()
         * @generated
         */
        setInstance(value : uml.InstanceSpecification);
    }
}

