/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Occurrence Specification</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * An OccurrenceSpecification is the basic semantic unit of Interactions. The sequences of occurrences specified by them are the meanings of Interactions.
     * <p>From package UML::Interactions.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.OccurrenceSpecification#getToAfter}</li>
     * <li>{@link uml.OccurrenceSpecification#getToBefore}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getOccurrenceSpecification()
     * @model
     * @generated
     * @class
     */
    export interface OccurrenceSpecification extends uml.InteractionFragment {
        /**
         * Returns the value of the '<em><b>To After</b></em>' reference list.
         * The list contents are of type {@link uml.GeneralOrdering}.
         * It is bidirectional and its opposite is '{@link uml.GeneralOrdering#getBefore}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * References the GeneralOrderings that specify EventOcurrences that must occur after this OccurrenceSpecification.
         * <p>From package UML::Interactions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>To After</em>' reference list.
         * @see uml.UmlPackage#getOccurrenceSpecification_ToAfter()
         * @see uml.GeneralOrdering#getBefore
         * @model opposite="before" ordered="false"
         * @generated
         */
        getToAfter() : org.eclipse.emf.common.util.EList<uml.GeneralOrdering>;

        /**
         * Returns the value of the '<em><b>To Before</b></em>' reference list.
         * The list contents are of type {@link uml.GeneralOrdering}.
         * It is bidirectional and its opposite is '{@link uml.GeneralOrdering#getAfter}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * References the GeneralOrderings that specify EventOcurrences that must occur before this OccurrenceSpecification.
         * <p>From package UML::Interactions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>To Before</em>' reference list.
         * @see uml.UmlPackage#getOccurrenceSpecification_ToBefore()
         * @see uml.GeneralOrdering#getAfter
         * @model opposite="after" ordered="false"
         * @generated
         */
        getToBefore() : org.eclipse.emf.common.util.EList<uml.GeneralOrdering>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Returns the Lifeline on which the OccurrenceSpecification appears.
         * <!-- end-model-doc -->
         * @model kind="operation" ordered="false"
         * @generated
         * @return {*}
         */
        getCovered() : uml.Lifeline;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Sets the Lifeline on which the OccurrenceSpecification appears.
         * <!-- end-model-doc -->
         * @model valueRequired="true" valueOrdered="false"
         * @generated
         * @param {*} value
         */
        setCovered(value : uml.Lifeline);
    }
}

