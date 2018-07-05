/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Action</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * An Action is the fundamental unit of executable functionality. The execution of an Action represents some transformation or processing in the modeled system. Actions provide the ExecutableNodes within Activities and may also be used within Interactions.
     * <p>From package UML::Actions.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.Action#getContext}</li>
     * <li>{@link uml.Action#getInput}</li>
     * <li>{@link uml.Action#isIsLocallyReentrant}</li>
     * <li>{@link uml.Action#getLocalPostcondition}</li>
     * <li>{@link uml.Action#getLocalPrecondition}</li>
     * <li>{@link uml.Action#getOutput}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getAction()
     * @model abstract="true"
     * @generated
     * @class
     */
    export interface Action extends uml.ExecutableNode {
        /**
         * Returns the value of the '<em><b>Context</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The context Classifier of the Behavior that contains this Action, or the Behavior itself if it has no context.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Context</em>' reference.
         * @see uml.UmlPackage#getAction_Context()
         * @model transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getContext() : uml.Classifier;

        /**
         * Returns the value of the '<em><b>Input</b></em>' reference list.
         * The list contents are of type {@link uml.InputPin}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The ordered set of InputPins representing the inputs to the Action.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Input</em>' reference list.
         * @see uml.UmlPackage#getAction_Input()
         * @model transient="true" changeable="false" volatile="true" derived="true"
         * @generated
         */
        getInput() : org.eclipse.emf.common.util.EList<uml.InputPin>;

        /**
         * Returns the value of the '<em><b>Is Locally Reentrant</b></em>' attribute.
         * The default value is <code>"false"</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If true, the Action can begin a new, concurrent execution, even if there is already another execution of the Action ongoing. If false, the Action cannot begin a new execution until any previous execution has completed.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {boolean} the value of the '<em>Is Locally Reentrant</em>' attribute.
         * @see #setIsLocallyReentrant(boolean)
         * @see uml.UmlPackage#getAction_IsLocallyReentrant()
         * @model default="false" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         */
        isIsLocallyReentrant() : boolean;

        /**
         * Sets the value of the '{@link uml.Action#isIsLocallyReentrant}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {boolean} value the new value of the '<em>Is Locally Reentrant</em>' attribute.
         * @see #isIsLocallyReentrant()
         * @generated
         */
        setIsLocallyReentrant(value : boolean);

        /**
         * Returns the value of the '<em><b>Local Postcondition</b></em>' containment reference list.
         * The list contents are of type {@link uml.Constraint}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A Constraint that must be satisfied when execution of the Action is completed.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Local Postcondition</em>' containment reference list.
         * @see uml.UmlPackage#getAction_LocalPostcondition()
         * @model containment="true" ordered="false"
         * @generated
         */
        getLocalPostcondition() : org.eclipse.emf.common.util.EList<uml.Constraint>;

        /**
         * Returns the value of the '<em><b>Local Precondition</b></em>' containment reference list.
         * The list contents are of type {@link uml.Constraint}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A Constraint that must be satisfied when execution of the Action is started.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Local Precondition</em>' containment reference list.
         * @see uml.UmlPackage#getAction_LocalPrecondition()
         * @model containment="true" ordered="false"
         * @generated
         */
        getLocalPrecondition() : org.eclipse.emf.common.util.EList<uml.Constraint>;

        /**
         * Returns the value of the '<em><b>Output</b></em>' reference list.
         * The list contents are of type {@link uml.OutputPin}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The ordered set of OutputPins representing outputs from the Action.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Output</em>' reference list.
         * @see uml.UmlPackage#getAction_Output()
         * @model transient="true" changeable="false" volatile="true" derived="true"
         * @generated
         */
        getOutput() : org.eclipse.emf.common.util.EList<uml.OutputPin>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Return this Action and all Actions contained directly or indirectly in it. By default only the Action itself is returned, but the operation is overridden for StructuredActivityNodes.
         * result = (self->asSet())
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @model ordered="false"
         * @generated
         * @return {*}
         */
        allActions() : org.eclipse.emf.common.util.EList<Action>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Returns all the ActivityNodes directly or indirectly owned by this Action. This includes at least all the Pins of the Action.
         * result = (input.oclAsType(Pin)->asSet()->union(output->asSet()))
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @model ordered="false"
         * @generated
         * @return {*}
         */
        allOwnedNodes() : org.eclipse.emf.common.util.EList<uml.ActivityNode>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * result = (if inStructuredNode<>null then inStructuredNode.containingBehavior()
         * else if activity<>null then activity
         * else interaction
         * endif
         * endif
         * )
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @model ordered="false"
         * @generated
         * @return {*}
         */
        containingBehavior() : uml.Behavior;
    }
}

