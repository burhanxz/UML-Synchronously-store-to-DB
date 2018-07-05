/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace ecore4m.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>EModel Element</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link ecore4m.impl.EModelElementImpl#getEAnnotations}</li>
     * </ul>
     * 
     * @generated
     * @extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl
     * @class
     */
    export abstract class EModelElementImpl extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl implements org.eclipse.emf.ecore.EModelElement {
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
            return org.eclipse.emf.ecore.EcorePackage.Literals.EMODEL_ELEMENT;
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
        public getEAnnotations() : org.eclipse.emf.common.util.EList<org.eclipse.emf.ecore.EAnnotation> {
            return <org.eclipse.emf.common.util.EList<org.eclipse.emf.ecore.EAnnotation>><any>this.eGet(org.eclipse.emf.ecore.EcorePackage.Literals.EMODEL_ELEMENT__EANNOTATIONS, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {string} source
         * @return {*}
         */
        public getEAnnotation(source : string) : org.eclipse.emf.ecore.EAnnotation {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
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
            case org.eclipse.emf.ecore.EcorePackage.EMODEL_ELEMENT___GET_EANNOTATION__STRING:
                return this.getEAnnotation(<any>__arguments.get(0));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    EModelElementImpl["__class"] = "ecore4m.impl.EModelElementImpl";
    EModelElementImpl["__interfaces"] = ["org.eclipse.emf.ecore.EModelElement","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

