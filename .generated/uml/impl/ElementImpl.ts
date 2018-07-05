/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Element</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.ElementImpl#getOwnedComment}</li>
     * <li>{@link uml.impl.ElementImpl#getOwnedElement}</li>
     * <li>{@link uml.impl.ElementImpl#getOwner}</li>
     * </ul>
     * 
     * @generated
     * @extends ecore4m.impl.EModelElementImpl
     * @class
     */
    export abstract class ElementImpl extends ecore4m.impl.EModelElementImpl implements uml.Element {
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
            return uml.UmlPackage.eINSTANCE.getElement();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getOwnedComment() : org.eclipse.emf.common.util.EList<uml.Comment> {
            return <org.eclipse.emf.common.util.EList<uml.Comment>><any>this.eGet(uml.UmlPackage.eINSTANCE.getElement_OwnedComment(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getOwnedElement() : org.eclipse.emf.common.util.EList<uml.Element> {
            return <org.eclipse.emf.common.util.EList<uml.Element>><any>this.eGet(uml.UmlPackage.eINSTANCE.getElement_OwnedElement(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getOwner() : uml.Element {
            return <uml.Element><any>this.eGet(uml.UmlPackage.eINSTANCE.getElement_Owner(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public has_owner(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.ELEMENT__HAS_OWNER, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["has_owner", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public not_own_self(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.ELEMENT__NOT_OWN_SELF, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["not_own_self", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
                }
                return false;
            }
            return true;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {string} keyword
         * @return {boolean}
         */
        public addKeyword(keyword : string) : boolean {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} stereotype
         * @return {*}
         */
        public applyStereotype(stereotype : uml.Stereotype) : org.eclipse.emf.ecore.EObject {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {string} source
         * @return {*}
         */
        public createEAnnotation(source : string) : org.eclipse.emf.ecore.EAnnotation {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        public destroy() {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getKeywords() : org.eclipse.emf.common.util.EList<string> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {string} qualifiedName
         * @return {*}
         */
        public getApplicableStereotype(qualifiedName : string) : uml.Stereotype {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getApplicableStereotypes() : org.eclipse.emf.common.util.EList<uml.Stereotype> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {string} qualifiedName
         * @return {*}
         */
        public getAppliedStereotype(qualifiedName : string) : uml.Stereotype {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getAppliedStereotypes() : org.eclipse.emf.common.util.EList<uml.Stereotype> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} stereotype
         * @param {string} qualifiedName
         * @return {*}
         */
        public getAppliedSubstereotype(stereotype : uml.Stereotype, qualifiedName : string) : uml.Stereotype {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} stereotype
         * @return {*}
         */
        public getAppliedSubstereotypes(stereotype : uml.Stereotype) : org.eclipse.emf.common.util.EList<uml.Stereotype> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getModel() : uml.Model {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getNearestPackage() : uml.Package {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        public getRelationships$() : org.eclipse.emf.common.util.EList<uml.Relationship> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        public getRelationships$org_eclipse_emf_ecore_EClass(eClass : org.eclipse.emf.ecore.EClass) : org.eclipse.emf.common.util.EList<uml.Relationship> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} eClass
         * @return {*}
         */
        public getRelationships(eClass? : any) : any {
            if(((eClass != null && (eClass["__interfaces"] != null && eClass["__interfaces"].indexOf("org.eclipse.emf.ecore.EClass") >= 0 || eClass.constructor != null && eClass.constructor["__interfaces"] != null && eClass.constructor["__interfaces"].indexOf("org.eclipse.emf.ecore.EClass") >= 0)) || eClass === null)) {
                return <any>this.getRelationships$org_eclipse_emf_ecore_EClass(eClass);
            } else if(eClass === undefined) {
                return <any>this.getRelationships$();
            } else throw new Error('invalid overload');
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {string} qualifiedName
         * @return {*}
         */
        public getRequiredStereotype(qualifiedName : string) : uml.Stereotype {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getRequiredStereotypes() : org.eclipse.emf.common.util.EList<uml.Stereotype> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        public getSourceDirectedRelationships$() : org.eclipse.emf.common.util.EList<uml.DirectedRelationship> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        public getSourceDirectedRelationships$org_eclipse_emf_ecore_EClass(eClass : org.eclipse.emf.ecore.EClass) : org.eclipse.emf.common.util.EList<uml.DirectedRelationship> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} eClass
         * @return {*}
         */
        public getSourceDirectedRelationships(eClass? : any) : any {
            if(((eClass != null && (eClass["__interfaces"] != null && eClass["__interfaces"].indexOf("org.eclipse.emf.ecore.EClass") >= 0 || eClass.constructor != null && eClass.constructor["__interfaces"] != null && eClass.constructor["__interfaces"].indexOf("org.eclipse.emf.ecore.EClass") >= 0)) || eClass === null)) {
                return <any>this.getSourceDirectedRelationships$org_eclipse_emf_ecore_EClass(eClass);
            } else if(eClass === undefined) {
                return <any>this.getSourceDirectedRelationships$();
            } else throw new Error('invalid overload');
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} stereotype
         * @return {*}
         */
        public getStereotypeApplication(stereotype : uml.Stereotype) : org.eclipse.emf.ecore.EObject {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getStereotypeApplications() : org.eclipse.emf.common.util.EList<org.eclipse.emf.ecore.EObject> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        public getTargetDirectedRelationships$() : org.eclipse.emf.common.util.EList<uml.DirectedRelationship> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        public getTargetDirectedRelationships$org_eclipse_emf_ecore_EClass(eClass : org.eclipse.emf.ecore.EClass) : org.eclipse.emf.common.util.EList<uml.DirectedRelationship> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} eClass
         * @return {*}
         */
        public getTargetDirectedRelationships(eClass? : any) : any {
            if(((eClass != null && (eClass["__interfaces"] != null && eClass["__interfaces"].indexOf("org.eclipse.emf.ecore.EClass") >= 0 || eClass.constructor != null && eClass.constructor["__interfaces"] != null && eClass.constructor["__interfaces"].indexOf("org.eclipse.emf.ecore.EClass") >= 0)) || eClass === null)) {
                return <any>this.getTargetDirectedRelationships$org_eclipse_emf_ecore_EClass(eClass);
            } else if(eClass === undefined) {
                return <any>this.getTargetDirectedRelationships$();
            } else throw new Error('invalid overload');
        }

        public getValue$uml_Stereotype$java_lang_String(stereotype : uml.Stereotype, propertyName : string) : any {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} stereotype
         * @param {string} propertyName
         * @return {*}
         */
        public getValue(stereotype? : any, propertyName? : any) : any {
            if(((stereotype != null && (stereotype["__interfaces"] != null && stereotype["__interfaces"].indexOf("uml.Stereotype") >= 0 || stereotype.constructor != null && stereotype.constructor["__interfaces"] != null && stereotype.constructor["__interfaces"].indexOf("uml.Stereotype") >= 0)) || stereotype === null) && ((typeof propertyName === 'string') || propertyName === null)) {
                return <any>this.getValue$uml_Stereotype$java_lang_String(stereotype, propertyName);
            } else throw new Error('invalid overload');
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {string} keyword
         * @return {boolean}
         */
        public hasKeyword(keyword : string) : boolean {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} stereotype
         * @param {string} propertyName
         * @return {boolean}
         */
        public hasValue(stereotype : uml.Stereotype, propertyName : string) : boolean {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} stereotype
         * @return {boolean}
         */
        public isStereotypeApplicable(stereotype : uml.Stereotype) : boolean {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} stereotype
         * @return {boolean}
         */
        public isStereotypeApplied(stereotype : uml.Stereotype) : boolean {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} stereotype
         * @return {boolean}
         */
        public isStereotypeRequired(stereotype : uml.Stereotype) : boolean {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {string} keyword
         * @return {boolean}
         */
        public removeKeyword(keyword : string) : boolean {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        public setValue$uml_Stereotype$java_lang_String$java_lang_Object(stereotype : uml.Stereotype, propertyName : string, newValue : any) {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} stereotype
         * @param {string} propertyName
         * @param {*} newValue
         */
        public setValue(stereotype? : any, propertyName? : any, newValue? : any) : any {
            if(((stereotype != null && (stereotype["__interfaces"] != null && stereotype["__interfaces"].indexOf("uml.Stereotype") >= 0 || stereotype.constructor != null && stereotype.constructor["__interfaces"] != null && stereotype.constructor["__interfaces"].indexOf("uml.Stereotype") >= 0)) || stereotype === null) && ((typeof propertyName === 'string') || propertyName === null) && ((newValue != null) || newValue === null)) {
                return <any>this.setValue$uml_Stereotype$java_lang_String$java_lang_Object(stereotype, propertyName, newValue);
            } else throw new Error('invalid overload');
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} stereotype
         * @return {*}
         */
        public unapplyStereotype(stereotype : uml.Stereotype) : org.eclipse.emf.ecore.EObject {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public allOwnedElements() : org.eclipse.emf.common.util.EList<uml.Element> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public mustBeOwned() : boolean {
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
            case uml.UmlPackage.ELEMENT___HAS_OWNER__DIAGNOSTICCHAIN_MAP:
                return this.has_owner(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.ELEMENT___NOT_OWN_SELF__DIAGNOSTICCHAIN_MAP:
                return this.not_own_self(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.ELEMENT___ADD_KEYWORD__STRING:
                return this.addKeyword(<any>__arguments.get(0));
            case uml.UmlPackage.ELEMENT___APPLY_STEREOTYPE__STEREOTYPE:
                return this.applyStereotype(<any>__arguments.get(0));
            case uml.UmlPackage.ELEMENT___CREATE_EANNOTATION__STRING:
                return this.createEAnnotation(<any>__arguments.get(0));
            case uml.UmlPackage.ELEMENT___DESTROY:
                this.destroy();
                return null;
            case uml.UmlPackage.ELEMENT___GET_KEYWORDS:
                return this.getKeywords();
            case uml.UmlPackage.ELEMENT___GET_APPLICABLE_STEREOTYPE__STRING:
                return this.getApplicableStereotype(<any>__arguments.get(0));
            case uml.UmlPackage.ELEMENT___GET_APPLICABLE_STEREOTYPES:
                return this.getApplicableStereotypes();
            case uml.UmlPackage.ELEMENT___GET_APPLIED_STEREOTYPE__STRING:
                return this.getAppliedStereotype(<any>__arguments.get(0));
            case uml.UmlPackage.ELEMENT___GET_APPLIED_STEREOTYPES:
                return this.getAppliedStereotypes();
            case uml.UmlPackage.ELEMENT___GET_APPLIED_SUBSTEREOTYPE__STEREOTYPE_STRING:
                return this.getAppliedSubstereotype(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.ELEMENT___GET_APPLIED_SUBSTEREOTYPES__STEREOTYPE:
                return this.getAppliedSubstereotypes(<any>__arguments.get(0));
            case uml.UmlPackage.ELEMENT___GET_MODEL:
                return this.getModel();
            case uml.UmlPackage.ELEMENT___GET_NEAREST_PACKAGE:
                return this.getNearestPackage();
            case uml.UmlPackage.ELEMENT___GET_RELATIONSHIPS:
                return this.getRelationships();
            case uml.UmlPackage.ELEMENT___GET_RELATIONSHIPS__ECLASS:
                return this.getRelationships$org_eclipse_emf_ecore_EClass(<any>__arguments.get(0));
            case uml.UmlPackage.ELEMENT___GET_REQUIRED_STEREOTYPE__STRING:
                return this.getRequiredStereotype(<any>__arguments.get(0));
            case uml.UmlPackage.ELEMENT___GET_REQUIRED_STEREOTYPES:
                return this.getRequiredStereotypes();
            case uml.UmlPackage.ELEMENT___GET_SOURCE_DIRECTED_RELATIONSHIPS:
                return this.getSourceDirectedRelationships();
            case uml.UmlPackage.ELEMENT___GET_SOURCE_DIRECTED_RELATIONSHIPS__ECLASS:
                return this.getSourceDirectedRelationships$org_eclipse_emf_ecore_EClass(<any>__arguments.get(0));
            case uml.UmlPackage.ELEMENT___GET_STEREOTYPE_APPLICATION__STEREOTYPE:
                return this.getStereotypeApplication(<any>__arguments.get(0));
            case uml.UmlPackage.ELEMENT___GET_STEREOTYPE_APPLICATIONS:
                return this.getStereotypeApplications();
            case uml.UmlPackage.ELEMENT___GET_TARGET_DIRECTED_RELATIONSHIPS:
                return this.getTargetDirectedRelationships();
            case uml.UmlPackage.ELEMENT___GET_TARGET_DIRECTED_RELATIONSHIPS__ECLASS:
                return this.getTargetDirectedRelationships$org_eclipse_emf_ecore_EClass(<any>__arguments.get(0));
            case uml.UmlPackage.ELEMENT___GET_VALUE__STEREOTYPE_STRING:
                return this.getValue$uml_Stereotype$java_lang_String(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.ELEMENT___HAS_KEYWORD__STRING:
                return this.hasKeyword(<any>__arguments.get(0));
            case uml.UmlPackage.ELEMENT___HAS_VALUE__STEREOTYPE_STRING:
                return this.hasValue(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.ELEMENT___IS_STEREOTYPE_APPLICABLE__STEREOTYPE:
                return this.isStereotypeApplicable(<any>__arguments.get(0));
            case uml.UmlPackage.ELEMENT___IS_STEREOTYPE_APPLIED__STEREOTYPE:
                return this.isStereotypeApplied(<any>__arguments.get(0));
            case uml.UmlPackage.ELEMENT___IS_STEREOTYPE_REQUIRED__STEREOTYPE:
                return this.isStereotypeRequired(<any>__arguments.get(0));
            case uml.UmlPackage.ELEMENT___REMOVE_KEYWORD__STRING:
                return this.removeKeyword(<any>__arguments.get(0));
            case uml.UmlPackage.ELEMENT___SET_VALUE__STEREOTYPE_STRING_OBJECT:
                this.setValue$uml_Stereotype$java_lang_String$java_lang_Object(<any>__arguments.get(0), <any>__arguments.get(1), __arguments.get(2));
                return null;
            case uml.UmlPackage.ELEMENT___UNAPPLY_STEREOTYPE__STEREOTYPE:
                return this.unapplyStereotype(<any>__arguments.get(0));
            case uml.UmlPackage.ELEMENT___ALL_OWNED_ELEMENTS:
                return this.allOwnedElements();
            case uml.UmlPackage.ELEMENT___MUST_BE_OWNED:
                return this.mustBeOwned();
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    ElementImpl["__class"] = "uml.impl.ElementImpl";
    ElementImpl["__interfaces"] = ["ecore4m.EModelElement","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

