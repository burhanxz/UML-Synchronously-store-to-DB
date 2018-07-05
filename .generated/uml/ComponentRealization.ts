/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Component Realization</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * Realization is specialized to (optionally) define the Classifiers that realize the contract offered by a Component in terms of its provided and required Interfaces. The Component forms an abstraction from these various Classifiers.
     * <p>From package UML::StructuredClassifiers.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.ComponentRealization#getRealizingClassifier}</li>
     * <li>{@link uml.ComponentRealization#getAbstraction}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getComponentRealization()
     * @model
     * @generated
     * @class
     */
    export interface ComponentRealization extends uml.Realization {
        /**
         * Returns the value of the '<em><b>Realizing Classifier</b></em>' reference list.
         * The list contents are of type {@link uml.Classifier}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Classifiers that are involved in the implementation of the Component that owns this Realization.
         * <p>From package UML::StructuredClassifiers.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Realizing Classifier</em>' reference list.
         * @see uml.UmlPackage#getComponentRealization_RealizingClassifier()
         * @model required="true" ordered="false"
         * @generated
         */
        getRealizingClassifier() : org.eclipse.emf.common.util.EList<uml.Classifier>;

        /**
         * Returns the value of the '<em><b>Abstraction</b></em>' container reference.
         * It is bidirectional and its opposite is '{@link uml.Component#getRealization}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Component that owns this ComponentRealization and which is implemented by its realizing Classifiers.
         * <p>From package UML::StructuredClassifiers.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Abstraction</em>' container reference.
         * @see #setAbstraction(Component)
         * @see uml.UmlPackage#getComponentRealization_Abstraction()
         * @see uml.Component#getRealization
         * @model opposite="realization" transient="false" ordered="false"
         * @generated
         */
        getAbstraction() : uml.Component;

        /**
         * Sets the value of the '{@link uml.ComponentRealization#getAbstraction}' container reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Abstraction</em>' container reference.
         * @see #getAbstraction()
         * @generated
         */
        setAbstraction(value : uml.Component);
    }
}

