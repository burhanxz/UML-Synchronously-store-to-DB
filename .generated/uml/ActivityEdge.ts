/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Activity Edge</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * An ActivityEdge is an abstract class for directed connections between two ActivityNodes.
     * <p>From package UML::Activities.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.ActivityEdge#getActivity}</li>
     * <li>{@link uml.ActivityEdge#getGuard}</li>
     * <li>{@link uml.ActivityEdge#getInPartition}</li>
     * <li>{@link uml.ActivityEdge#getInterrupts}</li>
     * <li>{@link uml.ActivityEdge#getInStructuredNode}</li>
     * <li>{@link uml.ActivityEdge#getTarget}</li>
     * <li>{@link uml.ActivityEdge#getSource}</li>
     * <li>{@link uml.ActivityEdge#getRedefinedEdge}</li>
     * <li>{@link uml.ActivityEdge#getWeight}</li>
     * <li>{@link uml.ActivityEdge#getInGroup}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getActivityEdge()
     * @model abstract="true"
     * @generated
     * @class
     */
    export interface ActivityEdge extends uml.RedefinableElement {
        /**
         * Returns the value of the '<em><b>Activity</b></em>' container reference.
         * It is bidirectional and its opposite is '{@link uml.Activity#getEdge}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Activity containing the ActivityEdge, if it is directly owned by an Activity.
         * <p>From package UML::Activities.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Activity</em>' container reference.
         * @see #setActivity(Activity)
         * @see uml.UmlPackage#getActivityEdge_Activity()
         * @see uml.Activity#getEdge
         * @model opposite="edge" transient="false" ordered="false"
         * @generated
         */
        getActivity() : uml.Activity;

        /**
         * Sets the value of the '{@link uml.ActivityEdge#getActivity}' container reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Activity</em>' container reference.
         * @see #getActivity()
         * @generated
         */
        setActivity(value : uml.Activity);

        /**
         * Returns the value of the '<em><b>Guard</b></em>' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A ValueSpecification that is evaluated to determine if a token can traverse the ActivityEdge. If an ActivityEdge has no guard, then there is no restriction on tokens traversing the edge.
         * <p>From package UML::Activities.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Guard</em>' containment reference.
         * @see #setGuard(ValueSpecification)
         * @see uml.UmlPackage#getActivityEdge_Guard()
         * @model containment="true" ordered="false"
         * @generated
         */
        getGuard() : uml.ValueSpecification;

        /**
         * Sets the value of the '{@link uml.ActivityEdge#getGuard}' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Guard</em>' containment reference.
         * @see #getGuard()
         * @generated
         */
        setGuard(value : uml.ValueSpecification);

        /**
         * Returns the value of the '<em><b>In Partition</b></em>' reference list.
         * The list contents are of type {@link uml.ActivityPartition}.
         * It is bidirectional and its opposite is '{@link uml.ActivityPartition#getEdge}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * ActivityPartitions containing the ActivityEdge.
         * <p>From package UML::Activities.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>In Partition</em>' reference list.
         * @see uml.UmlPackage#getActivityEdge_InPartition()
         * @see uml.ActivityPartition#getEdge
         * @model opposite="edge" ordered="false"
         * @generated
         */
        getInPartition() : org.eclipse.emf.common.util.EList<uml.ActivityPartition>;

        /**
         * Returns the value of the '<em><b>Interrupts</b></em>' reference.
         * It is bidirectional and its opposite is '{@link uml.InterruptibleActivityRegion#getInterruptingEdge}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The InterruptibleActivityRegion for which this ActivityEdge is an interruptingEdge.
         * <p>From package UML::Activities.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Interrupts</em>' reference.
         * @see #setInterrupts(InterruptibleActivityRegion)
         * @see uml.UmlPackage#getActivityEdge_Interrupts()
         * @see uml.InterruptibleActivityRegion#getInterruptingEdge
         * @model opposite="interruptingEdge" ordered="false"
         * @generated
         */
        getInterrupts() : uml.InterruptibleActivityRegion;

        /**
         * Sets the value of the '{@link uml.ActivityEdge#getInterrupts}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Interrupts</em>' reference.
         * @see #getInterrupts()
         * @generated
         */
        setInterrupts(value : uml.InterruptibleActivityRegion);

        /**
         * Returns the value of the '<em><b>In Structured Node</b></em>' container reference.
         * It is bidirectional and its opposite is '{@link uml.StructuredActivityNode#getEdge}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The StructuredActivityNode containing the ActivityEdge, if it is owned by a StructuredActivityNode.
         * <p>From package UML::Activities.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>In Structured Node</em>' container reference.
         * @see #setInStructuredNode(StructuredActivityNode)
         * @see uml.UmlPackage#getActivityEdge_InStructuredNode()
         * @see uml.StructuredActivityNode#getEdge
         * @model opposite="edge" transient="false" ordered="false"
         * @generated
         */
        getInStructuredNode() : uml.StructuredActivityNode;

        /**
         * Sets the value of the '{@link uml.ActivityEdge#getInStructuredNode}' container reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>In Structured Node</em>' container reference.
         * @see #getInStructuredNode()
         * @generated
         */
        setInStructuredNode(value : uml.StructuredActivityNode);

        /**
         * Returns the value of the '<em><b>Target</b></em>' reference.
         * It is bidirectional and its opposite is '{@link uml.ActivityNode#getIncoming}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The ActivityNode to which tokens are put when they traverse the ActivityEdge.
         * <p>From package UML::Activities.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Target</em>' reference.
         * @see #setTarget(ActivityNode)
         * @see uml.UmlPackage#getActivityEdge_Target()
         * @see uml.ActivityNode#getIncoming
         * @model opposite="incoming" required="true" ordered="false"
         * @generated
         */
        getTarget() : uml.ActivityNode;

        /**
         * Sets the value of the '{@link uml.ActivityEdge#getTarget}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Target</em>' reference.
         * @see #getTarget()
         * @generated
         */
        setTarget(value : uml.ActivityNode);

        /**
         * Returns the value of the '<em><b>Source</b></em>' reference.
         * It is bidirectional and its opposite is '{@link uml.ActivityNode#getOutgoing}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The ActivityNode from which tokens are taken when they traverse the ActivityEdge.
         * <p>From package UML::Activities.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Source</em>' reference.
         * @see #setSource(ActivityNode)
         * @see uml.UmlPackage#getActivityEdge_Source()
         * @see uml.ActivityNode#getOutgoing
         * @model opposite="outgoing" required="true" ordered="false"
         * @generated
         */
        getSource() : uml.ActivityNode;

        /**
         * Sets the value of the '{@link uml.ActivityEdge#getSource}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Source</em>' reference.
         * @see #getSource()
         * @generated
         */
        setSource(value : uml.ActivityNode);

        /**
         * Returns the value of the '<em><b>Redefined Edge</b></em>' reference list.
         * The list contents are of type {@link uml.ActivityEdge}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * ActivityEdges from a generalization of the Activity containing this ActivityEdge that are redefined by this ActivityEdge.
         * <p>From package UML::Activities.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Redefined Edge</em>' reference list.
         * @see uml.UmlPackage#getActivityEdge_RedefinedEdge()
         * @model ordered="false"
         * @generated
         */
        getRedefinedEdge() : org.eclipse.emf.common.util.EList<ActivityEdge>;

        /**
         * Returns the value of the '<em><b>Weight</b></em>' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The minimum number of tokens that must traverse the ActivityEdge at the same time. If no weight is specified, this is equivalent to specifying a constant value of 1.
         * <p>From package UML::Activities.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Weight</em>' containment reference.
         * @see #setWeight(ValueSpecification)
         * @see uml.UmlPackage#getActivityEdge_Weight()
         * @model containment="true" ordered="false"
         * @generated
         */
        getWeight() : uml.ValueSpecification;

        /**
         * Sets the value of the '{@link uml.ActivityEdge#getWeight}' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Weight</em>' containment reference.
         * @see #getWeight()
         * @generated
         */
        setWeight(value : uml.ValueSpecification);

        /**
         * Returns the value of the '<em><b>In Group</b></em>' reference list.
         * The list contents are of type {@link uml.ActivityGroup}.
         * It is bidirectional and its opposite is '{@link uml.ActivityGroup#getContainedEdge}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * ActivityGroups containing the ActivityEdge.
         * <p>From package UML::Activities.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>In Group</em>' reference list.
         * @see uml.UmlPackage#getActivityEdge_InGroup()
         * @see uml.ActivityGroup#getContainedEdge
         * @model opposite="containedEdge" transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getInGroup() : org.eclipse.emf.common.util.EList<uml.ActivityGroup>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If an ActivityEdge is directly owned by an Activity, then its source and target must be directly or indirectly contained in the same Activity.
         * activity<>null implies source.containingActivity() = activity and target.containingActivity() = activity
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        source_and_target(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

