/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Expansion Node</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * An ExpansionNode is an ObjectNode used to indicate a collection input or output for an ExpansionRegion. A collection input of an ExpansionRegion contains a collection that is broken into its individual elements inside the region, whose content is executed once per element. A collection output of an ExpansionRegion combines individual elements produced by the execution of the region into a collection for use outside the region.
     * <p>From package UML::Actions.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.ExpansionNode#getRegionAsInput}</li>
     * <li>{@link uml.ExpansionNode#getRegionAsOutput}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getExpansionNode()
     * @model
     * @generated
     * @class
     */
    export interface ExpansionNode extends uml.ObjectNode {
        /**
         * Returns the value of the '<em><b>Region As Input</b></em>' reference.
         * It is bidirectional and its opposite is '{@link uml.ExpansionRegion#getInputElement}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The ExpansionRegion for which the ExpansionNode is an input.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Region As Input</em>' reference.
         * @see #setRegionAsInput(ExpansionRegion)
         * @see uml.UmlPackage#getExpansionNode_RegionAsInput()
         * @see uml.ExpansionRegion#getInputElement
         * @model opposite="inputElement" ordered="false"
         * @generated
         */
        getRegionAsInput() : uml.ExpansionRegion;

        /**
         * Sets the value of the '{@link uml.ExpansionNode#getRegionAsInput}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Region As Input</em>' reference.
         * @see #getRegionAsInput()
         * @generated
         */
        setRegionAsInput(value : uml.ExpansionRegion);

        /**
         * Returns the value of the '<em><b>Region As Output</b></em>' reference.
         * It is bidirectional and its opposite is '{@link uml.ExpansionRegion#getOutputElement}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The ExpansionRegion for which the ExpansionNode is an output.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Region As Output</em>' reference.
         * @see #setRegionAsOutput(ExpansionRegion)
         * @see uml.UmlPackage#getExpansionNode_RegionAsOutput()
         * @see uml.ExpansionRegion#getOutputElement
         * @model opposite="outputElement" ordered="false"
         * @generated
         */
        getRegionAsOutput() : uml.ExpansionRegion;

        /**
         * Sets the value of the '{@link uml.ExpansionNode#getRegionAsOutput}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Region As Output</em>' reference.
         * @see #getRegionAsOutput()
         * @generated
         */
        setRegionAsOutput(value : uml.ExpansionRegion);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * One of regionAsInput or regionAsOutput must be non-empty, but not both.
         * regionAsInput->notEmpty() xor regionAsOutput->notEmpty()
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        region_as_input_or_output(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

