/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Information Flow</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * InformationFlows describe circulation of information through a system in a general manner. They do not specify the nature of the information, mechanisms by which it is conveyed, sequences of exchange or any control conditions. During more detailed modeling, representation and realization links may be added to specify which model elements implement an InformationFlow and to show how information is conveyed.  InformationFlows require some kind of ¡°information channel¡± for unidirectional transmission of information items from sources to targets.? They specify the information channel¡¯s realizations, if any, and identify the information that flows along them.? Information moving along the information channel may be represented by abstract InformationItems and by concrete Classifiers.
     * <p>From package UML::InformationFlows.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.InformationFlow#getConveyed}</li>
     * <li>{@link uml.InformationFlow#getInformationSource}</li>
     * <li>{@link uml.InformationFlow#getInformationTarget}</li>
     * <li>{@link uml.InformationFlow#getRealization}</li>
     * <li>{@link uml.InformationFlow#getRealizingActivityEdge}</li>
     * <li>{@link uml.InformationFlow#getRealizingConnector}</li>
     * <li>{@link uml.InformationFlow#getRealizingMessage}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getInformationFlow()
     * @model
     * @generated
     * @class
     */
    export interface InformationFlow extends uml.PackageableElement, uml.DirectedRelationship {
        /**
         * Returns the value of the '<em><b>Conveyed</b></em>' reference list.
         * The list contents are of type {@link uml.Classifier}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Specifies the information items that may circulate on this information flow.
         * <p>From package UML::InformationFlows.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Conveyed</em>' reference list.
         * @see uml.UmlPackage#getInformationFlow_Conveyed()
         * @model required="true" ordered="false"
         * @generated
         */
        getConveyed() : org.eclipse.emf.common.util.EList<uml.Classifier>;

        /**
         * Returns the value of the '<em><b>Information Source</b></em>' reference list.
         * The list contents are of type {@link uml.NamedElement}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Defines from which source the conveyed InformationItems are initiated.
         * <p>From package UML::InformationFlows.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Information Source</em>' reference list.
         * @see uml.UmlPackage#getInformationFlow_InformationSource()
         * @model required="true" ordered="false"
         * @generated
         */
        getInformationSource() : org.eclipse.emf.common.util.EList<uml.NamedElement>;

        /**
         * Returns the value of the '<em><b>Information Target</b></em>' reference list.
         * The list contents are of type {@link uml.NamedElement}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Defines to which target the conveyed InformationItems are directed.
         * <p>From package UML::InformationFlows.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Information Target</em>' reference list.
         * @see uml.UmlPackage#getInformationFlow_InformationTarget()
         * @model required="true" ordered="false"
         * @generated
         */
        getInformationTarget() : org.eclipse.emf.common.util.EList<uml.NamedElement>;

        /**
         * Returns the value of the '<em><b>Realization</b></em>' reference list.
         * The list contents are of type {@link uml.Relationship}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Determines which Relationship will realize the specified flow.
         * <p>From package UML::InformationFlows.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Realization</em>' reference list.
         * @see uml.UmlPackage#getInformationFlow_Realization()
         * @model ordered="false"
         * @generated
         */
        getRealization() : org.eclipse.emf.common.util.EList<uml.Relationship>;

        /**
         * Returns the value of the '<em><b>Realizing Activity Edge</b></em>' reference list.
         * The list contents are of type {@link uml.ActivityEdge}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Determines which ActivityEdges will realize the specified flow.
         * <p>From package UML::InformationFlows.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Realizing Activity Edge</em>' reference list.
         * @see uml.UmlPackage#getInformationFlow_RealizingActivityEdge()
         * @model ordered="false"
         * @generated
         */
        getRealizingActivityEdge() : org.eclipse.emf.common.util.EList<uml.ActivityEdge>;

        /**
         * Returns the value of the '<em><b>Realizing Connector</b></em>' reference list.
         * The list contents are of type {@link uml.Connector}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Determines which Connectors will realize the specified flow.
         * <p>From package UML::InformationFlows.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Realizing Connector</em>' reference list.
         * @see uml.UmlPackage#getInformationFlow_RealizingConnector()
         * @model ordered="false"
         * @generated
         */
        getRealizingConnector() : org.eclipse.emf.common.util.EList<uml.Connector>;

        /**
         * Returns the value of the '<em><b>Realizing Message</b></em>' reference list.
         * The list contents are of type {@link uml.Message}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Determines which Messages will realize the specified flow.
         * <p>From package UML::InformationFlows.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Realizing Message</em>' reference list.
         * @see uml.UmlPackage#getInformationFlow_RealizingMessage()
         * @model ordered="false"
         * @generated
         */
        getRealizingMessage() : org.eclipse.emf.common.util.EList<uml.Message>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The sources and targets of the information flow must conform to the sources and targets or conversely the targets and sources of the realization relationships.
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        must_conform(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The sources and targets of the information flow can only be one of the following kind: Actor, Node, UseCase, Artifact, Class, Component, Port, Property, Interface, Package, ActivityNode, ActivityPartition,
         * Behavior and InstanceSpecification except when its classifier is a relationship (i.e. it represents a link).
         * (self.informationSource->forAll( sis |
         * oclIsKindOf(Actor) or oclIsKindOf(Node) or oclIsKindOf(UseCase) or oclIsKindOf(Artifact) or
         * oclIsKindOf(Class) or oclIsKindOf(Component) or oclIsKindOf(Port) or oclIsKindOf(Property) or
         * oclIsKindOf(Interface) or oclIsKindOf(Package) or oclIsKindOf(ActivityNode) or oclIsKindOf(ActivityPartition) or
         * (oclIsKindOf(InstanceSpecification) and not sis.oclAsType(InstanceSpecification).classifier->exists(oclIsKindOf(Relationship)))))
         * 
         * and
         * 
         * (self.informationTarget->forAll( sit |
         * oclIsKindOf(Actor) or oclIsKindOf(Node) or oclIsKindOf(UseCase) or oclIsKindOf(Artifact) or
         * oclIsKindOf(Class) or oclIsKindOf(Component) or oclIsKindOf(Port) or oclIsKindOf(Property) or
         * oclIsKindOf(Interface) or oclIsKindOf(Package) or oclIsKindOf(ActivityNode) or oclIsKindOf(ActivityPartition) or
         * (oclIsKindOf(InstanceSpecification) and not sit.oclAsType(InstanceSpecification).classifier->exists(oclIsKindOf(Relationship)))))
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        sources_and_targets_kind(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * An information flow can only convey classifiers that are allowed to represent an information item.
         * self.conveyed->forAll(oclIsKindOf(Class) or oclIsKindOf(Interface)
         * or oclIsKindOf(InformationItem) or oclIsKindOf(Signal) or oclIsKindOf(Component))
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        convey_classifiers(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

