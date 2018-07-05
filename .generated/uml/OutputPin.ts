/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Output Pin</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * An OutputPin is a Pin that holds output values produced by an Action.
     * <p>From package UML::Actions.</p>
     * <!-- end-model-doc -->
     * 
     * 
     * @see uml.UmlPackage#getOutputPin()
     * @model
     * @generated
     * @class
     */
    export interface OutputPin extends uml.Pin {
        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * An OutputPin may have incoming ActivityEdges only when it is owned by a StructuredActivityNode, and these edges must have sources contained (directly or indirectly) in the owning StructuredActivityNode.
         * incoming->notEmpty() implies
         * action<>null and
         * action.oclIsKindOf(StructuredActivityNode) and
         * action.oclAsType(StructuredActivityNode).allOwnedNodes()->includesAll(incoming.source)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        incoming_edges_structured_only(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

