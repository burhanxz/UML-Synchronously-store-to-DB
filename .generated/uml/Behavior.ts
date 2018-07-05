/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Behavior</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * Behavior is a specification of how its context BehavioredClassifier changes state over time. This specification may be either a definition of possible behavior execution or emergent behavior, or a selective illustration of an interesting subset of possible executions. The latter form is typically used for capturing examples, such as a trace of a particular execution.
     * <p>From package UML::CommonBehavior.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.Behavior#getSpecification}</li>
     * <li>{@link uml.Behavior#getContext}</li>
     * <li>{@link uml.Behavior#isIsReentrant}</li>
     * <li>{@link uml.Behavior#getOwnedParameter}</li>
     * <li>{@link uml.Behavior#getOwnedParameterSet}</li>
     * <li>{@link uml.Behavior#getPostcondition}</li>
     * <li>{@link uml.Behavior#getPrecondition}</li>
     * <li>{@link uml.Behavior#getRedefinedBehavior}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getBehavior()
     * @model abstract="true"
     * @generated
     * @class
     */
    export interface Behavior extends uml.Class {
        /**
         * Returns the value of the '<em><b>Specification</b></em>' reference.
         * It is bidirectional and its opposite is '{@link uml.BehavioralFeature#getMethod}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Designates a BehavioralFeature that the Behavior implements. The BehavioralFeature must be owned by the BehavioredClassifier that owns the Behavior or be inherited by it. The Parameters of the BehavioralFeature and the implementing Behavior must match. A Behavior does not need to have a specification, in which case it either is the classifierBehavior of a BehavioredClassifier or it can only be invoked by another Behavior of the Classifier.
         * <p>From package UML::CommonBehavior.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Specification</em>' reference.
         * @see #setSpecification(BehavioralFeature)
         * @see uml.UmlPackage#getBehavior_Specification()
         * @see uml.BehavioralFeature#getMethod
         * @model opposite="method" ordered="false"
         * @generated
         */
        getSpecification() : uml.BehavioralFeature;

        /**
         * Sets the value of the '{@link uml.Behavior#getSpecification}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Specification</em>' reference.
         * @see #getSpecification()
         * @generated
         */
        setSpecification(value : uml.BehavioralFeature);

        /**
         * Returns the value of the '<em><b>Context</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The BehavioredClassifier that is the context for the execution of the Behavior. A Behavior that is directly owned as a nestedClassifier does not have a context. Otherwise, to determine the context of a Behavior, find the first BehavioredClassifier reached by following the chain of owner relationships from the Behavior, if any. If there is such a BehavioredClassifier, then it is the context, unless it is itself a Behavior with a non-empty context, in which case that is also the context for the original Behavior. For example, following this algorithm, the context of an entry Behavior in a StateMachine is the BehavioredClassifier that owns the StateMachine. The features of the context BehavioredClassifier as well as the Elements visible to the context Classifier are visible to the Behavior.
         * <p>From package UML::CommonBehavior.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Context</em>' reference.
         * @see uml.UmlPackage#getBehavior_Context()
         * @model transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getContext() : uml.BehavioredClassifier;

        /**
         * Returns the value of the '<em><b>Is Reentrant</b></em>' attribute.
         * The default value is <code>"true"</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Tells whether the Behavior can be invoked while it is still executing from a previous invocation.
         * <p>From package UML::CommonBehavior.</p>
         * <!-- end-model-doc -->
         * @return {boolean} the value of the '<em>Is Reentrant</em>' attribute.
         * @see #isSetIsReentrant()
         * @see #unsetIsReentrant()
         * @see #setIsReentrant(boolean)
         * @see uml.UmlPackage#getBehavior_IsReentrant()
         * @model default="true" unsettable="true" dataType="types.Boolean" ordered="false"
         * @generated
         */
        isIsReentrant() : boolean;

        /**
         * Sets the value of the '{@link uml.Behavior#isIsReentrant}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {boolean} value the new value of the '<em>Is Reentrant</em>' attribute.
         * @see #isSetIsReentrant()
         * @see #unsetIsReentrant()
         * @see #isIsReentrant()
         * @generated
         */
        setIsReentrant(value : boolean);

        /**
         * Unsets the value of the '{@link uml.Behavior#isIsReentrant}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #isSetIsReentrant()
         * @see #isIsReentrant()
         * @see #setIsReentrant(boolean)
         * @generated
         */
        unsetIsReentrant();

        /**
         * Returns whether the value of the '{@link uml.Behavior#isIsReentrant}' attribute is set.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {boolean} whether the value of the '<em>Is Reentrant</em>' attribute is set.
         * @see #unsetIsReentrant()
         * @see #isIsReentrant()
         * @see #setIsReentrant(boolean)
         * @generated
         */
        isSetIsReentrant() : boolean;

        /**
         * Returns the value of the '<em><b>Owned Parameter</b></em>' containment reference list.
         * The list contents are of type {@link uml.Parameter}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * References a list of Parameters to the Behavior which describes the order and type of arguments that can be given when the Behavior is invoked and of the values which will be returned when the Behavior completes its execution.
         * <p>From package UML::CommonBehavior.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Owned Parameter</em>' containment reference list.
         * @see uml.UmlPackage#getBehavior_OwnedParameter()
         * @model containment="true"
         * @generated
         */
        getOwnedParameter() : org.eclipse.emf.common.util.EList<uml.Parameter>;

        /**
         * Returns the value of the '<em><b>Owned Parameter Set</b></em>' containment reference list.
         * The list contents are of type {@link uml.ParameterSet}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The ParameterSets owned by this Behavior.
         * <p>From package UML::CommonBehavior.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Owned Parameter Set</em>' containment reference list.
         * @see uml.UmlPackage#getBehavior_OwnedParameterSet()
         * @model containment="true" ordered="false"
         * @generated
         */
        getOwnedParameterSet() : org.eclipse.emf.common.util.EList<uml.ParameterSet>;

        /**
         * Returns the value of the '<em><b>Postcondition</b></em>' reference list.
         * The list contents are of type {@link uml.Constraint}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * An optional set of Constraints specifying what is fulfilled after the execution of the Behavior is completed, if its precondition was fulfilled before its invocation.
         * <p>From package UML::CommonBehavior.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Postcondition</em>' reference list.
         * @see uml.UmlPackage#getBehavior_Postcondition()
         * @model ordered="false"
         * @generated
         */
        getPostcondition() : org.eclipse.emf.common.util.EList<uml.Constraint>;

        /**
         * Returns the value of the '<em><b>Precondition</b></em>' reference list.
         * The list contents are of type {@link uml.Constraint}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * An optional set of Constraints specifying what must be fulfilled before the Behavior is invoked.
         * <p>From package UML::CommonBehavior.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Precondition</em>' reference list.
         * @see uml.UmlPackage#getBehavior_Precondition()
         * @model ordered="false"
         * @generated
         */
        getPrecondition() : org.eclipse.emf.common.util.EList<uml.Constraint>;

        /**
         * Returns the value of the '<em><b>Redefined Behavior</b></em>' reference list.
         * The list contents are of type {@link uml.Behavior}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * References the Behavior that this Behavior redefines. A subtype of Behavior may redefine any other subtype of Behavior. If the Behavior implements a BehavioralFeature, it replaces the redefined Behavior. If the Behavior is a classifierBehavior, it extends the redefined Behavior.
         * <p>From package UML::CommonBehavior.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Redefined Behavior</em>' reference list.
         * @see uml.UmlPackage#getBehavior_RedefinedBehavior()
         * @model ordered="false"
         * @generated
         */
        getRedefinedBehavior() : org.eclipse.emf.common.util.EList<Behavior>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * There may be at most one Behavior for a given pairing of BehavioredClassifier (as owner of the Behavior) and BehavioralFeature (as specification of the Behavior).
         * specification <> null implies _'context'.ownedBehavior->select(specification=self.specification)->size() = 1
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        most_one_behavior(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If a Behavior has a specification BehavioralFeature, then it must have the same number of ownedParameters as its specification. The Behavior Parameters must also "match" the BehavioralParameter Parameters, but the exact requirements for this matching are not formalized.
         * specification <> null implies ownedParameter->size() = specification.ownedParameter->size()
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        parameters_match(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The specification BehavioralFeature must be a feature (possibly inherited) of the context BehavioredClassifier of the Behavior.
         * _'context'.feature->includes(specification)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        feature_of_context_classifier(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The first BehavioredClassifier reached by following the chain of owner relationships from the Behavior, if any.
         * if from.oclIsKindOf(BehavioredClassifier) then
         * from.oclAsType(BehavioredClassifier)
         * else if from.owner = null then
         * null
         * else
         * self.behavioredClassifier(from.owner)
         * endif
         * endif
         * <p>From package UML::CommonBehavior.</p>
         * <!-- end-model-doc -->
         * @model ordered="false" fromRequired="true" fromOrdered="false"
         * @generated
         * @param {*} from
         * @return {*}
         */
        behavioredClassifier(from : uml.Element) : uml.BehavioredClassifier;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The in and inout ownedParameters of the Behavior.
         * result = (ownedParameter->select(direction=ParameterDirectionKind::_'in' or direction=ParameterDirectionKind::inout))
         * <p>From package UML::CommonBehavior.</p>
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {*}
         */
        inputParameters() : org.eclipse.emf.common.util.EList<uml.Parameter>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The out, inout and return ownedParameters.
         * result = (ownedParameter->select(direction=ParameterDirectionKind::out or direction=ParameterDirectionKind::inout or direction=ParameterDirectionKind::return))
         * <p>From package UML::CommonBehavior.</p>
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {*}
         */
        outputParameters() : org.eclipse.emf.common.util.EList<uml.Parameter>;
    }
}

