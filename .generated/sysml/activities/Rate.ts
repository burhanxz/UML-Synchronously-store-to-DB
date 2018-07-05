/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.activities {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Rate</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link sysml.activities.Rate#getBase_Parameter}</li>
     * <li>{@link sysml.activities.Rate#getBase_ActivityEdge}</li>
     * <li>{@link sysml.activities.Rate#getRate}</li>
     * </ul>
     * 
     * @see sysml.activities.ActivitiesPackage#getRate()
     * @model
     * @generated
     * @class
     */
    export interface Rate extends org.eclipse.emf.ecore.EObject {
        /**
         * Returns the value of the '<em><b>Base Parameter</b></em>' reference.
         * <!-- begin-user-doc -->
         * <p>
         * If the meaning of the '<em>Base Parameter</em>' reference isn't clear,
         * there really should be more of a description here...
         * </p>
         * <!-- end-user-doc -->
         * @return {*} the value of the '<em>Base Parameter</em>' reference.
         * @see #setBase_Parameter(Parameter)
         * @see sysml.activities.ActivitiesPackage#getRate_Base_Parameter()
         * @model required="true" ordered="false"
         * @generated
         */
        getBase_Parameter() : uml.Parameter;

        /**
         * Sets the value of the '{@link sysml.activities.Rate#getBase_Parameter}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Base Parameter</em>' reference.
         * @see #getBase_Parameter()
         * @generated
         */
        setBase_Parameter(value : uml.Parameter);

        /**
         * Returns the value of the '<em><b>Base Activity Edge</b></em>' reference.
         * <!-- begin-user-doc -->
         * <p>
         * If the meaning of the '<em>Base Activity Edge</em>' reference isn't clear,
         * there really should be more of a description here...
         * </p>
         * <!-- end-user-doc -->
         * @return {*} the value of the '<em>Base Activity Edge</em>' reference.
         * @see #setBase_ActivityEdge(ActivityEdge)
         * @see sysml.activities.ActivitiesPackage#getRate_Base_ActivityEdge()
         * @model required="true" ordered="false"
         * @generated
         */
        getBase_ActivityEdge() : uml.ActivityEdge;

        /**
         * Sets the value of the '{@link sysml.activities.Rate#getBase_ActivityEdge}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Base Activity Edge</em>' reference.
         * @see #getBase_ActivityEdge()
         * @generated
         */
        setBase_ActivityEdge(value : uml.ActivityEdge);

        /**
         * Returns the value of the '<em><b>Rate</b></em>' reference.
         * <!-- begin-user-doc -->
         * <p>
         * If the meaning of the '<em>Rate</em>' reference isn't clear,
         * there really should be more of a description here...
         * </p>
         * <!-- end-user-doc -->
         * @return {*} the value of the '<em>Rate</em>' reference.
         * @see #setRate(InstanceSpecification)
         * @see sysml.activities.ActivitiesPackage#getRate_Rate()
         * @model ordered="false"
         * @generated
         */
        getRate() : uml.InstanceSpecification;

        /**
         * Sets the value of the '{@link sysml.activities.Rate#getRate}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Rate</em>' reference.
         * @see #getRate()
         * @generated
         */
        setRate(value : uml.InstanceSpecification);
    }
}

