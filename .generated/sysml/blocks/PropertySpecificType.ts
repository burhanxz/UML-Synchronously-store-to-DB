/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.blocks {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Property Specific Type</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link sysml.blocks.PropertySpecificType#getBase_Classifier}</li>
     * </ul>
     * 
     * @see sysml.blocks.BlocksPackage#getPropertySpecificType()
     * @model
     * @generated
     * @class
     */
    export interface PropertySpecificType extends org.eclipse.emf.ecore.EObject {
        /**
         * Returns the value of the '<em><b>Base Classifier</b></em>' reference.
         * <!-- begin-user-doc -->
         * <p>
         * If the meaning of the '<em>Base Classifier</em>' reference isn't clear,
         * there really should be more of a description here...
         * </p>
         * <!-- end-user-doc -->
         * @return {*} the value of the '<em>Base Classifier</em>' reference.
         * @see #setBase_Classifier(Classifier)
         * @see sysml.blocks.BlocksPackage#getPropertySpecificType_Base_Classifier()
         * @model required="true" ordered="false"
         * @generated
         */
        getBase_Classifier() : uml.Classifier;

        /**
         * Sets the value of the '{@link sysml.blocks.PropertySpecificType#getBase_Classifier}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Base Classifier</em>' reference.
         * @see #getBase_Classifier()
         * @generated
         */
        setBase_Classifier(value : uml.Classifier);
    }
}

