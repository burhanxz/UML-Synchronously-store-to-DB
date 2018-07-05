/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Connector End</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A ConnectorEnd is an endpoint of a Connector, which attaches the Connector to a ConnectableElement.
     * <p>From package UML::StructuredClassifiers.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.ConnectorEnd#getDefiningEnd}</li>
     * <li>{@link uml.ConnectorEnd#getPartWithPort}</li>
     * <li>{@link uml.ConnectorEnd#getRole}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getConnectorEnd()
     * @model
     * @generated
     * @class
     */
    export interface ConnectorEnd extends uml.MultiplicityElement {
        /**
         * Returns the value of the '<em><b>Defining End</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A derived property referencing the corresponding end on the Association which types the Connector owing this ConnectorEnd, if any. It is derived by selecting the end at the same place in the ordering of Association ends as this ConnectorEnd.
         * <p>From package UML::StructuredClassifiers.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Defining End</em>' reference.
         * @see uml.UmlPackage#getConnectorEnd_DefiningEnd()
         * @model transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getDefiningEnd() : uml.Property;

        /**
         * Returns the value of the '<em><b>Part With Port</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Indicates the role of the internal structure of a Classifier with the Port to which the ConnectorEnd is attached.
         * <p>From package UML::StructuredClassifiers.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Part With Port</em>' reference.
         * @see #setPartWithPort(Property)
         * @see uml.UmlPackage#getConnectorEnd_PartWithPort()
         * @model ordered="false"
         * @generated
         */
        getPartWithPort() : uml.Property;

        /**
         * Sets the value of the '{@link uml.ConnectorEnd#getPartWithPort}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Part With Port</em>' reference.
         * @see #getPartWithPort()
         * @generated
         */
        setPartWithPort(value : uml.Property);

        /**
         * Returns the value of the '<em><b>Role</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The ConnectableElement attached at this ConnectorEnd. When an instance of the containing Classifier is created, a link may (depending on the multiplicities) be created to an instance of the Classifier that types this ConnectableElement.
         * <p>From package UML::StructuredClassifiers.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Role</em>' reference.
         * @see #setRole(ConnectableElement)
         * @see uml.UmlPackage#getConnectorEnd_Role()
         * @model required="true" ordered="false"
         * @generated
         */
        getRole() : uml.ConnectableElement;

        /**
         * Sets the value of the '{@link uml.ConnectorEnd#getRole}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Role</em>' reference.
         * @see #getRole()
         * @generated
         */
        setRole(value : uml.ConnectableElement);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If a ConnectorEnd references a partWithPort, then the role must be a Port that is defined or inherited by the type of the partWithPort.
         * partWithPort->notEmpty() implies
         * (role.oclIsKindOf(Port) and partWithPort.type.oclAsType(Namespace).member->includes(role))
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        role_and_part_with_port(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If a ConnectorEnd is attached to a Port of the containing Classifier, partWithPort will be empty.
         * (role.oclIsKindOf(Port) and role.owner = connector.owner) implies partWithPort->isEmpty()
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        part_with_port_empty(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The multiplicity of the ConnectorEnd may not be more general than the multiplicity of the corresponding end of the Association typing the owning Connector, if any.
         * self.compatibleWith(definingEnd)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        multiplicity(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Property held in self.partWithPort must not be a Port.
         * partWithPort->notEmpty() implies not partWithPort.oclIsKindOf(Port)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        self_part_with_port(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

