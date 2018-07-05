/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.allocations.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model <b>Package</b>.
     * <!-- end-user-doc -->
     * @generated
     * @extends org.eclipse.emf.ecore.impl.EPackageImpl
     * @class
     */
    export class AllocationsPackageImpl extends org.eclipse.emf.ecore.impl.EPackageImpl implements sysml.allocations.AllocationsPackage {
        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        /*private*/ allocateEClass : org.eclipse.emf.ecore.EClass = null;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        /*private*/ allocatedEClass : org.eclipse.emf.ecore.EClass = null;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        /*private*/ allocateActivityPartitionEClass : org.eclipse.emf.ecore.EClass = null;

        constructor() {
            super(sysml.allocations.AllocationsPackage.eNS_URI, sysml.allocations.AllocationsFactory.eINSTANCE);
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
         * <p>This method is used to initialize {@link AllocationsPackage#eINSTANCE} when that field is accessed.
         * Clients should not invoke it directly. Instead, they should simply access that field to obtain the package.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #eNS_URI
         * @see #createPackageContents()
         * @see #initializePackageContents()
         * @generated
         * @return {*}
         */
        public static init() : sysml.allocations.AllocationsPackage {
            if(AllocationsPackageImpl.isInited) return <sysml.allocations.AllocationsPackage><any>org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.allocations.AllocationsPackage.eNS_URI);
            let theAllocationsPackage : AllocationsPackageImpl = <AllocationsPackageImpl>((org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.get(sysml.allocations.AllocationsPackage.eNS_URI) != null && org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.get(sysml.allocations.AllocationsPackage.eNS_URI) instanceof <any>sysml.allocations.impl.AllocationsPackageImpl)?org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.get(sysml.allocations.AllocationsPackage.eNS_URI):new AllocationsPackageImpl());
            AllocationsPackageImpl.isInited = true;
            let theSysmlPackage : sysml.impl.SysmlPackageImpl = <sysml.impl.SysmlPackageImpl><any>((org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.SysmlPackage.eNS_URI) != null && org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.SysmlPackage.eNS_URI) instanceof <any>sysml.impl.SysmlPackageImpl)?org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.SysmlPackage.eNS_URI):sysml.SysmlPackage.eINSTANCE);
            let theModelelementsPackage : sysml.modelelements.impl.ModelelementsPackageImpl = <sysml.modelelements.impl.ModelelementsPackageImpl><any>((org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.modelelements.ModelelementsPackage.eNS_URI) != null && org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.modelelements.ModelelementsPackage.eNS_URI) instanceof <any>sysml.modelelements.impl.ModelelementsPackageImpl)?org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.modelelements.ModelelementsPackage.eNS_URI):sysml.modelelements.ModelelementsPackage.eINSTANCE);
            let theBlocksPackage : sysml.blocks.impl.BlocksPackageImpl = <sysml.blocks.impl.BlocksPackageImpl><any>((org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.blocks.BlocksPackage.eNS_URI) != null && org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.blocks.BlocksPackage.eNS_URI) instanceof <any>sysml.blocks.impl.BlocksPackageImpl)?org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.blocks.BlocksPackage.eNS_URI):sysml.blocks.BlocksPackage.eINSTANCE);
            let thePortandflowsPackage : sysml.portandflows.impl.PortandflowsPackageImpl = <sysml.portandflows.impl.PortandflowsPackageImpl><any>((org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.portandflows.PortandflowsPackage.eNS_URI) != null && org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.portandflows.PortandflowsPackage.eNS_URI) instanceof <any>sysml.portandflows.impl.PortandflowsPackageImpl)?org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.portandflows.PortandflowsPackage.eNS_URI):sysml.portandflows.PortandflowsPackage.eINSTANCE);
            let theConstraintsPackage : sysml.constraints.impl.ConstraintsPackageImpl = <sysml.constraints.impl.ConstraintsPackageImpl><any>((org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.constraints.ConstraintsPackage.eNS_URI) != null && org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.constraints.ConstraintsPackage.eNS_URI) instanceof <any>sysml.constraints.impl.ConstraintsPackageImpl)?org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.constraints.ConstraintsPackage.eNS_URI):sysml.constraints.ConstraintsPackage.eINSTANCE);
            let theActivitiesPackage : sysml.activities.impl.ActivitiesPackageImpl = <sysml.activities.impl.ActivitiesPackageImpl><any>((org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.activities.ActivitiesPackage.eNS_URI) != null && org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.activities.ActivitiesPackage.eNS_URI) instanceof <any>sysml.activities.impl.ActivitiesPackageImpl)?org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.activities.ActivitiesPackage.eNS_URI):sysml.activities.ActivitiesPackage.eINSTANCE);
            let theRequirementsPackage : sysml.requirements.impl.RequirementsPackageImpl = <sysml.requirements.impl.RequirementsPackageImpl><any>((org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.requirements.RequirementsPackage.eNS_URI) != null && org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.requirements.RequirementsPackage.eNS_URI) instanceof <any>sysml.requirements.impl.RequirementsPackageImpl)?org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.requirements.RequirementsPackage.eNS_URI):sysml.requirements.RequirementsPackage.eINSTANCE);
            let theInteractionsPackage : sysml.interactions.impl.InteractionsPackageImpl = <sysml.interactions.impl.InteractionsPackageImpl><any>((org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.interactions.InteractionsPackage.eNS_URI) != null && org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.interactions.InteractionsPackage.eNS_URI) instanceof <any>sysml.interactions.impl.InteractionsPackageImpl)?org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.interactions.InteractionsPackage.eNS_URI):sysml.interactions.InteractionsPackage.eINSTANCE);
            let theStatemachinesPackage : sysml.statemachines.impl.StatemachinesPackageImpl = <sysml.statemachines.impl.StatemachinesPackageImpl><any>((org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.statemachines.StatemachinesPackage.eNS_URI) != null && org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.statemachines.StatemachinesPackage.eNS_URI) instanceof <any>sysml.statemachines.impl.StatemachinesPackageImpl)?org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.statemachines.StatemachinesPackage.eNS_URI):sysml.statemachines.StatemachinesPackage.eINSTANCE);
            let theUsecasesPackage : sysml.usecases.impl.UsecasesPackageImpl = <sysml.usecases.impl.UsecasesPackageImpl><any>((org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.usecases.UsecasesPackage.eNS_URI) != null && org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.usecases.UsecasesPackage.eNS_URI) instanceof <any>sysml.usecases.impl.UsecasesPackageImpl)?org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.usecases.UsecasesPackage.eNS_URI):sysml.usecases.UsecasesPackage.eINSTANCE);
            let theUmlPackage : uml.impl.UmlPackageImpl = <uml.impl.UmlPackageImpl><any>((org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(uml.UmlPackage.eNS_URI) != null && org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(uml.UmlPackage.eNS_URI) instanceof <any>uml.impl.UmlPackageImpl)?org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(uml.UmlPackage.eNS_URI):uml.UmlPackage.eINSTANCE);
            let theTypesPackage : types.impl.TypesPackageImpl = <types.impl.TypesPackageImpl><any>((org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(types.TypesPackage.eNS_URI) != null && org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(types.TypesPackage.eNS_URI) instanceof <any>types.impl.TypesPackageImpl)?org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(types.TypesPackage.eNS_URI):types.TypesPackage.eINSTANCE);
            let theStandardPackage : standard.impl.StandardPackageImpl = <standard.impl.StandardPackageImpl><any>((org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(standard.StandardPackage.eNS_URI) != null && org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(standard.StandardPackage.eNS_URI) instanceof <any>standard.impl.StandardPackageImpl)?org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(standard.StandardPackage.eNS_URI):standard.StandardPackage.eINSTANCE);
            let theEcorePackage : org.eclipse.emf.ecore.impl.EcorePackageImpl = <org.eclipse.emf.ecore.impl.EcorePackageImpl><any>((org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(org.eclipse.emf.ecore.EcorePackage.eNS_URI) != null && org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(org.eclipse.emf.ecore.EcorePackage.eNS_URI) instanceof <any>org.eclipse.emf.ecore.impl.EcorePackageImpl)?org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(org.eclipse.emf.ecore.EcorePackage.eNS_URI):org.eclipse.emf.ecore.EcorePackage.eINSTANCE);
            theUmlPackage.loadPackage();
            theAllocationsPackage.createPackageContents();
            theSysmlPackage.createPackageContents();
            theModelelementsPackage.createPackageContents();
            theBlocksPackage.createPackageContents();
            thePortandflowsPackage.createPackageContents();
            theConstraintsPackage.createPackageContents();
            theActivitiesPackage.createPackageContents();
            theRequirementsPackage.createPackageContents();
            theInteractionsPackage.createPackageContents();
            theStatemachinesPackage.createPackageContents();
            theUsecasesPackage.createPackageContents();
            theTypesPackage.createPackageContents();
            theStandardPackage.createPackageContents();
            theEcorePackage.createPackageContents();
            theAllocationsPackage.initializePackageContents();
            theSysmlPackage.initializePackageContents();
            theModelelementsPackage.initializePackageContents();
            theBlocksPackage.initializePackageContents();
            thePortandflowsPackage.initializePackageContents();
            theConstraintsPackage.initializePackageContents();
            theActivitiesPackage.initializePackageContents();
            theRequirementsPackage.initializePackageContents();
            theInteractionsPackage.initializePackageContents();
            theStatemachinesPackage.initializePackageContents();
            theUsecasesPackage.initializePackageContents();
            theTypesPackage.initializePackageContents();
            theStandardPackage.initializePackageContents();
            theEcorePackage.initializePackageContents();
            theUmlPackage.fixPackageContents();
            theAllocationsPackage.freeze();
            org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.put(sysml.allocations.AllocationsPackage.eNS_URI, theAllocationsPackage);
            return theAllocationsPackage;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getAllocate() : org.eclipse.emf.ecore.EClass {
            return this.allocateEClass;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getAllocate_Base_Abstraction() : org.eclipse.emf.ecore.EReference {
            return <org.eclipse.emf.ecore.EReference><any>this.allocateEClass.getEStructuralFeatures().get(0);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getAllocated() : org.eclipse.emf.ecore.EClass {
            return this.allocatedEClass;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getAllocated_Base_NamedElement() : org.eclipse.emf.ecore.EReference {
            return <org.eclipse.emf.ecore.EReference><any>this.allocatedEClass.getEStructuralFeatures().get(0);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getAllocated_AllocatedFrom() : org.eclipse.emf.ecore.EReference {
            return <org.eclipse.emf.ecore.EReference><any>this.allocatedEClass.getEStructuralFeatures().get(1);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getAllocated_AllocatedTo() : org.eclipse.emf.ecore.EReference {
            return <org.eclipse.emf.ecore.EReference><any>this.allocatedEClass.getEStructuralFeatures().get(2);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getAllocateActivityPartition() : org.eclipse.emf.ecore.EClass {
            return this.allocateActivityPartitionEClass;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getAllocateActivityPartition_Base_ActivityPartition() : org.eclipse.emf.ecore.EReference {
            return <org.eclipse.emf.ecore.EReference><any>this.allocateActivityPartitionEClass.getEStructuralFeatures().get(0);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getAllocationsFactory() : sysml.allocations.AllocationsFactory {
            return <sysml.allocations.AllocationsFactory><any>this.getEFactoryInstance();
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
            this.allocateEClass = this.createEClass(sysml.allocations.AllocationsPackage.ALLOCATE);
            this.createEReference(this.allocateEClass, sysml.allocations.AllocationsPackage.ALLOCATE__BASE_ABSTRACTION);
            this.allocatedEClass = this.createEClass(sysml.allocations.AllocationsPackage.ALLOCATED);
            this.createEReference(this.allocatedEClass, sysml.allocations.AllocationsPackage.ALLOCATED__BASE_NAMED_ELEMENT);
            this.createEReference(this.allocatedEClass, sysml.allocations.AllocationsPackage.ALLOCATED__ALLOCATED_FROM);
            this.createEReference(this.allocatedEClass, sysml.allocations.AllocationsPackage.ALLOCATED__ALLOCATED_TO);
            this.allocateActivityPartitionEClass = this.createEClass(sysml.allocations.AllocationsPackage.ALLOCATE_ACTIVITY_PARTITION);
            this.createEReference(this.allocateActivityPartitionEClass, sysml.allocations.AllocationsPackage.ALLOCATE_ACTIVITY_PARTITION__BASE_ACTIVITY_PARTITION);
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
            this.setName(sysml.allocations.AllocationsPackage.eNAME);
            this.setNsPrefix(sysml.allocations.AllocationsPackage.eNS_PREFIX);
            this.setNsURI(sysml.allocations.AllocationsPackage.eNS_URI);
            let theUmlPackage : uml.UmlPackage = <uml.UmlPackage><any>org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(uml.UmlPackage.eNS_URI);
            this.initEClass(this.allocateEClass, "sysml.allocations.Allocate", "Allocate", !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ABSTRACT, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_INTERFACE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
            this.initEReference(this.getAllocate_Base_Abstraction(), theUmlPackage.getAbstraction(), null, "base_Abstraction", null, 1, 1, "sysml.allocations.Allocate", !org.eclipse.emf.ecore.impl.EPackageImpl.IS_TRANSIENT, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_VOLATILE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_CHANGEABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_COMPOSITE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_RESOLVE_PROXIES, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNSETTABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNIQUE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_DERIVED, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ORDERED);
            this.initEClass(this.allocatedEClass, "sysml.allocations.Allocated", "Allocated", !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ABSTRACT, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_INTERFACE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
            this.initEReference(this.getAllocated_Base_NamedElement(), theUmlPackage.getNamedElement(), null, "base_NamedElement", null, 1, 1, "sysml.allocations.Allocated", !org.eclipse.emf.ecore.impl.EPackageImpl.IS_TRANSIENT, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_VOLATILE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_CHANGEABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_COMPOSITE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_RESOLVE_PROXIES, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNSETTABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNIQUE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_DERIVED, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ORDERED);
            this.initEReference(this.getAllocated_AllocatedFrom(), theUmlPackage.getNamedElement(), null, "allocatedFrom", null, 0, -1, "sysml.allocations.Allocated", org.eclipse.emf.ecore.impl.EPackageImpl.IS_TRANSIENT, org.eclipse.emf.ecore.impl.EPackageImpl.IS_VOLATILE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_CHANGEABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_COMPOSITE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_RESOLVE_PROXIES, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNSETTABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNIQUE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_DERIVED, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ORDERED);
            this.initEReference(this.getAllocated_AllocatedTo(), theUmlPackage.getNamedElement(), null, "allocatedTo", null, 0, -1, "sysml.allocations.Allocated", org.eclipse.emf.ecore.impl.EPackageImpl.IS_TRANSIENT, org.eclipse.emf.ecore.impl.EPackageImpl.IS_VOLATILE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_CHANGEABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_COMPOSITE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_RESOLVE_PROXIES, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNSETTABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNIQUE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_DERIVED, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ORDERED);
            this.initEClass(this.allocateActivityPartitionEClass, "sysml.allocations.AllocateActivityPartition", "AllocateActivityPartition", !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ABSTRACT, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_INTERFACE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
            this.initEReference(this.getAllocateActivityPartition_Base_ActivityPartition(), theUmlPackage.getActivityPartition(), null, "base_ActivityPartition", null, 1, 1, "sysml.allocations.AllocateActivityPartition", !org.eclipse.emf.ecore.impl.EPackageImpl.IS_TRANSIENT, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_VOLATILE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_CHANGEABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_COMPOSITE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_RESOLVE_PROXIES, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNSETTABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNIQUE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_DERIVED, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ORDERED);
        }
    }
    AllocationsPackageImpl["__class"] = "sysml.allocations.impl.AllocationsPackageImpl";
    AllocationsPackageImpl["__interfaces"] = ["sysml.allocations.AllocationsPackage","org.eclipse.emf.ecore.EModelElement","org.eclipse.emf.ecore.ENamedElement","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.ecore.util.BasicExtendedMetaData.EPackageExtendedMetaData.Holder","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject","org.eclipse.emf.ecore.EPackage"];


}

