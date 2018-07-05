/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.activities {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Optional</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link sysml.activities.Optional#getBase_Parameter}</li>
     * </ul>
     * 
     * @see sysml.activities.ActivitiesPackage#getOptional()
     * @model
     * @generated
     * @class
     */
    export interface Optional extends org.eclipse.emf.ecore.EObject {
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
         * @see sysml.activities.ActivitiesPackage#getOptional_Base_Parameter()
         * @model required="true" ordered="false"
         * @generated
         */
        getBase_Parameter() : uml.Parameter;

        /**
         * Sets the value of the '{@link sysml.activities.Optional#getBase_Parameter}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Base Parameter</em>' reference.
         * @see #getBase_Parameter()
         * @generated
         */
        setBase_Parameter(value : uml.Parameter);
    }
}

