/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.blocks {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Participant Property</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link sysml.blocks.ParticipantProperty#getBase_Property}</li>
     * <li>{@link sysml.blocks.ParticipantProperty#getEnd}</li>
     * </ul>
     * 
     * @see sysml.blocks.BlocksPackage#getParticipantProperty()
     * @model
     * @generated
     * @class
     */
    export interface ParticipantProperty extends org.eclipse.emf.ecore.EObject {
        /**
         * Returns the value of the '<em><b>Base Property</b></em>' reference.
         * <!-- begin-user-doc -->
         * <p>
         * If the meaning of the '<em>Base Property</em>' reference isn't clear,
         * there really should be more of a description here...
         * </p>
         * <!-- end-user-doc -->
         * @return {*} the value of the '<em>Base Property</em>' reference.
         * @see #setBase_Property(Property)
         * @see sysml.blocks.BlocksPackage#getParticipantProperty_Base_Property()
         * @model required="true" ordered="false"
         * @generated
         */
        getBase_Property() : uml.Property;

        /**
         * Sets the value of the '{@link sysml.blocks.ParticipantProperty#getBase_Property}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Base Property</em>' reference.
         * @see #getBase_Property()
         * @generated
         */
        setBase_Property(value : uml.Property);

        /**
         * Returns the value of the '<em><b>End</b></em>' reference.
         * <!-- begin-user-doc -->
         * <p>
         * If the meaning of the '<em>End</em>' reference isn't clear,
         * there really should be more of a description here...
         * </p>
         * <!-- end-user-doc -->
         * @return {*} the value of the '<em>End</em>' reference.
         * @see #setEnd(Property)
         * @see sysml.blocks.BlocksPackage#getParticipantProperty_End()
         * @model required="true" ordered="false"
         * @generated
         */
        getEnd() : uml.Property;

        /**
         * Sets the value of the '{@link sysml.blocks.ParticipantProperty#getEnd}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>End</em>' reference.
         * @see #getEnd()
         * @generated
         */
        setEnd(value : uml.Property);
    }
}

