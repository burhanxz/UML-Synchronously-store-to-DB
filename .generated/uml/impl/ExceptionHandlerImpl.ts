/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Exception Handler</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.ExceptionHandlerImpl#getExceptionInput}</li>
     * <li>{@link uml.impl.ExceptionHandlerImpl#getExceptionType}</li>
     * <li>{@link uml.impl.ExceptionHandlerImpl#getHandlerBody}</li>
     * <li>{@link uml.impl.ExceptionHandlerImpl#getProtectedNode}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.ElementImpl
     * @class
     */
    export class ExceptionHandlerImpl extends uml.impl.ElementImpl implements uml.ExceptionHandler {
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
            return uml.UmlPackage.eINSTANCE.getExceptionHandler();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getExceptionInput() : uml.ObjectNode {
            return <uml.ObjectNode><any>this.eGet(uml.UmlPackage.eINSTANCE.getExceptionHandler_ExceptionInput(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newExceptionInput
         */
        public setExceptionInput(newExceptionInput : uml.ObjectNode) {
            this.eSet(uml.UmlPackage.eINSTANCE.getExceptionHandler_ExceptionInput(), newExceptionInput);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getExceptionType() : org.eclipse.emf.common.util.EList<uml.Classifier> {
            return <org.eclipse.emf.common.util.EList<uml.Classifier>><any>this.eGet(uml.UmlPackage.eINSTANCE.getExceptionHandler_ExceptionType(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getHandlerBody() : uml.ExecutableNode {
            return <uml.ExecutableNode><any>this.eGet(uml.UmlPackage.eINSTANCE.getExceptionHandler_HandlerBody(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newHandlerBody
         */
        public setHandlerBody(newHandlerBody : uml.ExecutableNode) {
            this.eSet(uml.UmlPackage.eINSTANCE.getExceptionHandler_HandlerBody(), newHandlerBody);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getProtectedNode() : uml.ExecutableNode {
            return <uml.ExecutableNode><any>this.eGet(uml.UmlPackage.eINSTANCE.getExceptionHandler_ProtectedNode(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newProtectedNode
         */
        public setProtectedNode(newProtectedNode : uml.ExecutableNode) {
            this.eSet(uml.UmlPackage.eINSTANCE.getExceptionHandler_ProtectedNode(), newProtectedNode);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public handler_body_edges(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.EXCEPTION_HANDLER__HANDLER_BODY_EDGES, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["handler_body_edges", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public output_pins(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.EXCEPTION_HANDLER__OUTPUT_PINS, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["output_pins", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public one_input(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.EXCEPTION_HANDLER__ONE_INPUT, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["one_input", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public edge_source_target(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.EXCEPTION_HANDLER__EDGE_SOURCE_TARGET, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["edge_source_target", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public handler_body_owner(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.EXCEPTION_HANDLER__HANDLER_BODY_OWNER, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["handler_body_owner", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public exception_input_type(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.EXCEPTION_HANDLER__EXCEPTION_INPUT_TYPE, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["exception_input_type", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
                }
                return false;
            }
            return true;
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
            case uml.UmlPackage.EXCEPTION_HANDLER___HANDLER_BODY_EDGES__DIAGNOSTICCHAIN_MAP:
                return this.handler_body_edges(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.EXCEPTION_HANDLER___OUTPUT_PINS__DIAGNOSTICCHAIN_MAP:
                return this.output_pins(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.EXCEPTION_HANDLER___ONE_INPUT__DIAGNOSTICCHAIN_MAP:
                return this.one_input(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.EXCEPTION_HANDLER___EDGE_SOURCE_TARGET__DIAGNOSTICCHAIN_MAP:
                return this.edge_source_target(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.EXCEPTION_HANDLER___HANDLER_BODY_OWNER__DIAGNOSTICCHAIN_MAP:
                return this.handler_body_owner(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.EXCEPTION_HANDLER___EXCEPTION_INPUT_TYPE__DIAGNOSTICCHAIN_MAP:
                return this.exception_input_type(<any>__arguments.get(0), <any>__arguments.get(1));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    ExceptionHandlerImpl["__class"] = "uml.impl.ExceptionHandlerImpl";
    ExceptionHandlerImpl["__interfaces"] = ["ecore4m.EModelElement","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","uml.ExceptionHandler","org.eclipse.emf.ecore.EObject","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

