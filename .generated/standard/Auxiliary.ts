/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace standard {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Auxiliary</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A class that supports another more central or fundamental class, typically by implementing secondary logic or control flow. Auxiliary classes are typically used together with Focus classes, and are particularly useful for specifying the secondary business logic or control flow of components during design. See also: ?Focus?.
     * <p>From package StandardProfile (URI {@literal http://www.omg.org/spec/UML/20131001/StandardProfile}).</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link standard.Auxiliary#getBase_Class}</li>
     * </ul>
     * 
     * @see standard.StandardPackage#getAuxiliary()
     * @model
     * @generated
     * @class
     */
    export interface Auxiliary extends org.eclipse.emf.ecore.EObject {
        /**
         * Returns the value of the '<em><b>Base Class</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * <p>From package StandardProfile (URI {@literal http://www.omg.org/spec/UML/20131001/StandardProfile}).</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Base Class</em>' reference.
         * @see #setBase_Class(uml.Class)
         * @see standard.StandardPackage#getAuxiliary_Base_Class()
         * @model required="true" ordered="false"
         * @generated
         */
        getBase_Class() : uml.Class;

        /**
         * Sets the value of the '{@link standard.Auxiliary#getBase_Class}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Base Class</em>' reference.
         * @see #getBase_Class()
         * @generated
         */
        setBase_Class(value : uml.Class);
    }
}

