/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.blocks {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Nested Connector End</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link sysml.blocks.NestedConnectorEnd#getPropertyPath}</li>
     * <li>{@link sysml.blocks.NestedConnectorEnd#getBase_ConnectorEnd}</li>
     * </ul>
     * 
     * @see sysml.blocks.BlocksPackage#getNestedConnectorEnd()
     * @model
     * @generated
     * @class
     */
    export interface NestedConnectorEnd extends org.eclipse.emf.ecore.EObject {
        /**
         * Returns the value of the '<em><b>Property Path</b></em>' reference list.
         * The list contents are of type {@link uml.Property}.
         * <!-- begin-user-doc -->
         * <p>
         * If the meaning of the '<em>Property Path</em>' reference list isn't clear,
         * there really should be more of a description here...
         * </p>
         * <!-- end-user-doc -->
         * @return {*} the value of the '<em>Property Path</em>' reference list.
         * @see sysml.blocks.BlocksPackage#getNestedConnectorEnd_PropertyPath()
         * @model required="true"
         * @generated
         */
        getPropertyPath() : org.eclipse.emf.common.util.EList<uml.Property>;

        /**
         * Returns the value of the '<em><b>Base Connector End</b></em>' reference.
         * <!-- begin-user-doc -->
         * <p>
         * If the meaning of the '<em>Base Connector End</em>' reference isn't clear,
         * there really should be more of a description here...
         * </p>
         * <!-- end-user-doc -->
         * @return {*} the value of the '<em>Base Connector End</em>' reference.
         * @see #setBase_ConnectorEnd(ConnectorEnd)
         * @see sysml.blocks.BlocksPackage#getNestedConnectorEnd_Base_ConnectorEnd()
         * @model required="true" ordered="false"
         * @generated
         */
        getBase_ConnectorEnd() : uml.ConnectorEnd;

        /**
         * Sets the value of the '{@link sysml.blocks.NestedConnectorEnd#getBase_ConnectorEnd}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Base Connector End</em>' reference.
         * @see #getBase_ConnectorEnd()
         * @generated
         */
        setBase_ConnectorEnd(value : uml.ConnectorEnd);
    }
}

