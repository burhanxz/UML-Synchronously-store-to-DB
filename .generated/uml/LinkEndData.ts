/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Link End Data</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * LinkEndData is an Element that identifies on end of a link to be read or written by a LinkAction. As a link (that is not a link object) cannot be passed as a runtime value to or from an Action, it is instead identified by its end objects and qualifier values, if any. A LinkEndData instance provides these values for a single Association end.
     * <p>From package UML::Actions.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.LinkEndData#getEnd}</li>
     * <li>{@link uml.LinkEndData#getQualifier}</li>
     * <li>{@link uml.LinkEndData#getValue}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getLinkEndData()
     * @model
     * @generated
     * @class
     */
    export interface LinkEndData extends uml.Element {
        /**
         * Returns the value of the '<em><b>End</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Association?end?for?which?this?LinkEndData?specifies?values.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>End</em>' reference.
         * @see #setEnd(Property)
         * @see uml.UmlPackage#getLinkEndData_End()
         * @model required="true" ordered="false"
         * @generated
         */
        getEnd() : uml.Property;

        /**
         * Sets the value of the '{@link uml.LinkEndData#getEnd}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>End</em>' reference.
         * @see #getEnd()
         * @generated
         */
        setEnd(value : uml.Property);

        /**
         * Returns the value of the '<em><b>Qualifier</b></em>' containment reference list.
         * The list contents are of type {@link uml.QualifierValue}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A set of QualifierValues used to provide values for the qualifiers of the end.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Qualifier</em>' containment reference list.
         * @see uml.UmlPackage#getLinkEndData_Qualifier()
         * @model containment="true" ordered="false"
         * @generated
         */
        getQualifier() : org.eclipse.emf.common.util.EList<uml.QualifierValue>;

        getValue(stereotype? : any, propertyName? : any) : any;

        setValue(stereotype? : any, propertyName? : any, newValue? : any) : any;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The type of the value InputPin conforms to the type of the Association end.
         * value<>null implies value.type.conformsTo(end.type)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        same_type(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The multiplicity of the value InputPin must be 1..1.
         * value<>null implies value.is(1,1)
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
         * The value InputPin is not also the qualifier value InputPin.
         * value->excludesAll(qualifier.value)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        end_object_input_pin(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Property must be an Association memberEnd.
         * end.association <> null
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        property_is_association_end(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The qualifiers must be qualifiers of the Association end.
         * end.qualifier->includesAll(qualifier.qualifier)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        qualifiers(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Returns all the InputPins referenced by this LinkEndData. By default this includes the value and qualifier InputPins, but subclasses may override the operation to add other InputPins.
         * result = (value->asBag()->union(qualifier.value))
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @model unique="false" ordered="false"
         * @generated
         * @return {*}
         */
        allPins() : org.eclipse.emf.common.util.EList<uml.InputPin>;
    }
}

