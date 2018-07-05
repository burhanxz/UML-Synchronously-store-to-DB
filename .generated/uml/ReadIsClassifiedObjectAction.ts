/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Read Is Classified Object Action</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A ReadIsClassifiedObjectAction is an Action that determines whether an object is classified by a given Classifier.
     * <p>From package UML::Actions.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.ReadIsClassifiedObjectAction#getClassifier}</li>
     * <li>{@link uml.ReadIsClassifiedObjectAction#isIsDirect}</li>
     * <li>{@link uml.ReadIsClassifiedObjectAction#getObject}</li>
     * <li>{@link uml.ReadIsClassifiedObjectAction#getResult}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getReadIsClassifiedObjectAction()
     * @model
     * @generated
     * @class
     */
    export interface ReadIsClassifiedObjectAction extends uml.Action {
        /**
         * Returns the value of the '<em><b>Classifier</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Classifier against which the classification of the input object is tested.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Classifier</em>' reference.
         * @see #setClassifier(Classifier)
         * @see uml.UmlPackage#getReadIsClassifiedObjectAction_Classifier()
         * @model required="true" ordered="false"
         * @generated
         */
        getClassifier() : uml.Classifier;

        /**
         * Sets the value of the '{@link uml.ReadIsClassifiedObjectAction#getClassifier}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Classifier</em>' reference.
         * @see #getClassifier()
         * @generated
         */
        setClassifier(value : uml.Classifier);

        /**
         * Returns the value of the '<em><b>Is Direct</b></em>' attribute.
         * The default value is <code>"false"</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Indicates whether the input object must be directly classified by the given Classifier or whether it may also be an instance of a specialization of the given Classifier.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {boolean} the value of the '<em>Is Direct</em>' attribute.
         * @see #setIsDirect(boolean)
         * @see uml.UmlPackage#getReadIsClassifiedObjectAction_IsDirect()
         * @model default="false" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         */
        isIsDirect() : boolean;

        /**
         * Sets the value of the '{@link uml.ReadIsClassifiedObjectAction#isIsDirect}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {boolean} value the new value of the '<em>Is Direct</em>' attribute.
         * @see #isIsDirect()
         * @generated
         */
        setIsDirect(value : boolean);

        /**
         * Returns the value of the '<em><b>Object</b></em>' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The InputPin that holds the object whose classification is to be tested.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Object</em>' containment reference.
         * @see #setObject(InputPin)
         * @see uml.UmlPackage#getReadIsClassifiedObjectAction_Object()
         * @model containment="true" required="true" ordered="false"
         * @generated
         */
        getObject() : uml.InputPin;

        /**
         * Sets the value of the '{@link uml.ReadIsClassifiedObjectAction#getObject}' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Object</em>' containment reference.
         * @see #getObject()
         * @generated
         */
        setObject(value : uml.InputPin);

        /**
         * Returns the value of the '<em><b>Result</b></em>' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The OutputPin that holds the Boolean result of the test.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Result</em>' containment reference.
         * @see #setResult(OutputPin)
         * @see uml.UmlPackage#getReadIsClassifiedObjectAction_Result()
         * @model containment="true" required="true" ordered="false"
         * @generated
         */
        getResult() : uml.OutputPin;

        /**
         * Sets the value of the '{@link uml.ReadIsClassifiedObjectAction#getResult}' containment reference.
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
         * The object InputPin has no type.
         * object.type = null
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
         * The multiplicity of the result OutputPin is 1..1.
         * result.is(1,1)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        multiplicity_of_output(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The type of the result OutputPin is Boolean.
         * result.type = Boolean
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        boolean_result(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The multiplicity of the object InputPin is 1..1.
         * object.is(1,1)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        multiplicity_of_input(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

