/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace standard {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>File</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A physical file in the context of the system developed.
     * <p>From package StandardProfile (URI {@literal http://www.omg.org/spec/UML/20131001/StandardProfile}).</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link standard.File#getBase_Artifact}</li>
     * </ul>
     * 
     * @see standard.StandardPackage#getFile()
     * @model abstract="true"
     * @generated
     * @class
     */
    export interface File extends org.eclipse.emf.ecore.EObject {
        /**
         * Returns the value of the '<em><b>Base Artifact</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * <p>From package StandardProfile (URI {@literal http://www.omg.org/spec/UML/20131001/StandardProfile}).</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Base Artifact</em>' reference.
         * @see #setBase_Artifact(Artifact)
         * @see standard.StandardPackage#getFile_Base_Artifact()
         * @model required="true" ordered="false"
         * @generated
         */
        getBase_Artifact() : uml.Artifact;

        /**
         * Sets the value of the '{@link standard.File#getBase_Artifact}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Base Artifact</em>' reference.
         * @see #getBase_Artifact()
         * @generated
         */
        setBase_Artifact(value : uml.Artifact);
    }
}

