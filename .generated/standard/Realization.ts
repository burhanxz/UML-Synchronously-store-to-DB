/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace standard {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Realization</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A classifier that specifies a domain of objects and that also defines the physical implementation of those objects. For example, a Component stereotyped by ?Realization? will only have realizing Classifiers that implement behavior specified by a separate ?Specification? Component. See ?Specification?. This differs from ?ImplementationClass? because an ?ImplementationClass? is a realization of a Class that can have features such as attributes and methods that are useful to system designers.
     * <p>From package StandardProfile (URI {@literal http://www.omg.org/spec/UML/20131001/StandardProfile}).</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link standard.Realization#getBase_Classifier}</li>
     * </ul>
     * 
     * @see standard.StandardPackage#getRealization()
     * @model
     * @generated
     * @class
     */
    export interface Realization extends org.eclipse.emf.ecore.EObject {
        /**
         * Returns the value of the '<em><b>Base Classifier</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * <p>From package StandardProfile (URI {@literal http://www.omg.org/spec/UML/20131001/StandardProfile}).</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Base Classifier</em>' reference.
         * @see #setBase_Classifier(Classifier)
         * @see standard.StandardPackage#getRealization_Base_Classifier()
         * @model required="true" ordered="false"
         * @generated
         */
        getBase_Classifier() : uml.Classifier;

        /**
         * Sets the value of the '{@link standard.Realization#getBase_Classifier}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Base Classifier</em>' reference.
         * @see #getBase_Classifier()
         * @generated
         */
        setBase_Classifier(value : uml.Classifier);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * self.base_Classifier.extension_ImplementationClass->isEmpty()
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        cannot_be_implementationClass(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

