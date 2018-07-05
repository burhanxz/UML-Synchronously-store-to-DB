/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.portandflows {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Flow Property</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link sysml.portandflows.FlowProperty#getBase_Property}</li>
     * <li>{@link sysml.portandflows.FlowProperty#getDirection}</li>
     * </ul>
     * 
     * @see sysml.portandflows.PortandflowsPackage#getFlowProperty()
     * @model
     * @generated
     * @class
     */
    export interface FlowProperty extends org.eclipse.emf.ecore.EObject {
        /**
         * Returns the value of the '<em><b>Base Property</b></em>' reference.
         * <!-- begin-user-doc -->
         * <p>
         * If the meaning of the '<em>Base Property</em>' reference isn't clear,
         * there really should be more of a description here...
         * </p>
         * <!-- end-user-doc -->
         * @return {*} the value of the '<em>Base Property</em>' reference.
         * @see #setBase_Property(Property)
         * @see sysml.portandflows.PortandflowsPackage#getFlowProperty_Base_Property()
         * @model required="true" ordered="false"
         * @generated
         */
        getBase_Property() : uml.Property;

        /**
         * Sets the value of the '{@link sysml.portandflows.FlowProperty#getBase_Property}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Base Property</em>' reference.
         * @see #getBase_Property()
         * @generated
         */
        setBase_Property(value : uml.Property);

        /**
         * Returns the value of the '<em><b>Direction</b></em>' attribute.
         * The default value is <code>"inout"</code>.
         * The literals are from the enumeration {@link sysml.portandflows.FlowDirection}.
         * <!-- begin-user-doc -->
         * <p>
         * If the meaning of the '<em>Direction</em>' attribute isn't clear,
         * there really should be more of a description here...
         * </p>
         * <!-- end-user-doc -->
         * @return {sysml.portandflows.FlowDirection} the value of the '<em>Direction</em>' attribute.
         * @see sysml.portandflows.FlowDirection
         * @see #setDirection(FlowDirection)
         * @see sysml.portandflows.PortandflowsPackage#getFlowProperty_Direction()
         * @model default="inout" unique="false" required="true" ordered="false"
         * @generated
         */
        getDirection() : sysml.portandflows.FlowDirection;

        /**
         * Sets the value of the '{@link sysml.portandflows.FlowProperty#getDirection}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {sysml.portandflows.FlowDirection} value the new value of the '<em>Direction</em>' attribute.
         * @see sysml.portandflows.FlowDirection
         * @see #getDirection()
         * @generated
         */
        setDirection(value : sysml.portandflows.FlowDirection);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @model kind="operation" required="true" ordered="false"
         * @generated
         * @return {*}
         */
        getIcon() : uml.Image;
    }
}

