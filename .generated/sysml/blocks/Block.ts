/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.blocks {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Block</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link sysml.blocks.Block#isIsEncapsulated}</li>
     * <li>{@link sysml.blocks.Block#getBase_Class}</li>
     * </ul>
     * 
     * @see sysml.blocks.BlocksPackage#getBlock()
     * @model
     * @generated
     * @class
     */
    export interface Block extends org.eclipse.emf.ecore.EObject {
        /**
         * Returns the value of the '<em><b>Is Encapsulated</b></em>' attribute.
         * <!-- begin-user-doc -->
         * <p>
         * If the meaning of the '<em>Is Encapsulated</em>' attribute isn't clear,
         * there really should be more of a description here...
         * </p>
         * <!-- end-user-doc -->
         * @return {boolean} the value of the '<em>Is Encapsulated</em>' attribute.
         * @see #setIsEncapsulated(boolean)
         * @see sysml.blocks.BlocksPackage#getBlock_IsEncapsulated()
         * @model unique="false" dataType="types.Boolean" ordered="false"
         * @generated
         */
        isIsEncapsulated() : boolean;

        /**
         * Sets the value of the '{@link sysml.blocks.Block#isIsEncapsulated}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {boolean} value the new value of the '<em>Is Encapsulated</em>' attribute.
         * @see #isIsEncapsulated()
         * @generated
         */
        setIsEncapsulated(value : boolean);

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
         * @see sysml.blocks.BlocksPackage#getBlock_Base_Class()
         * @model required="true" ordered="false"
         * @generated
         */
        getBase_Class() : uml.Class;

        /**
         * Sets the value of the '{@link sysml.blocks.Block#getBase_Class}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Base Class</em>' reference.
         * @see #getBase_Class()
         * @generated
         */
        setBase_Class(value : uml.Class);
    }
}

