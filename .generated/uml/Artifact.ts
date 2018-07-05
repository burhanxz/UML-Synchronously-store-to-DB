/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Artifact</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * An artifact is the specification of a physical piece of information that is used or produced by a software development process, or by deployment and operation of a system. Examples of artifacts include model files, source files, scripts, and binary executable files, a table in a database system, a development deliverable, or a word-processing document, a mail message.
     * An artifact is the source of a deployment to a node.
     * <p>From package UML::Deployments.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.Artifact#getFileName}</li>
     * <li>{@link uml.Artifact#getManifestation}</li>
     * <li>{@link uml.Artifact#getNestedArtifact}</li>
     * <li>{@link uml.Artifact#getOwnedAttribute}</li>
     * <li>{@link uml.Artifact#getOwnedOperation}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getArtifact()
     * @model
     * @generated
     * @class
     */
    export interface Artifact extends uml.Classifier, uml.DeployedArtifact {
        /**
         * Returns the value of the '<em><b>File Name</b></em>' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A concrete name that is used to refer to the Artifact in a physical context. Example: file system name, universal resource locator.
         * <p>From package UML::Deployments.</p>
         * <!-- end-model-doc -->
         * @return {string} the value of the '<em>File Name</em>' attribute.
         * @see #isSetFileName()
         * @see #unsetFileName()
         * @see #setFileName(String)
         * @see uml.UmlPackage#getArtifact_FileName()
         * @model unsettable="true" dataType="types.String" ordered="false"
         * @generated
         */
        getFileName() : string;

        /**
         * Sets the value of the '{@link uml.Artifact#getFileName}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {string} value the new value of the '<em>File Name</em>' attribute.
         * @see #isSetFileName()
         * @see #unsetFileName()
         * @see #getFileName()
         * @generated
         */
        setFileName(value : string);

        /**
         * Unsets the value of the '{@link uml.Artifact#getFileName}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #isSetFileName()
         * @see #getFileName()
         * @see #setFileName(String)
         * @generated
         */
        unsetFileName();

        /**
         * Returns whether the value of the '{@link uml.Artifact#getFileName}' attribute is set.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {boolean} whether the value of the '<em>File Name</em>' attribute is set.
         * @see #unsetFileName()
         * @see #getFileName()
         * @see #setFileName(String)
         * @generated
         */
        isSetFileName() : boolean;

        /**
         * Returns the value of the '<em><b>Manifestation</b></em>' containment reference list.
         * The list contents are of type {@link uml.Manifestation}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The set of model elements that are manifested in the Artifact. That is, these model elements are utilized in the construction (or generation) of the artifact.
         * <p>From package UML::Deployments.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Manifestation</em>' containment reference list.
         * @see uml.UmlPackage#getArtifact_Manifestation()
         * @model containment="true" ordered="false"
         * @generated
         */
        getManifestation() : org.eclipse.emf.common.util.EList<uml.Manifestation>;

        /**
         * Returns the value of the '<em><b>Nested Artifact</b></em>' containment reference list.
         * The list contents are of type {@link uml.Artifact}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Artifacts that are defined (nested) within the Artifact. The association is a specialization of the ownedMember association from Namespace to NamedElement.
         * <p>From package UML::Deployments.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Nested Artifact</em>' containment reference list.
         * @see uml.UmlPackage#getArtifact_NestedArtifact()
         * @model containment="true" ordered="false"
         * @generated
         */
        getNestedArtifact() : org.eclipse.emf.common.util.EList<Artifact>;

        /**
         * Returns the value of the '<em><b>Owned Attribute</b></em>' containment reference list.
         * The list contents are of type {@link uml.Property}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The attributes or association ends defined for the Artifact. The association is a specialization of the ownedMember association.
         * <p>From package UML::Deployments.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Owned Attribute</em>' containment reference list.
         * @see uml.UmlPackage#getArtifact_OwnedAttribute()
         * @model containment="true"
         * @generated
         */
        getOwnedAttribute() : org.eclipse.emf.common.util.EList<uml.Property>;

        /**
         * Returns the value of the '<em><b>Owned Operation</b></em>' containment reference list.
         * The list contents are of type {@link uml.Operation}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Operations defined for the Artifact. The association is a specialization of the ownedMember association.
         * <p>From package UML::Deployments.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Owned Operation</em>' containment reference list.
         * @see uml.UmlPackage#getArtifact_OwnedOperation()
         * @model containment="true"
         * @generated
         */
        getOwnedOperation() : org.eclipse.emf.common.util.EList<uml.Operation>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Creates a property with the specified name, type, lower bound, and upper bound as an owned attribute of this artifact.
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
         * Creates an operation with the specified name, parameter names, parameter types, and return type (or null) as an owned operation of this artifact.
         * @param {string} name The name for the new operation, or null.
         * @param {*} parameterNames The parameter names for  the new operation, or null.
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

