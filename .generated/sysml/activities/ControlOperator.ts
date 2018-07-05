/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.activities {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Control Operator</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link sysml.activities.ControlOperator#getBase_Operation}</li>
     * <li>{@link sysml.activities.ControlOperator#getBase_Behavior}</li>
     * </ul>
     * 
     * @see sysml.activities.ActivitiesPackage#getControlOperator()
     * @model
     * @generated
     * @class
     */
    export interface ControlOperator extends org.eclipse.emf.ecore.EObject {
        /**
         * Returns the value of the '<em><b>Base Operation</b></em>' reference.
         * <!-- begin-user-doc -->
         * <p>
         * If the meaning of the '<em>Base Operation</em>' reference isn't clear,
         * there really should be more of a description here...
         * </p>
         * <!-- end-user-doc -->
         * @return {*} the value of the '<em>Base Operation</em>' reference.
         * @see #setBase_Operation(Operation)
         * @see sysml.activities.ActivitiesPackage#getControlOperator_Base_Operation()
         * @model required="true" ordered="false"
         * @generated
         */
        getBase_Operation() : uml.Operation;

        /**
         * Sets the value of the '{@link sysml.activities.ControlOperator#getBase_Operation}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Base Operation</em>' reference.
         * @see #getBase_Operation()
         * @generated
         */
        setBase_Operation(value : uml.Operation);

        /**
         * Returns the value of the '<em><b>Base Behavior</b></em>' reference.
         * <!-- begin-user-doc -->
         * <p>
         * If the meaning of the '<em>Base Behavior</em>' reference isn't clear,
         * there really should be more of a description here...
         * </p>
         * <!-- end-user-doc -->
         * @return {*} the value of the '<em>Base Behavior</em>' reference.
         * @see #setBase_Behavior(Behavior)
         * @see sysml.activities.ActivitiesPackage#getControlOperator_Base_Behavior()
         * @model required="true" ordered="false"
         * @generated
         */
        getBase_Behavior() : uml.Behavior;

        /**
         * Sets the value of the '{@link sysml.activities.ControlOperator#getBase_Behavior}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Base Behavior</em>' reference.
         * @see #getBase_Behavior()
         * @generated
         */
        setBase_Behavior(value : uml.Behavior);
    }
}

