/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Classifier</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A Classifier represents a classification of instances according to their Features.
     * <p>From package UML::Classification.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.Classifier#getFeature}</li>
     * <li>{@link uml.Classifier#getAttribute}</li>
     * <li>{@link uml.Classifier#getCollaborationUse}</li>
     * <li>{@link uml.Classifier#getGeneral}</li>
     * <li>{@link uml.Classifier#getGeneralization}</li>
     * <li>{@link uml.Classifier#getPowertypeExtent}</li>
     * <li>{@link uml.Classifier#getInheritedMember}</li>
     * <li>{@link uml.Classifier#isIsAbstract}</li>
     * <li>{@link uml.Classifier#isIsFinalSpecialization}</li>
     * <li>{@link uml.Classifier#getOwnedUseCase}</li>
     * <li>{@link uml.Classifier#getUseCase}</li>
     * <li>{@link uml.Classifier#getRedefinedClassifier}</li>
     * <li>{@link uml.Classifier#getRepresentation}</li>
     * <li>{@link uml.Classifier#getSubstitution}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getClassifier()
     * @model abstract="true"
     * @generated
     * @class
     */
    export interface Classifier extends uml.Namespace, uml.RedefinableElement, uml.Type, uml.TemplateableElement {
        /**
         * Returns the value of the '<em><b>Feature</b></em>' reference list.
         * The list contents are of type {@link uml.Feature}.
         * It is bidirectional and its opposite is '{@link uml.Feature#getFeaturingClassifier}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Specifies each Feature directly defined in the classifier. Note that there may be members of the Classifier that are of the type Feature but are not included, e.g., inherited features.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Feature</em>' reference list.
         * @see uml.UmlPackage#getClassifier_Feature()
         * @see uml.Feature#getFeaturingClassifier
         * @model opposite="featuringClassifier" transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getFeature() : org.eclipse.emf.common.util.EList<uml.Feature>;

        /**
         * Returns the value of the '<em><b>Attribute</b></em>' reference list.
         * The list contents are of type {@link uml.Property}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * All of the Properties that are direct (i.e., not inherited or imported) attributes of the Classifier.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Attribute</em>' reference list.
         * @see uml.UmlPackage#getClassifier_Attribute()
         * @model transient="true" changeable="false" volatile="true" derived="true"
         * @generated
         */
        getAttribute() : org.eclipse.emf.common.util.EList<uml.Property>;

        /**
         * Returns the value of the '<em><b>Collaboration Use</b></em>' containment reference list.
         * The list contents are of type {@link uml.CollaborationUse}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The CollaborationUses owned by the Classifier.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Collaboration Use</em>' containment reference list.
         * @see uml.UmlPackage#getClassifier_CollaborationUse()
         * @model containment="true" ordered="false"
         * @generated
         */
        getCollaborationUse() : org.eclipse.emf.common.util.EList<uml.CollaborationUse>;

        /**
         * Returns the value of the '<em><b>General</b></em>' reference list.
         * The list contents are of type {@link uml.Classifier}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The generalizing Classifiers for this Classifier.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>General</em>' reference list.
         * @see uml.UmlPackage#getClassifier_General()
         * @model transient="true" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getGeneral() : org.eclipse.emf.common.util.EList<Classifier>;

        /**
         * Returns the value of the '<em><b>Generalization</b></em>' containment reference list.
         * The list contents are of type {@link uml.Generalization}.
         * It is bidirectional and its opposite is '{@link uml.Generalization#getSpecific}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Generalization relationships for this Classifier. These Generalizations navigate to more general Classifiers in the generalization hierarchy.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Generalization</em>' containment reference list.
         * @see uml.UmlPackage#getClassifier_Generalization()
         * @see uml.Generalization#getSpecific
         * @model opposite="specific" containment="true" ordered="false"
         * @generated
         */
        getGeneralization() : org.eclipse.emf.common.util.EList<uml.Generalization>;

        /**
         * Returns the value of the '<em><b>Powertype Extent</b></em>' reference list.
         * The list contents are of type {@link uml.GeneralizationSet}.
         * It is bidirectional and its opposite is '{@link uml.GeneralizationSet#getPowertype}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The GeneralizationSet of which this Classifier is a power type.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Powertype Extent</em>' reference list.
         * @see uml.UmlPackage#getClassifier_PowertypeExtent()
         * @see uml.GeneralizationSet#getPowertype
         * @model opposite="powertype" ordered="false"
         * @generated
         */
        getPowertypeExtent() : org.eclipse.emf.common.util.EList<uml.GeneralizationSet>;

        /**
         * Returns the value of the '<em><b>Inherited Member</b></em>' reference list.
         * The list contents are of type {@link uml.NamedElement}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * All elements inherited by this Classifier from its general Classifiers.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Inherited Member</em>' reference list.
         * @see uml.UmlPackage#getClassifier_InheritedMember()
         * @model transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getInheritedMember() : org.eclipse.emf.common.util.EList<uml.NamedElement>;

        /**
         * Returns the value of the '<em><b>Is Abstract</b></em>' attribute.
         * The default value is <code>"false"</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If true, the Classifier can only be instantiated by instantiating one of its specializations. An abstract Classifier is intended to be used by other Classifiers e.g., as the target of Associations or Generalizations.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {boolean} the value of the '<em>Is Abstract</em>' attribute.
         * @see #setIsAbstract(boolean)
         * @see uml.UmlPackage#getClassifier_IsAbstract()
         * @model default="false" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         */
        isIsAbstract() : boolean;

        /**
         * Sets the value of the '{@link uml.Classifier#isIsAbstract}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {boolean} value the new value of the '<em>Is Abstract</em>' attribute.
         * @see #isIsAbstract()
         * @generated
         */
        setIsAbstract(value : boolean);

        /**
         * Returns the value of the '<em><b>Is Final Specialization</b></em>' attribute.
         * The default value is <code>"false"</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If true, the Classifier cannot be specialized.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {boolean} the value of the '<em>Is Final Specialization</em>' attribute.
         * @see #setIsFinalSpecialization(boolean)
         * @see uml.UmlPackage#getClassifier_IsFinalSpecialization()
         * @model default="false" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         */
        isIsFinalSpecialization() : boolean;

        /**
         * Sets the value of the '{@link uml.Classifier#isIsFinalSpecialization}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {boolean} value the new value of the '<em>Is Final Specialization</em>' attribute.
         * @see #isIsFinalSpecialization()
         * @generated
         */
        setIsFinalSpecialization(value : boolean);

        /**
         * Returns the value of the '<em><b>Owned Use Case</b></em>' containment reference list.
         * The list contents are of type {@link uml.UseCase}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The UseCases owned by this classifier.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Owned Use Case</em>' containment reference list.
         * @see uml.UmlPackage#getClassifier_OwnedUseCase()
         * @model containment="true" ordered="false"
         * @generated
         */
        getOwnedUseCase() : org.eclipse.emf.common.util.EList<uml.UseCase>;

        /**
         * Returns the value of the '<em><b>Use Case</b></em>' reference list.
         * The list contents are of type {@link uml.UseCase}.
         * It is bidirectional and its opposite is '{@link uml.UseCase#getSubject}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The set of UseCases for which this Classifier is the subject.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Use Case</em>' reference list.
         * @see uml.UmlPackage#getClassifier_UseCase()
         * @see uml.UseCase#getSubject
         * @model opposite="subject" ordered="false"
         * @generated
         */
        getUseCase() : org.eclipse.emf.common.util.EList<uml.UseCase>;

        /**
         * Returns the value of the '<em><b>Redefined Classifier</b></em>' reference list.
         * The list contents are of type {@link uml.Classifier}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Classifiers redefined by this Classifier.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Redefined Classifier</em>' reference list.
         * @see uml.UmlPackage#getClassifier_RedefinedClassifier()
         * @model ordered="false"
         * @generated
         */
        getRedefinedClassifier() : org.eclipse.emf.common.util.EList<Classifier>;

        /**
         * Returns the value of the '<em><b>Representation</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A CollaborationUse which indicates the Collaboration that represents this Classifier.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Representation</em>' reference.
         * @see #setRepresentation(CollaborationUse)
         * @see uml.UmlPackage#getClassifier_Representation()
         * @model ordered="false"
         * @generated
         */
        getRepresentation() : uml.CollaborationUse;

        /**
         * Sets the value of the '{@link uml.Classifier#getRepresentation}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Representation</em>' reference.
         * @see #getRepresentation()
         * @generated
         */
        setRepresentation(value : uml.CollaborationUse);

        /**
         * Returns the value of the '<em><b>Substitution</b></em>' containment reference list.
         * The list contents are of type {@link uml.Substitution}.
         * It is bidirectional and its opposite is '{@link uml.Substitution#getSubstitutingClassifier}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Substitutions owned by this Classifier.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Substitution</em>' containment reference list.
         * @see uml.UmlPackage#getClassifier_Substitution()
         * @see uml.Substitution#getSubstitutingClassifier
         * @model opposite="substitutingClassifier" containment="true" ordered="false"
         * @generated
         */
        getSubstitution() : org.eclipse.emf.common.util.EList<uml.Substitution>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A Classifier may only specialize Classifiers of a valid type.
         * parents()->forAll(c | self.maySpecializeType(c))
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        specialize_type(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Classifier that maps to a GeneralizationSet may neither be a specific nor a general Classifier in any of the Generalization relationships defined for that GeneralizationSet. In other words, a power type may not be an instance of itself nor may its instances also be its subclasses.
         * powertypeExtent->forAll( gs |
         * gs.generalization->forAll( gen |
         * not (gen.general = self) and not gen.general.allParents()->includes(self) and not (gen.specific = self) and not self.allParents()->includes(gen.specific)
         * ))
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        maps_to_generalization_set(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The parents of a Classifier must be non-final.
         * parents()->forAll(not isFinalSpecialization)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        non_final_parents(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Generalization hierarchies must be directed and acyclical. A Classifier can not be both a transitively general and transitively specific Classifier of the same Classifier.
         * not allParents()->includes(self)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        no_cycles_in_generalization(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Retrieves all the attributes of this classifier, including those inherited from its parents.
         * <!-- end-model-doc -->
         * @model kind="operation" ordered="false"
         * @generated
         * @return {*}
         */
        getAllAttributes() : org.eclipse.emf.common.util.EList<uml.Property>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Retrieves all the operations of this classifier, including those inherited from its parents.
         * <!-- end-model-doc -->
         * @model kind="operation" ordered="false"
         * @generated
         * @return {*}
         */
        getAllOperations() : org.eclipse.emf.common.util.EList<uml.Operation>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Retrieves all the interfaces on which this classifier or any of its parents has a usage dependency.
         * <!-- end-model-doc -->
         * @model kind="operation" ordered="false"
         * @generated
         * @return {*}
         */
        getAllUsedInterfaces() : org.eclipse.emf.common.util.EList<uml.Interface>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Retrieves the first operation with the specified name, parameter names, and parameter types from this classifier, ignoring case if indicated.
         * @param {string} name The name of the operation to retrieve, or null.
         * @param {*} parameterNames The parameter names of the operation to retrieve, or null.
         * @param {*} parameterTypes The parameter types of the operation to retrieve, or null.
         * @param {boolean} ignoreCase Whether to ignore case in String comparisons.
         * <!-- end-model-doc -->
         * @model ordered="false" nameDataType="types.String" nameOrdered="false" parameterNamesDataType="types.String" parameterNamesMany="true" parameterTypesUnique="false" parameterTypesMany="true" ignoreCaseDataType="types.Boolean" ignoreCaseRequired="true" ignoreCaseOrdered="false"
         * @generated
         * @return {*}
         */
        getOperation(name? : any, parameterNames? : any, parameterTypes? : any, ignoreCase? : any) : any;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Retrieves the operations of this classifier.
         * <!-- end-model-doc -->
         * @model kind="operation" ordered="false"
         * @generated
         * @return {*}
         */
        getOperations() : org.eclipse.emf.common.util.EList<uml.Operation>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Retrieves the interfaces on which this classifier has a usage dependency.
         * <!-- end-model-doc -->
         * @model kind="operation" ordered="false"
         * @generated
         * @return {*}
         */
        getUsedInterfaces() : org.eclipse.emf.common.util.EList<uml.Interface>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The query allFeatures() gives all of the Features in the namespace of the Classifier. In general, through mechanisms such as inheritance, this will be a larger set than feature.
         * result = (member->select(oclIsKindOf(Feature))->collect(oclAsType(Feature))->asSet())
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @model ordered="false"
         * @generated
         * @return {*}
         */
        allFeatures() : org.eclipse.emf.common.util.EList<uml.Feature>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The query allParents() gives all of the direct and indirect ancestors of a generalized Classifier.
         * result = (parents()->union(parents()->collect(allParents())->asSet()))
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @model ordered="false"
         * @generated
         * @return {*}
         */
        allParents() : org.eclipse.emf.common.util.EList<Classifier>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The query hasVisibilityOf() determines whether a NamedElement is visible in the classifier. Non-private members are visible. It is only called when the argument is something owned by a parent.
         * allParents()->including(self)->collect(member)->includes(n)
         * result = (n.visibility <> VisibilityKind::private)
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @model dataType="types.Boolean" required="true" ordered="false" nRequired="true" nOrdered="false"
         * @generated
         * @param {*} n
         * @return {boolean}
         */
        hasVisibilityOf(n : uml.NamedElement) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The query inherit() defines how to inherit a set of elements passed as its argument.  It excludes redefined elements from the result.
         * result = (inhs->reject(inh |
         * inh.oclIsKindOf(RedefinableElement) and
         * ownedMember->select(oclIsKindOf(RedefinableElement))->
         * select(redefinedElement->includes(inh.oclAsType(RedefinableElement)))
         * ->notEmpty()))
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @model ordered="false" inhsMany="true" inhsOrdered="false"
         * @generated
         * @param {*} inhs
         * @return {*}
         */
        inherit(inhs : org.eclipse.emf.common.util.EList<uml.NamedElement>) : org.eclipse.emf.common.util.EList<uml.NamedElement>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The query inheritableMembers() gives all of the members of a Classifier that may be inherited in one of its descendants, subject to whatever visibility restrictions apply.
         * c.allParents()->includes(self)
         * result = (member->select(m | c.hasVisibilityOf(m)))
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @model ordered="false" cRequired="true" cOrdered="false"
         * @generated
         * @param {*} c
         * @return {*}
         */
        inheritableMembers(c : Classifier) : org.eclipse.emf.common.util.EList<uml.NamedElement>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The query maySpecializeType() determines whether this classifier may have a generalization relationship to classifiers of the specified type. By default a classifier may specialize classifiers of the same or a more general type. It is intended to be redefined by classifiers that have different specialization constraints.
         * result = (self.oclIsKindOf(c.oclType()))
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @model dataType="types.Boolean" required="true" ordered="false" cRequired="true" cOrdered="false"
         * @generated
         * @param {*} c
         * @return {boolean}
         */
        maySpecializeType(c : Classifier) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The query parents() gives all of the immediate ancestors of a generalized Classifier.
         * result = (generalization.general->asSet())
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @model ordered="false"
         * @generated
         * @return {*}
         */
        parents() : org.eclipse.emf.common.util.EList<Classifier>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Interfaces directly realized by this Classifier
         * result = ((clientDependency->
         * select(oclIsKindOf(Realization) and supplier->forAll(oclIsKindOf(Interface))))->
         * collect(supplier.oclAsType(Interface))->asSet())
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @model ordered="false"
         * @generated
         * @return {*}
         */
        directlyRealizedInterfaces() : org.eclipse.emf.common.util.EList<uml.Interface>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Interfaces directly used by this Classifier
         * result = ((supplierDependency->
         * select(oclIsKindOf(Usage) and client->forAll(oclIsKindOf(Interface))))->
         * collect(client.oclAsType(Interface))->asSet())
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @model ordered="false"
         * @generated
         * @return {*}
         */
        directlyUsedInterfaces() : org.eclipse.emf.common.util.EList<uml.Interface>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Interfaces realized by this Classifier and all of its generalizations
         * result = (directlyRealizedInterfaces()->union(self.allParents()->collect(directlyRealizedInterfaces()))->asSet())
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @model ordered="false"
         * @generated
         * @return {*}
         */
        allRealizedInterfaces() : org.eclipse.emf.common.util.EList<uml.Interface>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Interfaces used by this Classifier and all of its generalizations
         * result = (directlyUsedInterfaces()->union(self.allParents()->collect(directlyUsedInterfaces()))->asSet())
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @model ordered="false"
         * @generated
         * @return {*}
         */
        allUsedInterfaces() : org.eclipse.emf.common.util.EList<uml.Interface>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * result = (substitution.contract->includes(contract))
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @model dataType="types.Boolean" required="true" ordered="false" contractRequired="true" contractOrdered="false"
         * @generated
         * @param {*} contract
         * @return {boolean}
         */
        isSubstitutableFor(contract : Classifier) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The query allAttributes gives an ordered set of all owned and inherited attributes of the Classifier. All owned attributes appear before any inherited attributes, and the attributes inherited from any more specific parent Classifier appear before those of any more general parent Classifier. However, if the Classifier has multiple immediate parents, then the relative ordering of the sets of attributes from those parents is not defined.
         * result = (attribute->asSequence()->union(parents()->asSequence().allAttributes())->select(p | member->includes(p))->asOrderedSet())
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {*}
         */
        allAttributes() : org.eclipse.emf.common.util.EList<uml.Property>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * All StructuralFeatures related to the Classifier that may have Slots, including direct attributes, inherited attributes, private attributes in generalizations, and memberEnds of Associations, but excluding redefined StructuralFeatures.
         * result = (member->select(oclIsKindOf(StructuralFeature))->
         * collect(oclAsType(StructuralFeature))->
         * union(self.inherit(self.allParents()->collect(p | p.attribute)->asSet())->
         * collect(oclAsType(StructuralFeature)))->asSet())
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @model ordered="false"
         * @generated
         * @return {*}
         */
        allSlottableFeatures() : org.eclipse.emf.common.util.EList<uml.StructuralFeature>;
    }
}

