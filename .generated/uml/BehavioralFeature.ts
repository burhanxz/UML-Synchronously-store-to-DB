/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Behavioral Feature</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A BehavioralFeature is a feature of a Classifier that specifies an aspect of the behavior of its instances.  A BehavioralFeature is implemented (realized) by a Behavior. A BehavioralFeature specifies that a Classifier will respond to a designated request by invoking its implementing method.
     * <p>From package UML::Classification.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.BehavioralFeature#getConcurrency}</li>
     * <li>{@link uml.BehavioralFeature#isIsAbstract}</li>
     * <li>{@link uml.BehavioralFeature#getMethod}</li>
     * <li>{@link uml.BehavioralFeature#getOwnedParameter}</li>
     * <li>{@link uml.BehavioralFeature#getOwnedParameterSet}</li>
     * <li>{@link uml.BehavioralFeature#getRaisedException}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getBehavioralFeature()
     * @model abstract="true"
     * @generated
     * @class
     */
    export interface BehavioralFeature extends uml.Namespace, uml.Feature {
        /**
         * Returns the value of the '<em><b>Concurrency</b></em>' attribute.
         * The default value is <code>"sequential"</code>.
         * The literals are from the enumeration {@link uml.CallConcurrencyKind}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Specifies the semantics of concurrent calls to the same passive instance (i.e., an instance originating from a Class with isActive being false). Active instances control access to their own BehavioralFeatures.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {uml.CallConcurrencyKind} the value of the '<em>Concurrency</em>' attribute.
         * @see uml.CallConcurrencyKind
         * @see #setConcurrency(CallConcurrencyKind)
         * @see uml.UmlPackage#getBehavioralFeature_Concurrency()
         * @model default="sequential" required="true" ordered="false"
         * @generated
         */
        getConcurrency() : uml.CallConcurrencyKind;

        /**
         * Sets the value of the '{@link uml.BehavioralFeature#getConcurrency}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {uml.CallConcurrencyKind} value the new value of the '<em>Concurrency</em>' attribute.
         * @see uml.CallConcurrencyKind
         * @see #getConcurrency()
         * @generated
         */
        setConcurrency(value : uml.CallConcurrencyKind);

        /**
         * Returns the value of the '<em><b>Is Abstract</b></em>' attribute.
         * The default value is <code>"false"</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If true, then the BehavioralFeature does not have an implementation, and one must be supplied by a more specific Classifier. If false, the BehavioralFeature must have an implementation in the Classifier or one must be inherited.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {boolean} the value of the '<em>Is Abstract</em>' attribute.
         * @see #setIsAbstract(boolean)
         * @see uml.UmlPackage#getBehavioralFeature_IsAbstract()
         * @model default="false" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         */
        isIsAbstract() : boolean;

        /**
         * Sets the value of the '{@link uml.BehavioralFeature#isIsAbstract}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {boolean} value the new value of the '<em>Is Abstract</em>' attribute.
         * @see #isIsAbstract()
         * @generated
         */
        setIsAbstract(value : boolean);

        /**
         * Returns the value of the '<em><b>Method</b></em>' reference list.
         * The list contents are of type {@link uml.Behavior}.
         * It is bidirectional and its opposite is '{@link uml.Behavior#getSpecification}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A Behavior that implements the BehavioralFeature. There may be at most one Behavior for a particular pairing of a Classifier (as owner of the Behavior) and a BehavioralFeature (as specification of the Behavior).
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Method</em>' reference list.
         * @see uml.UmlPackage#getBehavioralFeature_Method()
         * @see uml.Behavior#getSpecification
         * @model opposite="specification" ordered="false"
         * @generated
         */
        getMethod() : org.eclipse.emf.common.util.EList<uml.Behavior>;

        /**
         * Returns the value of the '<em><b>Owned Parameter</b></em>' containment reference list.
         * The list contents are of type {@link uml.Parameter}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The ordered set of formal Parameters of this BehavioralFeature.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Owned Parameter</em>' containment reference list.
         * @see uml.UmlPackage#getBehavioralFeature_OwnedParameter()
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
         * The ParameterSets owned by this BehavioralFeature.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Owned Parameter Set</em>' containment reference list.
         * @see uml.UmlPackage#getBehavioralFeature_OwnedParameterSet()
         * @model containment="true" ordered="false"
         * @generated
         */
        getOwnedParameterSet() : org.eclipse.emf.common.util.EList<uml.ParameterSet>;

        /**
         * Returns the value of the '<em><b>Raised Exception</b></em>' reference list.
         * The list contents are of type {@link uml.Type}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Types representing exceptions that may be raised during an invocation of this BehavioralFeature.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Raised Exception</em>' reference list.
         * @see uml.UmlPackage#getBehavioralFeature_RaisedException()
         * @model ordered="false"
         * @generated
         */
        getRaisedException() : org.eclipse.emf.common.util.EList<uml.Type>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * When isAbstract is true there are no methods.
         * isAbstract implies method->isEmpty()
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        abstract_no_method(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Creates a return result parameter with the specified name and type.
         * @param {string} name The name for the new return result, or null.
         * @param {*} type The type for the new return result, or null.
         * <!-- end-model-doc -->
         * @model required="true" ordered="false" nameDataType="types.String" nameOrdered="false" typeOrdered="false"
         * @generated
         * @return {*}
         */
        createReturnResult(name : string, type : uml.Type) : uml.Parameter;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The ownedParameters with direction in and inout.
         * result = (ownedParameter->select(direction=ParameterDirectionKind::_'in' or direction=ParameterDirectionKind::inout))
         * <p>From package UML::Classification.</p>
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
         * The ownedParameters with direction out, inout, or return.
         * result = (ownedParameter->select(direction=ParameterDirectionKind::out or direction=ParameterDirectionKind::inout or direction=ParameterDirectionKind::return))
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {*}
         */
        outputParameters() : org.eclipse.emf.common.util.EList<uml.Parameter>;
    }
}

