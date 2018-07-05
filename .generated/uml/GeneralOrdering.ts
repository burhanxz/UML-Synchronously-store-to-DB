/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>General Ordering</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A GeneralOrdering represents a binary relation between two OccurrenceSpecifications, to describe that one OccurrenceSpecification must occur before the other in a valid trace. This mechanism provides the ability to define partial orders of OccurrenceSpecifications that may otherwise not have a specified order.
     * <p>From package UML::Interactions.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.GeneralOrdering#getAfter}</li>
     * <li>{@link uml.GeneralOrdering#getBefore}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getGeneralOrdering()
     * @model
     * @generated
     * @class
     */
    export interface GeneralOrdering extends uml.NamedElement {
        /**
         * Returns the value of the '<em><b>After</b></em>' reference.
         * It is bidirectional and its opposite is '{@link uml.OccurrenceSpecification#getToBefore}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The OccurrenceSpecification referenced comes after the OccurrenceSpecification referenced by before.
         * <p>From package UML::Interactions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>After</em>' reference.
         * @see #setAfter(OccurrenceSpecification)
         * @see uml.UmlPackage#getGeneralOrdering_After()
         * @see uml.OccurrenceSpecification#getToBefore
         * @model opposite="toBefore" required="true" ordered="false"
         * @generated
         */
        getAfter() : uml.OccurrenceSpecification;

        /**
         * Sets the value of the '{@link uml.GeneralOrdering#getAfter}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>After</em>' reference.
         * @see #getAfter()
         * @generated
         */
        setAfter(value : uml.OccurrenceSpecification);

        /**
         * Returns the value of the '<em><b>Before</b></em>' reference.
         * It is bidirectional and its opposite is '{@link uml.OccurrenceSpecification#getToAfter}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The OccurrenceSpecification referenced comes before the OccurrenceSpecification referenced by after.
         * <p>From package UML::Interactions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Before</em>' reference.
         * @see #setBefore(OccurrenceSpecification)
         * @see uml.UmlPackage#getGeneralOrdering_Before()
         * @see uml.OccurrenceSpecification#getToAfter
         * @model opposite="toAfter" required="true" ordered="false"
         * @generated
         */
        getBefore() : uml.OccurrenceSpecification;

        /**
         * Sets the value of the '{@link uml.GeneralOrdering#getBefore}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Before</em>' reference.
         * @see #getBefore()
         * @generated
         */
        setBefore(value : uml.OccurrenceSpecification);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * An occurrence specification must not be ordered relative to itself through a series of general orderings. (In other words, the transitive closure of the general orderings is irreflexive.)
         * after->closure(toAfter.after)->excludes(before)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        irreflexive_transitive_closure(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

