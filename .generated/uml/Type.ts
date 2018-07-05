/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Type</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A Type constrains the values represented by a TypedElement.
     * <p>From package UML::CommonStructure.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.Type#getPackage}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getType()
     * @model abstract="true"
     * @generated
     * @class
     */
    export interface Type extends uml.PackageableElement {
        /**
         * Returns the value of the '<em><b>Package</b></em>' reference.
         * It is bidirectional and its opposite is '{@link uml.Package#getOwnedType}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Specifies the owning Package of this Type, if any.
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Package</em>' reference.
         * @see #setPackage(uml.Package)
         * @see uml.UmlPackage#getType_Package()
         * @see uml.Package#getOwnedType
         * @model opposite="ownedType" transient="true" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getPackage() : uml.Package;

        /**
         * Sets the value of the '{@link uml.Type#getPackage}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Package</em>' reference.
         * @see #getPackage()
         * @generated
         */
        setPackage(value : uml.Package);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Creates a(n) (binary) association between this type and the specified other type, with the specified navigabilities, aggregations, names, lower bounds, and upper bounds, and owned by this type's nearest package.
         * @param {boolean} end1IsNavigable The navigability for the first end of the new association.
         * @param {uml.AggregationKind} end1Aggregation The aggregation for the first end of the new association.
         * @param {string} end1Name The name for the first end of the new association.
         * @param {number} end1Lower The lower bound for the first end of the new association.
         * @param {number} end1Upper The upper bound for the first end of the new association.
         * @param {*} end1Type The type for the first end of the new association.
         * @param {boolean} end2IsNavigable The navigability for the second end of the new association.
         * @param {uml.AggregationKind} end2Aggregation The aggregation for the second end of the new association.
         * @param {string} end2Name The name for the second end of the new association.
         * @param {number} end2Lower The lower bound for the second end of the new association.
         * @param {number} end2Upper The upper bound for the second end of the new association.
         * <!-- end-model-doc -->
         * @model required="true" ordered="false" end1IsNavigableDataType="types.Boolean" end1IsNavigableRequired="true" end1IsNavigableOrdered="false" end1AggregationRequired="true" end1AggregationOrdered="false" end1NameDataType="types.String" end1NameRequired="true" end1NameOrdered="false" end1LowerDataType="types.Integer" end1LowerRequired="true" end1LowerOrdered="false" end1UpperDataType="types.UnlimitedNatural" end1UpperRequired="true" end1UpperOrdered="false" end1TypeRequired="true" end1TypeOrdered="false" end2IsNavigableDataType="types.Boolean" end2IsNavigableRequired="true" end2IsNavigableOrdered="false" end2AggregationRequired="true" end2AggregationOrdered="false" end2NameDataType="types.String" end2NameRequired="true" end2NameOrdered="false" end2LowerDataType="types.Integer" end2LowerRequired="true" end2LowerOrdered="false" end2UpperDataType="types.UnlimitedNatural" end2UpperRequired="true" end2UpperOrdered="false"
         * @generated
         * @return {*}
         */
        createAssociation(end1IsNavigable : boolean, end1Aggregation : uml.AggregationKind, end1Name : string, end1Lower : number, end1Upper : number, end1Type : Type, end2IsNavigable : boolean, end2Aggregation : uml.AggregationKind, end2Name : string, end2Lower : number, end2Upper : number) : uml.Association;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Retrieves the associations in which this type is involved.
         * <!-- end-model-doc -->
         * @model kind="operation" ordered="false"
         * @generated
         * @return {*}
         */
        getAssociations() : org.eclipse.emf.common.util.EList<uml.Association>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The query conformsTo() gives true for a Type that conforms to another. By default, two Types do not conform to each other. This query is intended to be redefined for specific conformance situations.
         * result = (false)
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @model dataType="types.Boolean" required="true" ordered="false" otherRequired="true" otherOrdered="false"
         * @generated
         * @param {*} other
         * @return {boolean}
         */
        conformsTo(other : Type) : boolean;
    }
}

