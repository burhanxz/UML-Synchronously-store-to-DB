/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.portandflows {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Flow Specification</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link sysml.portandflows.FlowSpecification#getBase_Interface}</li>
     * </ul>
     * 
     * @see sysml.portandflows.PortandflowsPackage#getFlowSpecification()
     * @model
     * @generated
     * @class
     */
    export interface FlowSpecification extends org.eclipse.emf.ecore.EObject {
        /**
         * Returns the value of the '<em><b>Base Interface</b></em>' reference.
         * <!-- begin-user-doc -->
         * <p>
         * If the meaning of the '<em>Base Interface</em>' reference isn't clear,
         * there really should be more of a description here...
         * </p>
         * <!-- end-user-doc -->
         * @return {*} the value of the '<em>Base Interface</em>' reference.
         * @see #setBase_Interface(Interface)
         * @see sysml.portandflows.PortandflowsPackage#getFlowSpecification_Base_Interface()
         * @model required="true" ordered="false"
         * @generated
         */
        getBase_Interface() : uml.Interface;

        /**
         * Sets the value of the '{@link sysml.portandflows.FlowSpecification#getBase_Interface}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Base Interface</em>' reference.
         * @see #getBase_Interface()
         * @generated
         */
        setBase_Interface(value : uml.Interface);
    }
}

