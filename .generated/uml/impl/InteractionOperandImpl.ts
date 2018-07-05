/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Interaction Operand</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.InteractionOperandImpl#getCovered}</li>
     * <li>{@link uml.impl.InteractionOperandImpl#getEnclosingOperand}</li>
     * <li>{@link uml.impl.InteractionOperandImpl#getEnclosingInteraction}</li>
     * <li>{@link uml.impl.InteractionOperandImpl#getGeneralOrdering}</li>
     * <li>{@link uml.impl.InteractionOperandImpl#getFragment}</li>
     * <li>{@link uml.impl.InteractionOperandImpl#getGuard}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.NamespaceImpl
     * @class
     */
    export class InteractionOperandImpl extends uml.impl.NamespaceImpl implements uml.InteractionOperand {
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
            return uml.UmlPackage.eINSTANCE.getInteractionOperand();
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
        public getFragment() : org.eclipse.emf.common.util.EList<uml.InteractionFragment> {
            return <org.eclipse.emf.common.util.EList<uml.InteractionFragment>><any>this.eGet(uml.UmlPackage.eINSTANCE.getInteractionOperand_Fragment(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getGuard() : uml.InteractionConstraint {
            return <uml.InteractionConstraint><any>this.eGet(uml.UmlPackage.eINSTANCE.getInteractionOperand_Guard(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newGuard
         */
        public setGuard(newGuard : uml.InteractionConstraint) {
            this.eSet(uml.UmlPackage.eINSTANCE.getInteractionOperand_Guard(), newGuard);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public guard_contain_references(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.INTERACTION_OPERAND__GUARD_CONTAIN_REFERENCES, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["guard_contain_references", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public guard_directly_prior(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.INTERACTION_OPERAND__GUARD_DIRECTLY_PRIOR, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["guard_directly_prior", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
                case uml.UmlPackage.INTERACTION_OPERAND__COVERED:
                    return uml.UmlPackage.INTERACTION_FRAGMENT__COVERED;
                case uml.UmlPackage.INTERACTION_OPERAND__ENCLOSING_OPERAND:
                    return uml.UmlPackage.INTERACTION_FRAGMENT__ENCLOSING_OPERAND;
                case uml.UmlPackage.INTERACTION_OPERAND__ENCLOSING_INTERACTION:
                    return uml.UmlPackage.INTERACTION_FRAGMENT__ENCLOSING_INTERACTION;
                case uml.UmlPackage.INTERACTION_OPERAND__GENERAL_ORDERING:
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
                    return uml.UmlPackage.INTERACTION_OPERAND__COVERED;
                case uml.UmlPackage.INTERACTION_FRAGMENT__ENCLOSING_OPERAND:
                    return uml.UmlPackage.INTERACTION_OPERAND__ENCLOSING_OPERAND;
                case uml.UmlPackage.INTERACTION_FRAGMENT__ENCLOSING_INTERACTION:
                    return uml.UmlPackage.INTERACTION_OPERAND__ENCLOSING_INTERACTION;
                case uml.UmlPackage.INTERACTION_FRAGMENT__GENERAL_ORDERING:
                    return uml.UmlPackage.INTERACTION_OPERAND__GENERAL_ORDERING;
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
            case uml.UmlPackage.INTERACTION_OPERAND___GUARD_CONTAIN_REFERENCES__DIAGNOSTICCHAIN_MAP:
                return this.guard_contain_references(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.INTERACTION_OPERAND___GUARD_DIRECTLY_PRIOR__DIAGNOSTICCHAIN_MAP:
                return this.guard_directly_prior(<any>__arguments.get(0), <any>__arguments.get(1));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    InteractionOperandImpl["__class"] = "uml.impl.InteractionOperandImpl";
    InteractionOperandImpl["__interfaces"] = ["ecore4m.EModelElement","org.eclipse.emf.ecore.EModelElement","uml.Namespace","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","uml.NamedElement","uml.InteractionOperand","org.eclipse.emf.common.notify.Notifier","uml.InteractionFragment","org.eclipse.emf.ecore.InternalEObject"];


}

