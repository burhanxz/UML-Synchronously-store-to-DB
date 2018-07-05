/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Link Action</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * LinkAction is an abstract class for all Actions that identify the links to be acted on using LinkEndData.
     * <p>From package UML::Actions.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.LinkAction#getEndData}</li>
     * <li>{@link uml.LinkAction#getInputValue}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getLinkAction()
     * @model abstract="true"
     * @generated
     * @class
     */
    export interface LinkAction extends uml.Action {
        /**
         * Returns the value of the '<em><b>End Data</b></em>' containment reference list.
         * The list contents are of type {@link uml.LinkEndData}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The LinkEndData identifying the values on the ends of the links acting on by this LinkAction.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>End Data</em>' containment reference list.
         * @see uml.UmlPackage#getLinkAction_EndData()
         * @model containment="true" lower="2" ordered="false"
         * @generated
         */
        getEndData() : org.eclipse.emf.common.util.EList<uml.LinkEndData>;

        /**
         * Returns the value of the '<em><b>Input Value</b></em>' containment reference list.
         * The list contents are of type {@link uml.InputPin}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * InputPins used by the LinkEndData of the LinkAction.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Input Value</em>' containment reference list.
         * @see uml.UmlPackage#getLinkAction_InputValue()
         * @model containment="true" required="true" ordered="false"
         * @generated
         */
        getInputValue() : org.eclipse.emf.common.util.EList<uml.InputPin>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The inputValue InputPins is the same as the union of all the InputPins referenced by the endData.
         * inputValue->asBag()=endData.allPins()
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        same_pins(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The ends of the endData must all be from the same Association and include all and only the memberEnds of that association.
         * endData.end = self.association().memberEnd->asBag()
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        same_association(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The ends of the endData must not be static.
         * endData->forAll(not end.isStatic)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        not_static(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Returns the Association acted on by this LinkAction.
         * result = (endData->asSequence()->first().end.association)
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @model required="true" ordered="false"
         * @generated
         * @return {*}
         */
        association() : uml.Association;
    }
}

