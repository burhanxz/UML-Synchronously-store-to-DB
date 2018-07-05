/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Reduce Action</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A ReduceAction is an Action that reduces a collection to a single value by repeatedly combining the elements of the collection using a reducer Behavior.
     * <p>From package UML::Actions.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.ReduceAction#getCollection}</li>
     * <li>{@link uml.ReduceAction#isIsOrdered}</li>
     * <li>{@link uml.ReduceAction#getReducer}</li>
     * <li>{@link uml.ReduceAction#getResult}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getReduceAction()
     * @model
     * @generated
     * @class
     */
    export interface ReduceAction extends uml.Action {
        /**
         * Returns the value of the '<em><b>Collection</b></em>' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The InputPin that provides the collection to be reduced.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Collection</em>' containment reference.
         * @see #setCollection(InputPin)
         * @see uml.UmlPackage#getReduceAction_Collection()
         * @model containment="true" required="true" ordered="false"
         * @generated
         */
        getCollection() : uml.InputPin;

        /**
         * Sets the value of the '{@link uml.ReduceAction#getCollection}' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Collection</em>' containment reference.
         * @see #getCollection()
         * @generated
         */
        setCollection(value : uml.InputPin);

        /**
         * Returns the value of the '<em><b>Is Ordered</b></em>' attribute.
         * The default value is <code>"false"</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Indicates whether the order of the input collection should determine the order in which the reducer Behavior is applied to its elements.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {boolean} the value of the '<em>Is Ordered</em>' attribute.
         * @see #setIsOrdered(boolean)
         * @see uml.UmlPackage#getReduceAction_IsOrdered()
         * @model default="false" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         */
        isIsOrdered() : boolean;

        /**
         * Sets the value of the '{@link uml.ReduceAction#isIsOrdered}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {boolean} value the new value of the '<em>Is Ordered</em>' attribute.
         * @see #isIsOrdered()
         * @generated
         */
        setIsOrdered(value : boolean);

        /**
         * Returns the value of the '<em><b>Reducer</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A Behavior that is repreatedly applied to two elements of the input collection to produce a value that is of the same type as elements of the collection.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Reducer</em>' reference.
         * @see #setReducer(Behavior)
         * @see uml.UmlPackage#getReduceAction_Reducer()
         * @model required="true" ordered="false"
         * @generated
         */
        getReducer() : uml.Behavior;

        /**
         * Sets the value of the '{@link uml.ReduceAction#getReducer}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Reducer</em>' reference.
         * @see #getReducer()
         * @generated
         */
        setReducer(value : uml.Behavior);

        /**
         * Returns the value of the '<em><b>Result</b></em>' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The output pin on which the result value is placed.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Result</em>' containment reference.
         * @see #setResult(OutputPin)
         * @see uml.UmlPackage#getReduceAction_Result()
         * @model containment="true" required="true" ordered="false"
         * @generated
         */
        getResult() : uml.OutputPin;

        /**
         * Sets the value of the '{@link uml.ReduceAction#getResult}' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Result</em>' containment reference.
         * @see #getResult()
         * @generated
         */
        setResult(value : uml.OutputPin);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The reducer Behavior must have two input ownedParameters and one output ownedParameter, where the type of the output Parameter and the type of elements of the input collection conform to the types of the input Parameters.
         * let inputs: OrderedSet(Parameter) = reducer.inputParameters() in
         * let outputs: OrderedSet(Parameter) = reducer.outputParameters() in
         * inputs->size()=2 and outputs->size()=1 and
         * inputs.type->forAll(t |
         * outputs.type->forAll(conformsTo(t)) and
         * -- Note that the following only checks the case when the collection is via multiple tokens.
         * collection.upperBound()>1 implies collection.type.conformsTo(t))
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        reducer_inputs_output(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The type of the collection InputPin must be a collection.
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        input_type_is_collection(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The type of the output of the reducer Behavior must conform to the type of the result OutputPin.
         * reducer.outputParameters().type->forAll(conformsTo(result.type))
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        output_types_are_compatible(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

