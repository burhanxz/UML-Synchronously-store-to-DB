/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.modelelements.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Problem</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link sysml.modelelements.impl.ProblemImpl#getBase_Comment}</li>
     * </ul>
     * 
     * @generated
     * @extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl
     * @class
     */
    export class ProblemImpl extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl implements sysml.modelelements.Problem {
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
            return sysml.modelelements.ModelelementsPackage.Literals.PROBLEM;
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
        public getBase_Comment() : uml.Comment {
            return <uml.Comment><any>this.eGet(sysml.modelelements.ModelelementsPackage.Literals.PROBLEM__BASE_COMMENT, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newBase_Comment
         */
        public setBase_Comment(newBase_Comment : uml.Comment) {
            this.eSet(sysml.modelelements.ModelelementsPackage.Literals.PROBLEM__BASE_COMMENT, newBase_Comment);
        }
    }
    ProblemImpl["__class"] = "sysml.modelelements.impl.ProblemImpl";
    ProblemImpl["__interfaces"] = ["sysml.modelelements.Problem","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

