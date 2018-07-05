/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Classifier</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.ClassifierImpl#isIsLeaf}</li>
     * <li>{@link uml.impl.ClassifierImpl#getRedefinedElement}</li>
     * <li>{@link uml.impl.ClassifierImpl#getRedefinitionContext}</li>
     * <li>{@link uml.impl.ClassifierImpl#getOwningTemplateParameter}</li>
     * <li>{@link uml.impl.ClassifierImpl#getTemplateParameter}</li>
     * <li>{@link uml.impl.ClassifierImpl#getPackage}</li>
     * <li>{@link uml.impl.ClassifierImpl#getTemplateBinding}</li>
     * <li>{@link uml.impl.ClassifierImpl#getOwnedTemplateSignature}</li>
     * <li>{@link uml.impl.ClassifierImpl#getFeature}</li>
     * <li>{@link uml.impl.ClassifierImpl#getAttribute}</li>
     * <li>{@link uml.impl.ClassifierImpl#getCollaborationUse}</li>
     * <li>{@link uml.impl.ClassifierImpl#getGeneral}</li>
     * <li>{@link uml.impl.ClassifierImpl#getGeneralization}</li>
     * <li>{@link uml.impl.ClassifierImpl#getPowertypeExtent}</li>
     * <li>{@link uml.impl.ClassifierImpl#getInheritedMember}</li>
     * <li>{@link uml.impl.ClassifierImpl#isIsAbstract}</li>
     * <li>{@link uml.impl.ClassifierImpl#isIsFinalSpecialization}</li>
     * <li>{@link uml.impl.ClassifierImpl#getOwnedUseCase}</li>
     * <li>{@link uml.impl.ClassifierImpl#getUseCase}</li>
     * <li>{@link uml.impl.ClassifierImpl#getRedefinedClassifier}</li>
     * <li>{@link uml.impl.ClassifierImpl#getRepresentation}</li>
     * <li>{@link uml.impl.ClassifierImpl#getSubstitution}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.NamespaceImpl
     * @class
     */
    export abstract class ClassifierImpl extends uml.impl.NamespaceImpl implements uml.Classifier {
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
            return uml.UmlPackage.eINSTANCE.getClassifier();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isIsLeaf() : boolean {
            return <boolean>this.eGet(uml.UmlPackage.eINSTANCE.getRedefinableElement_IsLeaf(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {boolean} newIsLeaf
         */
        public setIsLeaf(newIsLeaf : boolean) {
            this.eSet(uml.UmlPackage.eINSTANCE.getRedefinableElement_IsLeaf(), newIsLeaf);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getRedefinedElement() : org.eclipse.emf.common.util.EList<uml.RedefinableElement> {
            return <org.eclipse.emf.common.util.EList<uml.RedefinableElement>><any>this.eGet(uml.UmlPackage.eINSTANCE.getRedefinableElement_RedefinedElement(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getRedefinitionContext() : org.eclipse.emf.common.util.EList<uml.Classifier> {
            return <org.eclipse.emf.common.util.EList<uml.Classifier>><any>this.eGet(uml.UmlPackage.eINSTANCE.getRedefinableElement_RedefinitionContext(), true);
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
        public getPackage() : uml.Package {
            return <uml.Package><any>this.eGet(uml.UmlPackage.eINSTANCE.getType_Package(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newPackage
         */
        public setPackage(newPackage : uml.Package) {
            this.eSet(uml.UmlPackage.eINSTANCE.getType_Package(), newPackage);
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
         * @return {*}
         */
        public getFeature() : org.eclipse.emf.common.util.EList<uml.Feature> {
            return <org.eclipse.emf.common.util.EList<uml.Feature>><any>this.eGet(uml.UmlPackage.eINSTANCE.getClassifier_Feature(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getAttribute() : org.eclipse.emf.common.util.EList<uml.Property> {
            return <org.eclipse.emf.common.util.EList<uml.Property>><any>this.eGet(uml.UmlPackage.eINSTANCE.getClassifier_Attribute(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getCollaborationUse() : org.eclipse.emf.common.util.EList<uml.CollaborationUse> {
            return <org.eclipse.emf.common.util.EList<uml.CollaborationUse>><any>this.eGet(uml.UmlPackage.eINSTANCE.getClassifier_CollaborationUse(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getGeneral() : org.eclipse.emf.common.util.EList<uml.Classifier> {
            return <org.eclipse.emf.common.util.EList<uml.Classifier>><any>this.eGet(uml.UmlPackage.eINSTANCE.getClassifier_General(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getGeneralization() : org.eclipse.emf.common.util.EList<uml.Generalization> {
            return <org.eclipse.emf.common.util.EList<uml.Generalization>><any>this.eGet(uml.UmlPackage.eINSTANCE.getClassifier_Generalization(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getPowertypeExtent() : org.eclipse.emf.common.util.EList<uml.GeneralizationSet> {
            return <org.eclipse.emf.common.util.EList<uml.GeneralizationSet>><any>this.eGet(uml.UmlPackage.eINSTANCE.getClassifier_PowertypeExtent(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getInheritedMember() : org.eclipse.emf.common.util.EList<uml.NamedElement> {
            return <org.eclipse.emf.common.util.EList<uml.NamedElement>><any>this.eGet(uml.UmlPackage.eINSTANCE.getClassifier_InheritedMember(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isIsAbstract() : boolean {
            return <boolean>this.eGet(uml.UmlPackage.eINSTANCE.getClassifier_IsAbstract(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {boolean} newIsAbstract
         */
        public setIsAbstract(newIsAbstract : boolean) {
            this.eSet(uml.UmlPackage.eINSTANCE.getClassifier_IsAbstract(), newIsAbstract);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isIsFinalSpecialization() : boolean {
            return <boolean>this.eGet(uml.UmlPackage.eINSTANCE.getClassifier_IsFinalSpecialization(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {boolean} newIsFinalSpecialization
         */
        public setIsFinalSpecialization(newIsFinalSpecialization : boolean) {
            this.eSet(uml.UmlPackage.eINSTANCE.getClassifier_IsFinalSpecialization(), newIsFinalSpecialization);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getOwnedUseCase() : org.eclipse.emf.common.util.EList<uml.UseCase> {
            return <org.eclipse.emf.common.util.EList<uml.UseCase>><any>this.eGet(uml.UmlPackage.eINSTANCE.getClassifier_OwnedUseCase(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getUseCase() : org.eclipse.emf.common.util.EList<uml.UseCase> {
            return <org.eclipse.emf.common.util.EList<uml.UseCase>><any>this.eGet(uml.UmlPackage.eINSTANCE.getClassifier_UseCase(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getRedefinedClassifier() : org.eclipse.emf.common.util.EList<uml.Classifier> {
            return <org.eclipse.emf.common.util.EList<uml.Classifier>><any>this.eGet(uml.UmlPackage.eINSTANCE.getClassifier_RedefinedClassifier(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getRepresentation() : uml.CollaborationUse {
            return <uml.CollaborationUse><any>this.eGet(uml.UmlPackage.eINSTANCE.getClassifier_Representation(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newRepresentation
         */
        public setRepresentation(newRepresentation : uml.CollaborationUse) {
            this.eSet(uml.UmlPackage.eINSTANCE.getClassifier_Representation(), newRepresentation);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getSubstitution() : org.eclipse.emf.common.util.EList<uml.Substitution> {
            return <org.eclipse.emf.common.util.EList<uml.Substitution>><any>this.eGet(uml.UmlPackage.eINSTANCE.getClassifier_Substitution(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public specialize_type(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.CLASSIFIER__SPECIALIZE_TYPE, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["specialize_type", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public maps_to_generalization_set(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.CLASSIFIER__MAPS_TO_GENERALIZATION_SET, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["maps_to_generalization_set", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public non_final_parents(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.CLASSIFIER__NON_FINAL_PARENTS, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["non_final_parents", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public no_cycles_in_generalization(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.CLASSIFIER__NO_CYCLES_IN_GENERALIZATION, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["no_cycles_in_generalization", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public getAllAttributes() : org.eclipse.emf.common.util.EList<uml.Property> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getAllOperations() : org.eclipse.emf.common.util.EList<uml.Operation> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getAllUsedInterfaces() : org.eclipse.emf.common.util.EList<uml.Interface> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        public getOperation$java_lang_String$org_eclipse_emf_common_util_EList$org_eclipse_emf_common_util_EList(name : string, parameterNames : org.eclipse.emf.common.util.EList<string>, parameterTypes : org.eclipse.emf.common.util.EList<uml.Type>) : uml.Operation {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        public getOperation$java_lang_String$org_eclipse_emf_common_util_EList$org_eclipse_emf_common_util_EList$boolean(name : string, parameterNames : org.eclipse.emf.common.util.EList<string>, parameterTypes : org.eclipse.emf.common.util.EList<uml.Type>, ignoreCase : boolean) : uml.Operation {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {string} name
         * @param {*} parameterNames
         * @param {*} parameterTypes
         * @param {boolean} ignoreCase
         * @return {*}
         */
        public getOperation(name? : any, parameterNames? : any, parameterTypes? : any, ignoreCase? : any) : any {
            if(((typeof name === 'string') || name === null) && ((parameterNames != null && (parameterNames["__interfaces"] != null && parameterNames["__interfaces"].indexOf("org.eclipse.emf.common.util.EList") >= 0 || parameterNames.constructor != null && parameterNames.constructor["__interfaces"] != null && parameterNames.constructor["__interfaces"].indexOf("org.eclipse.emf.common.util.EList") >= 0)) || parameterNames === null) && ((parameterTypes != null && (parameterTypes["__interfaces"] != null && parameterTypes["__interfaces"].indexOf("org.eclipse.emf.common.util.EList") >= 0 || parameterTypes.constructor != null && parameterTypes.constructor["__interfaces"] != null && parameterTypes.constructor["__interfaces"].indexOf("org.eclipse.emf.common.util.EList") >= 0)) || parameterTypes === null) && ((typeof ignoreCase === 'boolean') || ignoreCase === null)) {
                return <any>this.getOperation$java_lang_String$org_eclipse_emf_common_util_EList$org_eclipse_emf_common_util_EList$boolean(name, parameterNames, parameterTypes, ignoreCase);
            } else if(((typeof name === 'string') || name === null) && ((parameterNames != null && (parameterNames["__interfaces"] != null && parameterNames["__interfaces"].indexOf("org.eclipse.emf.common.util.EList") >= 0 || parameterNames.constructor != null && parameterNames.constructor["__interfaces"] != null && parameterNames.constructor["__interfaces"].indexOf("org.eclipse.emf.common.util.EList") >= 0)) || parameterNames === null) && ((parameterTypes != null && (parameterTypes["__interfaces"] != null && parameterTypes["__interfaces"].indexOf("org.eclipse.emf.common.util.EList") >= 0 || parameterTypes.constructor != null && parameterTypes.constructor["__interfaces"] != null && parameterTypes.constructor["__interfaces"].indexOf("org.eclipse.emf.common.util.EList") >= 0)) || parameterTypes === null) && ignoreCase === undefined) {
                return <any>this.getOperation$java_lang_String$org_eclipse_emf_common_util_EList$org_eclipse_emf_common_util_EList(name, parameterNames, parameterTypes);
            } else throw new Error('invalid overload');
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getOperations() : org.eclipse.emf.common.util.EList<uml.Operation> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getUsedInterfaces() : org.eclipse.emf.common.util.EList<uml.Interface> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public allFeatures() : org.eclipse.emf.common.util.EList<uml.Feature> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public allParents() : org.eclipse.emf.common.util.EList<uml.Classifier> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getGenerals() : org.eclipse.emf.common.util.EList<uml.Classifier> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} n
         * @return {boolean}
         */
        public hasVisibilityOf(n : uml.NamedElement) : boolean {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} inhs
         * @return {*}
         */
        public inherit(inhs : org.eclipse.emf.common.util.EList<uml.NamedElement>) : org.eclipse.emf.common.util.EList<uml.NamedElement> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} c
         * @return {*}
         */
        public inheritableMembers(c : uml.Classifier) : org.eclipse.emf.common.util.EList<uml.NamedElement> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getInheritedMembers() : org.eclipse.emf.common.util.EList<uml.NamedElement> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} c
         * @return {boolean}
         */
        public maySpecializeType(c : uml.Classifier) : boolean {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public parents() : org.eclipse.emf.common.util.EList<uml.Classifier> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public directlyRealizedInterfaces() : org.eclipse.emf.common.util.EList<uml.Interface> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public directlyUsedInterfaces() : org.eclipse.emf.common.util.EList<uml.Interface> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public allRealizedInterfaces() : org.eclipse.emf.common.util.EList<uml.Interface> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public allUsedInterfaces() : org.eclipse.emf.common.util.EList<uml.Interface> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} contract
         * @return {boolean}
         */
        public isSubstitutableFor(contract : uml.Classifier) : boolean {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public allAttributes() : org.eclipse.emf.common.util.EList<uml.Property> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public allSlottableFeatures() : org.eclipse.emf.common.util.EList<uml.StructuralFeature> {
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
         * @param {boolean} end1IsNavigable
         * @param {uml.AggregationKind} end1Aggregation
         * @param {string} end1Name
         * @param {number} end1Lower
         * @param {number} end1Upper
         * @param {*} end1Type
         * @param {boolean} end2IsNavigable
         * @param {uml.AggregationKind} end2Aggregation
         * @param {string} end2Name
         * @param {number} end2Lower
         * @param {number} end2Upper
         * @return {*}
         */
        public createAssociation(end1IsNavigable : boolean, end1Aggregation : uml.AggregationKind, end1Name : string, end1Lower : number, end1Upper : number, end1Type : uml.Type, end2IsNavigable : boolean, end2Aggregation : uml.AggregationKind, end2Name : string, end2Lower : number, end2Upper : number) : uml.Association {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getAssociations() : org.eclipse.emf.common.util.EList<uml.Association> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} other
         * @return {boolean}
         */
        public conformsTo(other : uml.Type) : boolean {
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
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public redefinition_consistent(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.REDEFINABLE_ELEMENT__REDEFINITION_CONSISTENT, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["redefinition_consistent", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public non_leaf_redefinition(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.REDEFINABLE_ELEMENT__NON_LEAF_REDEFINITION, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["non_leaf_redefinition", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public redefinition_context_valid(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.REDEFINABLE_ELEMENT__REDEFINITION_CONTEXT_VALID, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["redefinition_context_valid", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
                }
                return false;
            }
            return true;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} redefiningElement
         * @return {boolean}
         */
        public isConsistentWith(redefiningElement : uml.RedefinableElement) : boolean {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} redefinedElement
         * @return {boolean}
         */
        public isRedefinitionContextValid(redefinedElement : uml.RedefinableElement) : boolean {
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
            if(baseClass === "uml.RedefinableElement") {
                switch((derivedFeatureID)) {
                case uml.UmlPackage.CLASSIFIER__IS_LEAF:
                    return uml.UmlPackage.REDEFINABLE_ELEMENT__IS_LEAF;
                case uml.UmlPackage.CLASSIFIER__REDEFINED_ELEMENT:
                    return uml.UmlPackage.REDEFINABLE_ELEMENT__REDEFINED_ELEMENT;
                case uml.UmlPackage.CLASSIFIER__REDEFINITION_CONTEXT:
                    return uml.UmlPackage.REDEFINABLE_ELEMENT__REDEFINITION_CONTEXT;
                default:
                    return -1;
                }
            }
            if(baseClass === "uml.ParameterableElement") {
                switch((derivedFeatureID)) {
                case uml.UmlPackage.CLASSIFIER__OWNING_TEMPLATE_PARAMETER:
                    return uml.UmlPackage.PARAMETERABLE_ELEMENT__OWNING_TEMPLATE_PARAMETER;
                case uml.UmlPackage.CLASSIFIER__TEMPLATE_PARAMETER:
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
            if(baseClass === "uml.Type") {
                switch((derivedFeatureID)) {
                case uml.UmlPackage.CLASSIFIER__PACKAGE:
                    return uml.UmlPackage.TYPE__PACKAGE;
                default:
                    return -1;
                }
            }
            if(baseClass === "uml.TemplateableElement") {
                switch((derivedFeatureID)) {
                case uml.UmlPackage.CLASSIFIER__TEMPLATE_BINDING:
                    return uml.UmlPackage.TEMPLATEABLE_ELEMENT__TEMPLATE_BINDING;
                case uml.UmlPackage.CLASSIFIER__OWNED_TEMPLATE_SIGNATURE:
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
            if(baseClass === "uml.RedefinableElement") {
                switch((baseFeatureID)) {
                case uml.UmlPackage.REDEFINABLE_ELEMENT__IS_LEAF:
                    return uml.UmlPackage.CLASSIFIER__IS_LEAF;
                case uml.UmlPackage.REDEFINABLE_ELEMENT__REDEFINED_ELEMENT:
                    return uml.UmlPackage.CLASSIFIER__REDEFINED_ELEMENT;
                case uml.UmlPackage.REDEFINABLE_ELEMENT__REDEFINITION_CONTEXT:
                    return uml.UmlPackage.CLASSIFIER__REDEFINITION_CONTEXT;
                default:
                    return -1;
                }
            }
            if(baseClass === "uml.ParameterableElement") {
                switch((baseFeatureID)) {
                case uml.UmlPackage.PARAMETERABLE_ELEMENT__OWNING_TEMPLATE_PARAMETER:
                    return uml.UmlPackage.CLASSIFIER__OWNING_TEMPLATE_PARAMETER;
                case uml.UmlPackage.PARAMETERABLE_ELEMENT__TEMPLATE_PARAMETER:
                    return uml.UmlPackage.CLASSIFIER__TEMPLATE_PARAMETER;
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
            if(baseClass === "uml.Type") {
                switch((baseFeatureID)) {
                case uml.UmlPackage.TYPE__PACKAGE:
                    return uml.UmlPackage.CLASSIFIER__PACKAGE;
                default:
                    return -1;
                }
            }
            if(baseClass === "uml.TemplateableElement") {
                switch((baseFeatureID)) {
                case uml.UmlPackage.TEMPLATEABLE_ELEMENT__TEMPLATE_BINDING:
                    return uml.UmlPackage.CLASSIFIER__TEMPLATE_BINDING;
                case uml.UmlPackage.TEMPLATEABLE_ELEMENT__OWNED_TEMPLATE_SIGNATURE:
                    return uml.UmlPackage.CLASSIFIER__OWNED_TEMPLATE_SIGNATURE;
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
            if(baseClass === "uml.RedefinableElement") {
                switch((baseOperationID)) {
                case uml.UmlPackage.REDEFINABLE_ELEMENT___REDEFINITION_CONSISTENT__DIAGNOSTICCHAIN_MAP:
                    return uml.UmlPackage.CLASSIFIER___REDEFINITION_CONSISTENT__DIAGNOSTICCHAIN_MAP;
                case uml.UmlPackage.REDEFINABLE_ELEMENT___NON_LEAF_REDEFINITION__DIAGNOSTICCHAIN_MAP:
                    return uml.UmlPackage.CLASSIFIER___NON_LEAF_REDEFINITION__DIAGNOSTICCHAIN_MAP;
                case uml.UmlPackage.REDEFINABLE_ELEMENT___REDEFINITION_CONTEXT_VALID__DIAGNOSTICCHAIN_MAP:
                    return uml.UmlPackage.CLASSIFIER___REDEFINITION_CONTEXT_VALID__DIAGNOSTICCHAIN_MAP;
                case uml.UmlPackage.REDEFINABLE_ELEMENT___IS_CONSISTENT_WITH__REDEFINABLEELEMENT:
                    return uml.UmlPackage.CLASSIFIER___IS_CONSISTENT_WITH__REDEFINABLEELEMENT;
                case uml.UmlPackage.REDEFINABLE_ELEMENT___IS_REDEFINITION_CONTEXT_VALID__REDEFINABLEELEMENT:
                    return uml.UmlPackage.CLASSIFIER___IS_REDEFINITION_CONTEXT_VALID__REDEFINABLEELEMENT;
                default:
                    return -1;
                }
            }
            if(baseClass === "uml.ParameterableElement") {
                switch((baseOperationID)) {
                case uml.UmlPackage.PARAMETERABLE_ELEMENT___IS_COMPATIBLE_WITH__PARAMETERABLEELEMENT:
                    return uml.UmlPackage.CLASSIFIER___IS_COMPATIBLE_WITH__PARAMETERABLEELEMENT;
                case uml.UmlPackage.PARAMETERABLE_ELEMENT___IS_TEMPLATE_PARAMETER:
                    return uml.UmlPackage.CLASSIFIER___IS_TEMPLATE_PARAMETER;
                default:
                    return -1;
                }
            }
            if(baseClass === "uml.PackageableElement") {
                switch((baseOperationID)) {
                case uml.UmlPackage.PACKAGEABLE_ELEMENT___NAMESPACE_NEEDS_VISIBILITY__DIAGNOSTICCHAIN_MAP:
                    return uml.UmlPackage.CLASSIFIER___NAMESPACE_NEEDS_VISIBILITY__DIAGNOSTICCHAIN_MAP;
                default:
                    return -1;
                }
            }
            if(baseClass === "uml.Type") {
                switch((baseOperationID)) {
                case uml.UmlPackage.TYPE___CREATE_ASSOCIATION__BOOLEAN_AGGREGATIONKIND_STRING_INT_INT_TYPE_BOOLEAN_AGGREGATIONKIND_STRING_INT_INT:
                    return uml.UmlPackage.CLASSIFIER___CREATE_ASSOCIATION__BOOLEAN_AGGREGATIONKIND_STRING_INT_INT_TYPE_BOOLEAN_AGGREGATIONKIND_STRING_INT_INT;
                case uml.UmlPackage.TYPE___GET_ASSOCIATIONS:
                    return uml.UmlPackage.CLASSIFIER___GET_ASSOCIATIONS;
                case uml.UmlPackage.TYPE___CONFORMS_TO__TYPE:
                    return uml.UmlPackage.CLASSIFIER___CONFORMS_TO__TYPE;
                default:
                    return -1;
                }
            }
            if(baseClass === "uml.TemplateableElement") {
                switch((baseOperationID)) {
                case uml.UmlPackage.TEMPLATEABLE_ELEMENT___IS_TEMPLATE:
                    return uml.UmlPackage.CLASSIFIER___IS_TEMPLATE;
                case uml.UmlPackage.TEMPLATEABLE_ELEMENT___PARAMETERABLE_ELEMENTS:
                    return uml.UmlPackage.CLASSIFIER___PARAMETERABLE_ELEMENTS;
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
            case uml.UmlPackage.CLASSIFIER___SPECIALIZE_TYPE__DIAGNOSTICCHAIN_MAP:
                return this.specialize_type(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.CLASSIFIER___MAPS_TO_GENERALIZATION_SET__DIAGNOSTICCHAIN_MAP:
                return this.maps_to_generalization_set(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.CLASSIFIER___NON_FINAL_PARENTS__DIAGNOSTICCHAIN_MAP:
                return this.non_final_parents(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.CLASSIFIER___NO_CYCLES_IN_GENERALIZATION__DIAGNOSTICCHAIN_MAP:
                return this.no_cycles_in_generalization(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.CLASSIFIER___GET_ALL_ATTRIBUTES:
                return this.getAllAttributes();
            case uml.UmlPackage.CLASSIFIER___GET_ALL_OPERATIONS:
                return this.getAllOperations();
            case uml.UmlPackage.CLASSIFIER___GET_ALL_USED_INTERFACES:
                return this.getAllUsedInterfaces();
            case uml.UmlPackage.CLASSIFIER___GET_OPERATION__STRING_ELIST_ELIST:
                return this.getOperation$java_lang_String$org_eclipse_emf_common_util_EList$org_eclipse_emf_common_util_EList(<any>__arguments.get(0), <any>__arguments.get(1), <any>__arguments.get(2));
            case uml.UmlPackage.CLASSIFIER___GET_OPERATION__STRING_ELIST_ELIST_BOOLEAN:
                return this.getOperation$java_lang_String$org_eclipse_emf_common_util_EList$org_eclipse_emf_common_util_EList$boolean(<any>__arguments.get(0), <any>__arguments.get(1), <any>__arguments.get(2), <any>__arguments.get(3));
            case uml.UmlPackage.CLASSIFIER___GET_OPERATIONS:
                return this.getOperations();
            case uml.UmlPackage.CLASSIFIER___GET_USED_INTERFACES:
                return this.getUsedInterfaces();
            case uml.UmlPackage.CLASSIFIER___ALL_FEATURES:
                return this.allFeatures();
            case uml.UmlPackage.CLASSIFIER___ALL_PARENTS:
                return this.allParents();
            case uml.UmlPackage.CLASSIFIER___GET_GENERALS:
                return this.getGenerals();
            case uml.UmlPackage.CLASSIFIER___HAS_VISIBILITY_OF__NAMEDELEMENT:
                return this.hasVisibilityOf(<any>__arguments.get(0));
            case uml.UmlPackage.CLASSIFIER___INHERIT__ELIST:
                return this.inherit(<any>__arguments.get(0));
            case uml.UmlPackage.CLASSIFIER___INHERITABLE_MEMBERS__CLASSIFIER:
                return this.inheritableMembers(<any>__arguments.get(0));
            case uml.UmlPackage.CLASSIFIER___GET_INHERITED_MEMBERS:
                return this.getInheritedMembers();
            case uml.UmlPackage.CLASSIFIER___MAY_SPECIALIZE_TYPE__CLASSIFIER:
                return this.maySpecializeType(<any>__arguments.get(0));
            case uml.UmlPackage.CLASSIFIER___PARENTS:
                return this.parents();
            case uml.UmlPackage.CLASSIFIER___DIRECTLY_REALIZED_INTERFACES:
                return this.directlyRealizedInterfaces();
            case uml.UmlPackage.CLASSIFIER___DIRECTLY_USED_INTERFACES:
                return this.directlyUsedInterfaces();
            case uml.UmlPackage.CLASSIFIER___ALL_REALIZED_INTERFACES:
                return this.allRealizedInterfaces();
            case uml.UmlPackage.CLASSIFIER___ALL_USED_INTERFACES:
                return this.allUsedInterfaces();
            case uml.UmlPackage.CLASSIFIER___IS_SUBSTITUTABLE_FOR__CLASSIFIER:
                return this.isSubstitutableFor(<any>__arguments.get(0));
            case uml.UmlPackage.CLASSIFIER___ALL_ATTRIBUTES:
                return this.allAttributes();
            case uml.UmlPackage.CLASSIFIER___ALL_SLOTTABLE_FEATURES:
                return this.allSlottableFeatures();
            case uml.UmlPackage.CLASSIFIER___IS_TEMPLATE:
                return this.isTemplate();
            case uml.UmlPackage.CLASSIFIER___PARAMETERABLE_ELEMENTS:
                return this.parameterableElements();
            case uml.UmlPackage.CLASSIFIER___CREATE_ASSOCIATION__BOOLEAN_AGGREGATIONKIND_STRING_INT_INT_TYPE_BOOLEAN_AGGREGATIONKIND_STRING_INT_INT:
                return this.createAssociation(<any>__arguments.get(0), <any>__arguments.get(1), <any>__arguments.get(2), <any>__arguments.get(3), <any>__arguments.get(4), <any>__arguments.get(5), <any>__arguments.get(6), <any>__arguments.get(7), <any>__arguments.get(8), <any>__arguments.get(9), <any>__arguments.get(10));
            case uml.UmlPackage.CLASSIFIER___GET_ASSOCIATIONS:
                return this.getAssociations();
            case uml.UmlPackage.CLASSIFIER___CONFORMS_TO__TYPE:
                return this.conformsTo(<any>__arguments.get(0));
            case uml.UmlPackage.CLASSIFIER___NAMESPACE_NEEDS_VISIBILITY__DIAGNOSTICCHAIN_MAP:
                return this.namespace_needs_visibility(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.CLASSIFIER___IS_COMPATIBLE_WITH__PARAMETERABLEELEMENT:
                return this.isCompatibleWith(<any>__arguments.get(0));
            case uml.UmlPackage.CLASSIFIER___IS_TEMPLATE_PARAMETER:
                return this.isTemplateParameter();
            case uml.UmlPackage.CLASSIFIER___REDEFINITION_CONSISTENT__DIAGNOSTICCHAIN_MAP:
                return this.redefinition_consistent(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.CLASSIFIER___NON_LEAF_REDEFINITION__DIAGNOSTICCHAIN_MAP:
                return this.non_leaf_redefinition(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.CLASSIFIER___REDEFINITION_CONTEXT_VALID__DIAGNOSTICCHAIN_MAP:
                return this.redefinition_context_valid(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.CLASSIFIER___IS_CONSISTENT_WITH__REDEFINABLEELEMENT:
                return this.isConsistentWith(<any>__arguments.get(0));
            case uml.UmlPackage.CLASSIFIER___IS_REDEFINITION_CONTEXT_VALID__REDEFINABLEELEMENT:
                return this.isRedefinitionContextValid(<any>__arguments.get(0));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    ClassifierImpl["__class"] = "uml.impl.ClassifierImpl";
    ClassifierImpl["__interfaces"] = ["uml.Classifier","ecore4m.EModelElement","uml.Namespace","org.eclipse.emf.ecore.EObject","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","uml.RedefinableElement","uml.ParameterableElement","uml.PackageableElement","uml.TemplateableElement","org.eclipse.emf.ecore.EModelElement","uml.Type","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.InternalEObject"];


}

