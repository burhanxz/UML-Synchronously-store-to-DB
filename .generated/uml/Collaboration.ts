/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Collaboration</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A Collaboration describes a structure of collaborating elements (roles), each performing a specialized function, which collectively accomplish some desired functionality.
     * <p>From package UML::StructuredClassifiers.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.Collaboration#getCollaborationRole}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getCollaboration()
     * @model
     * @generated
     * @class
     */
    export interface Collaboration extends uml.StructuredClassifier, uml.BehavioredClassifier {
        /**
         * Returns the value of the '<em><b>Collaboration Role</b></em>' reference list.
         * The list contents are of type {@link uml.ConnectableElement}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Represents the participants in the Collaboration.
         * <p>From package UML::StructuredClassifiers.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Collaboration Role</em>' reference list.
         * @see uml.UmlPackage#getCollaboration_CollaborationRole()
         * @model ordered="false"
         * @generated
         */
        getCollaborationRole() : org.eclipse.emf.common.util.EList<uml.ConnectableElement>;
    }
}

