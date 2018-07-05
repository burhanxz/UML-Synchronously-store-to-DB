/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Connector</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A Connector specifies links that enables communication between two or more instances. In contrast to Associations, which specify links between any instance of the associated Classifiers, Connectors specify links between instances playing the connected parts only.
     * <p>From package UML::StructuredClassifiers.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.Connector#getContract}</li>
     * <li>{@link uml.Connector#getEnd}</li>
     * <li>{@link uml.Connector#getKind}</li>
     * <li>{@link uml.Connector#getRedefinedConnector}</li>
     * <li>{@link uml.Connector#getType}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getConnector()
     * @model
     * @generated
     * @class
     */
    export interface Connector extends uml.Feature {
        /**
         * Returns the value of the '<em><b>Contract</b></em>' reference list.
         * The list contents are of type {@link uml.Behavior}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The set of Behaviors that specify the valid interaction patterns across the Connector.
         * <p>From package UML::StructuredClassifiers.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Contract</em>' reference list.
         * @see uml.UmlPackage#getConnector_Contract()
         * @model ordered="false"
         * @generated
         */
        getContract() : org.eclipse.emf.common.util.EList<uml.Behavior>;

        /**
         * Returns the value of the '<em><b>End</b></em>' containment reference list.
         * The list contents are of type {@link uml.ConnectorEnd}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A Connector has at least two ConnectorEnds, each representing the participation of instances of the Classifiers typing the ConnectableElements attached to the end. The set of ConnectorEnds is ordered.
         * <p>From package UML::StructuredClassifiers.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>End</em>' containment reference list.
         * @see uml.UmlPackage#getConnector_End()
         * @model containment="true" lower="2"
         * @generated
         */
        getEnd() : org.eclipse.emf.common.util.EList<uml.ConnectorEnd>;

        /**
         * Returns the value of the '<em><b>Kind</b></em>' attribute.
         * The literals are from the enumeration {@link uml.ConnectorKind}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Indicates the kind of Connector. This is derived: a Connector with one or more ends connected to a Port which is not on a Part and which is not a behavior port is a delegation; otherwise it is an assembly.
         * <p>From package UML::StructuredClassifiers.</p>
         * <!-- end-model-doc -->
         * @return {uml.ConnectorKind} the value of the '<em>Kind</em>' attribute.
         * @see uml.ConnectorKind
         * @see uml.UmlPackage#getConnector_Kind()
         * @model required="true" transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getKind() : uml.ConnectorKind;

        /**
         * Returns the value of the '<em><b>Redefined Connector</b></em>' reference list.
         * The list contents are of type {@link uml.Connector}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A Connector may be redefined when its containing Classifier is specialized. The redefining Connector may have a type that specializes the type of the redefined Connector. The types of the ConnectorEnds of the redefining Connector may specialize the types of the ConnectorEnds of the redefined Connector. The properties of the ConnectorEnds of the redefining Connector may be replaced.
         * <p>From package UML::StructuredClassifiers.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Redefined Connector</em>' reference list.
         * @see uml.UmlPackage#getConnector_RedefinedConnector()
         * @model ordered="false"
         * @generated
         */
        getRedefinedConnector() : org.eclipse.emf.common.util.EList<Connector>;

        /**
         * Returns the value of the '<em><b>Type</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * An optional Association that classifies links corresponding to this Connector.
         * <p>From package UML::StructuredClassifiers.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Type</em>' reference.
         * @see #setType(Association)
         * @see uml.UmlPackage#getConnector_Type()
         * @model ordered="false"
         * @generated
         */
        getType() : uml.Association;

        /**
         * Sets the value of the '{@link uml.Connector#getType}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Type</em>' reference.
         * @see #getType()
         * @generated
         */
        setType(value : uml.Association);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The types of the ConnectableElements that the ends of a Connector are attached to must conform to the types of the ends of the Association that types the Connector, if any.
         * type<>null implies
         * let noOfEnds : Integer = end->size() in
         * (type.memberEnd->size() = noOfEnds) and Sequence{1..noOfEnds}->forAll(i | end->at(i).role.type.conformsTo(type.memberEnd->at(i).type))
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        types(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The ConnectableElements attached as roles to each ConnectorEnd owned by a Connector must be owned or inherited roles of the Classifier that owned the Connector, or they must be Ports of such roles.
         * structuredClassifier <> null
         * and
         * end->forAll( e | structuredClassifier.allRoles()->includes(e.role)
         * or
         * e.role.oclIsKindOf(Port) and structuredClassifier.allRoles()->includes(e.partWithPort))
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        roles(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

