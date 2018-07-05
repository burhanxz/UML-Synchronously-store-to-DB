/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Multiplicity Element</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A multiplicity is a definition of an inclusive interval of non-negative integers beginning with a lower bound and ending with a (possibly infinite) upper bound. A MultiplicityElement embeds this information to specify the allowable cardinalities for an instantiation of the Element.
     * <p>From package UML::CommonStructure.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.MultiplicityElement#isIsOrdered}</li>
     * <li>{@link uml.MultiplicityElement#isIsUnique}</li>
     * <li>{@link uml.MultiplicityElement#getLower}</li>
     * <li>{@link uml.MultiplicityElement#getLowerValue}</li>
     * <li>{@link uml.MultiplicityElement#getUpper}</li>
     * <li>{@link uml.MultiplicityElement#getUpperValue}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getMultiplicityElement()
     * @model abstract="true"
     * @generated
     * @class
     */
    export interface MultiplicityElement extends uml.Element {
        /**
         * Returns the value of the '<em><b>Is Ordered</b></em>' attribute.
         * The default value is <code>"false"</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * For a multivalued multiplicity, this attribute specifies whether the values in an instantiation of this MultiplicityElement are sequentially ordered.
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @return {boolean} the value of the '<em>Is Ordered</em>' attribute.
         * @see #setIsOrdered(boolean)
         * @see uml.UmlPackage#getMultiplicityElement_IsOrdered()
         * @model default="false" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         */
        isIsOrdered() : boolean;

        /**
         * Sets the value of the '{@link uml.MultiplicityElement#isIsOrdered}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {boolean} value the new value of the '<em>Is Ordered</em>' attribute.
         * @see #isIsOrdered()
         * @generated
         */
        setIsOrdered(value : boolean);

        /**
         * Returns the value of the '<em><b>Is Unique</b></em>' attribute.
         * The default value is <code>"true"</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * For a multivalued multiplicity, this attributes specifies whether the values in an instantiation of this MultiplicityElement are unique.
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @return {boolean} the value of the '<em>Is Unique</em>' attribute.
         * @see #setIsUnique(boolean)
         * @see uml.UmlPackage#getMultiplicityElement_IsUnique()
         * @model default="true" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         */
        isIsUnique() : boolean;

        /**
         * Sets the value of the '{@link uml.MultiplicityElement#isIsUnique}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {boolean} value the new value of the '<em>Is Unique</em>' attribute.
         * @see #isIsUnique()
         * @generated
         */
        setIsUnique(value : boolean);

        /**
         * Returns the value of the '<em><b>Lower</b></em>' attribute.
         * The default value is <code>"1"</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The lower bound of the multiplicity interval.
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @return {number} the value of the '<em>Lower</em>' attribute.
         * @see #setLower(int)
         * @see uml.UmlPackage#getMultiplicityElement_Lower()
         * @model default="1" dataType="types.Integer" transient="true" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getLower() : number;

        /**
         * Sets the value of the '{@link uml.MultiplicityElement#getLower}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {number} value the new value of the '<em>Lower</em>' attribute.
         * @see #getLower()
         * @generated
         */
        setLower(value : number);

        /**
         * Returns the value of the '<em><b>Lower Value</b></em>' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The specification of the lower bound for this multiplicity.
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Lower Value</em>' containment reference.
         * @see #setLowerValue(ValueSpecification)
         * @see uml.UmlPackage#getMultiplicityElement_LowerValue()
         * @model containment="true" ordered="false"
         * @generated
         */
        getLowerValue() : uml.ValueSpecification;

        /**
         * Sets the value of the '{@link uml.MultiplicityElement#getLowerValue}' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Lower Value</em>' containment reference.
         * @see #getLowerValue()
         * @generated
         */
        setLowerValue(value : uml.ValueSpecification);

        /**
         * Returns the value of the '<em><b>Upper</b></em>' attribute.
         * The default value is <code>"1"</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The upper bound of the multiplicity interval.
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @return {number} the value of the '<em>Upper</em>' attribute.
         * @see #setUpper(int)
         * @see uml.UmlPackage#getMultiplicityElement_Upper()
         * @model default="1" dataType="types.UnlimitedNatural" required="true" transient="true" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getUpper() : number;

        /**
         * Sets the value of the '{@link uml.MultiplicityElement#getUpper}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {number} value the new value of the '<em>Upper</em>' attribute.
         * @see #getUpper()
         * @generated
         */
        setUpper(value : number);

        /**
         * Returns the value of the '<em><b>Upper Value</b></em>' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The specification of the upper bound for this multiplicity.
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Upper Value</em>' containment reference.
         * @see #setUpperValue(ValueSpecification)
         * @see uml.UmlPackage#getMultiplicityElement_UpperValue()
         * @model containment="true" ordered="false"
         * @generated
         */
        getUpperValue() : uml.ValueSpecification;

        /**
         * Sets the value of the '{@link uml.MultiplicityElement#getUpperValue}' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Upper Value</em>' containment reference.
         * @see #getUpperValue()
         * @generated
         */
        setUpperValue(value : uml.ValueSpecification);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The upper bound must be greater than or equal to the lower bound.
         * upperBound() >= lowerBound()
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        upper_ge_lower(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The lower bound must be a non-negative integer literal.
         * lowerBound() >= 0
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        lower_ge_0(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If a non-literal ValueSpecification is used for lowerValue or upperValue, then evaluating that specification must not have side effects.
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        value_specification_no_side_effects(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If a non-literal ValueSpecification is used for lowerValue or upperValue, then that specification must be a constant expression.
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        value_specification_constant(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If it is not empty, then lowerValue must have an Integer value.
         * lowerValue <> null implies lowerValue.integerValue() <> null
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        lower_is_integer(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If it is not empty, then upperValue must have an UnlimitedNatural value.
         * upperValue <> null implies upperValue.unlimitedValue() <> null
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        upper_is_unlimitedNatural(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The operation compatibleWith takes another multiplicity as input. It returns true if the other multiplicity is wider than, or the same as, self.
         * result = ((other.lowerBound() <= self.lowerBound()) and ((other.upperBound() = *) or (self.upperBound() <= other.upperBound())))
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @model dataType="types.Boolean" required="true" ordered="false" otherRequired="true" otherOrdered="false"
         * @generated
         * @param {*} other
         * @return {boolean}
         */
        compatibleWith(other : MultiplicityElement) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The query includesMultiplicity() checks whether this multiplicity includes all the cardinalities allowed by the specified multiplicity.
         * self.upperBound()->notEmpty() and self.lowerBound()->notEmpty() and M.upperBound()->notEmpty() and M.lowerBound()->notEmpty()
         * result = ((self.lowerBound() <= M.lowerBound()) and (self.upperBound() >= M.upperBound()))
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @model dataType="types.Boolean" required="true" ordered="false" MRequired="true" MOrdered="false"
         * @generated
         * @param {*} M
         * @return {boolean}
         */
        includesMultiplicity(M : MultiplicityElement) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The operation is determines if the upper and lower bound of the ranges are the ones given.
         * result = (lowerbound = self.lowerBound() and upperbound = self.upperBound())
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @model dataType="types.Boolean" required="true" ordered="false" lowerboundDataType="types.Integer" lowerboundRequired="true" lowerboundOrdered="false" upperboundDataType="types.UnlimitedNatural" upperboundRequired="true" upperboundOrdered="false"
         * @generated
         * @param {number} lowerbound
         * @param {number} upperbound
         * @return {boolean}
         */
        is(lowerbound : number, upperbound : number) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The query isMultivalued() checks whether this multiplicity has an upper bound greater than one.
         * upperBound()->notEmpty()
         * result = (upperBound() > 1)
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @model kind="operation" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         * @return {boolean}
         */
        isMultivalued() : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The query lowerBound() returns the lower bound of the multiplicity as an integer, which is the integerValue of lowerValue, if this is given, and 1 otherwise.
         * result = (if (lowerValue=null or lowerValue.integerValue()=null) then 1 else lowerValue.integerValue() endif)
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @model dataType="types.Integer" ordered="false"
         * @generated
         * @return {number}
         */
        lowerBound() : number;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The query upperBound() returns the upper bound of the multiplicity for a bounded multiplicity as an unlimited natural, which is the unlimitedNaturalValue of upperValue, if given, and 1, otherwise.
         * result = (if (upperValue=null or upperValue.unlimitedValue()=null) then 1 else upperValue.unlimitedValue() endif)
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @model dataType="types.UnlimitedNatural" required="true" ordered="false"
         * @generated
         * @return {number}
         */
        upperBound() : number;
    }
}
