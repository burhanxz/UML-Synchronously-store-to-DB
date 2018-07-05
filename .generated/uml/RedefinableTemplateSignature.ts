/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Redefinable Template Signature</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A RedefinableTemplateSignature supports the addition of formal template parameters in a specialization of a template classifier.
     * <p>From package UML::Classification.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.RedefinableTemplateSignature#getExtendedSignature}</li>
     * <li>{@link uml.RedefinableTemplateSignature#getInheritedParameter}</li>
     * <li>{@link uml.RedefinableTemplateSignature#getClassifier}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getRedefinableTemplateSignature()
     * @model
     * @generated
     * @class
     */
    export interface RedefinableTemplateSignature extends uml.RedefinableElement, uml.TemplateSignature {
        /**
         * Returns the value of the '<em><b>Extended Signature</b></em>' reference list.
         * The list contents are of type {@link uml.RedefinableTemplateSignature}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The signatures extended by this RedefinableTemplateSignature.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Extended Signature</em>' reference list.
         * @see uml.UmlPackage#getRedefinableTemplateSignature_ExtendedSignature()
         * @model ordered="false"
         * @generated
         */
        getExtendedSignature() : org.eclipse.emf.common.util.EList<RedefinableTemplateSignature>;

        /**
         * Returns the value of the '<em><b>Inherited Parameter</b></em>' reference list.
         * The list contents are of type {@link uml.TemplateParameter}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The formal template parameters of the extended signatures.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Inherited Parameter</em>' reference list.
         * @see uml.UmlPackage#getRedefinableTemplateSignature_InheritedParameter()
         * @model transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getInheritedParameter() : org.eclipse.emf.common.util.EList<uml.TemplateParameter>;

        /**
         * Returns the value of the '<em><b>Classifier</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Classifier that owns this RedefinableTemplateSignature.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Classifier</em>' reference.
         * @see uml.UmlPackage#getRedefinableTemplateSignature_Classifier()
         * @model required="true" transient="true" changeable="false" volatile="true" ordered="false"
         * @generated
         */
        getClassifier() : uml.Classifier;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If any of the parent Classifiers are a template, then the extendedSignature must include the signature of that Classifier.
         * classifier.allParents()->forAll(c | c.ownedTemplateSignature->notEmpty() implies self->closure(extendedSignature)->includes(c.ownedTemplateSignature))
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        redefines_parents(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

