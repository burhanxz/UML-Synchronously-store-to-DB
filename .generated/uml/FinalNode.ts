/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Final Node</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A FinalNode is an abstract ControlNode at which a flow in an Activity stops.
     * <p>From package UML::Activities.</p>
     * <!-- end-model-doc -->
     * 
     * 
     * @see uml.UmlPackage#getFinalNode()
     * @model abstract="true"
     * @generated
     * @class
     */
    export interface FinalNode extends uml.ControlNode {
        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A FinalNode has no outgoing ActivityEdges.
         * outgoing->isEmpty()
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        no_outgoing_edges(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

