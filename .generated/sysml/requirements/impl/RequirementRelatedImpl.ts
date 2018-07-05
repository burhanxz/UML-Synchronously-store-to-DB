/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.requirements.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Requirement Related</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link sysml.requirements.impl.RequirementRelatedImpl#getBase_NamedElement}</li>
     * <li>{@link sysml.requirements.impl.RequirementRelatedImpl#getTracedFrom}</li>
     * <li>{@link sysml.requirements.impl.RequirementRelatedImpl#getSatisfies}</li>
     * <li>{@link sysml.requirements.impl.RequirementRelatedImpl#getRefines}</li>
     * <li>{@link sysml.requirements.impl.RequirementRelatedImpl#getVerifies}</li>
     * </ul>
     * 
     * @generated
     * @extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl
     * @class
     */
    export class RequirementRelatedImpl extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl implements sysml.requirements.RequirementRelated {
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
            return sysml.requirements.RequirementsPackage.Literals.REQUIREMENT_RELATED;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {number}
         */
        eStaticFeatureCount() : number {
            return 0;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getBase_NamedElement() : uml.NamedElement {
            return <uml.NamedElement><any>this.eGet(sysml.requirements.RequirementsPackage.Literals.REQUIREMENT_RELATED__BASE_NAMED_ELEMENT, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newBase_NamedElement
         */
        public setBase_NamedElement(newBase_NamedElement : uml.NamedElement) {
            this.eSet(sysml.requirements.RequirementsPackage.Literals.REQUIREMENT_RELATED__BASE_NAMED_ELEMENT, newBase_NamedElement);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getTracedFrom() : org.eclipse.emf.common.util.EList<sysml.requirements.Requirement> {
            return <org.eclipse.emf.common.util.EList<sysml.requirements.Requirement>><any>this.eGet(sysml.requirements.RequirementsPackage.Literals.REQUIREMENT_RELATED__TRACED_FROM, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getSatisfies() : org.eclipse.emf.common.util.EList<sysml.requirements.Requirement> {
            return <org.eclipse.emf.common.util.EList<sysml.requirements.Requirement>><any>this.eGet(sysml.requirements.RequirementsPackage.Literals.REQUIREMENT_RELATED__SATISFIES, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getRefines() : org.eclipse.emf.common.util.EList<sysml.requirements.Requirement> {
            return <org.eclipse.emf.common.util.EList<sysml.requirements.Requirement>><any>this.eGet(sysml.requirements.RequirementsPackage.Literals.REQUIREMENT_RELATED__REFINES, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getVerifies() : org.eclipse.emf.common.util.EList<sysml.requirements.Requirement> {
            return <org.eclipse.emf.common.util.EList<sysml.requirements.Requirement>><any>this.eGet(sysml.requirements.RequirementsPackage.Literals.REQUIREMENT_RELATED__VERIFIES, true);
        }
    }
    RequirementRelatedImpl["__class"] = "sysml.requirements.impl.RequirementRelatedImpl";
    RequirementRelatedImpl["__interfaces"] = ["sysml.requirements.RequirementRelated","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

