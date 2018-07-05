/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Classifier Template Parameter</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A ClassifierTemplateParameter exposes a Classifier as a formal template parameter.
     * <p>From package UML::Classification.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.ClassifierTemplateParameter#isAllowSubstitutable}</li>
     * <li>{@link uml.ClassifierTemplateParameter#getConstrainingClassifier}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getClassifierTemplateParameter()
     * @model
     * @generated
     * @class
     */
    export interface ClassifierTemplateParameter extends uml.TemplateParameter {
        /**
         * Returns the value of the '<em><b>Allow Substitutable</b></em>' attribute.
         * The default value is <code>"true"</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Constrains the required relationship between an actual parameter and the parameteredElement for this formal parameter.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {boolean} the value of the '<em>Allow Substitutable</em>' attribute.
         * @see #setAllowSubstitutable(boolean)
         * @see uml.UmlPackage#getClassifierTemplateParameter_AllowSubstitutable()
         * @model default="true" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         */
        isAllowSubstitutable() : boolean;

        /**
         * Sets the value of the '{@link uml.ClassifierTemplateParameter#isAllowSubstitutable}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {boolean} value the new value of the '<em>Allow Substitutable</em>' attribute.
         * @see #isAllowSubstitutable()
         * @generated
         */
        setAllowSubstitutable(value : boolean);

        /**
         * Returns the value of the '<em><b>Constraining Classifier</b></em>' reference list.
         * The list contents are of type {@link uml.Classifier}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The classifiers that constrain the argument that can be used for the parameter. If the allowSubstitutable attribute is true, then any Classifier that is compatible with this constraining Classifier can be substituted; otherwise, it must be either this Classifier or one of its specializations. If this property is empty, there are no constraints on the Classifier that can be used as an argument.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Constraining Classifier</em>' reference list.
         * @see uml.UmlPackage#getClassifierTemplateParameter_ConstrainingClassifier()
         * @model ordered="false"
         * @generated
         */
        getConstrainingClassifier() : org.eclipse.emf.common.util.EList<uml.Classifier>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If allowSubstitutable is true, then there must be a constrainingClassifier.
         * allowSubstitutable implies constrainingClassifier->notEmpty()
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        has_constraining_classifier(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The parameteredElement has no direct features, and if constrainedElement is empty it has no generalizations.
         * parameteredElement.feature->isEmpty() and (constrainingClassifier->isEmpty() implies  parameteredElement.allParents()->isEmpty())
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        parametered_element_no_features(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If the parameteredElement is not abstract, then the Classifier used as an argument shall not be abstract.
         * (not parameteredElement.isAbstract) implies templateParameterSubstitution.actual->forAll(a | not a.oclAsType(Classifier).isAbstract)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        matching_abstract(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The argument to a ClassifierTemplateParameter is a Classifier.
         * templateParameterSubstitution.actual->forAll(a | a.oclIsKindOf(Classifier))
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        actual_is_classifier(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If there are any constrainingClassifiers, then every argument must be the same as or a specialization of them, or if allowSubstitutable is true, then it can also be substitutable.
         * templateParameterSubstitution.actual->forAll( a |
         * let arg : Classifier = a.oclAsType(Classifier) in
         * constrainingClassifier->forAll(
         * cc |
         * arg = cc or arg.conformsTo(cc) or (allowSubstitutable and arg.isSubstitutableFor(cc))
         * )
         * )
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        constraining_classifiers_constrain_args(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If there are any constrainingClassifiers, then the parameteredElement must be the same as or a specialization of them, or if allowSubstitutable is true, then it can also be substitutable.
         * constrainingClassifier->forAll(
         * cc |  parameteredElement = cc or parameteredElement.conformsTo(cc) or (allowSubstitutable and parameteredElement.isSubstitutableFor(cc))
         * )
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        constraining_classifiers_constrain_parametered_element(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

