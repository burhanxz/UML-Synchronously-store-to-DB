/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Call Behavior Action</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A CallBehaviorAction is a CallAction that invokes a Behavior directly. The argument values of the CallBehaviorAction are passed on the input Parameters of the invoked Behavior. If the call is synchronous, the execution of the CallBehaviorAction waits until the execution of the invoked Behavior completes and the values of output Parameters of the Behavior are placed on the result OutputPins. If the call is asynchronous, the CallBehaviorAction completes immediately and no results values can be provided.
     * <p>From package UML::Actions.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.CallBehaviorAction#getBehavior}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getCallBehaviorAction()
     * @model
     * @generated
     * @class
     */
    export interface CallBehaviorAction extends uml.CallAction {
        /**
         * Returns the value of the '<em><b>Behavior</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Behavior being invoked.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Behavior</em>' reference.
         * @see #setBehavior(Behavior)
         * @see uml.UmlPackage#getCallBehaviorAction_Behavior()
         * @model required="true" ordered="false"
         * @generated
         */
        getBehavior() : uml.Behavior;

        /**
         * Sets the value of the '{@link uml.CallBehaviorAction#getBehavior}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Behavior</em>' reference.
         * @see #getBehavior()
         * @generated
         */
        setBehavior(value : uml.Behavior);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A CallBehaviorAction may not specify onPort.
         * onPort=null
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        no_onport(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

