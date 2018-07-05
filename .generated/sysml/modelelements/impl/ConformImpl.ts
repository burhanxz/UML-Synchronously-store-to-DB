/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.modelelements.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Conform</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link sysml.modelelements.impl.ConformImpl#getBase_Dependency}</li>
     * </ul>
     * 
     * @generated
     * @extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl
     * @class
     */
    export class ConformImpl extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl implements sysml.modelelements.Conform {
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
            return sysml.modelelements.ModelelementsPackage.Literals.CONFORM;
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
        public getBase_Dependency() : uml.Dependency {
            return <uml.Dependency><any>this.eGet(sysml.modelelements.ModelelementsPackage.Literals.CONFORM__BASE_DEPENDENCY, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newBase_Dependency
         */
        public setBase_Dependency(newBase_Dependency : uml.Dependency) {
            this.eSet(sysml.modelelements.ModelelementsPackage.Literals.CONFORM__BASE_DEPENDENCY, newBase_Dependency);
        }
    }
    ConformImpl["__class"] = "sysml.modelelements.impl.ConformImpl";
    ConformImpl["__interfaces"] = ["org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","sysml.modelelements.Conform","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

