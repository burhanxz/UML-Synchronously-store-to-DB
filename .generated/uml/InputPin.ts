/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Input Pin</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * An InputPin is a Pin that holds input values to be consumed by an Action.
     * <p>From package UML::Actions.</p>
     * <!-- end-model-doc -->
     * 
     * 
     * @see uml.UmlPackage#getInputPin()
     * @model
     * @generated
     * @class
     */
    export interface InputPin extends uml.Pin {
        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * An InputPin may have outgoing ActivityEdges only when it is owned by a StructuredActivityNode, and these edges must target a node contained (directly or indirectly) in the owning StructuredActivityNode.
         * outgoing->notEmpty() implies
         * action<>null and
         * action.oclIsKindOf(StructuredActivityNode) and
         * action.oclAsType(StructuredActivityNode).allOwnedNodes()->includesAll(outgoing.target)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        outgoing_edges_structured_only(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

