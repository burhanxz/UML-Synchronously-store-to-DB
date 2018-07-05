/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Component Realization</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.ComponentRealizationImpl#getRealizingClassifier}</li>
     * <li>{@link uml.impl.ComponentRealizationImpl#getAbstraction}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.RealizationImpl
     * @class
     */
    export class ComponentRealizationImpl extends uml.impl.RealizationImpl implements uml.ComponentRealization {
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
            return uml.UmlPackage.eINSTANCE.getComponentRealization();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getRealizingClassifier() : org.eclipse.emf.common.util.EList<uml.Classifier> {
            return <org.eclipse.emf.common.util.EList<uml.Classifier>><any>this.eGet(uml.UmlPackage.eINSTANCE.getComponentRealization_RealizingClassifier(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getAbstraction() : uml.Component {
            return <uml.Component><any>this.eGet(uml.UmlPackage.eINSTANCE.getComponentRealization_Abstraction(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newAbstraction
         */
        public setAbstraction(newAbstraction : uml.Component) {
            this.eSet(uml.UmlPackage.eINSTANCE.getComponentRealization_Abstraction(), newAbstraction);
        }
    }
    ComponentRealizationImpl["__class"] = "uml.impl.ComponentRealizationImpl";
    ComponentRealizationImpl["__interfaces"] = ["ecore4m.EModelElement","uml.ComponentRealization","org.eclipse.emf.ecore.EObject","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","uml.Relationship","uml.ParameterableElement","uml.DirectedRelationship","uml.Dependency","uml.PackageableElement","uml.Realization","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.InternalEObject","uml.Abstraction"];


}

