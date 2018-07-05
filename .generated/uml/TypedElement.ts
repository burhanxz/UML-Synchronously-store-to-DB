/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Typed Element</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A TypedElement is a NamedElement that may have a Type specified for it.
     * <p>From package UML::CommonStructure.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.TypedElement#getType}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getTypedElement()
     * @model abstract="true"
     * @generated
     * @class
     */
    export interface TypedElement extends uml.NamedElement {
        /**
         * Returns the value of the '<em><b>Type</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The type of the TypedElement.
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Type</em>' reference.
         * @see #setType(Type)
         * @see uml.UmlPackage#getTypedElement_Type()
         * @model ordered="false"
         * @generated
         */
        getType() : uml.Type;

        /**
         * Sets the value of the '{@link uml.TypedElement#getType}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Type</em>' reference.
         * @see #getType()
         * @generated
         */
        setType(value : uml.Type);
    }
}

