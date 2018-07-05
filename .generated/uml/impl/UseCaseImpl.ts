/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Use Case</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.UseCaseImpl#getExtend}</li>
     * <li>{@link uml.impl.UseCaseImpl#getExtensionPoint}</li>
     * <li>{@link uml.impl.UseCaseImpl#getInclude}</li>
     * <li>{@link uml.impl.UseCaseImpl#getSubject}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.BehavioredClassifierImpl
     * @class
     */
    export class UseCaseImpl extends uml.impl.BehavioredClassifierImpl implements uml.UseCase {
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
            return uml.UmlPackage.eINSTANCE.getUseCase();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getExtend() : org.eclipse.emf.common.util.EList<uml.Extend> {
            return <org.eclipse.emf.common.util.EList<uml.Extend>><any>this.eGet(uml.UmlPackage.eINSTANCE.getUseCase_Extend(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getExtensionPoint() : org.eclipse.emf.common.util.EList<uml.ExtensionPoint> {
            return <org.eclipse.emf.common.util.EList<uml.ExtensionPoint>><any>this.eGet(uml.UmlPackage.eINSTANCE.getUseCase_ExtensionPoint(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getInclude() : org.eclipse.emf.common.util.EList<uml.Include> {
            return <org.eclipse.emf.common.util.EList<uml.Include>><any>this.eGet(uml.UmlPackage.eINSTANCE.getUseCase_Include(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getSubject() : org.eclipse.emf.common.util.EList<uml.Classifier> {
            return <org.eclipse.emf.common.util.EList<uml.Classifier>><any>this.eGet(uml.UmlPackage.eINSTANCE.getUseCase_Subject(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public binary_associations(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.USE_CASE__BINARY_ASSOCIATIONS, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["binary_associations", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public no_association_to_use_case(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.USE_CASE__NO_ASSOCIATION_TO_USE_CASE, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["no_association_to_use_case", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public cannot_include_self(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.USE_CASE__CANNOT_INCLUDE_SELF, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["cannot_include_self", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public must_have_name(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.USE_CASE__MUST_HAVE_NAME, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["must_have_name", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public allIncludedUseCases() : org.eclipse.emf.common.util.EList<uml.UseCase> {
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
            case uml.UmlPackage.USE_CASE___BINARY_ASSOCIATIONS__DIAGNOSTICCHAIN_MAP:
                return this.binary_associations(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.USE_CASE___NO_ASSOCIATION_TO_USE_CASE__DIAGNOSTICCHAIN_MAP:
                return this.no_association_to_use_case(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.USE_CASE___CANNOT_INCLUDE_SELF__DIAGNOSTICCHAIN_MAP:
                return this.cannot_include_self(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.USE_CASE___MUST_HAVE_NAME__DIAGNOSTICCHAIN_MAP:
                return this.must_have_name(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.USE_CASE___ALL_INCLUDED_USE_CASES:
                return this.allIncludedUseCases();
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    UseCaseImpl["__class"] = "uml.impl.UseCaseImpl";
    UseCaseImpl["__interfaces"] = ["uml.UseCase","uml.Classifier","ecore4m.EModelElement","uml.Namespace","org.eclipse.emf.ecore.EObject","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","uml.BehavioredClassifier","uml.RedefinableElement","uml.ParameterableElement","uml.PackageableElement","uml.TemplateableElement","org.eclipse.emf.ecore.EModelElement","uml.Type","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.InternalEObject"];


}

