/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace standard {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Metaclass</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A class whose instances are also classes.
     * <p>From package StandardProfile (URI {@literal http://www.omg.org/spec/UML/20131001/StandardProfile}).</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link standard.Metaclass#getBase_Class}</li>
     * </ul>
     * 
     * @see standard.StandardPackage#getMetaclass()
     * @model
     * @generated
     * @class
     */
    export interface Metaclass extends org.eclipse.emf.ecore.EObject {
        /**
         * Returns the value of the '<em><b>Base Class</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * <p>From package StandardProfile (URI {@literal http://www.omg.org/spec/UML/20131001/StandardProfile}).</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Base Class</em>' reference.
         * @see #setBase_Class(uml.Class)
         * @see standard.StandardPackage#getMetaclass_Base_Class()
         * @model required="true" ordered="false"
         * @generated
         */
        getBase_Class() : uml.Class;

        /**
         * Sets the value of the '{@link standard.Metaclass#getBase_Class}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Base Class</em>' reference.
         * @see #getBase_Class()
         * @generated
         */
        setBase_Class(value : uml.Class);
    }
}

