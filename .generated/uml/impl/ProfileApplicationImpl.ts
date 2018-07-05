/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Profile Application</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.ProfileApplicationImpl#getAppliedProfile}</li>
     * <li>{@link uml.impl.ProfileApplicationImpl#isIsStrict}</li>
     * <li>{@link uml.impl.ProfileApplicationImpl#getApplyingPackage}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.DirectedRelationshipImpl
     * @class
     */
    export class ProfileApplicationImpl extends uml.impl.DirectedRelationshipImpl implements uml.ProfileApplication {
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
            return uml.UmlPackage.eINSTANCE.getProfileApplication();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getAppliedProfile() : uml.Profile {
            return <uml.Profile><any>this.eGet(uml.UmlPackage.eINSTANCE.getProfileApplication_AppliedProfile(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newAppliedProfile
         */
        public setAppliedProfile(newAppliedProfile : uml.Profile) {
            this.eSet(uml.UmlPackage.eINSTANCE.getProfileApplication_AppliedProfile(), newAppliedProfile);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isIsStrict() : boolean {
            return <boolean>this.eGet(uml.UmlPackage.eINSTANCE.getProfileApplication_IsStrict(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {boolean} newIsStrict
         */
        public setIsStrict(newIsStrict : boolean) {
            this.eSet(uml.UmlPackage.eINSTANCE.getProfileApplication_IsStrict(), newIsStrict);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getApplyingPackage() : uml.Package {
            return <uml.Package><any>this.eGet(uml.UmlPackage.eINSTANCE.getProfileApplication_ApplyingPackage(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newApplyingPackage
         */
        public setApplyingPackage(newApplyingPackage : uml.Package) {
            this.eSet(uml.UmlPackage.eINSTANCE.getProfileApplication_ApplyingPackage(), newApplyingPackage);
        }

        public getAppliedDefinition$() : org.eclipse.emf.ecore.EPackage {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        public getAppliedDefinition$uml_NamedElement(namedElement : uml.NamedElement) : org.eclipse.emf.ecore.ENamedElement {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} namedElement
         * @return {*}
         */
        public getAppliedDefinition(namedElement? : any) : any {
            if(((namedElement != null && (namedElement["__interfaces"] != null && namedElement["__interfaces"].indexOf("uml.NamedElement") >= 0 || namedElement.constructor != null && namedElement.constructor["__interfaces"] != null && namedElement.constructor["__interfaces"].indexOf("uml.NamedElement") >= 0)) || namedElement === null)) {
                return <any>this.getAppliedDefinition$uml_NamedElement(namedElement);
            } else if(namedElement === undefined) {
                return <any>this.getAppliedDefinition$();
            } else throw new Error('invalid overload');
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
            case uml.UmlPackage.PROFILE_APPLICATION___GET_APPLIED_DEFINITION:
                return this.getAppliedDefinition();
            case uml.UmlPackage.PROFILE_APPLICATION___GET_APPLIED_DEFINITION__NAMEDELEMENT:
                return this.getAppliedDefinition$uml_NamedElement(<any>__arguments.get(0));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    ProfileApplicationImpl["__class"] = "uml.impl.ProfileApplicationImpl";
    ProfileApplicationImpl["__interfaces"] = ["uml.Relationship","ecore4m.EModelElement","uml.DirectedRelationship","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","uml.ProfileApplication","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

