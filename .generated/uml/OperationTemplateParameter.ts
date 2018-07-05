/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Operation Template Parameter</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * An OperationTemplateParameter exposes an Operation as a formal parameter for a template.
     * <p>From package UML::Classification.</p>
     * <!-- end-model-doc -->
     * 
     * 
     * @see uml.UmlPackage#getOperationTemplateParameter()
     * @model
     * @generated
     * @class
     */
    export interface OperationTemplateParameter extends uml.TemplateParameter {
        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * default->notEmpty() implies (default.oclIsKindOf(Operation) and (let defaultOp : Operation = default.oclAsType(Operation) in
         * defaultOp.ownedParameter->size() = parameteredElement.ownedParameter->size() and
         * Sequence{1.. defaultOp.ownedParameter->size()}->forAll( ix |
         * let p1: Parameter = defaultOp.ownedParameter->at(ix), p2 : Parameter = parameteredElement.ownedParameter->at(ix) in
         * p1.type = p2.type and p1.upper = p2.upper and p1.lower = p2.lower and p1.direction = p2.direction and p1.isOrdered = p2.isOrdered and p1.isUnique = p2.isUnique)))
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        match_default_signature(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

