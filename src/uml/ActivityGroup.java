/**
 */
package uml;

import java.util.Map;

import org.eclipse.emf.common.util.DiagnosticChain;
import org.eclipse.emf.common.util.EList;

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
 *   <li>{@link uml.ActivityGroup#getContainedEdge <em>Contained Edge</em>}</li>
 *   <li>{@link uml.ActivityGroup#getContainedNode <em>Contained Node</em>}</li>
 *   <li>{@link uml.ActivityGroup#getInActivity <em>In Activity</em>}</li>
 *   <li>{@link uml.ActivityGroup#getSubgroup <em>Subgroup</em>}</li>
 *   <li>{@link uml.ActivityGroup#getSuperGroup <em>Super Group</em>}</li>
 * </ul>
 *
 * @see uml.UmlPackage#getActivityGroup()
 * @model abstract="true"
 * @generated
 */
public interface ActivityGroup extends NamedElement, ActivityContent {
	/**
	 * Returns the value of the '<em><b>Contained Edge</b></em>' reference list.
	 * The list contents are of type {@link uml.ActivityEdge}.
	 * It is bidirectional and its opposite is '{@link uml.ActivityEdge#getInGroup <em>In Group</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * ActivityEdges immediately contained in the ActivityGroup.
	 * <p>From package UML::Activities.</p>
	 * <!-- end-model-doc -->
	 * @return the value of the '<em>Contained Edge</em>' reference list.
	 * @see uml.UmlPackage#getActivityGroup_ContainedEdge()
	 * @see uml.ActivityEdge#getInGroup
	 * @model opposite="inGroup" transient="true" changeable="false" volatile="true" derived="true" ordered="false"
	 * @generated
	 */
	EList<ActivityEdge> getContainedEdge();

	/**
	 * Returns the value of the '<em><b>Contained Node</b></em>' reference list.
	 * The list contents are of type {@link uml.ActivityNode}.
	 * It is bidirectional and its opposite is '{@link uml.ActivityNode#getInGroup <em>In Group</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * ActivityNodes immediately contained in the ActivityGroup.
	 * <p>From package UML::Activities.</p>
	 * <!-- end-model-doc -->
	 * @return the value of the '<em>Contained Node</em>' reference list.
	 * @see uml.UmlPackage#getActivityGroup_ContainedNode()
	 * @see uml.ActivityNode#getInGroup
	 * @model opposite="inGroup" transient="true" changeable="false" volatile="true" derived="true" ordered="false"
	 * @generated
	 */
	EList<ActivityNode> getContainedNode();

	/**
	 * Returns the value of the '<em><b>In Activity</b></em>' reference.
	 * It is bidirectional and its opposite is '{@link uml.Activity#getGroup <em>Group</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * The Activity containing the ActivityGroup, if it is directly owned by an Activity.
	 * <p>From package UML::Activities.</p>
	 * <!-- end-model-doc -->
	 * @return the value of the '<em>In Activity</em>' reference.
	 * @see #setInActivity(Activity)
	 * @see uml.UmlPackage#getActivityGroup_InActivity()
	 * @see uml.Activity#getGroup
	 * @model opposite="group" transient="true" volatile="true" derived="true" ordered="false"
	 * @generated
	 */
	Activity getInActivity();

	/**
	 * Sets the value of the '{@link uml.ActivityGroup#getInActivity <em>In Activity</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>In Activity</em>' reference.
	 * @see #getInActivity()
	 * @generated
	 */
	void setInActivity(Activity value);

	/**
	 * Returns the value of the '<em><b>Subgroup</b></em>' reference list.
	 * The list contents are of type {@link uml.ActivityGroup}.
	 * It is bidirectional and its opposite is '{@link uml.ActivityGroup#getSuperGroup <em>Super Group</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * Other ActivityGroups immediately contained in this ActivityGroup.
	 * <p>From package UML::Activities.</p>
	 * <!-- end-model-doc -->
	 * @return the value of the '<em>Subgroup</em>' reference list.
	 * @see uml.UmlPackage#getActivityGroup_Subgroup()
	 * @see uml.ActivityGroup#getSuperGroup
	 * @model opposite="superGroup" transient="true" changeable="false" volatile="true" derived="true" ordered="false"
	 * @generated
	 */
	EList<ActivityGroup> getSubgroup();

	/**
	 * Returns the value of the '<em><b>Super Group</b></em>' reference.
	 * It is bidirectional and its opposite is '{@link uml.ActivityGroup#getSubgroup <em>Subgroup</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * The ActivityGroup immediately containing this ActivityGroup, if it is directly owned by another ActivityGroup.
	 * <p>From package UML::Activities.</p>
	 * <!-- end-model-doc -->
	 * @return the value of the '<em>Super Group</em>' reference.
	 * @see uml.UmlPackage#getActivityGroup_SuperGroup()
	 * @see uml.ActivityGroup#getSubgroup
	 * @model opposite="subgroup" transient="true" changeable="false" volatile="true" derived="true" ordered="false"
	 * @generated
	 */
	ActivityGroup getSuperGroup();

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * All containedNodes and containeEdges of an ActivityGroup must be in the same Activity as the group.
	 * containedNode->forAll(activity = self.containingActivity()) and 
	 * containedEdge->forAll(activity = self.containingActivity())
	 * @param diagnostics The chain of diagnostics to which problems are to be appended.
	 * @param context The cache of context-specific information.
	 * <!-- end-model-doc -->
	 * @model
	 * @generated
	 */
	boolean nodes_and_edges(DiagnosticChain diagnostics, Map<Object, Object> context);

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * No containedNode or containedEdge of an ActivityGroup may be contained by its subgroups or its superGroups, transitively.
	 * subgroup->closure(subgroup).containedNode->excludesAll(containedNode) and
	 * superGroup->closure(superGroup).containedNode->excludesAll(containedNode) and 
	 * subgroup->closure(subgroup).containedEdge->excludesAll(containedEdge) and 
	 * superGroup->closure(superGroup).containedEdge->excludesAll(containedEdge)
	 * @param diagnostics The chain of diagnostics to which problems are to be appended.
	 * @param context The cache of context-specific information.
	 * <!-- end-model-doc -->
	 * @model
	 * @generated
	 */
	boolean not_contained(DiagnosticChain diagnostics, Map<Object, Object> context);

} // ActivityGroup
