/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Extension</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * An extension is used to indicate that the properties of a metaclass are extended through a stereotype, and gives the ability to flexibly add (and later remove) stereotypes to classes.
     * <p>From package UML::Packages.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.Extension#isIsRequired}</li>
     * <li>{@link uml.Extension#getMetaclass}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getExtension()
     * @model
     * @generated
     * @class
     */
    export interface Extension extends uml.Association {
        /**
         * Returns the value of the '<em><b>Is Required</b></em>' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Indicates whether an instance of the extending stereotype must be created when an instance of the extended class is created. The attribute value is derived from the value of the lower property of the ExtensionEnd referenced by Extension::ownedEnd; a lower value of 1 means that isRequired is true, but otherwise it is false. Since the default value of ExtensionEnd::lower is 0, the default value of isRequired is false.
         * <p>From package UML::Packages.</p>
         * <!-- end-model-doc -->
         * @return {boolean} the value of the '<em>Is Required</em>' attribute.
         * @see uml.UmlPackage#getExtension_IsRequired()
         * @model dataType="types.Boolean" required="true" transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        isIsRequired() : boolean;

        /**
         * Returns the value of the '<em><b>Metaclass</b></em>' reference.
         * It is bidirectional and its opposite is '{@link uml.Class#getExtension}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * References the Class that is extended through an Extension. The property is derived from the type of the memberEnd that is not the ownedEnd.
         * <p>From package UML::Packages.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Metaclass</em>' reference.
         * @see uml.UmlPackage#getExtension_Metaclass()
         * @see uml.Class#getExtension
         * @model opposite="extension" required="true" transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getMetaclass() : uml.Class;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The non-owned end of an Extension is typed by a Class.
         * metaclassEnd()->notEmpty() and metaclassEnd().type.oclIsKindOf(Class)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        non_owned_end(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * An Extension is binary, i.e., it has only two memberEnds.
         * memberEnd->size() = 2
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        is_binary(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Retrieves the stereotype that extends a metaclass through this extension.
         * <!-- end-model-doc -->
         * @model kind="operation" ordered="false"
         * @generated
         * @return {*}
         */
        getStereotype() : uml.Stereotype;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Retrieves the extension end that is typed by a stereotype (as opposed to a metaclass).
         * <!-- end-model-doc -->
         * @model kind="operation" ordered="false"
         * @generated
         * @return {*}
         */
        getStereotypeEnd() : uml.Property;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The query isRequired() is true if the owned end has a multiplicity with the lower bound of 1.
         * result = (ownedEnd.lowerBound() = 1)
         * <p>From package UML::Packages.</p>
         * <!-- end-model-doc -->
         * @model kind="operation" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         * @return {boolean}
         */
        isRequired() : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The query metaclassEnd() returns the Property that is typed by a metaclass (as opposed to a stereotype).
         * result = (memberEnd->reject(p | ownedEnd->includes(p.oclAsType(ExtensionEnd)))->any(true))
         * <p>From package UML::Packages.</p>
         * <!-- end-model-doc -->
         * @model required="true" ordered="false"
         * @generated
         * @return {*}
         */
        metaclassEnd() : uml.Property;
    }
}
