/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Behaviored Classifier</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.BehavioredClassifierImpl#getClassifierBehavior}</li>
     * <li>{@link uml.impl.BehavioredClassifierImpl#getInterfaceRealization}</li>
     * <li>{@link uml.impl.BehavioredClassifierImpl#getOwnedBehavior}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.ClassifierImpl
     * @class
     */
    export abstract class BehavioredClassifierImpl extends uml.impl.ClassifierImpl implements uml.BehavioredClassifier {
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
            return uml.UmlPackage.eINSTANCE.getBehavioredClassifier();
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
         * @param {number} operationID
         * @param {*} arguments
         * @return {*}
         */
        public eInvoke(operationID : number, __arguments : org.eclipse.emf.common.util.EList<any>) : any {
            switch((operationID)) {
            case uml.UmlPackage.BEHAVIORED_CLASSIFIER___CLASS_BEHAVIOR__DIAGNOSTICCHAIN_MAP:
                return this.class_behavior(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.BEHAVIORED_CLASSIFIER___GET_ALL_IMPLEMENTED_INTERFACES:
                return this.getAllImplementedInterfaces();
            case uml.UmlPackage.BEHAVIORED_CLASSIFIER___GET_IMPLEMENTED_INTERFACES:
                return this.getImplementedInterfaces();
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    BehavioredClassifierImpl["__class"] = "uml.impl.BehavioredClassifierImpl";
    BehavioredClassifierImpl["__interfaces"] = ["uml.Classifier","ecore4m.EModelElement","uml.Namespace","org.eclipse.emf.ecore.EObject","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","uml.BehavioredClassifier","uml.RedefinableElement","uml.ParameterableElement","uml.PackageableElement","uml.TemplateableElement","org.eclipse.emf.ecore.EModelElement","uml.Type","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.InternalEObject"];


}

