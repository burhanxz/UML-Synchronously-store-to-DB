/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Protocol Conformance</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.ProtocolConformanceImpl#getGeneralMachine}</li>
     * <li>{@link uml.impl.ProtocolConformanceImpl#getSpecificMachine}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.DirectedRelationshipImpl
     * @class
     */
    export class ProtocolConformanceImpl extends uml.impl.DirectedRelationshipImpl implements uml.ProtocolConformance {
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
            return uml.UmlPackage.eINSTANCE.getProtocolConformance();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getGeneralMachine() : uml.ProtocolStateMachine {
            return <uml.ProtocolStateMachine><any>this.eGet(uml.UmlPackage.eINSTANCE.getProtocolConformance_GeneralMachine(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newGeneralMachine
         */
        public setGeneralMachine(newGeneralMachine : uml.ProtocolStateMachine) {
            this.eSet(uml.UmlPackage.eINSTANCE.getProtocolConformance_GeneralMachine(), newGeneralMachine);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getSpecificMachine() : uml.ProtocolStateMachine {
            return <uml.ProtocolStateMachine><any>this.eGet(uml.UmlPackage.eINSTANCE.getProtocolConformance_SpecificMachine(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newSpecificMachine
         */
        public setSpecificMachine(newSpecificMachine : uml.ProtocolStateMachine) {
            this.eSet(uml.UmlPackage.eINSTANCE.getProtocolConformance_SpecificMachine(), newSpecificMachine);
        }
    }
    ProtocolConformanceImpl["__class"] = "uml.impl.ProtocolConformanceImpl";
    ProtocolConformanceImpl["__interfaces"] = ["uml.Relationship","uml.ProtocolConformance","ecore4m.EModelElement","uml.DirectedRelationship","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

