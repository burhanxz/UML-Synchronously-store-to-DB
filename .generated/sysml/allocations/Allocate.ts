/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.allocations {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Allocate</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link sysml.allocations.Allocate#getBase_Abstraction}</li>
     * </ul>
     * 
     * @see sysml.allocations.AllocationsPackage#getAllocate()
     * @model
     * @generated
     * @class
     */
    export interface Allocate extends org.eclipse.emf.ecore.EObject {
        /**
         * Returns the value of the '<em><b>Base Abstraction</b></em>' reference.
         * <!-- begin-user-doc -->
         * <p>
         * If the meaning of the '<em>Base Abstraction</em>' reference isn't clear,
         * there really should be more of a description here...
         * </p>
         * <!-- end-user-doc -->
         * @return {*} the value of the '<em>Base Abstraction</em>' reference.
         * @see #setBase_Abstraction(Abstraction)
         * @see sysml.allocations.AllocationsPackage#getAllocate_Base_Abstraction()
         * @model required="true" ordered="false"
         * @generated
         */
        getBase_Abstraction() : uml.Abstraction;

        /**
         * Sets the value of the '{@link sysml.allocations.Allocate#getBase_Abstraction}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Base Abstraction</em>' reference.
         * @see #getBase_Abstraction()
         * @generated
         */
        setBase_Abstraction(value : uml.Abstraction);
    }
}

