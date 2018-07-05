/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Collaboration</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.CollaborationImpl#getClassifierBehavior}</li>
     * <li>{@link uml.impl.CollaborationImpl#getInterfaceRealization}</li>
     * <li>{@link uml.impl.CollaborationImpl#getOwnedBehavior}</li>
     * <li>{@link uml.impl.CollaborationImpl#getCollaborationRole}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.StructuredClassifierImpl
     * @class
     */
    export class CollaborationImpl extends uml.impl.StructuredClassifierImpl implements uml.Collaboration {
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
            return uml.UmlPackage.eINSTANCE.getCollaboration();
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
        public getCollaborationRole() : org.eclipse.emf.common.util.EList<uml.ConnectableElement> {
            return <org.eclipse.emf.common.util.EList<uml.ConnectableElement>><any>this.eGet(uml.UmlPackage.eINSTANCE.getCollaboration_CollaborationRole(), true);
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
                case uml.UmlPackage.COLLABORATION__CLASSIFIER_BEHAVIOR:
                    return uml.UmlPackage.BEHAVIORED_CLASSIFIER__CLASSIFIER_BEHAVIOR;
                case uml.UmlPackage.COLLABORATION__INTERFACE_REALIZATION:
                    return uml.UmlPackage.BEHAVIORED_CLASSIFIER__INTERFACE_REALIZATION;
                case uml.UmlPackage.COLLABORATION__OWNED_BEHAVIOR:
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
                    return uml.UmlPackage.COLLABORATION__CLASSIFIER_BEHAVIOR;
                case uml.UmlPackage.BEHAVIORED_CLASSIFIER__INTERFACE_REALIZATION:
                    return uml.UmlPackage.COLLABORATION__INTERFACE_REALIZATION;
                case uml.UmlPackage.BEHAVIORED_CLASSIFIER__OWNED_BEHAVIOR:
                    return uml.UmlPackage.COLLABORATION__OWNED_BEHAVIOR;
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
                    return uml.UmlPackage.COLLABORATION___CLASS_BEHAVIOR__DIAGNOSTICCHAIN_MAP;
                case uml.UmlPackage.BEHAVIORED_CLASSIFIER___GET_ALL_IMPLEMENTED_INTERFACES:
                    return uml.UmlPackage.COLLABORATION___GET_ALL_IMPLEMENTED_INTERFACES;
                case uml.UmlPackage.BEHAVIORED_CLASSIFIER___GET_IMPLEMENTED_INTERFACES:
                    return uml.UmlPackage.COLLABORATION___GET_IMPLEMENTED_INTERFACES;
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
            case uml.UmlPackage.COLLABORATION___CLASS_BEHAVIOR__DIAGNOSTICCHAIN_MAP:
                return this.class_behavior(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.COLLABORATION___GET_ALL_IMPLEMENTED_INTERFACES:
                return this.getAllImplementedInterfaces();
            case uml.UmlPackage.COLLABORATION___GET_IMPLEMENTED_INTERFACES:
                return this.getImplementedInterfaces();
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    CollaborationImpl["__class"] = "uml.impl.CollaborationImpl";
    CollaborationImpl["__interfaces"] = ["uml.Classifier","ecore4m.EModelElement","uml.Namespace","org.eclipse.emf.ecore.EObject","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","uml.StructuredClassifier","uml.BehavioredClassifier","uml.RedefinableElement","uml.ParameterableElement","uml.PackageableElement","uml.TemplateableElement","uml.Collaboration","org.eclipse.emf.ecore.EModelElement","uml.Type","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.InternalEObject"];


}

