/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Classifier Template Parameter</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.ClassifierTemplateParameterImpl#isAllowSubstitutable}</li>
     * <li>{@link uml.impl.ClassifierTemplateParameterImpl#getConstrainingClassifier}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.TemplateParameterImpl
     * @class
     */
    export class ClassifierTemplateParameterImpl extends uml.impl.TemplateParameterImpl implements uml.ClassifierTemplateParameter {
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
            return uml.UmlPackage.eINSTANCE.getClassifierTemplateParameter();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isAllowSubstitutable() : boolean {
            return <boolean>this.eGet(uml.UmlPackage.eINSTANCE.getClassifierTemplateParameter_AllowSubstitutable(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {boolean} newAllowSubstitutable
         */
        public setAllowSubstitutable(newAllowSubstitutable : boolean) {
            this.eSet(uml.UmlPackage.eINSTANCE.getClassifierTemplateParameter_AllowSubstitutable(), newAllowSubstitutable);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getConstrainingClassifier() : org.eclipse.emf.common.util.EList<uml.Classifier> {
            return <org.eclipse.emf.common.util.EList<uml.Classifier>><any>this.eGet(uml.UmlPackage.eINSTANCE.getClassifierTemplateParameter_ConstrainingClassifier(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public has_constraining_classifier(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.CLASSIFIER_TEMPLATE_PARAMETER__HAS_CONSTRAINING_CLASSIFIER, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["has_constraining_classifier", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public parametered_element_no_features(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.CLASSIFIER_TEMPLATE_PARAMETER__PARAMETERED_ELEMENT_NO_FEATURES, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["parametered_element_no_features", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public matching_abstract(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.CLASSIFIER_TEMPLATE_PARAMETER__MATCHING_ABSTRACT, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["matching_abstract", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public actual_is_classifier(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.CLASSIFIER_TEMPLATE_PARAMETER__ACTUAL_IS_CLASSIFIER, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["actual_is_classifier", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public constraining_classifiers_constrain_args(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.CLASSIFIER_TEMPLATE_PARAMETER__CONSTRAINING_CLASSIFIERS_CONSTRAIN_ARGS, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["constraining_classifiers_constrain_args", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public constraining_classifiers_constrain_parametered_element(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.CLASSIFIER_TEMPLATE_PARAMETER__CONSTRAINING_CLASSIFIERS_CONSTRAIN_PARAMETERED_ELEMENT, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["constraining_classifiers_constrain_parametered_element", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
            case uml.UmlPackage.CLASSIFIER_TEMPLATE_PARAMETER___HAS_CONSTRAINING_CLASSIFIER__DIAGNOSTICCHAIN_MAP:
                return this.has_constraining_classifier(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.CLASSIFIER_TEMPLATE_PARAMETER___PARAMETERED_ELEMENT_NO_FEATURES__DIAGNOSTICCHAIN_MAP:
                return this.parametered_element_no_features(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.CLASSIFIER_TEMPLATE_PARAMETER___MATCHING_ABSTRACT__DIAGNOSTICCHAIN_MAP:
                return this.matching_abstract(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.CLASSIFIER_TEMPLATE_PARAMETER___ACTUAL_IS_CLASSIFIER__DIAGNOSTICCHAIN_MAP:
                return this.actual_is_classifier(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.CLASSIFIER_TEMPLATE_PARAMETER___CONSTRAINING_CLASSIFIERS_CONSTRAIN_ARGS__DIAGNOSTICCHAIN_MAP:
                return this.constraining_classifiers_constrain_args(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.CLASSIFIER_TEMPLATE_PARAMETER___CONSTRAINING_CLASSIFIERS_CONSTRAIN_PARAMETERED_ELEMENT__DIAGNOSTICCHAIN_MAP:
                return this.constraining_classifiers_constrain_parametered_element(<any>__arguments.get(0), <any>__arguments.get(1));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    ClassifierTemplateParameterImpl["__class"] = "uml.impl.ClassifierTemplateParameterImpl";
    ClassifierTemplateParameterImpl["__interfaces"] = ["uml.ClassifierTemplateParameter","ecore4m.EModelElement","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","uml.TemplateParameter","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

