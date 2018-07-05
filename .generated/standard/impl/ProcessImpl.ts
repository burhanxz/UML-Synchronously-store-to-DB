/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace standard.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Process</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link standard.impl.ProcessImpl#getBase_Component}</li>
     * </ul>
     * 
     * @generated
     * @extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl
     * @class
     */
    export class ProcessImpl extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl implements standard.Process {
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
            return standard.StandardPackage.Literals.PROCESS;
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
        public getBase_Component() : uml.Component {
            return <uml.Component><any>this.eGet(standard.StandardPackage.Literals.PROCESS__BASE_COMPONENT, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newBase_Component
         */
        public setBase_Component(newBase_Component : uml.Component) {
            this.eSet(standard.StandardPackage.Literals.PROCESS__BASE_COMPONENT, newBase_Component);
        }
    }
    ProcessImpl["__class"] = "standard.impl.ProcessImpl";
    ProcessImpl["__interfaces"] = ["org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.common.notify.Notifier","standard.Process","org.eclipse.emf.ecore.InternalEObject"];


}

