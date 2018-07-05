/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Create Link Action</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A CreateLinkAction is a WriteLinkAction for creating links.
     * <p>From package UML::Actions.</p>
     * <!-- end-model-doc -->
     * 
     * 
     * @see uml.UmlPackage#getCreateLinkAction()
     * @model
     * @generated
     * @class
     */
    export interface CreateLinkAction extends uml.WriteLinkAction {
        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Association cannot be an abstract Classifier.
         * not self.association().isAbstract
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        association_not_abstract(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

