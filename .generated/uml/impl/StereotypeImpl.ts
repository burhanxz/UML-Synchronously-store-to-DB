/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Stereotype</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.StereotypeImpl#getIcon}</li>
     * <li>{@link uml.impl.StereotypeImpl#getProfile}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.ClassImpl
     * @class
     */
    export class StereotypeImpl extends uml.impl.ClassImpl implements uml.Stereotype {
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
            return uml.UmlPackage.eINSTANCE.getStereotype();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getIcon() : org.eclipse.emf.common.util.EList<uml.Image> {
            return <org.eclipse.emf.common.util.EList<uml.Image>><any>this.eGet(uml.UmlPackage.eINSTANCE.getStereotype_Icon(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getProfile() : uml.Profile {
            return <uml.Profile><any>this.eGet(uml.UmlPackage.eINSTANCE.getStereotype_Profile(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public binaryAssociationsOnly(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.STEREOTYPE__BINARY_ASSOCIATIONS_ONLY, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["binaryAssociationsOnly", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public generalize(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.STEREOTYPE__GENERALIZE, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["generalize", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public name_not_clash(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.STEREOTYPE__NAME_NOT_CLASH, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["name_not_clash", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public associationEndOwnership(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.STEREOTYPE__ASSOCIATION_END_OWNERSHIP, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["associationEndOwnership", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public base_property_upper_bound(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.STEREOTYPE__BASE_PROPERTY_UPPER_BOUND, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["base_property_upper_bound", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public base_property_multiplicity_single_extension(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.STEREOTYPE__BASE_PROPERTY_MULTIPLICITY_SINGLE_EXTENSION, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["base_property_multiplicity_single_extension", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public base_property_multiplicity_multiple_extension(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.STEREOTYPE__BASE_PROPERTY_MULTIPLICITY_MULTIPLE_EXTENSION, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["base_property_multiplicity_multiple_extension", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
                }
                return false;
            }
            return true;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} metaclass
         * @param {boolean} isRequired
         * @return {*}
         */
        public createExtension(metaclass : uml.Class, isRequired : boolean) : uml.Extension {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        public createIcon$java_lang_String(location : string) : uml.Image {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        public createIcon$java_lang_String$java_lang_String(format : string, content : string) : uml.Image {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {string} format
         * @param {string} content
         * @return {*}
         */
        public createIcon(format? : any, content? : any) : any {
            if(((typeof format === 'string') || format === null) && ((typeof content === 'string') || content === null)) {
                return <any>this.createIcon$java_lang_String$java_lang_String(format, content);
            } else if(((typeof format === 'string') || format === null) && content === undefined) {
                return <any>this.createIcon$java_lang_String(format);
            } else throw new Error('invalid overload');
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getAllExtendedMetaclasses() : org.eclipse.emf.common.util.EList<uml.Class> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getDefinition() : org.eclipse.emf.ecore.EClass {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getExtendedMetaclasses() : org.eclipse.emf.common.util.EList<uml.Class> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        public getKeyword$() : string {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        public getKeyword$boolean(localize : boolean) : string {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {boolean} localize
         * @return {string}
         */
        public getKeyword(localize? : any) : any {
            if(((typeof localize === 'boolean') || localize === null)) {
                return <any>this.getKeyword$boolean(localize);
            } else if(localize === undefined) {
                return <any>this.getKeyword$();
            } else throw new Error('invalid overload');
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public containingProfile() : uml.Profile {
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
            case uml.UmlPackage.STEREOTYPE___BINARY_ASSOCIATIONS_ONLY__DIAGNOSTICCHAIN_MAP:
                return this.binaryAssociationsOnly(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.STEREOTYPE___GENERALIZE__DIAGNOSTICCHAIN_MAP:
                return this.generalize(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.STEREOTYPE___NAME_NOT_CLASH__DIAGNOSTICCHAIN_MAP:
                return this.name_not_clash(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.STEREOTYPE___ASSOCIATION_END_OWNERSHIP__DIAGNOSTICCHAIN_MAP:
                return this.associationEndOwnership(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.STEREOTYPE___BASE_PROPERTY_UPPER_BOUND__DIAGNOSTICCHAIN_MAP:
                return this.base_property_upper_bound(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.STEREOTYPE___BASE_PROPERTY_MULTIPLICITY_SINGLE_EXTENSION__DIAGNOSTICCHAIN_MAP:
                return this.base_property_multiplicity_single_extension(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.STEREOTYPE___BASE_PROPERTY_MULTIPLICITY_MULTIPLE_EXTENSION__DIAGNOSTICCHAIN_MAP:
                return this.base_property_multiplicity_multiple_extension(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.STEREOTYPE___CREATE_EXTENSION__CLASS_BOOLEAN:
                return this.createExtension(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.STEREOTYPE___CREATE_ICON__STRING:
                return this.createIcon$java_lang_String(<any>__arguments.get(0));
            case uml.UmlPackage.STEREOTYPE___CREATE_ICON__STRING_STRING:
                return this.createIcon$java_lang_String$java_lang_String(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.STEREOTYPE___GET_ALL_EXTENDED_METACLASSES:
                return this.getAllExtendedMetaclasses();
            case uml.UmlPackage.STEREOTYPE___GET_DEFINITION:
                return this.getDefinition();
            case uml.UmlPackage.STEREOTYPE___GET_EXTENDED_METACLASSES:
                return this.getExtendedMetaclasses();
            case uml.UmlPackage.STEREOTYPE___GET_KEYWORD:
                return this.getKeyword();
            case uml.UmlPackage.STEREOTYPE___GET_KEYWORD__BOOLEAN:
                return this.getKeyword$boolean(<any>__arguments.get(0));
            case uml.UmlPackage.STEREOTYPE___CONTAINING_PROFILE:
                return this.containingProfile();
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    StereotypeImpl["__class"] = "uml.impl.StereotypeImpl";
    StereotypeImpl["__interfaces"] = ["uml.Stereotype","uml.Classifier","ecore4m.EModelElement","uml.Namespace","org.eclipse.emf.ecore.EObject","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","uml.StructuredClassifier","uml.BehavioredClassifier","uml.RedefinableElement","uml.ParameterableElement","uml.PackageableElement","uml.EncapsulatedClassifier","uml.TemplateableElement","uml.Class","org.eclipse.emf.ecore.EModelElement","uml.Type","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.InternalEObject"];


}

