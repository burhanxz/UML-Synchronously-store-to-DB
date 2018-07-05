/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Invocation Action</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * InvocationAction is an abstract class for the various actions that request Behavior invocation.
     * <p>From package UML::Actions.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.InvocationAction#getArgument}</li>
     * <li>{@link uml.InvocationAction#getOnPort}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getInvocationAction()
     * @model abstract="true"
     * @generated
     * @class
     */
    export interface InvocationAction extends uml.Action {
        /**
         * Returns the value of the '<em><b>Argument</b></em>' containment reference list.
         * The list contents are of type {@link uml.InputPin}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The InputPins that provide the argument values passed in the invocation request.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Argument</em>' containment reference list.
         * @see uml.UmlPackage#getInvocationAction_Argument()
         * @model containment="true"
         * @generated
         */
        getArgument() : org.eclipse.emf.common.util.EList<uml.InputPin>;

        /**
         * Returns the value of the '<em><b>On Port</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * For CallOperationActions, SendSignalActions, and SendObjectActions, an optional Port of the target object through which the invocation request is sent.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>On Port</em>' reference.
         * @see #setOnPort(Port)
         * @see uml.UmlPackage#getInvocationAction_OnPort()
         * @model ordered="false"
         * @generated
         */
        getOnPort() : uml.Port;

        /**
         * Sets the value of the '{@link uml.InvocationAction#getOnPort}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>On Port</em>' reference.
         * @see #getOnPort()
         * @generated
         */
        setOnPort(value : uml.Port);
    }
}

