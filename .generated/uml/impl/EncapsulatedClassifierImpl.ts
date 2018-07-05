/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Encapsulated Classifier</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.EncapsulatedClassifierImpl#getOwnedPort}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.StructuredClassifierImpl
     * @class
     */
    export abstract class EncapsulatedClassifierImpl extends uml.impl.StructuredClassifierImpl implements uml.EncapsulatedClassifier {
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
            return uml.UmlPackage.eINSTANCE.getEncapsulatedClassifier();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getOwnedPort() : org.eclipse.emf.common.util.EList<uml.Port> {
            return <org.eclipse.emf.common.util.EList<uml.Port>><any>this.eGet(uml.UmlPackage.eINSTANCE.getEncapsulatedClassifier_OwnedPort(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getOwnedPorts() : org.eclipse.emf.common.util.EList<uml.Port> {
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
            case uml.UmlPackage.ENCAPSULATED_CLASSIFIER___GET_OWNED_PORTS:
                return this.getOwnedPorts();
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    EncapsulatedClassifierImpl["__class"] = "uml.impl.EncapsulatedClassifierImpl";
    EncapsulatedClassifierImpl["__interfaces"] = ["uml.Classifier","ecore4m.EModelElement","uml.Namespace","org.eclipse.emf.ecore.EObject","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","uml.StructuredClassifier","uml.RedefinableElement","uml.ParameterableElement","uml.PackageableElement","uml.EncapsulatedClassifier","uml.TemplateableElement","org.eclipse.emf.ecore.EModelElement","uml.Type","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.InternalEObject"];


}

