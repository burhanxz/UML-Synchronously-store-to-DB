/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Send Signal Action</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A SendSignalAction is an InvocationAction that creates a Signal instance and transmits it to the target object. Values from the argument InputPins are used to provide values for the attributes of the Signal. The requestor continues execution immediately after the Signal instance is sent out and cannot receive reply values.
     * <p>From package UML::Actions.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.SendSignalAction#getSignal}</li>
     * <li>{@link uml.SendSignalAction#getTarget}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getSendSignalAction()
     * @model
     * @generated
     * @class
     */
    export interface SendSignalAction extends uml.InvocationAction {
        /**
         * Returns the value of the '<em><b>Signal</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Signal whose instance is transmitted to the target.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Signal</em>' reference.
         * @see #setSignal(Signal)
         * @see uml.UmlPackage#getSendSignalAction_Signal()
         * @model required="true" ordered="false"
         * @generated
         */
        getSignal() : uml.Signal;

        /**
         * Sets the value of the '{@link uml.SendSignalAction#getSignal}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Signal</em>' reference.
         * @see #getSignal()
         * @generated
         */
        setSignal(value : uml.Signal);

        /**
         * Returns the value of the '<em><b>Target</b></em>' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The InputPin that provides the target object to which the Signal instance is sent.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Target</em>' containment reference.
         * @see #setTarget(InputPin)
         * @see uml.UmlPackage#getSendSignalAction_Target()
         * @model containment="true" required="true" ordered="false"
         * @generated
         */
        getTarget() : uml.InputPin;

        /**
         * Sets the value of the '{@link uml.SendSignalAction#getTarget}' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Target</em>' containment reference.
         * @see #getTarget()
         * @generated
         */
        setTarget(value : uml.InputPin);

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
         * The number and order of argument InputPins must be the same as the number and order of attributes of the signal.
         * argument->size()=signal.allAttributes()->size()
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        number_order(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If onPort is not empty, the Port given by onPort must be an owned or inherited feature of the type of the target InputPin.
         * not onPort->isEmpty() implies target.type.oclAsType(Classifier).allFeatures()->includes(onPort)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        type_target_pin(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

