/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Sequence Node</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A SequenceNode is a StructuredActivityNode that executes a sequence of ExecutableNodes in order.
     * <p>From package UML::Actions.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.SequenceNode#getExecutableNode}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getSequenceNode()
     * @model
     * @generated
     * @class
     */
    export interface SequenceNode extends uml.StructuredActivityNode {
        /**
         * Returns the value of the '<em><b>Executable Node</b></em>' containment reference list.
         * The list contents are of type {@link uml.ExecutableNode}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The ordered set of ExecutableNodes to be sequenced.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Executable Node</em>' containment reference list.
         * @see uml.UmlPackage#getSequenceNode_ExecutableNode()
         * @model containment="true"
         * @generated
         */
        getExecutableNode() : org.eclipse.emf.common.util.EList<uml.ExecutableNode>;
    }
}

