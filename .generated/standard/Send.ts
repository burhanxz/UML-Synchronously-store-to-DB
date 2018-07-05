/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace standard {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Send</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A Usage whose client is an Operation and whose supplier is a Signal, specifying that the Operation sends the Signal.
     * <p>From package StandardProfile (URI {@literal http://www.omg.org/spec/UML/20131001/StandardProfile}).</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link standard.Send#getBase_Usage}</li>
     * </ul>
     * 
     * @see standard.StandardPackage#getSend()
     * @model
     * @generated
     * @class
     */
    export interface Send extends org.eclipse.emf.ecore.EObject {
        /**
         * Returns the value of the '<em><b>Base Usage</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * <p>From package StandardProfile (URI {@literal http://www.omg.org/spec/UML/20131001/StandardProfile}).</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Base Usage</em>' reference.
         * @see #setBase_Usage(Usage)
         * @see standard.StandardPackage#getSend_Base_Usage()
         * @model required="true" ordered="false"
         * @generated
         */
        getBase_Usage() : uml.Usage;

        /**
         * Sets the value of the '{@link standard.Send#getBase_Usage}' reference.
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
         * self.base_Usage.client->forAll(oclIsKindOf(Operation)) and self.base_Usage.supplier->forAll(oclIsKindOf(Signal))
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        client_operation_sends_supplier_signal(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

