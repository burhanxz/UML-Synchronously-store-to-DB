/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Parameter</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A Parameter is a specification of an argument used to pass information into or out of an invocation of a BehavioralFeature.  Parameters can be treated as ConnectableElements within Collaborations.
     * <p>From package UML::Classification.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.Parameter#getDefault}</li>
     * <li>{@link uml.Parameter#getDefaultValue}</li>
     * <li>{@link uml.Parameter#getDirection}</li>
     * <li>{@link uml.Parameter#getEffect}</li>
     * <li>{@link uml.Parameter#isIsException}</li>
     * <li>{@link uml.Parameter#isIsStream}</li>
     * <li>{@link uml.Parameter#getOperation}</li>
     * <li>{@link uml.Parameter#getParameterSet}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getParameter()
     * @model
     * @generated
     * @class
     */
    export interface Parameter extends uml.ConnectableElement, uml.MultiplicityElement {
        /**
         * Returns the value of the '<em><b>Default</b></em>' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A String that represents a value to be used when no argument is supplied for the Parameter.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {string} the value of the '<em>Default</em>' attribute.
         * @see #isSetDefault()
         * @see #unsetDefault()
         * @see #setDefault(String)
         * @see uml.UmlPackage#getParameter_Default()
         * @model unsettable="true" dataType="types.String" transient="true" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getDefault() : string;

        /**
         * Sets the value of the '{@link uml.Parameter#getDefault}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {string} value the new value of the '<em>Default</em>' attribute.
         * @see #isSetDefault()
         * @see #unsetDefault()
         * @see #getDefault()
         * @generated
         */
        setDefault(value : string);

        /**
         * Unsets the value of the '{@link uml.Parameter#getDefault}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #isSetDefault()
         * @see #getDefault()
         * @see #setDefault(String)
         * @generated
         */
        unsetDefault();

        /**
         * Returns whether the value of the '{@link uml.Parameter#getDefault}' attribute is set.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {boolean} whether the value of the '<em>Default</em>' attribute is set.
         * @see #unsetDefault()
         * @see #getDefault()
         * @see #setDefault(String)
         * @generated
         */
        isSetDefault() : boolean;

        /**
         * Returns the value of the '<em><b>Default Value</b></em>' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Specifies a ValueSpecification that represents a value to be used when no argument is supplied for the Parameter.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Default Value</em>' containment reference.
         * @see #setDefaultValue(ValueSpecification)
         * @see uml.UmlPackage#getParameter_DefaultValue()
         * @model containment="true" ordered="false"
         * @generated
         */
        getDefaultValue() : uml.ValueSpecification;

        /**
         * Sets the value of the '{@link uml.Parameter#getDefaultValue}' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Default Value</em>' containment reference.
         * @see #getDefaultValue()
         * @generated
         */
        setDefaultValue(value : uml.ValueSpecification);

        /**
         * Returns the value of the '<em><b>Direction</b></em>' attribute.
         * The default value is <code>"in"</code>.
         * The literals are from the enumeration {@link uml.ParameterDirectionKind}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Indicates whether a parameter is being sent into or out of a behavioral element.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {uml.ParameterDirectionKind} the value of the '<em>Direction</em>' attribute.
         * @see uml.ParameterDirectionKind
         * @see #setDirection(ParameterDirectionKind)
         * @see uml.UmlPackage#getParameter_Direction()
         * @model default="in" required="true" ordered="false"
         * @generated
         */
        getDirection() : uml.ParameterDirectionKind;

        /**
         * Sets the value of the '{@link uml.Parameter#getDirection}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {uml.ParameterDirectionKind} value the new value of the '<em>Direction</em>' attribute.
         * @see uml.ParameterDirectionKind
         * @see #getDirection()
         * @generated
         */
        setDirection(value : uml.ParameterDirectionKind);

        /**
         * Returns the value of the '<em><b>Effect</b></em>' attribute.
         * The literals are from the enumeration {@link uml.ParameterEffectKind}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Specifies the effect that executions of the owner of the Parameter have on objects passed in or out of the parameter.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {uml.ParameterEffectKind} the value of the '<em>Effect</em>' attribute.
         * @see uml.ParameterEffectKind
         * @see #isSetEffect()
         * @see #unsetEffect()
         * @see #setEffect(ParameterEffectKind)
         * @see uml.UmlPackage#getParameter_Effect()
         * @model unsettable="true" ordered="false"
         * @generated
         */
        getEffect() : uml.ParameterEffectKind;

        /**
         * Sets the value of the '{@link uml.Parameter#getEffect}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {uml.ParameterEffectKind} value the new value of the '<em>Effect</em>' attribute.
         * @see uml.ParameterEffectKind
         * @see #isSetEffect()
         * @see #unsetEffect()
         * @see #getEffect()
         * @generated
         */
        setEffect(value : uml.ParameterEffectKind);

        /**
         * Unsets the value of the '{@link uml.Parameter#getEffect}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #isSetEffect()
         * @see #getEffect()
         * @see #setEffect(ParameterEffectKind)
         * @generated
         */
        unsetEffect();

        /**
         * Returns whether the value of the '{@link uml.Parameter#getEffect}' attribute is set.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {boolean} whether the value of the '<em>Effect</em>' attribute is set.
         * @see #unsetEffect()
         * @see #getEffect()
         * @see #setEffect(ParameterEffectKind)
         * @generated
         */
        isSetEffect() : boolean;

        /**
         * Returns the value of the '<em><b>Is Exception</b></em>' attribute.
         * The default value is <code>"false"</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Tells whether an output parameter may emit a value to the exclusion of the other outputs.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {boolean} the value of the '<em>Is Exception</em>' attribute.
         * @see #setIsException(boolean)
         * @see uml.UmlPackage#getParameter_IsException()
         * @model default="false" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         */
        isIsException() : boolean;

        /**
         * Sets the value of the '{@link uml.Parameter#isIsException}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {boolean} value the new value of the '<em>Is Exception</em>' attribute.
         * @see #isIsException()
         * @generated
         */
        setIsException(value : boolean);

        /**
         * Returns the value of the '<em><b>Is Stream</b></em>' attribute.
         * The default value is <code>"false"</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Tells whether an input parameter may accept values while its behavior is executing, or whether an output parameter may post values while the behavior is executing.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {boolean} the value of the '<em>Is Stream</em>' attribute.
         * @see #setIsStream(boolean)
         * @see uml.UmlPackage#getParameter_IsStream()
         * @model default="false" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         */
        isIsStream() : boolean;

        /**
         * Sets the value of the '{@link uml.Parameter#isIsStream}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {boolean} value the new value of the '<em>Is Stream</em>' attribute.
         * @see #isIsStream()
         * @generated
         */
        setIsStream(value : boolean);

        /**
         * Returns the value of the '<em><b>Operation</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Operation owning this parameter.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Operation</em>' reference.
         * @see uml.UmlPackage#getParameter_Operation()
         * @model transient="true" changeable="false" volatile="true" ordered="false"
         * @generated
         */
        getOperation() : uml.Operation;

        /**
         * Returns the value of the '<em><b>Parameter Set</b></em>' reference list.
         * The list contents are of type {@link uml.ParameterSet}.
         * It is bidirectional and its opposite is '{@link uml.ParameterSet#getParameter}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The ParameterSets containing the parameter. See ParameterSet.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Parameter Set</em>' reference list.
         * @see uml.UmlPackage#getParameter_ParameterSet()
         * @see uml.ParameterSet#getParameter
         * @model opposite="parameter" ordered="false"
         * @generated
         */
        getParameterSet() : org.eclipse.emf.common.util.EList<uml.ParameterSet>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Only in and inout Parameters may have a delete effect. Only out, inout, and return Parameters may have a create effect.
         * (effect = ParameterEffectKind::delete implies (direction = ParameterDirectionKind::_'in' or direction = ParameterDirectionKind::inout))
         * and
         * (effect = ParameterEffectKind::create implies (direction = ParameterDirectionKind::out or direction = ParameterDirectionKind::inout or direction = ParameterDirectionKind::return))
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        in_and_out(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * An input Parameter cannot be an exception.
         * isException implies (direction <> ParameterDirectionKind::_'in' and direction <> ParameterDirectionKind::inout)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        not_exception(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A Parameter may only be associated with a Connector end within the context of a Collaboration.
         * end->notEmpty() implies collaboration->notEmpty()
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        connector_end(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Reentrant behaviors cannot have stream Parameters.
         * (isStream and behavior <> null) implies not behavior.isReentrant
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        reentrant_behaviors(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A Parameter cannot be a stream and exception at the same time.
         * not (isException and isStream)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        stream_and_exception(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Parameters typed by DataTypes cannot have an effect.
         * (type.oclIsKindOf(DataType)) implies (effect = null)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        object_effect(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Sets the default value for this parameter to the specified Boolean value.
         * @param {boolean} value The new default value.
         * <!-- end-model-doc -->
         * @model valueDataType="types.Boolean" valueRequired="true" valueOrdered="false"
         * @generated
         */
        setBooleanDefaultValue(value : boolean);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Sets the default value for this parameter to the specified integer value.
         * @param {number} value The new default value.
         * <!-- end-model-doc -->
         * @model valueDataType="types.Integer" valueRequired="true" valueOrdered="false"
         * @generated
         */
        setIntegerDefaultValue(value : number);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Sets the default value for this parameter to the null value.
         * <!-- end-model-doc -->
         * @model
         * @generated
         */
        setNullDefaultValue();

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Sets the default value for this parameter to the specified real value.
         * @param {number} value The new default value.
         * <!-- end-model-doc -->
         * @model valueDataType="types.Real" valueRequired="true" valueOrdered="false"
         * @generated
         */
        setRealDefaultValue(value : number);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Sets the default value for this parameter to the specified string value.
         * @param {string} value The new default value.
         * <!-- end-model-doc -->
         * @model valueDataType="types.String" valueRequired="true" valueOrdered="false"
         * @generated
         */
        setStringDefaultValue(value : string);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Sets the default value for this parameter to the specified unlimited natural value.
         * @param {number} value The new default value.
         * <!-- end-model-doc -->
         * @model valueDataType="types.UnlimitedNatural" valueRequired="true" valueOrdered="false"
         * @generated
         */
        setUnlimitedNaturalDefaultValue(value : number);
    }
}

