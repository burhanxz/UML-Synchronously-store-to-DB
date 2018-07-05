/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Start Classifier Behavior Action</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A StartClassifierBehaviorAction is an Action that starts the classifierBehavior of the input object.
     * <p>From package UML::Actions.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.StartClassifierBehaviorAction#getObject}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getStartClassifierBehaviorAction()
     * @model
     * @generated
     * @class
     */
    export interface StartClassifierBehaviorAction extends uml.Action {
        /**
         * Returns the value of the '<em><b>Object</b></em>' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The InputPin that holds the object whose classifierBehavior is to be started.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Object</em>' containment reference.
         * @see #setObject(InputPin)
         * @see uml.UmlPackage#getStartClassifierBehaviorAction_Object()
         * @model containment="true" required="true" ordered="false"
         * @generated
         */
        getObject() : uml.InputPin;

        /**
         * Sets the value of the '{@link uml.StartClassifierBehaviorAction#getObject}' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Object</em>' containment reference.
         * @see #getObject()
         * @generated
         */
        setObject(value : uml.InputPin);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The multiplicity of the object InputPin is 1..1
         * object.is(1,1)
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
         * If the InputPin has a type, then the type or one of its ancestors must have a classifierBehavior.
         * object.type->notEmpty() implies
         * (object.type.oclIsKindOf(BehavioredClassifier) and object.type.oclAsType(BehavioredClassifier).classifierBehavior<>null)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        type_has_classifier(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

