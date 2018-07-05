/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Constraint</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A Constraint is a condition or restriction expressed in natural language text or in a machine readable language for the purpose of declaring some of the semantics of an Element or set of Elements.
     * <p>From package UML::CommonStructure.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.Constraint#getConstrainedElement}</li>
     * <li>{@link uml.Constraint#getContext}</li>
     * <li>{@link uml.Constraint#getSpecification}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getConstraint()
     * @model
     * @generated
     * @class
     */
    export interface Constraint extends uml.PackageableElement {
        /**
         * Returns the value of the '<em><b>Constrained Element</b></em>' reference list.
         * The list contents are of type {@link uml.Element}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The ordered set of Elements referenced by this Constraint.
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Constrained Element</em>' reference list.
         * @see uml.UmlPackage#getConstraint_ConstrainedElement()
         * @model
         * @generated
         */
        getConstrainedElement() : org.eclipse.emf.common.util.EList<uml.Element>;

        /**
         * Returns the value of the '<em><b>Context</b></em>' container reference.
         * It is bidirectional and its opposite is '{@link uml.Namespace#getOwnedRule}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Specifies the Namespace that owns the Constraint.
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Context</em>' container reference.
         * @see #setContext(Namespace)
         * @see uml.UmlPackage#getConstraint_Context()
         * @see uml.Namespace#getOwnedRule
         * @model opposite="ownedRule" transient="false" ordered="false"
         * @generated
         */
        getContext() : uml.Namespace;

        /**
         * Sets the value of the '{@link uml.Constraint#getContext}' container reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Context</em>' container reference.
         * @see #getContext()
         * @generated
         */
        setContext(value : uml.Namespace);

        /**
         * Returns the value of the '<em><b>Specification</b></em>' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A condition that must be true when evaluated in order for the Constraint to be satisfied.
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Specification</em>' containment reference.
         * @see #setSpecification(ValueSpecification)
         * @see uml.UmlPackage#getConstraint_Specification()
         * @model containment="true" required="true" ordered="false"
         * @generated
         */
        getSpecification() : uml.ValueSpecification;

        /**
         * Sets the value of the '{@link uml.Constraint#getSpecification}' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Specification</em>' containment reference.
         * @see #getSpecification()
         * @generated
         */
        setSpecification(value : uml.ValueSpecification);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The ValueSpecification for a Constraint must evaluate to a Boolean value.
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        boolean_value(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Evaluating the ValueSpecification for a Constraint must not have side effects.
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        no_side_effects(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A Constraint cannot be applied to itself.
         * not constrainedElement->includes(self)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        not_apply_to_self(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

