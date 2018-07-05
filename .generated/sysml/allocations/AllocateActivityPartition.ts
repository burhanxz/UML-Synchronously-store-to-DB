/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.allocations {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Allocate Activity Partition</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link sysml.allocations.AllocateActivityPartition#getBase_ActivityPartition}</li>
     * </ul>
     * 
     * @see sysml.allocations.AllocationsPackage#getAllocateActivityPartition()
     * @model
     * @generated
     * @class
     */
    export interface AllocateActivityPartition extends org.eclipse.emf.ecore.EObject {
        /**
         * Returns the value of the '<em><b>Base Activity Partition</b></em>' reference.
         * <!-- begin-user-doc -->
         * <p>
         * If the meaning of the '<em>Base Activity Partition</em>' reference isn't clear,
         * there really should be more of a description here...
         * </p>
         * <!-- end-user-doc -->
         * @return {*} the value of the '<em>Base Activity Partition</em>' reference.
         * @see #setBase_ActivityPartition(ActivityPartition)
         * @see sysml.allocations.AllocationsPackage#getAllocateActivityPartition_Base_ActivityPartition()
         * @model required="true" ordered="false"
         * @generated
         */
        getBase_ActivityPartition() : uml.ActivityPartition;

        /**
         * Sets the value of the '{@link sysml.allocations.AllocateActivityPartition#getBase_ActivityPartition}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Base Activity Partition</em>' reference.
         * @see #getBase_ActivityPartition()
         * @generated
         */
        setBase_ActivityPartition(value : uml.ActivityPartition);
    }
}

