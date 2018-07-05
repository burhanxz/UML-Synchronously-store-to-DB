/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Namespace</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A Namespace is an Element in a model that owns and/or imports a set of NamedElements that can be identified by name.
     * <p>From package UML::CommonStructure.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.Namespace#getOwnedRule}</li>
     * <li>{@link uml.Namespace#getElementImport}</li>
     * <li>{@link uml.Namespace#getPackageImport}</li>
     * <li>{@link uml.Namespace#getOwnedMember}</li>
     * <li>{@link uml.Namespace#getImportedMember}</li>
     * <li>{@link uml.Namespace#getMember}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getNamespace()
     * @model abstract="true"
     * @generated
     * @class
     */
    export interface Namespace extends uml.NamedElement {
        /**
         * Returns the value of the '<em><b>Owned Rule</b></em>' containment reference list.
         * The list contents are of type {@link uml.Constraint}.
         * It is bidirectional and its opposite is '{@link uml.Constraint#getContext}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Specifies a set of Constraints owned by this Namespace.
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Owned Rule</em>' containment reference list.
         * @see uml.UmlPackage#getNamespace_OwnedRule()
         * @see uml.Constraint#getContext
         * @model opposite="context" containment="true" ordered="false"
         * @generated
         */
        getOwnedRule() : org.eclipse.emf.common.util.EList<uml.Constraint>;

        /**
         * Returns the value of the '<em><b>Element Import</b></em>' containment reference list.
         * The list contents are of type {@link uml.ElementImport}.
         * It is bidirectional and its opposite is '{@link uml.ElementImport#getImportingNamespace}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * References the ElementImports owned by the Namespace.
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Element Import</em>' containment reference list.
         * @see uml.UmlPackage#getNamespace_ElementImport()
         * @see uml.ElementImport#getImportingNamespace
         * @model opposite="importingNamespace" containment="true" ordered="false"
         * @generated
         */
        getElementImport() : org.eclipse.emf.common.util.EList<uml.ElementImport>;

        /**
         * Returns the value of the '<em><b>Package Import</b></em>' containment reference list.
         * The list contents are of type {@link uml.PackageImport}.
         * It is bidirectional and its opposite is '{@link uml.PackageImport#getImportingNamespace}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * References the PackageImports owned by the Namespace.
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Package Import</em>' containment reference list.
         * @see uml.UmlPackage#getNamespace_PackageImport()
         * @see uml.PackageImport#getImportingNamespace
         * @model opposite="importingNamespace" containment="true" ordered="false"
         * @generated
         */
        getPackageImport() : org.eclipse.emf.common.util.EList<uml.PackageImport>;

        /**
         * Returns the value of the '<em><b>Owned Member</b></em>' reference list.
         * The list contents are of type {@link uml.NamedElement}.
         * It is bidirectional and its opposite is '{@link uml.NamedElement#getNamespace}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A collection of NamedElements owned by the Namespace.
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Owned Member</em>' reference list.
         * @see uml.UmlPackage#getNamespace_OwnedMember()
         * @see uml.NamedElement#getNamespace
         * @model opposite="namespace" transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getOwnedMember() : org.eclipse.emf.common.util.EList<uml.NamedElement>;

        /**
         * Returns the value of the '<em><b>Imported Member</b></em>' reference list.
         * The list contents are of type {@link uml.PackageableElement}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * References the PackageableElements that are members of this Namespace as a result of either PackageImports or ElementImports.
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Imported Member</em>' reference list.
         * @see uml.UmlPackage#getNamespace_ImportedMember()
         * @model transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getImportedMember() : org.eclipse.emf.common.util.EList<uml.PackageableElement>;

        /**
         * Returns the value of the '<em><b>Member</b></em>' reference list.
         * The list contents are of type {@link uml.NamedElement}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A collection of NamedElements identifiable within the Namespace, either by being owned or by being introduced by importing or inheritance.
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Member</em>' reference list.
         * @see uml.UmlPackage#getNamespace_Member()
         * @model transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getMember() : org.eclipse.emf.common.util.EList<uml.NamedElement>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * All the members of a Namespace are distinguishable within it.
         * membersAreDistinguishable()
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        members_distinguishable(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A Namespace cannot have a PackageImport to itself.
         * packageImport.importedPackage.oclAsType(Namespace)->excludes(self)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        cannot_import_self(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A Namespace cannot have an ElementImport to one of its ownedMembers.
         * elementImport.importedElement.oclAsType(Element)->excludesAll(ownedMember)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        cannot_import_ownedMembers(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Creates an import of the specified element into this namespace with the specified visibility.
         * @param {*} element The element to import.
         * @param {uml.VisibilityKind} visibility The visibility for the new element import.
         * <!-- end-model-doc -->
         * @model required="true" ordered="false" elementRequired="true" elementOrdered="false" visibilityRequired="true" visibilityOrdered="false"
         * @generated
         * @return {*}
         */
        createElementImport(element : uml.PackageableElement, visibility : uml.VisibilityKind) : uml.ElementImport;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Creates an import of the specified package into this namespace with the specified visibility.
         * @param {*} package_ The package to import.
         * @param {uml.VisibilityKind} visibility The visibility for the new package import.
         * <!-- end-model-doc -->
         * @model required="true" ordered="false" package_Required="true" package_Ordered="false" visibilityRequired="true" visibilityOrdered="false"
         * @generated
         * @return {*}
         */
        createPackageImport(package_ : uml.Package, visibility : uml.VisibilityKind) : uml.PackageImport;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Retrieves the elements imported by this namespace.
         * <!-- end-model-doc -->
         * @model kind="operation" ordered="false"
         * @generated
         * @return {*}
         */
        getImportedElements() : org.eclipse.emf.common.util.EList<uml.PackageableElement>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Retrieves the packages imported by this namespace.
         * <!-- end-model-doc -->
         * @model kind="operation" ordered="false"
         * @generated
         * @return {*}
         */
        getImportedPackages() : org.eclipse.emf.common.util.EList<uml.Package>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The query excludeCollisions() excludes from a set of PackageableElements any that would not be distinguishable from each other in this Namespace.
         * result = (imps->reject(imp1  | imps->exists(imp2 | not imp1.isDistinguishableFrom(imp2, self))))
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @model ordered="false" impsMany="true" impsOrdered="false"
         * @generated
         * @param {*} imps
         * @return {*}
         */
        excludeCollisions(imps : org.eclipse.emf.common.util.EList<uml.PackageableElement>) : org.eclipse.emf.common.util.EList<uml.PackageableElement>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The query getNamesOfMember() gives a set of all of the names that a member would have in a Namespace, taking importing into account. In general a member can have multiple names in a Namespace if it is imported more than once with different aliases.
         * result = (if self.ownedMember ->includes(element)
         * then Set{element.name}
         * else let elementImports : Set(ElementImport) = self.elementImport->select(ei | ei.importedElement = element) in
         * if elementImports->notEmpty()
         * then
         * elementImports->collect(el | el.getName())->asSet()
         * else
         * self.packageImport->select(pi | pi.importedPackage.visibleMembers().oclAsType(NamedElement)->includes(element))-> collect(pi | pi.importedPackage.getNamesOfMember(element))->asSet()
         * endif
         * endif)
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @model dataType="types.String" ordered="false" elementRequired="true" elementOrdered="false"
         * @generated
         * @param {*} element
         * @return {*}
         */
        getNamesOfMember(element : uml.NamedElement) : org.eclipse.emf.common.util.EList<string>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The query importMembers() defines which of a set of PackageableElements are actually imported into the Namespace. This excludes hidden ones, i.e., those which have names that conflict with names of ownedMembers, and it also excludes PackageableElements that would have the indistinguishable names when imported.
         * result = (self.excludeCollisions(imps)->select(imp | self.ownedMember->forAll(mem | imp.isDistinguishableFrom(mem, self))))
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @model ordered="false" impsMany="true" impsOrdered="false"
         * @generated
         * @param {*} imps
         * @return {*}
         */
        importMembers(imps : org.eclipse.emf.common.util.EList<uml.PackageableElement>) : org.eclipse.emf.common.util.EList<uml.PackageableElement>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Boolean query membersAreDistinguishable() determines whether all of the Namespace's members are distinguishable within it.
         * result = (member->forAll( memb |
         * member->excluding(memb)->forAll(other |
         * memb.isDistinguishableFrom(other, self))))
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @model dataType="types.Boolean" required="true" ordered="false"
         * @generated
         * @return {boolean}
         */
        membersAreDistinguishable() : boolean;
    }
}

