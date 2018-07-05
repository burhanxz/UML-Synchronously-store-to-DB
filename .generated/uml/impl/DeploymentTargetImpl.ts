/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Deployment Target</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.DeploymentTargetImpl#getDeployedElement}</li>
     * <li>{@link uml.impl.DeploymentTargetImpl#getDeployment}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.NamedElementImpl
     * @class
     */
    export abstract class DeploymentTargetImpl extends uml.impl.NamedElementImpl implements uml.DeploymentTarget {
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
            return uml.UmlPackage.eINSTANCE.getDeploymentTarget();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getDeployedElement() : org.eclipse.emf.common.util.EList<uml.PackageableElement> {
            return <org.eclipse.emf.common.util.EList<uml.PackageableElement>><any>this.eGet(uml.UmlPackage.eINSTANCE.getDeploymentTarget_DeployedElement(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getDeployment() : org.eclipse.emf.common.util.EList<uml.Deployment> {
            return <org.eclipse.emf.common.util.EList<uml.Deployment>><any>this.eGet(uml.UmlPackage.eINSTANCE.getDeploymentTarget_Deployment(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getDeployedElements() : org.eclipse.emf.common.util.EList<uml.PackageableElement> {
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
            case uml.UmlPackage.DEPLOYMENT_TARGET___GET_DEPLOYED_ELEMENTS:
                return this.getDeployedElements();
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    DeploymentTargetImpl["__class"] = "uml.impl.DeploymentTargetImpl";
    DeploymentTargetImpl["__interfaces"] = ["ecore4m.EModelElement","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","uml.DeploymentTarget","org.eclipse.emf.ecore.InternalEObject"];


}

