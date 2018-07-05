/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.activities {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Probability</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link sysml.activities.Probability#getBase_ActivityEdge}</li>
     * <li>{@link sysml.activities.Probability#getBase_ParameterSet}</li>
     * <li>{@link sysml.activities.Probability#getProbability}</li>
     * </ul>
     * 
     * @see sysml.activities.ActivitiesPackage#getProbability()
     * @model
     * @generated
     * @class
     */
    export interface Probability extends org.eclipse.emf.ecore.EObject {
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
         * @see sysml.activities.ActivitiesPackage#getProbability_Base_ActivityEdge()
         * @model required="true" ordered="false"
         * @generated
         */
        getBase_ActivityEdge() : uml.ActivityEdge;

        /**
         * Sets the value of the '{@link sysml.activities.Probability#getBase_ActivityEdge}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Base Activity Edge</em>' reference.
         * @see #getBase_ActivityEdge()
         * @generated
         */
        setBase_ActivityEdge(value : uml.ActivityEdge);

        /**
         * Returns the value of the '<em><b>Base Parameter Set</b></em>' reference.
         * <!-- begin-user-doc -->
         * <p>
         * If the meaning of the '<em>Base Parameter Set</em>' reference isn't clear,
         * there really should be more of a description here...
         * </p>
         * <!-- end-user-doc -->
         * @return {*} the value of the '<em>Base Parameter Set</em>' reference.
         * @see #setBase_ParameterSet(ParameterSet)
         * @see sysml.activities.ActivitiesPackage#getProbability_Base_ParameterSet()
         * @model required="true" ordered="false"
         * @generated
         */
        getBase_ParameterSet() : uml.ParameterSet;

        /**
         * Sets the value of the '{@link sysml.activities.Probability#getBase_ParameterSet}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Base Parameter Set</em>' reference.
         * @see #getBase_ParameterSet()
         * @generated
         */
        setBase_ParameterSet(value : uml.ParameterSet);

        /**
         * Returns the value of the '<em><b>Probability</b></em>' reference.
         * <!-- begin-user-doc -->
         * <p>
         * If the meaning of the '<em>Probability</em>' reference isn't clear,
         * there really should be more of a description here...
         * </p>
         * <!-- end-user-doc -->
         * @return {*} the value of the '<em>Probability</em>' reference.
         * @see #setProbability(ValueSpecification)
         * @see sysml.activities.ActivitiesPackage#getProbability_Probability()
         * @model ordered="false"
         * @generated
         */
        getProbability() : uml.ValueSpecification;

        /**
         * Sets the value of the '{@link sysml.activities.Probability#getProbability}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Probability</em>' reference.
         * @see #getProbability()
         * @generated
         */
        setProbability(value : uml.ValueSpecification);
    }
}

