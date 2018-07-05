/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Comment</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A Comment is a textual annotation that can be attached to a set of Elements.
     * <p>From package UML::CommonStructure.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.Comment#getAnnotatedElement}</li>
     * <li>{@link uml.Comment#getBody}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getComment()
     * @model
     * @generated
     * @class
     */
    export interface Comment extends uml.Element {
        /**
         * Returns the value of the '<em><b>Annotated Element</b></em>' reference list.
         * The list contents are of type {@link uml.Element}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * References the Element(s) being commented.
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Annotated Element</em>' reference list.
         * @see uml.UmlPackage#getComment_AnnotatedElement()
         * @model ordered="false"
         * @generated
         */
        getAnnotatedElement() : org.eclipse.emf.common.util.EList<uml.Element>;

        /**
         * Returns the value of the '<em><b>Body</b></em>' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Specifies a string that is the comment.
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @return {string} the value of the '<em>Body</em>' attribute.
         * @see #isSetBody()
         * @see #unsetBody()
         * @see #setBody(String)
         * @see uml.UmlPackage#getComment_Body()
         * @model unsettable="true" dataType="types.String" ordered="false"
         * extendedMetaData="kind='element'"
         * @generated
         */
        getBody() : string;

        /**
         * Sets the value of the '{@link uml.Comment#getBody}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {string} value the new value of the '<em>Body</em>' attribute.
         * @see #isSetBody()
         * @see #unsetBody()
         * @see #getBody()
         * @generated
         */
        setBody(value : string);

        /**
         * Unsets the value of the '{@link uml.Comment#getBody}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #isSetBody()
         * @see #getBody()
         * @see #setBody(String)
         * @generated
         */
        unsetBody();

        /**
         * Returns whether the value of the '{@link uml.Comment#getBody}' attribute is set.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {boolean} whether the value of the '<em>Body</em>' attribute is set.
         * @see #unsetBody()
         * @see #getBody()
         * @see #setBody(String)
         * @generated
         */
        isSetBody() : boolean;
    }
}

