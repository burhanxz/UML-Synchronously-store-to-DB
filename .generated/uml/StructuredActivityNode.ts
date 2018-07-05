/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Structured Activity Node</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A StructuredActivityNode is an Action that is also an ActivityGroup and whose behavior is specified by the ActivityNodes and ActivityEdges it so contains. Unlike other kinds of ActivityGroup, a StructuredActivityNode owns the ActivityNodes and ActivityEdges it contains, and so a node or edge can only be directly contained in one StructuredActivityNode, though StructuredActivityNodes may be nested.
     * <p>From package UML::Actions.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.StructuredActivityNode#getEdge}</li>
     * <li>{@link uml.StructuredActivityNode#isMustIsolate}</li>
     * <li>{@link uml.StructuredActivityNode#getStructuredNodeInput}</li>
     * <li>{@link uml.StructuredActivityNode#getStructuredNodeOutput}</li>
     * <li>{@link uml.StructuredActivityNode#getVariable}</li>
     * <li>{@link uml.StructuredActivityNode#getNode}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getStructuredActivityNode()
     * @model
     * @generated
     * @class
     */
    export interface StructuredActivityNode extends uml.Action, uml.Namespace, uml.ActivityGroup {
        /**
         * Returns the value of the '<em><b>Edge</b></em>' containment reference list.
         * The list contents are of type {@link uml.ActivityEdge}.
         * It is bidirectional and its opposite is '{@link uml.ActivityEdge#getInStructuredNode}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The ActivityEdges immediately contained in the StructuredActivityNode.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Edge</em>' containment reference list.
         * @see uml.UmlPackage#getStructuredActivityNode_Edge()
         * @see uml.ActivityEdge#getInStructuredNode
         * @model opposite="inStructuredNode" containment="true" ordered="false"
         * @generated
         */
        getEdge() : org.eclipse.emf.common.util.EList<uml.ActivityEdge>;

        /**
         * Returns the value of the '<em><b>Must Isolate</b></em>' attribute.
         * The default value is <code>"false"</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If true, then any object used by an Action within the StructuredActivityNode cannot be accessed by any Action outside the node until the StructuredActivityNode as a whole completes. Any concurrent Actions that would result in accessing such objects are required to have their execution deferred until the completion of the StructuredActivityNode.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {boolean} the value of the '<em>Must Isolate</em>' attribute.
         * @see #setMustIsolate(boolean)
         * @see uml.UmlPackage#getStructuredActivityNode_MustIsolate()
         * @model default="false" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         */
        isMustIsolate() : boolean;

        /**
         * Sets the value of the '{@link uml.StructuredActivityNode#isMustIsolate}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {boolean} value the new value of the '<em>Must Isolate</em>' attribute.
         * @see #isMustIsolate()
         * @generated
         */
        setMustIsolate(value : boolean);

        /**
         * Returns the value of the '<em><b>Structured Node Input</b></em>' containment reference list.
         * The list contents are of type {@link uml.InputPin}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The InputPins owned by the StructuredActivityNode.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Structured Node Input</em>' containment reference list.
         * @see uml.UmlPackage#getStructuredActivityNode_StructuredNodeInput()
         * @model containment="true" ordered="false"
         * @generated
         */
        getStructuredNodeInput() : org.eclipse.emf.common.util.EList<uml.InputPin>;

        /**
         * Returns the value of the '<em><b>Structured Node Output</b></em>' containment reference list.
         * The list contents are of type {@link uml.OutputPin}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The OutputPins owned by the StructuredActivityNode.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Structured Node Output</em>' containment reference list.
         * @see uml.UmlPackage#getStructuredActivityNode_StructuredNodeOutput()
         * @model containment="true" ordered="false"
         * @generated
         */
        getStructuredNodeOutput() : org.eclipse.emf.common.util.EList<uml.OutputPin>;

        /**
         * Returns the value of the '<em><b>Variable</b></em>' containment reference list.
         * The list contents are of type {@link uml.Variable}.
         * It is bidirectional and its opposite is '{@link uml.Variable#getScope}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Variables defined in the scope of the StructuredActivityNode.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Variable</em>' containment reference list.
         * @see uml.UmlPackage#getStructuredActivityNode_Variable()
         * @see uml.Variable#getScope
         * @model opposite="scope" containment="true" ordered="false"
         * @generated
         */
        getVariable() : org.eclipse.emf.common.util.EList<uml.Variable>;

        /**
         * Returns the value of the '<em><b>Node</b></em>' containment reference list.
         * The list contents are of type {@link uml.ActivityNode}.
         * It is bidirectional and its opposite is '{@link uml.ActivityNode#getInStructuredNode}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The ActivityNodes immediately contained in the StructuredActivityNode.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Node</em>' containment reference list.
         * @see uml.UmlPackage#getStructuredActivityNode_Node()
         * @see uml.ActivityNode#getInStructuredNode
         * @model opposite="inStructuredNode" containment="true" ordered="false"
         * @generated
         */
        getNode() : org.eclipse.emf.common.util.EList<uml.ActivityNode>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The outgoing ActivityEdges of the OutputPins of a StructuredActivityNode must have targets that are not within the StructuredActivityNode.
         * output.outgoing.target->excludesAll(allOwnedNodes()-input)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        output_pin_edges(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The edges of a StructuredActivityNode are all the ActivityEdges with source and target ActivityNodes contained directly or indirectly within the StructuredActivityNode and at least one of the source or target not contained in any more deeply nested StructuredActivityNode.
         * edge=self.sourceNodes().outgoing->intersection(self.allOwnedNodes().incoming)->
         * union(self.targetNodes().incoming->intersection(self.allOwnedNodes().outgoing))->asSet()
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        edges(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The incoming ActivityEdges of an InputPin of a StructuredActivityNode must have sources that are not within the StructuredActivityNode.
         * input.incoming.source->excludesAll(allOwnedNodes()-output)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        input_pin_edges(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Return those ActivityNodes contained immediately within the StructuredActivityNode that may act as sources of edges owned by the StructuredActivityNode.
         * result = (node->union(input.oclAsType(ActivityNode)->asSet())->
         * union(node->select(oclIsKindOf(Action)).oclAsType(Action).output)->asSet())
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @model ordered="false"
         * @generated
         * @return {*}
         */
        sourceNodes() : org.eclipse.emf.common.util.EList<uml.ActivityNode>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Return those ActivityNodes contained immediately within the StructuredActivityNode that may act as targets of edges owned by the StructuredActivityNode.
         * result = (node->union(output.oclAsType(ActivityNode)->asSet())->
         * union(node->select(oclIsKindOf(Action)).oclAsType(Action).input)->asSet())
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @model ordered="false"
         * @generated
         * @return {*}
         */
        targetNodes() : org.eclipse.emf.common.util.EList<uml.ActivityNode>;
    }
}

