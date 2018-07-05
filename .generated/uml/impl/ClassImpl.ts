/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Class</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.ClassImpl#getClassifierBehavior}</li>
     * <li>{@link uml.impl.ClassImpl#getInterfaceRealization}</li>
     * <li>{@link uml.impl.ClassImpl#getOwnedBehavior}</li>
     * <li>{@link uml.impl.ClassImpl#getOwnedOperation}</li>
     * <li>{@link uml.impl.ClassImpl#getExtension}</li>
     * <li>{@link uml.impl.ClassImpl#isIsActive}</li>
     * <li>{@link uml.impl.ClassImpl#getNestedClassifier}</li>
     * <li>{@link uml.impl.ClassImpl#getOwnedReception}</li>
     * <li>{@link uml.impl.ClassImpl#getSuperClass}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.EncapsulatedClassifierImpl
     * @class
     */
    export class ClassImpl extends uml.impl.EncapsulatedClassifierImpl implements uml.Class {
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
            return uml.UmlPackage.eINSTANCE.getClass_();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getClassifierBehavior() : uml.Behavior {
            return <uml.Behavior><any>this.eGet(uml.UmlPackage.eINSTANCE.getBehavioredClassifier_ClassifierBehavior(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newClassifierBehavior
         */
        public setClassifierBehavior(newClassifierBehavior : uml.Behavior) {
            this.eSet(uml.UmlPackage.eINSTANCE.getBehavioredClassifier_ClassifierBehavior(), newClassifierBehavior);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getInterfaceRealization() : org.eclipse.emf.common.util.EList<uml.InterfaceRealization> {
            return <org.eclipse.emf.common.util.EList<uml.InterfaceRealization>><any>this.eGet(uml.UmlPackage.eINSTANCE.getBehavioredClassifier_InterfaceRealization(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getOwnedBehavior() : org.eclipse.emf.common.util.EList<uml.Behavior> {
            return <org.eclipse.emf.common.util.EList<uml.Behavior>><any>this.eGet(uml.UmlPackage.eINSTANCE.getBehavioredClassifier_OwnedBehavior(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getOwnedOperation() : org.eclipse.emf.common.util.EList<uml.Operation> {
            return <org.eclipse.emf.common.util.EList<uml.Operation>><any>this.eGet(uml.UmlPackage.eINSTANCE.getClass_OwnedOperation(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getExtension() : org.eclipse.emf.common.util.EList<uml.Extension> {
            return <org.eclipse.emf.common.util.EList<uml.Extension>><any>this.eGet(uml.UmlPackage.eINSTANCE.getClass_Extension(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isIsActive() : boolean {
            return <boolean>this.eGet(uml.UmlPackage.eINSTANCE.getClass_IsActive(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {boolean} newIsActive
         */
        public setIsActive(newIsActive : boolean) {
            this.eSet(uml.UmlPackage.eINSTANCE.getClass_IsActive(), newIsActive);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getNestedClassifier() : org.eclipse.emf.common.util.EList<uml.Classifier> {
            return <org.eclipse.emf.common.util.EList<uml.Classifier>><any>this.eGet(uml.UmlPackage.eINSTANCE.getClass_NestedClassifier(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getOwnedReception() : org.eclipse.emf.common.util.EList<uml.Reception> {
            return <org.eclipse.emf.common.util.EList<uml.Reception>><any>this.eGet(uml.UmlPackage.eINSTANCE.getClass_OwnedReception(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getSuperClass() : org.eclipse.emf.common.util.EList<uml.Class> {
            return <org.eclipse.emf.common.util.EList<uml.Class>><any>this.eGet(uml.UmlPackage.eINSTANCE.getClass_SuperClass(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public passive_class(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.CLASS__PASSIVE_CLASS, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["passive_class", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
                }
                return false;
            }
            return true;
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
         * @return {boolean}
         */
        public isMetaclass() : boolean {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getExtensions() : org.eclipse.emf.common.util.EList<uml.Extension> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getSuperClasses() : org.eclipse.emf.common.util.EList<uml.Class> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public class_behavior(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.BEHAVIORED_CLASSIFIER__CLASS_BEHAVIOR, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["class_behavior", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
                }
                return false;
            }
            return true;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getAllImplementedInterfaces() : org.eclipse.emf.common.util.EList<uml.Interface> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getImplementedInterfaces() : org.eclipse.emf.common.util.EList<uml.Interface> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {number} derivedFeatureID
         * @param {*} baseClass
         * @return {number}
         */
        public eBaseStructuralFeatureID(derivedFeatureID : number, baseClass : any) : number {
            if(baseClass === "uml.BehavioredClassifier") {
                switch((derivedFeatureID)) {
                case uml.UmlPackage.CLASS__CLASSIFIER_BEHAVIOR:
                    return uml.UmlPackage.BEHAVIORED_CLASSIFIER__CLASSIFIER_BEHAVIOR;
                case uml.UmlPackage.CLASS__INTERFACE_REALIZATION:
                    return uml.UmlPackage.BEHAVIORED_CLASSIFIER__INTERFACE_REALIZATION;
                case uml.UmlPackage.CLASS__OWNED_BEHAVIOR:
                    return uml.UmlPackage.BEHAVIORED_CLASSIFIER__OWNED_BEHAVIOR;
                default:
                    return -1;
                }
            }
            return super.eBaseStructuralFeatureID(derivedFeatureID, baseClass);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {number} baseFeatureID
         * @param {*} baseClass
         * @return {number}
         */
        public eDerivedStructuralFeatureID(baseFeatureID : number, baseClass : any) : number {
            if(baseClass === "uml.BehavioredClassifier") {
                switch((baseFeatureID)) {
                case uml.UmlPackage.BEHAVIORED_CLASSIFIER__CLASSIFIER_BEHAVIOR:
                    return uml.UmlPackage.CLASS__CLASSIFIER_BEHAVIOR;
                case uml.UmlPackage.BEHAVIORED_CLASSIFIER__INTERFACE_REALIZATION:
                    return uml.UmlPackage.CLASS__INTERFACE_REALIZATION;
                case uml.UmlPackage.BEHAVIORED_CLASSIFIER__OWNED_BEHAVIOR:
                    return uml.UmlPackage.CLASS__OWNED_BEHAVIOR;
                default:
                    return -1;
                }
            }
            return super.eDerivedStructuralFeatureID(baseFeatureID, baseClass);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {number} baseOperationID
         * @param {*} baseClass
         * @return {number}
         */
        public eDerivedOperationID(baseOperationID : number, baseClass : any) : number {
            if(baseClass === "uml.BehavioredClassifier") {
                switch((baseOperationID)) {
                case uml.UmlPackage.BEHAVIORED_CLASSIFIER___CLASS_BEHAVIOR__DIAGNOSTICCHAIN_MAP:
                    return uml.UmlPackage.CLASS___CLASS_BEHAVIOR__DIAGNOSTICCHAIN_MAP;
                case uml.UmlPackage.BEHAVIORED_CLASSIFIER___GET_ALL_IMPLEMENTED_INTERFACES:
                    return uml.UmlPackage.CLASS___GET_ALL_IMPLEMENTED_INTERFACES;
                case uml.UmlPackage.BEHAVIORED_CLASSIFIER___GET_IMPLEMENTED_INTERFACES:
                    return uml.UmlPackage.CLASS___GET_IMPLEMENTED_INTERFACES;
                default:
                    return -1;
                }
            }
            return super.eDerivedOperationID(baseOperationID, baseClass);
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
            case uml.UmlPackage.CLASS___PASSIVE_CLASS__DIAGNOSTICCHAIN_MAP:
                return this.passive_class(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.CLASS___CREATE_OWNED_OPERATION__STRING_ELIST_ELIST_TYPE:
                return this.createOwnedOperation(<any>__arguments.get(0), <any>__arguments.get(1), <any>__arguments.get(2), <any>__arguments.get(3));
            case uml.UmlPackage.CLASS___IS_METACLASS:
                return this.isMetaclass();
            case uml.UmlPackage.CLASS___GET_EXTENSIONS:
                return this.getExtensions();
            case uml.UmlPackage.CLASS___GET_SUPER_CLASSES:
                return this.getSuperClasses();
            case uml.UmlPackage.CLASS___CLASS_BEHAVIOR__DIAGNOSTICCHAIN_MAP:
                return this.class_behavior(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.CLASS___GET_ALL_IMPLEMENTED_INTERFACES:
                return this.getAllImplementedInterfaces();
            case uml.UmlPackage.CLASS___GET_IMPLEMENTED_INTERFACES:
                return this.getImplementedInterfaces();
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    ClassImpl["__class"] = "uml.impl.ClassImpl";
    ClassImpl["__interfaces"] = ["uml.Classifier","ecore4m.EModelElement","uml.Namespace","org.eclipse.emf.ecore.EObject","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","uml.StructuredClassifier","uml.BehavioredClassifier","uml.RedefinableElement","uml.ParameterableElement","uml.PackageableElement","uml.EncapsulatedClassifier","uml.TemplateableElement","uml.Class","org.eclipse.emf.ecore.EModelElement","uml.Type","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.InternalEObject"];


}

