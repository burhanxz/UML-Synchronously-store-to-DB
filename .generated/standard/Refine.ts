/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace standard {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Refine</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * Specifies a refinement relationship between model elements at different semantic levels, such as analysis and design. The mapping specifies the relationship between the two elements or sets of elements. The mapping may or may not be computable, and it may be unidirectional or bidirectional. Refinement can be used to model transformations from analysis to design and other such changes.
     * <p>From package StandardProfile (URI {@literal http://www.omg.org/spec/UML/20131001/StandardProfile}).</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link standard.Refine#getBase_Abstraction}</li>
     * </ul>
     * 
     * @see standard.StandardPackage#getRefine()
     * @model
     * @generated
     * @class
     */
    export interface Refine extends org.eclipse.emf.ecore.EObject {
        /**
         * Returns the value of the '<em><b>Base Abstraction</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * <p>From package StandardProfile (URI {@literal http://www.omg.org/spec/UML/20131001/StandardProfile}).</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Base Abstraction</em>' reference.
         * @see #setBase_Abstraction(Abstraction)
         * @see standard.StandardPackage#getRefine_Base_Abstraction()
         * @model required="true" ordered="false"
         * @generated
         */
        getBase_Abstraction() : uml.Abstraction;

        /**
         * Sets the value of the '{@link standard.Refine#getBase_Abstraction}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Base Abstraction</em>' reference.
         * @see #getBase_Abstraction()
         * @generated
         */
        setBase_Abstraction(value : uml.Abstraction);
    }
}

