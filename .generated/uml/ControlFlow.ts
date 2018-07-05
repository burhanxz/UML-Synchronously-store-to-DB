/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Control Flow</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A ControlFlow is an ActivityEdge traversed by control tokens or object tokens of control type, which are use to control the execution of ExecutableNodes.
     * <p>From package UML::Activities.</p>
     * <!-- end-model-doc -->
     * 
     * 
     * @see uml.UmlPackage#getControlFlow()
     * @model
     * @generated
     * @class
     */
    export interface ControlFlow extends uml.ActivityEdge {
        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * ControlFlows may not have ObjectNodes at either end, except for ObjectNodes with control type.
         * (source.oclIsKindOf(ObjectNode) implies source.oclAsType(ObjectNode).isControlType) and
         * (target.oclIsKindOf(ObjectNode) implies target.oclAsType(ObjectNode).isControlType)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        object_nodes(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

