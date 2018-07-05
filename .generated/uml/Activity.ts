/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Activity</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * An Activity is the specification of parameterized Behavior as the coordinated sequencing of subordinate units.
     * <p>From package UML::Activities.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.Activity#getOwnedGroup}</li>
     * <li>{@link uml.Activity#getEdge}</li>
     * <li>{@link uml.Activity#getNode}</li>
     * <li>{@link uml.Activity#getVariable}</li>
     * <li>{@link uml.Activity#getGroup}</li>
     * <li>{@link uml.Activity#getOwnedNode}</li>
     * <li>{@link uml.Activity#isIsReadOnly}</li>
     * <li>{@link uml.Activity#isIsSingleExecution}</li>
     * <li>{@link uml.Activity#getPartition}</li>
     * <li>{@link uml.Activity#getStructuredNode}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getActivity()
     * @model
     * @generated
     * @class
     */
    export interface Activity extends uml.Behavior {
        /**
         * Returns the value of the '<em><b>Owned Group</b></em>' containment reference list.
         * The list contents are of type {@link uml.ActivityGroup}.
         * <!-- begin-user-doc -->
         * <p>
         * If the meaning of the '<em>Owned Group</em>' containment reference list isn't clear,
         * there really should be more of a description here...
         * </p>
         * <!-- end-user-doc -->
         * @return {*} the value of the '<em>Owned Group</em>' containment reference list.
         * @see uml.UmlPackage#getActivity_OwnedGroup()
         * @model containment="true" ordered="false"
         * extendedMetaData="name='group' kind='element'"
         * @generated
         */
        getOwnedGroup() : org.eclipse.emf.common.util.EList<uml.ActivityGroup>;

        /**
         * Returns the value of the '<em><b>Edge</b></em>' containment reference list.
         * The list contents are of type {@link uml.ActivityEdge}.
         * It is bidirectional and its opposite is '{@link uml.ActivityEdge#getActivity}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * ActivityEdges expressing flow between the nodes of the Activity.
         * <p>From package UML::Activities.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Edge</em>' containment reference list.
         * @see uml.UmlPackage#getActivity_Edge()
         * @see uml.ActivityEdge#getActivity
         * @model opposite="activity" containment="true" ordered="false"
         * @generated
         */
        getEdge() : org.eclipse.emf.common.util.EList<uml.ActivityEdge>;

        /**
         * Returns the value of the '<em><b>Node</b></em>' reference list.
         * The list contents are of type {@link uml.ActivityNode}.
         * It is bidirectional and its opposite is '{@link uml.ActivityNode#getActivity}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * ActivityNodes coordinated by the Activity.
         * <p>From package UML::Activities.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Node</em>' reference list.
         * @see uml.UmlPackage#getActivity_Node()
         * @see uml.ActivityNode#getActivity
         * @model opposite="activity" transient="true" volatile="true" derived="true" ordered="false"
         * extendedMetaData="kind='attribute'"
         * annotation="http://www.eclipse.org/emf/CDO persistent='true' filter='ownedNode'"
         * @generated
         */
        getNode() : org.eclipse.emf.common.util.EList<uml.ActivityNode>;

        /**
         * Returns the value of the '<em><b>Variable</b></em>' containment reference list.
         * The list contents are of type {@link uml.Variable}.
         * It is bidirectional and its opposite is '{@link uml.Variable#getActivityScope}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Top-level Variables defined by the Activity.
         * <p>From package UML::Activities.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Variable</em>' containment reference list.
         * @see uml.UmlPackage#getActivity_Variable()
         * @see uml.Variable#getActivityScope
         * @model opposite="activityScope" containment="true" ordered="false"
         * @generated
         */
        getVariable() : org.eclipse.emf.common.util.EList<uml.Variable>;

        /**
         * Returns the value of the '<em><b>Group</b></em>' reference list.
         * The list contents are of type {@link uml.ActivityGroup}.
         * It is bidirectional and its opposite is '{@link uml.ActivityGroup#getInActivity}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Top-level ActivityGroups in the Activity.
         * <p>From package UML::Activities.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Group</em>' reference list.
         * @see uml.UmlPackage#getActivity_Group()
         * @see uml.ActivityGroup#getInActivity
         * @model opposite="inActivity" transient="true" volatile="true" derived="true" ordered="false"
         * extendedMetaData="kind='attribute'"
         * annotation="http://www.eclipse.org/emf/CDO persistent='true' filter='ownedGroup'"
         * @generated
         */
        getGroup() : org.eclipse.emf.common.util.EList<uml.ActivityGroup>;

        /**
         * Returns the value of the '<em><b>Owned Node</b></em>' containment reference list.
         * The list contents are of type {@link uml.ActivityNode}.
         * <!-- begin-user-doc -->
         * <p>
         * If the meaning of the '<em>Owned Node</em>' containment reference list isn't clear,
         * there really should be more of a description here...
         * </p>
         * <!-- end-user-doc -->
         * @return {*} the value of the '<em>Owned Node</em>' containment reference list.
         * @see uml.UmlPackage#getActivity_OwnedNode()
         * @model containment="true" ordered="false"
         * extendedMetaData="name='node' kind='element'"
         * @generated
         */
        getOwnedNode() : org.eclipse.emf.common.util.EList<uml.ActivityNode>;

        /**
         * Returns the value of the '<em><b>Is Read Only</b></em>' attribute.
         * The default value is <code>"false"</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If true, this Activity must not make any changes to objects. The default is false (an Activity may make nonlocal changes). (This is an assertion, not an executable property. It may be used by an execution engine to optimize model execution. If the assertion is violated by the Activity, then the model is ill-formed.)
         * <p>From package UML::Activities.</p>
         * <!-- end-model-doc -->
         * @return {boolean} the value of the '<em>Is Read Only</em>' attribute.
         * @see #setIsReadOnly(boolean)
         * @see uml.UmlPackage#getActivity_IsReadOnly()
         * @model default="false" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         */
        isIsReadOnly() : boolean;

        /**
         * Sets the value of the '{@link uml.Activity#isIsReadOnly}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {boolean} value the new value of the '<em>Is Read Only</em>' attribute.
         * @see #isIsReadOnly()
         * @generated
         */
        setIsReadOnly(value : boolean);

        /**
         * Returns the value of the '<em><b>Is Single Execution</b></em>' attribute.
         * The default value is <code>"false"</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If true, all invocations of the Activity are handled by the same execution.
         * <p>From package UML::Activities.</p>
         * <!-- end-model-doc -->
         * @return {boolean} the value of the '<em>Is Single Execution</em>' attribute.
         * @see #setIsSingleExecution(boolean)
         * @see uml.UmlPackage#getActivity_IsSingleExecution()
         * @model default="false" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         */
        isIsSingleExecution() : boolean;

        /**
         * Sets the value of the '{@link uml.Activity#isIsSingleExecution}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {boolean} value the new value of the '<em>Is Single Execution</em>' attribute.
         * @see #isIsSingleExecution()
         * @generated
         */
        setIsSingleExecution(value : boolean);

        /**
         * Returns the value of the '<em><b>Partition</b></em>' reference list.
         * The list contents are of type {@link uml.ActivityPartition}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Top-level ActivityPartitions in the Activity.
         * <p>From package UML::Activities.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Partition</em>' reference list.
         * @see uml.UmlPackage#getActivity_Partition()
         * @model ordered="false"
         * @generated
         */
        getPartition() : org.eclipse.emf.common.util.EList<uml.ActivityPartition>;

        /**
         * Returns the value of the '<em><b>Structured Node</b></em>' containment reference list.
         * The list contents are of type {@link uml.StructuredActivityNode}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Top-level StructuredActivityNodes in the Activity.
         * <p>From package UML::Activities.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Structured Node</em>' containment reference list.
         * @see uml.UmlPackage#getActivity_StructuredNode()
         * @model containment="true" ordered="false"
         * @generated
         */
        getStructuredNode() : org.eclipse.emf.common.util.EList<uml.StructuredActivityNode>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A Parameter with direction other than inout must have exactly one ActivityParameterNode in an Activity.
         * ownedParameter->forAll(p |
         * p.direction <> ParameterDirectionKind::inout implies node->select(
         * oclIsKindOf(ActivityParameterNode) and oclAsType(ActivityParameterNode).parameter = p)->size()= 1)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        maximum_one_parameter_node(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A Parameter with direction inout must have exactly two ActivityParameterNodes in an Activity, at most one with incoming ActivityEdges and at most one with outgoing ActivityEdges.
         * ownedParameter->forAll(p |
         * p.direction = ParameterDirectionKind::inout implies
         * let associatedNodes : Set(ActivityNode) = node->select(
         * oclIsKindOf(ActivityParameterNode) and oclAsType(ActivityParameterNode).parameter = p) in
         * associatedNodes->size()=2 and
         * associatedNodes->select(incoming->notEmpty())->size()<=1 and
         * associatedNodes->select(outgoing->notEmpty())->size()<=1
         * )
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        maximum_two_parameter_nodes(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

