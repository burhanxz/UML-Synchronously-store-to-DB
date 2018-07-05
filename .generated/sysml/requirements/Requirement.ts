/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.requirements {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Requirement</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link sysml.requirements.Requirement#getText}</li>
     * <li>{@link sysml.requirements.Requirement#getId}</li>
     * <li>{@link sysml.requirements.Requirement#getDerived}</li>
     * <li>{@link sysml.requirements.Requirement#getDerivedFrom}</li>
     * <li>{@link sysml.requirements.Requirement#getSatisfiedBy}</li>
     * <li>{@link sysml.requirements.Requirement#getRefinedBy}</li>
     * <li>{@link sysml.requirements.Requirement#getTracedTo}</li>
     * <li>{@link sysml.requirements.Requirement#getVerifiedBy}</li>
     * <li>{@link sysml.requirements.Requirement#getMaster}</li>
     * <li>{@link sysml.requirements.Requirement#getBase_Class}</li>
     * </ul>
     * 
     * @see sysml.requirements.RequirementsPackage#getRequirement()
     * @model
     * @generated
     * @class
     */
    export interface Requirement extends org.eclipse.emf.ecore.EObject {
        /**
         * Returns the value of the '<em><b>Text</b></em>' attribute.
         * <!-- begin-user-doc -->
         * <p>
         * If the meaning of the '<em>Text</em>' attribute isn't clear,
         * there really should be more of a description here...
         * </p>
         * <!-- end-user-doc -->
         * @return {string} the value of the '<em>Text</em>' attribute.
         * @see #setText(String)
         * @see sysml.requirements.RequirementsPackage#getRequirement_Text()
         * @model unique="false" dataType="types.String" required="true" ordered="false"
         * @generated
         */
        getText() : string;

        /**
         * Sets the value of the '{@link sysml.requirements.Requirement#getText}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {string} value the new value of the '<em>Text</em>' attribute.
         * @see #getText()
         * @generated
         */
        setText(value : string);

        /**
         * Returns the value of the '<em><b>Id</b></em>' attribute.
         * <!-- begin-user-doc -->
         * <p>
         * If the meaning of the '<em>Id</em>' attribute isn't clear,
         * there really should be more of a description here...
         * </p>
         * <!-- end-user-doc -->
         * @return {string} the value of the '<em>Id</em>' attribute.
         * @see #setId(String)
         * @see sysml.requirements.RequirementsPackage#getRequirement_Id()
         * @model unique="false" dataType="types.String" required="true" ordered="false"
         * @generated
         */
        getId() : string;

        /**
         * Sets the value of the '{@link sysml.requirements.Requirement#getId}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {string} value the new value of the '<em>Id</em>' attribute.
         * @see #getId()
         * @generated
         */
        setId(value : string);

        /**
         * Returns the value of the '<em><b>Derived</b></em>' reference list.
         * The list contents are of type {@link sysml.requirements.Requirement}.
         * <!-- begin-user-doc -->
         * <p>
         * If the meaning of the '<em>Derived</em>' reference list isn't clear,
         * there really should be more of a description here...
         * </p>
         * <!-- end-user-doc -->
         * @return {*} the value of the '<em>Derived</em>' reference list.
         * @see sysml.requirements.RequirementsPackage#getRequirement_Derived()
         * @model transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getDerived() : org.eclipse.emf.common.util.EList<Requirement>;

        /**
         * Returns the value of the '<em><b>Derived From</b></em>' reference list.
         * The list contents are of type {@link sysml.requirements.Requirement}.
         * <!-- begin-user-doc -->
         * <p>
         * If the meaning of the '<em>Derived From</em>' reference list isn't clear,
         * there really should be more of a description here...
         * </p>
         * <!-- end-user-doc -->
         * @return {*} the value of the '<em>Derived From</em>' reference list.
         * @see sysml.requirements.RequirementsPackage#getRequirement_DerivedFrom()
         * @model transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getDerivedFrom() : org.eclipse.emf.common.util.EList<Requirement>;

        /**
         * Returns the value of the '<em><b>Satisfied By</b></em>' reference list.
         * The list contents are of type {@link uml.NamedElement}.
         * <!-- begin-user-doc -->
         * <p>
         * If the meaning of the '<em>Satisfied By</em>' reference list isn't clear,
         * there really should be more of a description here...
         * </p>
         * <!-- end-user-doc -->
         * @return {*} the value of the '<em>Satisfied By</em>' reference list.
         * @see sysml.requirements.RequirementsPackage#getRequirement_SatisfiedBy()
         * @model transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getSatisfiedBy() : org.eclipse.emf.common.util.EList<uml.NamedElement>;

        /**
         * Returns the value of the '<em><b>Refined By</b></em>' reference list.
         * The list contents are of type {@link uml.NamedElement}.
         * <!-- begin-user-doc -->
         * <p>
         * If the meaning of the '<em>Refined By</em>' reference list isn't clear,
         * there really should be more of a description here...
         * </p>
         * <!-- end-user-doc -->
         * @return {*} the value of the '<em>Refined By</em>' reference list.
         * @see sysml.requirements.RequirementsPackage#getRequirement_RefinedBy()
         * @model transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getRefinedBy() : org.eclipse.emf.common.util.EList<uml.NamedElement>;

        /**
         * Returns the value of the '<em><b>Traced To</b></em>' reference list.
         * The list contents are of type {@link uml.NamedElement}.
         * <!-- begin-user-doc -->
         * <p>
         * If the meaning of the '<em>Traced To</em>' reference list isn't clear,
         * there really should be more of a description here...
         * </p>
         * <!-- end-user-doc -->
         * @return {*} the value of the '<em>Traced To</em>' reference list.
         * @see sysml.requirements.RequirementsPackage#getRequirement_TracedTo()
         * @model transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getTracedTo() : org.eclipse.emf.common.util.EList<uml.NamedElement>;

        /**
         * Returns the value of the '<em><b>Verified By</b></em>' reference list.
         * The list contents are of type {@link uml.NamedElement}.
         * <!-- begin-user-doc -->
         * <p>
         * If the meaning of the '<em>Verified By</em>' reference list isn't clear,
         * there really should be more of a description here...
         * </p>
         * <!-- end-user-doc -->
         * @return {*} the value of the '<em>Verified By</em>' reference list.
         * @see sysml.requirements.RequirementsPackage#getRequirement_VerifiedBy()
         * @model transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getVerifiedBy() : org.eclipse.emf.common.util.EList<uml.NamedElement>;

        /**
         * Returns the value of the '<em><b>Master</b></em>' reference.
         * <!-- begin-user-doc -->
         * <p>
         * If the meaning of the '<em>Master</em>' reference isn't clear,
         * there really should be more of a description here...
         * </p>
         * <!-- end-user-doc -->
         * @return {*} the value of the '<em>Master</em>' reference.
         * @see sysml.requirements.RequirementsPackage#getRequirement_Master()
         * @model transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getMaster() : Requirement;

        /**
         * Returns the value of the '<em><b>Base Class</b></em>' reference.
         * <!-- begin-user-doc -->
         * <p>
         * If the meaning of the '<em>Base Class</em>' reference isn't clear,
         * there really should be more of a description here...
         * </p>
         * <!-- end-user-doc -->
         * @return {*} the value of the '<em>Base Class</em>' reference.
         * @see #setBase_Class(uml.Class)
         * @see sysml.requirements.RequirementsPackage#getRequirement_Base_Class()
         * @model required="true" ordered="false"
         * @generated
         */
        getBase_Class() : uml.Class;

        /**
         * Sets the value of the '{@link sysml.requirements.Requirement#getBase_Class}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Base Class</em>' reference.
         * @see #getBase_Class()
         * @generated
         */
        setBase_Class(value : uml.Class);
    }
}

