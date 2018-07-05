/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Activity Partition</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * An ActivityPartition is a kind of ActivityGroup for identifying ActivityNodes that have some characteristic in common.
     * <p>From package UML::Activities.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.ActivityPartition#isIsDimension}</li>
     * <li>{@link uml.ActivityPartition#isIsExternal}</li>
     * <li>{@link uml.ActivityPartition#getNode}</li>
     * <li>{@link uml.ActivityPartition#getRepresents}</li>
     * <li>{@link uml.ActivityPartition#getSubpartition}</li>
     * <li>{@link uml.ActivityPartition#getSuperPartition}</li>
     * <li>{@link uml.ActivityPartition#getEdge}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getActivityPartition()
     * @model
     * @generated
     * @class
     */
    export interface ActivityPartition extends uml.ActivityGroup {
        /**
         * Returns the value of the '<em><b>Is Dimension</b></em>' attribute.
         * The default value is <code>"false"</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Indicates whether the ActivityPartition groups other ActivityPartitions along a dimension.
         * <p>From package UML::Activities.</p>
         * <!-- end-model-doc -->
         * @return {boolean} the value of the '<em>Is Dimension</em>' attribute.
         * @see #setIsDimension(boolean)
         * @see uml.UmlPackage#getActivityPartition_IsDimension()
         * @model default="false" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         */
        isIsDimension() : boolean;

        /**
         * Sets the value of the '{@link uml.ActivityPartition#isIsDimension}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {boolean} value the new value of the '<em>Is Dimension</em>' attribute.
         * @see #isIsDimension()
         * @generated
         */
        setIsDimension(value : boolean);

        /**
         * Returns the value of the '<em><b>Is External</b></em>' attribute.
         * The default value is <code>"false"</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Indicates whether the ActivityPartition represents an entity to which the partitioning structure does not apply.
         * <p>From package UML::Activities.</p>
         * <!-- end-model-doc -->
         * @return {boolean} the value of the '<em>Is External</em>' attribute.
         * @see #setIsExternal(boolean)
         * @see uml.UmlPackage#getActivityPartition_IsExternal()
         * @model default="false" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         */
        isIsExternal() : boolean;

        /**
         * Sets the value of the '{@link uml.ActivityPartition#isIsExternal}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {boolean} value the new value of the '<em>Is External</em>' attribute.
         * @see #isIsExternal()
         * @generated
         */
        setIsExternal(value : boolean);

        /**
         * Returns the value of the '<em><b>Node</b></em>' reference list.
         * The list contents are of type {@link uml.ActivityNode}.
         * It is bidirectional and its opposite is '{@link uml.ActivityNode#getInPartition}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * ActivityNodes immediately contained in the ActivityPartition.
         * <p>From package UML::Activities.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Node</em>' reference list.
         * @see uml.UmlPackage#getActivityPartition_Node()
         * @see uml.ActivityNode#getInPartition
         * @model opposite="inPartition" ordered="false"
         * @generated
         */
        getNode() : org.eclipse.emf.common.util.EList<uml.ActivityNode>;

        /**
         * Returns the value of the '<em><b>Represents</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * An Element represented by the functionality modeled within the ActivityPartition.
         * <p>From package UML::Activities.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Represents</em>' reference.
         * @see #setRepresents(Element)
         * @see uml.UmlPackage#getActivityPartition_Represents()
         * @model ordered="false"
         * @generated
         */
        getRepresents() : uml.Element;

        /**
         * Sets the value of the '{@link uml.ActivityPartition#getRepresents}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Represents</em>' reference.
         * @see #getRepresents()
         * @generated
         */
        setRepresents(value : uml.Element);

        /**
         * Returns the value of the '<em><b>Subpartition</b></em>' containment reference list.
         * The list contents are of type {@link uml.ActivityPartition}.
         * It is bidirectional and its opposite is '{@link uml.ActivityPartition#getSuperPartition}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Other ActivityPartitions immediately contained in this ActivityPartition (as its subgroups).
         * <p>From package UML::Activities.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Subpartition</em>' containment reference list.
         * @see uml.UmlPackage#getActivityPartition_Subpartition()
         * @see uml.ActivityPartition#getSuperPartition
         * @model opposite="superPartition" containment="true" ordered="false"
         * @generated
         */
        getSubpartition() : org.eclipse.emf.common.util.EList<ActivityPartition>;

        /**
         * Returns the value of the '<em><b>Super Partition</b></em>' container reference.
         * It is bidirectional and its opposite is '{@link uml.ActivityPartition#getSubpartition}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Other ActivityPartitions immediately containing this ActivityPartition (as its superGroups).
         * <p>From package UML::Activities.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Super Partition</em>' container reference.
         * @see #setSuperPartition(ActivityPartition)
         * @see uml.UmlPackage#getActivityPartition_SuperPartition()
         * @see uml.ActivityPartition#getSubpartition
         * @model opposite="subpartition" transient="false" ordered="false"
         * @generated
         */
        getSuperPartition() : ActivityPartition;

        /**
         * Sets the value of the '{@link uml.ActivityPartition#getSuperPartition}' container reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Super Partition</em>' container reference.
         * @see #getSuperPartition()
         * @generated
         */
        setSuperPartition(value : ActivityPartition);

        /**
         * Returns the value of the '<em><b>Edge</b></em>' reference list.
         * The list contents are of type {@link uml.ActivityEdge}.
         * It is bidirectional and its opposite is '{@link uml.ActivityEdge#getInPartition}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * ActivityEdges immediately contained in the ActivityPartition.
         * <p>From package UML::Activities.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Edge</em>' reference list.
         * @see uml.UmlPackage#getActivityPartition_Edge()
         * @see uml.ActivityEdge#getInPartition
         * @model opposite="inPartition" ordered="false"
         * @generated
         */
        getEdge() : org.eclipse.emf.common.util.EList<uml.ActivityEdge>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If a non-external ActivityPartition represents a Classifier and has a superPartition, then the superPartition must represent a Classifier, and the Classifier of the subpartition must be nested (nestedClassifier or ownedBehavior) in the Classifier represented by the superPartition, or be at the contained end of a composition Association with the Classifier represented by the superPartition.
         * (not isExternal and represents.oclIsKindOf(Classifier) and superPartition->notEmpty()) implies
         * (
         * let representedClassifier : Classifier = represents.oclAsType(Classifier) in
         * superPartition.represents.oclIsKindOf(Classifier) and
         * let representedSuperClassifier : Classifier = superPartition.represents.oclAsType(Classifier) in
         * (representedSuperClassifier.oclIsKindOf(BehavioredClassifier) and representedClassifier.oclIsKindOf(Behavior) and
         * representedSuperClassifier.oclAsType(BehavioredClassifier).ownedBehavior->includes(representedClassifier.oclAsType(Behavior)))
         * or
         * (representedSuperClassifier.oclIsKindOf(Class) and  representedSuperClassifier.oclAsType(Class).nestedClassifier->includes(representedClassifier))
         * or
         * (Association.allInstances()->exists(a | a.memberEnd->exists(end1 | end1.isComposite and end1.type = representedClassifier and
         * a.memberEnd->exists(end2 | end1<>end2 and end2.type = representedSuperClassifier))))
         * )
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        represents_classifier(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If an ActivityPartition represents a Property and has a superPartition, then the Property must be of a Classifier represented by the superPartition, or of a Classifier that is the type of a Property represented by the superPartition.
         * (represents.oclIsKindOf(Property) and superPartition->notEmpty()) implies
         * (
         * (superPartition.represents.oclIsKindOf(Classifier) and represents.owner = superPartition.represents) or
         * (superPartition.represents.oclIsKindOf(Property) and represents.owner = superPartition.represents.oclAsType(Property).type)
         * )
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        represents_property_and_is_contained(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If an ActivityPartition represents a Property and has a superPartition representing a Classifier, then all the other non-external subpartitions of the superPartition must represent Properties directly owned by the same Classifier.
         * (represents.oclIsKindOf(Property) and superPartition->notEmpty() and superPartition.represents.oclIsKindOf(Classifier)) implies
         * (
         * let representedClassifier : Classifier = superPartition.represents.oclAsType(Classifier)
         * in
         * superPartition.subpartition->reject(isExternal)->forAll(p |
         * p.represents.oclIsKindOf(Property) and p.owner=representedClassifier)
         * )
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        represents_property(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * An ActvivityPartition with isDimension = true may not be contained by another ActivityPartition.
         * isDimension implies superPartition->isEmpty()
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        dimension_not_contained(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

