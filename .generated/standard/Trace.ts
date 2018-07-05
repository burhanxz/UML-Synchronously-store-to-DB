/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace standard {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Trace</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * Specifies a trace relationship between model elements or sets of model elements that represent the same concept in different models. Traces are mainly used for tracking requirements and changes across models. As model changes can occur in both directions, the directionality of the dependency can often be ignored. The mapping specifies the relationship between the two, but it is rarely computable and is usually informal.
     * <p>From package StandardProfile (URI {@literal http://www.omg.org/spec/UML/20131001/StandardProfile}).</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link standard.Trace#getBase_Abstraction}</li>
     * </ul>
     * 
     * @see standard.StandardPackage#getTrace()
     * @model
     * @generated
     * @class
     */
    export interface Trace extends org.eclipse.emf.ecore.EObject {
        /**
         * Returns the value of the '<em><b>Base Abstraction</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * <p>From package StandardProfile (URI {@literal http://www.omg.org/spec/UML/20131001/StandardProfile}).</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Base Abstraction</em>' reference.
         * @see #setBase_Abstraction(Abstraction)
         * @see standard.StandardPackage#getTrace_Base_Abstraction()
         * @model required="true" ordered="false"
         * @generated
         */
        getBase_Abstraction() : uml.Abstraction;

        /**
         * Sets the value of the '{@link standard.Trace#getBase_Abstraction}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Base Abstraction</em>' reference.
         * @see #getBase_Abstraction()
         * @generated
         */
        setBase_Abstraction(value : uml.Abstraction);
    }
}

