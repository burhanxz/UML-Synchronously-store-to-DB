/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Port</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A Port is a property of an EncapsulatedClassifier that specifies a distinct interaction point between that EncapsulatedClassifier and its environment or between the (behavior of the) EncapsulatedClassifier and its internal parts. Ports are connected to Properties of the EncapsulatedClassifier by Connectors through which requests can be made to invoke BehavioralFeatures. A Port may specify the services an EncapsulatedClassifier provides (offers) to its environment as well as the services that an EncapsulatedClassifier expects (requires) of its environment.  A Port may have an associated ProtocolStateMachine.
     * <p>From package UML::StructuredClassifiers.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.Port#isIsBehavior}</li>
     * <li>{@link uml.Port#isIsConjugated}</li>
     * <li>{@link uml.Port#isIsService}</li>
     * <li>{@link uml.Port#getProtocol}</li>
     * <li>{@link uml.Port#getProvided}</li>
     * <li>{@link uml.Port#getRedefinedPort}</li>
     * <li>{@link uml.Port#getRequired}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getPort()
     * @model
     * @generated
     * @class
     */
    export interface Port extends uml.Property {
        /**
         * Returns the value of the '<em><b>Is Behavior</b></em>' attribute.
         * The default value is <code>"false"</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Specifies whether requests arriving at this Port are sent to the classifier behavior of this EncapsulatedClassifier. Such a Port is referred to as a behavior Port. Any invocation of a BehavioralFeature targeted at a behavior Port will be handled by the instance of the owning EncapsulatedClassifier itself, rather than by any instances that it may contain.
         * <p>From package UML::StructuredClassifiers.</p>
         * <!-- end-model-doc -->
         * @return {boolean} the value of the '<em>Is Behavior</em>' attribute.
         * @see #setIsBehavior(boolean)
         * @see uml.UmlPackage#getPort_IsBehavior()
         * @model default="false" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         */
        isIsBehavior() : boolean;

        /**
         * Sets the value of the '{@link uml.Port#isIsBehavior}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {boolean} value the new value of the '<em>Is Behavior</em>' attribute.
         * @see #isIsBehavior()
         * @generated
         */
        setIsBehavior(value : boolean);

        /**
         * Returns the value of the '<em><b>Is Conjugated</b></em>' attribute.
         * The default value is <code>"false"</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Specifies the way that the provided and required Interfaces are derived from the Port¡¯s Type.
         * <p>From package UML::StructuredClassifiers.</p>
         * <!-- end-model-doc -->
         * @return {boolean} the value of the '<em>Is Conjugated</em>' attribute.
         * @see #setIsConjugated(boolean)
         * @see uml.UmlPackage#getPort_IsConjugated()
         * @model default="false" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         */
        isIsConjugated() : boolean;

        /**
         * Sets the value of the '{@link uml.Port#isIsConjugated}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {boolean} value the new value of the '<em>Is Conjugated</em>' attribute.
         * @see #isIsConjugated()
         * @generated
         */
        setIsConjugated(value : boolean);

        /**
         * Returns the value of the '<em><b>Is Service</b></em>' attribute.
         * The default value is <code>"true"</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If true, indicates that this Port is used to provide the published functionality of an EncapsulatedClassifier.  If false, this Port is used to implement the EncapsulatedClassifier but is not part of the essential externally-visible functionality of the EncapsulatedClassifier and can, therefore, be altered or deleted along with the internal implementation of the EncapsulatedClassifier and other properties that are considered part of its implementation.
         * <p>From package UML::StructuredClassifiers.</p>
         * <!-- end-model-doc -->
         * @return {boolean} the value of the '<em>Is Service</em>' attribute.
         * @see #setIsService(boolean)
         * @see uml.UmlPackage#getPort_IsService()
         * @model default="true" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         */
        isIsService() : boolean;

        /**
         * Sets the value of the '{@link uml.Port#isIsService}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {boolean} value the new value of the '<em>Is Service</em>' attribute.
         * @see #isIsService()
         * @generated
         */
        setIsService(value : boolean);

        /**
         * Returns the value of the '<em><b>Protocol</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * An optional ProtocolStateMachine which describes valid interactions at this interaction point.
         * <p>From package UML::StructuredClassifiers.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Protocol</em>' reference.
         * @see #setProtocol(ProtocolStateMachine)
         * @see uml.UmlPackage#getPort_Protocol()
         * @model ordered="false"
         * @generated
         */
        getProtocol() : uml.ProtocolStateMachine;

        /**
         * Sets the value of the '{@link uml.Port#getProtocol}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Protocol</em>' reference.
         * @see #getProtocol()
         * @generated
         */
        setProtocol(value : uml.ProtocolStateMachine);

        /**
         * Returns the value of the '<em><b>Provided</b></em>' reference list.
         * The list contents are of type {@link uml.Interface}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Interfaces specifying the set of Operations and Receptions that the EncapsulatedCclassifier offers to its environment via this Port, and which it will handle either directly or by forwarding it to a part of its internal structure. This association is derived according to the value of isConjugated. If isConjugated is false, provided is derived as the union of the sets of Interfaces realized by the type of the port and its supertypes, or directly from the type of the Port if the Port is typed by an Interface. If isConjugated is true, it is derived as the union of the sets of Interfaces used by the type of the Port and its supertypes.
         * <p>From package UML::StructuredClassifiers.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Provided</em>' reference list.
         * @see uml.UmlPackage#getPort_Provided()
         * @model transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getProvided() : org.eclipse.emf.common.util.EList<uml.Interface>;

        /**
         * Returns the value of the '<em><b>Redefined Port</b></em>' reference list.
         * The list contents are of type {@link uml.Port}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A Port may be redefined when its containing EncapsulatedClassifier is specialized. The redefining Port may have additional Interfaces to those that are associated with the redefined Port or it may replace an Interface by one of its subtypes.
         * <p>From package UML::StructuredClassifiers.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Redefined Port</em>' reference list.
         * @see uml.UmlPackage#getPort_RedefinedPort()
         * @model ordered="false"
         * @generated
         */
        getRedefinedPort() : org.eclipse.emf.common.util.EList<Port>;

        /**
         * Returns the value of the '<em><b>Required</b></em>' reference list.
         * The list contents are of type {@link uml.Interface}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Interfaces specifying the set of Operations and Receptions that the EncapsulatedCassifier expects its environment to handle via this port. This association is derived according to the value of isConjugated. If isConjugated is false, required is derived as the union of the sets of Interfaces used by the type of the Port and its supertypes. If isConjugated is true, it is derived as the union of the sets of Interfaces realized by the type of the Port and its supertypes, or directly from the type of the Port if the Port is typed by an Interface.
         * <p>From package UML::StructuredClassifiers.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Required</em>' reference list.
         * @see uml.UmlPackage#getPort_Required()
         * @model transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getRequired() : org.eclipse.emf.common.util.EList<uml.Interface>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Port.aggregation must be composite.
         * aggregation = AggregationKind::composite
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        port_aggregation(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A defaultValue for port cannot be specified when the type of the Port is an Interface.
         * type.oclIsKindOf(Interface) implies defaultValue->isEmpty()
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        default_value(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * All Ports are owned by an EncapsulatedClassifier.
         * owner = encapsulatedClassifier
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        encapsulated_owner(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The union of the sets of Interfaces realized by the type of the Port and its supertypes, or directly the type of the Port if the Port is typed by an Interface.
         * result = (if type.oclIsKindOf(Interface)
         * then type.oclAsType(Interface)->asSet()
         * else type.oclAsType(Classifier).allRealizedInterfaces()
         * endif)
         * <p>From package UML::StructuredClassifiers.</p>
         * <!-- end-model-doc -->
         * @model ordered="false"
         * @generated
         * @return {*}
         */
        basicProvided() : org.eclipse.emf.common.util.EList<uml.Interface>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The union of the sets of Interfaces used by the type of the Port and its supertypes.
         * result = ( type.oclAsType(Classifier).allUsedInterfaces() )
         * <p>From package UML::StructuredClassifiers.</p>
         * <!-- end-model-doc -->
         * @model ordered="false"
         * @generated
         * @return {*}
         */
        basicRequired() : org.eclipse.emf.common.util.EList<uml.Interface>;
    }
}

