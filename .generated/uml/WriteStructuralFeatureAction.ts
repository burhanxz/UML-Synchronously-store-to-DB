/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Write Structural Feature Action</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * WriteStructuralFeatureAction is an abstract class for StructuralFeatureActions that change StructuralFeature values.
     * <p>From package UML::Actions.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.WriteStructuralFeatureAction#getResult}</li>
     * <li>{@link uml.WriteStructuralFeatureAction#getValue}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getWriteStructuralFeatureAction()
     * @model abstract="true"
     * @generated
     * @class
     */
    export interface WriteStructuralFeatureAction extends uml.StructuralFeatureAction {
        /**
         * Returns the value of the '<em><b>Result</b></em>' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The OutputPin on which is put the input object as modified by the WriteStructuralFeatureAction.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Result</em>' containment reference.
         * @see #setResult(OutputPin)
         * @see uml.UmlPackage#getWriteStructuralFeatureAction_Result()
         * @model containment="true" ordered="false"
         * @generated
         */
        getResult() : uml.OutputPin;

        /**
         * Sets the value of the '{@link uml.WriteStructuralFeatureAction#getResult}' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Result</em>' containment reference.
         * @see #getResult()
         * @generated
         */
        setResult(value : uml.OutputPin);

        getValue(stereotype? : any, propertyName? : any) : any;

        setValue(stereotype? : any, propertyName? : any, newValue? : any) : any;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The multiplicity of the result OutputPin must be 1..1.
         * result <> null implies result.is(1,1)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        multiplicity_of_result(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The type of the value InputPin must conform to the type of the structuralFeature.
         * value <> null implies value.type.conformsTo(structuralFeature.type)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        type_of_value(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The multiplicity of the value InputPin is 1..1.
         * value<>null implies value.is(1,1)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        multiplicity_of_value(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The type of the result OutputPin is the same as the type of the inherited object InputPin.
         * result <> null implies result.type = object.type
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        type_of_result(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

