/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.modelelements {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Rationale</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link sysml.modelelements.Rationale#getBase_Comment}</li>
     * </ul>
     * 
     * @see sysml.modelelements.ModelelementsPackage#getRationale()
     * @model
     * @generated
     * @class
     */
    export interface Rationale extends org.eclipse.emf.ecore.EObject {
        /**
         * Returns the value of the '<em><b>Base Comment</b></em>' reference.
         * <!-- begin-user-doc -->
         * <p>
         * If the meaning of the '<em>Base Comment</em>' reference isn't clear,
         * there really should be more of a description here...
         * </p>
         * <!-- end-user-doc -->
         * @return {*} the value of the '<em>Base Comment</em>' reference.
         * @see #setBase_Comment(Comment)
         * @see sysml.modelelements.ModelelementsPackage#getRationale_Base_Comment()
         * @model required="true" ordered="false"
         * @generated
         */
        getBase_Comment() : uml.Comment;

        /**
         * Sets the value of the '{@link sysml.modelelements.Rationale#getBase_Comment}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Base Comment</em>' reference.
         * @see #getBase_Comment()
         * @generated
         */
        setBase_Comment(value : uml.Comment);
    }
}

