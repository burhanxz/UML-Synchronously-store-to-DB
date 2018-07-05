/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.requirements {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Requirement Related</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link sysml.requirements.RequirementRelated#getBase_NamedElement}</li>
     * <li>{@link sysml.requirements.RequirementRelated#getTracedFrom}</li>
     * <li>{@link sysml.requirements.RequirementRelated#getSatisfies}</li>
     * <li>{@link sysml.requirements.RequirementRelated#getRefines}</li>
     * <li>{@link sysml.requirements.RequirementRelated#getVerifies}</li>
     * </ul>
     * 
     * @see sysml.requirements.RequirementsPackage#getRequirementRelated()
     * @model
     * @generated
     * @class
     */
    export interface RequirementRelated extends org.eclipse.emf.ecore.EObject {
        /**
         * Returns the value of the '<em><b>Base Named Element</b></em>' reference.
         * <!-- begin-user-doc -->
         * <p>
         * If the meaning of the '<em>Base Named Element</em>' reference isn't clear,
         * there really should be more of a description here...
         * </p>
         * <!-- end-user-doc -->
         * @return {*} the value of the '<em>Base Named Element</em>' reference.
         * @see #setBase_NamedElement(NamedElement)
         * @see sysml.requirements.RequirementsPackage#getRequirementRelated_Base_NamedElement()
         * @model required="true" ordered="false"
         * @generated
         */
        getBase_NamedElement() : uml.NamedElement;

        /**
         * Sets the value of the '{@link sysml.requirements.RequirementRelated#getBase_NamedElement}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Base Named Element</em>' reference.
         * @see #getBase_NamedElement()
         * @generated
         */
        setBase_NamedElement(value : uml.NamedElement);

        /**
         * Returns the value of the '<em><b>Traced From</b></em>' reference list.
         * The list contents are of type {@link sysml.requirements.Requirement}.
         * <!-- begin-user-doc -->
         * <p>
         * If the meaning of the '<em>Traced From</em>' reference list isn't clear,
         * there really should be more of a description here...
         * </p>
         * <!-- end-user-doc -->
         * @return {*} the value of the '<em>Traced From</em>' reference list.
         * @see sysml.requirements.RequirementsPackage#getRequirementRelated_TracedFrom()
         * @model transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getTracedFrom() : org.eclipse.emf.common.util.EList<sysml.requirements.Requirement>;

        /**
         * Returns the value of the '<em><b>Satisfies</b></em>' reference list.
         * The list contents are of type {@link sysml.requirements.Requirement}.
         * <!-- begin-user-doc -->
         * <p>
         * If the meaning of the '<em>Satisfies</em>' reference list isn't clear,
         * there really should be more of a description here...
         * </p>
         * <!-- end-user-doc -->
         * @return {*} the value of the '<em>Satisfies</em>' reference list.
         * @see sysml.requirements.RequirementsPackage#getRequirementRelated_Satisfies()
         * @model transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getSatisfies() : org.eclipse.emf.common.util.EList<sysml.requirements.Requirement>;

        /**
         * Returns the value of the '<em><b>Refines</b></em>' reference list.
         * The list contents are of type {@link sysml.requirements.Requirement}.
         * <!-- begin-user-doc -->
         * <p>
         * If the meaning of the '<em>Refines</em>' reference list isn't clear,
         * there really should be more of a description here...
         * </p>
         * <!-- end-user-doc -->
         * @return {*} the value of the '<em>Refines</em>' reference list.
         * @see sysml.requirements.RequirementsPackage#getRequirementRelated_Refines()
         * @model transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getRefines() : org.eclipse.emf.common.util.EList<sysml.requirements.Requirement>;

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
         * @see sysml.requirements.RequirementsPackage#getRequirementRelated_Verifies()
         * @model transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getVerifies() : org.eclipse.emf.common.util.EList<sysml.requirements.Requirement>;
    }
}

