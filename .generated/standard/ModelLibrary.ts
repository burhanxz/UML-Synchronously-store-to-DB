/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace standard {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Model Library</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A package that contains model elements that are intended to be reused by other packages. It is analogous to a class library in some programming languages. The model library may not include instances of the metamodel extension metaclasses specified in Clause 12.3, such as Profiles and Stereotypes. However it may include ProfileApplications and Stereotype applications, and a model library is often used in conjunction with an applied Profile.
     * <p>From package StandardProfile (URI {@literal http://www.omg.org/spec/UML/20131001/StandardProfile}).</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link standard.ModelLibrary#getBase_Package}</li>
     * </ul>
     * 
     * @see standard.StandardPackage#getModelLibrary()
     * @model
     * @generated
     * @class
     */
    export interface ModelLibrary extends org.eclipse.emf.ecore.EObject {
        /**
         * Returns the value of the '<em><b>Base Package</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * <p>From package StandardProfile (URI {@literal http://www.omg.org/spec/UML/20131001/StandardProfile}).</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Base Package</em>' reference.
         * @see #setBase_Package(uml.Package)
         * @see standard.StandardPackage#getModelLibrary_Base_Package()
         * @model required="true" ordered="false"
         * @generated
         */
        getBase_Package() : uml.Package;

        /**
         * Sets the value of the '{@link standard.ModelLibrary#getBase_Package}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Base Package</em>' reference.
         * @see #getBase_Package()
         * @generated
         */
        setBase_Package(value : uml.Package);
    }
}
