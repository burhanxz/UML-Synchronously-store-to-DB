/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Package</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A package can have one or more profile applications to indicate which profiles have been applied. Because a profile is a package, it is possible to apply a profile not only to packages, but also to profiles.
     * Package specializes TemplateableElement and PackageableElement specializes ParameterableElement to specify that a package can be used as a template and a PackageableElement as a template parameter.
     * A package is used to group elements, and provides a namespace for the grouped elements.
     * <p>From package UML::Packages.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.Package#getURI}</li>
     * <li>{@link uml.Package#getNestedPackage}</li>
     * <li>{@link uml.Package#getNestingPackage}</li>
     * <li>{@link uml.Package#getOwnedStereotype}</li>
     * <li>{@link uml.Package#getOwnedType}</li>
     * <li>{@link uml.Package#getPackageMerge}</li>
     * <li>{@link uml.Package#getPackagedElement}</li>
     * <li>{@link uml.Package#getProfileApplication}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getPackage()
     * @model
     * @generated
     * @class
     */
    export interface Package extends uml.Namespace, uml.PackageableElement, uml.TemplateableElement {
        /**
         * Returns the value of the '<em><b>URI</b></em>' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Provides an identifier for the package that can be used for many purposes. A URI is the universally unique identification of the package following the IETF URI specification, RFC 2396 http://www.ietf.org/rfc/rfc2396.txt and it must comply with those syntax rules.
         * <p>From package UML::Packages.</p>
         * <!-- end-model-doc -->
         * @return {string} the value of the '<em>URI</em>' attribute.
         * @see #setURI(String)
         * @see uml.UmlPackage#getPackage_URI()
         * @model dataType="types.String" ordered="false"
         * @generated
         */
        getURI() : string;

        /**
         * Sets the value of the '{@link uml.Package#getURI}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {string} value the new value of the '<em>URI</em>' attribute.
         * @see #getURI()
         * @generated
         */
        setURI(value : string);

        /**
         * Returns the value of the '<em><b>Nested Package</b></em>' reference list.
         * The list contents are of type {@link uml.Package}.
         * It is bidirectional and its opposite is '{@link uml.Package#getNestingPackage}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * References the packaged elements that are Packages.
         * <p>From package UML::Packages.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Nested Package</em>' reference list.
         * @see uml.UmlPackage#getPackage_NestedPackage()
         * @see uml.Package#getNestingPackage
         * @model opposite="nestingPackage" transient="true" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getNestedPackage() : org.eclipse.emf.common.util.EList<Package>;

        /**
         * Returns the value of the '<em><b>Nesting Package</b></em>' reference.
         * It is bidirectional and its opposite is '{@link uml.Package#getNestedPackage}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * References the Package that owns this Package.
         * <p>From package UML::Packages.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Nesting Package</em>' reference.
         * @see #setNestingPackage(Package)
         * @see uml.UmlPackage#getPackage_NestingPackage()
         * @see uml.Package#getNestedPackage
         * @model opposite="nestedPackage" transient="true" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getNestingPackage() : Package;

        /**
         * Sets the value of the '{@link uml.Package#getNestingPackage}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Nesting Package</em>' reference.
         * @see #getNestingPackage()
         * @generated
         */
        setNestingPackage(value : Package);

        /**
         * Returns the value of the '<em><b>Owned Stereotype</b></em>' reference list.
         * The list contents are of type {@link uml.Stereotype}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * References the Stereotypes that are owned by the Package.
         * <p>From package UML::Packages.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Owned Stereotype</em>' reference list.
         * @see uml.UmlPackage#getPackage_OwnedStereotype()
         * @model transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getOwnedStereotype() : org.eclipse.emf.common.util.EList<uml.Stereotype>;

        /**
         * Returns the value of the '<em><b>Owned Type</b></em>' reference list.
         * The list contents are of type {@link uml.Type}.
         * It is bidirectional and its opposite is '{@link uml.Type#getPackage}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * References the packaged elements that are Types.
         * <p>From package UML::Packages.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Owned Type</em>' reference list.
         * @see uml.UmlPackage#getPackage_OwnedType()
         * @see uml.Type#getPackage
         * @model opposite="package" transient="true" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getOwnedType() : org.eclipse.emf.common.util.EList<uml.Type>;

        /**
         * Returns the value of the '<em><b>Package Merge</b></em>' containment reference list.
         * The list contents are of type {@link uml.PackageMerge}.
         * It is bidirectional and its opposite is '{@link uml.PackageMerge#getReceivingPackage}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * References the PackageMerges that are owned by this Package.
         * <p>From package UML::Packages.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Package Merge</em>' containment reference list.
         * @see uml.UmlPackage#getPackage_PackageMerge()
         * @see uml.PackageMerge#getReceivingPackage
         * @model opposite="receivingPackage" containment="true" ordered="false"
         * @generated
         */
        getPackageMerge() : org.eclipse.emf.common.util.EList<uml.PackageMerge>;

        /**
         * Returns the value of the '<em><b>Packaged Element</b></em>' containment reference list.
         * The list contents are of type {@link uml.PackageableElement}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Specifies the packageable elements that are owned by this Package.
         * <p>From package UML::Packages.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Packaged Element</em>' containment reference list.
         * @see uml.UmlPackage#getPackage_PackagedElement()
         * @model containment="true" ordered="false"
         * @generated
         */
        getPackagedElement() : org.eclipse.emf.common.util.EList<uml.PackageableElement>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If an element that is owned by a package has visibility, it is public or private.
         * packagedElement->forAll(e | e.visibility<> null implies e.visibility = VisibilityKind::public or e.visibility = VisibilityKind::private)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        elements_public_or_private(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Applies the current definition of the specified profile to this package and automatically applies required stereotypes in the profile to elements within this package's namespace hieararchy. If a different definition is already applied, automatically migrates any associated stereotype values on a "best effort" basis (matching classifiers and structural features by name).
         * @param {*} profile The profile to apply.
         * <!-- end-model-doc -->
         * @model ordered="false" profileRequired="true" profileOrdered="false"
         * @generated
         * @return {*}
         */
        applyProfile(profile : uml.Profile) : org.eclipse.emf.common.util.EList<org.eclipse.emf.ecore.EObject>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Creates a(n) (abstract) class with the specified name as an owned type of this package.
         * @param {string} name The name for the new class, or null.
         * @param {boolean} isAbstract Whether the new class should be abstract.
         * <!-- end-model-doc -->
         * @model required="true" ordered="false" nameDataType="types.String" nameRequired="true" nameOrdered="false" isAbstractDataType="types.Boolean" isAbstractRequired="true" isAbstractOrdered="false"
         * @generated
         * @return {*}
         */
        createOwnedClass(name : string, isAbstract : boolean) : uml.Class;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Creates a enumeration with the specified name as an owned type of this package.
         * @param {string} name The name for the new enumeration, or null.
         * <!-- end-model-doc -->
         * @model required="true" ordered="false" nameDataType="types.String" nameRequired="true" nameOrdered="false"
         * @generated
         * @return {*}
         */
        createOwnedEnumeration(name : string) : uml.Enumeration;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Creates an interface with the specified name as an owned type of this package.
         * @param {string} name The name for the new interface, or null.
         * <!-- end-model-doc -->
         * @model required="true" ordered="false" nameDataType="types.String" nameRequired="true" nameOrdered="false"
         * @generated
         * @return {*}
         */
        createOwnedInterface(name : string) : uml.Interface;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Creates a primitive type with the specified name as an owned type of this package.
         * @param {string} name The name for the new primitive type, or null.
         * <!-- end-model-doc -->
         * @model required="true" ordered="false" nameDataType="types.String" nameRequired="true" nameOrdered="false"
         * @generated
         * @return {*}
         */
        createOwnedPrimitiveType(name : string) : uml.PrimitiveType;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Creates a(n) (abstract) stereotype with the specified name as an owned stereotype of this profile.
         * @param {string} name The name for the new stereotype, or null.
         * @param {boolean} isAbstract Whether the new stereotype should be abstract.
         * <!-- end-model-doc -->
         * @model required="true" ordered="false" nameDataType="types.String" nameRequired="true" nameOrdered="false" isAbstractDataType="types.Boolean" isAbstractRequired="true" isAbstractOrdered="false"
         * @generated
         * @return {*}
         */
        createOwnedStereotype(name : string, isAbstract : boolean) : uml.Stereotype;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Retrieves all the profiles that are applied to this package, including profiles applied to its nesting package(s).
         * <!-- end-model-doc -->
         * @model kind="operation" ordered="false"
         * @generated
         * @return {*}
         */
        getAllAppliedProfiles() : org.eclipse.emf.common.util.EList<uml.Profile>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Retrieves all the profile applications for this package, including profile applications for its nesting package(s).
         * <!-- end-model-doc -->
         * @model kind="operation" ordered="false"
         * @generated
         * @return {*}
         */
        getAllProfileApplications() : org.eclipse.emf.common.util.EList<uml.ProfileApplication>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Retrieves the profile with the specified qualified name that is applied to this package or any of its nesting packages (if indicated), or null if no such profile is applied.
         * @param {string} qualifiedName The qualified name of the applied profile to retrieve.
         * @param {boolean} recurse Whether to look in nesting packages.
         * <!-- end-model-doc -->
         * @model ordered="false" qualifiedNameDataType="types.String" qualifiedNameRequired="true" qualifiedNameOrdered="false" recurseDataType="types.Boolean" recurseRequired="true" recurseOrdered="false"
         * @generated
         * @return {*}
         */
        getAppliedProfile(qualifiedName? : any, recurse? : any) : any;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Retrieves the profiles that are applied to this package.
         * <!-- end-model-doc -->
         * @model kind="operation" ordered="false"
         * @generated
         * @return {*}
         */
        getAppliedProfiles() : org.eclipse.emf.common.util.EList<uml.Profile>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Retrieves the application of the specified profile to this package or any of its nesting packages (if indicated), or null if no such profile is applied.
         * @param {*} profile The profile whose application to retrieve.
         * @param {boolean} recurse Whether to look in nesting packages.
         * <!-- end-model-doc -->
         * @model ordered="false" profileRequired="true" profileOrdered="false" recurseDataType="types.Boolean" recurseRequired="true" recurseOrdered="false"
         * @generated
         * @return {*}
         */
        getProfileApplication(profile? : any, recurse? : any) : any;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Determines whether this package is a model library.
         * <!-- end-model-doc -->
         * @model kind="operation" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         * @return {boolean}
         */
        isModelLibrary() : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Determines whether the specified profile is applied to this package.
         * @param {*} profile The profile in question.
         * <!-- end-model-doc -->
         * @model dataType="types.Boolean" required="true" ordered="false" profileRequired="true" profileOrdered="false"
         * @generated
         * @return {boolean}
         */
        isProfileApplied(profile : uml.Profile) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Unapplies the specified profile from this package and automatically unapplies stereotypes in the profile from elements within this package's namespace hieararchy.
         * @param {*} profile The profile to unapply.
         * <!-- end-model-doc -->
         * @model ordered="false" profileRequired="true" profileOrdered="false"
         * @generated
         * @return {*}
         */
        unapplyProfile(profile : uml.Profile) : org.eclipse.emf.common.util.EList<org.eclipse.emf.ecore.EObject>;

        applyProfiles(profile? : any) : any;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The query allApplicableStereotypes() returns all the directly or indirectly owned stereotypes, including stereotypes contained in sub-profiles.
         * result = (let ownedPackages : Bag(Package) = ownedMember->select(oclIsKindOf(Package))->collect(oclAsType(Package)) in
         * ownedStereotype->union(ownedPackages.allApplicableStereotypes())->flatten()->asSet()
         * )
         * <p>From package UML::Packages.</p>
         * <!-- end-model-doc -->
         * @model ordered="false"
         * @generated
         * @return {*}
         */
        allApplicableStereotypes() : org.eclipse.emf.common.util.EList<uml.Stereotype>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The query containingProfile() returns the closest profile directly or indirectly containing this package (or this package itself, if it is a profile).
         * result = (if self.oclIsKindOf(Profile) then
         * self.oclAsType(Profile)
         * else
         * self.namespace.oclAsType(Package).containingProfile()
         * endif)
         * <p>From package UML::Packages.</p>
         * <!-- end-model-doc -->
         * @model ordered="false"
         * @generated
         * @return {*}
         */
        containingProfile() : uml.Profile;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The query makesVisible() defines whether a Package makes an element visible outside itself. Elements with no visibility and elements with public visibility are made visible.
         * member->includes(el)
         * result = (ownedMember->includes(el) or
         * (elementImport->select(ei|ei.importedElement = VisibilityKind::public)->collect(importedElement.oclAsType(NamedElement))->includes(el)) or
         * (packageImport->select(visibility = VisibilityKind::public)->collect(importedPackage.member->includes(el))->notEmpty()))
         * <p>From package UML::Packages.</p>
         * <!-- end-model-doc -->
         * @model dataType="types.Boolean" required="true" ordered="false" elRequired="true" elOrdered="false"
         * @generated
         * @param {*} el
         * @return {boolean}
         */
        makesVisible(el : uml.NamedElement) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The query visibleMembers() defines which members of a Package can be accessed outside it.
         * result = (member->select( m | m.oclIsKindOf(PackageableElement) and self.makesVisible(m))->collect(oclAsType(PackageableElement))->asSet())
         * <p>From package UML::Packages.</p>
         * <!-- end-model-doc -->
         * @model ordered="false"
         * @generated
         * @return {*}
         */
        visibleMembers() : org.eclipse.emf.common.util.EList<uml.PackageableElement>;
    }
}

