/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace standard {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Instantiate</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A usage dependency among classifiers indicating that operations on the client create instances of the supplier.
     * <p>From package StandardProfile (URI {@literal http://www.omg.org/spec/UML/20131001/StandardProfile}).</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link standard.Instantiate#getBase_Usage}</li>
     * </ul>
     * 
     * @see standard.StandardPackage#getInstantiate()
     * @model
     * @generated
     * @class
     */
    export interface Instantiate extends org.eclipse.emf.ecore.EObject {
        /**
         * Returns the value of the '<em><b>Base Usage</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * <p>From package StandardProfile (URI {@literal http://www.omg.org/spec/UML/20131001/StandardProfile}).</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Base Usage</em>' reference.
         * @see #setBase_Usage(Usage)
         * @see standard.StandardPackage#getInstantiate_Base_Usage()
         * @model required="true" ordered="false"
         * @generated
         */
        getBase_Usage() : uml.Usage;

        /**
         * Sets the value of the '{@link standard.Instantiate#getBase_Usage}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Base Usage</em>' reference.
         * @see #getBase_Usage()
         * @generated
         */
        setBase_Usage(value : uml.Usage);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * self.base_Usage.client->forAll(oclIsKindOf(Classifier)) and self.base_Usage.supplier->forAll(oclIsKindOf(Classifier))
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        client_and_supplier_are_classifiers(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

