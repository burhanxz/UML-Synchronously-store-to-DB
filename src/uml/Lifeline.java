/**
 */
package uml;

import java.util.Map;

import org.eclipse.emf.common.util.DiagnosticChain;
import org.eclipse.emf.common.util.EList;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Lifeline</b></em>'.
 * <!-- end-user-doc -->
 *
 * <!-- begin-model-doc -->
 * A Lifeline represents an individual participant in the Interaction. While parts and structural features may have multiplicity greater than 1, Lifelines represent only one interacting entity.
 * <p>From package UML::Interactions.</p>
 * <!-- end-model-doc -->
 *
 * <p>
 * The following features are supported:
 * </p>
 * <ul>
 *   <li>{@link uml.Lifeline#getDecomposedAs <em>Decomposed As</em>}</li>
 *   <li>{@link uml.Lifeline#getInteraction <em>Interaction</em>}</li>
 *   <li>{@link uml.Lifeline#getRepresents <em>Represents</em>}</li>
 *   <li>{@link uml.Lifeline#getSelector <em>Selector</em>}</li>
 *   <li>{@link uml.Lifeline#getCoveredBy <em>Covered By</em>}</li>
 * </ul>
 *
 * @see uml.UmlPackage#getLifeline()
 * @model
 * @generated
 */
public interface Lifeline extends NamedElement {
	/**
	 * Returns the value of the '<em><b>Decomposed As</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * References the Interaction that represents the decomposition.
	 * <p>From package UML::Interactions.</p>
	 * <!-- end-model-doc -->
	 * @return the value of the '<em>Decomposed As</em>' reference.
	 * @see #setDecomposedAs(PartDecomposition)
	 * @see uml.UmlPackage#getLifeline_DecomposedAs()
	 * @model ordered="false"
	 * @generated
	 */
	PartDecomposition getDecomposedAs();

	/**
	 * Sets the value of the '{@link uml.Lifeline#getDecomposedAs <em>Decomposed As</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Decomposed As</em>' reference.
	 * @see #getDecomposedAs()
	 * @generated
	 */
	void setDecomposedAs(PartDecomposition value);

	/**
	 * Returns the value of the '<em><b>Interaction</b></em>' container reference.
	 * It is bidirectional and its opposite is '{@link uml.Interaction#getLifeline <em>Lifeline</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * References the Interaction enclosing this Lifeline.
	 * <p>From package UML::Interactions.</p>
	 * <!-- end-model-doc -->
	 * @return the value of the '<em>Interaction</em>' container reference.
	 * @see #setInteraction(Interaction)
	 * @see uml.UmlPackage#getLifeline_Interaction()
	 * @see uml.Interaction#getLifeline
	 * @model opposite="lifeline" required="true" transient="false" ordered="false"
	 * @generated
	 */
	Interaction getInteraction();

	/**
	 * Sets the value of the '{@link uml.Lifeline#getInteraction <em>Interaction</em>}' container reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Interaction</em>' container reference.
	 * @see #getInteraction()
	 * @generated
	 */
	void setInteraction(Interaction value);

	/**
	 * Returns the value of the '<em><b>Represents</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * References the ConnectableElement within the classifier that contains the enclosing interaction.
	 * <p>From package UML::Interactions.</p>
	 * <!-- end-model-doc -->
	 * @return the value of the '<em>Represents</em>' reference.
	 * @see #setRepresents(ConnectableElement)
	 * @see uml.UmlPackage#getLifeline_Represents()
	 * @model ordered="false"
	 * @generated
	 */
	ConnectableElement getRepresents();

	/**
	 * Sets the value of the '{@link uml.Lifeline#getRepresents <em>Represents</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Represents</em>' reference.
	 * @see #getRepresents()
	 * @generated
	 */
	void setRepresents(ConnectableElement value);

	/**
	 * Returns the value of the '<em><b>Selector</b></em>' containment reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * If the referenced ConnectableElement is multivalued, then this specifies the specific individual part within that set.
	 * <p>From package UML::Interactions.</p>
	 * <!-- end-model-doc -->
	 * @return the value of the '<em>Selector</em>' containment reference.
	 * @see #setSelector(ValueSpecification)
	 * @see uml.UmlPackage#getLifeline_Selector()
	 * @model containment="true" ordered="false"
	 * @generated
	 */
	ValueSpecification getSelector();

	/**
	 * Sets the value of the '{@link uml.Lifeline#getSelector <em>Selector</em>}' containment reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Selector</em>' containment reference.
	 * @see #getSelector()
	 * @generated
	 */
	void setSelector(ValueSpecification value);

	/**
	 * Returns the value of the '<em><b>Covered By</b></em>' reference list.
	 * The list contents are of type {@link uml.InteractionFragment}.
	 * It is bidirectional and its opposite is '{@link uml.InteractionFragment#getCovered <em>Covered</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * References the InteractionFragments in which this Lifeline takes part.
	 * <p>From package UML::Interactions.</p>
	 * <!-- end-model-doc -->
	 * @return the value of the '<em>Covered By</em>' reference list.
	 * @see uml.UmlPackage#getLifeline_CoveredBy()
	 * @see uml.InteractionFragment#getCovered
	 * @model opposite="covered" ordered="false"
	 * @generated
	 */
	EList<InteractionFragment> getCoveredBy();

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * The selector for a Lifeline must only be specified if the referenced Part is multivalued.
	 *  self.selector->notEmpty() = (self.represents.oclIsKindOf(MultiplicityElement) and self.represents.oclAsType(MultiplicityElement).isMultivalued())
	 * @param diagnostics The chain of diagnostics to which problems are to be appended.
	 * @param context The cache of context-specific information.
	 * <!-- end-model-doc -->
	 * @model
	 * @generated
	 */
	boolean selector_specified(DiagnosticChain diagnostics, Map<Object, Object> context);

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * If a lifeline is in an Interaction referred to by an InteractionUse in an enclosing Interaction,  and that lifeline is common with another lifeline in an Interaction referred to by another InteractonUse within that same enclosing Interaction, it must be common to a lifeline within that enclosing Interaction. By common Lifelines we mean Lifelines with the same selector and represents associations.
	 * let intUses : Set(InteractionUse) = interaction.interactionUse  in 
	 * intUses->forAll
	 * ( iuse : InteractionUse | 
	 * let usingInteraction : Set(Interaction)  = iuse.enclosingInteraction->asSet()
	 * ->union(
	 * iuse.enclosingOperand.combinedFragment->asSet()->closure(enclosingOperand.combinedFragment).enclosingInteraction->asSet()
	 *                ) 
	 * in
	 * let peerUses : Set(InteractionUse) = usingInteraction.fragment->select(oclIsKindOf(InteractionUse)).oclAsType(InteractionUse)->asSet()
	 * ->union(
	 * usingInteraction.fragment->select(oclIsKindOf(CombinedFragment)).oclAsType(CombinedFragment)->asSet()
	 * ->closure(operand.fragment->select(oclIsKindOf(CombinedFragment)).oclAsType(CombinedFragment)).operand.fragment->
	 * select(oclIsKindOf(InteractionUse)).oclAsType(InteractionUse)->asSet()
	 *                )->excluding(iuse)
	 *  in
	 * peerUses->forAll( peerUse : InteractionUse |
	 *  peerUse.refersTo.lifeline->forAll( l : Lifeline | (l.represents = self.represents and 
	 *  ( self.selector.oclIsKindOf(LiteralString) implies
	 *   l.selector.oclIsKindOf(LiteralString) and 
	 *   self.selector.oclAsType(LiteralString).value = l.selector.oclAsType(LiteralString).value )
	 *   and 
	 * ( self.selector.oclIsKindOf(LiteralInteger) implies
	 *   l.selector.oclIsKindOf(LiteralInteger) and 
	 *   self.selector.oclAsType(LiteralInteger).value = l.selector.oclAsType(LiteralInteger).value )
	 * )  
	 * implies
	 *  usingInteraction.lifeline->exists(represents = self.represents and
	 *  ( self.selector.oclIsKindOf(LiteralString) implies
	 *   l.selector.oclIsKindOf(LiteralString) and 
	 *   self.selector.oclAsType(LiteralString).value = l.selector.oclAsType(LiteralString).value )
	 * and 
	 * ( self.selector.oclIsKindOf(LiteralInteger) implies
	 *   l.selector.oclIsKindOf(LiteralInteger) and 
	 *   self.selector.oclAsType(LiteralInteger).value = l.selector.oclAsType(LiteralInteger).value )
	 * )
	 *                                                 )
	 *                     )
	 * )
	 * @param diagnostics The chain of diagnostics to which problems are to be appended.
	 * @param context The cache of context-specific information.
	 * <!-- end-model-doc -->
	 * @model
	 * @generated
	 */
	boolean interaction_uses_share_lifeline(DiagnosticChain diagnostics, Map<Object, Object> context);

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * The classifier containing the referenced ConnectableElement must be the same classifier, or an ancestor, of the classifier that contains the interaction enclosing this lifeline.
	 * represents.namespace->closure(namespace)->includes(interaction._'context')
	 * @param diagnostics The chain of diagnostics to which problems are to be appended.
	 * @param context The cache of context-specific information.
	 * <!-- end-model-doc -->
	 * @model
	 * @generated
	 */
	boolean same_classifier(DiagnosticChain diagnostics, Map<Object, Object> context);

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * The selector value, if present, must be a LiteralString or a LiteralInteger
	 * self.selector->notEmpty() implies 
	 * self.selector.oclIsKindOf(LiteralInteger) or 
	 * self.selector.oclIsKindOf(LiteralString)
	 * @param diagnostics The chain of diagnostics to which problems are to be appended.
	 * @param context The cache of context-specific information.
	 * <!-- end-model-doc -->
	 * @model
	 * @generated
	 */
	boolean selector_int_or_string(DiagnosticChain diagnostics, Map<Object, Object> context);

} // Lifeline
