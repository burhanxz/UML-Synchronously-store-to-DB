/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Activity Node</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * ActivityNode is an abstract class for points in the flow of an Activity connected by ActivityEdges.
     * <p>From package UML::Activities.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.ActivityNode#getActivity}</li>
     * <li>{@link uml.ActivityNode#getInGroup}</li>
     * <li>{@link uml.ActivityNode#getInInterruptibleRegion}</li>
     * <li>{@link uml.ActivityNode#getInStructuredNode}</li>
     * <li>{@link uml.ActivityNode#getIncoming}</li>
     * <li>{@link uml.ActivityNode#getOutgoing}</li>
     * <li>{@link uml.ActivityNode#getRedefinedNode}</li>
     * <li>{@link uml.ActivityNode#getInPartition}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getActivityNode()
     * @model abstract="true"
     * @generated
     * @class
     */
    export interface ActivityNode extends uml.RedefinableElement, uml.ActivityContent {
        /**
         * Returns the value of the '<em><b>Activity</b></em>' reference.
         * It is bidirectional and its opposite is '{@link uml.Activity#getNode}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Activity containing the ActivityNode, if it is directly owned by an Activity.
         * <p>From package UML::Activities.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Activity</em>' reference.
         * @see #setActivity(Activity)
         * @see uml.UmlPackage#getActivityNode_Activity()
         * @see uml.Activity#getNode
         * @model opposite="node" transient="true" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getActivity() : uml.Activity;

        /**
         * Sets the value of the '{@link uml.ActivityNode#getActivity}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Activity</em>' reference.
         * @see #getActivity()
         * @generated
         */
        setActivity(value : uml.Activity);

        /**
         * Returns the value of the '<em><b>In Group</b></em>' reference list.
         * The list contents are of type {@link uml.ActivityGroup}.
         * It is bidirectional and its opposite is '{@link uml.ActivityGroup#getContainedNode}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * ActivityGroups containing the ActivityNode.
         * <p>From package UML::Activities.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>In Group</em>' reference list.
         * @see uml.UmlPackage#getActivityNode_InGroup()
         * @see uml.ActivityGroup#getContainedNode
         * @model opposite="containedNode" transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getInGroup() : org.eclipse.emf.common.util.EList<uml.ActivityGroup>;

        /**
         * Returns the value of the '<em><b>In Interruptible Region</b></em>' reference list.
         * The list contents are of type {@link uml.InterruptibleActivityRegion}.
         * It is bidirectional and its opposite is '{@link uml.InterruptibleActivityRegion#getNode}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * InterruptibleActivityRegions containing the ActivityNode.
         * <p>From package UML::Activities.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>In Interruptible Region</em>' reference list.
         * @see uml.UmlPackage#getActivityNode_InInterruptibleRegion()
         * @see uml.InterruptibleActivityRegion#getNode
         * @model opposite="node" ordered="false"
         * @generated
         */
        getInInterruptibleRegion() : org.eclipse.emf.common.util.EList<uml.InterruptibleActivityRegion>;

        /**
         * Returns the value of the '<em><b>In Structured Node</b></em>' container reference.
         * It is bidirectional and its opposite is '{@link uml.StructuredActivityNode#getNode}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The StructuredActivityNode containing the ActvityNode, if it is directly owned by a StructuredActivityNode.
         * <p>From package UML::Activities.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>In Structured Node</em>' container reference.
         * @see #setInStructuredNode(StructuredActivityNode)
         * @see uml.UmlPackage#getActivityNode_InStructuredNode()
         * @see uml.StructuredActivityNode#getNode
         * @model opposite="node" transient="false" ordered="false"
         * @generated
         */
        getInStructuredNode() : uml.StructuredActivityNode;

        /**
         * Sets the value of the '{@link uml.ActivityNode#getInStructuredNode}' container reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>In Structured Node</em>' container reference.
         * @see #getInStructuredNode()
         * @generated
         */
        setInStructuredNode(value : uml.StructuredActivityNode);

        /**
         * Returns the value of the '<em><b>Incoming</b></em>' reference list.
         * The list contents are of type {@link uml.ActivityEdge}.
         * It is bidirectional and its opposite is '{@link uml.ActivityEdge#getTarget}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * ActivityEdges that have the ActivityNode as their target.
         * <p>From package UML::Activities.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Incoming</em>' reference list.
         * @see uml.UmlPackage#getActivityNode_Incoming()
         * @see uml.ActivityEdge#getTarget
         * @model opposite="target" ordered="false"
         * @generated
         */
        getIncoming() : org.eclipse.emf.common.util.EList<uml.ActivityEdge>;

        /**
         * Returns the value of the '<em><b>Outgoing</b></em>' reference list.
         * The list contents are of type {@link uml.ActivityEdge}.
         * It is bidirectional and its opposite is '{@link uml.ActivityEdge#getSource}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * ActivityEdges that have the ActivityNode as their source.
         * <p>From package UML::Activities.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Outgoing</em>' reference list.
         * @see uml.UmlPackage#getActivityNode_Outgoing()
         * @see uml.ActivityEdge#getSource
         * @model opposite="source" ordered="false"
         * @generated
         */
        getOutgoing() : org.eclipse.emf.common.util.EList<uml.ActivityEdge>;

        /**
         * Returns the value of the '<em><b>Redefined Node</b></em>' reference list.
         * The list contents are of type {@link uml.ActivityNode}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * ActivityNodes from a generalization of the Activity containining this ActivityNode that are redefined by this ActivityNode.
         * <p>From package UML::Activities.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Redefined Node</em>' reference list.
         * @see uml.UmlPackage#getActivityNode_RedefinedNode()
         * @model ordered="false"
         * @generated
         */
        getRedefinedNode() : org.eclipse.emf.common.util.EList<ActivityNode>;

        /**
         * Returns the value of the '<em><b>In Partition</b></em>' reference list.
         * The list contents are of type {@link uml.ActivityPartition}.
         * It is bidirectional and its opposite is '{@link uml.ActivityPartition#getNode}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * ActivityPartitions containing the ActivityNode.
         * <p>From package UML::Activities.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>In Partition</em>' reference list.
         * @see uml.UmlPackage#getActivityNode_InPartition()
         * @see uml.ActivityPartition#getNode
         * @model opposite="node" ordered="false"
         * @generated
         */
        getInPartition() : org.eclipse.emf.common.util.EList<uml.ActivityPartition>;
    }
}

