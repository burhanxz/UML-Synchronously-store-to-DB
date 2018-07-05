/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Extension Point</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * An ExtensionPoint identifies a point in the behavior of a UseCase where that behavior can be extended by the behavior of some other (extending) UseCase, as specified by an Extend relationship.
     * <p>From package UML::UseCases.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.ExtensionPoint#getUseCase}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getExtensionPoint()
     * @model
     * @generated
     * @class
     */
    export interface ExtensionPoint extends uml.RedefinableElement {
        /**
         * Returns the value of the '<em><b>Use Case</b></em>' container reference.
         * It is bidirectional and its opposite is '{@link uml.UseCase#getExtensionPoint}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The UseCase that owns this ExtensionPoint.
         * <p>From package UML::UseCases.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Use Case</em>' container reference.
         * @see #setUseCase(UseCase)
         * @see uml.UmlPackage#getExtensionPoint_UseCase()
         * @see uml.UseCase#getExtensionPoint
         * @model opposite="extensionPoint" required="true" transient="false" ordered="false"
         * @generated
         */
        getUseCase() : uml.UseCase;

        /**
         * Sets the value of the '{@link uml.ExtensionPoint#getUseCase}' container reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Use Case</em>' container reference.
         * @see #getUseCase()
         * @generated
         */
        setUseCase(value : uml.UseCase);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * An ExtensionPoint must have a name.
         * name->notEmpty ()
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        must_have_name(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

