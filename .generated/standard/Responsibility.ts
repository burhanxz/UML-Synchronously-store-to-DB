/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace standard {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Responsibility</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A contract or an obligation of an element in its relationship to other elements.
     * <p>From package StandardProfile (URI {@literal http://www.omg.org/spec/UML/20131001/StandardProfile}).</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link standard.Responsibility#getBase_Usage}</li>
     * </ul>
     * 
     * @see standard.StandardPackage#getResponsibility()
     * @model
     * @generated
     * @class
     */
    export interface Responsibility extends org.eclipse.emf.ecore.EObject {
        /**
         * Returns the value of the '<em><b>Base Usage</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * <p>From package StandardProfile (URI {@literal http://www.omg.org/spec/UML/20131001/StandardProfile}).</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Base Usage</em>' reference.
         * @see #setBase_Usage(Usage)
         * @see standard.StandardPackage#getResponsibility_Base_Usage()
         * @model required="true" ordered="false"
         * @generated
         */
        getBase_Usage() : uml.Usage;

        /**
         * Sets the value of the '{@link standard.Responsibility#getBase_Usage}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Base Usage</em>' reference.
         * @see #getBase_Usage()
         * @generated
         */
        setBase_Usage(value : uml.Usage);
    }
}
