/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.requirements.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Requirement</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link sysml.requirements.impl.RequirementImpl#getText}</li>
     * <li>{@link sysml.requirements.impl.RequirementImpl#getId}</li>
     * <li>{@link sysml.requirements.impl.RequirementImpl#getDerived}</li>
     * <li>{@link sysml.requirements.impl.RequirementImpl#getDerivedFrom}</li>
     * <li>{@link sysml.requirements.impl.RequirementImpl#getSatisfiedBy}</li>
     * <li>{@link sysml.requirements.impl.RequirementImpl#getRefinedBy}</li>
     * <li>{@link sysml.requirements.impl.RequirementImpl#getTracedTo}</li>
     * <li>{@link sysml.requirements.impl.RequirementImpl#getVerifiedBy}</li>
     * <li>{@link sysml.requirements.impl.RequirementImpl#getMaster}</li>
     * <li>{@link sysml.requirements.impl.RequirementImpl#getBase_Class}</li>
     * </ul>
     * 
     * @generated
     * @extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl
     * @class
     */
    export class RequirementImpl extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl implements sysml.requirements.Requirement {
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
            return sysml.requirements.RequirementsPackage.Literals.REQUIREMENT;
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
         * @return {string}
         */
        public getText() : string {
            return <string>this.eGet(sysml.requirements.RequirementsPackage.Literals.REQUIREMENT__TEXT, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {string} newText
         */
        public setText(newText : string) {
            this.eSet(sysml.requirements.RequirementsPackage.Literals.REQUIREMENT__TEXT, newText);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {string}
         */
        public getId() : string {
            return <string>this.eGet(sysml.requirements.RequirementsPackage.Literals.REQUIREMENT__ID, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {string} newId
         */
        public setId(newId : string) {
            this.eSet(sysml.requirements.RequirementsPackage.Literals.REQUIREMENT__ID, newId);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getDerived() : org.eclipse.emf.common.util.EList<sysml.requirements.Requirement> {
            return <org.eclipse.emf.common.util.EList<sysml.requirements.Requirement>><any>this.eGet(sysml.requirements.RequirementsPackage.Literals.REQUIREMENT__DERIVED, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getDerivedFrom() : org.eclipse.emf.common.util.EList<sysml.requirements.Requirement> {
            return <org.eclipse.emf.common.util.EList<sysml.requirements.Requirement>><any>this.eGet(sysml.requirements.RequirementsPackage.Literals.REQUIREMENT__DERIVED_FROM, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getSatisfiedBy() : org.eclipse.emf.common.util.EList<uml.NamedElement> {
            return <org.eclipse.emf.common.util.EList<uml.NamedElement>><any>this.eGet(sysml.requirements.RequirementsPackage.Literals.REQUIREMENT__SATISFIED_BY, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getRefinedBy() : org.eclipse.emf.common.util.EList<uml.NamedElement> {
            return <org.eclipse.emf.common.util.EList<uml.NamedElement>><any>this.eGet(sysml.requirements.RequirementsPackage.Literals.REQUIREMENT__REFINED_BY, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getTracedTo() : org.eclipse.emf.common.util.EList<uml.NamedElement> {
            return <org.eclipse.emf.common.util.EList<uml.NamedElement>><any>this.eGet(sysml.requirements.RequirementsPackage.Literals.REQUIREMENT__TRACED_TO, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getVerifiedBy() : org.eclipse.emf.common.util.EList<uml.NamedElement> {
            return <org.eclipse.emf.common.util.EList<uml.NamedElement>><any>this.eGet(sysml.requirements.RequirementsPackage.Literals.REQUIREMENT__VERIFIED_BY, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getMaster() : sysml.requirements.Requirement {
            return <sysml.requirements.Requirement><any>this.eGet(sysml.requirements.RequirementsPackage.Literals.REQUIREMENT__MASTER, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getBase_Class() : uml.Class {
            return <uml.Class><any>this.eGet(sysml.requirements.RequirementsPackage.Literals.REQUIREMENT__BASE_CLASS, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newBase_Class
         */
        public setBase_Class(newBase_Class : uml.Class) {
            this.eSet(sysml.requirements.RequirementsPackage.Literals.REQUIREMENT__BASE_CLASS, newBase_Class);
        }
    }
    RequirementImpl["__class"] = "sysml.requirements.impl.RequirementImpl";
    RequirementImpl["__interfaces"] = ["sysml.requirements.Requirement","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

