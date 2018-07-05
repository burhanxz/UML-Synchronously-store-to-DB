/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Substitution</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A substitution is a relationship between two classifiers signifying that the substituting classifier complies with the contract specified by the contract classifier. This implies that instances of the substituting classifier are runtime substitutable where instances of the contract classifier are expected.
     * <p>From package UML::Classification.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.Substitution#getContract}</li>
     * <li>{@link uml.Substitution#getSubstitutingClassifier}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getSubstitution()
     * @model
     * @generated
     * @class
     */
    export interface Substitution extends uml.Realization {
        /**
         * Returns the value of the '<em><b>Contract</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The contract with which the substituting classifier complies.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Contract</em>' reference.
         * @see #setContract(Classifier)
         * @see uml.UmlPackage#getSubstitution_Contract()
         * @model required="true" ordered="false"
         * @generated
         */
        getContract() : uml.Classifier;

        /**
         * Sets the value of the '{@link uml.Substitution#getContract}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Contract</em>' reference.
         * @see #getContract()
         * @generated
         */
        setContract(value : uml.Classifier);

        /**
         * Returns the value of the '<em><b>Substituting Classifier</b></em>' container reference.
         * It is bidirectional and its opposite is '{@link uml.Classifier#getSubstitution}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Instances of the substituting classifier are runtime substitutable where instances of the contract classifier are expected.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Substituting Classifier</em>' container reference.
         * @see #setSubstitutingClassifier(Classifier)
         * @see uml.UmlPackage#getSubstitution_SubstitutingClassifier()
         * @see uml.Classifier#getSubstitution
         * @model opposite="substitution" required="true" transient="false" ordered="false"
         * @generated
         */
        getSubstitutingClassifier() : uml.Classifier;

        /**
         * Sets the value of the '{@link uml.Substitution#getSubstitutingClassifier}' container reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Substituting Classifier</em>' container reference.
         * @see #getSubstitutingClassifier()
         * @generated
         */
        setSubstitutingClassifier(value : uml.Classifier);
    }
}

