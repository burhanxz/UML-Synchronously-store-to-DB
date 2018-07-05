/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Interaction</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.InteractionImpl#getCovered}</li>
     * <li>{@link uml.impl.InteractionImpl#getEnclosingOperand}</li>
     * <li>{@link uml.impl.InteractionImpl#getEnclosingInteraction}</li>
     * <li>{@link uml.impl.InteractionImpl#getGeneralOrdering}</li>
     * <li>{@link uml.impl.InteractionImpl#getLifeline}</li>
     * <li>{@link uml.impl.InteractionImpl#getFragment}</li>
     * <li>{@link uml.impl.InteractionImpl#getAction}</li>
     * <li>{@link uml.impl.InteractionImpl#getFormalGate}</li>
     * <li>{@link uml.impl.InteractionImpl#getMessage}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.BehaviorImpl
     * @class
     */
    export class InteractionImpl extends uml.impl.BehaviorImpl implements uml.Interaction {
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
            return uml.UmlPackage.eINSTANCE.getInteraction();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getCovereds() : org.eclipse.emf.common.util.EList<uml.Lifeline> {
            return <org.eclipse.emf.common.util.EList<uml.Lifeline>><any>this.eGet(uml.UmlPackage.eINSTANCE.getInteractionFragment_Covered(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getEnclosingOperand() : uml.InteractionOperand {
            return <uml.InteractionOperand><any>this.eGet(uml.UmlPackage.eINSTANCE.getInteractionFragment_EnclosingOperand(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newEnclosingOperand
         */
        public setEnclosingOperand(newEnclosingOperand : uml.InteractionOperand) {
            this.eSet(uml.UmlPackage.eINSTANCE.getInteractionFragment_EnclosingOperand(), newEnclosingOperand);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getEnclosingInteraction() : uml.Interaction {
            return <uml.Interaction><any>this.eGet(uml.UmlPackage.eINSTANCE.getInteractionFragment_EnclosingInteraction(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newEnclosingInteraction
         */
        public setEnclosingInteraction(newEnclosingInteraction : uml.Interaction) {
            this.eSet(uml.UmlPackage.eINSTANCE.getInteractionFragment_EnclosingInteraction(), newEnclosingInteraction);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getGeneralOrdering() : org.eclipse.emf.common.util.EList<uml.GeneralOrdering> {
            return <org.eclipse.emf.common.util.EList<uml.GeneralOrdering>><any>this.eGet(uml.UmlPackage.eINSTANCE.getInteractionFragment_GeneralOrdering(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getLifeline() : org.eclipse.emf.common.util.EList<uml.Lifeline> {
            return <org.eclipse.emf.common.util.EList<uml.Lifeline>><any>this.eGet(uml.UmlPackage.eINSTANCE.getInteraction_Lifeline(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getFragment() : org.eclipse.emf.common.util.EList<uml.InteractionFragment> {
            return <org.eclipse.emf.common.util.EList<uml.InteractionFragment>><any>this.eGet(uml.UmlPackage.eINSTANCE.getInteraction_Fragment(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getAction() : org.eclipse.emf.common.util.EList<uml.Action> {
            return <org.eclipse.emf.common.util.EList<uml.Action>><any>this.eGet(uml.UmlPackage.eINSTANCE.getInteraction_Action(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getFormalGate() : org.eclipse.emf.common.util.EList<uml.Gate> {
            return <org.eclipse.emf.common.util.EList<uml.Gate>><any>this.eGet(uml.UmlPackage.eINSTANCE.getInteraction_FormalGate(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getMessage() : org.eclipse.emf.common.util.EList<uml.Message> {
            return <org.eclipse.emf.common.util.EList<uml.Message>><any>this.eGet(uml.UmlPackage.eINSTANCE.getInteraction_Message(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public not_contained(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.INTERACTION__NOT_CONTAINED, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["not_contained", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
                }
                return false;
            }
            return true;
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
            if(baseClass === "uml.InteractionFragment") {
                switch((derivedFeatureID)) {
                case uml.UmlPackage.INTERACTION__COVERED:
                    return uml.UmlPackage.INTERACTION_FRAGMENT__COVERED;
                case uml.UmlPackage.INTERACTION__ENCLOSING_OPERAND:
                    return uml.UmlPackage.INTERACTION_FRAGMENT__ENCLOSING_OPERAND;
                case uml.UmlPackage.INTERACTION__ENCLOSING_INTERACTION:
                    return uml.UmlPackage.INTERACTION_FRAGMENT__ENCLOSING_INTERACTION;
                case uml.UmlPackage.INTERACTION__GENERAL_ORDERING:
                    return uml.UmlPackage.INTERACTION_FRAGMENT__GENERAL_ORDERING;
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
            if(baseClass === "uml.InteractionFragment") {
                switch((baseFeatureID)) {
                case uml.UmlPackage.INTERACTION_FRAGMENT__COVERED:
                    return uml.UmlPackage.INTERACTION__COVERED;
                case uml.UmlPackage.INTERACTION_FRAGMENT__ENCLOSING_OPERAND:
                    return uml.UmlPackage.INTERACTION__ENCLOSING_OPERAND;
                case uml.UmlPackage.INTERACTION_FRAGMENT__ENCLOSING_INTERACTION:
                    return uml.UmlPackage.INTERACTION__ENCLOSING_INTERACTION;
                case uml.UmlPackage.INTERACTION_FRAGMENT__GENERAL_ORDERING:
                    return uml.UmlPackage.INTERACTION__GENERAL_ORDERING;
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
         * @param {number} operationID
         * @param {*} arguments
         * @return {*}
         */
        public eInvoke(operationID : number, __arguments : org.eclipse.emf.common.util.EList<any>) : any {
            switch((operationID)) {
            case uml.UmlPackage.INTERACTION___NOT_CONTAINED__DIAGNOSTICCHAIN_MAP:
                return this.not_contained(<any>__arguments.get(0), <any>__arguments.get(1));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    InteractionImpl["__class"] = "uml.impl.InteractionImpl";
    InteractionImpl["__interfaces"] = ["uml.Classifier","ecore4m.EModelElement","uml.Interaction","uml.Namespace","org.eclipse.emf.ecore.EObject","uml.NamedElement","uml.Behavior","org.eclipse.emf.common.notify.Notifier","uml.StructuredClassifier","uml.BehavioredClassifier","uml.RedefinableElement","uml.ParameterableElement","uml.PackageableElement","uml.EncapsulatedClassifier","uml.TemplateableElement","uml.Class","org.eclipse.emf.ecore.EModelElement","uml.Type","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","uml.InteractionFragment","org.eclipse.emf.ecore.InternalEObject"];


}

