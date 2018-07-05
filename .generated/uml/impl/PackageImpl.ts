/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Package</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.PackageImpl#getOwningTemplateParameter}</li>
     * <li>{@link uml.impl.PackageImpl#getTemplateParameter}</li>
     * <li>{@link uml.impl.PackageImpl#getTemplateBinding}</li>
     * <li>{@link uml.impl.PackageImpl#getOwnedTemplateSignature}</li>
     * <li>{@link uml.impl.PackageImpl#getURI}</li>
     * <li>{@link uml.impl.PackageImpl#getNestedPackage}</li>
     * <li>{@link uml.impl.PackageImpl#getNestingPackage}</li>
     * <li>{@link uml.impl.PackageImpl#getOwnedStereotype}</li>
     * <li>{@link uml.impl.PackageImpl#getOwnedType}</li>
     * <li>{@link uml.impl.PackageImpl#getPackageMerge}</li>
     * <li>{@link uml.impl.PackageImpl#getPackagedElement}</li>
     * <li>{@link uml.impl.PackageImpl#getProfileApplication}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.NamespaceImpl
     * @class
     */
    export class PackageImpl extends uml.impl.NamespaceImpl implements uml.Package {
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
            return uml.UmlPackage.eINSTANCE.getPackage();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getOwningTemplateParameter() : uml.TemplateParameter {
            return <uml.TemplateParameter><any>this.eGet(uml.UmlPackage.eINSTANCE.getParameterableElement_OwningTemplateParameter(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newOwningTemplateParameter
         */
        public setOwningTemplateParameter(newOwningTemplateParameter : uml.TemplateParameter) {
            this.eSet(uml.UmlPackage.eINSTANCE.getParameterableElement_OwningTemplateParameter(), newOwningTemplateParameter);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getTemplateParameter() : uml.TemplateParameter {
            return <uml.TemplateParameter><any>this.eGet(uml.UmlPackage.eINSTANCE.getParameterableElement_TemplateParameter(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newTemplateParameter
         */
        public setTemplateParameter(newTemplateParameter : uml.TemplateParameter) {
            this.eSet(uml.UmlPackage.eINSTANCE.getParameterableElement_TemplateParameter(), newTemplateParameter);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getTemplateBinding() : org.eclipse.emf.common.util.EList<uml.TemplateBinding> {
            return <org.eclipse.emf.common.util.EList<uml.TemplateBinding>><any>this.eGet(uml.UmlPackage.eINSTANCE.getTemplateableElement_TemplateBinding(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getOwnedTemplateSignature() : uml.TemplateSignature {
            return <uml.TemplateSignature><any>this.eGet(uml.UmlPackage.eINSTANCE.getTemplateableElement_OwnedTemplateSignature(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newOwnedTemplateSignature
         */
        public setOwnedTemplateSignature(newOwnedTemplateSignature : uml.TemplateSignature) {
            this.eSet(uml.UmlPackage.eINSTANCE.getTemplateableElement_OwnedTemplateSignature(), newOwnedTemplateSignature);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {string}
         */
        public getURI() : string {
            return <string>this.eGet(uml.UmlPackage.eINSTANCE.getPackage_URI(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {string} newURI
         */
        public setURI(newURI : string) {
            this.eSet(uml.UmlPackage.eINSTANCE.getPackage_URI(), newURI);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getNestedPackage() : org.eclipse.emf.common.util.EList<uml.Package> {
            return <org.eclipse.emf.common.util.EList<uml.Package>><any>this.eGet(uml.UmlPackage.eINSTANCE.getPackage_NestedPackage(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getNestingPackage() : uml.Package {
            return <uml.Package><any>this.eGet(uml.UmlPackage.eINSTANCE.getPackage_NestingPackage(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newNestingPackage
         */
        public setNestingPackage(newNestingPackage : uml.Package) {
            this.eSet(uml.UmlPackage.eINSTANCE.getPackage_NestingPackage(), newNestingPackage);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getOwnedStereotype() : org.eclipse.emf.common.util.EList<uml.Stereotype> {
            return <org.eclipse.emf.common.util.EList<uml.Stereotype>><any>this.eGet(uml.UmlPackage.eINSTANCE.getPackage_OwnedStereotype(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getOwnedType() : org.eclipse.emf.common.util.EList<uml.Type> {
            return <org.eclipse.emf.common.util.EList<uml.Type>><any>this.eGet(uml.UmlPackage.eINSTANCE.getPackage_OwnedType(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getPackageMerge() : org.eclipse.emf.common.util.EList<uml.PackageMerge> {
            return <org.eclipse.emf.common.util.EList<uml.PackageMerge>><any>this.eGet(uml.UmlPackage.eINSTANCE.getPackage_PackageMerge(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getPackagedElement() : org.eclipse.emf.common.util.EList<uml.PackageableElement> {
            return <org.eclipse.emf.common.util.EList<uml.PackageableElement>><any>this.eGet(uml.UmlPackage.eINSTANCE.getPackage_PackagedElement(), true);
        }

        public getProfileApplication$() : org.eclipse.emf.common.util.EList<uml.ProfileApplication> {
            return <org.eclipse.emf.common.util.EList<uml.ProfileApplication>><any>this.eGet(uml.UmlPackage.eINSTANCE.getPackage_ProfileApplication(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public elements_public_or_private(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.PACKAGE__ELEMENTS_PUBLIC_OR_PRIVATE, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["elements_public_or_private", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
                }
                return false;
            }
            return true;
        }

        public applyProfiles$uml_Profile(profile : uml.Profile) : org.eclipse.emf.common.util.EList<org.eclipse.emf.ecore.EObject> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} profile
         * @return {*}
         */
        public applyProfiles(profile? : any) : any {
            if(((profile != null && (profile["__interfaces"] != null && profile["__interfaces"].indexOf("uml.Profile") >= 0 || profile.constructor != null && profile.constructor["__interfaces"] != null && profile.constructor["__interfaces"].indexOf("uml.Profile") >= 0)) || profile === null)) {
                return <any>this.applyProfiles$uml_Profile(profile);
            } else if(((profile != null && (profile["__interfaces"] != null && profile["__interfaces"].indexOf("org.eclipse.emf.common.util.EList") >= 0 || profile.constructor != null && profile.constructor["__interfaces"] != null && profile.constructor["__interfaces"].indexOf("org.eclipse.emf.common.util.EList") >= 0)) || profile === null)) {
                return <any>this.applyProfiles$org_eclipse_emf_common_util_EList(profile);
            } else throw new Error('invalid overload');
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {string} name
         * @param {boolean} isAbstract
         * @return {*}
         */
        public createOwnedClass(name : string, isAbstract : boolean) : uml.Class {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {string} name
         * @return {*}
         */
        public createOwnedEnumeration(name : string) : uml.Enumeration {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {string} name
         * @return {*}
         */
        public createOwnedInterface(name : string) : uml.Interface {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {string} name
         * @return {*}
         */
        public createOwnedPrimitiveType(name : string) : uml.PrimitiveType {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {string} name
         * @param {boolean} isAbstract
         * @return {*}
         */
        public createOwnedStereotype(name : string, isAbstract : boolean) : uml.Stereotype {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getAllAppliedProfiles() : org.eclipse.emf.common.util.EList<uml.Profile> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getAllProfileApplications() : org.eclipse.emf.common.util.EList<uml.ProfileApplication> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        public getAppliedProfile$java_lang_String(qualifiedName : string) : uml.Profile {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        public getAppliedProfile$java_lang_String$boolean(qualifiedName : string, recurse : boolean) : uml.Profile {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {string} qualifiedName
         * @param {boolean} recurse
         * @return {*}
         */
        public getAppliedProfile(qualifiedName? : any, recurse? : any) : any {
            if(((typeof qualifiedName === 'string') || qualifiedName === null) && ((typeof recurse === 'boolean') || recurse === null)) {
                return <any>this.getAppliedProfile$java_lang_String$boolean(qualifiedName, recurse);
            } else if(((typeof qualifiedName === 'string') || qualifiedName === null) && recurse === undefined) {
                return <any>this.getAppliedProfile$java_lang_String(qualifiedName);
            } else throw new Error('invalid overload');
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getAppliedProfiles() : org.eclipse.emf.common.util.EList<uml.Profile> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        public getProfileApplication$uml_Profile(profile : uml.Profile) : uml.ProfileApplication {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        public getProfileApplication$uml_Profile$boolean(profile : uml.Profile, recurse : boolean) : uml.ProfileApplication {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} profile
         * @param {boolean} recurse
         * @return {*}
         */
        public getProfileApplication(profile? : any, recurse? : any) : any {
            if(((profile != null && (profile["__interfaces"] != null && profile["__interfaces"].indexOf("uml.Profile") >= 0 || profile.constructor != null && profile.constructor["__interfaces"] != null && profile.constructor["__interfaces"].indexOf("uml.Profile") >= 0)) || profile === null) && ((typeof recurse === 'boolean') || recurse === null)) {
                return <any>this.getProfileApplication$uml_Profile$boolean(profile, recurse);
            } else if(((profile != null && (profile["__interfaces"] != null && profile["__interfaces"].indexOf("uml.Profile") >= 0 || profile.constructor != null && profile.constructor["__interfaces"] != null && profile.constructor["__interfaces"].indexOf("uml.Profile") >= 0)) || profile === null) && recurse === undefined) {
                return <any>this.getProfileApplication$uml_Profile(profile);
            } else if(profile === undefined && recurse === undefined) {
                return <any>this.getProfileApplication$();
            } else throw new Error('invalid overload');
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isModelLibrary() : boolean {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} profile
         * @return {boolean}
         */
        public isProfileApplied(profile : uml.Profile) : boolean {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} profile
         * @return {*}
         */
        public unapplyProfiles(profile : uml.Profile) : org.eclipse.emf.common.util.EList<org.eclipse.emf.ecore.EObject> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        public applyProfiles$org_eclipse_emf_common_util_EList(profiles : org.eclipse.emf.common.util.EList<uml.Profile>) : org.eclipse.emf.common.util.EList<org.eclipse.emf.ecore.EObject> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public allApplicableStereotypes() : org.eclipse.emf.common.util.EList<uml.Stereotype> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
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
         * @param {*} el
         * @return {boolean}
         */
        public makesVisible(el : uml.NamedElement) : boolean {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getNestedPackages() : org.eclipse.emf.common.util.EList<uml.Package> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getOwnedStereotypes() : org.eclipse.emf.common.util.EList<uml.Stereotype> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getOwnedTypes() : org.eclipse.emf.common.util.EList<uml.Type> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public visibleMembers() : org.eclipse.emf.common.util.EList<uml.PackageableElement> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isTemplate() : boolean {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public parameterableElements() : org.eclipse.emf.common.util.EList<uml.ParameterableElement> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public namespace_needs_visibility(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.PACKAGEABLE_ELEMENT__NAMESPACE_NEEDS_VISIBILITY, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["namespace_needs_visibility", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
                }
                return false;
            }
            return true;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} p
         * @return {boolean}
         */
        public isCompatibleWith(p : uml.ParameterableElement) : boolean {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isTemplateParameter() : boolean {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {number} derivedFeatureID
         * @param {*} baseClass
         * @return {number}
         */
        public eBaseStructuralFeatureID(derivedFeatureID : number, baseClass : any) : number {
            if(baseClass === "uml.ParameterableElement") {
                switch((derivedFeatureID)) {
                case uml.UmlPackage.PACKAGE__OWNING_TEMPLATE_PARAMETER:
                    return uml.UmlPackage.PARAMETERABLE_ELEMENT__OWNING_TEMPLATE_PARAMETER;
                case uml.UmlPackage.PACKAGE__TEMPLATE_PARAMETER:
                    return uml.UmlPackage.PARAMETERABLE_ELEMENT__TEMPLATE_PARAMETER;
                default:
                    return -1;
                }
            }
            if(baseClass === "uml.PackageableElement") {
                switch((derivedFeatureID)) {
                default:
                    return -1;
                }
            }
            if(baseClass === "uml.TemplateableElement") {
                switch((derivedFeatureID)) {
                case uml.UmlPackage.PACKAGE__TEMPLATE_BINDING:
                    return uml.UmlPackage.TEMPLATEABLE_ELEMENT__TEMPLATE_BINDING;
                case uml.UmlPackage.PACKAGE__OWNED_TEMPLATE_SIGNATURE:
                    return uml.UmlPackage.TEMPLATEABLE_ELEMENT__OWNED_TEMPLATE_SIGNATURE;
                default:
                    return -1;
                }
            }
            return super.eBaseStructuralFeatureID(derivedFeatureID, baseClass);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {number} baseFeatureID
         * @param {*} baseClass
         * @return {number}
         */
        public eDerivedStructuralFeatureID(baseFeatureID : number, baseClass : any) : number {
            if(baseClass === "uml.ParameterableElement") {
                switch((baseFeatureID)) {
                case uml.UmlPackage.PARAMETERABLE_ELEMENT__OWNING_TEMPLATE_PARAMETER:
                    return uml.UmlPackage.PACKAGE__OWNING_TEMPLATE_PARAMETER;
                case uml.UmlPackage.PARAMETERABLE_ELEMENT__TEMPLATE_PARAMETER:
                    return uml.UmlPackage.PACKAGE__TEMPLATE_PARAMETER;
                default:
                    return -1;
                }
            }
            if(baseClass === "uml.PackageableElement") {
                switch((baseFeatureID)) {
                default:
                    return -1;
                }
            }
            if(baseClass === "uml.TemplateableElement") {
                switch((baseFeatureID)) {
                case uml.UmlPackage.TEMPLATEABLE_ELEMENT__TEMPLATE_BINDING:
                    return uml.UmlPackage.PACKAGE__TEMPLATE_BINDING;
                case uml.UmlPackage.TEMPLATEABLE_ELEMENT__OWNED_TEMPLATE_SIGNATURE:
                    return uml.UmlPackage.PACKAGE__OWNED_TEMPLATE_SIGNATURE;
                default:
                    return -1;
                }
            }
            return super.eDerivedStructuralFeatureID(baseFeatureID, baseClass);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {number} baseOperationID
         * @param {*} baseClass
         * @return {number}
         */
        public eDerivedOperationID(baseOperationID : number, baseClass : any) : number {
            if(baseClass === "uml.ParameterableElement") {
                switch((baseOperationID)) {
                case uml.UmlPackage.PARAMETERABLE_ELEMENT___IS_COMPATIBLE_WITH__PARAMETERABLEELEMENT:
                    return uml.UmlPackage.PACKAGE___IS_COMPATIBLE_WITH__PARAMETERABLEELEMENT;
                case uml.UmlPackage.PARAMETERABLE_ELEMENT___IS_TEMPLATE_PARAMETER:
                    return uml.UmlPackage.PACKAGE___IS_TEMPLATE_PARAMETER;
                default:
                    return -1;
                }
            }
            if(baseClass === "uml.PackageableElement") {
                switch((baseOperationID)) {
                case uml.UmlPackage.PACKAGEABLE_ELEMENT___NAMESPACE_NEEDS_VISIBILITY__DIAGNOSTICCHAIN_MAP:
                    return uml.UmlPackage.PACKAGE___NAMESPACE_NEEDS_VISIBILITY__DIAGNOSTICCHAIN_MAP;
                default:
                    return -1;
                }
            }
            if(baseClass === "uml.TemplateableElement") {
                switch((baseOperationID)) {
                case uml.UmlPackage.TEMPLATEABLE_ELEMENT___IS_TEMPLATE:
                    return uml.UmlPackage.PACKAGE___IS_TEMPLATE;
                case uml.UmlPackage.TEMPLATEABLE_ELEMENT___PARAMETERABLE_ELEMENTS:
                    return uml.UmlPackage.PACKAGE___PARAMETERABLE_ELEMENTS;
                default:
                    return -1;
                }
            }
            return super.eDerivedOperationID(baseOperationID, baseClass);
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
            case uml.UmlPackage.PACKAGE___ELEMENTS_PUBLIC_OR_PRIVATE__DIAGNOSTICCHAIN_MAP:
                return this.elements_public_or_private(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.PACKAGE___APPLY_PROFILE__PROFILE:
                return this.applyProfiles$uml_Profile(<any>__arguments.get(0));
            case uml.UmlPackage.PACKAGE___CREATE_OWNED_CLASS__STRING_BOOLEAN:
                return this.createOwnedClass(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.PACKAGE___CREATE_OWNED_ENUMERATION__STRING:
                return this.createOwnedEnumeration(<any>__arguments.get(0));
            case uml.UmlPackage.PACKAGE___CREATE_OWNED_INTERFACE__STRING:
                return this.createOwnedInterface(<any>__arguments.get(0));
            case uml.UmlPackage.PACKAGE___CREATE_OWNED_PRIMITIVE_TYPE__STRING:
                return this.createOwnedPrimitiveType(<any>__arguments.get(0));
            case uml.UmlPackage.PACKAGE___CREATE_OWNED_STEREOTYPE__STRING_BOOLEAN:
                return this.createOwnedStereotype(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.PACKAGE___GET_ALL_APPLIED_PROFILES:
                return this.getAllAppliedProfiles();
            case uml.UmlPackage.PACKAGE___GET_ALL_PROFILE_APPLICATIONS:
                return this.getAllProfileApplications();
            case uml.UmlPackage.PACKAGE___GET_APPLIED_PROFILE__STRING:
                return this.getAppliedProfile$java_lang_String(<any>__arguments.get(0));
            case uml.UmlPackage.PACKAGE___GET_APPLIED_PROFILE__STRING_BOOLEAN:
                return this.getAppliedProfile$java_lang_String$boolean(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.PACKAGE___GET_APPLIED_PROFILES:
                return this.getAppliedProfiles();
            case uml.UmlPackage.PACKAGE___GET_PROFILE_APPLICATION__PROFILE:
                return this.getProfileApplication$uml_Profile(<any>__arguments.get(0));
            case uml.UmlPackage.PACKAGE___GET_PROFILE_APPLICATION__PROFILE_BOOLEAN:
                return this.getProfileApplication$uml_Profile$boolean(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.PACKAGE___IS_MODEL_LIBRARY:
                return this.isModelLibrary();
            case uml.UmlPackage.PACKAGE___IS_PROFILE_APPLIED__PROFILE:
                return this.isProfileApplied(<any>__arguments.get(0));
            case uml.UmlPackage.PACKAGE___UNAPPLY_PROFILE__PROFILE:
                return this.unapplyProfiles(<any>__arguments.get(0));
            case uml.UmlPackage.PACKAGE___APPLY_PROFILES__ELIST:
                return this.applyProfiles$org_eclipse_emf_common_util_EList(<any>__arguments.get(0));
            case uml.UmlPackage.PACKAGE___ALL_APPLICABLE_STEREOTYPES:
                return this.allApplicableStereotypes();
            case uml.UmlPackage.PACKAGE___CONTAINING_PROFILE:
                return this.containingProfile();
            case uml.UmlPackage.PACKAGE___MAKES_VISIBLE__NAMEDELEMENT:
                return this.makesVisible(<any>__arguments.get(0));
            case uml.UmlPackage.PACKAGE___GET_NESTED_PACKAGES:
                return this.getNestedPackages();
            case uml.UmlPackage.PACKAGE___GET_OWNED_STEREOTYPES:
                return this.getOwnedStereotypes();
            case uml.UmlPackage.PACKAGE___GET_OWNED_TYPES:
                return this.getOwnedTypes();
            case uml.UmlPackage.PACKAGE___VISIBLE_MEMBERS:
                return this.visibleMembers();
            case uml.UmlPackage.PACKAGE___IS_TEMPLATE:
                return this.isTemplate();
            case uml.UmlPackage.PACKAGE___PARAMETERABLE_ELEMENTS:
                return this.parameterableElements();
            case uml.UmlPackage.PACKAGE___NAMESPACE_NEEDS_VISIBILITY__DIAGNOSTICCHAIN_MAP:
                return this.namespace_needs_visibility(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.PACKAGE___IS_COMPATIBLE_WITH__PARAMETERABLEELEMENT:
                return this.isCompatibleWith(<any>__arguments.get(0));
            case uml.UmlPackage.PACKAGE___IS_TEMPLATE_PARAMETER:
                return this.isTemplateParameter();
            }
            return super.eInvoke(operationID, __arguments);
        }

        /**
         * 
         * @param {*} profile
         * @return {*}
         */
        public applyProfile(profile : uml.Profile) : org.eclipse.emf.common.util.EList<org.eclipse.emf.ecore.EObject> {
            return null;
        }

        /**
         * 
         * @param {*} profile
         * @return {*}
         */
        public unapplyProfile(profile : uml.Profile) : org.eclipse.emf.common.util.EList<org.eclipse.emf.ecore.EObject> {
            return null;
        }
    }
    PackageImpl["__class"] = "uml.impl.PackageImpl";
    PackageImpl["__interfaces"] = ["ecore4m.EModelElement","uml.Namespace","org.eclipse.emf.ecore.EObject","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","uml.Package","uml.ParameterableElement","uml.PackageableElement","uml.TemplateableElement","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.InternalEObject"];


}

