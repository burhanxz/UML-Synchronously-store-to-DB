/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.allocations {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Allocated</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link sysml.allocations.Allocated#getBase_NamedElement}</li>
     * <li>{@link sysml.allocations.Allocated#getAllocatedFrom}</li>
     * <li>{@link sysml.allocations.Allocated#getAllocatedTo}</li>
     * </ul>
     * 
     * @see sysml.allocations.AllocationsPackage#getAllocated()
     * @model
     * @generated
     * @class
     */
    export interface Allocated extends org.eclipse.emf.ecore.EObject {
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
         * @see sysml.allocations.AllocationsPackage#getAllocated_Base_NamedElement()
         * @model required="true" ordered="false"
         * @generated
         */
        getBase_NamedElement() : uml.NamedElement;

        /**
         * Sets the value of the '{@link sysml.allocations.Allocated#getBase_NamedElement}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Base Named Element</em>' reference.
         * @see #getBase_NamedElement()
         * @generated
         */
        setBase_NamedElement(value : uml.NamedElement);

        /**
         * Returns the value of the '<em><b>Allocated From</b></em>' reference list.
         * The list contents are of type {@link uml.NamedElement}.
         * <!-- begin-user-doc -->
         * <p>
         * If the meaning of the '<em>Allocated From</em>' reference list isn't clear,
         * there really should be more of a description here...
         * </p>
         * <!-- end-user-doc -->
         * @return {*} the value of the '<em>Allocated From</em>' reference list.
         * @see sysml.allocations.AllocationsPackage#getAllocated_AllocatedFrom()
         * @model transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getAllocatedFrom() : org.eclipse.emf.common.util.EList<uml.NamedElement>;

        /**
         * Returns the value of the '<em><b>Allocated To</b></em>' reference list.
         * The list contents are of type {@link uml.NamedElement}.
         * <!-- begin-user-doc -->
         * <p>
         * If the meaning of the '<em>Allocated To</em>' reference list isn't clear,
         * there really should be more of a description here...
         * </p>
         * <!-- end-user-doc -->
         * @return {*} the value of the '<em>Allocated To</em>' reference list.
         * @see sysml.allocations.AllocationsPackage#getAllocated_AllocatedTo()
         * @model transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getAllocatedTo() : org.eclipse.emf.common.util.EList<uml.NamedElement>;
    }
}

