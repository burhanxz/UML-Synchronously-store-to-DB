/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Behavioral Feature</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.BehavioralFeatureImpl#isIsLeaf}</li>
     * <li>{@link uml.impl.BehavioralFeatureImpl#getRedefinedElement}</li>
     * <li>{@link uml.impl.BehavioralFeatureImpl#getRedefinitionContext}</li>
     * <li>{@link uml.impl.BehavioralFeatureImpl#getFeaturingClassifier}</li>
     * <li>{@link uml.impl.BehavioralFeatureImpl#isIsStatic}</li>
     * <li>{@link uml.impl.BehavioralFeatureImpl#getConcurrency}</li>
     * <li>{@link uml.impl.BehavioralFeatureImpl#isIsAbstract}</li>
     * <li>{@link uml.impl.BehavioralFeatureImpl#getMethod}</li>
     * <li>{@link uml.impl.BehavioralFeatureImpl#getOwnedParameter}</li>
     * <li>{@link uml.impl.BehavioralFeatureImpl#getOwnedParameterSet}</li>
     * <li>{@link uml.impl.BehavioralFeatureImpl#getRaisedException}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.NamespaceImpl
     * @class
     */
    export abstract class BehavioralFeatureImpl extends uml.impl.NamespaceImpl implements uml.BehavioralFeature {
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
            return uml.UmlPackage.eINSTANCE.getBehavioralFeature();
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
        public getFeaturingClassifier() : org.eclipse.emf.common.util.EList<uml.Classifier> {
            return <org.eclipse.emf.common.util.EList<uml.Classifier>><any>this.eGet(uml.UmlPackage.eINSTANCE.getFeature_FeaturingClassifier(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isIsStatic() : boolean {
            return <boolean>this.eGet(uml.UmlPackage.eINSTANCE.getFeature_IsStatic(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {boolean} newIsStatic
         */
        public setIsStatic(newIsStatic : boolean) {
            this.eSet(uml.UmlPackage.eINSTANCE.getFeature_IsStatic(), newIsStatic);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {uml.CallConcurrencyKind}
         */
        public getConcurrency() : uml.CallConcurrencyKind {
            return <uml.CallConcurrencyKind>this.eGet(uml.UmlPackage.eINSTANCE.getBehavioralFeature_Concurrency(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {uml.CallConcurrencyKind} newConcurrency
         */
        public setConcurrency(newConcurrency : uml.CallConcurrencyKind) {
            this.eSet(uml.UmlPackage.eINSTANCE.getBehavioralFeature_Concurrency(), newConcurrency);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isIsAbstract() : boolean {
            return <boolean>this.eGet(uml.UmlPackage.eINSTANCE.getBehavioralFeature_IsAbstract(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {boolean} newIsAbstract
         */
        public setIsAbstract(newIsAbstract : boolean) {
            this.eSet(uml.UmlPackage.eINSTANCE.getBehavioralFeature_IsAbstract(), newIsAbstract);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getMethod() : org.eclipse.emf.common.util.EList<uml.Behavior> {
            return <org.eclipse.emf.common.util.EList<uml.Behavior>><any>this.eGet(uml.UmlPackage.eINSTANCE.getBehavioralFeature_Method(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getOwnedParameter() : org.eclipse.emf.common.util.EList<uml.Parameter> {
            return <org.eclipse.emf.common.util.EList<uml.Parameter>><any>this.eGet(uml.UmlPackage.eINSTANCE.getBehavioralFeature_OwnedParameter(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getOwnedParameterSet() : org.eclipse.emf.common.util.EList<uml.ParameterSet> {
            return <org.eclipse.emf.common.util.EList<uml.ParameterSet>><any>this.eGet(uml.UmlPackage.eINSTANCE.getBehavioralFeature_OwnedParameterSet(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getRaisedException() : org.eclipse.emf.common.util.EList<uml.Type> {
            return <org.eclipse.emf.common.util.EList<uml.Type>><any>this.eGet(uml.UmlPackage.eINSTANCE.getBehavioralFeature_RaisedException(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public abstract_no_method(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.BEHAVIORAL_FEATURE__ABSTRACT_NO_METHOD, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["abstract_no_method", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
                }
                return false;
            }
            return true;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {string} name
         * @param {*} type
         * @return {*}
         */
        public createReturnResult(name : string, type : uml.Type) : uml.Parameter {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public inputParameters() : org.eclipse.emf.common.util.EList<uml.Parameter> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public outputParameters() : org.eclipse.emf.common.util.EList<uml.Parameter> {
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
                case uml.UmlPackage.BEHAVIORAL_FEATURE__IS_LEAF:
                    return uml.UmlPackage.REDEFINABLE_ELEMENT__IS_LEAF;
                case uml.UmlPackage.BEHAVIORAL_FEATURE__REDEFINED_ELEMENT:
                    return uml.UmlPackage.REDEFINABLE_ELEMENT__REDEFINED_ELEMENT;
                case uml.UmlPackage.BEHAVIORAL_FEATURE__REDEFINITION_CONTEXT:
                    return uml.UmlPackage.REDEFINABLE_ELEMENT__REDEFINITION_CONTEXT;
                default:
                    return -1;
                }
            }
            if(baseClass === "uml.Feature") {
                switch((derivedFeatureID)) {
                case uml.UmlPackage.BEHAVIORAL_FEATURE__FEATURING_CLASSIFIER:
                    return uml.UmlPackage.FEATURE__FEATURING_CLASSIFIER;
                case uml.UmlPackage.BEHAVIORAL_FEATURE__IS_STATIC:
                    return uml.UmlPackage.FEATURE__IS_STATIC;
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
                    return uml.UmlPackage.BEHAVIORAL_FEATURE__IS_LEAF;
                case uml.UmlPackage.REDEFINABLE_ELEMENT__REDEFINED_ELEMENT:
                    return uml.UmlPackage.BEHAVIORAL_FEATURE__REDEFINED_ELEMENT;
                case uml.UmlPackage.REDEFINABLE_ELEMENT__REDEFINITION_CONTEXT:
                    return uml.UmlPackage.BEHAVIORAL_FEATURE__REDEFINITION_CONTEXT;
                default:
                    return -1;
                }
            }
            if(baseClass === "uml.Feature") {
                switch((baseFeatureID)) {
                case uml.UmlPackage.FEATURE__FEATURING_CLASSIFIER:
                    return uml.UmlPackage.BEHAVIORAL_FEATURE__FEATURING_CLASSIFIER;
                case uml.UmlPackage.FEATURE__IS_STATIC:
                    return uml.UmlPackage.BEHAVIORAL_FEATURE__IS_STATIC;
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
                    return uml.UmlPackage.BEHAVIORAL_FEATURE___REDEFINITION_CONSISTENT__DIAGNOSTICCHAIN_MAP;
                case uml.UmlPackage.REDEFINABLE_ELEMENT___NON_LEAF_REDEFINITION__DIAGNOSTICCHAIN_MAP:
                    return uml.UmlPackage.BEHAVIORAL_FEATURE___NON_LEAF_REDEFINITION__DIAGNOSTICCHAIN_MAP;
                case uml.UmlPackage.REDEFINABLE_ELEMENT___REDEFINITION_CONTEXT_VALID__DIAGNOSTICCHAIN_MAP:
                    return uml.UmlPackage.BEHAVIORAL_FEATURE___REDEFINITION_CONTEXT_VALID__DIAGNOSTICCHAIN_MAP;
                case uml.UmlPackage.REDEFINABLE_ELEMENT___IS_CONSISTENT_WITH__REDEFINABLEELEMENT:
                    return uml.UmlPackage.BEHAVIORAL_FEATURE___IS_CONSISTENT_WITH__REDEFINABLEELEMENT;
                case uml.UmlPackage.REDEFINABLE_ELEMENT___IS_REDEFINITION_CONTEXT_VALID__REDEFINABLEELEMENT:
                    return uml.UmlPackage.BEHAVIORAL_FEATURE___IS_REDEFINITION_CONTEXT_VALID__REDEFINABLEELEMENT;
                default:
                    return -1;
                }
            }
            if(baseClass === "uml.Feature") {
                switch((baseOperationID)) {
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
            case uml.UmlPackage.BEHAVIORAL_FEATURE___ABSTRACT_NO_METHOD__DIAGNOSTICCHAIN_MAP:
                return this.abstract_no_method(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.BEHAVIORAL_FEATURE___CREATE_RETURN_RESULT__STRING_TYPE:
                return this.createReturnResult(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.BEHAVIORAL_FEATURE___INPUT_PARAMETERS:
                return this.inputParameters();
            case uml.UmlPackage.BEHAVIORAL_FEATURE___OUTPUT_PARAMETERS:
                return this.outputParameters();
            case uml.UmlPackage.BEHAVIORAL_FEATURE___REDEFINITION_CONSISTENT__DIAGNOSTICCHAIN_MAP:
                return this.redefinition_consistent(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.BEHAVIORAL_FEATURE___NON_LEAF_REDEFINITION__DIAGNOSTICCHAIN_MAP:
                return this.non_leaf_redefinition(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.BEHAVIORAL_FEATURE___REDEFINITION_CONTEXT_VALID__DIAGNOSTICCHAIN_MAP:
                return this.redefinition_context_valid(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.BEHAVIORAL_FEATURE___IS_CONSISTENT_WITH__REDEFINABLEELEMENT:
                return this.isConsistentWith(<any>__arguments.get(0));
            case uml.UmlPackage.BEHAVIORAL_FEATURE___IS_REDEFINITION_CONTEXT_VALID__REDEFINABLEELEMENT:
                return this.isRedefinitionContextValid(<any>__arguments.get(0));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    BehavioralFeatureImpl["__class"] = "uml.impl.BehavioralFeatureImpl";
    BehavioralFeatureImpl["__interfaces"] = ["uml.RedefinableElement","ecore4m.EModelElement","uml.Feature","org.eclipse.emf.ecore.EModelElement","uml.Namespace","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","uml.BehavioralFeature","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

