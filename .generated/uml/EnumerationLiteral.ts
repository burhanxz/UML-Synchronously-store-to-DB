/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Enumeration Literal</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * An EnumerationLiteral is a user-defined data value for an Enumeration.
     * <p>From package UML::SimpleClassifiers.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.EnumerationLiteral#getEnumeration}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getEnumerationLiteral()
     * @model
     * @generated
     * @class
     */
    export interface EnumerationLiteral extends uml.InstanceSpecification {
        /**
         * Returns the value of the '<em><b>Enumeration</b></em>' container reference.
         * It is bidirectional and its opposite is '{@link uml.Enumeration#getOwnedLiteral}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Enumeration that this EnumerationLiteral is a member of.
         * <p>From package UML::SimpleClassifiers.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Enumeration</em>' container reference.
         * @see #setEnumeration(Enumeration)
         * @see uml.UmlPackage#getEnumerationLiteral_Enumeration()
         * @see uml.Enumeration#getOwnedLiteral
         * @model opposite="ownedLiteral" required="true" transient="false" ordered="false"
         * @generated
         */
        getEnumeration() : uml.Enumeration;

        /**
         * Sets the value of the '{@link uml.EnumerationLiteral#getEnumeration}' container reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Enumeration</em>' container reference.
         * @see #getEnumeration()
         * @generated
         */
        setEnumeration(value : uml.Enumeration);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Derivation of Enumeration::/classifier
         * result = (enumeration)
         * <p>From package UML::SimpleClassifiers.</p>
         * <!-- end-model-doc -->
         * @model kind="operation" required="true" ordered="false"
         * annotation="http://www.eclipse.org/uml2/2.0.0/UML originalName='classifier'"
         * @generated
         * @return {*}
         */
        getClassifiers() : org.eclipse.emf.common.util.EList<uml.Classifier>;
    }
}

