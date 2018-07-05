/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Expansion Region</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * An ExpansionRegion is a StructuredActivityNode that executes its content multiple times corresponding to elements of input collection(s).
     * <p>From package UML::Actions.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.ExpansionRegion#getMode}</li>
     * <li>{@link uml.ExpansionRegion#getOutputElement}</li>
     * <li>{@link uml.ExpansionRegion#getInputElement}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getExpansionRegion()
     * @model
     * @generated
     * @class
     */
    export interface ExpansionRegion extends uml.StructuredActivityNode {
        /**
         * Returns the value of the '<em><b>Mode</b></em>' attribute.
         * The default value is <code>"iterative"</code>.
         * The literals are from the enumeration {@link uml.ExpansionKind}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The mode in which the ExpansionRegion executes its contents. If parallel, executions are concurrent. If iterative, executions are sequential. If stream, a stream of values flows into a single execution.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {uml.ExpansionKind} the value of the '<em>Mode</em>' attribute.
         * @see uml.ExpansionKind
         * @see #setMode(ExpansionKind)
         * @see uml.UmlPackage#getExpansionRegion_Mode()
         * @model default="iterative" required="true" ordered="false"
         * @generated
         */
        getMode() : uml.ExpansionKind;

        /**
         * Sets the value of the '{@link uml.ExpansionRegion#getMode}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {uml.ExpansionKind} value the new value of the '<em>Mode</em>' attribute.
         * @see uml.ExpansionKind
         * @see #getMode()
         * @generated
         */
        setMode(value : uml.ExpansionKind);

        /**
         * Returns the value of the '<em><b>Output Element</b></em>' reference list.
         * The list contents are of type {@link uml.ExpansionNode}.
         * It is bidirectional and its opposite is '{@link uml.ExpansionNode#getRegionAsOutput}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The ExpansionNodes that form the output collections of the ExpansionRegion.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Output Element</em>' reference list.
         * @see uml.UmlPackage#getExpansionRegion_OutputElement()
         * @see uml.ExpansionNode#getRegionAsOutput
         * @model opposite="regionAsOutput" ordered="false"
         * @generated
         */
        getOutputElement() : org.eclipse.emf.common.util.EList<uml.ExpansionNode>;

        /**
         * Returns the value of the '<em><b>Input Element</b></em>' reference list.
         * The list contents are of type {@link uml.ExpansionNode}.
         * It is bidirectional and its opposite is '{@link uml.ExpansionNode#getRegionAsInput}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The ExpansionNodes that hold the input collections for the ExpansionRegion.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Input Element</em>' reference list.
         * @see uml.UmlPackage#getExpansionRegion_InputElement()
         * @see uml.ExpansionNode#getRegionAsInput
         * @model opposite="regionAsInput" required="true" ordered="false"
         * @generated
         */
        getInputElement() : org.eclipse.emf.common.util.EList<uml.ExpansionNode>;
    }
}

