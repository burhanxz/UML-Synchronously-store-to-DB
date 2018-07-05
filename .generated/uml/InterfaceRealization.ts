/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Interface Realization</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * An InterfaceRealization is a specialized realization relationship between a BehavioredClassifier and an Interface. This relationship signifies that the realizing BehavioredClassifier conforms to the contract specified by the Interface.
     * <p>From package UML::SimpleClassifiers.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.InterfaceRealization#getContract}</li>
     * <li>{@link uml.InterfaceRealization#getImplementingClassifier}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getInterfaceRealization()
     * @model
     * @generated
     * @class
     */
    export interface InterfaceRealization extends uml.Realization {
        /**
         * Returns the value of the '<em><b>Contract</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * References the Interface specifying the conformance contract.
         * <p>From package UML::SimpleClassifiers.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Contract</em>' reference.
         * @see #setContract(Interface)
         * @see uml.UmlPackage#getInterfaceRealization_Contract()
         * @model required="true" ordered="false"
         * @generated
         */
        getContract() : uml.Interface;

        /**
         * Sets the value of the '{@link uml.InterfaceRealization#getContract}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Contract</em>' reference.
         * @see #getContract()
         * @generated
         */
        setContract(value : uml.Interface);

        /**
         * Returns the value of the '<em><b>Implementing Classifier</b></em>' container reference.
         * It is bidirectional and its opposite is '{@link uml.BehavioredClassifier#getInterfaceRealization}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * References the BehavioredClassifier that owns this InterfaceRealization, i.e., the BehavioredClassifier that realizes the Interface to which it refers.
         * <p>From package UML::SimpleClassifiers.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Implementing Classifier</em>' container reference.
         * @see #setImplementingClassifier(BehavioredClassifier)
         * @see uml.UmlPackage#getInterfaceRealization_ImplementingClassifier()
         * @see uml.BehavioredClassifier#getInterfaceRealization
         * @model opposite="interfaceRealization" required="true" transient="false" ordered="false"
         * @generated
         */
        getImplementingClassifier() : uml.BehavioredClassifier;

        /**
         * Sets the value of the '{@link uml.InterfaceRealization#getImplementingClassifier}' container reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Implementing Classifier</em>' container reference.
         * @see #getImplementingClassifier()
         * @generated
         */
        setImplementingClassifier(value : uml.BehavioredClassifier);
    }
}

