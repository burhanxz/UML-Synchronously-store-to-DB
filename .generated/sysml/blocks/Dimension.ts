/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.blocks {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Dimension</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link sysml.blocks.Dimension#getBase_InstanceSpecification}</li>
     * </ul>
     * 
     * @see sysml.blocks.BlocksPackage#getDimension()
     * @model
     * @generated
     * @class
     */
    export interface Dimension extends org.eclipse.emf.ecore.EObject {
        /**
         * Returns the value of the '<em><b>Base Instance Specification</b></em>' reference.
         * <!-- begin-user-doc -->
         * <p>
         * If the meaning of the '<em>Base Instance Specification</em>' reference isn't clear,
         * there really should be more of a description here...
         * </p>
         * <!-- end-user-doc -->
         * @return {*} the value of the '<em>Base Instance Specification</em>' reference.
         * @see #setBase_InstanceSpecification(InstanceSpecification)
         * @see sysml.blocks.BlocksPackage#getDimension_Base_InstanceSpecification()
         * @model required="true" ordered="false"
         * @generated
         */
        getBase_InstanceSpecification() : uml.InstanceSpecification;

        /**
         * Sets the value of the '{@link sysml.blocks.Dimension#getBase_InstanceSpecification}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Base Instance Specification</em>' reference.
         * @see #getBase_InstanceSpecification()
         * @generated
         */
        setBase_InstanceSpecification(value : uml.InstanceSpecification);
    }
}

