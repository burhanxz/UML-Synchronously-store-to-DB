/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Generalization</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A Generalization is a taxonomic relationship between a more general Classifier and a more specific Classifier. Each instance of the specific Classifier is also an instance of the general Classifier. The specific Classifier inherits the features of the more general Classifier. A Generalization is owned by the specific Classifier.
     * <p>From package UML::Classification.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.Generalization#getGeneral}</li>
     * <li>{@link uml.Generalization#getGeneralizationSet}</li>
     * <li>{@link uml.Generalization#isIsSubstitutable}</li>
     * <li>{@link uml.Generalization#getSpecific}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getGeneralization()
     * @model
     * @generated
     * @class
     */
    export interface Generalization extends uml.DirectedRelationship {
        /**
         * Returns the value of the '<em><b>General</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The general classifier in the Generalization relationship.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>General</em>' reference.
         * @see #setGeneral(Classifier)
         * @see uml.UmlPackage#getGeneralization_General()
         * @model required="true" ordered="false"
         * @generated
         */
        getGeneral() : uml.Classifier;

        /**
         * Sets the value of the '{@link uml.Generalization#getGeneral}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>General</em>' reference.
         * @see #getGeneral()
         * @generated
         */
        setGeneral(value : uml.Classifier);

        /**
         * Returns the value of the '<em><b>Generalization Set</b></em>' reference list.
         * The list contents are of type {@link uml.GeneralizationSet}.
         * It is bidirectional and its opposite is '{@link uml.GeneralizationSet#getGeneralization}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Represents a set of instances of Generalization.  A Generalization may appear in many GeneralizationSets.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Generalization Set</em>' reference list.
         * @see uml.UmlPackage#getGeneralization_GeneralizationSet()
         * @see uml.GeneralizationSet#getGeneralization
         * @model opposite="generalization" ordered="false"
         * @generated
         */
        getGeneralizationSet() : org.eclipse.emf.common.util.EList<uml.GeneralizationSet>;

        /**
         * Returns the value of the '<em><b>Is Substitutable</b></em>' attribute.
         * The default value is <code>"true"</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Indicates whether the specific Classifier can be used wherever the general Classifier can be used. If true, the execution traces of the specific Classifier shall be a superset of the execution traces of the general Classifier. If false, there is no such constraint on execution traces. If unset, the modeler has not stated whether there is such a constraint or not.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {boolean} the value of the '<em>Is Substitutable</em>' attribute.
         * @see #setIsSubstitutable(boolean)
         * @see uml.UmlPackage#getGeneralization_IsSubstitutable()
         * @model default="true" dataType="types.Boolean" ordered="false"
         * @generated
         */
        isIsSubstitutable() : boolean;

        /**
         * Sets the value of the '{@link uml.Generalization#isIsSubstitutable}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {boolean} value the new value of the '<em>Is Substitutable</em>' attribute.
         * @see #isIsSubstitutable()
         * @generated
         */
        setIsSubstitutable(value : boolean);

        /**
         * Returns the value of the '<em><b>Specific</b></em>' container reference.
         * It is bidirectional and its opposite is '{@link uml.Classifier#getGeneralization}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The specializing Classifier in the Generalization relationship.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Specific</em>' container reference.
         * @see #setSpecific(Classifier)
         * @see uml.UmlPackage#getGeneralization_Specific()
         * @see uml.Classifier#getGeneralization
         * @model opposite="generalization" required="true" transient="false" ordered="false"
         * @generated
         */
        getSpecific() : uml.Classifier;

        /**
         * Sets the value of the '{@link uml.Generalization#getSpecific}' container reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Specific</em>' container reference.
         * @see #getSpecific()
         * @generated
         */
        setSpecific(value : uml.Classifier);
    }
}

