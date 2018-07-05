/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Property</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A Property is a StructuralFeature. A Property related by ownedAttribute to a Classifier (other than an association) represents an attribute and might also represent an association end. It relates an instance of the Classifier to a value or set of values of the type of the attribute. A Property related by memberEnd to an Association represents an end of the Association. The type of the Property is the type of the end of the Association. A Property has the capability of being a DeploymentTarget in a Deployment relationship. This enables modeling the deployment to hierarchical nodes that have Properties functioning as internal parts.  Property specializes ParameterableElement to specify that a Property can be exposed as a formal template parameter, and provided as an actual parameter in a binding of a template.
     * <p>From package UML::Classification.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.Property#getDatatype}</li>
     * <li>{@link uml.Property#getInterface}</li>
     * <li>{@link uml.Property#getAggregation}</li>
     * <li>{@link uml.Property#getAssociationEnd}</li>
     * <li>{@link uml.Property#getQualifier}</li>
     * <li>{@link uml.Property#getClass_}</li>
     * <li>{@link uml.Property#getDefaultValue}</li>
     * <li>{@link uml.Property#isIsComposite}</li>
     * <li>{@link uml.Property#isIsDerived}</li>
     * <li>{@link uml.Property#isIsDerivedUnion}</li>
     * <li>{@link uml.Property#isIsID}</li>
     * <li>{@link uml.Property#getOpposite}</li>
     * <li>{@link uml.Property#getOwningAssociation}</li>
     * <li>{@link uml.Property#getRedefinedProperty}</li>
     * <li>{@link uml.Property#getSubsettedProperty}</li>
     * <li>{@link uml.Property#getAssociation}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getProperty()
     * @model features="default"
     * defaultUnsettable="true" defaultDataType="types.String" defaultTransient="true" defaultVolatile="true" defaultDerived="true" defaultOrdered="false" defaultSuppressedGetVisibility="true" defaultSuppressedSetVisibility="true" defaultSuppressedIsSetVisibility="true" defaultSuppressedUnsetVisibility="true"
     * @generated
     * @class
     */
    export interface Property extends uml.StructuralFeature, uml.ConnectableElement, uml.DeploymentTarget {
        /**
         * Returns the value of the '<em><b>Datatype</b></em>' container reference.
         * It is bidirectional and its opposite is '{@link uml.DataType#getOwnedAttribute}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The DataType that owns this Property, if any.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Datatype</em>' container reference.
         * @see #setDatatype(DataType)
         * @see uml.UmlPackage#getProperty_Datatype()
         * @see uml.DataType#getOwnedAttribute
         * @model opposite="ownedAttribute" transient="false" ordered="false"
         * @generated
         */
        getDatatype() : uml.DataType;

        /**
         * Sets the value of the '{@link uml.Property#getDatatype}' container reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Datatype</em>' container reference.
         * @see #getDatatype()
         * @generated
         */
        setDatatype(value : uml.DataType);

        /**
         * Returns the value of the '<em><b>Interface</b></em>' container reference.
         * It is bidirectional and its opposite is '{@link uml.Interface#getOwnedAttribute}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Interface that owns this Property, if any.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Interface</em>' container reference.
         * @see #setInterface(Interface)
         * @see uml.UmlPackage#getProperty_Interface()
         * @see uml.Interface#getOwnedAttribute
         * @model opposite="ownedAttribute" transient="false" ordered="false"
         * @generated
         */
        getInterface() : uml.Interface;

        /**
         * Sets the value of the '{@link uml.Property#getInterface}' container reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Interface</em>' container reference.
         * @see #getInterface()
         * @generated
         */
        setInterface(value : uml.Interface);

        /**
         * Returns the value of the '<em><b>Aggregation</b></em>' attribute.
         * The default value is <code>"none"</code>.
         * The literals are from the enumeration {@link uml.AggregationKind}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Specifies the kind of aggregation that applies to the Property.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {uml.AggregationKind} the value of the '<em>Aggregation</em>' attribute.
         * @see uml.AggregationKind
         * @see #setAggregation(AggregationKind)
         * @see uml.UmlPackage#getProperty_Aggregation()
         * @model default="none" required="true" ordered="false"
         * @generated
         */
        getAggregation() : uml.AggregationKind;

        /**
         * Sets the value of the '{@link uml.Property#getAggregation}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {uml.AggregationKind} value the new value of the '<em>Aggregation</em>' attribute.
         * @see uml.AggregationKind
         * @see #getAggregation()
         * @generated
         */
        setAggregation(value : uml.AggregationKind);

        /**
         * Returns the value of the '<em><b>Association End</b></em>' container reference.
         * It is bidirectional and its opposite is '{@link uml.Property#getQualifier}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Designates the optional association end that owns a qualifier attribute.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Association End</em>' container reference.
         * @see #setAssociationEnd(Property)
         * @see uml.UmlPackage#getProperty_AssociationEnd()
         * @see uml.Property#getQualifier
         * @model opposite="qualifier" transient="false" ordered="false"
         * @generated
         */
        getAssociationEnd() : Property;

        /**
         * Sets the value of the '{@link uml.Property#getAssociationEnd}' container reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Association End</em>' container reference.
         * @see #getAssociationEnd()
         * @generated
         */
        setAssociationEnd(value : Property);

        /**
         * Returns the value of the '<em><b>Qualifier</b></em>' containment reference list.
         * The list contents are of type {@link uml.Property}.
         * It is bidirectional and its opposite is '{@link uml.Property#getAssociationEnd}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * An optional list of ordered qualifier attributes for the end.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Qualifier</em>' containment reference list.
         * @see uml.UmlPackage#getProperty_Qualifier()
         * @see uml.Property#getAssociationEnd
         * @model opposite="associationEnd" containment="true"
         * @generated
         */
        getQualifier() : org.eclipse.emf.common.util.EList<Property>;

        /**
         * Returns the value of the '<em><b>Class</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Class that owns this Property, if any.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Class</em>' reference.
         * @see uml.UmlPackage#getProperty_Class()
         * @model transient="true" changeable="false" volatile="true" ordered="false"
         * @generated
         */
        getClass_() : uml.Class;

        /**
         * Returns the value of the '<em><b>Default Value</b></em>' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A ValueSpecification that is evaluated to give a default value for the Property when an instance of the owning Classifier is instantiated.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Default Value</em>' containment reference.
         * @see #setDefaultValue(ValueSpecification)
         * @see uml.UmlPackage#getProperty_DefaultValue()
         * @model containment="true" ordered="false"
         * @generated
         */
        getDefaultValue() : uml.ValueSpecification;

        /**
         * Sets the value of the '{@link uml.Property#getDefaultValue}' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Default Value</em>' containment reference.
         * @see #getDefaultValue()
         * @generated
         */
        setDefaultValue(value : uml.ValueSpecification);

        /**
         * Returns the value of the '<em><b>Is Composite</b></em>' attribute.
         * The default value is <code>"false"</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If isComposite is true, the object containing the attribute is a container for the object or value contained in the attribute. This is a derived value, indicating whether the aggregation of the Property is composite or not.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {boolean} the value of the '<em>Is Composite</em>' attribute.
         * @see #setIsComposite(boolean)
         * @see uml.UmlPackage#getProperty_IsComposite()
         * @model default="false" dataType="types.Boolean" required="true" transient="true" volatile="true" derived="true" ordered="false"
         * @generated
         */
        isIsComposite() : boolean;

        /**
         * Sets the value of the '{@link uml.Property#isIsComposite}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {boolean} value the new value of the '<em>Is Composite</em>' attribute.
         * @see #isIsComposite()
         * @generated
         */
        setIsComposite(value : boolean);

        /**
         * Returns the value of the '<em><b>Is Derived</b></em>' attribute.
         * The default value is <code>"false"</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Specifies whether the Property is derived, i.e., whether its value or values can be computed from other information.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {boolean} the value of the '<em>Is Derived</em>' attribute.
         * @see #setIsDerived(boolean)
         * @see uml.UmlPackage#getProperty_IsDerived()
         * @model default="false" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         */
        isIsDerived() : boolean;

        /**
         * Sets the value of the '{@link uml.Property#isIsDerived}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {boolean} value the new value of the '<em>Is Derived</em>' attribute.
         * @see #isIsDerived()
         * @generated
         */
        setIsDerived(value : boolean);

        /**
         * Returns the value of the '<em><b>Is Derived Union</b></em>' attribute.
         * The default value is <code>"false"</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Specifies whether the property is derived as the union of all of the Properties that are constrained to subset it.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {boolean} the value of the '<em>Is Derived Union</em>' attribute.
         * @see #setIsDerivedUnion(boolean)
         * @see uml.UmlPackage#getProperty_IsDerivedUnion()
         * @model default="false" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         */
        isIsDerivedUnion() : boolean;

        /**
         * Sets the value of the '{@link uml.Property#isIsDerivedUnion}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {boolean} value the new value of the '<em>Is Derived Union</em>' attribute.
         * @see #isIsDerivedUnion()
         * @generated
         */
        setIsDerivedUnion(value : boolean);

        /**
         * Returns the value of the '<em><b>Is ID</b></em>' attribute.
         * The default value is <code>"false"</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * True indicates this property can be used to uniquely identify an instance of the containing Class.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {boolean} the value of the '<em>Is ID</em>' attribute.
         * @see #setIsID(boolean)
         * @see uml.UmlPackage#getProperty_IsID()
         * @model default="false" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         */
        isIsID() : boolean;

        /**
         * Sets the value of the '{@link uml.Property#isIsID}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {boolean} value the new value of the '<em>Is ID</em>' attribute.
         * @see #isIsID()
         * @generated
         */
        setIsID(value : boolean);

        /**
         * Returns the value of the '<em><b>Opposite</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * In the case where the Property is one end of a binary association this gives the other end.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Opposite</em>' reference.
         * @see #setOpposite(Property)
         * @see uml.UmlPackage#getProperty_Opposite()
         * @model transient="true" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getOpposite() : Property;

        /**
         * Sets the value of the '{@link uml.Property#getOpposite}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Opposite</em>' reference.
         * @see #getOpposite()
         * @generated
         */
        setOpposite(value : Property);

        /**
         * Returns the value of the '<em><b>Owning Association</b></em>' container reference.
         * It is bidirectional and its opposite is '{@link uml.Association#getOwnedEnd}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The owning association of this property, if any.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Owning Association</em>' container reference.
         * @see #setOwningAssociation(Association)
         * @see uml.UmlPackage#getProperty_OwningAssociation()
         * @see uml.Association#getOwnedEnd
         * @model opposite="ownedEnd" transient="false" ordered="false"
         * @generated
         */
        getOwningAssociation() : uml.Association;

        /**
         * Sets the value of the '{@link uml.Property#getOwningAssociation}' container reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Owning Association</em>' container reference.
         * @see #getOwningAssociation()
         * @generated
         */
        setOwningAssociation(value : uml.Association);

        /**
         * Returns the value of the '<em><b>Redefined Property</b></em>' reference list.
         * The list contents are of type {@link uml.Property}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The properties that are redefined by this property, if any.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Redefined Property</em>' reference list.
         * @see uml.UmlPackage#getProperty_RedefinedProperty()
         * @model ordered="false"
         * @generated
         */
        getRedefinedProperty() : org.eclipse.emf.common.util.EList<Property>;

        /**
         * Returns the value of the '<em><b>Subsetted Property</b></em>' reference list.
         * The list contents are of type {@link uml.Property}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The properties of which this Property is constrained to be a subset, if any.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Subsetted Property</em>' reference list.
         * @see uml.UmlPackage#getProperty_SubsettedProperty()
         * @model ordered="false"
         * @generated
         */
        getSubsettedProperty() : org.eclipse.emf.common.util.EList<Property>;

        /**
         * Returns the value of the '<em><b>Association</b></em>' reference.
         * It is bidirectional and its opposite is '{@link uml.Association#getMemberEnd}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Association of which this Property is a member, if any.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Association</em>' reference.
         * @see #setAssociation(Association)
         * @see uml.UmlPackage#getProperty_Association()
         * @see uml.Association#getMemberEnd
         * @model opposite="memberEnd" ordered="false"
         * @generated
         */
        getAssociation() : uml.Association;

        /**
         * Sets the value of the '{@link uml.Property#getAssociation}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Association</em>' reference.
         * @see #getAssociation()
         * @generated
         */
        setAssociation(value : uml.Association);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Subsetting may only occur when the context of the subsetting property conforms to the context of the subsetted property.
         * subsettedProperty->notEmpty() implies
         * (subsettingContext()->notEmpty() and subsettingContext()->forAll (sc |
         * subsettedProperty->forAll(sp |
         * sp.subsettingContext()->exists(c | sc.conformsTo(c)))))
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        subsetting_context_conforms(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A derived union is read only.
         * isDerivedUnion implies isReadOnly
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        derived_union_is_read_only(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A multiplicity on the composing end of a composite aggregation must not have an upper bound greater than 1.
         * isComposite and association <> null implies opposite.upperBound() <= 1
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        multiplicity_of_composite(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A redefined Property must be inherited from a more general Classifier.
         * (redefinedProperty->notEmpty()) implies
         * (redefinitionContext->notEmpty() and
         * redefinedProperty->forAll(rp|
         * ((redefinitionContext->collect(fc|
         * fc.allParents()))->asSet())->collect(c| c.allFeatures())->asSet()->includes(rp)))
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        redefined_property_inherited(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A subsetting Property may strengthen the type of the subsetted Property, and its upper bound may be less.
         * subsettedProperty->forAll(sp |
         * self.type.conformsTo(sp.type) and
         * ((self.upperBound()->notEmpty() and sp.upperBound()->notEmpty()) implies
         * self.upperBound() <= sp.upperBound() ))
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        subsetting_rules(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A binding of a PropertyTemplateParameter representing an attribute must be to an attribute.
         * (self.isAttribute()
         * and (templateParameterSubstitution->notEmpty())
         * implies (templateParameterSubstitution->forAll(ts |
         * ts.formal.oclIsKindOf(Property)
         * and ts.formal.oclAsType(Property).isAttribute())))
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        binding_to_attribute(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A derived union is derived.
         * isDerivedUnion implies isDerived
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        derived_union_is_derived(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A Property can be a DeploymentTarget if it is a kind of Node and functions as a part in the internal structure of an encompassing Node.
         * deployment->notEmpty() implies owner.oclIsKindOf(Node) and Node.allInstances()->exists(n | n.part->exists(p | p = self))
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        deployment_target(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A Property may not subset a Property with the same name.
         * subsettedProperty->forAll(sp | sp.name <> name)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        subsetted_property_names(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If a Property is a classifier-owned end of a binary Association, its owner must be the type of the opposite end.
         * (opposite->notEmpty() and owningAssociation->isEmpty()) implies classifier = opposite.type
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        type_of_opposite_end(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * All qualified Properties must be Association ends
         * qualifier->notEmpty() implies association->notEmpty()
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        qualified_is_association_end(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Retrieves a string representation of the default value for this property.
         * <!-- end-model-doc -->
         * @model kind="operation" dataType="types.String" ordered="false"
         * @generated
         * @return {string}
         */
        getDefault() : string;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Retrieves the other end of the (binary) association in which this property is a member end.
         * <!-- end-model-doc -->
         * @model kind="operation" ordered="false"
         * @generated
         * @return {*}
         */
        getOtherEnd() : Property;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Sets the default value for this property to the specified Boolean value.
         * @param {boolean} value The new default value.
         * <!-- end-model-doc -->
         * @model valueDataType="types.Boolean" valueRequired="true" valueOrdered="false"
         * @generated
         */
        setBooleanDefaultValue(value : boolean);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Sets the default value for this property based on the specified string representation.
         * @param {string} newDefault A string repesentation of the new default value.
         * <!-- end-model-doc -->
         * @model newDefaultDataType="types.String" newDefaultRequired="true" newDefaultOrdered="false"
         * @generated
         */
        setDefault(newDefault : string);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Sets the default value for this property to the specified integer value.
         * @param {number} value The new default value.
         * <!-- end-model-doc -->
         * @model valueDataType="types.Integer" valueRequired="true" valueOrdered="false"
         * @generated
         */
        setIntegerDefaultValue(value : number);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Sets the navigability of this property as indicated.
         * @param {boolean} isNavigable The new navigability.
         * <!-- end-model-doc -->
         * @model isNavigableDataType="types.Boolean" isNavigableRequired="true" isNavigableOrdered="false"
         * @generated
         */
        setIsNavigable(isNavigable : boolean);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Sets the default value for this property to the null value.
         * <!-- end-model-doc -->
         * @model
         * @generated
         */
        setNullDefaultValue();

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Sets the default value for this property to the specified real value.
         * @param {number} value The new default value.
         * <!-- end-model-doc -->
         * @model valueDataType="types.Real" valueRequired="true" valueOrdered="false"
         * @generated
         */
        setRealDefaultValue(value : number);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Sets the default value for this property to the specified string value.
         * @param {string} value The new default value.
         * <!-- end-model-doc -->
         * @model valueDataType="types.String" valueRequired="true" valueOrdered="false"
         * @generated
         */
        setStringDefaultValue(value : string);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Sets the default value for this property to the specified unlimited natural value.
         * @param {number} value The new default value.
         * <!-- end-model-doc -->
         * @model valueDataType="types.UnlimitedNatural" valueRequired="true" valueOrdered="false"
         * @generated
         */
        setUnlimitedNaturalDefaultValue(value : number);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The query isAttribute() is true if the Property is defined as an attribute of some Classifier.
         * result = (not classifier->isEmpty())
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @model kind="operation" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         * @return {boolean}
         */
        isAttribute() : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The value of isComposite is true only if aggregation is composite.
         * result = (aggregation = AggregationKind::composite)
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @model kind="operation" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         * @return {boolean}
         */
        isComposite() : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The query isNavigable() indicates whether it is possible to navigate across the property.
         * result = (not classifier->isEmpty() or association.navigableOwnedEnd->includes(self))
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @model kind="operation" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         * @return {boolean}
         */
        isNavigable() : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The query subsettingContext() gives the context for subsetting a Property. It consists, in the case of an attribute, of the corresponding Classifier, and in the case of an association end, all of the Classifiers at the other ends.
         * result = (if association <> null
         * then association.memberEnd->excluding(self)->collect(type)->asSet()
         * else
         * if classifier<>null
         * then classifier->asSet()
         * else Set{}
         * endif
         * endif)
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @model ordered="false"
         * @generated
         * @return {*}
         */
        subsettingContext() : org.eclipse.emf.common.util.EList<uml.Type>;
    }
}

