/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Package Import</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A PackageImport is a Relationship that imports all the non-private members of a Package into the Namespace owning the PackageImport, so that those Elements may be referred to by their unqualified names in the importingNamespace.
     * <p>From package UML::CommonStructure.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.PackageImport#getImportedPackage}</li>
     * <li>{@link uml.PackageImport#getImportingNamespace}</li>
     * <li>{@link uml.PackageImport#getVisibility}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getPackageImport()
     * @model
     * @generated
     * @class
     */
    export interface PackageImport extends uml.DirectedRelationship {
        /**
         * Returns the value of the '<em><b>Imported Package</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Specifies the Package whose members are imported into a Namespace.
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Imported Package</em>' reference.
         * @see #setImportedPackage(uml.Package)
         * @see uml.UmlPackage#getPackageImport_ImportedPackage()
         * @model required="true" ordered="false"
         * @generated
         */
        getImportedPackage() : uml.Package;

        /**
         * Sets the value of the '{@link uml.PackageImport#getImportedPackage}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Imported Package</em>' reference.
         * @see #getImportedPackage()
         * @generated
         */
        setImportedPackage(value : uml.Package);

        /**
         * Returns the value of the '<em><b>Importing Namespace</b></em>' container reference.
         * It is bidirectional and its opposite is '{@link uml.Namespace#getPackageImport}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Specifies the Namespace that imports the members from a Package.
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Importing Namespace</em>' container reference.
         * @see #setImportingNamespace(Namespace)
         * @see uml.UmlPackage#getPackageImport_ImportingNamespace()
         * @see uml.Namespace#getPackageImport
         * @model opposite="packageImport" required="true" transient="false" ordered="false"
         * @generated
         */
        getImportingNamespace() : uml.Namespace;

        /**
         * Sets the value of the '{@link uml.PackageImport#getImportingNamespace}' container reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Importing Namespace</em>' container reference.
         * @see #getImportingNamespace()
         * @generated
         */
        setImportingNamespace(value : uml.Namespace);

        /**
         * Returns the value of the '<em><b>Visibility</b></em>' attribute.
         * The default value is <code>"public"</code>.
         * The literals are from the enumeration {@link uml.VisibilityKind}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Specifies the visibility of the imported PackageableElements within the importingNamespace, i.e., whether imported Elements will in turn be visible to other Namespaces. If the PackageImport is public, the imported Elements will be visible outside the importingNamespace, while, if the PackageImport is private, they will not.
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @return {uml.VisibilityKind} the value of the '<em>Visibility</em>' attribute.
         * @see uml.VisibilityKind
         * @see #setVisibility(VisibilityKind)
         * @see uml.UmlPackage#getPackageImport_Visibility()
         * @model default="public" required="true" ordered="false"
         * @generated
         */
        getVisibility() : uml.VisibilityKind;

        /**
         * Sets the value of the '{@link uml.PackageImport#getVisibility}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {uml.VisibilityKind} value the new value of the '<em>Visibility</em>' attribute.
         * @see uml.VisibilityKind
         * @see #getVisibility()
         * @generated
         */
        setVisibility(value : uml.VisibilityKind);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The visibility of a PackageImport is either public or private.
         * visibility = VisibilityKind::public or visibility = VisibilityKind::private
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        public_or_private(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

