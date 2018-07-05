/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.activities.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Overwrite</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link sysml.activities.impl.OverwriteImpl#getBase_ObjectNode}</li>
     * </ul>
     * 
     * @generated
     * @extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl
     * @class
     */
    export class OverwriteImpl extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl implements sysml.activities.Overwrite {
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
            return sysml.activities.ActivitiesPackage.Literals.OVERWRITE;
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
            return <uml.ObjectNode><any>this.eGet(sysml.activities.ActivitiesPackage.Literals.OVERWRITE__BASE_OBJECT_NODE, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newBase_ObjectNode
         */
        public setBase_ObjectNode(newBase_ObjectNode : uml.ObjectNode) {
            this.eSet(sysml.activities.ActivitiesPackage.Literals.OVERWRITE__BASE_OBJECT_NODE, newBase_ObjectNode);
        }
    }
    OverwriteImpl["__class"] = "sysml.activities.impl.OverwriteImpl";
    OverwriteImpl["__interfaces"] = ["sysml.activities.Overwrite","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

