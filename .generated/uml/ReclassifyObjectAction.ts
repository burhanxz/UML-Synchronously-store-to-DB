/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Reclassify Object Action</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A ReclassifyObjectAction is an Action that changes the Classifiers that classify an object.
     * <p>From package UML::Actions.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.ReclassifyObjectAction#isIsReplaceAll}</li>
     * <li>{@link uml.ReclassifyObjectAction#getNewClassifier}</li>
     * <li>{@link uml.ReclassifyObjectAction#getObject}</li>
     * <li>{@link uml.ReclassifyObjectAction#getOldClassifier}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getReclassifyObjectAction()
     * @model
     * @generated
     * @class
     */
    export interface ReclassifyObjectAction extends uml.Action {
        /**
         * Returns the value of the '<em><b>Is Replace All</b></em>' attribute.
         * The default value is <code>"false"</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Specifies whether existing Classifiers should be removed before adding the new Classifiers.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {boolean} the value of the '<em>Is Replace All</em>' attribute.
         * @see #setIsReplaceAll(boolean)
         * @see uml.UmlPackage#getReclassifyObjectAction_IsReplaceAll()
         * @model default="false" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         */
        isIsReplaceAll() : boolean;

        /**
         * Sets the value of the '{@link uml.ReclassifyObjectAction#isIsReplaceAll}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {boolean} value the new value of the '<em>Is Replace All</em>' attribute.
         * @see #isIsReplaceAll()
         * @generated
         */
        setIsReplaceAll(value : boolean);

        /**
         * Returns the value of the '<em><b>New Classifier</b></em>' reference list.
         * The list contents are of type {@link uml.Classifier}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A set of Classifiers to be added to the Classifiers of the given object.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>New Classifier</em>' reference list.
         * @see uml.UmlPackage#getReclassifyObjectAction_NewClassifier()
         * @model ordered="false"
         * @generated
         */
        getNewClassifier() : org.eclipse.emf.common.util.EList<uml.Classifier>;

        /**
         * Returns the value of the '<em><b>Object</b></em>' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The InputPin that holds the object to be reclassified.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Object</em>' containment reference.
         * @see #setObject(InputPin)
         * @see uml.UmlPackage#getReclassifyObjectAction_Object()
         * @model containment="true" required="true" ordered="false"
         * @generated
         */
        getObject() : uml.InputPin;

        /**
         * Sets the value of the '{@link uml.ReclassifyObjectAction#getObject}' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Object</em>' containment reference.
         * @see #getObject()
         * @generated
         */
        setObject(value : uml.InputPin);

        /**
         * Returns the value of the '<em><b>Old Classifier</b></em>' reference list.
         * The list contents are of type {@link uml.Classifier}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A set of Classifiers to be removed from the Classifiers of the given object.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Old Classifier</em>' reference list.
         * @see uml.UmlPackage#getReclassifyObjectAction_OldClassifier()
         * @model ordered="false"
         * @generated
         */
        getOldClassifier() : org.eclipse.emf.common.util.EList<uml.Classifier>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The object InputPin has no type.
         * object.type = null
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        input_pin(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * None of the newClassifiers may be abstract.
         * not newClassifier->exists(isAbstract)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        classifier_not_abstract(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The multiplicity of the object InputPin is 1..1.
         * object.is(1,1)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        multiplicity(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

