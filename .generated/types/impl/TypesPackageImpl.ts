/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace types.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model <b>Package</b>.
     * <!-- end-user-doc -->
     * @generated
     * @extends org.eclipse.emf.ecore.impl.EPackageImpl
     * @class
     */
    export class TypesPackageImpl extends org.eclipse.emf.ecore.impl.EPackageImpl implements types.TypesPackage {
        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        /*private*/ booleanEDataType : org.eclipse.emf.ecore.EDataType = null;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        /*private*/ integerEDataType : org.eclipse.emf.ecore.EDataType = null;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        /*private*/ realEDataType : org.eclipse.emf.ecore.EDataType = null;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        /*private*/ stringEDataType : org.eclipse.emf.ecore.EDataType = null;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        /*private*/ unlimitedNaturalEDataType : org.eclipse.emf.ecore.EDataType = null;

        constructor() {
            super(types.TypesPackage.eNS_URI, types.TypesFactory.eINSTANCE);
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
         * <p>This method is used to initialize {@link TypesPackage#eINSTANCE} when that field is accessed.
         * Clients should not invoke it directly. Instead, they should simply access that field to obtain the package.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see #eNS_URI
         * @see #createPackageContents()
         * @see #initializePackageContents()
         * @generated
         * @return {*}
         */
        public static init() : types.TypesPackage {
            if(TypesPackageImpl.isInited) return <types.TypesPackage><any>org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(types.TypesPackage.eNS_URI);
            let theTypesPackage : TypesPackageImpl = <TypesPackageImpl>((org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.get(types.TypesPackage.eNS_URI) != null && org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.get(types.TypesPackage.eNS_URI) instanceof <any>types.impl.TypesPackageImpl)?org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.get(types.TypesPackage.eNS_URI):new TypesPackageImpl());
            TypesPackageImpl.isInited = true;
            let theSysmlPackage : sysml.impl.SysmlPackageImpl = <sysml.impl.SysmlPackageImpl><any>((org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.SysmlPackage.eNS_URI) != null && org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.SysmlPackage.eNS_URI) instanceof <any>sysml.impl.SysmlPackageImpl)?org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.SysmlPackage.eNS_URI):sysml.SysmlPackage.eINSTANCE);
            let theModelelementsPackage : sysml.modelelements.impl.ModelelementsPackageImpl = <sysml.modelelements.impl.ModelelementsPackageImpl><any>((org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.modelelements.ModelelementsPackage.eNS_URI) != null && org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.modelelements.ModelelementsPackage.eNS_URI) instanceof <any>sysml.modelelements.impl.ModelelementsPackageImpl)?org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(sysml.modelelements.ModelelementsPackage.eNS_URI):sysml.modelelements.ModelelementsPackage.eINSTANCE);
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
            let theStandardPackage : standard.impl.StandardPackageImpl = <standard.impl.StandardPackageImpl><any>((org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(standard.StandardPackage.eNS_URI) != null && org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(standard.StandardPackage.eNS_URI) instanceof <any>standard.impl.StandardPackageImpl)?org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(standard.StandardPackage.eNS_URI):standard.StandardPackage.eINSTANCE);
            let theEcorePackage : org.eclipse.emf.ecore.impl.EcorePackageImpl = <org.eclipse.emf.ecore.impl.EcorePackageImpl><any>((org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(org.eclipse.emf.ecore.EcorePackage.eNS_URI) != null && org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(org.eclipse.emf.ecore.EcorePackage.eNS_URI) instanceof <any>org.eclipse.emf.ecore.impl.EcorePackageImpl)?org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEPackage(org.eclipse.emf.ecore.EcorePackage.eNS_URI):org.eclipse.emf.ecore.EcorePackage.eINSTANCE);
            theUmlPackage.loadPackage();
            theTypesPackage.createPackageContents();
            theSysmlPackage.createPackageContents();
            theModelelementsPackage.createPackageContents();
            theBlocksPackage.createPackageContents();
            thePortandflowsPackage.createPackageContents();
            theConstraintsPackage.createPackageContents();
            theActivitiesPackage.createPackageContents();
            theAllocationsPackage.createPackageContents();
            theRequirementsPackage.createPackageContents();
            theInteractionsPackage.createPackageContents();
            theStatemachinesPackage.createPackageContents();
            theUsecasesPackage.createPackageContents();
            theStandardPackage.createPackageContents();
            theEcorePackage.createPackageContents();
            theTypesPackage.initializePackageContents();
            theSysmlPackage.initializePackageContents();
            theModelelementsPackage.initializePackageContents();
            theBlocksPackage.initializePackageContents();
            thePortandflowsPackage.initializePackageContents();
            theConstraintsPackage.initializePackageContents();
            theActivitiesPackage.initializePackageContents();
            theAllocationsPackage.initializePackageContents();
            theRequirementsPackage.initializePackageContents();
            theInteractionsPackage.initializePackageContents();
            theStatemachinesPackage.initializePackageContents();
            theUsecasesPackage.initializePackageContents();
            theStandardPackage.initializePackageContents();
            theEcorePackage.initializePackageContents();
            theUmlPackage.fixPackageContents();
            theTypesPackage.freeze();
            org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.put(types.TypesPackage.eNS_URI, theTypesPackage);
            return theTypesPackage;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getBoolean() : org.eclipse.emf.ecore.EDataType {
            return this.booleanEDataType;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getInteger() : org.eclipse.emf.ecore.EDataType {
            return this.integerEDataType;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getReal() : org.eclipse.emf.ecore.EDataType {
            return this.realEDataType;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getString() : org.eclipse.emf.ecore.EDataType {
            return this.stringEDataType;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getUnlimitedNatural() : org.eclipse.emf.ecore.EDataType {
            return this.unlimitedNaturalEDataType;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getTypesFactory() : types.TypesFactory {
            return <types.TypesFactory><any>this.getEFactoryInstance();
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
            this.booleanEDataType = this.createEDataType(types.TypesPackage.BOOLEAN);
            this.integerEDataType = this.createEDataType(types.TypesPackage.INTEGER);
            this.realEDataType = this.createEDataType(types.TypesPackage.REAL);
            this.stringEDataType = this.createEDataType(types.TypesPackage.STRING);
            this.unlimitedNaturalEDataType = this.createEDataType(types.TypesPackage.UNLIMITED_NATURAL);
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
            this.setName(types.TypesPackage.eNAME);
            this.setNsPrefix(types.TypesPackage.eNS_PREFIX);
            this.setNsURI(types.TypesPackage.eNS_URI);
            this.initEDataType(this.booleanEDataType, Boolean, "Boolean", org.eclipse.emf.ecore.impl.EPackageImpl.IS_SERIALIZABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
            this.initEDataType(this.integerEDataType, Number, "Integer", org.eclipse.emf.ecore.impl.EPackageImpl.IS_SERIALIZABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
            this.initEDataType(this.realEDataType, Number, "Real", org.eclipse.emf.ecore.impl.EPackageImpl.IS_SERIALIZABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
            this.initEDataType(this.stringEDataType, String, "String", org.eclipse.emf.ecore.impl.EPackageImpl.IS_SERIALIZABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
            this.initEDataType(this.unlimitedNaturalEDataType, Number, "UnlimitedNatural", org.eclipse.emf.ecore.impl.EPackageImpl.IS_SERIALIZABLE, !org.eclipse.emf.ecore.impl.EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
            this.createResource(types.TypesPackage.eNS_URI);
            this.createUMLAnnotations();
        }

        /**
         * Initializes the annotations for <b>http://www.eclipse.org/uml2/2.0.0/UML</b>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        createUMLAnnotations() {
            let source : string = "http://www.eclipse.org/uml2/2.0.0/UML";
            this.addAnnotation(this, source, ["originalName", "Types"]);
        }
    }
    TypesPackageImpl["__class"] = "types.impl.TypesPackageImpl";
    TypesPackageImpl["__interfaces"] = ["org.eclipse.emf.ecore.EModelElement","org.eclipse.emf.ecore.ENamedElement","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.ecore.util.BasicExtendedMetaData.EPackageExtendedMetaData.Holder","org.eclipse.emf.common.notify.Notifier","types.TypesPackage","org.eclipse.emf.ecore.InternalEObject","org.eclipse.emf.ecore.EPackage"];


}

