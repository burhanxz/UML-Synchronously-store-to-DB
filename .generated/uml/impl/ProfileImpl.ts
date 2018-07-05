/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Profile</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.ProfileImpl#getMetaclassReference}</li>
     * <li>{@link uml.impl.ProfileImpl#getMetamodelReference}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.PackageImpl
     * @class
     */
    export class ProfileImpl extends uml.impl.PackageImpl implements uml.Profile {
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
            return uml.UmlPackage.eINSTANCE.getProfile();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getMetaclassReference() : org.eclipse.emf.common.util.EList<uml.ElementImport> {
            return <org.eclipse.emf.common.util.EList<uml.ElementImport>><any>this.eGet(uml.UmlPackage.eINSTANCE.getProfile_MetaclassReference(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getMetamodelReference() : org.eclipse.emf.common.util.EList<uml.PackageImport> {
            return <org.eclipse.emf.common.util.EList<uml.PackageImport>><any>this.eGet(uml.UmlPackage.eINSTANCE.getProfile_MetamodelReference(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public metaclass_reference_not_specialized(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.PROFILE__METACLASS_REFERENCE_NOT_SPECIALIZED, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["metaclass_reference_not_specialized", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public references_same_metamodel(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.PROFILE__REFERENCES_SAME_METAMODEL, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["references_same_metamodel", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
                }
                return false;
            }
            return true;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} classifier
         * @return {*}
         */
        public create(classifier : uml.Classifier) : org.eclipse.emf.ecore.EObject {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        public define$() : org.eclipse.emf.ecore.EPackage {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        public define$java_util_Map$org_eclipse_emf_common_util_DiagnosticChain$java_util_Map(options : any, diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : org.eclipse.emf.ecore.EPackage {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} options
         * @param {*} diagnostics
         * @param {*} context
         * @return {*}
         */
        public define(options? : any, diagnostics? : any, context? : any) : any {
            if(((options != null && (options instanceof Object)) || options === null) && ((diagnostics != null && (diagnostics["__interfaces"] != null && diagnostics["__interfaces"].indexOf("org.eclipse.emf.common.util.DiagnosticChain") >= 0 || diagnostics.constructor != null && diagnostics.constructor["__interfaces"] != null && diagnostics.constructor["__interfaces"].indexOf("org.eclipse.emf.common.util.DiagnosticChain") >= 0)) || diagnostics === null) && ((context != null && (context instanceof Object)) || context === null)) {
                return <any>this.define$java_util_Map$org_eclipse_emf_common_util_DiagnosticChain$java_util_Map(options, diagnostics, context);
            } else if(options === undefined && diagnostics === undefined && context === undefined) {
                return <any>this.define$();
            } else throw new Error('invalid overload');
        }

        public getDefinition$() : org.eclipse.emf.ecore.EPackage {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        public getDefinition$uml_NamedElement(namedElement : uml.NamedElement) : org.eclipse.emf.ecore.ENamedElement {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} namedElement
         * @return {*}
         */
        public getDefinition(namedElement? : any) : any {
            if(((namedElement != null && (namedElement["__interfaces"] != null && namedElement["__interfaces"].indexOf("uml.NamedElement") >= 0 || namedElement.constructor != null && namedElement.constructor["__interfaces"] != null && namedElement.constructor["__interfaces"].indexOf("uml.NamedElement") >= 0)) || namedElement === null)) {
                return <any>this.getDefinition$uml_NamedElement(namedElement);
            } else if(namedElement === undefined) {
                return <any>this.getDefinition$();
            } else throw new Error('invalid overload');
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {boolean} requiredOnly
         * @return {*}
         */
        public getOwnedExtensions(requiredOnly : boolean) : org.eclipse.emf.common.util.EList<uml.Extension> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getReferencedMetaclasses() : org.eclipse.emf.common.util.EList<uml.Class> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getReferencedMetamodels() : org.eclipse.emf.common.util.EList<uml.Model> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isDefined() : boolean {
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
            case uml.UmlPackage.PROFILE___METACLASS_REFERENCE_NOT_SPECIALIZED__DIAGNOSTICCHAIN_MAP:
                return this.metaclass_reference_not_specialized(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.PROFILE___REFERENCES_SAME_METAMODEL__DIAGNOSTICCHAIN_MAP:
                return this.references_same_metamodel(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.PROFILE___CREATE__CLASSIFIER:
                return this.create(<any>__arguments.get(0));
            case uml.UmlPackage.PROFILE___DEFINE:
                return this.define();
            case uml.UmlPackage.PROFILE___DEFINE__MAP_DIAGNOSTICCHAIN_MAP:
                return this.define$java_util_Map$org_eclipse_emf_common_util_DiagnosticChain$java_util_Map(<any>__arguments.get(0), <any>__arguments.get(1), <any>__arguments.get(2));
            case uml.UmlPackage.PROFILE___GET_DEFINITION:
                return this.getDefinition();
            case uml.UmlPackage.PROFILE___GET_DEFINITION__NAMEDELEMENT:
                return this.getDefinition$uml_NamedElement(<any>__arguments.get(0));
            case uml.UmlPackage.PROFILE___GET_OWNED_EXTENSIONS__BOOLEAN:
                return this.getOwnedExtensions(<any>__arguments.get(0));
            case uml.UmlPackage.PROFILE___GET_REFERENCED_METACLASSES:
                return this.getReferencedMetaclasses();
            case uml.UmlPackage.PROFILE___GET_REFERENCED_METAMODELS:
                return this.getReferencedMetamodels();
            case uml.UmlPackage.PROFILE___IS_DEFINED:
                return this.isDefined();
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    ProfileImpl["__class"] = "uml.impl.ProfileImpl";
    ProfileImpl["__interfaces"] = ["ecore4m.EModelElement","uml.Profile","uml.Namespace","org.eclipse.emf.ecore.EObject","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","uml.Package","uml.ParameterableElement","uml.PackageableElement","uml.TemplateableElement","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.InternalEObject"];


}

