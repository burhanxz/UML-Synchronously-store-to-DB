/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Template Parameter</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.TemplateParameterImpl#getDefault}</li>
     * <li>{@link uml.impl.TemplateParameterImpl#getOwnedDefault}</li>
     * <li>{@link uml.impl.TemplateParameterImpl#getParameteredElement}</li>
     * <li>{@link uml.impl.TemplateParameterImpl#getSignature}</li>
     * <li>{@link uml.impl.TemplateParameterImpl#getOwnedParameteredElement}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.ElementImpl
     * @class
     */
    export class TemplateParameterImpl extends uml.impl.ElementImpl implements uml.TemplateParameter {
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
            return uml.UmlPackage.eINSTANCE.getTemplateParameter();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getDefault() : uml.ParameterableElement {
            return <uml.ParameterableElement><any>this.eGet(uml.UmlPackage.eINSTANCE.getTemplateParameter_Default(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newDefault
         */
        public setDefault(newDefault : uml.ParameterableElement) {
            this.eSet(uml.UmlPackage.eINSTANCE.getTemplateParameter_Default(), newDefault);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getOwnedDefault() : uml.ParameterableElement {
            return <uml.ParameterableElement><any>this.eGet(uml.UmlPackage.eINSTANCE.getTemplateParameter_OwnedDefault(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newOwnedDefault
         */
        public setOwnedDefault(newOwnedDefault : uml.ParameterableElement) {
            this.eSet(uml.UmlPackage.eINSTANCE.getTemplateParameter_OwnedDefault(), newOwnedDefault);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getParameteredElement() : uml.ParameterableElement {
            return <uml.ParameterableElement><any>this.eGet(uml.UmlPackage.eINSTANCE.getTemplateParameter_ParameteredElement(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newParameteredElement
         */
        public setParameteredElement(newParameteredElement : uml.ParameterableElement) {
            this.eSet(uml.UmlPackage.eINSTANCE.getTemplateParameter_ParameteredElement(), newParameteredElement);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getSignature() : uml.TemplateSignature {
            return <uml.TemplateSignature><any>this.eGet(uml.UmlPackage.eINSTANCE.getTemplateParameter_Signature(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newSignature
         */
        public setSignature(newSignature : uml.TemplateSignature) {
            this.eSet(uml.UmlPackage.eINSTANCE.getTemplateParameter_Signature(), newSignature);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getOwnedParameteredElement() : uml.ParameterableElement {
            return <uml.ParameterableElement><any>this.eGet(uml.UmlPackage.eINSTANCE.getTemplateParameter_OwnedParameteredElement(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newOwnedParameteredElement
         */
        public setOwnedParameteredElement(newOwnedParameteredElement : uml.ParameterableElement) {
            this.eSet(uml.UmlPackage.eINSTANCE.getTemplateParameter_OwnedParameteredElement(), newOwnedParameteredElement);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public must_be_compatible(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.TEMPLATE_PARAMETER__MUST_BE_COMPATIBLE, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["must_be_compatible", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
            case uml.UmlPackage.TEMPLATE_PARAMETER___MUST_BE_COMPATIBLE__DIAGNOSTICCHAIN_MAP:
                return this.must_be_compatible(<any>__arguments.get(0), <any>__arguments.get(1));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    TemplateParameterImpl["__class"] = "uml.impl.TemplateParameterImpl";
    TemplateParameterImpl["__interfaces"] = ["ecore4m.EModelElement","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","uml.TemplateParameter","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

