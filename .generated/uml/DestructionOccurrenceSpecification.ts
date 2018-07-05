/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Destruction Occurrence Specification</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A DestructionOccurenceSpecification models the destruction of an object.
     * <p>From package UML::Interactions.</p>
     * <!-- end-model-doc -->
     * 
     * 
     * @see uml.UmlPackage#getDestructionOccurrenceSpecification()
     * @model
     * @generated
     * @class
     */
    export interface DestructionOccurrenceSpecification extends uml.MessageOccurrenceSpecification {
        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * No other OccurrenceSpecifications on a given Lifeline in an InteractionOperand may appear below a DestructionOccurrenceSpecification.
         * let o : InteractionOperand = enclosingOperand in o->notEmpty() and
         * let peerEvents : OrderedSet(OccurrenceSpecification) = covered.events->select(enclosingOperand = o)
         * in peerEvents->last() = self
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        no_occurrence_specifications_below(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

