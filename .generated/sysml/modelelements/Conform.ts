/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.modelelements {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Conform</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link sysml.modelelements.Conform#getBase_Dependency}</li>
     * </ul>
     * 
     * @see sysml.modelelements.ModelelementsPackage#getConform()
     * @model
     * @generated
     * @class
     */
    export interface Conform extends org.eclipse.emf.ecore.EObject {
        /**
         * Returns the value of the '<em><b>Base Dependency</b></em>' reference.
         * <!-- begin-user-doc -->
         * <p>
         * If the meaning of the '<em>Base Dependency</em>' reference isn't clear,
         * there really should be more of a description here...
         * </p>
         * <!-- end-user-doc -->
         * @return {*} the value of the '<em>Base Dependency</em>' reference.
         * @see #setBase_Dependency(Dependency)
         * @see sysml.modelelements.ModelelementsPackage#getConform_Base_Dependency()
         * @model required="true" ordered="false"
         * @generated
         */
        getBase_Dependency() : uml.Dependency;

        /**
         * Sets the value of the '{@link sysml.modelelements.Conform#getBase_Dependency}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Base Dependency</em>' reference.
         * @see #getBase_Dependency()
         * @generated
         */
        setBase_Dependency(value : uml.Dependency);
    }
}

