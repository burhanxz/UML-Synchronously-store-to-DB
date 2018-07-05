/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>State Invariant</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.StateInvariantImpl#getInvariant}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.InteractionFragmentImpl
     * @class
     */
    export class StateInvariantImpl extends uml.impl.InteractionFragmentImpl implements uml.StateInvariant {
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
            return uml.UmlPackage.eINSTANCE.getStateInvariant();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getInvariant() : uml.Constraint {
            return <uml.Constraint><any>this.eGet(uml.UmlPackage.eINSTANCE.getStateInvariant_Invariant(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newInvariant
         */
        public setInvariant(newInvariant : uml.Constraint) {
            this.eSet(uml.UmlPackage.eINSTANCE.getStateInvariant_Invariant(), newInvariant);
        }
    }
    StateInvariantImpl["__class"] = "uml.impl.StateInvariantImpl";
    StateInvariantImpl["__interfaces"] = ["ecore4m.EModelElement","uml.StateInvariant","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","uml.NamedElement","uml.InteractionFragment","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

