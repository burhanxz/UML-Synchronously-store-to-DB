/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace standard.util {
    /**
     * Creates an instance of the switch.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @generated
     * @class
     * @extends org.eclipse.emf.ecore.util.Switch
     */
    export class StandardSwitch<T> extends org.eclipse.emf.ecore.util.Switch<T> {
        /**
         * The cached model package
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        static modelPackage : standard.StandardPackage = null;

        public constructor() {
            super();
            if(StandardSwitch.modelPackage == null) {
                StandardSwitch.modelPackage = standard.StandardPackage.eINSTANCE;
            }
        }

        /**
         * Checks whether this is a switch for the given package.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} ePackage the package in question.
         * @return {boolean} whether this is a switch for the given package.
         * @generated
         */
        isSwitchFor(ePackage : org.eclipse.emf.ecore.EPackage) : boolean {
            return ePackage === StandardSwitch.modelPackage;
        }

        /**
         * Calls <code>caseXXX</code> for each class of the model until one returns a non null result; it yields that result.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the first non-null result returned by a <code>caseXXX</code> call.
         * @generated
         * @param {number} classifierID
         * @param {*} theEObject
         */
        doSwitch(classifierID : number, theEObject : org.eclipse.emf.ecore.EObject) : T {
            switch((classifierID)) {
            case standard.StandardPackage.AUXILIARY:
                {
                    let auxiliary : standard.Auxiliary = <standard.Auxiliary><any>theEObject;
                    let result : T = this.caseAuxiliary(auxiliary);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case standard.StandardPackage.CALL:
                {
                    let call : standard.Call = <standard.Call><any>theEObject;
                    let result : T = this.caseCall(call);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case standard.StandardPackage.CREATE:
                {
                    let create : standard.Create = <standard.Create><any>theEObject;
                    let result : T = this.caseCreate(create);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case standard.StandardPackage.DERIVE:
                {
                    let derive : standard.Derive = <standard.Derive><any>theEObject;
                    let result : T = this.caseDerive(derive);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case standard.StandardPackage.DESTROY:
                {
                    let destroy : standard.Destroy = <standard.Destroy><any>theEObject;
                    let result : T = this.caseDestroy(destroy);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case standard.StandardPackage.DOCUMENT:
                {
                    let document : standard.Document = <standard.Document><any>theEObject;
                    let result : T = this.caseDocument(document);
                    if(result == null) result = this.caseFile(document);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case standard.StandardPackage.FILE:
                {
                    let file : standard.File = <standard.File><any>theEObject;
                    let result : T = this.caseFile(file);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case standard.StandardPackage.ENTITY:
                {
                    let entity : standard.Entity = <standard.Entity><any>theEObject;
                    let result : T = this.caseEntity(entity);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case standard.StandardPackage.EXECUTABLE:
                {
                    let executable : standard.Executable = <standard.Executable><any>theEObject;
                    let result : T = this.caseExecutable(executable);
                    if(result == null) result = this.caseFile(executable);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case standard.StandardPackage.FOCUS:
                {
                    let focus : standard.Focus = <standard.Focus><any>theEObject;
                    let result : T = this.caseFocus(focus);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case standard.StandardPackage.FRAMEWORK:
                {
                    let framework : standard.Framework = <standard.Framework><any>theEObject;
                    let result : T = this.caseFramework(framework);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case standard.StandardPackage.IMPLEMENT:
                {
                    let implement : standard.Implement = <standard.Implement><any>theEObject;
                    let result : T = this.caseImplement(implement);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case standard.StandardPackage.IMPLEMENTATION_CLASS:
                {
                    let implementationClass : standard.ImplementationClass = <standard.ImplementationClass><any>theEObject;
                    let result : T = this.caseImplementationClass(implementationClass);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case standard.StandardPackage.INSTANTIATE:
                {
                    let instantiate : standard.Instantiate = <standard.Instantiate><any>theEObject;
                    let result : T = this.caseInstantiate(instantiate);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case standard.StandardPackage.LIBRARY:
                {
                    let library : standard.Library = <standard.Library><any>theEObject;
                    let result : T = this.caseLibrary(library);
                    if(result == null) result = this.caseFile(library);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case standard.StandardPackage.METACLASS:
                {
                    let metaclass : standard.Metaclass = <standard.Metaclass><any>theEObject;
                    let result : T = this.caseMetaclass(metaclass);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case standard.StandardPackage.MODEL_LIBRARY:
                {
                    let modelLibrary : standard.ModelLibrary = <standard.ModelLibrary><any>theEObject;
                    let result : T = this.caseModelLibrary(modelLibrary);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case standard.StandardPackage.PROCESS:
                {
                    let process : standard.Process = <standard.Process><any>theEObject;
                    let result : T = this.caseProcess(process);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case standard.StandardPackage.REALIZATION:
                {
                    let realization : standard.Realization = <standard.Realization><any>theEObject;
                    let result : T = this.caseRealization(realization);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case standard.StandardPackage.REFINE:
                {
                    let refine : standard.Refine = <standard.Refine><any>theEObject;
                    let result : T = this.caseRefine(refine);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case standard.StandardPackage.RESPONSIBILITY:
                {
                    let responsibility : standard.Responsibility = <standard.Responsibility><any>theEObject;
                    let result : T = this.caseResponsibility(responsibility);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case standard.StandardPackage.SCRIPT:
                {
                    let script : standard.Script = <standard.Script><any>theEObject;
                    let result : T = this.caseScript(script);
                    if(result == null) result = this.caseFile(script);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case standard.StandardPackage.SEND:
                {
                    let send : standard.Send = <standard.Send><any>theEObject;
                    let result : T = this.caseSend(send);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case standard.StandardPackage.SERVICE:
                {
                    let service : standard.Service = <standard.Service><any>theEObject;
                    let result : T = this.caseService(service);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case standard.StandardPackage.SOURCE:
                {
                    let source : standard.Source = <standard.Source><any>theEObject;
                    let result : T = this.caseSource(source);
                    if(result == null) result = this.caseFile(source);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case standard.StandardPackage.SPECIFICATION:
                {
                    let specification : standard.Specification = <standard.Specification><any>theEObject;
                    let result : T = this.caseSpecification(specification);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case standard.StandardPackage.SUBSYSTEM:
                {
                    let subsystem : standard.Subsystem = <standard.Subsystem><any>theEObject;
                    let result : T = this.caseSubsystem(subsystem);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case standard.StandardPackage.TRACE:
                {
                    let trace : standard.Trace = <standard.Trace><any>theEObject;
                    let result : T = this.caseTrace(trace);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case standard.StandardPackage.TYPE:
                {
                    let type : standard.Type = <standard.Type><any>theEObject;
                    let result : T = this.caseType(type);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case standard.StandardPackage.UTILITY:
                {
                    let utility : standard.Utility = <standard.Utility><any>theEObject;
                    let result : T = this.caseUtility(utility);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case standard.StandardPackage.BUILD_COMPONENT:
                {
                    let buildComponent : standard.BuildComponent = <standard.BuildComponent><any>theEObject;
                    let result : T = this.caseBuildComponent(buildComponent);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case standard.StandardPackage.METAMODEL:
                {
                    let metamodel : standard.Metamodel = <standard.Metamodel><any>theEObject;
                    let result : T = this.caseMetamodel(metamodel);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case standard.StandardPackage.SYSTEM_MODEL:
                {
                    let systemModel : standard.SystemModel = <standard.SystemModel><any>theEObject;
                    let result : T = this.caseSystemModel(systemModel);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            default:
                return this.defaultCase(theEObject);
            }
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Auxiliary</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Auxiliary</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseAuxiliary(object : standard.Auxiliary) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Call</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Call</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseCall(object : standard.Call) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Create</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Create</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseCreate(object : standard.Create) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Derive</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Derive</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseDerive(object : standard.Derive) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Destroy</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Destroy</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseDestroy(object : standard.Destroy) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Document</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Document</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseDocument(object : standard.Document) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>File</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>File</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseFile(object : standard.File) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Entity</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Entity</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseEntity(object : standard.Entity) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Executable</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Executable</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseExecutable(object : standard.Executable) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Focus</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Focus</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseFocus(object : standard.Focus) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Framework</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Framework</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseFramework(object : standard.Framework) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Implement</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Implement</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseImplement(object : standard.Implement) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Implementation Class</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Implementation Class</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseImplementationClass(object : standard.ImplementationClass) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Instantiate</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Instantiate</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseInstantiate(object : standard.Instantiate) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Library</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Library</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseLibrary(object : standard.Library) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Metaclass</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Metaclass</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseMetaclass(object : standard.Metaclass) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Model Library</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Model Library</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseModelLibrary(object : standard.ModelLibrary) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Process</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Process</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseProcess(object : standard.Process) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Realization</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Realization</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseRealization(object : standard.Realization) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Refine</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Refine</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseRefine(object : standard.Refine) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Responsibility</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Responsibility</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseResponsibility(object : standard.Responsibility) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Script</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Script</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseScript(object : standard.Script) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Send</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Send</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseSend(object : standard.Send) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Service</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Service</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseService(object : standard.Service) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Source</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Source</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseSource(object : standard.Source) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Specification</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Specification</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseSpecification(object : standard.Specification) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Subsystem</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Subsystem</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseSubsystem(object : standard.Subsystem) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Trace</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Trace</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseTrace(object : standard.Trace) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Type</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Type</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseType(object : standard.Type) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Utility</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Utility</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseUtility(object : standard.Utility) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Build Component</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Build Component</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseBuildComponent(object : standard.BuildComponent) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Metamodel</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Metamodel</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseMetamodel(object : standard.Metamodel) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>System Model</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>System Model</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseSystemModel(object : standard.SystemModel) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>EObject</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch, but this is the last case anyway.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>EObject</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject)
         * @generated
         */
        public defaultCase(object : org.eclipse.emf.ecore.EObject) : T {
            return null;
        }
    }
    StandardSwitch["__class"] = "standard.util.StandardSwitch";

}

