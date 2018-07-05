/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Package Merge</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A package merge defines how the contents of one package are extended by the contents of another package.
     * <p>From package UML::Packages.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.PackageMerge#getMergedPackage}</li>
     * <li>{@link uml.PackageMerge#getReceivingPackage}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getPackageMerge()
     * @model
     * @generated
     * @class
     */
    export interface PackageMerge extends uml.DirectedRelationship {
        /**
         * Returns the value of the '<em><b>Merged Package</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * References the Package that is to be merged with the receiving package of the PackageMerge.
         * <p>From package UML::Packages.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Merged Package</em>' reference.
         * @see #setMergedPackage(uml.Package)
         * @see uml.UmlPackage#getPackageMerge_MergedPackage()
         * @model required="true" ordered="false"
         * @generated
         */
        getMergedPackage() : uml.Package;

        /**
         * Sets the value of the '{@link uml.PackageMerge#getMergedPackage}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Merged Package</em>' reference.
         * @see #getMergedPackage()
         * @generated
         */
        setMergedPackage(value : uml.Package);

        /**
         * Returns the value of the '<em><b>Receiving Package</b></em>' container reference.
         * It is bidirectional and its opposite is '{@link uml.Package#getPackageMerge}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * References the Package that is being extended with the contents of the merged package of the PackageMerge.
         * <p>From package UML::Packages.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Receiving Package</em>' container reference.
         * @see #setReceivingPackage(uml.Package)
         * @see uml.UmlPackage#getPackageMerge_ReceivingPackage()
         * @see uml.Package#getPackageMerge
         * @model opposite="packageMerge" required="true" transient="false" ordered="false"
         * @generated
         */
        getReceivingPackage() : uml.Package;

        /**
         * Sets the value of the '{@link uml.PackageMerge#getReceivingPackage}' container reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Receiving Package</em>' container reference.
         * @see #getReceivingPackage()
         * @generated
         */
        setReceivingPackage(value : uml.Package);
    }
}

