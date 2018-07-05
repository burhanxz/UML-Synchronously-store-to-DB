/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.portandflows.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model <b>Package</b>.
     * <!-- end-user-doc -->
     * @generated
     * @extends org.eclipse.emf.ecore.impl.EPackageImpl
     * @class
     */
    export class PortandflowsPackageImpl extends org.eclipse.emf.ecore.impl.EPackageImpl implements sysml.portandflows.PortandflowsPackage {
        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        /*private*/ flowPortEClass : org.eclipse.emf.ecore.EClass = null;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        /*private*/ flowPropertyEClass : org.eclipse.emf.ecore.EClass = null;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        /*private*/ flowSpecificationEClass : org.eclipse.emf.ecore.EClass = null;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        /*private*/ itemFlowEClass : org.eclipse.emf.ecore.EClass = null;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        /*private*/ flowDirectionEEnum : org.eclipse.emf.ecore.EEnum = null;

        constructor() {
            super(sysml.portandflows.PortandflowsPackage.eNS_URI, sysml.portandflows.PortandflowsFactory.eINSTANCE);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        static isInited : boolean = false;

        /**
         * Creates, registers, and initializes the <b>Package</b> for this model, and for any others upon which it depends.
         * 
         * <p>This method is used to initialize {@link PortandflowsPackage#eINSTANCE} when that field is accessed.
         * Clients should not invoke it directly. Instead, they should simply access that field to obtain the package.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #eNS_URI
         * @see #createPackageContents()
         * @see #initializePackageContents()
         * @generated
         * @return {*}
         */
        public static init() : sysml.portandflows.PortandflowsPackage {
            if(PortandflowsPackageImpl.isInited) return <sysml.portandflows.PortandflowsPackage><any>org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.portandflows.PortandflowsPackage.eNS_URI);
            let thePortandflowsPackage : PortandflowsPackageImpl = <PortandflowsPackageImpl>((org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.get(sysml.portandflows.PortandflowsPackage.eNS_URI) != null && org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.get(sysml.portandflows.PortandflowsPackage.eNS_URI) instanceof <any>sysml.portandflows.impl.PortandflowsPackageImpl)?org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.get(sysml.portandflows.PortandflowsPackage.eNS_URI):new PortandflowsPackageImpl());
            PortandflowsPackageImpl.isInited = true;
            let theSysmlPackage : sysml.impl.SysmlPackageImpl = <sysml.impl.SysmlPackageImpl><any>((org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.SysmlPackage.eNS_URI) != null && org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.SysmlPackage.eNS_URI) instanceof <any>sysml.impl.SysmlPackageImpl)?org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.SysmlPackage.eNS_URI):sysml.SysmlPackage.eINSTANCE);
            let theModelelementsPackage : sysml.modelelements.impl.ModelelementsPackageImpl = <sysml.modelelements.impl.ModelelementsPackageImpl><any>((org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.modelelements.ModelelementsPackage.eNS_URI) != null && org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.modelelements.ModelelementsPackage.eNS_URI) instanceof <any>sysml.modelelements.impl.ModelelementsPackageImpl)?org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.modelelements.ModelelementsPackage.eNS_URI):sysml.modelelements.ModelelementsPackage.eINSTANCE);
            let theBlocksPackage : sysml.blocks.impl.BlocksPackageImpl = <sysml.blocks.impl.BlocksPackageImpl><any>((org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.blocks.BlocksPackage.eNS_URI) != null && org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.blocks.BlocksPackage.eNS_URI) instanceof <any>sysml.blocks.impl.BlocksPackageImpl)?org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.blocks.BlocksPackage.eNS_URI):sysml.blocks.BlocksPackage.eINSTANCE);
            let theConstraintsPackage : sysml.constraints.impl.ConstraintsPackageImpl = <sysml.constraints.impl.ConstraintsPackageImpl><any>((org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.constraints.ConstraintsPackage.eNS_URI) != null && org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.constraints.ConstraintsPackage.eNS_URI) instanceof <any>sysml.constraints.impl.ConstraintsPackageImpl)?org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.constraints.ConstraintsPackage.eNS_URI):sysml.constraints.ConstraintsPackage.eINSTANCE);
            let theActivitiesPackage : sysml.activities.impl.ActivitiesPackageImpl = <sysml.activities.impl.ActivitiesPackageImpl><any>((org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.activities.ActivitiesPackage.eNS_URI) != null && org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.activities.ActivitiesPackage.eNS_URI) instanceof <any>sysml.activities.impl.ActivitiesPackageImpl)?org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.activities.ActivitiesPackage.eNS_URI):sysml.activities.ActivitiesPackage.eINSTANCE);
            let theAllocationsPackage : sysml.allocations.impl.AllocationsPackageImpl = <sysml.allocations.impl.AllocationsPackageImpl><any>((org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.allocations.AllocationsPackage.eNS_URI) != null && org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.allocations.AllocationsPackage.eNS_URI) instanceof <any>sysml.allocations.impl.AllocationsPackageImpl)?org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.allocations.AllocationsPackage.eNS_URI):sysml.allocations.AllocationsPackage.eINSTANCE);
            let theRequirementsPackage : sysml.requirements.impl.RequirementsPackageImpl = <sysml.requirements.impl.RequirementsPackageImpl><any>((org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.requirements.RequirementsPackage.eNS_URI) != null && org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.requirements.RequirementsPackage.eNS_URI) instanceof <any>sysml.requirements.impl.RequirementsPackageImpl)?org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.requirements.RequirementsPackage.eNS_URI):sysml.requirements.RequirementsPackage.eINSTANCE);
            let theInteractionsPackage : sysml.interactions.impl.InteractionsPackageImpl = <sysml.interactions.impl.InteractionsPackageImpl><any>((org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.interactions.InteractionsPackage.eNS_URI) != null && org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.interactions.InteractionsPackage.eNS_URI) instanceof <any>sysml.interactions.impl.InteractionsPackageImpl)?org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.interactions.InteractionsPackage.eNS_URI):sysml.interactions.InteractionsPackage.eINSTANCE);
            let theStatemachinesPackage : sysml.statemachines.impl.StatemachinesPackageImpl = <sysml.statemachines.impl.StatemachinesPackageImpl><any>((org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.statemachines.StatemachinesPackage.eNS_URI) != null && org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.statemachines.StatemachinesPackage.eNS_URI) instanceof <any>sysml.statemachines.impl.StatemachinesPackageImpl)?org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.statemachines.StatemachinesPackage.eNS_URI):sysml.statemachines.StatemachinesPackage.eINSTANCE);
            let theUsecasesPackage : sysml.usecases.impl.UsecasesPackageImpl = <sysml.usecases.impl.UsecasesPackageImpl><any>((org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.usecases.UsecasesPackage.eNS_URI) != null && org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.usecases.UsecasesPackage.eNS_URI) instanceof <any>sysml.usecases.impl.UsecasesPackageImpl)?org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.usecases.UsecasesPackage.eNS_URI):sysml.usecases.UsecasesPackage.eINSTANCE);
            let theUmlPackage : uml.impl.UmlPackageImpl = <uml.impl.UmlPackageImpl><any>((org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(uml.UmlPackage.eNS_URI) != null && org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(uml.UmlPackage.eNS_URI) instanceof <any>uml.impl.UmlPackageImpl)?org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(uml.UmlPackage.eNS_URI):uml.UmlPackage.eINSTANCE);
            let theTypesPackage : types.impl.TypesPackageImpl = <types.impl.TypesPackageImpl><any>((org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(types.TypesPackage.eNS_URI) != null && org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(types.TypesPackage.eNS_URI) instanceof <any>types.impl.TypesPackageImpl)?org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(types.TypesPackage.eNS_URI):types.TypesPackage.eINSTANCE);
            let theStandardPackage : standard.impl.StandardPackageImpl = <standard.impl.StandardPackageImpl><any>((org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(standard.StandardPackage.eNS_URI) != null && org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(standard.StandardPackage.eNS_URI) instanceof <any>standard.impl.StandardPackageImpl)?org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(standard.StandardPackage.eNS_URI):standard.StandardPackage.eINSTANCE);
            let theEcorePackage : org.eclipse.emf.ecore.impl.EcorePackageImpl = <org.eclipse.emf.ecore.impl.EcorePackageImpl><any>((org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(org.eclipse.emf.ecore.EcorePackage.eNS_URI) != null && org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(org.eclipse.emf.ecore.EcorePackage.eNS_URI) instanceof <any>org.eclipse.emf.ecore.impl.EcorePackageImpl)?org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(org.eclipse.emf.ecore.EcorePackage.eNS_URI):org.eclipse.emf.ecore.EcorePackage.eINSTANCE);
            theUmlPackage.loadPackage();
            thePortandflowsPackage.createPackageContents();
            theSysmlPackage.createPackageContents();
            theModelelementsPackage.createPackageContents();
            theBlocksPackage.createPackageContents();
            theConstraintsPackage.createPackageContents();
            theActivitiesPackage.createPackageContents();
            theAllocationsPackage.createPackageContents();
            theRequirementsPackage.createPackageContents();
            theInteractionsPackage.createPackageContents();
            theStatemachinesPackage.createPackageContents();
            theUsecasesPackage.createPackageContents();
            theTypesPackage.createPackageContents();
            theStandardPackage.createPackageContents();
            theEcorePackage.createPackageContents();
            thePortandflowsPackage.initializePackageContents();
            theSysmlPackage.initializePackageContents();
            theModelelementsPackage.initializePackageContents();
            theBlocksPackage.initializePackageContents();
            theConstraintsPackage.initializePackageContents();
            theActivitiesPackage.initializePackageContents();
            theAllocationsPackage.initializePackageContents();
            theRequirementsPackage.initializePackageContents();
            theInteractionsPackage.initializePackageContents();
            theStatemachinesPackage.initializePackageContents();
            theUsecasesPackage.initializePackageContents();
            theTypesPackage.initializePackageContents();
            theStandardPackage.initializePackageContents();
            theEcorePackage.initializePackageContents();
            theUmlPackage.fixPackageContents();
            thePortandflowsPackage.freeze();
            org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.put(sysml.portandflows.PortandflowsPackage.eNS_URI, thePortandflowsPackage);
            return thePortandflowsPackage;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getFlowPort() : org.eclipse.emf.ecore.EClass {
            return this.flowPortEClass;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getFlowPort_Base_Port() : org.eclipse.emf.ecore.EReference {
            return <org.eclipse.emf.ecore.EReference><any>this.flowPortEClass.getEStructuralFeatures().get(0);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getFlowPort_IsAtomic() : org.eclipse.emf.ecore.EAttribute {
            return <org.eclipse.emf.ecore.EAttribute><any>this.flowPortEClass.getEStructuralFeatures().get(1);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getFlowPort_IsConjugated() : org.eclipse.emf.ecore.EAttribute {
            return <org.eclipse.emf.ecore.EAttribute><any>this.flowPortEClass.getEStructuralFeatures().get(2);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getFlowPort_Direction() : org.eclipse.emf.ecore.EAttribute {
            return <org.eclipse.emf.ecore.EAttribute><any>this.flowPortEClass.getEStructuralFeatures().get(3);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getFlowPort__GetIcon() : org.eclipse.emf.ecore.EOperation {
            return this.flowPortEClass.getEOperations().get(0);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getFlowProperty() : org.eclipse.emf.ecore.EClass {
            return this.flowPropertyEClass;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getFlowProperty_Base_Property() : org.eclipse.emf.ecore.EReference {
            return <org.eclipse.emf.ecore.EReference><any>this.flowPropertyEClass.getEStructuralFeatures().get(0);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getFlowProperty_Direction() : org.eclipse.emf.ecore.EAttribute {
            return <org.eclipse.emf.ecore.EAttribute><any>this.flowPropertyEClass.getEStructuralFeatures().get(1);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getFlowProperty__GetIcon() : org.eclipse.emf.ecore.EOperation {
            return this.flowPropertyEClass.getEOperations().get(0);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getFlowSpecification() : org.eclipse.emf.ecore.EClass {
            return this.flowSpecificationEClass;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getFlowSpecification_Base_Interface() : org.eclipse.emf.ecore.EReference {
            return <org.eclipse.emf.ecore.EReference><any>this.flowSpecificationEClass.getEStructuralFeatures().get(0);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getItemFlow() : org.eclipse.emf.ecore.EClass {
            return this.itemFlowEClass;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getItemFlow_Base_InformationFlow() : org.eclipse.emf.ecore.EReference {
            return <org.eclipse.emf.ecore.EReference><any>this.itemFlowEClass.getEStructuralFeatures().get(0);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getItemFlow_ItemProperty() : org.eclipse.emf.ecore.EReference {
            return <org.eclipse.emf.ecore.EReference><any>this.itemFlowEClass.getEStructuralFeatures().get(1);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getFlowDirection() : org.eclipse.emf.ecore.EEnum {
            return this.flowDirectionEEnum;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getPortandflowsFactory() : sysml.portandflows.PortandflowsFactory {
            return <sysml.portandflows.PortandflowsFactory><any>this.getEFactoryInstance();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        /*private*/ isCreated : boolean = false;

        /**
         * Creates the meta-model objects for the package.  This method is
         * guarded to have no affect on any invocation but its first.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        public createPackageContents() {
            if(this.isCreated) return;
            this.isCreated = true;
            this.flowPortEClass = this.createEClass(sysml.portandflows.PortandflowsPackage.FLOW_PORT);
            this.createEReference(this.flowPortEClass, sysml.portandflows.PortandflowsPackage.FLOW_PORT__BASE_PORT);
            this.createEAttribute(this.flowPortEClass, sysml.portandflows.PortandflowsPackage.FLOW_PORT__IS_ATOMIC);
            this.createEAttribute(this.flowPortEClass, sysml.portandflows.PortandflowsPackage.FLOW_PORT__IS_CONJUGATED);
            this.createEAttribute(this.flowPortEClass, sysml.portandflows.PortandflowsPackage.FLOW_PORT__DIRECTION);
            this.createEOperation(this.flowPortEClass, sysml.portandflows.PortandflowsPackage.FLOW_PORT___GET_ICON);
            this.flowPropertyEClass = this.createEClass(sysml.portandflows.PortandflowsPackage.FLOW_PROPERTY);
            this.createEReference(this.flowPropertyEClass, sysml.portandflows.PortandflowsPackage.FLOW_PROPERTY__BASE_PROPERTY);
            this.createEAttribute(this.flowPropertyEClass, sysml.portandflows.PortandflowsPackage.FLOW_PROPERTY__DIRECTION);
            this.createEOperation(this.flowPropertyEClass, sysml.portandflows.PortandflowsPackage.FLOW_PROPERTY___GET_ICON);
            this.flowSpecificationEClass = this.createEClass(sysml.portandflows.PortandflowsPackage.FLOW_SPECIFICATION);
            this.createEReference(this.flowSpecificationEClass, sysml.portandflows.PortandflowsPackage.FLOW_SPECIFICATION__BASE_INTERFACE);
            this.itemFlowEClass = this.createEClass(sysml.portandflows.PortandflowsPackage.ITEM_FLOW);
            this.createEReference(this.itemFlowEClass, sysml.portandflows.PortandflowsPackage.ITEM_FLOW__BASE_INFORMATION_FLOW);
            this.createEReference(this.itemFlowEClass, sysml.portandflows.PortandflowsPackage.ITEM_FLOW__ITEM_PROPERTY);
            this.flowDirectionEEnum = this.createEEnum(sysml.portandflows.PortandflowsPackage.FLOW_DIRECTION);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        /*private*/ isInitialized : boolean = false;

        /**
         * Complete the initialization of the package and its meta-model.  This
         * method is guarded to have no affect on any invocation but its first.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        public initializePackageContents() {
            if(this.isInitialized) return;
            this.isInitialized = true;
            this.setName(sysml.portandflows.PortandflowsPackage.eNAME);
            this.setNsPrefix(sysml.portandflows.PortandflowsPackage.eNS_PREFIX);
            this.setNsURI(sysml.portandflows.PortandflowsPackage.eNS_URI);
            let theUmlPackage : uml.UmlPackage = <uml.UmlPackage><any>org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(uml.UmlPackage.eNS_URI);
            let theTypesPackage : types.TypesPackage = <types.TypesPackage><any>org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(types.TypesPackage.eNS_URI);
            this.initEClass(this.flowPortEClass, "sysml.portandflows.FlowPort", "FlowPort", !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ABSTRACT, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_INTERFACE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
            this.initEReference(this.getFlowPort_Base_Port(), theUmlPackage.getPort(), null, "base_Port", null, 1, 1, "sysml.portandflows.FlowPort", !org.eclipse.emf.ecore.impl.EPackageImpl.IS_TRANSIENT, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_VOLATILE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_CHANGEABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_COMPOSITE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_RESOLVE_PROXIES, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNSETTABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNIQUE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_DERIVED, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ORDERED);
            this.initEAttribute(this.getFlowPort_IsAtomic(), theTypesPackage.getBoolean(), "isAtomic", "false", 1, 1, "sysml.portandflows.FlowPort", org.eclipse.emf.ecore.impl.EPackageImpl.IS_TRANSIENT, org.eclipse.emf.ecore.impl.EPackageImpl.IS_VOLATILE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_CHANGEABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNSETTABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ID, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNIQUE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_DERIVED, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ORDERED);
            this.initEAttribute(this.getFlowPort_IsConjugated(), theTypesPackage.getBoolean(), "isConjugated", null, 0, 1, "sysml.portandflows.FlowPort", !org.eclipse.emf.ecore.impl.EPackageImpl.IS_TRANSIENT, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_VOLATILE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_CHANGEABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNSETTABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ID, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNIQUE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_DERIVED, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ORDERED);
            this.initEAttribute(this.getFlowPort_Direction(), this.getFlowDirection(), "direction", "inout", 1, 1, "sysml.portandflows.FlowPort", !org.eclipse.emf.ecore.impl.EPackageImpl.IS_TRANSIENT, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_VOLATILE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_CHANGEABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNSETTABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ID, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNIQUE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_DERIVED, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ORDERED);
            this.initEOperation(this.getFlowPort__GetIcon(), theUmlPackage.getImage(), "getIcon", 1, 1, org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNIQUE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ORDERED);
            this.initEClass(this.flowPropertyEClass, "sysml.portandflows.FlowProperty", "FlowProperty", !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ABSTRACT, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_INTERFACE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
            this.initEReference(this.getFlowProperty_Base_Property(), theUmlPackage.getProperty(), null, "base_Property", null, 1, 1, "sysml.portandflows.FlowProperty", !org.eclipse.emf.ecore.impl.EPackageImpl.IS_TRANSIENT, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_VOLATILE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_CHANGEABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_COMPOSITE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_RESOLVE_PROXIES, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNSETTABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNIQUE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_DERIVED, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ORDERED);
            this.initEAttribute(this.getFlowProperty_Direction(), this.getFlowDirection(), "direction", "inout", 1, 1, "sysml.portandflows.FlowProperty", !org.eclipse.emf.ecore.impl.EPackageImpl.IS_TRANSIENT, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_VOLATILE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_CHANGEABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNSETTABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ID, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNIQUE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_DERIVED, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ORDERED);
            this.initEOperation(this.getFlowProperty__GetIcon(), theUmlPackage.getImage(), "getIcon", 1, 1, org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNIQUE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ORDERED);
            this.initEClass(this.flowSpecificationEClass, "sysml.portandflows.FlowSpecification", "FlowSpecification", !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ABSTRACT, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_INTERFACE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
            this.initEReference(this.getFlowSpecification_Base_Interface(), theUmlPackage.getInterface(), null, "base_Interface", null, 1, 1, "sysml.portandflows.FlowSpecification", !org.eclipse.emf.ecore.impl.EPackageImpl.IS_TRANSIENT, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_VOLATILE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_CHANGEABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_COMPOSITE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_RESOLVE_PROXIES, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNSETTABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNIQUE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_DERIVED, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ORDERED);
            this.initEClass(this.itemFlowEClass, "sysml.portandflows.ItemFlow", "ItemFlow", !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ABSTRACT, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_INTERFACE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
            this.initEReference(this.getItemFlow_Base_InformationFlow(), theUmlPackage.getInformationFlow(), null, "base_InformationFlow", null, 1, 1, "sysml.portandflows.ItemFlow", !org.eclipse.emf.ecore.impl.EPackageImpl.IS_TRANSIENT, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_VOLATILE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_CHANGEABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_COMPOSITE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_RESOLVE_PROXIES, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNSETTABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNIQUE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_DERIVED, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ORDERED);
            this.initEReference(this.getItemFlow_ItemProperty(), theUmlPackage.getProperty(), null, "itemProperty", null, 0, 1, "sysml.portandflows.ItemFlow", !org.eclipse.emf.ecore.impl.EPackageImpl.IS_TRANSIENT, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_VOLATILE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_CHANGEABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_COMPOSITE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_RESOLVE_PROXIES, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNSETTABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNIQUE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_DERIVED, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ORDERED);
            this.initEEnum(this.flowDirectionEEnum, sysml.portandflows.FlowDirection, "FlowDirection");
            this.addEEnumLiteral(this.flowDirectionEEnum, sysml.portandflows.FlowDirection.IN);
            this.addEEnumLiteral(this.flowDirectionEEnum, sysml.portandflows.FlowDirection.OUT);
            this.addEEnumLiteral(this.flowDirectionEEnum, sysml.portandflows.FlowDirection.INOUT);
        }
    }
    PortandflowsPackageImpl["__class"] = "sysml.portandflows.impl.PortandflowsPackageImpl";
    PortandflowsPackageImpl["__interfaces"] = ["org.eclipse.emf.ecore.EModelElement","sysml.portandflows.PortandflowsPackage","org.eclipse.emf.ecore.ENamedElement","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.ecore.util.BasicExtendedMetaData.EPackageExtendedMetaData.Holder","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject","org.eclipse.emf.ecore.EPackage"];


}

