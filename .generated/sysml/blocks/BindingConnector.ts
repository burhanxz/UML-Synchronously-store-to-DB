/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.blocks {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Binding Connector</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link sysml.blocks.BindingConnector#getBase_Connector}</li>
     * </ul>
     * 
     * @see sysml.blocks.BlocksPackage#getBindingConnector()
     * @model
     * @generated
     * @class
     */
    export interface BindingConnector extends org.eclipse.emf.ecore.EObject {
        /**
         * Returns the value of the '<em><b>Base Connector</b></em>' reference.
         * <!-- begin-user-doc -->
         * <p>
         * If the meaning of the '<em>Base Connector</em>' reference isn't clear,
         * there really should be more of a description here...
         * </p>
         * <!-- end-user-doc -->
         * @return {*} the value of the '<em>Base Connector</em>' reference.
         * @see #setBase_Connector(Connector)
         * @see sysml.blocks.BlocksPackage#getBindingConnector_Base_Connector()
         * @model required="true" ordered="false"
         * @generated
         */
        getBase_Connector() : uml.Connector;

        /**
         * Sets the value of the '{@link sysml.blocks.BindingConnector#getBase_Connector}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Base Connector</em>' reference.
         * @see #getBase_Connector()
         * @generated
         */
        setBase_Connector(value : uml.Connector);
    }
}

