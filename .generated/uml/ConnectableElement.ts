/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Connectable Element</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * ConnectableElement is an abstract metaclass representing a set of instances that play roles of a StructuredClassifier. ConnectableElements may be joined by attached Connectors and specify configurations of linked instances to be created within an instance of the containing StructuredClassifier.
     * <p>From package UML::StructuredClassifiers.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.ConnectableElement#getEnd}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getConnectableElement()
     * @model abstract="true"
     * @generated
     * @class
     */
    export interface ConnectableElement extends uml.TypedElement, uml.ParameterableElement {
        /**
         * Returns the value of the '<em><b>End</b></em>' reference list.
         * The list contents are of type {@link uml.ConnectorEnd}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A set of ConnectorEnds that attach to this ConnectableElement.
         * <p>From package UML::StructuredClassifiers.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>End</em>' reference list.
         * @see uml.UmlPackage#getConnectableElement_End()
         * @model transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getEnd() : org.eclipse.emf.common.util.EList<uml.ConnectorEnd>;
    }
}

