/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Generalization Set</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A GeneralizationSet is a PackageableElement whose instances represent sets of Generalization relationships.
     * <p>From package UML::Classification.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.GeneralizationSet#isIsCovering}</li>
     * <li>{@link uml.GeneralizationSet#isIsDisjoint}</li>
     * <li>{@link uml.GeneralizationSet#getPowertype}</li>
     * <li>{@link uml.GeneralizationSet#getGeneralization}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getGeneralizationSet()
     * @model
     * @generated
     * @class
     */
    export interface GeneralizationSet extends uml.PackageableElement {
        /**
         * Returns the value of the '<em><b>Is Covering</b></em>' attribute.
         * The default value is <code>"false"</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Indicates (via the associated Generalizations) whether or not the set of specific Classifiers are covering for a particular general classifier. When isCovering is true, every instance of a particular general Classifier is also an instance of at least one of its specific Classifiers for the GeneralizationSet. When isCovering is false, there are one or more instances of the particular general Classifier that are not instances of at least one of its specific Classifiers defined for the GeneralizationSet.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {boolean} the value of the '<em>Is Covering</em>' attribute.
         * @see #setIsCovering(boolean)
         * @see uml.UmlPackage#getGeneralizationSet_IsCovering()
         * @model default="false" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         */
        isIsCovering() : boolean;

        /**
         * Sets the value of the '{@link uml.GeneralizationSet#isIsCovering}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {boolean} value the new value of the '<em>Is Covering</em>' attribute.
         * @see #isIsCovering()
         * @generated
         */
        setIsCovering(value : boolean);

        /**
         * Returns the value of the '<em><b>Is Disjoint</b></em>' attribute.
         * The default value is <code>"false"</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Indicates whether or not the set of specific Classifiers in a Generalization relationship have instance in common. If isDisjoint is true, the specific Classifiers for a particular GeneralizationSet have no members in common; that is, their intersection is empty. If isDisjoint is false, the specific Classifiers in a particular GeneralizationSet have one or more members in common; that is, their intersection is not empty.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {boolean} the value of the '<em>Is Disjoint</em>' attribute.
         * @see #setIsDisjoint(boolean)
         * @see uml.UmlPackage#getGeneralizationSet_IsDisjoint()
         * @model default="false" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         */
        isIsDisjoint() : boolean;

        /**
         * Sets the value of the '{@link uml.GeneralizationSet#isIsDisjoint}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {boolean} value the new value of the '<em>Is Disjoint</em>' attribute.
         * @see #isIsDisjoint()
         * @generated
         */
        setIsDisjoint(value : boolean);

        /**
         * Returns the value of the '<em><b>Powertype</b></em>' reference.
         * It is bidirectional and its opposite is '{@link uml.Classifier#getPowertypeExtent}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Designates the Classifier that is defined as the power type for the associated GeneralizationSet, if there is one.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Powertype</em>' reference.
         * @see #setPowertype(Classifier)
         * @see uml.UmlPackage#getGeneralizationSet_Powertype()
         * @see uml.Classifier#getPowertypeExtent
         * @model opposite="powertypeExtent" ordered="false"
         * @generated
         */
        getPowertype() : uml.Classifier;

        /**
         * Sets the value of the '{@link uml.GeneralizationSet#getPowertype}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Powertype</em>' reference.
         * @see #getPowertype()
         * @generated
         */
        setPowertype(value : uml.Classifier);

        /**
         * Returns the value of the '<em><b>Generalization</b></em>' reference list.
         * The list contents are of type {@link uml.Generalization}.
         * It is bidirectional and its opposite is '{@link uml.Generalization#getGeneralizationSet}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Designates the instances of Generalization that are members of this GeneralizationSet.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Generalization</em>' reference list.
         * @see uml.UmlPackage#getGeneralizationSet_Generalization()
         * @see uml.Generalization#getGeneralizationSet
         * @model opposite="generalizationSet" ordered="false"
         * @generated
         */
        getGeneralization() : org.eclipse.emf.common.util.EList<uml.Generalization>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Every Generalization associated with a particular GeneralizationSet must have the same general Classifier.
         * generalization->collect(general)->asSet()->size() <= 1
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        generalization_same_classifier(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Classifier that maps to a GeneralizationSet may neither be a specific nor a general Classifier in any of the Generalization relationships defined for that GeneralizationSet. In other words, a power type may not be an instance of itself nor may its instances be its subclasses.
         * powertype <> null implies generalization->forAll( gen |
         * not (gen.general = powertype) and not gen.general.allParents()->includes(powertype) and not (gen.specific = powertype) and not powertype.allParents()->includes(gen.specific)
         * )
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        maps_to_generalization_set(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

