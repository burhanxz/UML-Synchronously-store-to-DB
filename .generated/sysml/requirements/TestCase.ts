/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.requirements {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Test Case</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link sysml.requirements.TestCase#getBase_Behavior}</li>
     * <li>{@link sysml.requirements.TestCase#getBase_Operation}</li>
     * <li>{@link sysml.requirements.TestCase#getVerifies}</li>
     * </ul>
     * 
     * @see sysml.requirements.RequirementsPackage#getTestCase()
     * @model
     * @generated
     * @class
     */
    export interface TestCase extends org.eclipse.emf.ecore.EObject {
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
         * @see sysml.requirements.RequirementsPackage#getTestCase_Base_Behavior()
         * @model required="true" ordered="false"
         * @generated
         */
        getBase_Behavior() : uml.Behavior;

        /**
         * Sets the value of the '{@link sysml.requirements.TestCase#getBase_Behavior}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Base Behavior</em>' reference.
         * @see #getBase_Behavior()
         * @generated
         */
        setBase_Behavior(value : uml.Behavior);

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
         * @see sysml.requirements.RequirementsPackage#getTestCase_Base_Operation()
         * @model required="true" ordered="false"
         * @generated
         */
        getBase_Operation() : uml.Operation;

        /**
         * Sets the value of the '{@link sysml.requirements.TestCase#getBase_Operation}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Base Operation</em>' reference.
         * @see #getBase_Operation()
         * @generated
         */
        setBase_Operation(value : uml.Operation);

        /**
         * Returns the value of the '<em><b>Verifies</b></em>' reference list.
         * The list contents are of type {@link sysml.requirements.Requirement}.
         * <!-- begin-user-doc -->
         * <p>
         * If the meaning of the '<em>Verifies</em>' reference list isn't clear,
         * there really should be more of a description here...
         * </p>
         * <!-- end-user-doc -->
         * @return {*} the value of the '<em>Verifies</em>' reference list.
         * @see sysml.requirements.RequirementsPackage#getTestCase_Verifies()
         * @model transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getVerifies() : org.eclipse.emf.common.util.EList<sysml.requirements.Requirement>;
    }
}

