/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Packageable Element</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A PackageableElement is a NamedElement that may be owned directly by a Package. A PackageableElement is also able to serve as the parameteredElement of a TemplateParameter.
     * <p>From package UML::CommonStructure.</p>
     * <!-- end-model-doc -->
     * 
     * 
     * @see uml.UmlPackage#getPackageableElement()
     * @model abstract="true"
     * @generated
     * @class
     */
    export interface PackageableElement extends uml.NamedElement, uml.ParameterableElement {
        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A PackageableElement owned by a Namespace must have a visibility.
         * visibility = null implies namespace = null
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        namespace_needs_visibility(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

