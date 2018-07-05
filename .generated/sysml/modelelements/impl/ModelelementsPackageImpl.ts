/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.modelelements.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model <b>Package</b>.
     * <!-- end-user-doc -->
     * @generated
     * @extends org.eclipse.emf.ecore.impl.EPackageImpl
     * @class
     */
    export class ModelelementsPackageImpl extends org.eclipse.emf.ecore.impl.EPackageImpl implements sysml.modelelements.ModelelementsPackage {
        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        /*private*/ conformEClass : org.eclipse.emf.ecore.EClass = null;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        /*private*/ viewEClass : org.eclipse.emf.ecore.EClass = null;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        /*private*/ viewPointEClass : org.eclipse.emf.ecore.EClass = null;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        /*private*/ rationaleEClass : org.eclipse.emf.ecore.EClass = null;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        /*private*/ problemEClass : org.eclipse.emf.ecore.EClass = null;

        constructor() {
            super(sysml.modelelements.ModelelementsPackage.eNS_URI, sysml.modelelements.ModelelementsFactory.eINSTANCE);
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
         * <p>This method is used to initialize {@link ModelelementsPackage#eINSTANCE} when that field is accessed.
         * Clients should not invoke it directly. Instead, they should simply access that field to obtain the package.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #eNS_URI
         * @see #createPackageContents()
         * @see #initializePackageContents()
         * @generated
         * @return {*}
         */
        public static init() : sysml.modelelements.ModelelementsPackage {
            if(ModelelementsPackageImpl.isInited) return <sysml.modelelements.ModelelementsPackage><any>org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.modelelements.ModelelementsPackage.eNS_URI);
            let theModelelementsPackage : ModelelementsPackageImpl = <ModelelementsPackageImpl>((org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.get(sysml.modelelements.ModelelementsPackage.eNS_URI) != null && org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.get(sysml.modelelements.ModelelementsPackage.eNS_URI) instanceof <any>sysml.modelelements.impl.ModelelementsPackageImpl)?org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.get(sysml.modelelements.ModelelementsPackage.eNS_URI):new ModelelementsPackageImpl());
            ModelelementsPackageImpl.isInited = true;
            let theSysmlPackage : sysml.impl.SysmlPackageImpl = <sysml.impl.SysmlPackageImpl><any>((org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.SysmlPackage.eNS_URI) != null && org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.SysmlPackage.eNS_URI) instanceof <any>sysml.impl.SysmlPackageImpl)?org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.SysmlPackage.eNS_URI):sysml.SysmlPackage.eINSTANCE);
            let theBlocksPackage : sysml.blocks.impl.BlocksPackageImpl = <sysml.blocks.impl.BlocksPackageImpl><any>((org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.blocks.BlocksPackage.eNS_URI) != null && org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.blocks.BlocksPackage.eNS_URI) instanceof <any>sysml.blocks.impl.BlocksPackageImpl)?org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.blocks.BlocksPackage.eNS_URI):sysml.blocks.BlocksPackage.eINSTANCE);
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
            theModelelementsPackage.createPackageContents();
            theSysmlPackage.createPackageContents();
            theBlocksPackage.createPackageContents();
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
            theModelelementsPackage.initializePackageContents();
            theSysmlPackage.initializePackageContents();
            theBlocksPackage.initializePackageContents();
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
            theModelelementsPackage.freeze();
            org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.put(sysml.modelelements.ModelelementsPackage.eNS_URI, theModelelementsPackage);
            return theModelelementsPackage;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getConform() : org.eclipse.emf.ecore.EClass {
            return this.conformEClass;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getConform_Base_Dependency() : org.eclipse.emf.ecore.EReference {
            return <org.eclipse.emf.ecore.EReference><any>this.conformEClass.getEStructuralFeatures().get(0);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getView() : org.eclipse.emf.ecore.EClass {
            return this.viewEClass;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getView_ViewPoint() : org.eclipse.emf.ecore.EReference {
            return <org.eclipse.emf.ecore.EReference><any>this.viewEClass.getEStructuralFeatures().get(0);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getView_Base_Package() : org.eclipse.emf.ecore.EReference {
            return <org.eclipse.emf.ecore.EReference><any>this.viewEClass.getEStructuralFeatures().get(1);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getViewPoint() : org.eclipse.emf.ecore.EClass {
            return this.viewPointEClass;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getViewPoint_Base_Class() : org.eclipse.emf.ecore.EReference {
            return <org.eclipse.emf.ecore.EReference><any>this.viewPointEClass.getEStructuralFeatures().get(0);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getViewPoint_StakeHolders() : org.eclipse.emf.ecore.EAttribute {
            return <org.eclipse.emf.ecore.EAttribute><any>this.viewPointEClass.getEStructuralFeatures().get(1);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getViewPoint_Purpose() : org.eclipse.emf.ecore.EAttribute {
            return <org.eclipse.emf.ecore.EAttribute><any>this.viewPointEClass.getEStructuralFeatures().get(2);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getViewPoint_Concerns() : org.eclipse.emf.ecore.EAttribute {
            return <org.eclipse.emf.ecore.EAttribute><any>this.viewPointEClass.getEStructuralFeatures().get(3);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getViewPoint_Languages() : org.eclipse.emf.ecore.EAttribute {
            return <org.eclipse.emf.ecore.EAttribute><any>this.viewPointEClass.getEStructuralFeatures().get(4);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getViewPoint_Methods() : org.eclipse.emf.ecore.EAttribute {
            return <org.eclipse.emf.ecore.EAttribute><any>this.viewPointEClass.getEStructuralFeatures().get(5);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getRationale() : org.eclipse.emf.ecore.EClass {
            return this.rationaleEClass;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getRationale_Base_Comment() : org.eclipse.emf.ecore.EReference {
            return <org.eclipse.emf.ecore.EReference><any>this.rationaleEClass.getEStructuralFeatures().get(0);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getProblem() : org.eclipse.emf.ecore.EClass {
            return this.problemEClass;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getProblem_Base_Comment() : org.eclipse.emf.ecore.EReference {
            return <org.eclipse.emf.ecore.EReference><any>this.problemEClass.getEStructuralFeatures().get(0);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getModelelementsFactory() : sysml.modelelements.ModelelementsFactory {
            return <sysml.modelelements.ModelelementsFactory><any>this.getEFactoryInstance();
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
            this.conformEClass = this.createEClass(sysml.modelelements.ModelelementsPackage.CONFORM);
            this.createEReference(this.conformEClass, sysml.modelelements.ModelelementsPackage.CONFORM__BASE_DEPENDENCY);
            this.viewEClass = this.createEClass(sysml.modelelements.ModelelementsPackage.VIEW);
            this.createEReference(this.viewEClass, sysml.modelelements.ModelelementsPackage.VIEW__VIEW_POINT);
            this.createEReference(this.viewEClass, sysml.modelelements.ModelelementsPackage.VIEW__BASE_PACKAGE);
            this.viewPointEClass = this.createEClass(sysml.modelelements.ModelelementsPackage.VIEW_POINT);
            this.createEReference(this.viewPointEClass, sysml.modelelements.ModelelementsPackage.VIEW_POINT__BASE_CLASS);
            this.createEAttribute(this.viewPointEClass, sysml.modelelements.ModelelementsPackage.VIEW_POINT__STAKE_HOLDERS);
            this.createEAttribute(this.viewPointEClass, sysml.modelelements.ModelelementsPackage.VIEW_POINT__PURPOSE);
            this.createEAttribute(this.viewPointEClass, sysml.modelelements.ModelelementsPackage.VIEW_POINT__CONCERNS);
            this.createEAttribute(this.viewPointEClass, sysml.modelelements.ModelelementsPackage.VIEW_POINT__LANGUAGES);
            this.createEAttribute(this.viewPointEClass, sysml.modelelements.ModelelementsPackage.VIEW_POINT__METHODS);
            this.rationaleEClass = this.createEClass(sysml.modelelements.ModelelementsPackage.RATIONALE);
            this.createEReference(this.rationaleEClass, sysml.modelelements.ModelelementsPackage.RATIONALE__BASE_COMMENT);
            this.problemEClass = this.createEClass(sysml.modelelements.ModelelementsPackage.PROBLEM);
            this.createEReference(this.problemEClass, sysml.modelelements.ModelelementsPackage.PROBLEM__BASE_COMMENT);
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
            this.setName(sysml.modelelements.ModelelementsPackage.eNAME);
            this.setNsPrefix(sysml.modelelements.ModelelementsPackage.eNS_PREFIX);
            this.setNsURI(sysml.modelelements.ModelelementsPackage.eNS_URI);
            let theUmlPackage : uml.UmlPackage = <uml.UmlPackage><any>org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(uml.UmlPackage.eNS_URI);
            let theTypesPackage : types.TypesPackage = <types.TypesPackage><any>org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(types.TypesPackage.eNS_URI);
            this.initEClass(this.conformEClass, "sysml.modelelements.Conform", "Conform", !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ABSTRACT, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_INTERFACE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
            this.initEReference(this.getConform_Base_Dependency(), theUmlPackage.getDependency(), null, "base_Dependency", null, 1, 1, "sysml.modelelements.Conform", !org.eclipse.emf.ecore.impl.EPackageImpl.IS_TRANSIENT, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_VOLATILE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_CHANGEABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_COMPOSITE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_RESOLVE_PROXIES, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNSETTABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNIQUE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_DERIVED, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ORDERED);
            this.initEClass(this.viewEClass, "sysml.modelelements.View", "View", !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ABSTRACT, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_INTERFACE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
            this.initEReference(this.getView_ViewPoint(), this.getViewPoint(), null, "viewPoint", null, 1, 1, "sysml.modelelements.View", org.eclipse.emf.ecore.impl.EPackageImpl.IS_TRANSIENT, org.eclipse.emf.ecore.impl.EPackageImpl.IS_VOLATILE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_CHANGEABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_COMPOSITE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_RESOLVE_PROXIES, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNSETTABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNIQUE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_DERIVED, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ORDERED);
            this.initEReference(this.getView_Base_Package(), theUmlPackage.getPackage(), null, "base_Package", null, 1, 1, "sysml.modelelements.View", !org.eclipse.emf.ecore.impl.EPackageImpl.IS_TRANSIENT, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_VOLATILE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_CHANGEABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_COMPOSITE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_RESOLVE_PROXIES, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNSETTABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNIQUE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_DERIVED, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ORDERED);
            this.initEClass(this.viewPointEClass, "sysml.modelelements.ViewPoint", "ViewPoint", !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ABSTRACT, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_INTERFACE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
            this.initEReference(this.getViewPoint_Base_Class(), theUmlPackage.getClass_(), null, "base_Class", null, 1, 1, "sysml.modelelements.ViewPoint", !org.eclipse.emf.ecore.impl.EPackageImpl.IS_TRANSIENT, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_VOLATILE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_CHANGEABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_COMPOSITE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_RESOLVE_PROXIES, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNSETTABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNIQUE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_DERIVED, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ORDERED);
            this.initEAttribute(this.getViewPoint_StakeHolders(), theTypesPackage.getString(), "stakeHolders", null, 0, -1, "sysml.modelelements.ViewPoint", !org.eclipse.emf.ecore.impl.EPackageImpl.IS_TRANSIENT, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_VOLATILE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_CHANGEABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNSETTABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ID, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNIQUE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_DERIVED, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ORDERED);
            this.initEAttribute(this.getViewPoint_Purpose(), theTypesPackage.getString(), "purpose", null, 0, 1, "sysml.modelelements.ViewPoint", !org.eclipse.emf.ecore.impl.EPackageImpl.IS_TRANSIENT, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_VOLATILE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_CHANGEABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNSETTABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ID, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNIQUE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_DERIVED, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ORDERED);
            this.initEAttribute(this.getViewPoint_Concerns(), theTypesPackage.getString(), "concerns", null, 0, -1, "sysml.modelelements.ViewPoint", !org.eclipse.emf.ecore.impl.EPackageImpl.IS_TRANSIENT, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_VOLATILE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_CHANGEABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNSETTABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ID, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNIQUE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_DERIVED, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ORDERED);
            this.initEAttribute(this.getViewPoint_Languages(), theTypesPackage.getString(), "languages", null, 0, -1, "sysml.modelelements.ViewPoint", !org.eclipse.emf.ecore.impl.EPackageImpl.IS_TRANSIENT, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_VOLATILE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_CHANGEABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNSETTABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ID, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNIQUE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_DERIVED, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ORDERED);
            this.initEAttribute(this.getViewPoint_Methods(), theTypesPackage.getString(), "methods", null, 0, -1, "sysml.modelelements.ViewPoint", !org.eclipse.emf.ecore.impl.EPackageImpl.IS_TRANSIENT, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_VOLATILE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_CHANGEABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNSETTABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ID, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNIQUE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_DERIVED, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ORDERED);
            this.initEClass(this.rationaleEClass, "sysml.modelelements.Rationale", "Rationale", !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ABSTRACT, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_INTERFACE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
            this.initEReference(this.getRationale_Base_Comment(), theUmlPackage.getComment(), null, "base_Comment", null, 1, 1, "sysml.modelelements.Rationale", !org.eclipse.emf.ecore.impl.EPackageImpl.IS_TRANSIENT, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_VOLATILE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_CHANGEABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_COMPOSITE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_RESOLVE_PROXIES, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNSETTABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNIQUE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_DERIVED, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ORDERED);
            this.initEClass(this.problemEClass, "sysml.modelelements.Problem", "Problem", !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ABSTRACT, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_INTERFACE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
            this.initEReference(this.getProblem_Base_Comment(), theUmlPackage.getComment(), null, "base_Comment", null, 1, 1, "sysml.modelelements.Problem", !org.eclipse.emf.ecore.impl.EPackageImpl.IS_TRANSIENT, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_VOLATILE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_CHANGEABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_COMPOSITE, org.eclipse.emf.ecore.impl.EPackageImpl.IS_RESOLVE_PROXIES, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNSETTABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_UNIQUE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_DERIVED, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_ORDERED);
        }
    }
    ModelelementsPackageImpl["__class"] = "sysml.modelelements.impl.ModelelementsPackageImpl";
    ModelelementsPackageImpl["__interfaces"] = ["org.eclipse.emf.ecore.EModelElement","org.eclipse.emf.ecore.ENamedElement","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.ecore.util.BasicExtendedMetaData.EPackageExtendedMetaData.Holder","sysml.modelelements.ModelelementsPackage","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject","org.eclipse.emf.ecore.EPackage"];


}

