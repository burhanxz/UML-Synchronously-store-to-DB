/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Named Element</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.NamedElementImpl#getClientDependency}</li>
     * <li>{@link uml.impl.NamedElementImpl#getName}</li>
     * <li>{@link uml.impl.NamedElementImpl#getNameExpression}</li>
     * <li>{@link uml.impl.NamedElementImpl#getNamespace}</li>
     * <li>{@link uml.impl.NamedElementImpl#getQualifiedName}</li>
     * <li>{@link uml.impl.NamedElementImpl#getVisibility}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.ElementImpl
     * @class
     */
    export abstract class NamedElementImpl extends uml.impl.ElementImpl implements uml.NamedElement {
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
            return uml.UmlPackage.eINSTANCE.getNamedElement();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getClientDependency() : org.eclipse.emf.common.util.EList<uml.Dependency> {
            return <org.eclipse.emf.common.util.EList<uml.Dependency>><any>this.eGet(uml.UmlPackage.eINSTANCE.getNamedElement_ClientDependency(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {string}
         */
        public getName() : string {
            return <string>this.eGet(uml.UmlPackage.eINSTANCE.getNamedElement_Name(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {string} newName
         */
        public setName(newName : string) {
            this.eSet(uml.UmlPackage.eINSTANCE.getNamedElement_Name(), newName);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        public unsetName() {
            this.eUnset(uml.UmlPackage.eINSTANCE.getNamedElement_Name());
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isSetName() : boolean {
            return this.eIsSet(uml.UmlPackage.eINSTANCE.getNamedElement_Name());
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getNameExpression() : uml.StringExpression {
            return <uml.StringExpression><any>this.eGet(uml.UmlPackage.eINSTANCE.getNamedElement_NameExpression(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newNameExpression
         */
        public setNameExpression(newNameExpression : uml.StringExpression) {
            this.eSet(uml.UmlPackage.eINSTANCE.getNamedElement_NameExpression(), newNameExpression);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getNamespace() : uml.Namespace {
            return <uml.Namespace><any>this.eGet(uml.UmlPackage.eINSTANCE.getNamedElement_Namespace(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {string}
         */
        public getQualifiedName() : string {
            return <string>this.eGet(uml.UmlPackage.eINSTANCE.getNamedElement_QualifiedName(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {uml.VisibilityKind}
         */
        public getVisibility() : uml.VisibilityKind {
            return <uml.VisibilityKind>this.eGet(uml.UmlPackage.eINSTANCE.getNamedElement_Visibility(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {uml.VisibilityKind} newVisibility
         */
        public setVisibility(newVisibility : uml.VisibilityKind) {
            this.eSet(uml.UmlPackage.eINSTANCE.getNamedElement_Visibility(), newVisibility);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        public unsetVisibility() {
            this.eUnset(uml.UmlPackage.eINSTANCE.getNamedElement_Visibility());
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isSetVisibility() : boolean {
            return this.eIsSet(uml.UmlPackage.eINSTANCE.getNamedElement_Visibility());
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public visibility_needs_ownership(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.NAMED_ELEMENT__VISIBILITY_NEEDS_OWNERSHIP, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["visibility_needs_ownership", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public has_qualified_name(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.NAMED_ELEMENT__HAS_QUALIFIED_NAME, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["has_qualified_name", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public has_no_qualified_name(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.NAMED_ELEMENT__HAS_NO_QUALIFIED_NAME, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["has_no_qualified_name", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
                }
                return false;
            }
            return true;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} supplier
         * @return {*}
         */
        public createDependency(supplier : uml.NamedElement) : uml.Dependency {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} supplier
         * @return {*}
         */
        public createUsage(supplier : uml.NamedElement) : uml.Usage {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        public getLabel$() : string {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        public getLabel$boolean(localize : boolean) : string {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {boolean} localize
         * @return {string}
         */
        public getLabel(localize? : any) : any {
            if(((typeof localize === 'boolean') || localize === null)) {
                return <any>this.getLabel$boolean(localize);
            } else if(localize === undefined) {
                return <any>this.getLabel$();
            } else throw new Error('invalid overload');
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public allNamespaces() : org.eclipse.emf.common.util.EList<uml.Namespace> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public allOwningPackages() : org.eclipse.emf.common.util.EList<uml.Package> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} n
         * @param {*} ns
         * @return {boolean}
         */
        public isDistinguishableFrom(n : uml.NamedElement, ns : uml.Namespace) : boolean {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {string}
         */
        public separator() : string {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getClientDependencies() : org.eclipse.emf.common.util.EList<uml.Dependency> {
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
            case uml.UmlPackage.NAMED_ELEMENT___VISIBILITY_NEEDS_OWNERSHIP__DIAGNOSTICCHAIN_MAP:
                return this.visibility_needs_ownership(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.NAMED_ELEMENT___HAS_QUALIFIED_NAME__DIAGNOSTICCHAIN_MAP:
                return this.has_qualified_name(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.NAMED_ELEMENT___HAS_NO_QUALIFIED_NAME__DIAGNOSTICCHAIN_MAP:
                return this.has_no_qualified_name(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.NAMED_ELEMENT___CREATE_DEPENDENCY__NAMEDELEMENT:
                return this.createDependency(<any>__arguments.get(0));
            case uml.UmlPackage.NAMED_ELEMENT___CREATE_USAGE__NAMEDELEMENT:
                return this.createUsage(<any>__arguments.get(0));
            case uml.UmlPackage.NAMED_ELEMENT___GET_LABEL:
                return this.getLabel();
            case uml.UmlPackage.NAMED_ELEMENT___GET_LABEL__BOOLEAN:
                return this.getLabel$boolean(<any>__arguments.get(0));
            case uml.UmlPackage.NAMED_ELEMENT___ALL_NAMESPACES:
                return this.allNamespaces();
            case uml.UmlPackage.NAMED_ELEMENT___ALL_OWNING_PACKAGES:
                return this.allOwningPackages();
            case uml.UmlPackage.NAMED_ELEMENT___IS_DISTINGUISHABLE_FROM__NAMEDELEMENT_NAMESPACE:
                return this.isDistinguishableFrom(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.NAMED_ELEMENT___SEPARATOR:
                return this.separator();
            case uml.UmlPackage.NAMED_ELEMENT___GET_CLIENT_DEPENDENCIES:
                return this.getClientDependencies();
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    NamedElementImpl["__class"] = "uml.impl.NamedElementImpl";
    NamedElementImpl["__interfaces"] = ["ecore4m.EModelElement","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

