/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Consider Ignore Fragment</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A ConsiderIgnoreFragment is a kind of CombinedFragment that is used for the consider and ignore cases, which require lists of pertinent Messages to be specified.
     * <p>From package UML::Interactions.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.ConsiderIgnoreFragment#getMessage}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getConsiderIgnoreFragment()
     * @model
     * @generated
     * @class
     */
    export interface ConsiderIgnoreFragment extends uml.CombinedFragment {
        /**
         * Returns the value of the '<em><b>Message</b></em>' reference list.
         * The list contents are of type {@link uml.NamedElement}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The set of messages that apply to this fragment.
         * <p>From package UML::Interactions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Message</em>' reference list.
         * @see uml.UmlPackage#getConsiderIgnoreFragment_Message()
         * @model ordered="false"
         * @generated
         */
        getMessage() : org.eclipse.emf.common.util.EList<uml.NamedElement>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The interaction operator of a ConsiderIgnoreFragment must be either 'consider' or 'ignore'.
         * (interactionOperator =  InteractionOperatorKind::consider) or (interactionOperator =  InteractionOperatorKind::ignore)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        consider_or_ignore(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The NamedElements must be of a type of element that can be a signature for a message (i.e.., an Operation, or a Signal).
         * message->forAll(m | m.oclIsKindOf(Operation) or m.oclIsKindOf(Signal))
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        type(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

