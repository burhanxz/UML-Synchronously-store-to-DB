/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace standard {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Implementation Class</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * The implementation of a class in some programming language (e.g., C++, Smalltalk, Java) in which an instance may not have more than one class. This is in contrast to Class, for which an instance may have multiple classes at one time and may gain or lose classes over time, and an object may dynamically have multiple classes. An Implementation class is said to realize a Classifier if it provides all of the operations defined for the Classifier with the same behavior as specified for the Classifier's operations. An Implementation Class may realize a number of different Types. The physical attributes and associations of the Implementation class do not have to be the same as those of any Classifier it realizes and the Implementation Class may provide methods for its operations in terms of its physical attributes and associations. See also: ?Type?.
     * <p>From package StandardProfile (URI {@literal http://www.omg.org/spec/UML/20131001/StandardProfile}).</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link standard.ImplementationClass#getBase_Class}</li>
     * </ul>
     * 
     * @see standard.StandardPackage#getImplementationClass()
     * @model
     * @generated
     * @class
     */
    export interface ImplementationClass extends org.eclipse.emf.ecore.EObject {
        /**
         * Returns the value of the '<em><b>Base Class</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * <p>From package StandardProfile (URI {@literal http://www.omg.org/spec/UML/20131001/StandardProfile}).</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Base Class</em>' reference.
         * @see #setBase_Class(uml.Class)
         * @see standard.StandardPackage#getImplementationClass_Base_Class()
         * @model required="true" ordered="false"
         * @generated
         */
        getBase_Class() : uml.Class;

        /**
         * Sets the value of the '{@link standard.ImplementationClass#getBase_Class}' reference.
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
         * self.base_Class.extension_Realization->isEmpty()
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        cannot_be_realization(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

