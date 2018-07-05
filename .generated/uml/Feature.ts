/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Feature</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A Feature declares a behavioral or structural characteristic of Classifiers.
     * <p>From package UML::Classification.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.Feature#getFeaturingClassifier}</li>
     * <li>{@link uml.Feature#isIsStatic}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getFeature()
     * @model abstract="true"
     * @generated
     * @class
     */
    export interface Feature extends uml.RedefinableElement {
        /**
         * Returns the value of the '<em><b>Featuring Classifier</b></em>' reference list.
         * The list contents are of type {@link uml.Classifier}.
         * It is bidirectional and its opposite is '{@link uml.Classifier#getFeature}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Classifiers that have this Feature as a feature.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Featuring Classifier</em>' reference list.
         * @see uml.UmlPackage#getFeature_FeaturingClassifier()
         * @see uml.Classifier#getFeature
         * @model opposite="feature" transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getFeaturingClassifier() : org.eclipse.emf.common.util.EList<uml.Classifier>;

        /**
         * Returns the value of the '<em><b>Is Static</b></em>' attribute.
         * The default value is <code>"false"</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Specifies whether this Feature characterizes individual instances classified by the Classifier (false) or the Classifier itself (true).
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {boolean} the value of the '<em>Is Static</em>' attribute.
         * @see #setIsStatic(boolean)
         * @see uml.UmlPackage#getFeature_IsStatic()
         * @model default="false" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         */
        isIsStatic() : boolean;

        /**
         * Sets the value of the '{@link uml.Feature#isIsStatic}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {boolean} value the new value of the '<em>Is Static</em>' attribute.
         * @see #isIsStatic()
         * @generated
         */
        setIsStatic(value : boolean);
    }
}

