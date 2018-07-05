/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Interface Realization</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.InterfaceRealizationImpl#getContract}</li>
     * <li>{@link uml.impl.InterfaceRealizationImpl#getImplementingClassifier}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.RealizationImpl
     * @class
     */
    export class InterfaceRealizationImpl extends uml.impl.RealizationImpl implements uml.InterfaceRealization {
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
            return uml.UmlPackage.eINSTANCE.getInterfaceRealization();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getContract() : uml.Interface {
            return <uml.Interface><any>this.eGet(uml.UmlPackage.eINSTANCE.getInterfaceRealization_Contract(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newContract
         */
        public setContract(newContract : uml.Interface) {
            this.eSet(uml.UmlPackage.eINSTANCE.getInterfaceRealization_Contract(), newContract);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getImplementingClassifier() : uml.BehavioredClassifier {
            return <uml.BehavioredClassifier><any>this.eGet(uml.UmlPackage.eINSTANCE.getInterfaceRealization_ImplementingClassifier(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newImplementingClassifier
         */
        public setImplementingClassifier(newImplementingClassifier : uml.BehavioredClassifier) {
            this.eSet(uml.UmlPackage.eINSTANCE.getInterfaceRealization_ImplementingClassifier(), newImplementingClassifier);
        }
    }
    InterfaceRealizationImpl["__class"] = "uml.impl.InterfaceRealizationImpl";
    InterfaceRealizationImpl["__interfaces"] = ["ecore4m.EModelElement","org.eclipse.emf.ecore.EObject","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","uml.Relationship","uml.InterfaceRealization","uml.ParameterableElement","uml.DirectedRelationship","uml.Dependency","uml.PackageableElement","uml.Realization","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.InternalEObject","uml.Abstraction"];


}

