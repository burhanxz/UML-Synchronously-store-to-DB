/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Opaque Action</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.OpaqueActionImpl#getBody}</li>
     * <li>{@link uml.impl.OpaqueActionImpl#getInputValue}</li>
     * <li>{@link uml.impl.OpaqueActionImpl#getLanguage}</li>
     * <li>{@link uml.impl.OpaqueActionImpl#getOutputValue}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.ActionImpl
     * @class
     */
    export class OpaqueActionImpl extends uml.impl.ActionImpl implements uml.OpaqueAction {
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
            return uml.UmlPackage.eINSTANCE.getOpaqueAction();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getBody() : org.eclipse.emf.common.util.EList<string> {
            return <org.eclipse.emf.common.util.EList<string>><any>this.eGet(uml.UmlPackage.eINSTANCE.getOpaqueAction_Body(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        public unsetBody() {
            this.eUnset(uml.UmlPackage.eINSTANCE.getOpaqueAction_Body());
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isSetBody() : boolean {
            return this.eIsSet(uml.UmlPackage.eINSTANCE.getOpaqueAction_Body());
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getInputValue() : org.eclipse.emf.common.util.EList<uml.InputPin> {
            return <org.eclipse.emf.common.util.EList<uml.InputPin>><any>this.eGet(uml.UmlPackage.eINSTANCE.getOpaqueAction_InputValue(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getLanguage() : org.eclipse.emf.common.util.EList<string> {
            return <org.eclipse.emf.common.util.EList<string>><any>this.eGet(uml.UmlPackage.eINSTANCE.getOpaqueAction_Language(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        public unsetLanguage() {
            this.eUnset(uml.UmlPackage.eINSTANCE.getOpaqueAction_Language());
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isSetLanguage() : boolean {
            return this.eIsSet(uml.UmlPackage.eINSTANCE.getOpaqueAction_Language());
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getOutputValue() : org.eclipse.emf.common.util.EList<uml.OutputPin> {
            return <org.eclipse.emf.common.util.EList<uml.OutputPin>><any>this.eGet(uml.UmlPackage.eINSTANCE.getOpaqueAction_OutputValue(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public language_body_size(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.OPAQUE_ACTION__LANGUAGE_BODY_SIZE, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["language_body_size", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
            case uml.UmlPackage.OPAQUE_ACTION___LANGUAGE_BODY_SIZE__DIAGNOSTICCHAIN_MAP:
                return this.language_body_size(<any>__arguments.get(0), <any>__arguments.get(1));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    OpaqueActionImpl["__class"] = "uml.impl.OpaqueActionImpl";
    OpaqueActionImpl["__interfaces"] = ["ecore4m.EModelElement","org.eclipse.emf.ecore.EObject","uml.NamedElement","uml.ActivityContent","org.eclipse.emf.common.notify.Notifier","uml.ExecutableNode","uml.RedefinableElement","uml.Action","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","uml.ActivityNode","uml.OpaqueAction","org.eclipse.emf.ecore.InternalEObject"];


}

