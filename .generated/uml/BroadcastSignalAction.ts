/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Broadcast Signal Action</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A BroadcastSignalAction is an InvocationAction that transmits a Signal instance to all the potential target objects in the system. Values from the argument InputPins are used to provide values for the attributes of the Signal. The requestor continues execution immediately after the Signal instances are sent out and cannot receive reply values.
     * <p>From package UML::Actions.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.BroadcastSignalAction#getSignal}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getBroadcastSignalAction()
     * @model
     * @generated
     * @class
     */
    export interface BroadcastSignalAction extends uml.InvocationAction {
        /**
         * Returns the value of the '<em><b>Signal</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Signal whose instances are to be sent.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Signal</em>' reference.
         * @see #setSignal(Signal)
         * @see uml.UmlPackage#getBroadcastSignalAction_Signal()
         * @model required="true" ordered="false"
         * @generated
         */
        getSignal() : uml.Signal;

        /**
         * Sets the value of the '{@link uml.BroadcastSignalAction#getSignal}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Signal</em>' reference.
         * @see #getSignal()
         * @generated
         */
        setSignal(value : uml.Signal);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The number of argument InputPins must be the same as the number of attributes in the signal.
         * argument->size() = signal.allAttributes()->size()
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        number_of_arguments(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The type, ordering, and multiplicity of an argument InputPin must be the same as the corresponding attribute of the signal.
         * let attribute: OrderedSet(Property) = signal.allAttributes() in
         * Sequence{1..argument->size()}->forAll(i |
         * argument->at(i).type.conformsTo(attribute->at(i).type) and
         * argument->at(i).isOrdered = attribute->at(i).isOrdered and
         * argument->at(i).compatibleWith(attribute->at(i)))
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        type_ordering_multiplicity(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A BroadcaseSignalAction may not specify onPort.
         * onPort=null
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        no_onport(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

