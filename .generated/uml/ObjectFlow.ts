/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Object Flow</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * An ObjectFlow is an ActivityEdge that is traversed by object tokens that may hold values. Object flows also support multicast/receive, token selection from object nodes, and transformation of tokens.
     * <p>From package UML::Activities.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.ObjectFlow#isIsMulticast}</li>
     * <li>{@link uml.ObjectFlow#isIsMultireceive}</li>
     * <li>{@link uml.ObjectFlow#getSelection}</li>
     * <li>{@link uml.ObjectFlow#getTransformation}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getObjectFlow()
     * @model
     * @generated
     * @class
     */
    export interface ObjectFlow extends uml.ActivityEdge {
        /**
         * Returns the value of the '<em><b>Is Multicast</b></em>' attribute.
         * The default value is <code>"false"</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Indicates whether the objects in the ObjectFlow are passed by multicasting.
         * <p>From package UML::Activities.</p>
         * <!-- end-model-doc -->
         * @return {boolean} the value of the '<em>Is Multicast</em>' attribute.
         * @see #setIsMulticast(boolean)
         * @see uml.UmlPackage#getObjectFlow_IsMulticast()
         * @model default="false" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         */
        isIsMulticast() : boolean;

        /**
         * Sets the value of the '{@link uml.ObjectFlow#isIsMulticast}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {boolean} value the new value of the '<em>Is Multicast</em>' attribute.
         * @see #isIsMulticast()
         * @generated
         */
        setIsMulticast(value : boolean);

        /**
         * Returns the value of the '<em><b>Is Multireceive</b></em>' attribute.
         * The default value is <code>"false"</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Indicates whether the objects in the ObjectFlow are gathered from respondents to multicasting.
         * <p>From package UML::Activities.</p>
         * <!-- end-model-doc -->
         * @return {boolean} the value of the '<em>Is Multireceive</em>' attribute.
         * @see #setIsMultireceive(boolean)
         * @see uml.UmlPackage#getObjectFlow_IsMultireceive()
         * @model default="false" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         */
        isIsMultireceive() : boolean;

        /**
         * Sets the value of the '{@link uml.ObjectFlow#isIsMultireceive}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {boolean} value the new value of the '<em>Is Multireceive</em>' attribute.
         * @see #isIsMultireceive()
         * @generated
         */
        setIsMultireceive(value : boolean);

        /**
         * Returns the value of the '<em><b>Selection</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A Behavior used to select tokens from a source ObjectNode.
         * <p>From package UML::Activities.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Selection</em>' reference.
         * @see #setSelection(Behavior)
         * @see uml.UmlPackage#getObjectFlow_Selection()
         * @model ordered="false"
         * @generated
         */
        getSelection() : uml.Behavior;

        /**
         * Sets the value of the '{@link uml.ObjectFlow#getSelection}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Selection</em>' reference.
         * @see #getSelection()
         * @generated
         */
        setSelection(value : uml.Behavior);

        /**
         * Returns the value of the '<em><b>Transformation</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A Behavior used to change or replace object tokens flowing along the ObjectFlow.
         * <p>From package UML::Activities.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Transformation</em>' reference.
         * @see #setTransformation(Behavior)
         * @see uml.UmlPackage#getObjectFlow_Transformation()
         * @model ordered="false"
         * @generated
         */
        getTransformation() : uml.Behavior;

        /**
         * Sets the value of the '{@link uml.ObjectFlow#getTransformation}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Transformation</em>' reference.
         * @see #getTransformation()
         * @generated
         */
        setTransformation(value : uml.Behavior);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A selection Behavior has one input Parameter and one output Parameter. The input Parameter must have the same as or a supertype of the type of the source ObjectNode, be non-unique and have multiplicity 0..*. The output Parameter must be the same or a subtype of the type of source ObjectNode. The Behavior cannot have side effects.
         * selection<>null implies
         * selection.inputParameters()->size()=1 and
         * selection.inputParameters()->forAll(not isUnique and is(0,*)) and
         * selection.outputParameters()->size()=1
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        input_and_output_parameter(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * ObjectFlows may not have ExecutableNodes at either end.
         * not (source.oclIsKindOf(ExecutableNode) or target.oclIsKindOf(ExecutableNode))
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        no_executable_nodes(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A transformation Behavior has one input Parameter and one output Parameter. The input Parameter must be the same as or a supertype of the type of object token coming from the source end. The output Parameter must be the same or a subtype of the type of object token expected downstream. The Behavior cannot have side effects.
         * transformation<>null implies
         * transformation.inputParameters()->size()=1 and
         * transformation.outputParameters()->size()=1
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        transformation_behavior(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * An ObjectFlow may have a selection Behavior only if it has an ObjectNode as its source.
         * selection<>null implies source.oclIsKindOf(ObjectNode)
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
         * ObjectNodes connected by an ObjectFlow, with optionally intervening ControlNodes, must have compatible types. In particular, the downstream ObjectNode type must be the same or a supertype of the upstream ObjectNode type.
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        compatible_types(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * ObjectNodes connected by an ObjectFlow, with optionally intervening ControlNodes, must have the same upperBounds.
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        same_upper_bounds(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * An ObjectFlow with a constant weight may not target an ObjectNode, with optionally intervening ControlNodes, that has an upper bound less than the weight.
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        target(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * isMulticast and isMultireceive cannot both be true.
         * not (isMulticast and isMultireceive)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        is_multicast_or_is_multireceive(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

