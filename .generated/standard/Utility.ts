/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace standard {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Utility</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A class that has no instances, but rather denotes a named collection of attributes and operations, all of which are static.
     * <p>From package StandardProfile (URI {@literal http://www.omg.org/spec/UML/20131001/StandardProfile}).</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link standard.Utility#getBase_Class}</li>
     * </ul>
     * 
     * @see standard.StandardPackage#getUtility()
     * @model
     * @generated
     * @class
     */
    export interface Utility extends org.eclipse.emf.ecore.EObject {
        /**
         * Returns the value of the '<em><b>Base Class</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * <p>From package StandardProfile (URI {@literal http://www.omg.org/spec/UML/20131001/StandardProfile}).</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Base Class</em>' reference.
         * @see #setBase_Class(uml.Class)
         * @see standard.StandardPackage#getUtility_Base_Class()
         * @model required="true" ordered="false"
         * @generated
         */
        getBase_Class() : uml.Class;

        /**
         * Sets the value of the '{@link standard.Utility#getBase_Class}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Base Class</em>' reference.
         * @see #getBase_Class()
         * @generated
         */
        setBase_Class(value : uml.Class);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * self.base_Class.feature->forAll(isStatic)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        is_utility(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

