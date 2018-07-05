/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.blocks {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Value Type</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link sysml.blocks.ValueType#getBase_DataType}</li>
     * <li>{@link sysml.blocks.ValueType#getUnit}</li>
     * <li>{@link sysml.blocks.ValueType#getDimension}</li>
     * </ul>
     * 
     * @see sysml.blocks.BlocksPackage#getValueType()
     * @model
     * @generated
     * @class
     */
    export interface ValueType extends org.eclipse.emf.ecore.EObject {
        /**
         * Returns the value of the '<em><b>Base Data Type</b></em>' reference.
         * <!-- begin-user-doc -->
         * <p>
         * If the meaning of the '<em>Base Data Type</em>' reference isn't clear,
         * there really should be more of a description here...
         * </p>
         * <!-- end-user-doc -->
         * @return {*} the value of the '<em>Base Data Type</em>' reference.
         * @see #setBase_DataType(DataType)
         * @see sysml.blocks.BlocksPackage#getValueType_Base_DataType()
         * @model required="true" ordered="false"
         * @generated
         */
        getBase_DataType() : uml.DataType;

        /**
         * Sets the value of the '{@link sysml.blocks.ValueType#getBase_DataType}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Base Data Type</em>' reference.
         * @see #getBase_DataType()
         * @generated
         */
        setBase_DataType(value : uml.DataType);

        /**
         * Returns the value of the '<em><b>Unit</b></em>' reference.
         * <!-- begin-user-doc -->
         * <p>
         * If the meaning of the '<em>Unit</em>' reference isn't clear,
         * there really should be more of a description here...
         * </p>
         * <!-- end-user-doc -->
         * @return {*} the value of the '<em>Unit</em>' reference.
         * @see #setUnit(Unit)
         * @see sysml.blocks.BlocksPackage#getValueType_Unit()
         * @model ordered="false"
         * @generated
         */
        getUnit() : sysml.blocks.Unit;

        /**
         * Sets the value of the '{@link sysml.blocks.ValueType#getUnit}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Unit</em>' reference.
         * @see #getUnit()
         * @generated
         */
        setUnit(value : sysml.blocks.Unit);

        /**
         * Returns the value of the '<em><b>Dimension</b></em>' reference.
         * <!-- begin-user-doc -->
         * <p>
         * If the meaning of the '<em>Dimension</em>' reference isn't clear,
         * there really should be more of a description here...
         * </p>
         * <!-- end-user-doc -->
         * @return {*} the value of the '<em>Dimension</em>' reference.
         * @see #setDimension(Dimension)
         * @see sysml.blocks.BlocksPackage#getValueType_Dimension()
         * @model ordered="false"
         * @generated
         */
        getDimension() : sysml.blocks.Dimension;

        /**
         * Sets the value of the '{@link sysml.blocks.ValueType#getDimension}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Dimension</em>' reference.
         * @see #getDimension()
         * @generated
         */
        setDimension(value : sysml.blocks.Dimension);
    }
}

