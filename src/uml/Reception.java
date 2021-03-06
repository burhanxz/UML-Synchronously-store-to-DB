/**
 */
package uml;

import java.util.Map;

import org.eclipse.emf.common.util.DiagnosticChain;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Reception</b></em>'.
 * <!-- end-user-doc -->
 *
 * <!-- begin-model-doc -->
 * A Reception is a declaration stating that a Classifier is prepared to react to the receipt of a Signal.
 * <p>From package UML::SimpleClassifiers.</p>
 * <!-- end-model-doc -->
 *
 * <p>
 * The following features are supported:
 * </p>
 * <ul>
 *   <li>{@link uml.Reception#getSignal <em>Signal</em>}</li>
 * </ul>
 *
 * @see uml.UmlPackage#getReception()
 * @model
 * @generated
 */
public interface Reception extends BehavioralFeature {
	/**
	 * Returns the value of the '<em><b>Signal</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * The Signal that this Reception handles.
	 * <p>From package UML::SimpleClassifiers.</p>
	 * <!-- end-model-doc -->
	 * @return the value of the '<em>Signal</em>' reference.
	 * @see #setSignal(Signal)
	 * @see uml.UmlPackage#getReception_Signal()
	 * @model required="true" ordered="false"
	 * @generated
	 */
	Signal getSignal();

	/**
	 * Sets the value of the '{@link uml.Reception#getSignal <em>Signal</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Signal</em>' reference.
	 * @see #getSignal()
	 * @generated
	 */
	void setSignal(Signal value);

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * A Reception has the same name as its signal
	 * name = signal.name
	 * @param diagnostics The chain of diagnostics to which problems are to be appended.
	 * @param context The cache of context-specific information.
	 * <!-- end-model-doc -->
	 * @model
	 * @generated
	 */
	boolean same_name_as_signal(DiagnosticChain diagnostics, Map<Object, Object> context);

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * <!-- begin-model-doc -->
	 * A Reception's parameters match the ownedAttributes of its signal by name, type, and multiplicity
	 * signal.ownedAttribute->size() = ownedParameter->size() and
	 * Sequence{1..signal.ownedAttribute->size()}->forAll( i | 
	 *     ownedParameter->at(i).direction = ParameterDirectionKind::_'in' and 
	 *     ownedParameter->at(i).name = signal.ownedAttribute->at(i).name and
	 *     ownedParameter->at(i).type = signal.ownedAttribute->at(i).type and
	 *     ownedParameter->at(i).lowerBound() = signal.ownedAttribute->at(i).lowerBound() and
	 *     ownedParameter->at(i).upperBound() = signal.ownedAttribute->at(i).upperBound()
	 * )
	 * @param diagnostics The chain of diagnostics to which problems are to be appended.
	 * @param context The cache of context-specific information.
	 * <!-- end-model-doc -->
	 * @model
	 * @generated
	 */
	boolean same_structure_as_signal(DiagnosticChain diagnostics, Map<Object, Object> context);

} // Reception
