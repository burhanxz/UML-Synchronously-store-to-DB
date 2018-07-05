/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Manifestation</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A manifestation is the concrete physical rendering of one or more model elements by an artifact.
     * <p>From package UML::Deployments.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.Manifestation#getUtilizedElement}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getManifestation()
     * @model
     * @generated
     * @class
     */
    export interface Manifestation extends uml.Abstraction {
        /**
         * Returns the value of the '<em><b>Utilized Element</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The model element that is utilized in the manifestation in an Artifact.
         * <p>From package UML::Deployments.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Utilized Element</em>' reference.
         * @see #setUtilizedElement(PackageableElement)
         * @see uml.UmlPackage#getManifestation_UtilizedElement()
         * @model required="true" ordered="false"
         * @generated
         */
        getUtilizedElement() : uml.PackageableElement;

        /**
         * Sets the value of the '{@link uml.Manifestation#getUtilizedElement}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Utilized Element</em>' reference.
         * @see #getUtilizedElement()
         * @generated
         */
        setUtilizedElement(value : uml.PackageableElement);
    }
}

