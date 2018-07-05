/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace standard.impl {
    /**
     * Creates an instance of the factory.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @generated
     * @class
     * @extends org.eclipse.emf.ecore.impl.EFactoryImpl
     */
    export class StandardFactoryImpl extends org.eclipse.emf.ecore.impl.EFactoryImpl implements standard.StandardFactory {
        /**
         * Creates the default factory implementation.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public static init() : standard.StandardFactory {
            try {
                let theStandardFactory : standard.StandardFactory = <standard.StandardFactory><any>org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEFactory(standard.StandardPackage.eNS_URI);
                if(theStandardFactory != null) {
                    return theStandardFactory;
                }
            } catch(exception) {
                org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.log(exception);
            };
            return new StandardFactoryImpl();
        }

        public constructor() {
            super();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} eClass
         * @return {*}
         */
        public createGen(eClass : org.eclipse.emf.ecore.EClass) : org.eclipse.emf.ecore.EObject {
            switch((eClass.getClassifierID())) {
            case standard.StandardPackage.AUXILIARY:
                return this.createAuxiliary();
            case standard.StandardPackage.CALL:
                return this.createCall();
            case standard.StandardPackage.CREATE:
                return this.createCreate();
            case standard.StandardPackage.DERIVE:
                return this.createDerive();
            case standard.StandardPackage.DESTROY:
                return this.createDestroy();
            case standard.StandardPackage.DOCUMENT:
                return this.createDocument();
            case standard.StandardPackage.ENTITY:
                return this.createEntity();
            case standard.StandardPackage.EXECUTABLE:
                return this.createExecutable();
            case standard.StandardPackage.FOCUS:
                return this.createFocus();
            case standard.StandardPackage.FRAMEWORK:
                return this.createFramework();
            case standard.StandardPackage.IMPLEMENT:
                return this.createImplement();
            case standard.StandardPackage.IMPLEMENTATION_CLASS:
                return this.createImplementationClass();
            case standard.StandardPackage.INSTANTIATE:
                return this.createInstantiate();
            case standard.StandardPackage.LIBRARY:
                return this.createLibrary();
            case standard.StandardPackage.METACLASS:
                return this.createMetaclass();
            case standard.StandardPackage.MODEL_LIBRARY:
                return this.createModelLibrary();
            case standard.StandardPackage.PROCESS:
                return this.createProcess();
            case standard.StandardPackage.REALIZATION:
                return this.createRealization();
            case standard.StandardPackage.REFINE:
                return this.createRefine();
            case standard.StandardPackage.RESPONSIBILITY:
                return this.createResponsibility();
            case standard.StandardPackage.SCRIPT:
                return this.createScript();
            case standard.StandardPackage.SEND:
                return this.createSend();
            case standard.StandardPackage.SERVICE:
                return this.createService();
            case standard.StandardPackage.SOURCE:
                return this.createSource();
            case standard.StandardPackage.SPECIFICATION:
                return this.createSpecification();
            case standard.StandardPackage.SUBSYSTEM:
                return this.createSubsystem();
            case standard.StandardPackage.TRACE:
                return this.createTrace();
            case standard.StandardPackage.TYPE:
                return this.createType();
            case standard.StandardPackage.UTILITY:
                return this.createUtility();
            case standard.StandardPackage.BUILD_COMPONENT:
                return this.createBuildComponent();
            case standard.StandardPackage.METAMODEL:
                return this.createMetamodel();
            case standard.StandardPackage.SYSTEM_MODEL:
                return this.createSystemModel();
            default:
                throw Object.defineProperty(new Error("The class \'" + eClass.getName() + "\' is not a valid classifier"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
            }
        }

        /**
         * 
         * @param {*} eClass
         * @return {*}
         */
        public create(eClass : org.eclipse.emf.ecore.EClass) : org.eclipse.emf.ecore.EObject {
            let newObject : org.eclipse.emf.ecore.InternalEObject = <org.eclipse.emf.ecore.InternalEObject><any>this.createGen(eClass);
            newObject.eSetStore(a.store.MyStore.INSTANCE_$LI$());
            return newObject;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createAuxiliary() : standard.Auxiliary {
            let auxiliary : standard.impl.AuxiliaryImpl = new standard.impl.AuxiliaryImpl();
            return auxiliary;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createCall() : standard.Call {
            let call : standard.impl.CallImpl = new standard.impl.CallImpl();
            return call;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createCreate() : standard.Create {
            let create : standard.impl.CreateImpl = new standard.impl.CreateImpl();
            return create;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createDerive() : standard.Derive {
            let derive : standard.impl.DeriveImpl = new standard.impl.DeriveImpl();
            return derive;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createDestroy() : standard.Destroy {
            let destroy : standard.impl.DestroyImpl = new standard.impl.DestroyImpl();
            return destroy;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createDocument() : standard.Document {
            let document : standard.impl.DocumentImpl = new standard.impl.DocumentImpl();
            return document;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createEntity() : standard.Entity {
            let entity : standard.impl.EntityImpl = new standard.impl.EntityImpl();
            return entity;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createExecutable() : standard.Executable {
            let executable : standard.impl.ExecutableImpl = new standard.impl.ExecutableImpl();
            return executable;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createFocus() : standard.Focus {
            let focus : standard.impl.FocusImpl = new standard.impl.FocusImpl();
            return focus;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createFramework() : standard.Framework {
            let framework : standard.impl.FrameworkImpl = new standard.impl.FrameworkImpl();
            return framework;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createImplement() : standard.Implement {
            let implement : standard.impl.ImplementImpl = new standard.impl.ImplementImpl();
            return implement;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createImplementationClass() : standard.ImplementationClass {
            let implementationClass : standard.impl.ImplementationClassImpl = new standard.impl.ImplementationClassImpl();
            return implementationClass;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createInstantiate() : standard.Instantiate {
            let instantiate : standard.impl.InstantiateImpl = new standard.impl.InstantiateImpl();
            return instantiate;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createLibrary() : standard.Library {
            let library : standard.impl.LibraryImpl = new standard.impl.LibraryImpl();
            return library;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createMetaclass() : standard.Metaclass {
            let metaclass : standard.impl.MetaclassImpl = new standard.impl.MetaclassImpl();
            return metaclass;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createModelLibrary() : standard.ModelLibrary {
            let modelLibrary : standard.impl.ModelLibraryImpl = new standard.impl.ModelLibraryImpl();
            return modelLibrary;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createProcess() : standard.Process {
            let process : standard.impl.ProcessImpl = new standard.impl.ProcessImpl();
            return process;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createRealization() : standard.Realization {
            let realization : standard.impl.RealizationImpl = new standard.impl.RealizationImpl();
            return realization;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createRefine() : standard.Refine {
            let refine : standard.impl.RefineImpl = new standard.impl.RefineImpl();
            return refine;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createResponsibility() : standard.Responsibility {
            let responsibility : standard.impl.ResponsibilityImpl = new standard.impl.ResponsibilityImpl();
            return responsibility;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createScript() : standard.Script {
            let script : standard.impl.ScriptImpl = new standard.impl.ScriptImpl();
            return script;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createSend() : standard.Send {
            let send : standard.impl.SendImpl = new standard.impl.SendImpl();
            return send;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createService() : standard.Service {
            let service : standard.impl.ServiceImpl = new standard.impl.ServiceImpl();
            return service;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createSource() : standard.Source {
            let source : standard.impl.SourceImpl = new standard.impl.SourceImpl();
            return source;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createSpecification() : standard.Specification {
            let specification : standard.impl.SpecificationImpl = new standard.impl.SpecificationImpl();
            return specification;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createSubsystem() : standard.Subsystem {
            let subsystem : standard.impl.SubsystemImpl = new standard.impl.SubsystemImpl();
            return subsystem;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createTrace() : standard.Trace {
            let trace : standard.impl.TraceImpl = new standard.impl.TraceImpl();
            return trace;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createType() : standard.Type {
            let type : standard.impl.TypeImpl = new standard.impl.TypeImpl();
            return type;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createUtility() : standard.Utility {
            let utility : standard.impl.UtilityImpl = new standard.impl.UtilityImpl();
            return utility;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createBuildComponent() : standard.BuildComponent {
            let buildComponent : standard.impl.BuildComponentImpl = new standard.impl.BuildComponentImpl();
            return buildComponent;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createMetamodel() : standard.Metamodel {
            let metamodel : standard.impl.MetamodelImpl = new standard.impl.MetamodelImpl();
            return metamodel;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createSystemModel() : standard.SystemModel {
            let systemModel : standard.impl.SystemModelImpl = new standard.impl.SystemModelImpl();
            return systemModel;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getStandardPackage() : standard.StandardPackage {
            return <standard.StandardPackage><any>this.getEPackage();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @deprecated
         * @generated
         * @return {*}
         */
        public static getPackage() : standard.StandardPackage {
            return standard.StandardPackage.eINSTANCE;
        }
    }
    StandardFactoryImpl["__class"] = "standard.impl.StandardFactoryImpl";
    StandardFactoryImpl["__interfaces"] = ["standard.StandardFactory","org.eclipse.emf.ecore.EModelElement","org.eclipse.emf.ecore.EFactory","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject","org.eclipse.emf.ecore.resource.impl.BinaryResourceImpl.DataConverter.Factory"];


}

