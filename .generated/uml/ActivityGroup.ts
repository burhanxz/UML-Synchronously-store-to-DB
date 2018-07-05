/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Activity Group</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * ActivityGroup is an abstract class for defining sets of ActivityNodes and ActivityEdges in an Activity.
     * <p>From package UML::Activities.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.ActivityGroup#getContainedEdge}</li>
     * <li>{@link uml.ActivityGroup#getContainedNode}</li>
     * <li>{@link uml.ActivityGroup#getInActivity}</li>
     * <li>{@link uml.ActivityGroup#getSubgroup}</li>
     * <li>{@link uml.ActivityGroup#getSuperGroup}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getActivityGroup()
     * @model abstract="true"
     * @generated
     * @class
     */
    export interface ActivityGroup extends uml.NamedElement, uml.ActivityContent {
        /**
         * Returns the value of the '<em><b>Contained Edge</b></em>' reference list.
         * The list contents are of type {@link uml.ActivityEdge}.
         * It is bidirectional and its opposite is '{@link uml.ActivityEdge#getInGroup}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * ActivityEdges immediately contained in the ActivityGroup.
         * <p>From package UML::Activities.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Contained Edge</em>' reference list.
         * @see uml.UmlPackage#getActivityGroup_ContainedEdge()
         * @see uml.ActivityEdge#getInGroup
         * @model opposite="inGroup" transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getContainedEdge() : org.eclipse.emf.common.util.EList<uml.ActivityEdge>;

        /**
         * Returns the value of the '<em><b>Contained Node</b></em>' reference list.
         * The list contents are of type {@link uml.ActivityNode}.
         * It is bidirectional and its opposite is '{@link uml.ActivityNode#getInGroup}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * ActivityNodes immediately contained in the ActivityGroup.
         * <p>From package UML::Activities.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Contained Node</em>' reference list.
         * @see uml.UmlPackage#getActivityGroup_ContainedNode()
         * @see uml.ActivityNode#getInGroup
         * @model opposite="inGroup" transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getContainedNode() : org.eclipse.emf.common.util.EList<uml.ActivityNode>;

        /**
         * Returns the value of the '<em><b>In Activity</b></em>' reference.
         * It is bidirectional and its opposite is '{@link uml.Activity#getGroup}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Activity containing the ActivityGroup, if it is directly owned by an Activity.
         * <p>From package UML::Activities.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>In Activity</em>' reference.
         * @see #setInActivity(Activity)
         * @see uml.UmlPackage#getActivityGroup_InActivity()
         * @see uml.Activity#getGroup
         * @model opposite="group" transient="true" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getInActivity() : uml.Activity;

        /**
         * Sets the value of the '{@link uml.ActivityGroup#getInActivity}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>In Activity</em>' reference.
         * @see #getInActivity()
         * @generated
         */
        setInActivity(value : uml.Activity);

        /**
         * Returns the value of the '<em><b>Subgroup</b></em>' reference list.
         * The list contents are of type {@link uml.ActivityGroup}.
         * It is bidirectional and its opposite is '{@link uml.ActivityGroup#getSuperGroup}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Other ActivityGroups immediately contained in this ActivityGroup.
         * <p>From package UML::Activities.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Subgroup</em>' reference list.
         * @see uml.UmlPackage#getActivityGroup_Subgroup()
         * @see uml.ActivityGroup#getSuperGroup
         * @model opposite="superGroup" transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getSubgroup() : org.eclipse.emf.common.util.EList<ActivityGroup>;

        /**
         * Returns the value of the '<em><b>Super Group</b></em>' reference.
         * It is bidirectional and its opposite is '{@link uml.ActivityGroup#getSubgroup}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The ActivityGroup immediately containing this ActivityGroup, if it is directly owned by another ActivityGroup.
         * <p>From package UML::Activities.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Super Group</em>' reference.
         * @see uml.UmlPackage#getActivityGroup_SuperGroup()
         * @see uml.ActivityGroup#getSubgroup
         * @model opposite="subgroup" transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getSuperGroup() : ActivityGroup;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * All containedNodes and containeEdges of an ActivityGroup must be in the same Activity as the group.
         * containedNode->forAll(activity = self.containingActivity()) and
         * containedEdge->forAll(activity = self.containingActivity())
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        nodes_and_edges(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * No containedNode or containedEdge of an ActivityGroup may be contained by its subgroups or its superGroups, transitively.
         * subgroup->closure(subgroup).containedNode->excludesAll(containedNode) and
         * superGroup->closure(superGroup).containedNode->excludesAll(containedNode) and
         * subgroup->closure(subgroup).containedEdge->excludesAll(containedEdge) and
         * superGroup->closure(superGroup).containedEdge->excludesAll(containedEdge)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        not_contained(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

