/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace standard {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Create</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * When applied to a Usage, denotes that the client classifier creates instances of the supplier classifier. When applied to a BehavioralFeature, specifies that the designated feature creates an instance of the classifier to which the feature is attached.
     * <p>From package StandardProfile (URI {@literal http://www.omg.org/spec/UML/20131001/StandardProfile}).</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link standard.Create#getBase_BehavioralFeature}</li>
     * <li>{@link standard.Create#getBase_Usage}</li>
     * </ul>
     * 
     * @see standard.StandardPackage#getCreate()
     * @model
     * @generated
     * @class
     */
    export interface Create extends org.eclipse.emf.ecore.EObject {
        /**
         * Returns the value of the '<em><b>Base Behavioral Feature</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * <p>From package StandardProfile (URI {@literal http://www.omg.org/spec/UML/20131001/StandardProfile}).</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Base Behavioral Feature</em>' reference.
         * @see #setBase_BehavioralFeature(BehavioralFeature)
         * @see standard.StandardPackage#getCreate_Base_BehavioralFeature()
         * @model ordered="false"
         * @generated
         */
        getBase_BehavioralFeature() : uml.BehavioralFeature;

        /**
         * Sets the value of the '{@link standard.Create#getBase_BehavioralFeature}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Base Behavioral Feature</em>' reference.
         * @see #getBase_BehavioralFeature()
         * @generated
         */
        setBase_BehavioralFeature(value : uml.BehavioralFeature);

        /**
         * Returns the value of the '<em><b>Base Usage</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * <p>From package StandardProfile (URI {@literal http://www.omg.org/spec/UML/20131001/StandardProfile}).</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Base Usage</em>' reference.
         * @see #setBase_Usage(Usage)
         * @see standard.StandardPackage#getCreate_Base_Usage()
         * @model ordered="false"
         * @generated
         */
        getBase_Usage() : uml.Usage;

        /**
         * Sets the value of the '{@link standard.Create#getBase_Usage}' reference.
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
         * self.base_Usage->notEmpty() implies (self.base_Usage.client->forAll(oclIsKindOf(Classifier)) and self.base_Usage.supplier->forAll(oclIsKindOf(Classifier)))
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

