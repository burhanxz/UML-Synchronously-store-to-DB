/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Include</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * An Include relationship specifies that a UseCase contains the behavior defined in another UseCase.
     * <p>From package UML::UseCases.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.Include#getAddition}</li>
     * <li>{@link uml.Include#getIncludingCase}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getInclude()
     * @model
     * @generated
     * @class
     */
    export interface Include extends uml.NamedElement, uml.DirectedRelationship {
        /**
         * Returns the value of the '<em><b>Addition</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The UseCase that is to be included.
         * <p>From package UML::UseCases.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Addition</em>' reference.
         * @see #setAddition(UseCase)
         * @see uml.UmlPackage#getInclude_Addition()
         * @model required="true" ordered="false"
         * @generated
         */
        getAddition() : uml.UseCase;

        /**
         * Sets the value of the '{@link uml.Include#getAddition}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Addition</em>' reference.
         * @see #getAddition()
         * @generated
         */
        setAddition(value : uml.UseCase);

        /**
         * Returns the value of the '<em><b>Including Case</b></em>' container reference.
         * It is bidirectional and its opposite is '{@link uml.UseCase#getInclude}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The UseCase which includes the addition and owns the Include relationship.
         * <p>From package UML::UseCases.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Including Case</em>' container reference.
         * @see #setIncludingCase(UseCase)
         * @see uml.UmlPackage#getInclude_IncludingCase()
         * @see uml.UseCase#getInclude
         * @model opposite="include" required="true" transient="false" ordered="false"
         * @generated
         */
        getIncludingCase() : uml.UseCase;

        /**
         * Sets the value of the '{@link uml.Include#getIncludingCase}' container reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Including Case</em>' container reference.
         * @see #getIncludingCase()
         * @generated
         */
        setIncludingCase(value : uml.UseCase);
    }
}

