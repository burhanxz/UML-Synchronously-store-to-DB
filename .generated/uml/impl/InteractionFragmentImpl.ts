/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Interaction Fragment</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.InteractionFragmentImpl#getCovered}</li>
     * <li>{@link uml.impl.InteractionFragmentImpl#getEnclosingOperand}</li>
     * <li>{@link uml.impl.InteractionFragmentImpl#getEnclosingInteraction}</li>
     * <li>{@link uml.impl.InteractionFragmentImpl#getGeneralOrdering}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.NamedElementImpl
     * @class
     */
    export abstract class InteractionFragmentImpl extends uml.impl.NamedElementImpl implements uml.InteractionFragment {
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
            return uml.UmlPackage.eINSTANCE.getInteractionFragment();
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
    }
    InteractionFragmentImpl["__class"] = "uml.impl.InteractionFragmentImpl";
    InteractionFragmentImpl["__interfaces"] = ["ecore4m.EModelElement","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","uml.NamedElement","uml.InteractionFragment","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

