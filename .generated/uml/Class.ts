/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Class</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A Class classifies a set of objects and specifies the features that characterize the structure and behavior of those objects.  A Class may have an internal structure and Ports.
     * <p>From package UML::StructuredClassifiers.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.Class#getOwnedOperation}</li>
     * <li>{@link uml.Class#getExtension}</li>
     * <li>{@link uml.Class#isIsActive}</li>
     * <li>{@link uml.Class#getNestedClassifier}</li>
     * <li>{@link uml.Class#getOwnedReception}</li>
     * <li>{@link uml.Class#getSuperClass}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getClass_()
     * @model
     * @generated
     * @class
     */
    export interface Class extends uml.EncapsulatedClassifier, uml.BehavioredClassifier {
        /**
         * Returns the value of the '<em><b>Owned Operation</b></em>' containment reference list.
         * The list contents are of type {@link uml.Operation}.
         * It is bidirectional and its opposite is '{@link uml.Operation#getClass_}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Operations owned by the Class.
         * <p>From package UML::StructuredClassifiers.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Owned Operation</em>' containment reference list.
         * @see uml.UmlPackage#getClass_OwnedOperation()
         * @see uml.Operation#getClass_
         * @model opposite="class" containment="true"
         * @generated
         */
        getOwnedOperation() : org.eclipse.emf.common.util.EList<uml.Operation>;

        /**
         * Returns the value of the '<em><b>Extension</b></em>' reference list.
         * The list contents are of type {@link uml.Extension}.
         * It is bidirectional and its opposite is '{@link uml.Extension#getMetaclass}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * This property is used when the Class is acting as a metaclass. It references the Extensions that specify additional properties of the metaclass. The property is derived from the Extensions whose memberEnds are typed by the Class.
         * <p>From package UML::StructuredClassifiers.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Extension</em>' reference list.
         * @see uml.UmlPackage#getClass_Extension()
         * @see uml.Extension#getMetaclass
         * @model opposite="metaclass" transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getExtension() : org.eclipse.emf.common.util.EList<uml.Extension>;

        /**
         * Returns the value of the '<em><b>Is Active</b></em>' attribute.
         * The default value is <code>"false"</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Determines whether an object specified by this Class is active or not. If true, then the owning Class is referred to as an active Class. If false, then such a Class is referred to as a passive Class.
         * <p>From package UML::StructuredClassifiers.</p>
         * <!-- end-model-doc -->
         * @return {boolean} the value of the '<em>Is Active</em>' attribute.
         * @see #setIsActive(boolean)
         * @see uml.UmlPackage#getClass_IsActive()
         * @model default="false" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         */
        isIsActive() : boolean;

        /**
         * Sets the value of the '{@link uml.Class#isIsActive}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {boolean} value the new value of the '<em>Is Active</em>' attribute.
         * @see #isIsActive()
         * @generated
         */
        setIsActive(value : boolean);

        /**
         * Returns the value of the '<em><b>Nested Classifier</b></em>' containment reference list.
         * The list contents are of type {@link uml.Classifier}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Classifiers owned by the Class that are not ownedBehaviors.
         * <p>From package UML::StructuredClassifiers.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Nested Classifier</em>' containment reference list.
         * @see uml.UmlPackage#getClass_NestedClassifier()
         * @model containment="true"
         * @generated
         */
        getNestedClassifier() : org.eclipse.emf.common.util.EList<uml.Classifier>;

        /**
         * Returns the value of the '<em><b>Owned Reception</b></em>' containment reference list.
         * The list contents are of type {@link uml.Reception}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Receptions owned by the Class.
         * <p>From package UML::StructuredClassifiers.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Owned Reception</em>' containment reference list.
         * @see uml.UmlPackage#getClass_OwnedReception()
         * @model containment="true" ordered="false"
         * @generated
         */
        getOwnedReception() : org.eclipse.emf.common.util.EList<uml.Reception>;

        /**
         * Returns the value of the '<em><b>Super Class</b></em>' reference list.
         * The list contents are of type {@link uml.Class}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The superclasses of a Class, derived from its Generalizations.
         * <p>From package UML::StructuredClassifiers.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Super Class</em>' reference list.
         * @see uml.UmlPackage#getClass_SuperClass()
         * @model transient="true" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getSuperClass() : org.eclipse.emf.common.util.EList<Class>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Only an active Class may own Receptions and have a classifierBehavior.
         * not isActive implies (ownedReception->isEmpty() and classifierBehavior = null)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        passive_class(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Creates an operation with the specified name, parameter names, parameter types, and return type (or null) as an owned operation of this class.
         * @param {string} name The name for the new operation, or null.
         * @param {*} parameterNames The parameter names for the new operation, or null.
         * @param {*} parameterTypes The parameter types for the new operation, or null.
         * @param {*} returnType The return type for the new operation, or null.
         * <!-- end-model-doc -->
         * @model required="true" ordered="false" nameDataType="types.String" nameOrdered="false" parameterNamesDataType="types.String" parameterNamesMany="true" parameterNamesOrdered="false" parameterTypesMany="true" parameterTypesOrdered="false" returnTypeOrdered="false"
         * @generated
         * @return {*}
         */
        createOwnedOperation(name : string, parameterNames : org.eclipse.emf.common.util.EList<string>, parameterTypes : org.eclipse.emf.common.util.EList<uml.Type>, returnType : uml.Type) : uml.Operation;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Determines whether this class is a metaclass.
         * <!-- end-model-doc -->
         * @model kind="operation" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         * @return {boolean}
         */
        isMetaclass() : boolean;
    }
}

