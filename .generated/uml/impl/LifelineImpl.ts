/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Lifeline</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.LifelineImpl#getDecomposedAs}</li>
     * <li>{@link uml.impl.LifelineImpl#getInteraction}</li>
     * <li>{@link uml.impl.LifelineImpl#getRepresents}</li>
     * <li>{@link uml.impl.LifelineImpl#getSelector}</li>
     * <li>{@link uml.impl.LifelineImpl#getCoveredBy}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.NamedElementImpl
     * @class
     */
    export class LifelineImpl extends uml.impl.NamedElementImpl implements uml.Lifeline {
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
            return uml.UmlPackage.eINSTANCE.getLifeline();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getDecomposedAs() : uml.PartDecomposition {
            return <uml.PartDecomposition><any>this.eGet(uml.UmlPackage.eINSTANCE.getLifeline_DecomposedAs(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newDecomposedAs
         */
        public setDecomposedAs(newDecomposedAs : uml.PartDecomposition) {
            this.eSet(uml.UmlPackage.eINSTANCE.getLifeline_DecomposedAs(), newDecomposedAs);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getInteraction() : uml.Interaction {
            return <uml.Interaction><any>this.eGet(uml.UmlPackage.eINSTANCE.getLifeline_Interaction(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newInteraction
         */
        public setInteraction(newInteraction : uml.Interaction) {
            this.eSet(uml.UmlPackage.eINSTANCE.getLifeline_Interaction(), newInteraction);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getRepresents() : uml.ConnectableElement {
            return <uml.ConnectableElement><any>this.eGet(uml.UmlPackage.eINSTANCE.getLifeline_Represents(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newRepresents
         */
        public setRepresents(newRepresents : uml.ConnectableElement) {
            this.eSet(uml.UmlPackage.eINSTANCE.getLifeline_Represents(), newRepresents);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getSelector() : uml.ValueSpecification {
            return <uml.ValueSpecification><any>this.eGet(uml.UmlPackage.eINSTANCE.getLifeline_Selector(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newSelector
         */
        public setSelector(newSelector : uml.ValueSpecification) {
            this.eSet(uml.UmlPackage.eINSTANCE.getLifeline_Selector(), newSelector);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getCoveredBy() : org.eclipse.emf.common.util.EList<uml.InteractionFragment> {
            return <org.eclipse.emf.common.util.EList<uml.InteractionFragment>><any>this.eGet(uml.UmlPackage.eINSTANCE.getLifeline_CoveredBy(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public selector_specified(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.LIFELINE__SELECTOR_SPECIFIED, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["selector_specified", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public interaction_uses_share_lifeline(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.LIFELINE__INTERACTION_USES_SHARE_LIFELINE, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["interaction_uses_share_lifeline", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public same_classifier(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.LIFELINE__SAME_CLASSIFIER, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["same_classifier", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public selector_int_or_string(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.LIFELINE__SELECTOR_INT_OR_STRING, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["selector_int_or_string", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
            case uml.UmlPackage.LIFELINE___SELECTOR_SPECIFIED__DIAGNOSTICCHAIN_MAP:
                return this.selector_specified(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.LIFELINE___INTERACTION_USES_SHARE_LIFELINE__DIAGNOSTICCHAIN_MAP:
                return this.interaction_uses_share_lifeline(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.LIFELINE___SAME_CLASSIFIER__DIAGNOSTICCHAIN_MAP:
                return this.same_classifier(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.LIFELINE___SELECTOR_INT_OR_STRING__DIAGNOSTICCHAIN_MAP:
                return this.selector_int_or_string(<any>__arguments.get(0), <any>__arguments.get(1));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    LifelineImpl["__class"] = "uml.impl.LifelineImpl";
    LifelineImpl["__interfaces"] = ["ecore4m.EModelElement","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","uml.Lifeline","org.eclipse.emf.ecore.EObject","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

