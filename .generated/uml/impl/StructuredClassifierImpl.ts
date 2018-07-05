/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Structured Classifier</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.StructuredClassifierImpl#getOwnedAttribute}</li>
     * <li>{@link uml.impl.StructuredClassifierImpl#getOwnedConnector}</li>
     * <li>{@link uml.impl.StructuredClassifierImpl#getPart}</li>
     * <li>{@link uml.impl.StructuredClassifierImpl#getRole}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.ClassifierImpl
     * @class
     */
    export abstract class StructuredClassifierImpl extends uml.impl.ClassifierImpl implements uml.StructuredClassifier {
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
            return uml.UmlPackage.eINSTANCE.getStructuredClassifier();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getOwnedAttribute() : org.eclipse.emf.common.util.EList<uml.Property> {
            return <org.eclipse.emf.common.util.EList<uml.Property>><any>this.eGet(uml.UmlPackage.eINSTANCE.getStructuredClassifier_OwnedAttribute(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getOwnedConnector() : org.eclipse.emf.common.util.EList<uml.Connector> {
            return <org.eclipse.emf.common.util.EList<uml.Connector>><any>this.eGet(uml.UmlPackage.eINSTANCE.getStructuredClassifier_OwnedConnector(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getPart() : org.eclipse.emf.common.util.EList<uml.Property> {
            return <org.eclipse.emf.common.util.EList<uml.Property>><any>this.eGet(uml.UmlPackage.eINSTANCE.getStructuredClassifier_Part(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getRole() : org.eclipse.emf.common.util.EList<uml.ConnectableElement> {
            return <org.eclipse.emf.common.util.EList<uml.ConnectableElement>><any>this.eGet(uml.UmlPackage.eINSTANCE.getStructuredClassifier_Role(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {string} name
         * @param {*} type
         * @param {number} lower
         * @param {number} upper
         * @return {*}
         */
        public createOwnedAttribute(name : string, type : uml.Type, lower : number, upper : number) : uml.Property {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getParts() : org.eclipse.emf.common.util.EList<uml.Property> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public allRoles() : org.eclipse.emf.common.util.EList<uml.ConnectableElement> {
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
            case uml.UmlPackage.STRUCTURED_CLASSIFIER___CREATE_OWNED_ATTRIBUTE__STRING_TYPE_INT_INT:
                return this.createOwnedAttribute(<any>__arguments.get(0), <any>__arguments.get(1), <any>__arguments.get(2), <any>__arguments.get(3));
            case uml.UmlPackage.STRUCTURED_CLASSIFIER___GET_PARTS:
                return this.getParts();
            case uml.UmlPackage.STRUCTURED_CLASSIFIER___ALL_ROLES:
                return this.allRoles();
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    StructuredClassifierImpl["__class"] = "uml.impl.StructuredClassifierImpl";
    StructuredClassifierImpl["__interfaces"] = ["uml.Classifier","ecore4m.EModelElement","uml.Namespace","org.eclipse.emf.ecore.EObject","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","uml.StructuredClassifier","uml.RedefinableElement","uml.ParameterableElement","uml.PackageableElement","uml.TemplateableElement","org.eclipse.emf.ecore.EModelElement","uml.Type","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.InternalEObject"];


}

