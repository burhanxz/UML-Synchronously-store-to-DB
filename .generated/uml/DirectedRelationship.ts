/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Directed Relationship</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A DirectedRelationship represents a relationship between a collection of source model Elements and a collection of target model Elements.
     * <p>From package UML::CommonStructure.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.DirectedRelationship#getSource}</li>
     * <li>{@link uml.DirectedRelationship#getTarget}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getDirectedRelationship()
     * @model abstract="true"
     * @generated
     * @class
     */
    export interface DirectedRelationship extends uml.Relationship {
        /**
         * Returns the value of the '<em><b>Source</b></em>' reference list.
         * The list contents are of type {@link uml.Element}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Specifies the source Element(s) of the DirectedRelationship.
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Source</em>' reference list.
         * @see uml.UmlPackage#getDirectedRelationship_Source()
         * @model required="true" transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getSource() : org.eclipse.emf.common.util.EList<uml.Element>;

        /**
         * Returns the value of the '<em><b>Target</b></em>' reference list.
         * The list contents are of type {@link uml.Element}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Specifies the target Element(s) of the DirectedRelationship.
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Target</em>' reference list.
         * @see uml.UmlPackage#getDirectedRelationship_Target()
         * @model required="true" transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getTarget() : org.eclipse.emf.common.util.EList<uml.Element>;
    }
}

