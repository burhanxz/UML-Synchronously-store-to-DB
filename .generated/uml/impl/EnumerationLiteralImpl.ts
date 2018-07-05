/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Enumeration Literal</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.EnumerationLiteralImpl#getEnumeration}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.InstanceSpecificationImpl
     * @class
     */
    export class EnumerationLiteralImpl extends uml.impl.InstanceSpecificationImpl implements uml.EnumerationLiteral {
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
            return uml.UmlPackage.eINSTANCE.getEnumerationLiteral();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getEnumeration() : uml.Enumeration {
            return <uml.Enumeration><any>this.eGet(uml.UmlPackage.eINSTANCE.getEnumerationLiteral_Enumeration(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newEnumeration
         */
        public setEnumeration(newEnumeration : uml.Enumeration) {
            this.eSet(uml.UmlPackage.eINSTANCE.getEnumerationLiteral_Enumeration(), newEnumeration);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getClassifiers() : org.eclipse.emf.common.util.EList<uml.Classifier> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getClassifier() : uml.Enumeration {
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
            case uml.UmlPackage.ENUMERATION_LITERAL___GET_CLASSIFIERS:
                return this.getClassifiers();
            case uml.UmlPackage.ENUMERATION_LITERAL___GET_CLASSIFIER:
                return this.getClassifiers();
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    EnumerationLiteralImpl["__class"] = "uml.impl.EnumerationLiteralImpl";
    EnumerationLiteralImpl["__interfaces"] = ["ecore4m.EModelElement","org.eclipse.emf.ecore.EObject","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","uml.DeployedArtifact","uml.ParameterableElement","uml.PackageableElement","org.eclipse.emf.ecore.EModelElement","uml.InstanceSpecification","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","uml.EnumerationLiteral","uml.DeploymentTarget","org.eclipse.emf.ecore.InternalEObject"];


}

