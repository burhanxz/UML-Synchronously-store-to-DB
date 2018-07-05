/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Enumeration</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * An Enumeration is a DataType whose values are enumerated in the model as EnumerationLiterals.
     * <p>From package UML::SimpleClassifiers.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.Enumeration#getOwnedLiteral}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getEnumeration()
     * @model
     * @generated
     * @class
     */
    export interface Enumeration extends uml.DataType {
        /**
         * Returns the value of the '<em><b>Owned Literal</b></em>' containment reference list.
         * The list contents are of type {@link uml.EnumerationLiteral}.
         * It is bidirectional and its opposite is '{@link uml.EnumerationLiteral#getEnumeration}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The ordered set of literals owned by this Enumeration.
         * <p>From package UML::SimpleClassifiers.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Owned Literal</em>' containment reference list.
         * @see uml.UmlPackage#getEnumeration_OwnedLiteral()
         * @see uml.EnumerationLiteral#getEnumeration
         * @model opposite="enumeration" containment="true"
         * @generated
         */
        getOwnedLiteral() : org.eclipse.emf.common.util.EList<uml.EnumerationLiteral>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * ownedAttribute->forAll(isReadOnly)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        immutable(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

