/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.portandflows {
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
     * @see sysml.portandflows.PortandflowsFactory
     * @model kind="package"
     * @generated
     * @class
     */
    export interface PortandflowsPackage extends org.eclipse.emf.ecore.EPackage {
        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Flow Port</em>'.
         * @see sysml.portandflows.FlowPort
         * @generated
         */
        getFlowPort() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for the reference '{@link sysml.portandflows.FlowPort#getBase_Port}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Port</em>'.
         * @see sysml.portandflows.FlowPort#getBase_Port()
         * @see #getFlowPort()
         * @generated
         */
        getFlowPort_Base_Port() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for the attribute '{@link sysml.portandflows.FlowPort#isIsAtomic}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the attribute '<em>Is Atomic</em>'.
         * @see sysml.portandflows.FlowPort#isIsAtomic()
         * @see #getFlowPort()
         * @generated
         */
        getFlowPort_IsAtomic() : org.eclipse.emf.ecore.EAttribute;

        /**
         * Returns the meta object for the attribute '{@link sysml.portandflows.FlowPort#isIsConjugated}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the attribute '<em>Is Conjugated</em>'.
         * @see sysml.portandflows.FlowPort#isIsConjugated()
         * @see #getFlowPort()
         * @generated
         */
        getFlowPort_IsConjugated() : org.eclipse.emf.ecore.EAttribute;

        /**
         * Returns the meta object for the attribute '{@link sysml.portandflows.FlowPort#getDirection}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the attribute '<em>Direction</em>'.
         * @see sysml.portandflows.FlowPort#getDirection()
         * @see #getFlowPort()
         * @generated
         */
        getFlowPort_Direction() : org.eclipse.emf.ecore.EAttribute;

        /**
         * Returns the meta object for the '{@link sysml.portandflows.FlowPort#getIcon() <em>Get Icon</em>}' operation.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the '<em>Get Icon</em>' operation.
         * @see sysml.portandflows.FlowPort#getIcon()
         * @generated
         */
        getFlowPort__GetIcon() : org.eclipse.emf.ecore.EOperation;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Flow Property</em>'.
         * @see sysml.portandflows.FlowProperty
         * @generated
         */
        getFlowProperty() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for the reference '{@link sysml.portandflows.FlowProperty#getBase_Property}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Property</em>'.
         * @see sysml.portandflows.FlowProperty#getBase_Property()
         * @see #getFlowProperty()
         * @generated
         */
        getFlowProperty_Base_Property() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for the attribute '{@link sysml.portandflows.FlowProperty#getDirection}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the attribute '<em>Direction</em>'.
         * @see sysml.portandflows.FlowProperty#getDirection()
         * @see #getFlowProperty()
         * @generated
         */
        getFlowProperty_Direction() : org.eclipse.emf.ecore.EAttribute;

        /**
         * Returns the meta object for the '{@link sysml.portandflows.FlowProperty#getIcon() <em>Get Icon</em>}' operation.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the '<em>Get Icon</em>' operation.
         * @see sysml.portandflows.FlowProperty#getIcon()
         * @generated
         */
        getFlowProperty__GetIcon() : org.eclipse.emf.ecore.EOperation;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Flow Specification</em>'.
         * @see sysml.portandflows.FlowSpecification
         * @generated
         */
        getFlowSpecification() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for the reference '{@link sysml.portandflows.FlowSpecification#getBase_Interface}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Interface</em>'.
         * @see sysml.portandflows.FlowSpecification#getBase_Interface()
         * @see #getFlowSpecification()
         * @generated
         */
        getFlowSpecification_Base_Interface() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Item Flow</em>'.
         * @see sysml.portandflows.ItemFlow
         * @generated
         */
        getItemFlow() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for the reference '{@link sysml.portandflows.ItemFlow#getBase_InformationFlow}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Information Flow</em>'.
         * @see sysml.portandflows.ItemFlow#getBase_InformationFlow()
         * @see #getItemFlow()
         * @generated
         */
        getItemFlow_Base_InformationFlow() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for the reference '{@link sysml.portandflows.ItemFlow#getItemProperty}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Item Property</em>'.
         * @see sysml.portandflows.ItemFlow#getItemProperty()
         * @see #getItemFlow()
         * @generated
         */
        getItemFlow_ItemProperty() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for enum '{@link sysml.portandflows.FlowDirection}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for enum '<em>Flow Direction</em>'.
         * @see sysml.portandflows.FlowDirection
         * @generated
         */
        getFlowDirection() : org.eclipse.emf.ecore.EEnum;

        /**
         * Returns the factory that creates the instances of the model.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the factory that creates the instances of the model.
         * @generated
         */
        getPortandflowsFactory() : sysml.portandflows.PortandflowsFactory;
    }

    export namespace PortandflowsPackage {

        /**
         * The package name.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        export let eNAME : string = "portandflows";

        /**
         * The package namespace URI.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        export let eNS_URI : string = "http://www.eclipse.org/papyrus/0.7.0/SysML/PortAndFlows";

        /**
         * The package namespace name.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        export let eNS_PREFIX : string = "PortAndFlows";

        /**
         * The singleton instance of the package.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        export let eINSTANCE : PortandflowsPackage = sysml.portandflows.impl.PortandflowsPackageImpl.init();

        /**
         * The meta object id for the '{@link sysml.portandflows.impl.FlowPortImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see sysml.portandflows.impl.FlowPortImpl
         * @see sysml.portandflows.impl.PortandflowsPackageImpl#getFlowPort()
         * @generated
         */
        export let FLOW_PORT : number = 0;

        /**
         * The feature id for the '<em><b>Base Port</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let FLOW_PORT__BASE_PORT : number = 0;

        /**
         * The feature id for the '<em><b>Is Atomic</b></em>' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let FLOW_PORT__IS_ATOMIC : number = 1;

        /**
         * The feature id for the '<em><b>Is Conjugated</b></em>' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let FLOW_PORT__IS_CONJUGATED : number = 2;

        /**
         * The feature id for the '<em><b>Direction</b></em>' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let FLOW_PORT__DIRECTION : number = 3;

        /**
         * The number of structural features of the '<em>Flow Port</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let FLOW_PORT_FEATURE_COUNT : number = 4;

        /**
         * The operation id for the '<em>Get Icon</em>' operation.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let FLOW_PORT___GET_ICON : number = 0;

        /**
         * The number of operations of the '<em>Flow Port</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let FLOW_PORT_OPERATION_COUNT : number = 1;

        /**
         * The meta object id for the '{@link sysml.portandflows.impl.FlowPropertyImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see sysml.portandflows.impl.FlowPropertyImpl
         * @see sysml.portandflows.impl.PortandflowsPackageImpl#getFlowProperty()
         * @generated
         */
        export let FLOW_PROPERTY : number = 1;

        /**
         * The feature id for the '<em><b>Base Property</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let FLOW_PROPERTY__BASE_PROPERTY : number = 0;

        /**
         * The feature id for the '<em><b>Direction</b></em>' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let FLOW_PROPERTY__DIRECTION : number = 1;

        /**
         * The number of structural features of the '<em>Flow Property</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let FLOW_PROPERTY_FEATURE_COUNT : number = 2;

        /**
         * The operation id for the '<em>Get Icon</em>' operation.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let FLOW_PROPERTY___GET_ICON : number = 0;

        /**
         * The number of operations of the '<em>Flow Property</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let FLOW_PROPERTY_OPERATION_COUNT : number = 1;

        /**
         * The meta object id for the '{@link sysml.portandflows.impl.FlowSpecificationImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see sysml.portandflows.impl.FlowSpecificationImpl
         * @see sysml.portandflows.impl.PortandflowsPackageImpl#getFlowSpecification()
         * @generated
         */
        export let FLOW_SPECIFICATION : number = 2;

        /**
         * The feature id for the '<em><b>Base Interface</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let FLOW_SPECIFICATION__BASE_INTERFACE : number = 0;

        /**
         * The number of structural features of the '<em>Flow Specification</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let FLOW_SPECIFICATION_FEATURE_COUNT : number = 1;

        /**
         * The number of operations of the '<em>Flow Specification</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let FLOW_SPECIFICATION_OPERATION_COUNT : number = 0;

        /**
         * The meta object id for the '{@link sysml.portandflows.impl.ItemFlowImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see sysml.portandflows.impl.ItemFlowImpl
         * @see sysml.portandflows.impl.PortandflowsPackageImpl#getItemFlow()
         * @generated
         */
        export let ITEM_FLOW : number = 3;

        /**
         * The feature id for the '<em><b>Base Information Flow</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let ITEM_FLOW__BASE_INFORMATION_FLOW : number = 0;

        /**
         * The feature id for the '<em><b>Item Property</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let ITEM_FLOW__ITEM_PROPERTY : number = 1;

        /**
         * The number of structural features of the '<em>Item Flow</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let ITEM_FLOW_FEATURE_COUNT : number = 2;

        /**
         * The number of operations of the '<em>Item Flow</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let ITEM_FLOW_OPERATION_COUNT : number = 0;

        /**
         * The meta object id for the '{@link sysml.portandflows.FlowDirection}' enum.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see sysml.portandflows.FlowDirection
         * @see sysml.portandflows.impl.PortandflowsPackageImpl#getFlowDirection()
         * @generated
         */
        export let FLOW_DIRECTION : number = 4;
    }


    export namespace PortandflowsPackage {

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
             * The meta object literal for the '{@link sysml.portandflows.impl.FlowPortImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see sysml.portandflows.impl.FlowPortImpl
             * @see sysml.portandflows.impl.PortandflowsPackageImpl#getFlowPort()
             * @generated
             */
            export let FLOW_PORT : org.eclipse.emf.ecore.EClass = sysml.portandflows.PortandflowsPackage.eINSTANCE.getFlowPort();

            /**
             * The meta object literal for the '<em><b>Base Port</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let FLOW_PORT__BASE_PORT : org.eclipse.emf.ecore.EReference = sysml.portandflows.PortandflowsPackage.eINSTANCE.getFlowPort_Base_Port();

            /**
             * The meta object literal for the '<em><b>Is Atomic</b></em>' attribute feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let FLOW_PORT__IS_ATOMIC : org.eclipse.emf.ecore.EAttribute = sysml.portandflows.PortandflowsPackage.eINSTANCE.getFlowPort_IsAtomic();

            /**
             * The meta object literal for the '<em><b>Is Conjugated</b></em>' attribute feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let FLOW_PORT__IS_CONJUGATED : org.eclipse.emf.ecore.EAttribute = sysml.portandflows.PortandflowsPackage.eINSTANCE.getFlowPort_IsConjugated();

            /**
             * The meta object literal for the '<em><b>Direction</b></em>' attribute feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let FLOW_PORT__DIRECTION : org.eclipse.emf.ecore.EAttribute = sysml.portandflows.PortandflowsPackage.eINSTANCE.getFlowPort_Direction();

            /**
             * The meta object literal for the '<em><b>Get Icon</b></em>' operation.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let FLOW_PORT___GET_ICON : org.eclipse.emf.ecore.EOperation = sysml.portandflows.PortandflowsPackage.eINSTANCE.getFlowPort__GetIcon();

            /**
             * The meta object literal for the '{@link sysml.portandflows.impl.FlowPropertyImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see sysml.portandflows.impl.FlowPropertyImpl
             * @see sysml.portandflows.impl.PortandflowsPackageImpl#getFlowProperty()
             * @generated
             */
            export let FLOW_PROPERTY : org.eclipse.emf.ecore.EClass = sysml.portandflows.PortandflowsPackage.eINSTANCE.getFlowProperty();

            /**
             * The meta object literal for the '<em><b>Base Property</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let FLOW_PROPERTY__BASE_PROPERTY : org.eclipse.emf.ecore.EReference = sysml.portandflows.PortandflowsPackage.eINSTANCE.getFlowProperty_Base_Property();

            /**
             * The meta object literal for the '<em><b>Direction</b></em>' attribute feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let FLOW_PROPERTY__DIRECTION : org.eclipse.emf.ecore.EAttribute = sysml.portandflows.PortandflowsPackage.eINSTANCE.getFlowProperty_Direction();

            /**
             * The meta object literal for the '<em><b>Get Icon</b></em>' operation.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let FLOW_PROPERTY___GET_ICON : org.eclipse.emf.ecore.EOperation = sysml.portandflows.PortandflowsPackage.eINSTANCE.getFlowProperty__GetIcon();

            /**
             * The meta object literal for the '{@link sysml.portandflows.impl.FlowSpecificationImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see sysml.portandflows.impl.FlowSpecificationImpl
             * @see sysml.portandflows.impl.PortandflowsPackageImpl#getFlowSpecification()
             * @generated
             */
            export let FLOW_SPECIFICATION : org.eclipse.emf.ecore.EClass = sysml.portandflows.PortandflowsPackage.eINSTANCE.getFlowSpecification();

            /**
             * The meta object literal for the '<em><b>Base Interface</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let FLOW_SPECIFICATION__BASE_INTERFACE : org.eclipse.emf.ecore.EReference = sysml.portandflows.PortandflowsPackage.eINSTANCE.getFlowSpecification_Base_Interface();

            /**
             * The meta object literal for the '{@link sysml.portandflows.impl.ItemFlowImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see sysml.portandflows.impl.ItemFlowImpl
             * @see sysml.portandflows.impl.PortandflowsPackageImpl#getItemFlow()
             * @generated
             */
            export let ITEM_FLOW : org.eclipse.emf.ecore.EClass = sysml.portandflows.PortandflowsPackage.eINSTANCE.getItemFlow();

            /**
             * The meta object literal for the '<em><b>Base Information Flow</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let ITEM_FLOW__BASE_INFORMATION_FLOW : org.eclipse.emf.ecore.EReference = sysml.portandflows.PortandflowsPackage.eINSTANCE.getItemFlow_Base_InformationFlow();

            /**
             * The meta object literal for the '<em><b>Item Property</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let ITEM_FLOW__ITEM_PROPERTY : org.eclipse.emf.ecore.EReference = sysml.portandflows.PortandflowsPackage.eINSTANCE.getItemFlow_ItemProperty();

            /**
             * The meta object literal for the '{@link sysml.portandflows.FlowDirection}' enum.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see sysml.portandflows.FlowDirection
             * @see sysml.portandflows.impl.PortandflowsPackageImpl#getFlowDirection()
             * @generated
             */
            export let FLOW_DIRECTION : org.eclipse.emf.ecore.EEnum = sysml.portandflows.PortandflowsPackage.eINSTANCE.getFlowDirection();
        }

    }

}

