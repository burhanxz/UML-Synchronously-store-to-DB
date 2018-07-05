/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Manifestation</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.ManifestationImpl#getUtilizedElement}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.AbstractionImpl
     * @class
     */
    export class ManifestationImpl extends uml.impl.AbstractionImpl implements uml.Manifestation {
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
            return uml.UmlPackage.eINSTANCE.getManifestation();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getUtilizedElement() : uml.PackageableElement {
            return <uml.PackageableElement><any>this.eGet(uml.UmlPackage.eINSTANCE.getManifestation_UtilizedElement(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newUtilizedElement
         */
        public setUtilizedElement(newUtilizedElement : uml.PackageableElement) {
            this.eSet(uml.UmlPackage.eINSTANCE.getManifestation_UtilizedElement(), newUtilizedElement);
        }
    }
    ManifestationImpl["__class"] = "uml.impl.ManifestationImpl";
    ManifestationImpl["__interfaces"] = ["uml.Manifestation","ecore4m.EModelElement","org.eclipse.emf.ecore.EObject","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","uml.Relationship","uml.ParameterableElement","uml.DirectedRelationship","uml.Dependency","uml.PackageableElement","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.InternalEObject","uml.Abstraction"];


}

