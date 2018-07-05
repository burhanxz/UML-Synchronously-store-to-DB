/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Artifact</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.ArtifactImpl#getFileName}</li>
     * <li>{@link uml.impl.ArtifactImpl#getManifestation}</li>
     * <li>{@link uml.impl.ArtifactImpl#getNestedArtifact}</li>
     * <li>{@link uml.impl.ArtifactImpl#getOwnedAttribute}</li>
     * <li>{@link uml.impl.ArtifactImpl#getOwnedOperation}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.ClassifierImpl
     * @class
     */
    export class ArtifactImpl extends uml.impl.ClassifierImpl implements uml.Artifact {
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
            return uml.UmlPackage.eINSTANCE.getArtifact();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {string}
         */
        public getFileName() : string {
            return <string>this.eGet(uml.UmlPackage.eINSTANCE.getArtifact_FileName(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {string} newFileName
         */
        public setFileName(newFileName : string) {
            this.eSet(uml.UmlPackage.eINSTANCE.getArtifact_FileName(), newFileName);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        public unsetFileName() {
            this.eUnset(uml.UmlPackage.eINSTANCE.getArtifact_FileName());
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isSetFileName() : boolean {
            return this.eIsSet(uml.UmlPackage.eINSTANCE.getArtifact_FileName());
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getManifestation() : org.eclipse.emf.common.util.EList<uml.Manifestation> {
            return <org.eclipse.emf.common.util.EList<uml.Manifestation>><any>this.eGet(uml.UmlPackage.eINSTANCE.getArtifact_Manifestation(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getNestedArtifact() : org.eclipse.emf.common.util.EList<uml.Artifact> {
            return <org.eclipse.emf.common.util.EList<uml.Artifact>><any>this.eGet(uml.UmlPackage.eINSTANCE.getArtifact_NestedArtifact(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getOwnedAttribute() : org.eclipse.emf.common.util.EList<uml.Property> {
            return <org.eclipse.emf.common.util.EList<uml.Property>><any>this.eGet(uml.UmlPackage.eINSTANCE.getArtifact_OwnedAttribute(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getOwnedOperation() : org.eclipse.emf.common.util.EList<uml.Operation> {
            return <org.eclipse.emf.common.util.EList<uml.Operation>><any>this.eGet(uml.UmlPackage.eINSTANCE.getArtifact_OwnedOperation(), true);
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
         * @param {string} name
         * @param {*} parameterNames
         * @param {*} parameterTypes
         * @param {*} returnType
         * @return {*}
         */
        public createOwnedOperation(name : string, parameterNames : org.eclipse.emf.common.util.EList<string>, parameterTypes : org.eclipse.emf.common.util.EList<uml.Type>, returnType : uml.Type) : uml.Operation {
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
            case uml.UmlPackage.ARTIFACT___CREATE_OWNED_ATTRIBUTE__STRING_TYPE_INT_INT:
                return this.createOwnedAttribute(<any>__arguments.get(0), <any>__arguments.get(1), <any>__arguments.get(2), <any>__arguments.get(3));
            case uml.UmlPackage.ARTIFACT___CREATE_OWNED_OPERATION__STRING_ELIST_ELIST_TYPE:
                return this.createOwnedOperation(<any>__arguments.get(0), <any>__arguments.get(1), <any>__arguments.get(2), <any>__arguments.get(3));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    ArtifactImpl["__class"] = "uml.impl.ArtifactImpl";
    ArtifactImpl["__interfaces"] = ["uml.Classifier","ecore4m.EModelElement","uml.Namespace","org.eclipse.emf.ecore.EObject","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","uml.RedefinableElement","uml.DeployedArtifact","uml.ParameterableElement","uml.PackageableElement","uml.TemplateableElement","org.eclipse.emf.ecore.EModelElement","uml.Artifact","uml.Type","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.InternalEObject"];


}

