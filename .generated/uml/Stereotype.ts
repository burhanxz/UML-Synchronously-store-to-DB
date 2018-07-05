/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Stereotype</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A stereotype defines how an existing metaclass may be extended, and enables the use of platform or domain specific terminology or notation in place of, or in addition to, the ones used for the extended metaclass.
     * <p>From package UML::Packages.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.Stereotype#getIcon}</li>
     * <li>{@link uml.Stereotype#getProfile}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getStereotype()
     * @model
     * @generated
     * @class
     */
    export interface Stereotype extends uml.Class {
        /**
         * Returns the value of the '<em><b>Icon</b></em>' containment reference list.
         * The list contents are of type {@link uml.Image}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Stereotype can change the graphical appearance of the extended model element by using attached icons. When this association is not null, it references the location of the icon content to be displayed within diagrams presenting the extended model elements.
         * <p>From package UML::Packages.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Icon</em>' containment reference list.
         * @see uml.UmlPackage#getStereotype_Icon()
         * @model containment="true" ordered="false"
         * @generated
         */
        getIcon() : org.eclipse.emf.common.util.EList<uml.Image>;

        /**
         * Returns the value of the '<em><b>Profile</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The profile that directly or indirectly contains this stereotype.
         * <p>From package UML::Packages.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Profile</em>' reference.
         * @see uml.UmlPackage#getStereotype_Profile()
         * @model required="true" transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getProfile() : uml.Profile;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Stereotypes may only participate in binary associations.
         * ownedAttribute.association->forAll(memberEnd->size()=2)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        binaryAssociationsOnly(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A Stereotype may only generalize or specialize another Stereotype.
         * allParents()->forAll(oclIsKindOf(Stereotype))
         * and Classifier.allInstances()->forAll(c | c.allParents()->exists(oclIsKindOf(Stereotype)) implies c.oclIsKindOf(Stereotype))
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        generalize(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Stereotype names should not clash with keyword names for the extended model element.
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        name_not_clash(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Where a stereotype¡¯s property is an association end for an association other than a kind of extension, and the other end is not a stereotype, the other end must be owned by the association itself.
         * ownedAttribute
         * ->select(association->notEmpty() and not association.oclIsKindOf(Extension) and not type.oclIsKindOf(Stereotype))
         * ->forAll(opposite.owner = association)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        associationEndOwnership(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The upper bound of base-properties is exactly 1.
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        base_property_upper_bound(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If a Stereotype extends only one metaclass, the multiplicity of the corresponding base-property shall be 1..1.
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        base_property_multiplicity_single_extension(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If a Stereotype extends more than one metaclass, the multiplicity of the corresponding base-properties shall be [0..1]. At any point in time, only one of these base-properties can contain a metaclass instance during runtime.
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        base_property_multiplicity_multiple_extension(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Creates a(n) (required) extension of the specified metaclass with this stereotype.
         * @param {*} metaclass The metaclass for the new extension.
         * @param {boolean} isRequired Whether the new extension should be required.
         * <!-- end-model-doc -->
         * @model required="true" ordered="false" metaclassRequired="true" metaclassOrdered="false" isRequiredDataType="types.Boolean" isRequiredRequired="true" isRequiredOrdered="false"
         * @generated
         * @return {*}
         */
        createExtension(metaclass : uml.Class, isRequired : boolean) : uml.Extension;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Creates an icon with the specified format and content for this stereotype.
         * @param {string} format The format for the new icon.
         * @param {string} content The content for the new icon.
         * <!-- end-model-doc -->
         * @model required="true" ordered="false" formatDataType="types.String" formatRequired="true" formatOrdered="false" contentDataType="types.String" contentRequired="true" contentOrdered="false"
         * @generated
         * @return {*}
         */
        createIcon(format? : any, content? : any) : any;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Retrieves all the metaclasses extended by this stereotype, including the metaclasses extended by its superstereotypes.
         * <!-- end-model-doc -->
         * @model kind="operation" ordered="false"
         * @generated
         * @return {*}
         */
        getAllExtendedMetaclasses() : org.eclipse.emf.common.util.EList<uml.Class>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Retrieves the current definition (Ecore representation) of this stereotype.
         * <!-- end-model-doc -->
         * @model kind="operation" ordered="false"
         * @generated
         * @return {*}
         */
        getDefinition() : org.eclipse.emf.ecore.EClass;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Retrieves the metaclasses extended by this stereotype.
         * <!-- end-model-doc -->
         * @model kind="operation" ordered="false"
         * @generated
         * @return {*}
         */
        getExtendedMetaclasses() : org.eclipse.emf.common.util.EList<uml.Class>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Retrieves the keyword for this stereotype, localized if indicated.
         * @param {boolean} localize Whether to localize the keyword.
         * <!-- end-model-doc -->
         * @model dataType="types.String" required="true" ordered="false" localizeDataType="types.Boolean" localizeRequired="true" localizeOrdered="false"
         * @generated
         * @return {string}
         */
        getKeyword(localize? : any) : any;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The query containingProfile returns the closest profile directly or indirectly containing this stereotype.
         * result = (self.namespace.oclAsType(Package).containingProfile())
         * <p>From package UML::Packages.</p>
         * <!-- end-model-doc -->
         * @model required="true" ordered="false"
         * @generated
         * @return {*}
         */
        containingProfile() : uml.Profile;
    }
}

