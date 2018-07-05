/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Qualifier Value</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A QualifierValue is an Element that is used as part of LinkEndData to provide the value for a single qualifier of the end given by the LinkEndData.
     * <p>From package UML::Actions.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.QualifierValue#getQualifier}</li>
     * <li>{@link uml.QualifierValue#getValue}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getQualifierValue()
     * @model
     * @generated
     * @class
     */
    export interface QualifierValue extends uml.Element {
        /**
         * Returns the value of the '<em><b>Qualifier</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The qualifier Property for which the value is to be specified.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Qualifier</em>' reference.
         * @see #setQualifier(Property)
         * @see uml.UmlPackage#getQualifierValue_Qualifier()
         * @model required="true" ordered="false"
         * @generated
         */
        getQualifier() : uml.Property;

        /**
         * Sets the value of the '{@link uml.QualifierValue#getQualifier}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Qualifier</em>' reference.
         * @see #getQualifier()
         * @generated
         */
        setQualifier(value : uml.Property);

        getValue(stereotype? : any, propertyName? : any) : any;

        setValue(stereotype? : any, propertyName? : any, newValue? : any) : any;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The multiplicity of the value InputPin is 1..1.
         * value.is(1,1)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        multiplicity_of_qualifier(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The type of the value InputPin conforms to the type of the qualifier Property.
         * value.type.conformsTo(qualifier.type)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        type_of_qualifier(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The qualifier must be a qualifier of the Association end of the linkEndData that owns this QualifierValue.
         * linkEndData.end.qualifier->includes(qualifier)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        qualifier_attribute(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

