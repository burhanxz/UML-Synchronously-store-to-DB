/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Component</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.ComponentImpl#isIsIndirectlyInstantiated}</li>
     * <li>{@link uml.impl.ComponentImpl#getPackagedElement}</li>
     * <li>{@link uml.impl.ComponentImpl#getProvided}</li>
     * <li>{@link uml.impl.ComponentImpl#getRealization}</li>
     * <li>{@link uml.impl.ComponentImpl#getRequired}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.ClassImpl
     * @class
     */
    export class ComponentImpl extends uml.impl.ClassImpl implements uml.Component {
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
            return uml.UmlPackage.eINSTANCE.getComponent();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isIsIndirectlyInstantiated() : boolean {
            return <boolean>this.eGet(uml.UmlPackage.eINSTANCE.getComponent_IsIndirectlyInstantiated(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {boolean} newIsIndirectlyInstantiated
         */
        public setIsIndirectlyInstantiated(newIsIndirectlyInstantiated : boolean) {
            this.eSet(uml.UmlPackage.eINSTANCE.getComponent_IsIndirectlyInstantiated(), newIsIndirectlyInstantiated);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getPackagedElement() : org.eclipse.emf.common.util.EList<uml.PackageableElement> {
            return <org.eclipse.emf.common.util.EList<uml.PackageableElement>><any>this.eGet(uml.UmlPackage.eINSTANCE.getComponent_PackagedElement(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getProvided() : org.eclipse.emf.common.util.EList<uml.Interface> {
            return <org.eclipse.emf.common.util.EList<uml.Interface>><any>this.eGet(uml.UmlPackage.eINSTANCE.getComponent_Provided(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getRealization() : org.eclipse.emf.common.util.EList<uml.ComponentRealization> {
            return <org.eclipse.emf.common.util.EList<uml.ComponentRealization>><any>this.eGet(uml.UmlPackage.eINSTANCE.getComponent_Realization(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getRequired() : org.eclipse.emf.common.util.EList<uml.Interface> {
            return <org.eclipse.emf.common.util.EList<uml.Interface>><any>this.eGet(uml.UmlPackage.eINSTANCE.getComponent_Required(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public no_nested_classifiers(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.COMPONENT__NO_NESTED_CLASSIFIERS, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["no_nested_classifiers", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
                }
                return false;
            }
            return true;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public no_packaged_elements(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.COMPONENT__NO_PACKAGED_ELEMENTS, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["no_packaged_elements", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
         * @param {boolean} isAbstract
         * @return {*}
         */
        public createOwnedClass(name : string, isAbstract : boolean) : uml.Class {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {string} name
         * @return {*}
         */
        public createOwnedEnumeration(name : string) : uml.Enumeration {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {string} name
         * @return {*}
         */
        public createOwnedInterface(name : string) : uml.Interface {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {string} name
         * @return {*}
         */
        public createOwnedPrimitiveType(name : string) : uml.PrimitiveType {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getProvideds() : org.eclipse.emf.common.util.EList<uml.Interface> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getRequireds() : org.eclipse.emf.common.util.EList<uml.Interface> {
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
            case uml.UmlPackage.COMPONENT___NO_NESTED_CLASSIFIERS__DIAGNOSTICCHAIN_MAP:
                return this.no_nested_classifiers(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.COMPONENT___NO_PACKAGED_ELEMENTS__DIAGNOSTICCHAIN_MAP:
                return this.no_packaged_elements(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.COMPONENT___CREATE_OWNED_CLASS__STRING_BOOLEAN:
                return this.createOwnedClass(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.COMPONENT___CREATE_OWNED_ENUMERATION__STRING:
                return this.createOwnedEnumeration(<any>__arguments.get(0));
            case uml.UmlPackage.COMPONENT___CREATE_OWNED_INTERFACE__STRING:
                return this.createOwnedInterface(<any>__arguments.get(0));
            case uml.UmlPackage.COMPONENT___CREATE_OWNED_PRIMITIVE_TYPE__STRING:
                return this.createOwnedPrimitiveType(<any>__arguments.get(0));
            case uml.UmlPackage.COMPONENT___GET_PROVIDEDS:
                return this.getProvideds();
            case uml.UmlPackage.COMPONENT___GET_REQUIREDS:
                return this.getRequireds();
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    ComponentImpl["__class"] = "uml.impl.ComponentImpl";
    ComponentImpl["__interfaces"] = ["uml.Classifier","ecore4m.EModelElement","uml.Namespace","org.eclipse.emf.ecore.EObject","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","uml.StructuredClassifier","uml.BehavioredClassifier","uml.RedefinableElement","uml.ParameterableElement","uml.PackageableElement","uml.EncapsulatedClassifier","uml.TemplateableElement","uml.Component","uml.Class","org.eclipse.emf.ecore.EModelElement","uml.Type","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.InternalEObject"];


}

