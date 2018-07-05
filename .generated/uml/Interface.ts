/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Interface</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * Interfaces declare coherent services that are implemented by BehavioredClassifiers that implement the Interfaces via InterfaceRealizations.
     * <p>From package UML::SimpleClassifiers.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.Interface#getNestedClassifier}</li>
     * <li>{@link uml.Interface#getOwnedAttribute}</li>
     * <li>{@link uml.Interface#getOwnedReception}</li>
     * <li>{@link uml.Interface#getProtocol}</li>
     * <li>{@link uml.Interface#getRedefinedInterface}</li>
     * <li>{@link uml.Interface#getOwnedOperation}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getInterface()
     * @model
     * @generated
     * @class
     */
    export interface Interface extends uml.Classifier {
        /**
         * Returns the value of the '<em><b>Nested Classifier</b></em>' containment reference list.
         * The list contents are of type {@link uml.Classifier}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * References all the Classifiers that are defined (nested) within the Interface.
         * <p>From package UML::SimpleClassifiers.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Nested Classifier</em>' containment reference list.
         * @see uml.UmlPackage#getInterface_NestedClassifier()
         * @model containment="true"
         * @generated
         */
        getNestedClassifier() : org.eclipse.emf.common.util.EList<uml.Classifier>;

        /**
         * Returns the value of the '<em><b>Owned Attribute</b></em>' containment reference list.
         * The list contents are of type {@link uml.Property}.
         * It is bidirectional and its opposite is '{@link uml.Property#getInterface}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The attributes (i.e., the Properties) owned by the Interface.
         * <p>From package UML::SimpleClassifiers.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Owned Attribute</em>' containment reference list.
         * @see uml.UmlPackage#getInterface_OwnedAttribute()
         * @see uml.Property#getInterface
         * @model opposite="interface" containment="true"
         * @generated
         */
        getOwnedAttribute() : org.eclipse.emf.common.util.EList<uml.Property>;

        /**
         * Returns the value of the '<em><b>Owned Reception</b></em>' containment reference list.
         * The list contents are of type {@link uml.Reception}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Receptions that objects providing this Interface are willing to accept.
         * <p>From package UML::SimpleClassifiers.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Owned Reception</em>' containment reference list.
         * @see uml.UmlPackage#getInterface_OwnedReception()
         * @model containment="true" ordered="false"
         * @generated
         */
        getOwnedReception() : org.eclipse.emf.common.util.EList<uml.Reception>;

        /**
         * Returns the value of the '<em><b>Protocol</b></em>' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * References a ProtocolStateMachine specifying the legal sequences of the invocation of the BehavioralFeatures described in the Interface.
         * <p>From package UML::SimpleClassifiers.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Protocol</em>' containment reference.
         * @see #setProtocol(ProtocolStateMachine)
         * @see uml.UmlPackage#getInterface_Protocol()
         * @model containment="true" ordered="false"
         * @generated
         */
        getProtocol() : uml.ProtocolStateMachine;

        /**
         * Sets the value of the '{@link uml.Interface#getProtocol}' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Protocol</em>' containment reference.
         * @see #getProtocol()
         * @generated
         */
        setProtocol(value : uml.ProtocolStateMachine);

        /**
         * Returns the value of the '<em><b>Redefined Interface</b></em>' reference list.
         * The list contents are of type {@link uml.Interface}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * References all the Interfaces redefined by this Interface.
         * <p>From package UML::SimpleClassifiers.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Redefined Interface</em>' reference list.
         * @see uml.UmlPackage#getInterface_RedefinedInterface()
         * @model ordered="false"
         * @generated
         */
        getRedefinedInterface() : org.eclipse.emf.common.util.EList<Interface>;

        /**
         * Returns the value of the '<em><b>Owned Operation</b></em>' containment reference list.
         * The list contents are of type {@link uml.Operation}.
         * It is bidirectional and its opposite is '{@link uml.Operation#getInterface}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Operations owned by the Interface.
         * <p>From package UML::SimpleClassifiers.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Owned Operation</em>' containment reference list.
         * @see uml.UmlPackage#getInterface_OwnedOperation()
         * @see uml.Operation#getInterface
         * @model opposite="interface" containment="true"
         * @generated
         */
        getOwnedOperation() : org.eclipse.emf.common.util.EList<uml.Operation>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The visibility of all Features owned by an Interface must be public.
         * feature->forAll(visibility = VisibilityKind::public)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        visibility(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Creates a property with the specified name, type, lower bound, and upper bound as an owned attribute of this interface.
         * @param {string} name The name for the new attribute, or null.
         * @param {*} type The type for the new attribute, or null.
         * @param {number} lower The lower bound for the new attribute.
         * @param {number} upper The upper bound for the new attribute.
         * <!-- end-model-doc -->
         * @model required="true" ordered="false" nameDataType="types.String" nameOrdered="false" typeOrdered="false" lowerDataType="types.Integer" lowerRequired="true" lowerOrdered="false" upperDataType="types.UnlimitedNatural" upperRequired="true" upperOrdered="false"
         * @generated
         * @return {*}
         */
        createOwnedAttribute(name : string, type : uml.Type, lower : number, upper : number) : uml.Property;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Creates an operation with the specified name, parameter names, parameter types, and return type (or null) as an owned operation of this interface.
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
    }
}

