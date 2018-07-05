/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace standard.util {
    /**
     * Creates an instance of the switch.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @generated
     * @class
     * @extends org.eclipse.emf.ecore.util.EObjectValidator
     */
    export class StandardValidator extends org.eclipse.emf.ecore.util.EObjectValidator {
        /**
         * The cached model package
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        public static INSTANCE : StandardValidator; public static INSTANCE_$LI$() : StandardValidator { if(StandardValidator.INSTANCE == null) StandardValidator.INSTANCE = new StandardValidator(); return StandardValidator.INSTANCE; };

        /**
         * A constant for the {@link org.eclipse.emf.common.util.Diagnostic#getSource() source} of diagnostic {@link org.eclipse.emf.common.util.Diagnostic#getCode() codes} from this package.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see org.eclipse.emf.common.util.Diagnostic#getSource()
         * @see org.eclipse.emf.common.util.Diagnostic#getCode()
         * @generated
         */
        public static DIAGNOSTIC_SOURCE : string = "standard";

        /**
         * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Client and supplier are operations' of 'Call'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        public static CALL__CLIENT_AND_SUPPLIER_ARE_OPERATIONS : number = 1;

        /**
         * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Client and supplier are classifiers' of 'Create'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        public static CREATE__CLIENT_AND_SUPPLIER_ARE_CLASSIFIERS : number = 2;

        /**
         * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Implements specification' of 'Implement'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        public static IMPLEMENT__IMPLEMENTS_SPECIFICATION : number = 3;

        /**
         * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Cannot be realization' of 'Implementation Class'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        public static IMPLEMENTATION_CLASS__CANNOT_BE_REALIZATION : number = 4;

        /**
         * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Client and supplier are classifiers' of 'Instantiate'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        public static INSTANTIATE__CLIENT_AND_SUPPLIER_ARE_CLASSIFIERS : number = 5;

        /**
         * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Cannot be implementation Class' of 'Realization'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        public static REALIZATION__CANNOT_BE_IMPLEMENTATION_CLASS : number = 6;

        /**
         * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Client operation sends supplier signal' of 'Send'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        public static SEND__CLIENT_OPERATION_SENDS_SUPPLIER_SIGNAL : number = 7;

        /**
         * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Cannot be type' of 'Specification'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        public static SPECIFICATION__CANNOT_BE_TYPE : number = 8;

        /**
         * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Cannot be specification' of 'Type'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        public static TYPE__CANNOT_BE_SPECIFICATION : number = 9;

        /**
         * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Is utility' of 'Utility'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        public static UTILITY__IS_UTILITY : number = 10;

        /**
         * A constant with a fixed name that can be used as the base value for additional hand written constants.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        static GENERATED_DIAGNOSTIC_CODE_COUNT : number = 10;

        /**
         * A constant with a fixed name that can be used as the base value for additional hand written constants in a derived class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        static DIAGNOSTIC_CODE_COUNT : number; public static DIAGNOSTIC_CODE_COUNT_$LI$() : number { if(StandardValidator.DIAGNOSTIC_CODE_COUNT == null) StandardValidator.DIAGNOSTIC_CODE_COUNT = StandardValidator.GENERATED_DIAGNOSTIC_CODE_COUNT; return StandardValidator.DIAGNOSTIC_CODE_COUNT; };

        public constructor() {
            super();
        }

        /**
         * Returns the package of this validator switch.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        getEPackage() : org.eclipse.emf.ecore.EPackage {
            return standard.StandardPackage.eINSTANCE;
        }

        /**
         * Calls <code>validateXXX</code> for the corresponding classifier of the model.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {number} classifierID
         * @param {*} value
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        validate(classifierID : number, value : any, diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            switch((classifierID)) {
            case standard.StandardPackage.AUXILIARY:
                return this.validateAuxiliary(<standard.Auxiliary><any>value, diagnostics, context);
            case standard.StandardPackage.CALL:
                return this.validateCall(<standard.Call><any>value, diagnostics, context);
            case standard.StandardPackage.CREATE:
                return this.validateCreate(<standard.Create><any>value, diagnostics, context);
            case standard.StandardPackage.DERIVE:
                return this.validateDerive(<standard.Derive><any>value, diagnostics, context);
            case standard.StandardPackage.DESTROY:
                return this.validateDestroy(<standard.Destroy><any>value, diagnostics, context);
            case standard.StandardPackage.DOCUMENT:
                return this.validateDocument(<standard.Document><any>value, diagnostics, context);
            case standard.StandardPackage.FILE:
                return this.validateFile(<standard.File><any>value, diagnostics, context);
            case standard.StandardPackage.ENTITY:
                return this.validateEntity(<standard.Entity><any>value, diagnostics, context);
            case standard.StandardPackage.EXECUTABLE:
                return this.validateExecutable(<standard.Executable><any>value, diagnostics, context);
            case standard.StandardPackage.FOCUS:
                return this.validateFocus(<standard.Focus><any>value, diagnostics, context);
            case standard.StandardPackage.FRAMEWORK:
                return this.validateFramework(<standard.Framework><any>value, diagnostics, context);
            case standard.StandardPackage.IMPLEMENT:
                return this.validateImplement(<standard.Implement><any>value, diagnostics, context);
            case standard.StandardPackage.IMPLEMENTATION_CLASS:
                return this.validateImplementationClass(<standard.ImplementationClass><any>value, diagnostics, context);
            case standard.StandardPackage.INSTANTIATE:
                return this.validateInstantiate(<standard.Instantiate><any>value, diagnostics, context);
            case standard.StandardPackage.LIBRARY:
                return this.validateLibrary(<standard.Library><any>value, diagnostics, context);
            case standard.StandardPackage.METACLASS:
                return this.validateMetaclass(<standard.Metaclass><any>value, diagnostics, context);
            case standard.StandardPackage.MODEL_LIBRARY:
                return this.validateModelLibrary(<standard.ModelLibrary><any>value, diagnostics, context);
            case standard.StandardPackage.PROCESS:
                return this.validateProcess(<standard.Process><any>value, diagnostics, context);
            case standard.StandardPackage.REALIZATION:
                return this.validateRealization(<standard.Realization><any>value, diagnostics, context);
            case standard.StandardPackage.REFINE:
                return this.validateRefine(<standard.Refine><any>value, diagnostics, context);
            case standard.StandardPackage.RESPONSIBILITY:
                return this.validateResponsibility(<standard.Responsibility><any>value, diagnostics, context);
            case standard.StandardPackage.SCRIPT:
                return this.validateScript(<standard.Script><any>value, diagnostics, context);
            case standard.StandardPackage.SEND:
                return this.validateSend(<standard.Send><any>value, diagnostics, context);
            case standard.StandardPackage.SERVICE:
                return this.validateService(<standard.Service><any>value, diagnostics, context);
            case standard.StandardPackage.SOURCE:
                return this.validateSource(<standard.Source><any>value, diagnostics, context);
            case standard.StandardPackage.SPECIFICATION:
                return this.validateSpecification(<standard.Specification><any>value, diagnostics, context);
            case standard.StandardPackage.SUBSYSTEM:
                return this.validateSubsystem(<standard.Subsystem><any>value, diagnostics, context);
            case standard.StandardPackage.TRACE:
                return this.validateTrace(<standard.Trace><any>value, diagnostics, context);
            case standard.StandardPackage.TYPE:
                return this.validateType(<standard.Type><any>value, diagnostics, context);
            case standard.StandardPackage.UTILITY:
                return this.validateUtility(<standard.Utility><any>value, diagnostics, context);
            case standard.StandardPackage.BUILD_COMPONENT:
                return this.validateBuildComponent(<standard.BuildComponent><any>value, diagnostics, context);
            case standard.StandardPackage.METAMODEL:
                return this.validateMetamodel(<standard.Metamodel><any>value, diagnostics, context);
            case standard.StandardPackage.SYSTEM_MODEL:
                return this.validateSystemModel(<standard.SystemModel><any>value, diagnostics, context);
            default:
                return true;
            }
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} auxiliary
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public validateAuxiliary(auxiliary : standard.Auxiliary, diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            return this.validate_EveryDefaultConstraint(auxiliary, diagnostics, context);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} call
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public validateCall(call : standard.Call, diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(!this.validate_NoCircularContainment(call, diagnostics, context)) return false;
            let result : boolean = this.validate_EveryMultiplicityConforms(call, diagnostics, context);
            if(result || diagnostics != null) result = this.validate_EveryDataValueConforms(call, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validate_EveryReferenceIsContained(call, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validate_EveryBidirectionalReferenceIsPaired(call, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validate_EveryProxyResolves(call, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validate_UniqueID(call, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validate_EveryKeyUnique(call, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validate_EveryMapEntryUnique(call, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validateCall_client_and_supplier_are_operations(call, diagnostics, context) && result;
            return result;
        }

        /**
         * Validates the client_and_supplier_are_operations constraint of '<em>Call</em>'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} call
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public validateCall_client_and_supplier_are_operations(call : standard.Call, diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            return call.client_and_supplier_are_operations(diagnostics, context);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} create
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public validateCreate(create : standard.Create, diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(!this.validate_NoCircularContainment(create, diagnostics, context)) return false;
            let result : boolean = this.validate_EveryMultiplicityConforms(create, diagnostics, context);
            if(result || diagnostics != null) result = this.validate_EveryDataValueConforms(create, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validate_EveryReferenceIsContained(create, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validate_EveryBidirectionalReferenceIsPaired(create, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validate_EveryProxyResolves(create, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validate_UniqueID(create, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validate_EveryKeyUnique(create, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validate_EveryMapEntryUnique(create, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validateCreate_client_and_supplier_are_classifiers(create, diagnostics, context) && result;
            return result;
        }

        /**
         * Validates the client_and_supplier_are_classifiers constraint of '<em>Create</em>'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} create
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public validateCreate_client_and_supplier_are_classifiers(create : standard.Create, diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            return create.client_and_supplier_are_classifiers(diagnostics, context);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} derive
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public validateDerive(derive : standard.Derive, diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            return this.validate_EveryDefaultConstraint(derive, diagnostics, context);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} destroy
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public validateDestroy(destroy : standard.Destroy, diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            return this.validate_EveryDefaultConstraint(destroy, diagnostics, context);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} document
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public validateDocument(document : standard.Document, diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            return this.validate_EveryDefaultConstraint(document, diagnostics, context);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} file
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public validateFile(file : standard.File, diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            return this.validate_EveryDefaultConstraint(file, diagnostics, context);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} entity
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public validateEntity(entity : standard.Entity, diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            return this.validate_EveryDefaultConstraint(entity, diagnostics, context);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} executable
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public validateExecutable(executable : standard.Executable, diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            return this.validate_EveryDefaultConstraint(executable, diagnostics, context);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} focus
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public validateFocus(focus : standard.Focus, diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            return this.validate_EveryDefaultConstraint(focus, diagnostics, context);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} framework
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public validateFramework(framework : standard.Framework, diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            return this.validate_EveryDefaultConstraint(framework, diagnostics, context);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} implement
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public validateImplement(implement : standard.Implement, diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(!this.validate_NoCircularContainment(implement, diagnostics, context)) return false;
            let result : boolean = this.validate_EveryMultiplicityConforms(implement, diagnostics, context);
            if(result || diagnostics != null) result = this.validate_EveryDataValueConforms(implement, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validate_EveryReferenceIsContained(implement, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validate_EveryBidirectionalReferenceIsPaired(implement, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validate_EveryProxyResolves(implement, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validate_UniqueID(implement, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validate_EveryKeyUnique(implement, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validate_EveryMapEntryUnique(implement, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validateImplement_implements_specification(implement, diagnostics, context) && result;
            return result;
        }

        /**
         * Validates the implements_specification constraint of '<em>Implement</em>'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} implement
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public validateImplement_implements_specification(implement : standard.Implement, diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            return implement.implements_specification(diagnostics, context);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} implementationClass
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public validateImplementationClass(implementationClass : standard.ImplementationClass, diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(!this.validate_NoCircularContainment(implementationClass, diagnostics, context)) return false;
            let result : boolean = this.validate_EveryMultiplicityConforms(implementationClass, diagnostics, context);
            if(result || diagnostics != null) result = this.validate_EveryDataValueConforms(implementationClass, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validate_EveryReferenceIsContained(implementationClass, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validate_EveryBidirectionalReferenceIsPaired(implementationClass, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validate_EveryProxyResolves(implementationClass, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validate_UniqueID(implementationClass, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validate_EveryKeyUnique(implementationClass, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validate_EveryMapEntryUnique(implementationClass, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validateImplementationClass_cannot_be_realization(implementationClass, diagnostics, context) && result;
            return result;
        }

        /**
         * Validates the cannot_be_realization constraint of '<em>Implementation Class</em>'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} implementationClass
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public validateImplementationClass_cannot_be_realization(implementationClass : standard.ImplementationClass, diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            return implementationClass.cannot_be_realization(diagnostics, context);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} instantiate
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public validateInstantiate(instantiate : standard.Instantiate, diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(!this.validate_NoCircularContainment(instantiate, diagnostics, context)) return false;
            let result : boolean = this.validate_EveryMultiplicityConforms(instantiate, diagnostics, context);
            if(result || diagnostics != null) result = this.validate_EveryDataValueConforms(instantiate, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validate_EveryReferenceIsContained(instantiate, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validate_EveryBidirectionalReferenceIsPaired(instantiate, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validate_EveryProxyResolves(instantiate, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validate_UniqueID(instantiate, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validate_EveryKeyUnique(instantiate, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validate_EveryMapEntryUnique(instantiate, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validateInstantiate_client_and_supplier_are_classifiers(instantiate, diagnostics, context) && result;
            return result;
        }

        /**
         * Validates the client_and_supplier_are_classifiers constraint of '<em>Instantiate</em>'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} instantiate
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public validateInstantiate_client_and_supplier_are_classifiers(instantiate : standard.Instantiate, diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            return instantiate.client_and_supplier_are_classifiers(diagnostics, context);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} library
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public validateLibrary(library : standard.Library, diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            return this.validate_EveryDefaultConstraint(library, diagnostics, context);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} metaclass
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public validateMetaclass(metaclass : standard.Metaclass, diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            return this.validate_EveryDefaultConstraint(metaclass, diagnostics, context);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} modelLibrary
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public validateModelLibrary(modelLibrary : standard.ModelLibrary, diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            return this.validate_EveryDefaultConstraint(modelLibrary, diagnostics, context);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} process
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public validateProcess(process : standard.Process, diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            return this.validate_EveryDefaultConstraint(process, diagnostics, context);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} realization
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public validateRealization(realization : standard.Realization, diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(!this.validate_NoCircularContainment(realization, diagnostics, context)) return false;
            let result : boolean = this.validate_EveryMultiplicityConforms(realization, diagnostics, context);
            if(result || diagnostics != null) result = this.validate_EveryDataValueConforms(realization, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validate_EveryReferenceIsContained(realization, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validate_EveryBidirectionalReferenceIsPaired(realization, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validate_EveryProxyResolves(realization, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validate_UniqueID(realization, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validate_EveryKeyUnique(realization, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validate_EveryMapEntryUnique(realization, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validateRealization_cannot_be_implementationClass(realization, diagnostics, context) && result;
            return result;
        }

        /**
         * Validates the cannot_be_implementationClass constraint of '<em>Realization</em>'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} realization
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public validateRealization_cannot_be_implementationClass(realization : standard.Realization, diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            return realization.cannot_be_implementationClass(diagnostics, context);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} refine
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public validateRefine(refine : standard.Refine, diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            return this.validate_EveryDefaultConstraint(refine, diagnostics, context);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} responsibility
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public validateResponsibility(responsibility : standard.Responsibility, diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            return this.validate_EveryDefaultConstraint(responsibility, diagnostics, context);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} script
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public validateScript(script : standard.Script, diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            return this.validate_EveryDefaultConstraint(script, diagnostics, context);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} send
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public validateSend(send : standard.Send, diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(!this.validate_NoCircularContainment(send, diagnostics, context)) return false;
            let result : boolean = this.validate_EveryMultiplicityConforms(send, diagnostics, context);
            if(result || diagnostics != null) result = this.validate_EveryDataValueConforms(send, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validate_EveryReferenceIsContained(send, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validate_EveryBidirectionalReferenceIsPaired(send, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validate_EveryProxyResolves(send, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validate_UniqueID(send, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validate_EveryKeyUnique(send, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validate_EveryMapEntryUnique(send, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validateSend_client_operation_sends_supplier_signal(send, diagnostics, context) && result;
            return result;
        }

        /**
         * Validates the client_operation_sends_supplier_signal constraint of '<em>Send</em>'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} send
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public validateSend_client_operation_sends_supplier_signal(send : standard.Send, diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            return send.client_operation_sends_supplier_signal(diagnostics, context);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} service
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public validateService(service : standard.Service, diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            return this.validate_EveryDefaultConstraint(service, diagnostics, context);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} source
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public validateSource(source : standard.Source, diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            return this.validate_EveryDefaultConstraint(source, diagnostics, context);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} specification
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public validateSpecification(specification : standard.Specification, diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(!this.validate_NoCircularContainment(specification, diagnostics, context)) return false;
            let result : boolean = this.validate_EveryMultiplicityConforms(specification, diagnostics, context);
            if(result || diagnostics != null) result = this.validate_EveryDataValueConforms(specification, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validate_EveryReferenceIsContained(specification, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validate_EveryBidirectionalReferenceIsPaired(specification, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validate_EveryProxyResolves(specification, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validate_UniqueID(specification, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validate_EveryKeyUnique(specification, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validate_EveryMapEntryUnique(specification, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validateSpecification_cannot_be_type(specification, diagnostics, context) && result;
            return result;
        }

        /**
         * Validates the cannot_be_type constraint of '<em>Specification</em>'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} specification
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public validateSpecification_cannot_be_type(specification : standard.Specification, diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            return specification.cannot_be_type(diagnostics, context);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} subsystem
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public validateSubsystem(subsystem : standard.Subsystem, diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            return this.validate_EveryDefaultConstraint(subsystem, diagnostics, context);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} trace
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public validateTrace(trace : standard.Trace, diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            return this.validate_EveryDefaultConstraint(trace, diagnostics, context);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} type
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public validateType(type : standard.Type, diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(!this.validate_NoCircularContainment(type, diagnostics, context)) return false;
            let result : boolean = this.validate_EveryMultiplicityConforms(type, diagnostics, context);
            if(result || diagnostics != null) result = this.validate_EveryDataValueConforms(type, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validate_EveryReferenceIsContained(type, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validate_EveryBidirectionalReferenceIsPaired(type, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validate_EveryProxyResolves(type, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validate_UniqueID(type, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validate_EveryKeyUnique(type, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validate_EveryMapEntryUnique(type, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validateType_cannot_be_specification(type, diagnostics, context) && result;
            return result;
        }

        /**
         * Validates the cannot_be_specification constraint of '<em>Type</em>'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} type
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public validateType_cannot_be_specification(type : standard.Type, diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            return type.cannot_be_specification(diagnostics, context);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} utility
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public validateUtility(utility : standard.Utility, diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(!this.validate_NoCircularContainment(utility, diagnostics, context)) return false;
            let result : boolean = this.validate_EveryMultiplicityConforms(utility, diagnostics, context);
            if(result || diagnostics != null) result = this.validate_EveryDataValueConforms(utility, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validate_EveryReferenceIsContained(utility, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validate_EveryBidirectionalReferenceIsPaired(utility, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validate_EveryProxyResolves(utility, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validate_UniqueID(utility, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validate_EveryKeyUnique(utility, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validate_EveryMapEntryUnique(utility, diagnostics, context) && result;
            if(result || diagnostics != null) result = this.validateUtility_is_utility(utility, diagnostics, context) && result;
            return result;
        }

        /**
         * Validates the is_utility constraint of '<em>Utility</em>'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} utility
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public validateUtility_is_utility(utility : standard.Utility, diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            return utility.is_utility(diagnostics, context);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} buildComponent
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public validateBuildComponent(buildComponent : standard.BuildComponent, diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            return this.validate_EveryDefaultConstraint(buildComponent, diagnostics, context);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} metamodel
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public validateMetamodel(metamodel : standard.Metamodel, diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            return this.validate_EveryDefaultConstraint(metamodel, diagnostics, context);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} systemModel
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public validateSystemModel(systemModel : standard.SystemModel, diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            return this.validate_EveryDefaultConstraint(systemModel, diagnostics, context);
        }

        /**
         * Returns the resource locator that will be used to fetch messages for this validator's diagnostics.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getResourceLocator() : org.eclipse.emf.common.util.ResourceLocator {
            return super.getResourceLocator();
        }
    }
    StandardValidator["__class"] = "standard.util.StandardValidator";
    StandardValidator["__interfaces"] = ["org.eclipse.emf.ecore.EValidator"];


}


standard.util.StandardValidator.DIAGNOSTIC_CODE_COUNT_$LI$();

standard.util.StandardValidator.INSTANCE_$LI$();
