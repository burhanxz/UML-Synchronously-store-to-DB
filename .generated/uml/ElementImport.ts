/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Element Import</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * An ElementImport identifies a NamedElement in a Namespace other than the one that owns that NamedElement and allows the NamedElement to be referenced using an unqualified name in the Namespace owning the ElementImport.
     * <p>From package UML::CommonStructure.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.ElementImport#getAlias}</li>
     * <li>{@link uml.ElementImport#getImportedElement}</li>
     * <li>{@link uml.ElementImport#getImportingNamespace}</li>
     * <li>{@link uml.ElementImport#getVisibility}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getElementImport()
     * @model
     * @generated
     * @class
     */
    export interface ElementImport extends uml.DirectedRelationship {
        /**
         * Returns the value of the '<em><b>Alias</b></em>' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Specifies the name that should be added to the importing Namespace in lieu of the name of the imported PackagableElement. The alias must not clash with any other member in the importing Namespace. By default, no alias is used.
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @return {string} the value of the '<em>Alias</em>' attribute.
         * @see #isSetAlias()
         * @see #unsetAlias()
         * @see #setAlias(String)
         * @see uml.UmlPackage#getElementImport_Alias()
         * @model unsettable="true" dataType="types.String" ordered="false"
         * @generated
         */
        getAlias() : string;

        /**
         * Sets the value of the '{@link uml.ElementImport#getAlias}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {string} value the new value of the '<em>Alias</em>' attribute.
         * @see #isSetAlias()
         * @see #unsetAlias()
         * @see #getAlias()
         * @generated
         */
        setAlias(value : string);

        /**
         * Unsets the value of the '{@link uml.ElementImport#getAlias}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #isSetAlias()
         * @see #getAlias()
         * @see #setAlias(String)
         * @generated
         */
        unsetAlias();

        /**
         * Returns whether the value of the '{@link uml.ElementImport#getAlias}' attribute is set.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {boolean} whether the value of the '<em>Alias</em>' attribute is set.
         * @see #unsetAlias()
         * @see #getAlias()
         * @see #setAlias(String)
         * @generated
         */
        isSetAlias() : boolean;

        /**
         * Returns the value of the '<em><b>Imported Element</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Specifies the PackageableElement whose name is to be added to a Namespace.
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Imported Element</em>' reference.
         * @see #setImportedElement(PackageableElement)
         * @see uml.UmlPackage#getElementImport_ImportedElement()
         * @model required="true" ordered="false"
         * @generated
         */
        getImportedElement() : uml.PackageableElement;

        /**
         * Sets the value of the '{@link uml.ElementImport#getImportedElement}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Imported Element</em>' reference.
         * @see #getImportedElement()
         * @generated
         */
        setImportedElement(value : uml.PackageableElement);

        /**
         * Returns the value of the '<em><b>Importing Namespace</b></em>' container reference.
         * It is bidirectional and its opposite is '{@link uml.Namespace#getElementImport}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Specifies the Namespace that imports a PackageableElement from another Namespace.
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Importing Namespace</em>' container reference.
         * @see #setImportingNamespace(Namespace)
         * @see uml.UmlPackage#getElementImport_ImportingNamespace()
         * @see uml.Namespace#getElementImport
         * @model opposite="elementImport" required="true" transient="false" ordered="false"
         * @generated
         */
        getImportingNamespace() : uml.Namespace;

        /**
         * Sets the value of the '{@link uml.ElementImport#getImportingNamespace}' container reference.
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
         * Specifies the visibility of the imported PackageableElement within the importingNamespace, i.e., whether the  importedElement will in turn be visible to other Namespaces. If the ElementImport is public, the importedElement will be visible outside the importingNamespace while, if the ElementImport is private, it will not.
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @return {uml.VisibilityKind} the value of the '<em>Visibility</em>' attribute.
         * @see uml.VisibilityKind
         * @see #setVisibility(VisibilityKind)
         * @see uml.UmlPackage#getElementImport_Visibility()
         * @model default="public" required="true" ordered="false"
         * @generated
         */
        getVisibility() : uml.VisibilityKind;

        /**
         * Sets the value of the '{@link uml.ElementImport#getVisibility}' attribute.
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
         * An importedElement has either public visibility or no visibility at all.
         * importedElement.visibility <> null implies importedElement.visibility = VisibilityKind::public
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        imported_element_is_public(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The visibility of an ElementImport is either public or private.
         * visibility = VisibilityKind::public or visibility = VisibilityKind::private
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        visibility_public_or_private(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The query getName() returns the name under which the imported PackageableElement will be known in the importing namespace.
         * result = (if alias->notEmpty() then
         * alias
         * else
         * importedElement.name
         * endif)
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @model kind="operation" dataType="types.String" required="true" ordered="false"
         * @generated
         * @return {string}
         */
        getName() : string;
    }
}

