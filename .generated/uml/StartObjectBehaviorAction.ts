/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Start Object Behavior Action</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A StartObjectBehaviorAction is an InvocationAction that starts the execution either of a directly instantiated Behavior or of the classifierBehavior of an object. Argument values may be supplied for the input Parameters of the Behavior. If the Behavior is invoked synchronously, then output values may be obtained for output Parameters.
     * <p>From package UML::Actions.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.StartObjectBehaviorAction#getObject}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getStartObjectBehaviorAction()
     * @model
     * @generated
     * @class
     */
    export interface StartObjectBehaviorAction extends uml.CallAction {
        /**
         * Returns the value of the '<em><b>Object</b></em>' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * An InputPin that holds the object that is either a Behavior to be started or has a classifierBehavior to be started.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Object</em>' containment reference.
         * @see #setObject(InputPin)
         * @see uml.UmlPackage#getStartObjectBehaviorAction_Object()
         * @model containment="true" required="true" ordered="false"
         * @generated
         */
        getObject() : uml.InputPin;

        /**
         * Sets the value of the '{@link uml.StartObjectBehaviorAction#getObject}' containment reference.
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
         * The multiplicity of the object InputPin must be 1..1.
         * object.is(1,1)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        multiplicity_of_object(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The type of the object InputPin must be either a Behavior or a BehavioredClassifier with a classifierBehavior.
         * self.behavior()<>null
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        type_of_object(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A StartObjectBehaviorAction may not specify onPort.
         * onPort->isEmpty()
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        no_onport(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If the type of the object InputPin is a Behavior, then that Behavior. Otherwise, if the type of the object InputPin is a BehavioredClassifier, then the classifierBehavior of that BehavioredClassifier.
         * result = (if object.type.oclIsKindOf(Behavior) then
         * object.type.oclAsType(Behavior)
         * else if object.type.oclIsKindOf(BehavioredClassifier) then
         * object.type.oclAsType(BehavioredClassifier).classifierBehavior
         * else
         * null
         * endif
         * endif)
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @model ordered="false"
         * @generated
         * @return {*}
         */
        behavior() : uml.Behavior;
    }
}

