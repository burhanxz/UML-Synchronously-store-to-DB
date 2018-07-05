/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace standard {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Destroy</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * Specifies that the designated feature destroys an instance of the classifier to which the feature is attached.
     * <p>From package StandardProfile (URI {@literal http://www.omg.org/spec/UML/20131001/StandardProfile}).</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link standard.Destroy#getBase_BehavioralFeature}</li>
     * </ul>
     * 
     * @see standard.StandardPackage#getDestroy()
     * @model
     * @generated
     * @class
     */
    export interface Destroy extends org.eclipse.emf.ecore.EObject {
        /**
         * Returns the value of the '<em><b>Base Behavioral Feature</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * <p>From package StandardProfile (URI {@literal http://www.omg.org/spec/UML/20131001/StandardProfile}).</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Base Behavioral Feature</em>' reference.
         * @see #setBase_BehavioralFeature(BehavioralFeature)
         * @see standard.StandardPackage#getDestroy_Base_BehavioralFeature()
         * @model required="true" ordered="false"
         * @generated
         */
        getBase_BehavioralFeature() : uml.BehavioralFeature;

        /**
         * Sets the value of the '{@link standard.Destroy#getBase_BehavioralFeature}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Base Behavioral Feature</em>' reference.
         * @see #getBase_BehavioralFeature()
         * @generated
         */
        setBase_BehavioralFeature(value : uml.BehavioralFeature);
    }
}

