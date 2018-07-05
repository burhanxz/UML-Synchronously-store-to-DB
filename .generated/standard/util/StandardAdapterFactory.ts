/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace standard.util {
    /**
     * Creates an instance of the adapter factory.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @generated
     * @class
     * @extends org.eclipse.emf.common.notify.impl.AdapterFactoryImpl
     */
    export class StandardAdapterFactory extends org.eclipse.emf.common.notify.impl.AdapterFactoryImpl {
        /**
         * The cached model package.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        static modelPackage : standard.StandardPackage = null;

        public constructor() {
            super();
            if(StandardAdapterFactory.modelPackage == null) {
                StandardAdapterFactory.modelPackage = standard.StandardPackage.eINSTANCE;
            }
        }

        /**
         * Returns whether this factory is applicable for the type of the object.
         * <!-- begin-user-doc -->
         * This implementation returns <code>true</code> if the object is either the model's package or is an instance object of the model.
         * <!-- end-user-doc -->
         * @return {boolean} whether this factory is applicable for the type of the object.
         * @generated
         * @param {*} object
         */
        public isFactoryForType(object : any) : boolean {
            if(object === StandardAdapterFactory.modelPackage) {
                return true;
            }
            if(object != null && (object["__interfaces"] != null && object["__interfaces"].indexOf("org.eclipse.emf.ecore.EObject") >= 0 || object.constructor != null && object.constructor["__interfaces"] != null && object.constructor["__interfaces"].indexOf("org.eclipse.emf.ecore.EObject") >= 0)) {
                return (<org.eclipse.emf.ecore.EObject><any>object).eClass().getEPackage() === StandardAdapterFactory.modelPackage;
            }
            return false;
        }

        /**
         * The switch that delegates to the <code>createXXX</code> methods.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        modelSwitch : standard.util.StandardSwitch<org.eclipse.emf.common.notify.Adapter> = new StandardAdapterFactory.StandardAdapterFactory$0(this);

        /**
         * Creates an adapter for the <code>target</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} target the object to adapt.
         * @return {*} the adapter for the <code>target</code>.
         * @generated
         */
        public createAdapter(target : org.eclipse.emf.common.notify.Notifier) : org.eclipse.emf.common.notify.Adapter {
            return this.modelSwitch.doSwitch(<org.eclipse.emf.ecore.EObject><any>target);
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see standard.Auxiliary
         * @generated
         */
        public createAuxiliaryAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see standard.Call
         * @generated
         */
        public createCallAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see standard.Create
         * @generated
         */
        public createCreateAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see standard.Derive
         * @generated
         */
        public createDeriveAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see standard.Destroy
         * @generated
         */
        public createDestroyAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see standard.Document
         * @generated
         */
        public createDocumentAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see standard.File
         * @generated
         */
        public createFileAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see standard.Entity
         * @generated
         */
        public createEntityAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see standard.Executable
         * @generated
         */
        public createExecutableAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see standard.Focus
         * @generated
         */
        public createFocusAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see standard.Framework
         * @generated
         */
        public createFrameworkAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see standard.Implement
         * @generated
         */
        public createImplementAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see standard.ImplementationClass
         * @generated
         */
        public createImplementationClassAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see standard.Instantiate
         * @generated
         */
        public createInstantiateAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see standard.Library
         * @generated
         */
        public createLibraryAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see standard.Metaclass
         * @generated
         */
        public createMetaclassAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see standard.ModelLibrary
         * @generated
         */
        public createModelLibraryAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see standard.Process
         * @generated
         */
        public createProcessAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see standard.Realization
         * @generated
         */
        public createRealizationAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see standard.Refine
         * @generated
         */
        public createRefineAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see standard.Responsibility
         * @generated
         */
        public createResponsibilityAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see standard.Script
         * @generated
         */
        public createScriptAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see standard.Send
         * @generated
         */
        public createSendAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see standard.Service
         * @generated
         */
        public createServiceAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see standard.Source
         * @generated
         */
        public createSourceAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see standard.Specification
         * @generated
         */
        public createSpecificationAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see standard.Subsystem
         * @generated
         */
        public createSubsystemAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see standard.Trace
         * @generated
         */
        public createTraceAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see standard.Type
         * @generated
         */
        public createTypeAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see standard.Utility
         * @generated
         */
        public createUtilityAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see standard.BuildComponent
         * @generated
         */
        public createBuildComponentAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see standard.Metamodel
         * @generated
         */
        public createMetamodelAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see standard.SystemModel
         * @generated
         */
        public createSystemModelAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for the default case.
         * <!-- begin-user-doc -->
         * This default implementation returns null.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @generated
         */
        public createEObjectAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }
    }
    StandardAdapterFactory["__class"] = "standard.util.StandardAdapterFactory";
    StandardAdapterFactory["__interfaces"] = ["org.eclipse.emf.common.notify.AdapterFactory"];



    export namespace StandardAdapterFactory {

        export class StandardAdapterFactory$0 extends standard.util.StandardSwitch<org.eclipse.emf.common.notify.Adapter> {
            public __parent: any;
            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseAuxiliary(object : standard.Auxiliary) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createAuxiliaryAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseCall(object : standard.Call) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createCallAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseCreate(object : standard.Create) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createCreateAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseDerive(object : standard.Derive) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createDeriveAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseDestroy(object : standard.Destroy) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createDestroyAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseDocument(object : standard.Document) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createDocumentAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseFile(object : standard.File) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createFileAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseEntity(object : standard.Entity) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createEntityAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseExecutable(object : standard.Executable) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createExecutableAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseFocus(object : standard.Focus) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createFocusAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseFramework(object : standard.Framework) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createFrameworkAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseImplement(object : standard.Implement) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createImplementAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseImplementationClass(object : standard.ImplementationClass) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createImplementationClassAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseInstantiate(object : standard.Instantiate) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createInstantiateAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseLibrary(object : standard.Library) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createLibraryAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseMetaclass(object : standard.Metaclass) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createMetaclassAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseModelLibrary(object : standard.ModelLibrary) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createModelLibraryAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseProcess(object : standard.Process) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createProcessAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseRealization(object : standard.Realization) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createRealizationAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseRefine(object : standard.Refine) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createRefineAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseResponsibility(object : standard.Responsibility) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createResponsibilityAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseScript(object : standard.Script) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createScriptAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseSend(object : standard.Send) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createSendAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseService(object : standard.Service) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createServiceAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseSource(object : standard.Source) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createSourceAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseSpecification(object : standard.Specification) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createSpecificationAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseSubsystem(object : standard.Subsystem) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createSubsystemAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseTrace(object : standard.Trace) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createTraceAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseType(object : standard.Type) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createTypeAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseUtility(object : standard.Utility) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createUtilityAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseBuildComponent(object : standard.BuildComponent) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createBuildComponentAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseMetamodel(object : standard.Metamodel) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createMetamodelAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseSystemModel(object : standard.SystemModel) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createSystemModelAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public defaultCase(object : org.eclipse.emf.ecore.EObject) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createEObjectAdapter();
            }

            constructor(__parent: any) {
                super();
                this.__parent = __parent;
            }
        }

    }

}

