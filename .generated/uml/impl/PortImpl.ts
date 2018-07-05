/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Port</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.PortImpl#isIsBehavior}</li>
     * <li>{@link uml.impl.PortImpl#isIsConjugated}</li>
     * <li>{@link uml.impl.PortImpl#isIsService}</li>
     * <li>{@link uml.impl.PortImpl#getProtocol}</li>
     * <li>{@link uml.impl.PortImpl#getProvided}</li>
     * <li>{@link uml.impl.PortImpl#getRedefinedPort}</li>
     * <li>{@link uml.impl.PortImpl#getRequired}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.PropertyImpl
     * @class
     */
    export class PortImpl extends uml.impl.PropertyImpl implements uml.Port {
        constructor() {
            super();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        eStaticClass() : org.eclipse.emf.ecore.EClass {
            return uml.UmlPackage.eINSTANCE.getPort();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isIsBehavior() : boolean {
            return <boolean>this.eGet(uml.UmlPackage.eINSTANCE.getPort_IsBehavior(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {boolean} newIsBehavior
         */
        public setIsBehavior(newIsBehavior : boolean) {
            this.eSet(uml.UmlPackage.eINSTANCE.getPort_IsBehavior(), newIsBehavior);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isIsConjugated() : boolean {
            return <boolean>this.eGet(uml.UmlPackage.eINSTANCE.getPort_IsConjugated(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {boolean} newIsConjugated
         */
        public setIsConjugated(newIsConjugated : boolean) {
            this.eSet(uml.UmlPackage.eINSTANCE.getPort_IsConjugated(), newIsConjugated);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isIsService() : boolean {
            return <boolean>this.eGet(uml.UmlPackage.eINSTANCE.getPort_IsService(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {boolean} newIsService
         */
        public setIsService(newIsService : boolean) {
            this.eSet(uml.UmlPackage.eINSTANCE.getPort_IsService(), newIsService);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getProtocol() : uml.ProtocolStateMachine {
            return <uml.ProtocolStateMachine><any>this.eGet(uml.UmlPackage.eINSTANCE.getPort_Protocol(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newProtocol
         */
        public setProtocol(newProtocol : uml.ProtocolStateMachine) {
            this.eSet(uml.UmlPackage.eINSTANCE.getPort_Protocol(), newProtocol);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getProvided() : org.eclipse.emf.common.util.EList<uml.Interface> {
            return <org.eclipse.emf.common.util.EList<uml.Interface>><any>this.eGet(uml.UmlPackage.eINSTANCE.getPort_Provided(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getRedefinedPort() : org.eclipse.emf.common.util.EList<uml.Port> {
            return <org.eclipse.emf.common.util.EList<uml.Port>><any>this.eGet(uml.UmlPackage.eINSTANCE.getPort_RedefinedPort(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getRequired() : org.eclipse.emf.common.util.EList<uml.Interface> {
            return <org.eclipse.emf.common.util.EList<uml.Interface>><any>this.eGet(uml.UmlPackage.eINSTANCE.getPort_Required(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public port_aggregation(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.PORT__PORT_AGGREGATION, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["port_aggregation", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
                }
                return false;
            }
            return true;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public default_value(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.PORT__DEFAULT_VALUE, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["default_value", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
                }
                return false;
            }
            return true;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public encapsulated_owner(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.PORT__ENCAPSULATED_OWNER, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["encapsulated_owner", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
                }
                return false;
            }
            return true;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getProvideds() : org.eclipse.emf.common.util.EList<uml.Interface> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getRequireds() : org.eclipse.emf.common.util.EList<uml.Interface> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public basicProvided() : org.eclipse.emf.common.util.EList<uml.Interface> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public basicRequired() : org.eclipse.emf.common.util.EList<uml.Interface> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {number} operationID
         * @param {*} arguments
         * @return {*}
         */
        public eInvoke(operationID : number, __arguments : org.eclipse.emf.common.util.EList<any>) : any {
            switch((operationID)) {
            case uml.UmlPackage.PORT___PORT_AGGREGATION__DIAGNOSTICCHAIN_MAP:
                return this.port_aggregation(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.PORT___DEFAULT_VALUE__DIAGNOSTICCHAIN_MAP:
                return this.default_value(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.PORT___ENCAPSULATED_OWNER__DIAGNOSTICCHAIN_MAP:
                return this.encapsulated_owner(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.PORT___GET_PROVIDEDS:
                return this.getProvideds();
            case uml.UmlPackage.PORT___GET_REQUIREDS:
                return this.getRequireds();
            case uml.UmlPackage.PORT___BASIC_PROVIDED:
                return this.basicProvided();
            case uml.UmlPackage.PORT___BASIC_REQUIRED:
                return this.basicRequired();
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    PortImpl["__class"] = "uml.impl.PortImpl";
    PortImpl["__interfaces"] = ["ecore4m.EModelElement","uml.TypedElement","uml.Feature","org.eclipse.emf.ecore.EObject","uml.NamedElement","uml.StructuralFeature","org.eclipse.emf.common.notify.Notifier","uml.Property","uml.MultiplicityElement","uml.Port","uml.RedefinableElement","uml.ParameterableElement","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","uml.ConnectableElement","uml.DeploymentTarget","org.eclipse.emf.ecore.InternalEObject"];


}

