/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Interaction Fragment</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * InteractionFragment is an abstract notion of the most general interaction unit. An InteractionFragment is a piece of an Interaction. Each InteractionFragment is conceptually like an Interaction by itself.
     * <p>From package UML::Interactions.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.InteractionFragment#getCovered}</li>
     * <li>{@link uml.InteractionFragment#getEnclosingOperand}</li>
     * <li>{@link uml.InteractionFragment#getEnclosingInteraction}</li>
     * <li>{@link uml.InteractionFragment#getGeneralOrdering}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getInteractionFragment()
     * @model abstract="true"
     * @generated
     * @class
     */
    export interface InteractionFragment extends uml.NamedElement {
        /**
         * Returns the value of the '<em><b>Covered</b></em>' reference list.
         * The list contents are of type {@link uml.Lifeline}.
         * It is bidirectional and its opposite is '{@link uml.Lifeline#getCoveredBy}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * References the Lifelines that the InteractionFragment involves.
         * <p>From package UML::Interactions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Covered</em>' reference list.
         * @see uml.UmlPackage#getInteractionFragment_Covered()
         * @see uml.Lifeline#getCoveredBy
         * @model opposite="coveredBy" ordered="false"
         * @generated
         */
        getCovereds() : org.eclipse.emf.common.util.EList<uml.Lifeline>;

        /**
         * Returns the value of the '<em><b>Enclosing Operand</b></em>' container reference.
         * It is bidirectional and its opposite is '{@link uml.InteractionOperand#getFragment}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The operand enclosing this InteractionFragment (they may nest recursively).
         * <p>From package UML::Interactions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Enclosing Operand</em>' container reference.
         * @see #setEnclosingOperand(InteractionOperand)
         * @see uml.UmlPackage#getInteractionFragment_EnclosingOperand()
         * @see uml.InteractionOperand#getFragment
         * @model opposite="fragment" transient="false" ordered="false"
         * @generated
         */
        getEnclosingOperand() : uml.InteractionOperand;

        /**
         * Sets the value of the '{@link uml.InteractionFragment#getEnclosingOperand}' container reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Enclosing Operand</em>' container reference.
         * @see #getEnclosingOperand()
         * @generated
         */
        setEnclosingOperand(value : uml.InteractionOperand);

        /**
         * Returns the value of the '<em><b>Enclosing Interaction</b></em>' container reference.
         * It is bidirectional and its opposite is '{@link uml.Interaction#getFragment}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Interaction enclosing this InteractionFragment.
         * <p>From package UML::Interactions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Enclosing Interaction</em>' container reference.
         * @see #setEnclosingInteraction(Interaction)
         * @see uml.UmlPackage#getInteractionFragment_EnclosingInteraction()
         * @see uml.Interaction#getFragment
         * @model opposite="fragment" transient="false" ordered="false"
         * @generated
         */
        getEnclosingInteraction() : uml.Interaction;

        /**
         * Sets the value of the '{@link uml.InteractionFragment#getEnclosingInteraction}' container reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Enclosing Interaction</em>' container reference.
         * @see #getEnclosingInteraction()
         * @generated
         */
        setEnclosingInteraction(value : uml.Interaction);

        /**
         * Returns the value of the '<em><b>General Ordering</b></em>' containment reference list.
         * The list contents are of type {@link uml.GeneralOrdering}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The general ordering relationships contained in this fragment.
         * <p>From package UML::Interactions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>General Ordering</em>' containment reference list.
         * @see uml.UmlPackage#getInteractionFragment_GeneralOrdering()
         * @model containment="true" ordered="false"
         * @generated
         */
        getGeneralOrdering() : org.eclipse.emf.common.util.EList<uml.GeneralOrdering>;
    }
}

