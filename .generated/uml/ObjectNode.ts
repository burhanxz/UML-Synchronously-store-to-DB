/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Object Node</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * An ObjectNode is an abstract ActivityNode that may hold tokens within the object flow in an Activity. ObjectNodes also support token selection, limitation on the number of tokens held, specification of the state required for tokens being held, and carrying control values.
     * <p>From package UML::Activities.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.ObjectNode#getInState}</li>
     * <li>{@link uml.ObjectNode#isIsControlType}</li>
     * <li>{@link uml.ObjectNode#getOrdering}</li>
     * <li>{@link uml.ObjectNode#getSelection}</li>
     * <li>{@link uml.ObjectNode#getUpperBound}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getObjectNode()
     * @model abstract="true"
     * @generated
     * @class
     */
    export interface ObjectNode extends uml.ActivityNode, uml.TypedElement {
        /**
         * Returns the value of the '<em><b>In State</b></em>' reference list.
         * The list contents are of type {@link uml.State}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The States required to be associated with the values held by tokens on this ObjectNode.
         * <p>From package UML::Activities.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>In State</em>' reference list.
         * @see uml.UmlPackage#getObjectNode_InState()
         * @model ordered="false"
         * @generated
         */
        getInState() : org.eclipse.emf.common.util.EList<uml.State>;

        /**
         * Returns the value of the '<em><b>Is Control Type</b></em>' attribute.
         * The default value is <code>"false"</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Indicates whether the type of the ObjectNode is to be treated as representing control values that may traverse ControlFlows.
         * <p>From package UML::Activities.</p>
         * <!-- end-model-doc -->
         * @return {boolean} the value of the '<em>Is Control Type</em>' attribute.
         * @see #setIsControlType(boolean)
         * @see uml.UmlPackage#getObjectNode_IsControlType()
         * @model default="false" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         */
        isIsControlType() : boolean;

        /**
         * Sets the value of the '{@link uml.ObjectNode#isIsControlType}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {boolean} value the new value of the '<em>Is Control Type</em>' attribute.
         * @see #isIsControlType()
         * @generated
         */
        setIsControlType(value : boolean);

        /**
         * Returns the value of the '<em><b>Ordering</b></em>' attribute.
         * The default value is <code>"FIFO"</code>.
         * The literals are from the enumeration {@link uml.ObjectNodeOrderingKind}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Indicates how the tokens held by the ObjectNode are ordered for selection to traverse ActivityEdges outgoing from the ObjectNode.
         * <p>From package UML::Activities.</p>
         * <!-- end-model-doc -->
         * @return {uml.ObjectNodeOrderingKind} the value of the '<em>Ordering</em>' attribute.
         * @see uml.ObjectNodeOrderingKind
         * @see #setOrdering(ObjectNodeOrderingKind)
         * @see uml.UmlPackage#getObjectNode_Ordering()
         * @model default="FIFO" required="true" ordered="false"
         * @generated
         */
        getOrdering() : uml.ObjectNodeOrderingKind;

        /**
         * Sets the value of the '{@link uml.ObjectNode#getOrdering}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {uml.ObjectNodeOrderingKind} value the new value of the '<em>Ordering</em>' attribute.
         * @see uml.ObjectNodeOrderingKind
         * @see #getOrdering()
         * @generated
         */
        setOrdering(value : uml.ObjectNodeOrderingKind);

        /**
         * Returns the value of the '<em><b>Selection</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A Behavior used to select tokens to be offered on outgoing ActivityEdges.
         * <p>From package UML::Activities.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Selection</em>' reference.
         * @see #setSelection(Behavior)
         * @see uml.UmlPackage#getObjectNode_Selection()
         * @model ordered="false"
         * @generated
         */
        getSelection() : uml.Behavior;

        /**
         * Sets the value of the '{@link uml.ObjectNode#getSelection}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Selection</em>' reference.
         * @see #getSelection()
         * @generated
         */
        setSelection(value : uml.Behavior);

        /**
         * Returns the value of the '<em><b>Upper Bound</b></em>' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The maximum number of tokens that may be held by this ObjectNode. Tokens cannot flow into the ObjectNode if the upperBound is reached. If no upperBound is specified, then there is no limit on how many tokens the ObjectNode can hold.
         * <p>From package UML::Activities.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Upper Bound</em>' containment reference.
         * @see #setUpperBound(ValueSpecification)
         * @see uml.UmlPackage#getObjectNode_UpperBound()
         * @model containment="true" ordered="false"
         * @generated
         */
        getUpperBound() : uml.ValueSpecification;

        /**
         * Sets the value of the '{@link uml.ObjectNode#getUpperBound}' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Upper Bound</em>' containment reference.
         * @see #getUpperBound()
         * @generated
         */
        setUpperBound(value : uml.ValueSpecification);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A selection Behavior has one input Parameter and one output Parameter. The input Parameter must have the same type as  or a supertype of the type of ObjectNode, be non-unique, and have multiplicity 0..*. The output Parameter must be the same or a subtype of the type of ObjectNode. The Behavior cannot have side effects.
         * selection<>null implies
         * selection.inputParameters()->size()=1 and
         * selection.inputParameters()->forAll(p | not p.isUnique and p.is(0,*) and self.type.conformsTo(p.type)) and
         * selection.outputParameters()->size()=1 and
         * selection.inputParameters()->forAll(p | self.type.conformsTo(p.type))
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        input_output_parameter(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If an ObjectNode has a selection Behavior, then the ordering of the object node is ordered, and vice versa.
         * (selection<>null) = (ordering=ObjectNodeOrderingKind::ordered)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        selection_behavior(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If isControlType=false, the ActivityEdges incoming to or outgoing from an ObjectNode must all be ObjectFlows.
         * (not isControlType) implies incoming->union(outgoing)->forAll(oclIsKindOf(ObjectFlow))
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        object_flow_edges(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

