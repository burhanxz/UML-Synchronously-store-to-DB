/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.portandflows {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Item Flow</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link sysml.portandflows.ItemFlow#getBase_InformationFlow}</li>
     * <li>{@link sysml.portandflows.ItemFlow#getItemProperty}</li>
     * </ul>
     * 
     * @see sysml.portandflows.PortandflowsPackage#getItemFlow()
     * @model
     * @generated
     * @class
     */
    export interface ItemFlow extends org.eclipse.emf.ecore.EObject {
        /**
         * Returns the value of the '<em><b>Base Information Flow</b></em>' reference.
         * <!-- begin-user-doc -->
         * <p>
         * If the meaning of the '<em>Base Information Flow</em>' reference isn't clear,
         * there really should be more of a description here...
         * </p>
         * <!-- end-user-doc -->
         * @return {*} the value of the '<em>Base Information Flow</em>' reference.
         * @see #setBase_InformationFlow(InformationFlow)
         * @see sysml.portandflows.PortandflowsPackage#getItemFlow_Base_InformationFlow()
         * @model required="true" ordered="false"
         * @generated
         */
        getBase_InformationFlow() : uml.InformationFlow;

        /**
         * Sets the value of the '{@link sysml.portandflows.ItemFlow#getBase_InformationFlow}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Base Information Flow</em>' reference.
         * @see #getBase_InformationFlow()
         * @generated
         */
        setBase_InformationFlow(value : uml.InformationFlow);

        /**
         * Returns the value of the '<em><b>Item Property</b></em>' reference.
         * <!-- begin-user-doc -->
         * <p>
         * If the meaning of the '<em>Item Property</em>' reference isn't clear,
         * there really should be more of a description here...
         * </p>
         * <!-- end-user-doc -->
         * @return {*} the value of the '<em>Item Property</em>' reference.
         * @see #setItemProperty(Property)
         * @see sysml.portandflows.PortandflowsPackage#getItemFlow_ItemProperty()
         * @model ordered="false"
         * @generated
         */
        getItemProperty() : uml.Property;

        /**
         * Sets the value of the '{@link sysml.portandflows.ItemFlow#getItemProperty}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Item Property</em>' reference.
         * @see #getItemProperty()
         * @generated
         */
        setItemProperty(value : uml.Property);
    }
}

