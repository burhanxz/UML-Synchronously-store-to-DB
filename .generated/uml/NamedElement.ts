/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Named Element</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A NamedElement is an Element in a model that may have a name. The name may be given directly and/or via the use of a StringExpression.
     * <p>From package UML::CommonStructure.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.NamedElement#getClientDependency}</li>
     * <li>{@link uml.NamedElement#getName}</li>
     * <li>{@link uml.NamedElement#getNameExpression}</li>
     * <li>{@link uml.NamedElement#getNamespace}</li>
     * <li>{@link uml.NamedElement#getQualifiedName}</li>
     * <li>{@link uml.NamedElement#getVisibility}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getNamedElement()
     * @model abstract="true"
     * @generated
     * @class
     */
    export interface NamedElement extends uml.Element {
        /**
         * Returns the value of the '<em><b>Client Dependency</b></em>' reference list.
         * The list contents are of type {@link uml.Dependency}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Indicates the Dependencies that reference this NamedElement as a client.
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Client Dependency</em>' reference list.
         * @see uml.UmlPackage#getNamedElement_ClientDependency()
         * @model transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getClientDependency() : org.eclipse.emf.common.util.EList<uml.Dependency>;

        /**
         * Returns the value of the '<em><b>Name</b></em>' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The name of the NamedElement.
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @return {string} the value of the '<em>Name</em>' attribute.
         * @see #isSetName()
         * @see #unsetName()
         * @see #setName(String)
         * @see uml.UmlPackage#getNamedElement_Name()
         * @model unsettable="true" dataType="types.String" ordered="false"
         * @generated
         */
        getName() : string;

        /**
         * Sets the value of the '{@link uml.NamedElement#getName}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {string} value the new value of the '<em>Name</em>' attribute.
         * @see #isSetName()
         * @see #unsetName()
         * @see #getName()
         * @generated
         */
        setName(value : string);

        /**
         * Unsets the value of the '{@link uml.NamedElement#getName}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #isSetName()
         * @see #getName()
         * @see #setName(String)
         * @generated
         */
        unsetName();

        /**
         * Returns whether the value of the '{@link uml.NamedElement#getName}' attribute is set.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {boolean} whether the value of the '<em>Name</em>' attribute is set.
         * @see #unsetName()
         * @see #getName()
         * @see #setName(String)
         * @generated
         */
        isSetName() : boolean;

        /**
         * Returns the value of the '<em><b>Name Expression</b></em>' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The StringExpression used to define the name of this NamedElement.
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Name Expression</em>' containment reference.
         * @see #setNameExpression(StringExpression)
         * @see uml.UmlPackage#getNamedElement_NameExpression()
         * @model containment="true" ordered="false"
         * @generated
         */
        getNameExpression() : uml.StringExpression;

        /**
         * Sets the value of the '{@link uml.NamedElement#getNameExpression}' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Name Expression</em>' containment reference.
         * @see #getNameExpression()
         * @generated
         */
        setNameExpression(value : uml.StringExpression);

        /**
         * Returns the value of the '<em><b>Namespace</b></em>' reference.
         * It is bidirectional and its opposite is '{@link uml.Namespace#getOwnedMember}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Specifies the Namespace that owns the NamedElement.
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Namespace</em>' reference.
         * @see uml.UmlPackage#getNamedElement_Namespace()
         * @see uml.Namespace#getOwnedMember
         * @model opposite="ownedMember" transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getNamespace() : uml.Namespace;

        /**
         * Returns the value of the '<em><b>Qualified Name</b></em>' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A name that allows the NamedElement to be identified within a hierarchy of nested Namespaces. It is constructed from the names of the containing Namespaces starting at the root of the hierarchy and ending with the name of the NamedElement itself.
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @return {string} the value of the '<em>Qualified Name</em>' attribute.
         * @see uml.UmlPackage#getNamedElement_QualifiedName()
         * @model dataType="types.String" transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getQualifiedName() : string;

        /**
         * Returns the value of the '<em><b>Visibility</b></em>' attribute.
         * The literals are from the enumeration {@link uml.VisibilityKind}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Determines whether and how the NamedElement is visible outside its owning Namespace.
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @return {uml.VisibilityKind} the value of the '<em>Visibility</em>' attribute.
         * @see uml.VisibilityKind
         * @see #isSetVisibility()
         * @see #unsetVisibility()
         * @see #setVisibility(VisibilityKind)
         * @see uml.UmlPackage#getNamedElement_Visibility()
         * @model unsettable="true" ordered="false"
         * @generated
         */
        getVisibility() : uml.VisibilityKind;

        /**
         * Sets the value of the '{@link uml.NamedElement#getVisibility}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {uml.VisibilityKind} value the new value of the '<em>Visibility</em>' attribute.
         * @see uml.VisibilityKind
         * @see #isSetVisibility()
         * @see #unsetVisibility()
         * @see #getVisibility()
         * @generated
         */
        setVisibility(value : uml.VisibilityKind);

        /**
         * Unsets the value of the '{@link uml.NamedElement#getVisibility}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #isSetVisibility()
         * @see #getVisibility()
         * @see #setVisibility(VisibilityKind)
         * @generated
         */
        unsetVisibility();

        /**
         * Returns whether the value of the '{@link uml.NamedElement#getVisibility}' attribute is set.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {boolean} whether the value of the '<em>Visibility</em>' attribute is set.
         * @see #unsetVisibility()
         * @see #getVisibility()
         * @see #setVisibility(VisibilityKind)
         * @generated
         */
        isSetVisibility() : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If a NamedElement is owned by something other than a Namespace, it does not have a visibility. One that is not owned by anything (and hence must be a Package, as this is the only kind of NamedElement that overrides mustBeOwned()) may have a visibility.
         * (namespace = null and owner <> null) implies visibility = null
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        visibility_needs_ownership(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * When there is a name, and all of the containing Namespaces have a name, the qualifiedName is constructed from the name of the NamedElement and the names of the containing Namespaces.
         * (name <> null and allNamespaces()->select(ns | ns.name = null)->isEmpty()) implies
         * qualifiedName = allNamespaces()->iterate( ns : Namespace; agg: String = name | ns.name.concat(self.separator()).concat(agg))
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        has_qualified_name(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If there is no name, or one of the containing Namespaces has no name, there is no qualifiedName.
         * name=null or allNamespaces()->select( ns | ns.name=null )->notEmpty() implies qualifiedName = null
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        has_no_qualified_name(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Creates a dependency between this named element and the specified supplier, owned by this named element's nearest package.
         * @param {*} supplier The supplier for the new dependency.
         * <!-- end-model-doc -->
         * @model required="true" ordered="false" supplierRequired="true" supplierOrdered="false"
         * @generated
         * @return {*}
         */
        createDependency(supplier : NamedElement) : uml.Dependency;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Creates a usage between this named element and the specified supplier, owned by this named element's nearest package.
         * @param {*} supplier The supplier for the new usage.
         * <!-- end-model-doc -->
         * @model required="true" ordered="false" supplierRequired="true" supplierOrdered="false"
         * @generated
         * @return {*}
         */
        createUsage(supplier : NamedElement) : uml.Usage;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Retrieves a label for this named element, localized if indicated.
         * @param {boolean} localize Whether to localize the label.
         * <!-- end-model-doc -->
         * @model dataType="types.String" ordered="false" localizeDataType="types.Boolean" localizeRequired="true" localizeOrdered="false"
         * @generated
         * @return {string}
         */
        getLabel(localize? : any) : any;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The query allNamespaces() gives the sequence of Namespaces in which the NamedElement is nested, working outwards.
         * result = (
         * if owner = null
         * then OrderedSet{}
         * else
         * let enclosingNamespace : Namespace =
         * if owner.oclIsKindOf(TemplateParameter) and owner.oclAsType(TemplateParameter).signature.template.oclIsKindOf(Namespace)
         * then owner.oclAsType(TemplateParameter).signature.template.oclAsType(Namespace)
         * else
         * namespace
         * endif
         * in enclosingNamespace.allNamespaces()->prepend(enclosingNamespace)
         * endif)
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {*}
         */
        allNamespaces() : org.eclipse.emf.common.util.EList<uml.Namespace>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The query allOwningPackages() returns the set of all the enclosing Namespaces of this NamedElement, working outwards, that are Packages, up to but not including the first such Namespace that is not a Package.
         * result = (if namespace.oclIsKindOf(Package)
         * then
         * let owningPackage : Package = namespace.oclAsType(Package) in
         * owningPackage->union(owningPackage.allOwningPackages())
         * else
         * null
         * endif)
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @model ordered="false"
         * @generated
         * @return {*}
         */
        allOwningPackages() : org.eclipse.emf.common.util.EList<uml.Package>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The query isDistinguishableFrom() determines whether two NamedElements may logically co-exist within a Namespace. By default, two named elements are distinguishable if (a) they have types neither of which is a kind of the other or (b) they have different names.
         * result = ((self.oclIsKindOf(n.oclType()) or n.oclIsKindOf(self.oclType())) implies
         * ns.getNamesOfMember(self)->intersection(ns.getNamesOfMember(n))->isEmpty()
         * )
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @model dataType="types.Boolean" required="true" ordered="false" nRequired="true" nOrdered="false" nsRequired="true" nsOrdered="false"
         * @generated
         * @param {*} n
         * @param {*} ns
         * @return {boolean}
         */
        isDistinguishableFrom(n : NamedElement, ns : uml.Namespace) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The query separator() gives the string that is used to separate names when constructing a qualifiedName.
         * result = ('::')
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @model dataType="types.String" required="true" ordered="false"
         * @generated
         * @return {string}
         */
        separator() : string;
    }
}

