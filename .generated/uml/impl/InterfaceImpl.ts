/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Interface</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.InterfaceImpl#getNestedClassifier}</li>
     * <li>{@link uml.impl.InterfaceImpl#getOwnedAttribute}</li>
     * <li>{@link uml.impl.InterfaceImpl#getOwnedReception}</li>
     * <li>{@link uml.impl.InterfaceImpl#getProtocol}</li>
     * <li>{@link uml.impl.InterfaceImpl#getRedefinedInterface}</li>
     * <li>{@link uml.impl.InterfaceImpl#getOwnedOperation}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.ClassifierImpl
     * @class
     */
    export class InterfaceImpl extends uml.impl.ClassifierImpl implements uml.Interface {
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
            return uml.UmlPackage.eINSTANCE.getInterface();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getNestedClassifier() : org.eclipse.emf.common.util.EList<uml.Classifier> {
            return <org.eclipse.emf.common.util.EList<uml.Classifier>><any>this.eGet(uml.UmlPackage.eINSTANCE.getInterface_NestedClassifier(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getOwnedAttribute() : org.eclipse.emf.common.util.EList<uml.Property> {
            return <org.eclipse.emf.common.util.EList<uml.Property>><any>this.eGet(uml.UmlPackage.eINSTANCE.getInterface_OwnedAttribute(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getOwnedReception() : org.eclipse.emf.common.util.EList<uml.Reception> {
            return <org.eclipse.emf.common.util.EList<uml.Reception>><any>this.eGet(uml.UmlPackage.eINSTANCE.getInterface_OwnedReception(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getProtocol() : uml.ProtocolStateMachine {
            return <uml.ProtocolStateMachine><any>this.eGet(uml.UmlPackage.eINSTANCE.getInterface_Protocol(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newProtocol
         */
        public setProtocol(newProtocol : uml.ProtocolStateMachine) {
            this.eSet(uml.UmlPackage.eINSTANCE.getInterface_Protocol(), newProtocol);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getRedefinedInterface() : org.eclipse.emf.common.util.EList<uml.Interface> {
            return <org.eclipse.emf.common.util.EList<uml.Interface>><any>this.eGet(uml.UmlPackage.eINSTANCE.getInterface_RedefinedInterface(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getOwnedOperation() : org.eclipse.emf.common.util.EList<uml.Operation> {
            return <org.eclipse.emf.common.util.EList<uml.Operation>><any>this.eGet(uml.UmlPackage.eINSTANCE.getInterface_OwnedOperation(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public visibility(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.INTERFACE__VISIBILITY, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["visibility", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
                }
                return false;
            }
            return true;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {string} name
         * @param {*} type
         * @param {number} lower
         * @param {number} upper
         * @return {*}
         */
        public createOwnedAttribute(name : string, type : uml.Type, lower : number, upper : number) : uml.Property {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {string} name
         * @param {*} parameterNames
         * @param {*} parameterTypes
         * @param {*} returnType
         * @return {*}
         */
        public createOwnedOperation(name : string, parameterNames : org.eclipse.emf.common.util.EList<string>, parameterTypes : org.eclipse.emf.common.util.EList<uml.Type>, returnType : uml.Type) : uml.Operation {
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
            case uml.UmlPackage.INTERFACE___VISIBILITY__DIAGNOSTICCHAIN_MAP:
                return this.visibility(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.INTERFACE___CREATE_OWNED_ATTRIBUTE__STRING_TYPE_INT_INT:
                return this.createOwnedAttribute(<any>__arguments.get(0), <any>__arguments.get(1), <any>__arguments.get(2), <any>__arguments.get(3));
            case uml.UmlPackage.INTERFACE___CREATE_OWNED_OPERATION__STRING_ELIST_ELIST_TYPE:
                return this.createOwnedOperation(<any>__arguments.get(0), <any>__arguments.get(1), <any>__arguments.get(2), <any>__arguments.get(3));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    InterfaceImpl["__class"] = "uml.impl.InterfaceImpl";
    InterfaceImpl["__interfaces"] = ["uml.Classifier","ecore4m.EModelElement","uml.Interface","uml.Namespace","org.eclipse.emf.ecore.EObject","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","uml.RedefinableElement","uml.ParameterableElement","uml.PackageableElement","uml.TemplateableElement","org.eclipse.emf.ecore.EModelElement","uml.Type","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.InternalEObject"];


}

