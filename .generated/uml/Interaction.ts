/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Interaction</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * An Interaction is a unit of Behavior that focuses on the observable exchange of information between connectable elements.
     * <p>From package UML::Interactions.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.Interaction#getLifeline}</li>
     * <li>{@link uml.Interaction#getFragment}</li>
     * <li>{@link uml.Interaction#getAction}</li>
     * <li>{@link uml.Interaction#getFormalGate}</li>
     * <li>{@link uml.Interaction#getMessage}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getInteraction()
     * @model
     * @generated
     * @class
     */
    export interface Interaction extends uml.Behavior, uml.InteractionFragment {
        /**
         * Returns the value of the '<em><b>Lifeline</b></em>' containment reference list.
         * The list contents are of type {@link uml.Lifeline}.
         * It is bidirectional and its opposite is '{@link uml.Lifeline#getInteraction}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Specifies the participants in this Interaction.
         * <p>From package UML::Interactions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Lifeline</em>' containment reference list.
         * @see uml.UmlPackage#getInteraction_Lifeline()
         * @see uml.Lifeline#getInteraction
         * @model opposite="interaction" containment="true" ordered="false"
         * @generated
         */
        getLifeline() : org.eclipse.emf.common.util.EList<uml.Lifeline>;

        /**
         * Returns the value of the '<em><b>Fragment</b></em>' containment reference list.
         * The list contents are of type {@link uml.InteractionFragment}.
         * It is bidirectional and its opposite is '{@link uml.InteractionFragment#getEnclosingInteraction}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The ordered set of fragments in the Interaction.
         * <p>From package UML::Interactions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Fragment</em>' containment reference list.
         * @see uml.UmlPackage#getInteraction_Fragment()
         * @see uml.InteractionFragment#getEnclosingInteraction
         * @model opposite="enclosingInteraction" containment="true"
         * @generated
         */
        getFragment() : org.eclipse.emf.common.util.EList<uml.InteractionFragment>;

        /**
         * Returns the value of the '<em><b>Action</b></em>' containment reference list.
         * The list contents are of type {@link uml.Action}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Actions owned by the Interaction.
         * <p>From package UML::Interactions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Action</em>' containment reference list.
         * @see uml.UmlPackage#getInteraction_Action()
         * @model containment="true" ordered="false"
         * @generated
         */
        getAction() : org.eclipse.emf.common.util.EList<uml.Action>;

        /**
         * Returns the value of the '<em><b>Formal Gate</b></em>' containment reference list.
         * The list contents are of type {@link uml.Gate}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Specifies the gates that form the message interface between this Interaction and any InteractionUses which reference it.
         * <p>From package UML::Interactions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Formal Gate</em>' containment reference list.
         * @see uml.UmlPackage#getInteraction_FormalGate()
         * @model containment="true" ordered="false"
         * @generated
         */
        getFormalGate() : org.eclipse.emf.common.util.EList<uml.Gate>;

        /**
         * Returns the value of the '<em><b>Message</b></em>' containment reference list.
         * The list contents are of type {@link uml.Message}.
         * It is bidirectional and its opposite is '{@link uml.Message#getInteraction}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Messages contained in this Interaction.
         * <p>From package UML::Interactions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Message</em>' containment reference list.
         * @see uml.UmlPackage#getInteraction_Message()
         * @see uml.Message#getInteraction
         * @model opposite="interaction" containment="true" ordered="false"
         * @generated
         */
        getMessage() : org.eclipse.emf.common.util.EList<uml.Message>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * An Interaction instance must not be contained within another Interaction instance.
         * enclosingInteraction->isEmpty()
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

