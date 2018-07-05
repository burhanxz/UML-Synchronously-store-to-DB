/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Node</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A Node is computational resource upon which artifacts may be deployed for execution. Nodes can be interconnected through communication paths to define network structures.
     * <p>From package UML::Deployments.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.Node#getNestedNode}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getNode()
     * @model
     * @generated
     * @class
     */
    export interface Node extends uml.Class, uml.DeploymentTarget {
        /**
         * Returns the value of the '<em><b>Nested Node</b></em>' containment reference list.
         * The list contents are of type {@link uml.Node}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Nodes that are defined (nested) within the Node.
         * <p>From package UML::Deployments.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Nested Node</em>' containment reference list.
         * @see uml.UmlPackage#getNode_NestedNode()
         * @model containment="true" ordered="false"
         * @generated
         */
        getNestedNode() : org.eclipse.emf.common.util.EList<Node>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The internal structure of a Node (if defined) consists solely of parts of type Node.
         * part->forAll(oclIsKindOf(Node))
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        internal_structure(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Creates a (binary) communication path between this node and the specified other node, with the specified navigabilities, aggregations, names, lower bounds, and upper bounds, and owned by this node's nearest package.
         * @param {boolean} end1IsNavigable The navigability for the first end of the new communication path.
         * @param {uml.AggregationKind} end1Aggregation The aggregation for the first end of the new communication path.
         * @param {string} end1Name The name for the first end of the new communication path.
         * @param {number} end1Lower The lower bound for the first end of the new communication path.
         * @param {number} end1Upper The upper bound for the first end of the new communication path.
         * @param {*} end1Node The type for the first end of the new communication path.
         * @param {boolean} end2IsNavigable The navigability for the second end of the new communication path.
         * @param {uml.AggregationKind} end2Aggregation The aggregation for the second end of the new communication path.
         * @param {string} end2Name The name for the second end of the new communication path.
         * @param {number} end2Lower The lower bound for the second end of the new communication path.
         * @param {number} end2Upper The upper bound for the second end of the new communication path.
         * <!-- end-model-doc -->
         * @model required="true" ordered="false" end1IsNavigableDataType="types.Boolean" end1IsNavigableRequired="true" end1IsNavigableOrdered="false" end1AggregationRequired="true" end1AggregationOrdered="false" end1NameDataType="types.String" end1NameRequired="true" end1NameOrdered="false" end1LowerDataType="types.Integer" end1LowerRequired="true" end1LowerOrdered="false" end1UpperDataType="types.UnlimitedNatural" end1UpperRequired="true" end1UpperOrdered="false" end1NodeRequired="true" end1NodeOrdered="false" end2IsNavigableDataType="types.Boolean" end2IsNavigableRequired="true" end2IsNavigableOrdered="false" end2AggregationRequired="true" end2AggregationOrdered="false" end2NameDataType="types.String" end2NameRequired="true" end2NameOrdered="false" end2LowerDataType="types.Integer" end2LowerRequired="true" end2LowerOrdered="false" end2UpperDataType="types.UnlimitedNatural" end2UpperRequired="true" end2UpperOrdered="false"
         * @generated
         * @return {*}
         */
        createCommunicationPath(end1IsNavigable : boolean, end1Aggregation : uml.AggregationKind, end1Name : string, end1Lower : number, end1Upper : number, end1Node : Node, end2IsNavigable : boolean, end2Aggregation : uml.AggregationKind, end2Name : string, end2Lower : number, end2Upper : number) : uml.CommunicationPath;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Retrieves the communication paths in which this node is involved.
         * <!-- end-model-doc -->
         * @model kind="operation" ordered="false"
         * @generated
         * @return {*}
         */
        getCommunicationPaths() : org.eclipse.emf.common.util.EList<uml.CommunicationPath>;
    }
}

