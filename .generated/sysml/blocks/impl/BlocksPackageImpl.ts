/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.blocks.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model <b>Package</b>.
     * <!-- end-user-doc -->
     * @generated
     * @extends org.eclipse.emf.ecore.impl.EPackageImpl
     * @class
     */
    export class BlocksPackageImpl extends org.eclipse.emf.ecore.impl.EPackageImpl implements sysml.blocks.BlocksPackage {
        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        /*private*/ blockEClass : org.eclipse.emf.ecore.EClass = null;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        /*private*/ distributedPropertyEClass : org.eclipse.emf.ecore.EClass = null;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        /*private*/ dimensionEClass : org.eclipse.emf.ecore.EClass = null;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        /*private*/ unitEClass : org.eclipse.emf.ecore.EClass = null;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        /*private*/ valueTypeEClass : org.eclipse.emf.ecore.EClass = null;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        /*private*/ nestedConnectorEndEClass : org.eclipse.emf.ecore.EClass = null;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        /*private*/ participantPropertyEClass : org.eclipse.emf.ecore.EClass = null;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        /*private*/ connectorPropertyEClass : org.eclipse.emf.ecore.EClass = null;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        /*private*/ bindingConnectorEClass : org.eclipse.emf.ecore.EClass = null;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        /*private*/ propertySpecificTypeEClass : org.eclipse.emf.ecore.EClass = null;

        constructor() {
            super(sysml.blocks.BlocksPackage.eNS_URI, sysml.blocks.BlocksFactory.eINSTANCE);
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
         * <p>This method is used to initialize {@link BlocksPackage#eINSTANCE} when that field is accessed.
         * Clients should not invoke it directly. Instead, they should simply access that field to obtain the package.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #eNS_URI
         * @see #createPackageContents()
         * @see #initializePackageContents()
         * @generated
         * @return {*}
         */
        public static init() : sysml.blocks.BlocksPackage {
            if(BlocksPackageImpl.isInited) return <sysml.blocks.BlocksPackage><any>org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.blocks.BlocksPackage.eNS_URI);
            let theBlocksPackage : BlocksPackageImpl = <BlocksPackageImpl>((org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.get(sysml.blocks.BlocksPackage.eNS_URI) != null && org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.get(sysml.blocks.BlocksPackage.eNS_URI) instanceof <any>sysml.blocks.impl.BlocksPackageImpl)?org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.get(sysml.blocks.BlocksPackage.eNS_URI):new BlocksPackageImpl());
            BlocksPackageImpl.isInited = true;
            let theSysmlPackage : sysml.impl.SysmlPackageImpl = <sysml.impl.SysmlPackageImpl><any>((org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.SysmlPackage.eNS_URI) != null && org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.SysmlPackage.eNS_URI) instanceof <any>sysml.impl.SysmlPackageImpl)?org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.SysmlPackage.eNS_URI):sysml.SysmlPackage.eINSTANCE);
            let theModelelementsPackage : sysml.modelelements.impl.ModelelementsPackageImpl = <sysml.modelelements.impl.ModelelementsPackageImpl><any>((org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.modelelements.ModelelementsPackage.eNS_URI) != null && org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.modelelements.ModelelementsPackage.eNS_URI) instanceof <any>sysml.modelelements.impl.ModelelementsPackageImpl)?org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.modelelements.ModelelementsPackage.eNS_URI):sysml.modelelements.ModelelementsPackage.eINSTANCE);
            let thePortandflowsPackage : sysml.portandflows.impl.PortandflowsPackageImpl = <sysml.portandflows.impl.PortandflowsPackageImpl><any>((org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.portandflows.PortandflowsPackage.eNS_URI) != null && org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.portandflows.PortandflowsPackage.eNS_URI) instanceof <any>sysml.portandflows.impl.PortandflowsPackageImpl)?org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.portandflows.PortandflowsPackage.eNS_URI):sysml.portandflows.PortandflowsPackage.eINSTANCE);
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
            theBlocksPackage.createPackageContents();
            theSysmlPackage.createPackageContents();
            theModelelementsPackage.createPackageContents();
            thePortandflowsPackage.createPackageContents();
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
            theBlocksPackage.initializePackageContents();
            theSysmlPackage.initializePackageContents();
            theModelelementsPackage.initializePackageContents();
            thePortandflowsPackage.initializePackageContents();
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
            theBlocksPackage.freeze();
            org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.put(sysml.blocks.BlocksPackage.eNS_URI, theBlocksPackage);
            return theBlocksPackage;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getBlock() : org.eclipse.emf.ecore.EClass {
            return this.blockEClass;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getBlock_IsEncapsulated() : org.eclipse.emf.ecore.EAttribute {
            return <org.eclipse.emf.ecore.EAttribute><any>this.blockEClass.getEStructuralFeatures().get(0);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getBlock_Base_Class() : org.eclipse.emf.ecore.EReference {
            return <org.eclipse.emf.ecore.EReference><any>this.blockEClass.getEStructuralFeatures().get(1);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getDistributedProperty() : org.eclipse.emf.ecore.EClass {
            return this.distributedPropertyEClass;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getDistributedProperty_Base_Property() : org.eclipse.emf.ecore.EReference {
            return <org.eclipse.emf.ecore.EReference><any>this.distributedPropertyEClass.getEStructuralFeatures().get(0);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getDimension() : org.eclipse.emf.ecore.EClass {
            return this.dimensionEClass;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getDimension_Base_InstanceSpecification() : org.eclipse.emf.ecore.EReference {
            return <org.eclipse.emf.ecore.EReference><any>this.dimensionEClass.getEStructuralFeatures().get(0);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getUnit() : org.eclipse.emf.ecore.EClass {
            return this.unitEClass;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getUnit_Base_InstanceSpecification() : org.eclipse.emf.ecore.EReference {
            return <org.eclipse.emf.ecore.EReference><any>this.unitEClass.getEStructuralFeatures().get(0);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getUnit_Dimension() : org.eclipse.emf.ecore.EReference {
            return <org.eclipse.emf.ecore.EReference><any>this.unitEClass.getEStructuralFeatures().get(1);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getValueType() : org.eclipse.emf.ecore.EClass {
            return this.valueTypeEClass;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getValueType_Base_DataType() : org.eclipse.emf.ecore.EReference {
            return <org.eclipse.emf.ecore.EReference><any>this.valueTypeEClass.getEStructuralFeatures().get(0);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getValueType_Unit() : org.eclipse.emf.ecore.EReference {
            return <org.eclipse.emf.ecore.EReference><any>this.valueTypeEClass.getEStructuralFeatures().get(1);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getValueType_Dimension() : org.eclipse.emf.ecore.EReference {
            return <org.eclipse.emf.ecore.EReference><any>this.valueTypeEClass.getEStructuralFeatures().get(2);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getNestedConnectorEnd() : org.eclipse.emf.ecore.EClass {
            return this.nestedConnectorEndEClass;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getNestedConnectorEnd_PropertyPath() : org.eclipse.emf.ecore.EReference {
            return <org.eclipse.emf.ecore.EReference><any>this.nestedConnectorEndEClass.getEStructuralFeatures().get(0);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getNestedConnectorEnd_Base_ConnectorEnd() : org.eclipse.emf.ecore.EReference {
            return <org.eclipse.emf.ecore.EReference><any>this.nestedConnectorEndEClass.getEStructuralFeatures().get(1);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getParticipantProperty() : org.eclipse.emf.ecore.EClass {
            return this.participantPropertyEClass;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getParticipantProperty_Base_Property() : org.eclipse.emf.ecore.EReference {
            return <org.eclipse.emf.ecore.EReference><any>this.participantPropertyEClass.getEStructuralFeatures().get(0);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getParticipantProperty_End() : org.eclipse.emf.ecore.EReference {
            return <org.eclipse.emf.ecore.EReference><any>this.participantPropertyEClass.getEStructuralFeatures().get(1);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getConnectorProperty() : org.eclipse.emf.ecore.EClass {
            return this.connectorPropertyEClass;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getConnectorProperty_Base_Property() : org.eclipse.emf.ecore.EReference {
            return <org.eclipse.emf.ecore.EReference><any>this.connectorPropertyEClass.getEStructuralFeatures().get(0);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getConnectorProperty_Connector() : org.eclipse.emf.ecore.EReference {
            return <org.eclipse.emf.ecore.EReference><any>this.connectorPropertyEClass.getEStructuralFeatures().get(1);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getBindingConnector() : org.eclipse.emf.ecore.EClass {
            return this.bindingConnectorEClass;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getBindingConnector_Base_Connector() : org.eclipse.emf.ecore.EReference {
            return <org.eclipse.emf.ecore.EReference><any>this.bindingConnectorEClass.getEStructuralFeatures().get(0);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getPropertySpecificType() : org.eclipse.emf.ecore.EClass {
            return this.propertySpecificTypeEClass;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getPropertySpecificType_Base_Classifier() : org.eclipse.emf.ecore.EReference {
            return <org.eclipse.emf.ecore.EReference><any>this.propertySpecificTypeEClass.getEStructuralFeatures().get(0);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getBlocksFactory() : sysml.blocks.BlocksFactory {
            return <sysml.blocks.BlocksFactory><any>this.getEFactoryInstance();
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
            this.blockEClass = this.createEClass(sysml.blocks.BlocksPackage.BLOCK);
            this.createEAttribute(this.blockEClass, sysml.blocks.BlocksPackage.BLOCK__IS_ENCAPSULATED);
            this.createEReference(this.blockEClass, sysml.blocks.BlocksPackage.BLOCK__BASE_CLASS);
            this.distributedPropertyEClass = this.createEClass(sysml.blocks.BlocksPackage.DISTRIBUTED_PROPERTY);
            this.createEReference(this.distributedPropertyEClass, sysml.blocks.BlocksPackage.DISTRIBUTED_PROPERTY__BASE_PROPERTY);
            this.dimensionEClass = this.createEClass(sysml.blocks.BlocksPackage.DIMENSION);
            this.createEReference(this.dimensionEClass, sysml.blocks.BlocksPackage.DIMENSION__BASE_INSTANCE_SPECIFICATION);
            this.unitEClass = this.createEClass(sysml.blocks.BlocksPackage.UNIT);
            this.createEReference(this.unitEClass, sysml.blocks.BlocksPackage.UNIT__BASE_INSTANCE_SPECIFICATION);
            this.createEReference(this.unitEClass, sysml.blocks.BlocksPackage.UNIT__DIMENSION);
            this.valueTypeEClass = this.createEClass(sysml.blocks.BlocksPackage.VALUE_TYPE);
            this.createEReference(this.valueTypeEClass, sysml.blocks.BlocksPackage.VALUE_TYPE__BASE_DATA_TYPE);
            this.createEReference(this.valueTypeEClass, sysml.blocks.BlocksPackage.VALUE_TYPE__UNIT);
            this.createEReference(this.valueTypeEClass, sysml.blocks.BlocksPackage.VALUE_TYPE__DIMENSION);
            this.nestedConnectorEndEClass = this.createEClass(sysml.blocks.BlocksPackage.NESTED_CONNECTOR_END);
            this.createEReference(this.nestedConnectorEndEClass, sysml.blocks.BlocksPackage.NESTED_CONNECTOR_END__PROPERTY_PATH);
            this.createEReference(this.nestedConnectorEndEClass, sysml.blocks.BlocksPackage.NESTED_CONNECTOR_END__BASE_CONNECTOR_END);
            this.participantPropertyEClass = this.createEClass(sysml.blocks.BlocksPackage.PARTICIPANT_PROPERTY);
            this.createEReference(this.participantPropertyEClass, sysml.blocks.BlocksPackage.PARTICIPANT_PROPERTY__BASE_PROPERTY);
            this.createEReference(this.participantPropertyEClass, sysml.blocks.BlocksPackage.PARTICIPANT_PROPERTY__END);
            this.connectorPropertyEClass = this.createEClass(sysml.blocks.BlocksPackage.CONNECTOR_PROPERTY);
            this.createEReference(this.connectorPropertyEClass, sysml.blocks.BlocksPackage.CONNECTOR_PROPERTY__BASE_PROPERTY);
            this.createEReference(this.connectorPropertyEClass, sysml.blocks.BlocksPackage.CONNECTOR_PROPERTY__CONNECTOR);
            this.bindingConnectorEClass = this.createEClass(sysml.blocks.BlocksPackage.BINDING_CONNECTOR);
            this.createEReference(this.bindingConnectorEClass, sysml.blocks.BlocksPackage.BINDING_CONNECTOR__BASE_CONNECTOR);
            this.propertySpecificTypeEClass = this.createEClass(sysml.blocks.BlocksPackage.PROPERTY_SPECIFIC_TYPE);
            this.createEReference(this.propertySpecificTypeEClass, sysml.blocks.BlocksPackage.PROPERTY_SPECIFIC_TYPE__BASE_CLASSIFIER);
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
            this.setName(sysml.blocks.BlocksPackage.eNAME);
            this.setNsPrefix(sysml.blocks.BlocksPackage.eNS_PREFIX);
            this.setNsURI(sysml.blocks.BlocksPackage.eNS_URI);
            let theTypesPackage : types.TypesPackage = <types.TypesPackage><any>org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(types.TypesPackage.eNS_URI);
            let theUmlPackage : uml.UmlPackage = <uml.UmlPackage><any>org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(uml.UmlPackage.eNS_URI);
            this.initEClass(this.blockEClass, "sysml.blocks.Block", "Block", !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ABSTRACT, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_INTERFACE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
            this.initEAttribute(this.getBlock_IsEncapsulated(), theTypesPackage.getBoolean(), "isEncapsulated", null, 0, 1, "sysml.blocks.Block", !org.eclipse.emf.ecore.impl.EPackageImpl.IS_TRANSIENT, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_VOLATILE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_CHANGEABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNSETTABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ID, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNIQUE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_DERIVED, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ORDERED);
            this.initEReference(this.getBlock_Base_Class(), theUmlPackage.getClass_(), null, "base_Class", null, 1, 1, "sysml.blocks.Block", !org.eclipse.emf.ecore.impl.EPackageImpl.IS_TRANSIENT, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_VOLATILE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_CHANGEABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_COMPOSITE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_RESOLVE_PROXIES, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNSETTABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNIQUE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_DERIVED, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ORDERED);
            this.initEClass(this.distributedPropertyEClass, "sysml.blocks.DistributedProperty", "DistributedProperty", !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ABSTRACT, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_INTERFACE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
            this.initEReference(this.getDistributedProperty_Base_Property(), theUmlPackage.getProperty(), null, "base_Property", null, 1, 1, "sysml.blocks.DistributedProperty", !org.eclipse.emf.ecore.impl.EPackageImpl.IS_TRANSIENT, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_VOLATILE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_CHANGEABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_COMPOSITE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_RESOLVE_PROXIES, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNSETTABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNIQUE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_DERIVED, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ORDERED);
            this.initEClass(this.dimensionEClass, "sysml.blocks.Dimension", "Dimension", !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ABSTRACT, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_INTERFACE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
            this.initEReference(this.getDimension_Base_InstanceSpecification(), theUmlPackage.getInstanceSpecification(), null, "base_InstanceSpecification", null, 1, 1, "sysml.blocks.Dimension", !org.eclipse.emf.ecore.impl.EPackageImpl.IS_TRANSIENT, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_VOLATILE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_CHANGEABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_COMPOSITE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_RESOLVE_PROXIES, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNSETTABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNIQUE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_DERIVED, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ORDERED);
            this.initEClass(this.unitEClass, "sysml.blocks.Unit", "Unit", !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ABSTRACT, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_INTERFACE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
            this.initEReference(this.getUnit_Base_InstanceSpecification(), theUmlPackage.getInstanceSpecification(), null, "base_InstanceSpecification", null, 1, 1, "sysml.blocks.Unit", !org.eclipse.emf.ecore.impl.EPackageImpl.IS_TRANSIENT, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_VOLATILE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_CHANGEABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_COMPOSITE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_RESOLVE_PROXIES, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNSETTABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNIQUE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_DERIVED, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ORDERED);
            this.initEReference(this.getUnit_Dimension(), this.getDimension(), null, "dimension", null, 0, 1, "sysml.blocks.Unit", !org.eclipse.emf.ecore.impl.EPackageImpl.IS_TRANSIENT, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_VOLATILE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_CHANGEABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_COMPOSITE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_RESOLVE_PROXIES, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNSETTABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNIQUE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_DERIVED, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ORDERED);
            this.initEClass(this.valueTypeEClass, "sysml.blocks.ValueType", "ValueType", !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ABSTRACT, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_INTERFACE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
            this.initEReference(this.getValueType_Base_DataType(), theUmlPackage.getDataType(), null, "base_DataType", null, 1, 1, "sysml.blocks.ValueType", !org.eclipse.emf.ecore.impl.EPackageImpl.IS_TRANSIENT, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_VOLATILE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_CHANGEABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_COMPOSITE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_RESOLVE_PROXIES, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNSETTABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNIQUE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_DERIVED, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ORDERED);
            this.initEReference(this.getValueType_Unit(), this.getUnit(), null, "unit", null, 0, 1, "sysml.blocks.ValueType", !org.eclipse.emf.ecore.impl.EPackageImpl.IS_TRANSIENT, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_VOLATILE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_CHANGEABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_COMPOSITE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_RESOLVE_PROXIES, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNSETTABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNIQUE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_DERIVED, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ORDERED);
            this.initEReference(this.getValueType_Dimension(), this.getDimension(), null, "dimension", null, 0, 1, "sysml.blocks.ValueType", !org.eclipse.emf.ecore.impl.EPackageImpl.IS_TRANSIENT, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_VOLATILE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_CHANGEABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_COMPOSITE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_RESOLVE_PROXIES, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNSETTABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNIQUE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_DERIVED, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ORDERED);
            this.initEClass(this.nestedConnectorEndEClass, "sysml.blocks.NestedConnectorEnd", "NestedConnectorEnd", !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ABSTRACT, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_INTERFACE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
            this.initEReference(this.getNestedConnectorEnd_PropertyPath(), theUmlPackage.getProperty(), null, "propertyPath", null, 1, -1, "sysml.blocks.NestedConnectorEnd", !org.eclipse.emf.ecore.impl.EPackageImpl.IS_TRANSIENT, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_VOLATILE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_CHANGEABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_COMPOSITE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_RESOLVE_PROXIES, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNSETTABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNIQUE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_DERIVED, org.eclipse.emf.ecore.impl.EPackageImpl.IS_ORDERED);
            this.initEReference(this.getNestedConnectorEnd_Base_ConnectorEnd(), theUmlPackage.getConnectorEnd(), null, "base_ConnectorEnd", null, 1, 1, "sysml.blocks.NestedConnectorEnd", !org.eclipse.emf.ecore.impl.EPackageImpl.IS_TRANSIENT, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_VOLATILE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_CHANGEABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_COMPOSITE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_RESOLVE_PROXIES, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNSETTABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNIQUE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_DERIVED, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ORDERED);
            this.initEClass(this.participantPropertyEClass, "sysml.blocks.ParticipantProperty", "ParticipantProperty", !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ABSTRACT, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_INTERFACE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
            this.initEReference(this.getParticipantProperty_Base_Property(), theUmlPackage.getProperty(), null, "base_Property", null, 1, 1, "sysml.blocks.ParticipantProperty", !org.eclipse.emf.ecore.impl.EPackageImpl.IS_TRANSIENT, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_VOLATILE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_CHANGEABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_COMPOSITE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_RESOLVE_PROXIES, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNSETTABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNIQUE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_DERIVED, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ORDERED);
            this.initEReference(this.getParticipantProperty_End(), theUmlPackage.getProperty(), null, "end", null, 1, 1, "sysml.blocks.ParticipantProperty", !org.eclipse.emf.ecore.impl.EPackageImpl.IS_TRANSIENT, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_VOLATILE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_CHANGEABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_COMPOSITE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_RESOLVE_PROXIES, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNSETTABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNIQUE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_DERIVED, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ORDERED);
            this.initEClass(this.connectorPropertyEClass, "sysml.blocks.ConnectorProperty", "ConnectorProperty", !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ABSTRACT, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_INTERFACE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
            this.initEReference(this.getConnectorProperty_Base_Property(), theUmlPackage.getProperty(), null, "base_Property", null, 1, 1, "sysml.blocks.ConnectorProperty", !org.eclipse.emf.ecore.impl.EPackageImpl.IS_TRANSIENT, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_VOLATILE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_CHANGEABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_COMPOSITE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_RESOLVE_PROXIES, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNSETTABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNIQUE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_DERIVED, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ORDERED);
            this.initEReference(this.getConnectorProperty_Connector(), theUmlPackage.getConnector(), null, "connector", null, 1, 1, "sysml.blocks.ConnectorProperty", !org.eclipse.emf.ecore.impl.EPackageImpl.IS_TRANSIENT, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_VOLATILE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_CHANGEABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_COMPOSITE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_RESOLVE_PROXIES, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNSETTABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNIQUE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_DERIVED, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ORDERED);
            this.initEClass(this.bindingConnectorEClass, "sysml.blocks.BindingConnector", "BindingConnector", !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ABSTRACT, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_INTERFACE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
            this.initEReference(this.getBindingConnector_Base_Connector(), theUmlPackage.getConnector(), null, "base_Connector", null, 1, 1, "sysml.blocks.BindingConnector", !org.eclipse.emf.ecore.impl.EPackageImpl.IS_TRANSIENT, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_VOLATILE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_CHANGEABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_COMPOSITE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_RESOLVE_PROXIES, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNSETTABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNIQUE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_DERIVED, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ORDERED);
            this.initEClass(this.propertySpecificTypeEClass, "sysml.blocks.PropertySpecificType", "PropertySpecificType", !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ABSTRACT, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_INTERFACE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
            this.initEReference(this.getPropertySpecificType_Base_Classifier(), theUmlPackage.getClassifier(), null, "base_Classifier", null, 1, 1, "sysml.blocks.PropertySpecificType", !org.eclipse.emf.ecore.impl.EPackageImpl.IS_TRANSIENT, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_VOLATILE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_CHANGEABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_COMPOSITE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_RESOLVE_PROXIES, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNSETTABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNIQUE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_DERIVED, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ORDERED);
        }
    }
    BlocksPackageImpl["__class"] = "sysml.blocks.impl.BlocksPackageImpl";
    BlocksPackageImpl["__interfaces"] = ["sysml.blocks.BlocksPackage","org.eclipse.emf.ecore.EModelElement","org.eclipse.emf.ecore.ENamedElement","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.ecore.util.BasicExtendedMetaData.EPackageExtendedMetaData.Holder","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject","org.eclipse.emf.ecore.EPackage"];


}

