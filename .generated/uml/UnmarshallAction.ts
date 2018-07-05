/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Unmarshall Action</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * An UnmarshallAction is an Action that retrieves the values of the StructuralFeatures of an object and places them on OutputPins.
     * <p>From package UML::Actions.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.UnmarshallAction#getObject}</li>
     * <li>{@link uml.UnmarshallAction#getResult}</li>
     * <li>{@link uml.UnmarshallAction#getUnmarshallType}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getUnmarshallAction()
     * @model
     * @generated
     * @class
     */
    export interface UnmarshallAction extends uml.Action {
        /**
         * Returns the value of the '<em><b>Object</b></em>' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The InputPin that gives the object to be unmarshalled.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Object</em>' containment reference.
         * @see #setObject(InputPin)
         * @see uml.UmlPackage#getUnmarshallAction_Object()
         * @model containment="true" required="true" ordered="false"
         * @generated
         */
        getObject() : uml.InputPin;

        /**
         * Sets the value of the '{@link uml.UnmarshallAction#getObject}' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Object</em>' containment reference.
         * @see #getObject()
         * @generated
         */
        setObject(value : uml.InputPin);

        /**
         * Returns the value of the '<em><b>Result</b></em>' containment reference list.
         * The list contents are of type {@link uml.OutputPin}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The OutputPins on which are placed the values of the StructuralFeatures of the input object.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Result</em>' containment reference list.
         * @see uml.UmlPackage#getUnmarshallAction_Result()
         * @model containment="true" required="true"
         * @generated
         */
        getResult() : org.eclipse.emf.common.util.EList<uml.OutputPin>;

        /**
         * Returns the value of the '<em><b>Unmarshall Type</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The type of the object to be unmarshalled.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Unmarshall Type</em>' reference.
         * @see #setUnmarshallType(Classifier)
         * @see uml.UmlPackage#getUnmarshallAction_UnmarshallType()
         * @model required="true" ordered="false"
         * @generated
         */
        getUnmarshallType() : uml.Classifier;

        /**
         * Sets the value of the '{@link uml.UnmarshallAction#getUnmarshallType}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Unmarshall Type</em>' reference.
         * @see #getUnmarshallType()
         * @generated
         */
        setUnmarshallType(value : uml.Classifier);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The unmarshallType must have at least one StructuralFeature.
         * unmarshallType.allAttributes()->size() >= 1
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        structural_feature(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The number of result outputPins must be the same as the number of attributes of the unmarshallType.
         * unmarshallType.allAttributes()->size() = result->size()
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        number_of_result(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The type, ordering and multiplicity of each attribute of the unmarshallType must be compatible with the type, ordering and multiplicity of the corresponding result OutputPin.
         * let attribute:OrderedSet(Property) = unmarshallType.allAttributes() in
         * Sequence{1..result->size()}->forAll(i |
         * attribute->at(i).type.conformsTo(result->at(i).type) and
         * attribute->at(i).isOrdered=result->at(i).isOrdered and
         * attribute->at(i).compatibleWith(result->at(i)))
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        type_ordering_and_multiplicity(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

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
        multiplicity_of_object(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The type of the object InputPin conform to the unmarshallType.
         * object.type.conformsTo(unmarshallType)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        object_type(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

