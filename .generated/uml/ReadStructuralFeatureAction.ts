/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Read Structural Feature Action</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A ReadStructuralFeatureAction is a StructuralFeatureAction that retrieves the values of a StructuralFeature.
     * <p>From package UML::Actions.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.ReadStructuralFeatureAction#getResult}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getReadStructuralFeatureAction()
     * @model
     * @generated
     * @class
     */
    export interface ReadStructuralFeatureAction extends uml.StructuralFeatureAction {
        /**
         * Returns the value of the '<em><b>Result</b></em>' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The OutputPin on which the result values are placed.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Result</em>' containment reference.
         * @see #setResult(OutputPin)
         * @see uml.UmlPackage#getReadStructuralFeatureAction_Result()
         * @model containment="true" required="true" ordered="false"
         * @generated
         */
        getResult() : uml.OutputPin;

        /**
         * Sets the value of the '{@link uml.ReadStructuralFeatureAction#getResult}' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Result</em>' containment reference.
         * @see #getResult()
         * @generated
         */
        setResult(value : uml.OutputPin);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The type and ordering of the result OutputPin are the same as the type and ordering of the StructuralFeature.
         * result.type =structuralFeature.type and
         * result.isOrdered = structuralFeature.isOrdered
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        type_and_ordering(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

