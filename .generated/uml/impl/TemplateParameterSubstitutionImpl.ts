/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Template Parameter Substitution</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.TemplateParameterSubstitutionImpl#getActual}</li>
     * <li>{@link uml.impl.TemplateParameterSubstitutionImpl#getFormal}</li>
     * <li>{@link uml.impl.TemplateParameterSubstitutionImpl#getOwnedActual}</li>
     * <li>{@link uml.impl.TemplateParameterSubstitutionImpl#getTemplateBinding}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.ElementImpl
     * @class
     */
    export class TemplateParameterSubstitutionImpl extends uml.impl.ElementImpl implements uml.TemplateParameterSubstitution {
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
            return uml.UmlPackage.eINSTANCE.getTemplateParameterSubstitution();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getActual() : uml.ParameterableElement {
            return <uml.ParameterableElement><any>this.eGet(uml.UmlPackage.eINSTANCE.getTemplateParameterSubstitution_Actual(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newActual
         */
        public setActual(newActual : uml.ParameterableElement) {
            this.eSet(uml.UmlPackage.eINSTANCE.getTemplateParameterSubstitution_Actual(), newActual);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getFormal() : uml.TemplateParameter {
            return <uml.TemplateParameter><any>this.eGet(uml.UmlPackage.eINSTANCE.getTemplateParameterSubstitution_Formal(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newFormal
         */
        public setFormal(newFormal : uml.TemplateParameter) {
            this.eSet(uml.UmlPackage.eINSTANCE.getTemplateParameterSubstitution_Formal(), newFormal);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getOwnedActual() : uml.ParameterableElement {
            return <uml.ParameterableElement><any>this.eGet(uml.UmlPackage.eINSTANCE.getTemplateParameterSubstitution_OwnedActual(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newOwnedActual
         */
        public setOwnedActual(newOwnedActual : uml.ParameterableElement) {
            this.eSet(uml.UmlPackage.eINSTANCE.getTemplateParameterSubstitution_OwnedActual(), newOwnedActual);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getTemplateBinding() : uml.TemplateBinding {
            return <uml.TemplateBinding><any>this.eGet(uml.UmlPackage.eINSTANCE.getTemplateParameterSubstitution_TemplateBinding(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newTemplateBinding
         */
        public setTemplateBinding(newTemplateBinding : uml.TemplateBinding) {
            this.eSet(uml.UmlPackage.eINSTANCE.getTemplateParameterSubstitution_TemplateBinding(), newTemplateBinding);
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
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.TEMPLATE_PARAMETER_SUBSTITUTION__MUST_BE_COMPATIBLE, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["must_be_compatible", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
            case uml.UmlPackage.TEMPLATE_PARAMETER_SUBSTITUTION___MUST_BE_COMPATIBLE__DIAGNOSTICCHAIN_MAP:
                return this.must_be_compatible(<any>__arguments.get(0), <any>__arguments.get(1));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    TemplateParameterSubstitutionImpl["__class"] = "uml.impl.TemplateParameterSubstitutionImpl";
    TemplateParameterSubstitutionImpl["__interfaces"] = ["ecore4m.EModelElement","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","uml.TemplateParameterSubstitution","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

