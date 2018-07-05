/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Encapsulated Classifier</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * An EncapsulatedClassifier may own Ports to specify typed interaction points.
     * <p>From package UML::StructuredClassifiers.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.EncapsulatedClassifier#getOwnedPort}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getEncapsulatedClassifier()
     * @model abstract="true"
     * @generated
     * @class
     */
    export interface EncapsulatedClassifier extends uml.StructuredClassifier {
        /**
         * Returns the value of the '<em><b>Owned Port</b></em>' reference list.
         * The list contents are of type {@link uml.Port}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Ports owned by the EncapsulatedClassifier.
         * <p>From package UML::StructuredClassifiers.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Owned Port</em>' reference list.
         * @see uml.UmlPackage#getEncapsulatedClassifier_OwnedPort()
         * @model transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getOwnedPort() : org.eclipse.emf.common.util.EList<uml.Port>;
    }
}

