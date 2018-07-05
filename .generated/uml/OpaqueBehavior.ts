/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Opaque Behavior</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * An OpaqueBehavior is a Behavior whose specification is given in a textual language other than UML.
     * <p>From package UML::CommonBehavior.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.OpaqueBehavior#getBody}</li>
     * <li>{@link uml.OpaqueBehavior#getLanguage}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getOpaqueBehavior()
     * @model
     * @generated
     * @class
     */
    export interface OpaqueBehavior extends uml.Behavior {
        /**
         * Returns the value of the '<em><b>Body</b></em>' attribute list.
         * The list contents are of type {@link java.lang.String}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Specifies the behavior in one or more languages.
         * <p>From package UML::CommonBehavior.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Body</em>' attribute list.
         * @see #isSetBody()
         * @see #unsetBody()
         * @see uml.UmlPackage#getOpaqueBehavior_Body()
         * @model unique="false" unsettable="true" dataType="types.String"
         * extendedMetaData="kind='element'"
         * @generated
         */
        getBody() : org.eclipse.emf.common.util.EList<string>;

        /**
         * Unsets the value of the '{@link uml.OpaqueBehavior#getBody}' attribute list.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #isSetBody()
         * @see #getBody()
         * @generated
         */
        unsetBody();

        /**
         * Returns whether the value of the '{@link uml.OpaqueBehavior#getBody}' attribute list is set.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {boolean} whether the value of the '<em>Body</em>' attribute list is set.
         * @see #unsetBody()
         * @see #getBody()
         * @generated
         */
        isSetBody() : boolean;

        /**
         * Returns the value of the '<em><b>Language</b></em>' attribute list.
         * The list contents are of type {@link java.lang.String}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Languages the body strings use in the same order as the body strings.
         * <p>From package UML::CommonBehavior.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Language</em>' attribute list.
         * @see #isSetLanguage()
         * @see #unsetLanguage()
         * @see uml.UmlPackage#getOpaqueBehavior_Language()
         * @model unsettable="true" dataType="types.String"
         * @generated
         */
        getLanguage() : org.eclipse.emf.common.util.EList<string>;

        /**
         * Unsets the value of the '{@link uml.OpaqueBehavior#getLanguage}' attribute list.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #isSetLanguage()
         * @see #getLanguage()
         * @generated
         */
        unsetLanguage();

        /**
         * Returns whether the value of the '{@link uml.OpaqueBehavior#getLanguage}' attribute list is set.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {boolean} whether the value of the '<em>Language</em>' attribute list is set.
         * @see #unsetLanguage()
         * @see #getLanguage()
         * @generated
         */
        isSetLanguage() : boolean;
    }
}
