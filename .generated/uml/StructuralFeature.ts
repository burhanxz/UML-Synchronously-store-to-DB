/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Structural Feature</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A StructuralFeature is a typed feature of a Classifier that specifies the structure of instances of the Classifier.
     * <p>From package UML::Classification.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.StructuralFeature#isIsReadOnly}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getStructuralFeature()
     * @model abstract="true"
     * @generated
     * @class
     */
    export interface StructuralFeature extends uml.Feature, uml.TypedElement, uml.MultiplicityElement {
        /**
         * Returns the value of the '<em><b>Is Read Only</b></em>' attribute.
         * The default value is <code>"false"</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If isReadOnly is true, the StructuralFeature may not be written to after initialization.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {boolean} the value of the '<em>Is Read Only</em>' attribute.
         * @see #setIsReadOnly(boolean)
         * @see uml.UmlPackage#getStructuralFeature_IsReadOnly()
         * @model default="false" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         */
        isIsReadOnly() : boolean;

        /**
         * Sets the value of the '{@link uml.StructuralFeature#isIsReadOnly}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {boolean} value the new value of the '<em>Is Read Only</em>' attribute.
         * @see #isIsReadOnly()
         * @generated
         */
        setIsReadOnly(value : boolean);
    }
}

