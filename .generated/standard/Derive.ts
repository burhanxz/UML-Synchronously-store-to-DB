/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace standard {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Derive</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * Specifies a derivation relationship among model elements that are usually, but not necessarily, of the same type. A derived dependency specifies that the client may be computed from the supplier. The mapping specifies the computation. The client may be implemented for design reasons, such as efficiency, even though it is logically redundant.
     * <p>From package StandardProfile (URI {@literal http://www.omg.org/spec/UML/20131001/StandardProfile}).</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link standard.Derive#getComputation}</li>
     * <li>{@link standard.Derive#getBase_Abstraction}</li>
     * </ul>
     * 
     * @see standard.StandardPackage#getDerive()
     * @model
     * @generated
     * @class
     */
    export interface Derive extends org.eclipse.emf.ecore.EObject {
        /**
         * Returns the value of the '<em><b>Computation</b></em>' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The specification for computing the derived client element from the derivation supplier element.
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Computation</em>' containment reference.
         * @see #setComputation(ValueSpecification)
         * @see standard.StandardPackage#getDerive_Computation()
         * @model containment="true" required="true" ordered="false"
         * @generated
         */
        getComputation() : uml.ValueSpecification;

        /**
         * Sets the value of the '{@link standard.Derive#getComputation}' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Computation</em>' containment reference.
         * @see #getComputation()
         * @generated
         */
        setComputation(value : uml.ValueSpecification);

        /**
         * Returns the value of the '<em><b>Base Abstraction</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * <p>From package StandardProfile (URI {@literal http://www.omg.org/spec/UML/20131001/StandardProfile}).</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Base Abstraction</em>' reference.
         * @see #setBase_Abstraction(Abstraction)
         * @see standard.StandardPackage#getDerive_Base_Abstraction()
         * @model required="true" ordered="false"
         * @generated
         */
        getBase_Abstraction() : uml.Abstraction;

        /**
         * Sets the value of the '{@link standard.Derive#getBase_Abstraction}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Base Abstraction</em>' reference.
         * @see #getBase_Abstraction()
         * @generated
         */
        setBase_Abstraction(value : uml.Abstraction);
    }
}

