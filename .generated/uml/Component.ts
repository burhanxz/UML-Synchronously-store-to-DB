/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Component</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A Component represents a modular part of a system that encapsulates its contents and whose manifestation is replaceable within its environment.
     * <p>From package UML::StructuredClassifiers.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.Component#isIsIndirectlyInstantiated}</li>
     * <li>{@link uml.Component#getPackagedElement}</li>
     * <li>{@link uml.Component#getProvided}</li>
     * <li>{@link uml.Component#getRealization}</li>
     * <li>{@link uml.Component#getRequired}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getComponent()
     * @model
     * @generated
     * @class
     */
    export interface Component extends uml.Class {
        /**
         * Returns the value of the '<em><b>Is Indirectly Instantiated</b></em>' attribute.
         * The default value is <code>"true"</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If true, the Component is defined at design-time, but at run-time (or execution-time) an object specified by the Component does not exist, that is, the Component is instantiated indirectly, through the instantiation of its realizing Classifiers or parts.
         * <p>From package UML::StructuredClassifiers.</p>
         * <!-- end-model-doc -->
         * @return {boolean} the value of the '<em>Is Indirectly Instantiated</em>' attribute.
         * @see #setIsIndirectlyInstantiated(boolean)
         * @see uml.UmlPackage#getComponent_IsIndirectlyInstantiated()
         * @model default="true" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         */
        isIsIndirectlyInstantiated() : boolean;

        /**
         * Sets the value of the '{@link uml.Component#isIsIndirectlyInstantiated}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {boolean} value the new value of the '<em>Is Indirectly Instantiated</em>' attribute.
         * @see #isIsIndirectlyInstantiated()
         * @generated
         */
        setIsIndirectlyInstantiated(value : boolean);

        /**
         * Returns the value of the '<em><b>Packaged Element</b></em>' containment reference list.
         * The list contents are of type {@link uml.PackageableElement}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The set of PackageableElements that a Component owns. In the namespace of a Component, all model elements that are involved in or related to its definition may be owned or imported explicitly. These may include e.g., Classes, Interfaces, Components, Packages, UseCases, Dependencies (e.g., mappings), and Artifacts.
         * <p>From package UML::StructuredClassifiers.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Packaged Element</em>' containment reference list.
         * @see uml.UmlPackage#getComponent_PackagedElement()
         * @model containment="true" ordered="false"
         * @generated
         */
        getPackagedElement() : org.eclipse.emf.common.util.EList<uml.PackageableElement>;

        /**
         * Returns the value of the '<em><b>Provided</b></em>' reference list.
         * The list contents are of type {@link uml.Interface}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Interfaces that the Component exposes to its environment. These Interfaces may be Realized by the Component or any of its realizingClassifiers, or they may be the Interfaces that are provided by its public Ports.
         * <p>From package UML::StructuredClassifiers.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Provided</em>' reference list.
         * @see uml.UmlPackage#getComponent_Provided()
         * @model transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getProvided() : org.eclipse.emf.common.util.EList<uml.Interface>;

        /**
         * Returns the value of the '<em><b>Realization</b></em>' containment reference list.
         * The list contents are of type {@link uml.ComponentRealization}.
         * It is bidirectional and its opposite is '{@link uml.ComponentRealization#getAbstraction}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The set of Realizations owned by the Component. Realizations reference the Classifiers of which the Component is an abstraction; i.e., that realize its behavior.
         * <p>From package UML::StructuredClassifiers.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Realization</em>' containment reference list.
         * @see uml.UmlPackage#getComponent_Realization()
         * @see uml.ComponentRealization#getAbstraction
         * @model opposite="abstraction" containment="true" ordered="false"
         * @generated
         */
        getRealization() : org.eclipse.emf.common.util.EList<uml.ComponentRealization>;

        /**
         * Returns the value of the '<em><b>Required</b></em>' reference list.
         * The list contents are of type {@link uml.Interface}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Interfaces that the Component requires from other Components in its environment in order to be able to offer its full set of provided functionality. These Interfaces may be used by the Component or any of its realizingClassifiers, or they may be the Interfaces that are required by its public Ports.
         * <p>From package UML::StructuredClassifiers.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Required</em>' reference list.
         * @see uml.UmlPackage#getComponent_Required()
         * @model transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getRequired() : org.eclipse.emf.common.util.EList<uml.Interface>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A Component cannot nest Classifiers.
         * nestedClassifier->isEmpty()
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        no_nested_classifiers(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A Component nested in a Class cannot have any packaged elements.
         * nestingClass <> null implies packagedElement->isEmpty()
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        no_packaged_elements(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Creates a(n) (abstract) class with the specified name as a packaged element of this component.
         * @param {string} name The name for the new class, or null.
         * @param {boolean} isAbstract Whether the new class should be abstract.
         * <!-- end-model-doc -->
         * @model required="true" ordered="false" nameDataType="types.String" nameRequired="true" nameOrdered="false" isAbstractDataType="types.Boolean" isAbstractRequired="true" isAbstractOrdered="false"
         * @generated
         * @return {*}
         */
        createOwnedClass(name : string, isAbstract : boolean) : uml.Class;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Creates a enumeration with the specified name as a packaged element of this component.
         * @param {string} name The name for the new enumeration, or null.
         * <!-- end-model-doc -->
         * @model required="true" ordered="false" nameDataType="types.String" nameRequired="true" nameOrdered="false"
         * @generated
         * @return {*}
         */
        createOwnedEnumeration(name : string) : uml.Enumeration;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Creates an interface with the specified name as a packaged element of this component.
         * @param {string} name The name for the new interface, or null.
         * <!-- end-model-doc -->
         * @model required="true" ordered="false" nameDataType="types.String" nameRequired="true" nameOrdered="false"
         * @generated
         * @return {*}
         */
        createOwnedInterface(name : string) : uml.Interface;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Creates a primitive type with the specified name as a packaged element of this component.
         * @param {string} name The name for the new primitive type, or null.
         * <!-- end-model-doc -->
         * @model required="true" ordered="false" nameDataType="types.String" nameRequired="true" nameOrdered="false"
         * @generated
         * @return {*}
         */
        createOwnedPrimitiveType(name : string) : uml.PrimitiveType;
    }
}

