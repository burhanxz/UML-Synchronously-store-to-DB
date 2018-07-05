/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Behavior</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.BehaviorImpl#getSpecification}</li>
     * <li>{@link uml.impl.BehaviorImpl#getContext}</li>
     * <li>{@link uml.impl.BehaviorImpl#isIsReentrant}</li>
     * <li>{@link uml.impl.BehaviorImpl#getOwnedParameter}</li>
     * <li>{@link uml.impl.BehaviorImpl#getOwnedParameterSet}</li>
     * <li>{@link uml.impl.BehaviorImpl#getPostcondition}</li>
     * <li>{@link uml.impl.BehaviorImpl#getPrecondition}</li>
     * <li>{@link uml.impl.BehaviorImpl#getRedefinedBehavior}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.ClassImpl
     * @class
     */
    export abstract class BehaviorImpl extends uml.impl.ClassImpl implements uml.Behavior {
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
            return uml.UmlPackage.eINSTANCE.getBehavior();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getSpecification() : uml.BehavioralFeature {
            return <uml.BehavioralFeature><any>this.eGet(uml.UmlPackage.eINSTANCE.getBehavior_Specification(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newSpecification
         */
        public setSpecification(newSpecification : uml.BehavioralFeature) {
            this.eSet(uml.UmlPackage.eINSTANCE.getBehavior_Specification(), newSpecification);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getContext() : uml.BehavioredClassifier {
            return <uml.BehavioredClassifier><any>this.eGet(uml.UmlPackage.eINSTANCE.getBehavior_Context(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isIsReentrant() : boolean {
            return <boolean>this.eGet(uml.UmlPackage.eINSTANCE.getBehavior_IsReentrant(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {boolean} newIsReentrant
         */
        public setIsReentrant(newIsReentrant : boolean) {
            this.eSet(uml.UmlPackage.eINSTANCE.getBehavior_IsReentrant(), newIsReentrant);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        public unsetIsReentrant() {
            this.eUnset(uml.UmlPackage.eINSTANCE.getBehavior_IsReentrant());
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isSetIsReentrant() : boolean {
            return this.eIsSet(uml.UmlPackage.eINSTANCE.getBehavior_IsReentrant());
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getOwnedParameter() : org.eclipse.emf.common.util.EList<uml.Parameter> {
            return <org.eclipse.emf.common.util.EList<uml.Parameter>><any>this.eGet(uml.UmlPackage.eINSTANCE.getBehavior_OwnedParameter(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getOwnedParameterSet() : org.eclipse.emf.common.util.EList<uml.ParameterSet> {
            return <org.eclipse.emf.common.util.EList<uml.ParameterSet>><any>this.eGet(uml.UmlPackage.eINSTANCE.getBehavior_OwnedParameterSet(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getPostcondition() : org.eclipse.emf.common.util.EList<uml.Constraint> {
            return <org.eclipse.emf.common.util.EList<uml.Constraint>><any>this.eGet(uml.UmlPackage.eINSTANCE.getBehavior_Postcondition(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getPrecondition() : org.eclipse.emf.common.util.EList<uml.Constraint> {
            return <org.eclipse.emf.common.util.EList<uml.Constraint>><any>this.eGet(uml.UmlPackage.eINSTANCE.getBehavior_Precondition(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getRedefinedBehavior() : org.eclipse.emf.common.util.EList<uml.Behavior> {
            return <org.eclipse.emf.common.util.EList<uml.Behavior>><any>this.eGet(uml.UmlPackage.eINSTANCE.getBehavior_RedefinedBehavior(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public most_one_behavior(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.BEHAVIOR__MOST_ONE_BEHAVIOR, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["most_one_behavior", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public parameters_match(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.BEHAVIOR__PARAMETERS_MATCH, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["parameters_match", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public feature_of_context_classifier(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.BEHAVIOR__FEATURE_OF_CONTEXT_CLASSIFIER, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["feature_of_context_classifier", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
                }
                return false;
            }
            return true;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} from
         * @return {*}
         */
        public behavioredClassifier(from : uml.Element) : uml.BehavioredClassifier {
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
         * @param {number} operationID
         * @param {*} arguments
         * @return {*}
         */
        public eInvoke(operationID : number, __arguments : org.eclipse.emf.common.util.EList<any>) : any {
            switch((operationID)) {
            case uml.UmlPackage.BEHAVIOR___MOST_ONE_BEHAVIOR__DIAGNOSTICCHAIN_MAP:
                return this.most_one_behavior(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.BEHAVIOR___PARAMETERS_MATCH__DIAGNOSTICCHAIN_MAP:
                return this.parameters_match(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.BEHAVIOR___FEATURE_OF_CONTEXT_CLASSIFIER__DIAGNOSTICCHAIN_MAP:
                return this.feature_of_context_classifier(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.BEHAVIOR___BEHAVIORED_CLASSIFIER__ELEMENT:
                return this.behavioredClassifier(<any>__arguments.get(0));
            case uml.UmlPackage.BEHAVIOR___INPUT_PARAMETERS:
                return this.inputParameters();
            case uml.UmlPackage.BEHAVIOR___OUTPUT_PARAMETERS:
                return this.outputParameters();
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    BehaviorImpl["__class"] = "uml.impl.BehaviorImpl";
    BehaviorImpl["__interfaces"] = ["uml.Classifier","ecore4m.EModelElement","uml.Namespace","org.eclipse.emf.ecore.EObject","uml.NamedElement","uml.Behavior","org.eclipse.emf.common.notify.Notifier","uml.StructuredClassifier","uml.BehavioredClassifier","uml.RedefinableElement","uml.ParameterableElement","uml.PackageableElement","uml.EncapsulatedClassifier","uml.TemplateableElement","uml.Class","org.eclipse.emf.ecore.EModelElement","uml.Type","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.InternalEObject"];


}

