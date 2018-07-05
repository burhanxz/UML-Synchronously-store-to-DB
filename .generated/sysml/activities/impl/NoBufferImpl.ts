/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.activities.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>No Buffer</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link sysml.activities.impl.NoBufferImpl#getBase_ObjectNode}</li>
     * </ul>
     * 
     * @generated
     * @extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl
     * @class
     */
    export class NoBufferImpl extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl implements sysml.activities.NoBuffer {
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
            return sysml.activities.ActivitiesPackage.Literals.NO_BUFFER;
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
        public getBase_ObjectNode() : uml.ObjectNode {
            return <uml.ObjectNode><any>this.eGet(sysml.activities.ActivitiesPackage.Literals.NO_BUFFER__BASE_OBJECT_NODE, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newBase_ObjectNode
         */
        public setBase_ObjectNode(newBase_ObjectNode : uml.ObjectNode) {
            this.eSet(sysml.activities.ActivitiesPackage.Literals.NO_BUFFER__BASE_OBJECT_NODE, newBase_ObjectNode);
        }
    }
    NoBufferImpl["__class"] = "sysml.activities.impl.NoBufferImpl";
    NoBufferImpl["__interfaces"] = ["sysml.activities.NoBuffer","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

