/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace standard {
    /**
     * <!-- begin-user-doc -->
     * The <b>Package</b> for the model.
     * It contains accessors for the meta objects to represent
     * <ul>
     * <li>each class,</li>
     * <li>each feature of each class,</li>
     * <li>each operation of each class,</li>
     * <li>each enum,</li>
     * <li>and each data type</li>
     * </ul>
     * <!-- end-user-doc -->
     * @see standard.StandardFactory
     * @model kind="package"
     * annotation="http://www.eclipse.org/uml2/2.0.0/UML originalName='Standard'"
     * @generated
     * @class
     */
    export interface StandardPackage extends org.eclipse.emf.ecore.EPackage {
        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Auxiliary</em>'.
         * @see standard.Auxiliary
         * @generated
         */
        getAuxiliary() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for the reference '{@link standard.Auxiliary#getBase_Class}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Class</em>'.
         * @see standard.Auxiliary#getBase_Class()
         * @see #getAuxiliary()
         * @generated
         */
        getAuxiliary_Base_Class() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Call</em>'.
         * @see standard.Call
         * @generated
         */
        getCall() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for the reference '{@link standard.Call#getBase_Usage}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Usage</em>'.
         * @see standard.Call#getBase_Usage()
         * @see #getCall()
         * @generated
         */
        getCall_Base_Usage() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for the '{@link standard.Call#client_and_supplier_are_operations(org.eclipse.emf.common.util.DiagnosticChain, java.util.Map) <em>Client and supplier are operations</em>}' operation.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the '<em>Client and supplier are operations</em>' operation.
         * @see standard.Call#client_and_supplier_are_operations(org.eclipse.emf.common.util.DiagnosticChain, java.util.Map)
         * @generated
         */
        getCall__Client_and_supplier_are_operations__DiagnosticChain_Map() : org.eclipse.emf.ecore.EOperation;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Create</em>'.
         * @see standard.Create
         * @generated
         */
        getCreate() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for the reference '{@link standard.Create#getBase_BehavioralFeature}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Behavioral Feature</em>'.
         * @see standard.Create#getBase_BehavioralFeature()
         * @see #getCreate()
         * @generated
         */
        getCreate_Base_BehavioralFeature() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for the reference '{@link standard.Create#getBase_Usage}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Usage</em>'.
         * @see standard.Create#getBase_Usage()
         * @see #getCreate()
         * @generated
         */
        getCreate_Base_Usage() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for the '{@link standard.Create#client_and_supplier_are_classifiers(org.eclipse.emf.common.util.DiagnosticChain, java.util.Map) <em>Client and supplier are classifiers</em>}' operation.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the '<em>Client and supplier are classifiers</em>' operation.
         * @see standard.Create#client_and_supplier_are_classifiers(org.eclipse.emf.common.util.DiagnosticChain, java.util.Map)
         * @generated
         */
        getCreate__Client_and_supplier_are_classifiers__DiagnosticChain_Map() : org.eclipse.emf.ecore.EOperation;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Derive</em>'.
         * @see standard.Derive
         * @generated
         */
        getDerive() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for the containment reference '{@link standard.Derive#getComputation}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the containment reference '<em>Computation</em>'.
         * @see standard.Derive#getComputation()
         * @see #getDerive()
         * @generated
         */
        getDerive_Computation() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for the reference '{@link standard.Derive#getBase_Abstraction}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Abstraction</em>'.
         * @see standard.Derive#getBase_Abstraction()
         * @see #getDerive()
         * @generated
         */
        getDerive_Base_Abstraction() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Destroy</em>'.
         * @see standard.Destroy
         * @generated
         */
        getDestroy() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for the reference '{@link standard.Destroy#getBase_BehavioralFeature}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Behavioral Feature</em>'.
         * @see standard.Destroy#getBase_BehavioralFeature()
         * @see #getDestroy()
         * @generated
         */
        getDestroy_Base_BehavioralFeature() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Document</em>'.
         * @see standard.Document
         * @generated
         */
        getDocument() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>File</em>'.
         * @see standard.File
         * @generated
         */
        getFile() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for the reference '{@link standard.File#getBase_Artifact}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Artifact</em>'.
         * @see standard.File#getBase_Artifact()
         * @see #getFile()
         * @generated
         */
        getFile_Base_Artifact() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Entity</em>'.
         * @see standard.Entity
         * @generated
         */
        getEntity() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for the reference '{@link standard.Entity#getBase_Component}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Component</em>'.
         * @see standard.Entity#getBase_Component()
         * @see #getEntity()
         * @generated
         */
        getEntity_Base_Component() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Executable</em>'.
         * @see standard.Executable
         * @generated
         */
        getExecutable() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Focus</em>'.
         * @see standard.Focus
         * @generated
         */
        getFocus() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for the reference '{@link standard.Focus#getBase_Class}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Class</em>'.
         * @see standard.Focus#getBase_Class()
         * @see #getFocus()
         * @generated
         */
        getFocus_Base_Class() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Framework</em>'.
         * @see standard.Framework
         * @generated
         */
        getFramework() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for the reference '{@link standard.Framework#getBase_Package}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Package</em>'.
         * @see standard.Framework#getBase_Package()
         * @see #getFramework()
         * @generated
         */
        getFramework_Base_Package() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Implement</em>'.
         * @see standard.Implement
         * @generated
         */
        getImplement() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for the reference '{@link standard.Implement#getBase_Component}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Component</em>'.
         * @see standard.Implement#getBase_Component()
         * @see #getImplement()
         * @generated
         */
        getImplement_Base_Component() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for the '{@link standard.Implement#implements_specification(org.eclipse.emf.common.util.DiagnosticChain, java.util.Map) <em>Implements specification</em>}' operation.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the '<em>Implements specification</em>' operation.
         * @see standard.Implement#implements_specification(org.eclipse.emf.common.util.DiagnosticChain, java.util.Map)
         * @generated
         */
        getImplement__Implements_specification__DiagnosticChain_Map() : org.eclipse.emf.ecore.EOperation;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Implementation Class</em>'.
         * @see standard.ImplementationClass
         * @generated
         */
        getImplementationClass() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for the reference '{@link standard.ImplementationClass#getBase_Class}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Class</em>'.
         * @see standard.ImplementationClass#getBase_Class()
         * @see #getImplementationClass()
         * @generated
         */
        getImplementationClass_Base_Class() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for the '{@link standard.ImplementationClass#cannot_be_realization(org.eclipse.emf.common.util.DiagnosticChain, java.util.Map) <em>Cannot be realization</em>}' operation.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the '<em>Cannot be realization</em>' operation.
         * @see standard.ImplementationClass#cannot_be_realization(org.eclipse.emf.common.util.DiagnosticChain, java.util.Map)
         * @generated
         */
        getImplementationClass__Cannot_be_realization__DiagnosticChain_Map() : org.eclipse.emf.ecore.EOperation;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Instantiate</em>'.
         * @see standard.Instantiate
         * @generated
         */
        getInstantiate() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for the reference '{@link standard.Instantiate#getBase_Usage}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Usage</em>'.
         * @see standard.Instantiate#getBase_Usage()
         * @see #getInstantiate()
         * @generated
         */
        getInstantiate_Base_Usage() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for the '{@link standard.Instantiate#client_and_supplier_are_classifiers(org.eclipse.emf.common.util.DiagnosticChain, java.util.Map) <em>Client and supplier are classifiers</em>}' operation.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the '<em>Client and supplier are classifiers</em>' operation.
         * @see standard.Instantiate#client_and_supplier_are_classifiers(org.eclipse.emf.common.util.DiagnosticChain, java.util.Map)
         * @generated
         */
        getInstantiate__Client_and_supplier_are_classifiers__DiagnosticChain_Map() : org.eclipse.emf.ecore.EOperation;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Library</em>'.
         * @see standard.Library
         * @generated
         */
        getLibrary() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Metaclass</em>'.
         * @see standard.Metaclass
         * @generated
         */
        getMetaclass() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for the reference '{@link standard.Metaclass#getBase_Class}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Class</em>'.
         * @see standard.Metaclass#getBase_Class()
         * @see #getMetaclass()
         * @generated
         */
        getMetaclass_Base_Class() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Model Library</em>'.
         * @see standard.ModelLibrary
         * @generated
         */
        getModelLibrary() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for the reference '{@link standard.ModelLibrary#getBase_Package}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Package</em>'.
         * @see standard.ModelLibrary#getBase_Package()
         * @see #getModelLibrary()
         * @generated
         */
        getModelLibrary_Base_Package() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Process</em>'.
         * @see standard.Process
         * @generated
         */
        getProcess() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for the reference '{@link standard.Process#getBase_Component}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Component</em>'.
         * @see standard.Process#getBase_Component()
         * @see #getProcess()
         * @generated
         */
        getProcess_Base_Component() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Realization</em>'.
         * @see standard.Realization
         * @generated
         */
        getRealization() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for the reference '{@link standard.Realization#getBase_Classifier}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Classifier</em>'.
         * @see standard.Realization#getBase_Classifier()
         * @see #getRealization()
         * @generated
         */
        getRealization_Base_Classifier() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for the '{@link standard.Realization#cannot_be_implementationClass(org.eclipse.emf.common.util.DiagnosticChain, java.util.Map) <em>Cannot be implementation Class</em>}' operation.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the '<em>Cannot be implementation Class</em>' operation.
         * @see standard.Realization#cannot_be_implementationClass(org.eclipse.emf.common.util.DiagnosticChain, java.util.Map)
         * @generated
         */
        getRealization__Cannot_be_implementationClass__DiagnosticChain_Map() : org.eclipse.emf.ecore.EOperation;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Refine</em>'.
         * @see standard.Refine
         * @generated
         */
        getRefine() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for the reference '{@link standard.Refine#getBase_Abstraction}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Abstraction</em>'.
         * @see standard.Refine#getBase_Abstraction()
         * @see #getRefine()
         * @generated
         */
        getRefine_Base_Abstraction() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Responsibility</em>'.
         * @see standard.Responsibility
         * @generated
         */
        getResponsibility() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for the reference '{@link standard.Responsibility#getBase_Usage}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Usage</em>'.
         * @see standard.Responsibility#getBase_Usage()
         * @see #getResponsibility()
         * @generated
         */
        getResponsibility_Base_Usage() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Script</em>'.
         * @see standard.Script
         * @generated
         */
        getScript() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Send</em>'.
         * @see standard.Send
         * @generated
         */
        getSend() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for the reference '{@link standard.Send#getBase_Usage}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Usage</em>'.
         * @see standard.Send#getBase_Usage()
         * @see #getSend()
         * @generated
         */
        getSend_Base_Usage() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for the '{@link standard.Send#client_operation_sends_supplier_signal(org.eclipse.emf.common.util.DiagnosticChain, java.util.Map) <em>Client operation sends supplier signal</em>}' operation.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the '<em>Client operation sends supplier signal</em>' operation.
         * @see standard.Send#client_operation_sends_supplier_signal(org.eclipse.emf.common.util.DiagnosticChain, java.util.Map)
         * @generated
         */
        getSend__Client_operation_sends_supplier_signal__DiagnosticChain_Map() : org.eclipse.emf.ecore.EOperation;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Service</em>'.
         * @see standard.Service
         * @generated
         */
        getService() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for the reference '{@link standard.Service#getBase_Component}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Component</em>'.
         * @see standard.Service#getBase_Component()
         * @see #getService()
         * @generated
         */
        getService_Base_Component() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Source</em>'.
         * @see standard.Source
         * @generated
         */
        getSource() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Specification</em>'.
         * @see standard.Specification
         * @generated
         */
        getSpecification() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for the reference '{@link standard.Specification#getBase_Classifier}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Classifier</em>'.
         * @see standard.Specification#getBase_Classifier()
         * @see #getSpecification()
         * @generated
         */
        getSpecification_Base_Classifier() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for the '{@link standard.Specification#cannot_be_type(org.eclipse.emf.common.util.DiagnosticChain, java.util.Map) <em>Cannot be type</em>}' operation.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the '<em>Cannot be type</em>' operation.
         * @see standard.Specification#cannot_be_type(org.eclipse.emf.common.util.DiagnosticChain, java.util.Map)
         * @generated
         */
        getSpecification__Cannot_be_type__DiagnosticChain_Map() : org.eclipse.emf.ecore.EOperation;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Subsystem</em>'.
         * @see standard.Subsystem
         * @generated
         */
        getSubsystem() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for the reference '{@link standard.Subsystem#getBase_Component}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Component</em>'.
         * @see standard.Subsystem#getBase_Component()
         * @see #getSubsystem()
         * @generated
         */
        getSubsystem_Base_Component() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Trace</em>'.
         * @see standard.Trace
         * @generated
         */
        getTrace() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for the reference '{@link standard.Trace#getBase_Abstraction}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Abstraction</em>'.
         * @see standard.Trace#getBase_Abstraction()
         * @see #getTrace()
         * @generated
         */
        getTrace_Base_Abstraction() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Type</em>'.
         * @see standard.Type
         * @generated
         */
        getType() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for the reference '{@link standard.Type#getBase_Class}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Class</em>'.
         * @see standard.Type#getBase_Class()
         * @see #getType()
         * @generated
         */
        getType_Base_Class() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for the '{@link standard.Type#cannot_be_specification(org.eclipse.emf.common.util.DiagnosticChain, java.util.Map) <em>Cannot be specification</em>}' operation.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the '<em>Cannot be specification</em>' operation.
         * @see standard.Type#cannot_be_specification(org.eclipse.emf.common.util.DiagnosticChain, java.util.Map)
         * @generated
         */
        getType__Cannot_be_specification__DiagnosticChain_Map() : org.eclipse.emf.ecore.EOperation;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Utility</em>'.
         * @see standard.Utility
         * @generated
         */
        getUtility() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for the reference '{@link standard.Utility#getBase_Class}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Class</em>'.
         * @see standard.Utility#getBase_Class()
         * @see #getUtility()
         * @generated
         */
        getUtility_Base_Class() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for the '{@link standard.Utility#is_utility(org.eclipse.emf.common.util.DiagnosticChain, java.util.Map) <em>Is utility</em>}' operation.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the '<em>Is utility</em>' operation.
         * @see standard.Utility#is_utility(org.eclipse.emf.common.util.DiagnosticChain, java.util.Map)
         * @generated
         */
        getUtility__Is_utility__DiagnosticChain_Map() : org.eclipse.emf.ecore.EOperation;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Build Component</em>'.
         * @see standard.BuildComponent
         * @generated
         */
        getBuildComponent() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for the reference '{@link standard.BuildComponent#getBase_Component}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Component</em>'.
         * @see standard.BuildComponent#getBase_Component()
         * @see #getBuildComponent()
         * @generated
         */
        getBuildComponent_Base_Component() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Metamodel</em>'.
         * @see standard.Metamodel
         * @generated
         */
        getMetamodel() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for the reference '{@link standard.Metamodel#getBase_Model}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Model</em>'.
         * @see standard.Metamodel#getBase_Model()
         * @see #getMetamodel()
         * @generated
         */
        getMetamodel_Base_Model() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>System Model</em>'.
         * @see standard.SystemModel
         * @generated
         */
        getSystemModel() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for the reference '{@link standard.SystemModel#getBase_Model}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Model</em>'.
         * @see standard.SystemModel#getBase_Model()
         * @see #getSystemModel()
         * @generated
         */
        getSystemModel_Base_Model() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the factory that creates the instances of the model.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the factory that creates the instances of the model.
         * @generated
         */
        getStandardFactory() : standard.StandardFactory;
    }

    export namespace StandardPackage {

        /**
         * The package name.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        export let eNAME : string = "standard";

        /**
         * The package namespace URI.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        export let eNS_URI : string = "http://www.eclipse.org/uml2/5.0.0/UML/Profile/Standard";

        /**
         * The package namespace name.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        export let eNS_PREFIX : string = "standard";

        /**
         * The singleton instance of the package.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        export let eINSTANCE : StandardPackage = standard.impl.StandardPackageImpl.init();

        /**
         * The meta object id for the '{@link standard.impl.AuxiliaryImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see standard.impl.AuxiliaryImpl
         * @see standard.impl.StandardPackageImpl#getAuxiliary()
         * @generated
         */
        export let AUXILIARY : number = 0;

        /**
         * The feature id for the '<em><b>Base Class</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let AUXILIARY__BASE_CLASS : number = 0;

        /**
         * The number of structural features of the '<em>Auxiliary</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let AUXILIARY_FEATURE_COUNT : number = 1;

        /**
         * The number of operations of the '<em>Auxiliary</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let AUXILIARY_OPERATION_COUNT : number = 0;

        /**
         * The meta object id for the '{@link standard.impl.CallImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see standard.impl.CallImpl
         * @see standard.impl.StandardPackageImpl#getCall()
         * @generated
         */
        export let CALL : number = 1;

        /**
         * The feature id for the '<em><b>Base Usage</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let CALL__BASE_USAGE : number = 0;

        /**
         * The number of structural features of the '<em>Call</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let CALL_FEATURE_COUNT : number = 1;

        /**
         * The operation id for the '<em>Client and supplier are operations</em>' operation.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let CALL___CLIENT_AND_SUPPLIER_ARE_OPERATIONS__DIAGNOSTICCHAIN_MAP : number = 0;

        /**
         * The number of operations of the '<em>Call</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let CALL_OPERATION_COUNT : number = 1;

        /**
         * The meta object id for the '{@link standard.impl.CreateImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see standard.impl.CreateImpl
         * @see standard.impl.StandardPackageImpl#getCreate()
         * @generated
         */
        export let CREATE : number = 2;

        /**
         * The feature id for the '<em><b>Base Behavioral Feature</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let CREATE__BASE_BEHAVIORAL_FEATURE : number = 0;

        /**
         * The feature id for the '<em><b>Base Usage</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let CREATE__BASE_USAGE : number = 1;

        /**
         * The number of structural features of the '<em>Create</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let CREATE_FEATURE_COUNT : number = 2;

        /**
         * The operation id for the '<em>Client and supplier are classifiers</em>' operation.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let CREATE___CLIENT_AND_SUPPLIER_ARE_CLASSIFIERS__DIAGNOSTICCHAIN_MAP : number = 0;

        /**
         * The number of operations of the '<em>Create</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let CREATE_OPERATION_COUNT : number = 1;

        /**
         * The meta object id for the '{@link standard.impl.DeriveImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see standard.impl.DeriveImpl
         * @see standard.impl.StandardPackageImpl#getDerive()
         * @generated
         */
        export let DERIVE : number = 3;

        /**
         * The feature id for the '<em><b>Computation</b></em>' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let DERIVE__COMPUTATION : number = 0;

        /**
         * The feature id for the '<em><b>Base Abstraction</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let DERIVE__BASE_ABSTRACTION : number = 1;

        /**
         * The number of structural features of the '<em>Derive</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let DERIVE_FEATURE_COUNT : number = 2;

        /**
         * The number of operations of the '<em>Derive</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let DERIVE_OPERATION_COUNT : number = 0;

        /**
         * The meta object id for the '{@link standard.impl.DestroyImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see standard.impl.DestroyImpl
         * @see standard.impl.StandardPackageImpl#getDestroy()
         * @generated
         */
        export let DESTROY : number = 4;

        /**
         * The feature id for the '<em><b>Base Behavioral Feature</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let DESTROY__BASE_BEHAVIORAL_FEATURE : number = 0;

        /**
         * The number of structural features of the '<em>Destroy</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let DESTROY_FEATURE_COUNT : number = 1;

        /**
         * The number of operations of the '<em>Destroy</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let DESTROY_OPERATION_COUNT : number = 0;

        /**
         * The meta object id for the '{@link standard.impl.FileImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see standard.impl.FileImpl
         * @see standard.impl.StandardPackageImpl#getFile()
         * @generated
         */
        export let FILE : number = 6;

        /**
         * The feature id for the '<em><b>Base Artifact</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let FILE__BASE_ARTIFACT : number = 0;

        /**
         * The number of structural features of the '<em>File</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let FILE_FEATURE_COUNT : number = 1;

        /**
         * The number of operations of the '<em>File</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let FILE_OPERATION_COUNT : number = 0;

        /**
         * The meta object id for the '{@link standard.impl.DocumentImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see standard.impl.DocumentImpl
         * @see standard.impl.StandardPackageImpl#getDocument()
         * @generated
         */
        export let DOCUMENT : number = 5;

        /**
         * The feature id for the '<em><b>Base Artifact</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let DOCUMENT__BASE_ARTIFACT : number = StandardPackage.FILE__BASE_ARTIFACT;

        /**
         * The number of structural features of the '<em>Document</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let DOCUMENT_FEATURE_COUNT : number = StandardPackage.FILE_FEATURE_COUNT + 0;

        /**
         * The number of operations of the '<em>Document</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let DOCUMENT_OPERATION_COUNT : number = StandardPackage.FILE_OPERATION_COUNT + 0;

        /**
         * The meta object id for the '{@link standard.impl.EntityImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see standard.impl.EntityImpl
         * @see standard.impl.StandardPackageImpl#getEntity()
         * @generated
         */
        export let ENTITY : number = 7;

        /**
         * The feature id for the '<em><b>Base Component</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let ENTITY__BASE_COMPONENT : number = 0;

        /**
         * The number of structural features of the '<em>Entity</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let ENTITY_FEATURE_COUNT : number = 1;

        /**
         * The number of operations of the '<em>Entity</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let ENTITY_OPERATION_COUNT : number = 0;

        /**
         * The meta object id for the '{@link standard.impl.ExecutableImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see standard.impl.ExecutableImpl
         * @see standard.impl.StandardPackageImpl#getExecutable()
         * @generated
         */
        export let EXECUTABLE : number = 8;

        /**
         * The feature id for the '<em><b>Base Artifact</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let EXECUTABLE__BASE_ARTIFACT : number = StandardPackage.FILE__BASE_ARTIFACT;

        /**
         * The number of structural features of the '<em>Executable</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let EXECUTABLE_FEATURE_COUNT : number = StandardPackage.FILE_FEATURE_COUNT + 0;

        /**
         * The number of operations of the '<em>Executable</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let EXECUTABLE_OPERATION_COUNT : number = StandardPackage.FILE_OPERATION_COUNT + 0;

        /**
         * The meta object id for the '{@link standard.impl.FocusImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see standard.impl.FocusImpl
         * @see standard.impl.StandardPackageImpl#getFocus()
         * @generated
         */
        export let FOCUS : number = 9;

        /**
         * The feature id for the '<em><b>Base Class</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let FOCUS__BASE_CLASS : number = 0;

        /**
         * The number of structural features of the '<em>Focus</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let FOCUS_FEATURE_COUNT : number = 1;

        /**
         * The number of operations of the '<em>Focus</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let FOCUS_OPERATION_COUNT : number = 0;

        /**
         * The meta object id for the '{@link standard.impl.FrameworkImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see standard.impl.FrameworkImpl
         * @see standard.impl.StandardPackageImpl#getFramework()
         * @generated
         */
        export let FRAMEWORK : number = 10;

        /**
         * The feature id for the '<em><b>Base Package</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let FRAMEWORK__BASE_PACKAGE : number = 0;

        /**
         * The number of structural features of the '<em>Framework</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let FRAMEWORK_FEATURE_COUNT : number = 1;

        /**
         * The number of operations of the '<em>Framework</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let FRAMEWORK_OPERATION_COUNT : number = 0;

        /**
         * The meta object id for the '{@link standard.impl.ImplementImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see standard.impl.ImplementImpl
         * @see standard.impl.StandardPackageImpl#getImplement()
         * @generated
         */
        export let IMPLEMENT : number = 11;

        /**
         * The feature id for the '<em><b>Base Component</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let IMPLEMENT__BASE_COMPONENT : number = 0;

        /**
         * The number of structural features of the '<em>Implement</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let IMPLEMENT_FEATURE_COUNT : number = 1;

        /**
         * The operation id for the '<em>Implements specification</em>' operation.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let IMPLEMENT___IMPLEMENTS_SPECIFICATION__DIAGNOSTICCHAIN_MAP : number = 0;

        /**
         * The number of operations of the '<em>Implement</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let IMPLEMENT_OPERATION_COUNT : number = 1;

        /**
         * The meta object id for the '{@link standard.impl.ImplementationClassImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see standard.impl.ImplementationClassImpl
         * @see standard.impl.StandardPackageImpl#getImplementationClass()
         * @generated
         */
        export let IMPLEMENTATION_CLASS : number = 12;

        /**
         * The feature id for the '<em><b>Base Class</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let IMPLEMENTATION_CLASS__BASE_CLASS : number = 0;

        /**
         * The number of structural features of the '<em>Implementation Class</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let IMPLEMENTATION_CLASS_FEATURE_COUNT : number = 1;

        /**
         * The operation id for the '<em>Cannot be realization</em>' operation.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let IMPLEMENTATION_CLASS___CANNOT_BE_REALIZATION__DIAGNOSTICCHAIN_MAP : number = 0;

        /**
         * The number of operations of the '<em>Implementation Class</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let IMPLEMENTATION_CLASS_OPERATION_COUNT : number = 1;

        /**
         * The meta object id for the '{@link standard.impl.InstantiateImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see standard.impl.InstantiateImpl
         * @see standard.impl.StandardPackageImpl#getInstantiate()
         * @generated
         */
        export let INSTANTIATE : number = 13;

        /**
         * The feature id for the '<em><b>Base Usage</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let INSTANTIATE__BASE_USAGE : number = 0;

        /**
         * The number of structural features of the '<em>Instantiate</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let INSTANTIATE_FEATURE_COUNT : number = 1;

        /**
         * The operation id for the '<em>Client and supplier are classifiers</em>' operation.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let INSTANTIATE___CLIENT_AND_SUPPLIER_ARE_CLASSIFIERS__DIAGNOSTICCHAIN_MAP : number = 0;

        /**
         * The number of operations of the '<em>Instantiate</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let INSTANTIATE_OPERATION_COUNT : number = 1;

        /**
         * The meta object id for the '{@link standard.impl.LibraryImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see standard.impl.LibraryImpl
         * @see standard.impl.StandardPackageImpl#getLibrary()
         * @generated
         */
        export let LIBRARY : number = 14;

        /**
         * The feature id for the '<em><b>Base Artifact</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let LIBRARY__BASE_ARTIFACT : number = StandardPackage.FILE__BASE_ARTIFACT;

        /**
         * The number of structural features of the '<em>Library</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let LIBRARY_FEATURE_COUNT : number = StandardPackage.FILE_FEATURE_COUNT + 0;

        /**
         * The number of operations of the '<em>Library</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let LIBRARY_OPERATION_COUNT : number = StandardPackage.FILE_OPERATION_COUNT + 0;

        /**
         * The meta object id for the '{@link standard.impl.MetaclassImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see standard.impl.MetaclassImpl
         * @see standard.impl.StandardPackageImpl#getMetaclass()
         * @generated
         */
        export let METACLASS : number = 15;

        /**
         * The feature id for the '<em><b>Base Class</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let METACLASS__BASE_CLASS : number = 0;

        /**
         * The number of structural features of the '<em>Metaclass</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let METACLASS_FEATURE_COUNT : number = 1;

        /**
         * The number of operations of the '<em>Metaclass</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let METACLASS_OPERATION_COUNT : number = 0;

        /**
         * The meta object id for the '{@link standard.impl.ModelLibraryImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see standard.impl.ModelLibraryImpl
         * @see standard.impl.StandardPackageImpl#getModelLibrary()
         * @generated
         */
        export let MODEL_LIBRARY : number = 16;

        /**
         * The feature id for the '<em><b>Base Package</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let MODEL_LIBRARY__BASE_PACKAGE : number = 0;

        /**
         * The number of structural features of the '<em>Model Library</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let MODEL_LIBRARY_FEATURE_COUNT : number = 1;

        /**
         * The number of operations of the '<em>Model Library</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let MODEL_LIBRARY_OPERATION_COUNT : number = 0;

        /**
         * The meta object id for the '{@link standard.impl.ProcessImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see standard.impl.ProcessImpl
         * @see standard.impl.StandardPackageImpl#getProcess()
         * @generated
         */
        export let PROCESS : number = 17;

        /**
         * The feature id for the '<em><b>Base Component</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let PROCESS__BASE_COMPONENT : number = 0;

        /**
         * The number of structural features of the '<em>Process</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let PROCESS_FEATURE_COUNT : number = 1;

        /**
         * The number of operations of the '<em>Process</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let PROCESS_OPERATION_COUNT : number = 0;

        /**
         * The meta object id for the '{@link standard.impl.RealizationImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see standard.impl.RealizationImpl
         * @see standard.impl.StandardPackageImpl#getRealization()
         * @generated
         */
        export let REALIZATION : number = 18;

        /**
         * The feature id for the '<em><b>Base Classifier</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let REALIZATION__BASE_CLASSIFIER : number = 0;

        /**
         * The number of structural features of the '<em>Realization</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let REALIZATION_FEATURE_COUNT : number = 1;

        /**
         * The operation id for the '<em>Cannot be implementation Class</em>' operation.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let REALIZATION___CANNOT_BE_IMPLEMENTATION_CLASS__DIAGNOSTICCHAIN_MAP : number = 0;

        /**
         * The number of operations of the '<em>Realization</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let REALIZATION_OPERATION_COUNT : number = 1;

        /**
         * The meta object id for the '{@link standard.impl.RefineImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see standard.impl.RefineImpl
         * @see standard.impl.StandardPackageImpl#getRefine()
         * @generated
         */
        export let REFINE : number = 19;

        /**
         * The feature id for the '<em><b>Base Abstraction</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let REFINE__BASE_ABSTRACTION : number = 0;

        /**
         * The number of structural features of the '<em>Refine</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let REFINE_FEATURE_COUNT : number = 1;

        /**
         * The number of operations of the '<em>Refine</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let REFINE_OPERATION_COUNT : number = 0;

        /**
         * The meta object id for the '{@link standard.impl.ResponsibilityImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see standard.impl.ResponsibilityImpl
         * @see standard.impl.StandardPackageImpl#getResponsibility()
         * @generated
         */
        export let RESPONSIBILITY : number = 20;

        /**
         * The feature id for the '<em><b>Base Usage</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let RESPONSIBILITY__BASE_USAGE : number = 0;

        /**
         * The number of structural features of the '<em>Responsibility</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let RESPONSIBILITY_FEATURE_COUNT : number = 1;

        /**
         * The number of operations of the '<em>Responsibility</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let RESPONSIBILITY_OPERATION_COUNT : number = 0;

        /**
         * The meta object id for the '{@link standard.impl.ScriptImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see standard.impl.ScriptImpl
         * @see standard.impl.StandardPackageImpl#getScript()
         * @generated
         */
        export let SCRIPT : number = 21;

        /**
         * The feature id for the '<em><b>Base Artifact</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let SCRIPT__BASE_ARTIFACT : number = StandardPackage.FILE__BASE_ARTIFACT;

        /**
         * The number of structural features of the '<em>Script</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let SCRIPT_FEATURE_COUNT : number = StandardPackage.FILE_FEATURE_COUNT + 0;

        /**
         * The number of operations of the '<em>Script</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let SCRIPT_OPERATION_COUNT : number = StandardPackage.FILE_OPERATION_COUNT + 0;

        /**
         * The meta object id for the '{@link standard.impl.SendImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see standard.impl.SendImpl
         * @see standard.impl.StandardPackageImpl#getSend()
         * @generated
         */
        export let SEND : number = 22;

        /**
         * The feature id for the '<em><b>Base Usage</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let SEND__BASE_USAGE : number = 0;

        /**
         * The number of structural features of the '<em>Send</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let SEND_FEATURE_COUNT : number = 1;

        /**
         * The operation id for the '<em>Client operation sends supplier signal</em>' operation.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let SEND___CLIENT_OPERATION_SENDS_SUPPLIER_SIGNAL__DIAGNOSTICCHAIN_MAP : number = 0;

        /**
         * The number of operations of the '<em>Send</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let SEND_OPERATION_COUNT : number = 1;

        /**
         * The meta object id for the '{@link standard.impl.ServiceImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see standard.impl.ServiceImpl
         * @see standard.impl.StandardPackageImpl#getService()
         * @generated
         */
        export let SERVICE : number = 23;

        /**
         * The feature id for the '<em><b>Base Component</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let SERVICE__BASE_COMPONENT : number = 0;

        /**
         * The number of structural features of the '<em>Service</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let SERVICE_FEATURE_COUNT : number = 1;

        /**
         * The number of operations of the '<em>Service</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let SERVICE_OPERATION_COUNT : number = 0;

        /**
         * The meta object id for the '{@link standard.impl.SourceImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see standard.impl.SourceImpl
         * @see standard.impl.StandardPackageImpl#getSource()
         * @generated
         */
        export let SOURCE : number = 24;

        /**
         * The feature id for the '<em><b>Base Artifact</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let SOURCE__BASE_ARTIFACT : number = StandardPackage.FILE__BASE_ARTIFACT;

        /**
         * The number of structural features of the '<em>Source</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let SOURCE_FEATURE_COUNT : number = StandardPackage.FILE_FEATURE_COUNT + 0;

        /**
         * The number of operations of the '<em>Source</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let SOURCE_OPERATION_COUNT : number = StandardPackage.FILE_OPERATION_COUNT + 0;

        /**
         * The meta object id for the '{@link standard.impl.SpecificationImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see standard.impl.SpecificationImpl
         * @see standard.impl.StandardPackageImpl#getSpecification()
         * @generated
         */
        export let SPECIFICATION : number = 25;

        /**
         * The feature id for the '<em><b>Base Classifier</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let SPECIFICATION__BASE_CLASSIFIER : number = 0;

        /**
         * The number of structural features of the '<em>Specification</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let SPECIFICATION_FEATURE_COUNT : number = 1;

        /**
         * The operation id for the '<em>Cannot be type</em>' operation.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let SPECIFICATION___CANNOT_BE_TYPE__DIAGNOSTICCHAIN_MAP : number = 0;

        /**
         * The number of operations of the '<em>Specification</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let SPECIFICATION_OPERATION_COUNT : number = 1;

        /**
         * The meta object id for the '{@link standard.impl.SubsystemImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see standard.impl.SubsystemImpl
         * @see standard.impl.StandardPackageImpl#getSubsystem()
         * @generated
         */
        export let SUBSYSTEM : number = 26;

        /**
         * The feature id for the '<em><b>Base Component</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let SUBSYSTEM__BASE_COMPONENT : number = 0;

        /**
         * The number of structural features of the '<em>Subsystem</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let SUBSYSTEM_FEATURE_COUNT : number = 1;

        /**
         * The number of operations of the '<em>Subsystem</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let SUBSYSTEM_OPERATION_COUNT : number = 0;

        /**
         * The meta object id for the '{@link standard.impl.TraceImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see standard.impl.TraceImpl
         * @see standard.impl.StandardPackageImpl#getTrace()
         * @generated
         */
        export let TRACE : number = 27;

        /**
         * The feature id for the '<em><b>Base Abstraction</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let TRACE__BASE_ABSTRACTION : number = 0;

        /**
         * The number of structural features of the '<em>Trace</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let TRACE_FEATURE_COUNT : number = 1;

        /**
         * The number of operations of the '<em>Trace</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let TRACE_OPERATION_COUNT : number = 0;

        /**
         * The meta object id for the '{@link standard.impl.TypeImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see standard.impl.TypeImpl
         * @see standard.impl.StandardPackageImpl#getType()
         * @generated
         */
        export let TYPE : number = 28;

        /**
         * The feature id for the '<em><b>Base Class</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let TYPE__BASE_CLASS : number = 0;

        /**
         * The number of structural features of the '<em>Type</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let TYPE_FEATURE_COUNT : number = 1;

        /**
         * The operation id for the '<em>Cannot be specification</em>' operation.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let TYPE___CANNOT_BE_SPECIFICATION__DIAGNOSTICCHAIN_MAP : number = 0;

        /**
         * The number of operations of the '<em>Type</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let TYPE_OPERATION_COUNT : number = 1;

        /**
         * The meta object id for the '{@link standard.impl.UtilityImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see standard.impl.UtilityImpl
         * @see standard.impl.StandardPackageImpl#getUtility()
         * @generated
         */
        export let UTILITY : number = 29;

        /**
         * The feature id for the '<em><b>Base Class</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let UTILITY__BASE_CLASS : number = 0;

        /**
         * The number of structural features of the '<em>Utility</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let UTILITY_FEATURE_COUNT : number = 1;

        /**
         * The operation id for the '<em>Is utility</em>' operation.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let UTILITY___IS_UTILITY__DIAGNOSTICCHAIN_MAP : number = 0;

        /**
         * The number of operations of the '<em>Utility</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let UTILITY_OPERATION_COUNT : number = 1;

        /**
         * The meta object id for the '{@link standard.impl.BuildComponentImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see standard.impl.BuildComponentImpl
         * @see standard.impl.StandardPackageImpl#getBuildComponent()
         * @generated
         */
        export let BUILD_COMPONENT : number = 30;

        /**
         * The feature id for the '<em><b>Base Component</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let BUILD_COMPONENT__BASE_COMPONENT : number = 0;

        /**
         * The number of structural features of the '<em>Build Component</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let BUILD_COMPONENT_FEATURE_COUNT : number = 1;

        /**
         * The number of operations of the '<em>Build Component</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let BUILD_COMPONENT_OPERATION_COUNT : number = 0;

        /**
         * The meta object id for the '{@link standard.impl.MetamodelImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see standard.impl.MetamodelImpl
         * @see standard.impl.StandardPackageImpl#getMetamodel()
         * @generated
         */
        export let METAMODEL : number = 31;

        /**
         * The feature id for the '<em><b>Base Model</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let METAMODEL__BASE_MODEL : number = 0;

        /**
         * The number of structural features of the '<em>Metamodel</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let METAMODEL_FEATURE_COUNT : number = 1;

        /**
         * The number of operations of the '<em>Metamodel</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let METAMODEL_OPERATION_COUNT : number = 0;

        /**
         * The meta object id for the '{@link standard.impl.SystemModelImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see standard.impl.SystemModelImpl
         * @see standard.impl.StandardPackageImpl#getSystemModel()
         * @generated
         */
        export let SYSTEM_MODEL : number = 32;

        /**
         * The feature id for the '<em><b>Base Model</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let SYSTEM_MODEL__BASE_MODEL : number = 0;

        /**
         * The number of structural features of the '<em>System Model</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let SYSTEM_MODEL_FEATURE_COUNT : number = 1;

        /**
         * The number of operations of the '<em>System Model</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let SYSTEM_MODEL_OPERATION_COUNT : number = 0;
    }


    export namespace StandardPackage {

        /**
         * <!-- begin-user-doc -->
         * Defines literals for the meta objects that represent
         * <ul>
         * <li>each class,</li>
         * <li>each feature of each class,</li>
         * <li>each operation of each class,</li>
         * <li>each enum,</li>
         * <li>and each data type</li>
         * </ul>
         * <!-- end-user-doc -->
         * @generated
         * @class
         */
        export interface Literals {        }

        export namespace Literals {

            /**
             * The meta object literal for the '{@link standard.impl.AuxiliaryImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see standard.impl.AuxiliaryImpl
             * @see standard.impl.StandardPackageImpl#getAuxiliary()
             * @generated
             */
            export let AUXILIARY : org.eclipse.emf.ecore.EClass = standard.StandardPackage.eINSTANCE.getAuxiliary();

            /**
             * The meta object literal for the '<em><b>Base Class</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let AUXILIARY__BASE_CLASS : org.eclipse.emf.ecore.EReference = standard.StandardPackage.eINSTANCE.getAuxiliary_Base_Class();

            /**
             * The meta object literal for the '{@link standard.impl.CallImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see standard.impl.CallImpl
             * @see standard.impl.StandardPackageImpl#getCall()
             * @generated
             */
            export let CALL : org.eclipse.emf.ecore.EClass = standard.StandardPackage.eINSTANCE.getCall();

            /**
             * The meta object literal for the '<em><b>Base Usage</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let CALL__BASE_USAGE : org.eclipse.emf.ecore.EReference = standard.StandardPackage.eINSTANCE.getCall_Base_Usage();

            /**
             * The meta object literal for the '<em><b>Client and supplier are operations</b></em>' operation.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let CALL___CLIENT_AND_SUPPLIER_ARE_OPERATIONS__DIAGNOSTICCHAIN_MAP : org.eclipse.emf.ecore.EOperation = standard.StandardPackage.eINSTANCE.getCall__Client_and_supplier_are_operations__DiagnosticChain_Map();

            /**
             * The meta object literal for the '{@link standard.impl.CreateImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see standard.impl.CreateImpl
             * @see standard.impl.StandardPackageImpl#getCreate()
             * @generated
             */
            export let CREATE : org.eclipse.emf.ecore.EClass = standard.StandardPackage.eINSTANCE.getCreate();

            /**
             * The meta object literal for the '<em><b>Base Behavioral Feature</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let CREATE__BASE_BEHAVIORAL_FEATURE : org.eclipse.emf.ecore.EReference = standard.StandardPackage.eINSTANCE.getCreate_Base_BehavioralFeature();

            /**
             * The meta object literal for the '<em><b>Base Usage</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let CREATE__BASE_USAGE : org.eclipse.emf.ecore.EReference = standard.StandardPackage.eINSTANCE.getCreate_Base_Usage();

            /**
             * The meta object literal for the '<em><b>Client and supplier are classifiers</b></em>' operation.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let CREATE___CLIENT_AND_SUPPLIER_ARE_CLASSIFIERS__DIAGNOSTICCHAIN_MAP : org.eclipse.emf.ecore.EOperation = standard.StandardPackage.eINSTANCE.getCreate__Client_and_supplier_are_classifiers__DiagnosticChain_Map();

            /**
             * The meta object literal for the '{@link standard.impl.DeriveImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see standard.impl.DeriveImpl
             * @see standard.impl.StandardPackageImpl#getDerive()
             * @generated
             */
            export let DERIVE : org.eclipse.emf.ecore.EClass = standard.StandardPackage.eINSTANCE.getDerive();

            /**
             * The meta object literal for the '<em><b>Computation</b></em>' containment reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let DERIVE__COMPUTATION : org.eclipse.emf.ecore.EReference = standard.StandardPackage.eINSTANCE.getDerive_Computation();

            /**
             * The meta object literal for the '<em><b>Base Abstraction</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let DERIVE__BASE_ABSTRACTION : org.eclipse.emf.ecore.EReference = standard.StandardPackage.eINSTANCE.getDerive_Base_Abstraction();

            /**
             * The meta object literal for the '{@link standard.impl.DestroyImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see standard.impl.DestroyImpl
             * @see standard.impl.StandardPackageImpl#getDestroy()
             * @generated
             */
            export let DESTROY : org.eclipse.emf.ecore.EClass = standard.StandardPackage.eINSTANCE.getDestroy();

            /**
             * The meta object literal for the '<em><b>Base Behavioral Feature</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let DESTROY__BASE_BEHAVIORAL_FEATURE : org.eclipse.emf.ecore.EReference = standard.StandardPackage.eINSTANCE.getDestroy_Base_BehavioralFeature();

            /**
             * The meta object literal for the '{@link standard.impl.DocumentImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see standard.impl.DocumentImpl
             * @see standard.impl.StandardPackageImpl#getDocument()
             * @generated
             */
            export let DOCUMENT : org.eclipse.emf.ecore.EClass = standard.StandardPackage.eINSTANCE.getDocument();

            /**
             * The meta object literal for the '{@link standard.impl.FileImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see standard.impl.FileImpl
             * @see standard.impl.StandardPackageImpl#getFile()
             * @generated
             */
            export let FILE : org.eclipse.emf.ecore.EClass = standard.StandardPackage.eINSTANCE.getFile();

            /**
             * The meta object literal for the '<em><b>Base Artifact</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let FILE__BASE_ARTIFACT : org.eclipse.emf.ecore.EReference = standard.StandardPackage.eINSTANCE.getFile_Base_Artifact();

            /**
             * The meta object literal for the '{@link standard.impl.EntityImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see standard.impl.EntityImpl
             * @see standard.impl.StandardPackageImpl#getEntity()
             * @generated
             */
            export let ENTITY : org.eclipse.emf.ecore.EClass = standard.StandardPackage.eINSTANCE.getEntity();

            /**
             * The meta object literal for the '<em><b>Base Component</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let ENTITY__BASE_COMPONENT : org.eclipse.emf.ecore.EReference = standard.StandardPackage.eINSTANCE.getEntity_Base_Component();

            /**
             * The meta object literal for the '{@link standard.impl.ExecutableImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see standard.impl.ExecutableImpl
             * @see standard.impl.StandardPackageImpl#getExecutable()
             * @generated
             */
            export let EXECUTABLE : org.eclipse.emf.ecore.EClass = standard.StandardPackage.eINSTANCE.getExecutable();

            /**
             * The meta object literal for the '{@link standard.impl.FocusImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see standard.impl.FocusImpl
             * @see standard.impl.StandardPackageImpl#getFocus()
             * @generated
             */
            export let FOCUS : org.eclipse.emf.ecore.EClass = standard.StandardPackage.eINSTANCE.getFocus();

            /**
             * The meta object literal for the '<em><b>Base Class</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let FOCUS__BASE_CLASS : org.eclipse.emf.ecore.EReference = standard.StandardPackage.eINSTANCE.getFocus_Base_Class();

            /**
             * The meta object literal for the '{@link standard.impl.FrameworkImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see standard.impl.FrameworkImpl
             * @see standard.impl.StandardPackageImpl#getFramework()
             * @generated
             */
            export let FRAMEWORK : org.eclipse.emf.ecore.EClass = standard.StandardPackage.eINSTANCE.getFramework();

            /**
             * The meta object literal for the '<em><b>Base Package</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let FRAMEWORK__BASE_PACKAGE : org.eclipse.emf.ecore.EReference = standard.StandardPackage.eINSTANCE.getFramework_Base_Package();

            /**
             * The meta object literal for the '{@link standard.impl.ImplementImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see standard.impl.ImplementImpl
             * @see standard.impl.StandardPackageImpl#getImplement()
             * @generated
             */
            export let IMPLEMENT : org.eclipse.emf.ecore.EClass = standard.StandardPackage.eINSTANCE.getImplement();

            /**
             * The meta object literal for the '<em><b>Base Component</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let IMPLEMENT__BASE_COMPONENT : org.eclipse.emf.ecore.EReference = standard.StandardPackage.eINSTANCE.getImplement_Base_Component();

            /**
             * The meta object literal for the '<em><b>Implements specification</b></em>' operation.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let IMPLEMENT___IMPLEMENTS_SPECIFICATION__DIAGNOSTICCHAIN_MAP : org.eclipse.emf.ecore.EOperation = standard.StandardPackage.eINSTANCE.getImplement__Implements_specification__DiagnosticChain_Map();

            /**
             * The meta object literal for the '{@link standard.impl.ImplementationClassImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see standard.impl.ImplementationClassImpl
             * @see standard.impl.StandardPackageImpl#getImplementationClass()
             * @generated
             */
            export let IMPLEMENTATION_CLASS : org.eclipse.emf.ecore.EClass = standard.StandardPackage.eINSTANCE.getImplementationClass();

            /**
             * The meta object literal for the '<em><b>Base Class</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let IMPLEMENTATION_CLASS__BASE_CLASS : org.eclipse.emf.ecore.EReference = standard.StandardPackage.eINSTANCE.getImplementationClass_Base_Class();

            /**
             * The meta object literal for the '<em><b>Cannot be realization</b></em>' operation.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let IMPLEMENTATION_CLASS___CANNOT_BE_REALIZATION__DIAGNOSTICCHAIN_MAP : org.eclipse.emf.ecore.EOperation = standard.StandardPackage.eINSTANCE.getImplementationClass__Cannot_be_realization__DiagnosticChain_Map();

            /**
             * The meta object literal for the '{@link standard.impl.InstantiateImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see standard.impl.InstantiateImpl
             * @see standard.impl.StandardPackageImpl#getInstantiate()
             * @generated
             */
            export let INSTANTIATE : org.eclipse.emf.ecore.EClass = standard.StandardPackage.eINSTANCE.getInstantiate();

            /**
             * The meta object literal for the '<em><b>Base Usage</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let INSTANTIATE__BASE_USAGE : org.eclipse.emf.ecore.EReference = standard.StandardPackage.eINSTANCE.getInstantiate_Base_Usage();

            /**
             * The meta object literal for the '<em><b>Client and supplier are classifiers</b></em>' operation.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let INSTANTIATE___CLIENT_AND_SUPPLIER_ARE_CLASSIFIERS__DIAGNOSTICCHAIN_MAP : org.eclipse.emf.ecore.EOperation = standard.StandardPackage.eINSTANCE.getInstantiate__Client_and_supplier_are_classifiers__DiagnosticChain_Map();

            /**
             * The meta object literal for the '{@link standard.impl.LibraryImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see standard.impl.LibraryImpl
             * @see standard.impl.StandardPackageImpl#getLibrary()
             * @generated
             */
            export let LIBRARY : org.eclipse.emf.ecore.EClass = standard.StandardPackage.eINSTANCE.getLibrary();

            /**
             * The meta object literal for the '{@link standard.impl.MetaclassImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see standard.impl.MetaclassImpl
             * @see standard.impl.StandardPackageImpl#getMetaclass()
             * @generated
             */
            export let METACLASS : org.eclipse.emf.ecore.EClass = standard.StandardPackage.eINSTANCE.getMetaclass();

            /**
             * The meta object literal for the '<em><b>Base Class</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let METACLASS__BASE_CLASS : org.eclipse.emf.ecore.EReference = standard.StandardPackage.eINSTANCE.getMetaclass_Base_Class();

            /**
             * The meta object literal for the '{@link standard.impl.ModelLibraryImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see standard.impl.ModelLibraryImpl
             * @see standard.impl.StandardPackageImpl#getModelLibrary()
             * @generated
             */
            export let MODEL_LIBRARY : org.eclipse.emf.ecore.EClass = standard.StandardPackage.eINSTANCE.getModelLibrary();

            /**
             * The meta object literal for the '<em><b>Base Package</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let MODEL_LIBRARY__BASE_PACKAGE : org.eclipse.emf.ecore.EReference = standard.StandardPackage.eINSTANCE.getModelLibrary_Base_Package();

            /**
             * The meta object literal for the '{@link standard.impl.ProcessImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see standard.impl.ProcessImpl
             * @see standard.impl.StandardPackageImpl#getProcess()
             * @generated
             */
            export let PROCESS : org.eclipse.emf.ecore.EClass = standard.StandardPackage.eINSTANCE.getProcess();

            /**
             * The meta object literal for the '<em><b>Base Component</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let PROCESS__BASE_COMPONENT : org.eclipse.emf.ecore.EReference = standard.StandardPackage.eINSTANCE.getProcess_Base_Component();

            /**
             * The meta object literal for the '{@link standard.impl.RealizationImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see standard.impl.RealizationImpl
             * @see standard.impl.StandardPackageImpl#getRealization()
             * @generated
             */
            export let REALIZATION : org.eclipse.emf.ecore.EClass = standard.StandardPackage.eINSTANCE.getRealization();

            /**
             * The meta object literal for the '<em><b>Base Classifier</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let REALIZATION__BASE_CLASSIFIER : org.eclipse.emf.ecore.EReference = standard.StandardPackage.eINSTANCE.getRealization_Base_Classifier();

            /**
             * The meta object literal for the '<em><b>Cannot be implementation Class</b></em>' operation.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let REALIZATION___CANNOT_BE_IMPLEMENTATION_CLASS__DIAGNOSTICCHAIN_MAP : org.eclipse.emf.ecore.EOperation = standard.StandardPackage.eINSTANCE.getRealization__Cannot_be_implementationClass__DiagnosticChain_Map();

            /**
             * The meta object literal for the '{@link standard.impl.RefineImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see standard.impl.RefineImpl
             * @see standard.impl.StandardPackageImpl#getRefine()
             * @generated
             */
            export let REFINE : org.eclipse.emf.ecore.EClass = standard.StandardPackage.eINSTANCE.getRefine();

            /**
             * The meta object literal for the '<em><b>Base Abstraction</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let REFINE__BASE_ABSTRACTION : org.eclipse.emf.ecore.EReference = standard.StandardPackage.eINSTANCE.getRefine_Base_Abstraction();

            /**
             * The meta object literal for the '{@link standard.impl.ResponsibilityImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see standard.impl.ResponsibilityImpl
             * @see standard.impl.StandardPackageImpl#getResponsibility()
             * @generated
             */
            export let RESPONSIBILITY : org.eclipse.emf.ecore.EClass = standard.StandardPackage.eINSTANCE.getResponsibility();

            /**
             * The meta object literal for the '<em><b>Base Usage</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let RESPONSIBILITY__BASE_USAGE : org.eclipse.emf.ecore.EReference = standard.StandardPackage.eINSTANCE.getResponsibility_Base_Usage();

            /**
             * The meta object literal for the '{@link standard.impl.ScriptImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see standard.impl.ScriptImpl
             * @see standard.impl.StandardPackageImpl#getScript()
             * @generated
             */
            export let SCRIPT : org.eclipse.emf.ecore.EClass = standard.StandardPackage.eINSTANCE.getScript();

            /**
             * The meta object literal for the '{@link standard.impl.SendImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see standard.impl.SendImpl
             * @see standard.impl.StandardPackageImpl#getSend()
             * @generated
             */
            export let SEND : org.eclipse.emf.ecore.EClass = standard.StandardPackage.eINSTANCE.getSend();

            /**
             * The meta object literal for the '<em><b>Base Usage</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let SEND__BASE_USAGE : org.eclipse.emf.ecore.EReference = standard.StandardPackage.eINSTANCE.getSend_Base_Usage();

            /**
             * The meta object literal for the '<em><b>Client operation sends supplier signal</b></em>' operation.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let SEND___CLIENT_OPERATION_SENDS_SUPPLIER_SIGNAL__DIAGNOSTICCHAIN_MAP : org.eclipse.emf.ecore.EOperation = standard.StandardPackage.eINSTANCE.getSend__Client_operation_sends_supplier_signal__DiagnosticChain_Map();

            /**
             * The meta object literal for the '{@link standard.impl.ServiceImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see standard.impl.ServiceImpl
             * @see standard.impl.StandardPackageImpl#getService()
             * @generated
             */
            export let SERVICE : org.eclipse.emf.ecore.EClass = standard.StandardPackage.eINSTANCE.getService();

            /**
             * The meta object literal for the '<em><b>Base Component</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let SERVICE__BASE_COMPONENT : org.eclipse.emf.ecore.EReference = standard.StandardPackage.eINSTANCE.getService_Base_Component();

            /**
             * The meta object literal for the '{@link standard.impl.SourceImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see standard.impl.SourceImpl
             * @see standard.impl.StandardPackageImpl#getSource()
             * @generated
             */
            export let SOURCE : org.eclipse.emf.ecore.EClass = standard.StandardPackage.eINSTANCE.getSource();

            /**
             * The meta object literal for the '{@link standard.impl.SpecificationImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see standard.impl.SpecificationImpl
             * @see standard.impl.StandardPackageImpl#getSpecification()
             * @generated
             */
            export let SPECIFICATION : org.eclipse.emf.ecore.EClass = standard.StandardPackage.eINSTANCE.getSpecification();

            /**
             * The meta object literal for the '<em><b>Base Classifier</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let SPECIFICATION__BASE_CLASSIFIER : org.eclipse.emf.ecore.EReference = standard.StandardPackage.eINSTANCE.getSpecification_Base_Classifier();

            /**
             * The meta object literal for the '<em><b>Cannot be type</b></em>' operation.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let SPECIFICATION___CANNOT_BE_TYPE__DIAGNOSTICCHAIN_MAP : org.eclipse.emf.ecore.EOperation = standard.StandardPackage.eINSTANCE.getSpecification__Cannot_be_type__DiagnosticChain_Map();

            /**
             * The meta object literal for the '{@link standard.impl.SubsystemImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see standard.impl.SubsystemImpl
             * @see standard.impl.StandardPackageImpl#getSubsystem()
             * @generated
             */
            export let SUBSYSTEM : org.eclipse.emf.ecore.EClass = standard.StandardPackage.eINSTANCE.getSubsystem();

            /**
             * The meta object literal for the '<em><b>Base Component</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let SUBSYSTEM__BASE_COMPONENT : org.eclipse.emf.ecore.EReference = standard.StandardPackage.eINSTANCE.getSubsystem_Base_Component();

            /**
             * The meta object literal for the '{@link standard.impl.TraceImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see standard.impl.TraceImpl
             * @see standard.impl.StandardPackageImpl#getTrace()
             * @generated
             */
            export let TRACE : org.eclipse.emf.ecore.EClass = standard.StandardPackage.eINSTANCE.getTrace();

            /**
             * The meta object literal for the '<em><b>Base Abstraction</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let TRACE__BASE_ABSTRACTION : org.eclipse.emf.ecore.EReference = standard.StandardPackage.eINSTANCE.getTrace_Base_Abstraction();

            /**
             * The meta object literal for the '{@link standard.impl.TypeImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see standard.impl.TypeImpl
             * @see standard.impl.StandardPackageImpl#getType()
             * @generated
             */
            export let TYPE : org.eclipse.emf.ecore.EClass = standard.StandardPackage.eINSTANCE.getType();

            /**
             * The meta object literal for the '<em><b>Base Class</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let TYPE__BASE_CLASS : org.eclipse.emf.ecore.EReference = standard.StandardPackage.eINSTANCE.getType_Base_Class();

            /**
             * The meta object literal for the '<em><b>Cannot be specification</b></em>' operation.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let TYPE___CANNOT_BE_SPECIFICATION__DIAGNOSTICCHAIN_MAP : org.eclipse.emf.ecore.EOperation = standard.StandardPackage.eINSTANCE.getType__Cannot_be_specification__DiagnosticChain_Map();

            /**
             * The meta object literal for the '{@link standard.impl.UtilityImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see standard.impl.UtilityImpl
             * @see standard.impl.StandardPackageImpl#getUtility()
             * @generated
             */
            export let UTILITY : org.eclipse.emf.ecore.EClass = standard.StandardPackage.eINSTANCE.getUtility();

            /**
             * The meta object literal for the '<em><b>Base Class</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let UTILITY__BASE_CLASS : org.eclipse.emf.ecore.EReference = standard.StandardPackage.eINSTANCE.getUtility_Base_Class();

            /**
             * The meta object literal for the '<em><b>Is utility</b></em>' operation.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let UTILITY___IS_UTILITY__DIAGNOSTICCHAIN_MAP : org.eclipse.emf.ecore.EOperation = standard.StandardPackage.eINSTANCE.getUtility__Is_utility__DiagnosticChain_Map();

            /**
             * The meta object literal for the '{@link standard.impl.BuildComponentImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see standard.impl.BuildComponentImpl
             * @see standard.impl.StandardPackageImpl#getBuildComponent()
             * @generated
             */
            export let BUILD_COMPONENT : org.eclipse.emf.ecore.EClass = standard.StandardPackage.eINSTANCE.getBuildComponent();

            /**
             * The meta object literal for the '<em><b>Base Component</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let BUILD_COMPONENT__BASE_COMPONENT : org.eclipse.emf.ecore.EReference = standard.StandardPackage.eINSTANCE.getBuildComponent_Base_Component();

            /**
             * The meta object literal for the '{@link standard.impl.MetamodelImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see standard.impl.MetamodelImpl
             * @see standard.impl.StandardPackageImpl#getMetamodel()
             * @generated
             */
            export let METAMODEL : org.eclipse.emf.ecore.EClass = standard.StandardPackage.eINSTANCE.getMetamodel();

            /**
             * The meta object literal for the '<em><b>Base Model</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let METAMODEL__BASE_MODEL : org.eclipse.emf.ecore.EReference = standard.StandardPackage.eINSTANCE.getMetamodel_Base_Model();

            /**
             * The meta object literal for the '{@link standard.impl.SystemModelImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see standard.impl.SystemModelImpl
             * @see standard.impl.StandardPackageImpl#getSystemModel()
             * @generated
             */
            export let SYSTEM_MODEL : org.eclipse.emf.ecore.EClass = standard.StandardPackage.eINSTANCE.getSystemModel();

            /**
             * The meta object literal for the '<em><b>Base Model</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let SYSTEM_MODEL__BASE_MODEL : org.eclipse.emf.ecore.EReference = standard.StandardPackage.eINSTANCE.getSystemModel_Base_Model();
        }

    }

}

