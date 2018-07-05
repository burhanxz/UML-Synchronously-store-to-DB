/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Test Identity Action</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A TestIdentityAction is an Action that tests if two values are identical objects.
     * <p>From package UML::Actions.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.TestIdentityAction#getFirst}</li>
     * <li>{@link uml.TestIdentityAction#getResult}</li>
     * <li>{@link uml.TestIdentityAction#getSecond}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getTestIdentityAction()
     * @model
     * @generated
     * @class
     */
    export interface TestIdentityAction extends uml.Action {
        /**
         * Returns the value of the '<em><b>First</b></em>' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The InputPin on which the first input object is placed.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>First</em>' containment reference.
         * @see #setFirst(InputPin)
         * @see uml.UmlPackage#getTestIdentityAction_First()
         * @model containment="true" required="true" ordered="false"
         * @generated
         */
        getFirst() : uml.InputPin;

        /**
         * Sets the value of the '{@link uml.TestIdentityAction#getFirst}' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>First</em>' containment reference.
         * @see #getFirst()
         * @generated
         */
        setFirst(value : uml.InputPin);

        /**
         * Returns the value of the '<em><b>Result</b></em>' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The OutputPin whose Boolean value indicates whether the two input objects are identical.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Result</em>' containment reference.
         * @see #setResult(OutputPin)
         * @see uml.UmlPackage#getTestIdentityAction_Result()
         * @model containment="true" required="true" ordered="false"
         * @generated
         */
        getResult() : uml.OutputPin;

        /**
         * Sets the value of the '{@link uml.TestIdentityAction#getResult}' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Result</em>' containment reference.
         * @see #getResult()
         * @generated
         */
        setResult(value : uml.OutputPin);

        /**
         * Returns the value of the '<em><b>Second</b></em>' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The OutputPin on which the second input object is placed.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Second</em>' containment reference.
         * @see #setSecond(InputPin)
         * @see uml.UmlPackage#getTestIdentityAction_Second()
         * @model containment="true" required="true" ordered="false"
         * @generated
         */
        getSecond() : uml.InputPin;

        /**
         * Sets the value of the '{@link uml.TestIdentityAction#getSecond}' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Second</em>' containment reference.
         * @see #getSecond()
         * @generated
         */
        setSecond(value : uml.InputPin);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The multiplicity of the InputPins is 1..1.
         * first.is(1,1) and second.is(1,1)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        multiplicity(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The InputPins have no type.
         * first.type= null and second.type = null
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        no_type(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The type of the result OutputPin is Boolean.
         * result.type=Boolean
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        result_is_boolean(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

