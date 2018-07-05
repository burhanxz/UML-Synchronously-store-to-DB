/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.portandflows {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Flow Port</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link sysml.portandflows.FlowPort#getBase_Port}</li>
     * <li>{@link sysml.portandflows.FlowPort#isIsAtomic}</li>
     * <li>{@link sysml.portandflows.FlowPort#isIsConjugated}</li>
     * <li>{@link sysml.portandflows.FlowPort#getDirection}</li>
     * </ul>
     * 
     * @see sysml.portandflows.PortandflowsPackage#getFlowPort()
     * @model
     * @generated
     * @class
     */
    export interface FlowPort extends org.eclipse.emf.ecore.EObject {
        /**
         * Returns the value of the '<em><b>Base Port</b></em>' reference.
         * <!-- begin-user-doc -->
         * <p>
         * If the meaning of the '<em>Base Port</em>' reference isn't clear,
         * there really should be more of a description here...
         * </p>
         * <!-- end-user-doc -->
         * @return {*} the value of the '<em>Base Port</em>' reference.
         * @see #setBase_Port(Port)
         * @see sysml.portandflows.PortandflowsPackage#getFlowPort_Base_Port()
         * @model required="true" ordered="false"
         * @generated
         */
        getBase_Port() : uml.Port;

        /**
         * Sets the value of the '{@link sysml.portandflows.FlowPort#getBase_Port}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Base Port</em>' reference.
         * @see #getBase_Port()
         * @generated
         */
        setBase_Port(value : uml.Port);

        /**
         * Returns the value of the '<em><b>Is Atomic</b></em>' attribute.
         * The default value is <code>"false"</code>.
         * <!-- begin-user-doc -->
         * <p>
         * If the meaning of the '<em>Is Atomic</em>' attribute isn't clear,
         * there really should be more of a description here...
         * </p>
         * <!-- end-user-doc -->
         * @return {boolean} the value of the '<em>Is Atomic</em>' attribute.
         * @see sysml.portandflows.PortandflowsPackage#getFlowPort_IsAtomic()
         * @model default="false" unique="false" dataType="types.Boolean" required="true" transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        isIsAtomic() : boolean;

        /**
         * Returns the value of the '<em><b>Is Conjugated</b></em>' attribute.
         * <!-- begin-user-doc -->
         * <p>
         * If the meaning of the '<em>Is Conjugated</em>' attribute isn't clear,
         * there really should be more of a description here...
         * </p>
         * <!-- end-user-doc -->
         * @return {boolean} the value of the '<em>Is Conjugated</em>' attribute.
         * @see #setIsConjugated(boolean)
         * @see sysml.portandflows.PortandflowsPackage#getFlowPort_IsConjugated()
         * @model unique="false" dataType="types.Boolean" ordered="false"
         * @generated
         */
        isIsConjugated() : boolean;

        /**
         * Sets the value of the '{@link sysml.portandflows.FlowPort#isIsConjugated}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {boolean} value the new value of the '<em>Is Conjugated</em>' attribute.
         * @see #isIsConjugated()
         * @generated
         */
        setIsConjugated(value : boolean);

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
         * @see sysml.portandflows.PortandflowsPackage#getFlowPort_Direction()
         * @model default="inout" unique="false" required="true" ordered="false"
         * @generated
         */
        getDirection() : sysml.portandflows.FlowDirection;

        /**
         * Sets the value of the '{@link sysml.portandflows.FlowPort#getDirection}' attribute.
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

