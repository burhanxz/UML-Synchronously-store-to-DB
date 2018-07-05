/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Interruptible Activity Region</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * An InterruptibleActivityRegion is an ActivityGroup that supports the termination of tokens flowing in the portions of an activity within it.
     * <p>From package UML::Activities.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.InterruptibleActivityRegion#getInterruptingEdge}</li>
     * <li>{@link uml.InterruptibleActivityRegion#getNode}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getInterruptibleActivityRegion()
     * @model
     * @generated
     * @class
     */
    export interface InterruptibleActivityRegion extends uml.ActivityGroup {
        /**
         * Returns the value of the '<em><b>Interrupting Edge</b></em>' reference list.
         * The list contents are of type {@link uml.ActivityEdge}.
         * It is bidirectional and its opposite is '{@link uml.ActivityEdge#getInterrupts}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The ActivityEdges leaving the InterruptibleActivityRegion on which a traversing token will result in the termination of other tokens flowing in the InterruptibleActivityRegion.
         * <p>From package UML::Activities.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Interrupting Edge</em>' reference list.
         * @see uml.UmlPackage#getInterruptibleActivityRegion_InterruptingEdge()
         * @see uml.ActivityEdge#getInterrupts
         * @model opposite="interrupts" ordered="false"
         * @generated
         */
        getInterruptingEdge() : org.eclipse.emf.common.util.EList<uml.ActivityEdge>;

        /**
         * Returns the value of the '<em><b>Node</b></em>' reference list.
         * The list contents are of type {@link uml.ActivityNode}.
         * It is bidirectional and its opposite is '{@link uml.ActivityNode#getInInterruptibleRegion}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * ActivityNodes immediately contained in the InterruptibleActivityRegion.
         * <p>From package UML::Activities.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Node</em>' reference list.
         * @see uml.UmlPackage#getInterruptibleActivityRegion_Node()
         * @see uml.ActivityNode#getInInterruptibleRegion
         * @model opposite="inInterruptibleRegion" ordered="false"
         * @generated
         */
        getNode() : org.eclipse.emf.common.util.EList<uml.ActivityNode>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The interruptingEdges of an InterruptibleActivityRegion must have their source in the region and their target outside the region, but within the same Activity containing the region.
         * interruptingEdge->forAll(edge |
         * node->includes(edge.source) and node->excludes(edge.target) and edge.target.containingActivity() = inActivity)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        interrupting_edges(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

