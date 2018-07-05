/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Value Specification</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A ValueSpecification is the specification of a (possibly empty) set of values. A ValueSpecification is a ParameterableElement that may be exposed as a formal TemplateParameter and provided as the actual parameter in the binding of a template.
     * <p>From package UML::Values.</p>
     * <!-- end-model-doc -->
     * 
     * 
     * @see uml.UmlPackage#getValueSpecification()
     * @model abstract="true"
     * @generated
     * @class
     */
    export interface ValueSpecification extends uml.PackageableElement, uml.TypedElement {
        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The query booleanValue() gives a single Boolean value when one can be computed.
         * result = (null)
         * <p>From package UML::Values.</p>
         * <!-- end-model-doc -->
         * @model dataType="types.Boolean" ordered="false"
         * @generated
         * @return {boolean}
         */
        booleanValue() : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The query integerValue() gives a single Integer value when one can be computed.
         * result = (null)
         * <p>From package UML::Values.</p>
         * <!-- end-model-doc -->
         * @model dataType="types.Integer" ordered="false"
         * @generated
         * @return {number}
         */
        integerValue() : number;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The query isComputable() determines whether a value specification can be computed in a model. This operation cannot be fully defined in OCL. A conforming implementation is expected to deliver true for this operation for all ValueSpecifications that it can compute, and to compute all of those for which the operation is true. A conforming implementation is expected to be able to compute at least the value of all LiteralSpecifications.
         * result = (false)
         * <p>From package UML::Values.</p>
         * <!-- end-model-doc -->
         * @model kind="operation" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         * @return {boolean}
         */
        isComputable() : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The query isNull() returns true when it can be computed that the value is null.
         * result = (false)
         * <p>From package UML::Values.</p>
         * <!-- end-model-doc -->
         * @model kind="operation" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         * @return {boolean}
         */
        isNull() : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The query realValue() gives a single Real value when one can be computed.
         * result = (null)
         * <p>From package UML::Values.</p>
         * <!-- end-model-doc -->
         * @model dataType="types.Real" ordered="false"
         * @generated
         * @return {number}
         */
        realValue() : number;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The query stringValue() gives a single String value when one can be computed.
         * result = (null)
         * <p>From package UML::Values.</p>
         * <!-- end-model-doc -->
         * @model dataType="types.String" ordered="false"
         * @generated
         * @return {string}
         */
        stringValue() : string;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The query unlimitedValue() gives a single UnlimitedNatural value when one can be computed.
         * result = (null)
         * <p>From package UML::Values.</p>
         * <!-- end-model-doc -->
         * @model dataType="types.UnlimitedNatural" ordered="false"
         * @generated
         * @return {number}
         */
        unlimitedValue() : number;
    }
}

