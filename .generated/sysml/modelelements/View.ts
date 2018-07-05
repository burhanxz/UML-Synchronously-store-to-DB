/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.modelelements {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>View</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link sysml.modelelements.View#getViewPoint}</li>
     * <li>{@link sysml.modelelements.View#getBase_Package}</li>
     * </ul>
     * 
     * @see sysml.modelelements.ModelelementsPackage#getView()
     * @model
     * @generated
     * @class
     */
    export interface View extends org.eclipse.emf.ecore.EObject {
        /**
         * Returns the value of the '<em><b>View Point</b></em>' reference.
         * <!-- begin-user-doc -->
         * <p>
         * If the meaning of the '<em>View Point</em>' reference isn't clear,
         * there really should be more of a description here...
         * </p>
         * <!-- end-user-doc -->
         * @return {*} the value of the '<em>View Point</em>' reference.
         * @see sysml.modelelements.ModelelementsPackage#getView_ViewPoint()
         * @model required="true" transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getViewPoint() : sysml.modelelements.ViewPoint;

        /**
         * Returns the value of the '<em><b>Base Package</b></em>' reference.
         * <!-- begin-user-doc -->
         * <p>
         * If the meaning of the '<em>Base Package</em>' reference isn't clear,
         * there really should be more of a description here...
         * </p>
         * <!-- end-user-doc -->
         * @return {*} the value of the '<em>Base Package</em>' reference.
         * @see #setBase_Package(uml.Package)
         * @see sysml.modelelements.ModelelementsPackage#getView_Base_Package()
         * @model required="true" ordered="false"
         * @generated
         */
        getBase_Package() : uml.Package;

        /**
         * Sets the value of the '{@link sysml.modelelements.View#getBase_Package}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Base Package</em>' reference.
         * @see #getBase_Package()
         * @generated
         */
        setBase_Package(value : uml.Package);
    }
}
