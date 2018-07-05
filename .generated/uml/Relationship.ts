/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Relationship</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * Relationship is an abstract concept that specifies some kind of relationship between Elements.
     * <p>From package UML::CommonStructure.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.Relationship#getRelatedElement}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getRelationship()
     * @model abstract="true"
     * @generated
     * @class
     */
    export interface Relationship extends uml.Element {
        /**
         * Returns the value of the '<em><b>Related Element</b></em>' reference list.
         * The list contents are of type {@link uml.Element}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Specifies the elements related by the Relationship.
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Related Element</em>' reference list.
         * @see uml.UmlPackage#getRelationship_RelatedElement()
         * @model required="true" transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getRelatedElement() : org.eclipse.emf.common.util.EList<uml.Element>;
    }
}

