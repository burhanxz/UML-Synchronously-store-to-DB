/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Namespace</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.NamespaceImpl#getOwnedRule}</li>
     * <li>{@link uml.impl.NamespaceImpl#getElementImport}</li>
     * <li>{@link uml.impl.NamespaceImpl#getPackageImport}</li>
     * <li>{@link uml.impl.NamespaceImpl#getOwnedMember}</li>
     * <li>{@link uml.impl.NamespaceImpl#getImportedMember}</li>
     * <li>{@link uml.impl.NamespaceImpl#getMember}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.NamedElementImpl
     * @class
     */
    export abstract class NamespaceImpl extends uml.impl.NamedElementImpl implements uml.Namespace {
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
            return uml.UmlPackage.eINSTANCE.getNamespace();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getOwnedRule() : org.eclipse.emf.common.util.EList<uml.Constraint> {
            return <org.eclipse.emf.common.util.EList<uml.Constraint>><any>this.eGet(uml.UmlPackage.eINSTANCE.getNamespace_OwnedRule(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getElementImport() : org.eclipse.emf.common.util.EList<uml.ElementImport> {
            return <org.eclipse.emf.common.util.EList<uml.ElementImport>><any>this.eGet(uml.UmlPackage.eINSTANCE.getNamespace_ElementImport(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getPackageImport() : org.eclipse.emf.common.util.EList<uml.PackageImport> {
            return <org.eclipse.emf.common.util.EList<uml.PackageImport>><any>this.eGet(uml.UmlPackage.eINSTANCE.getNamespace_PackageImport(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getOwnedMember() : org.eclipse.emf.common.util.EList<uml.NamedElement> {
            return <org.eclipse.emf.common.util.EList<uml.NamedElement>><any>this.eGet(uml.UmlPackage.eINSTANCE.getNamespace_OwnedMember(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getImportedMember() : org.eclipse.emf.common.util.EList<uml.PackageableElement> {
            return <org.eclipse.emf.common.util.EList<uml.PackageableElement>><any>this.eGet(uml.UmlPackage.eINSTANCE.getNamespace_ImportedMember(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getMember() : org.eclipse.emf.common.util.EList<uml.NamedElement> {
            return <org.eclipse.emf.common.util.EList<uml.NamedElement>><any>this.eGet(uml.UmlPackage.eINSTANCE.getNamespace_Member(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public members_distinguishable(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.NAMESPACE__MEMBERS_DISTINGUISHABLE, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["members_distinguishable", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public cannot_import_self(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.NAMESPACE__CANNOT_IMPORT_SELF, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["cannot_import_self", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public cannot_import_ownedMembers(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.NAMESPACE__CANNOT_IMPORT_OWNED_MEMBERS, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["cannot_import_ownedMembers", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
                }
                return false;
            }
            return true;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} element
         * @param {uml.VisibilityKind} visibility
         * @return {*}
         */
        public createElementImport(element : uml.PackageableElement, visibility : uml.VisibilityKind) : uml.ElementImport {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} package_
         * @param {uml.VisibilityKind} visibility
         * @return {*}
         */
        public createPackageImport(package_ : uml.Package, visibility : uml.VisibilityKind) : uml.PackageImport {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getImportedElements() : org.eclipse.emf.common.util.EList<uml.PackageableElement> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getImportedPackages() : org.eclipse.emf.common.util.EList<uml.Package> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getOwnedMembers() : org.eclipse.emf.common.util.EList<uml.NamedElement> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} imps
         * @return {*}
         */
        public excludeCollisions(imps : org.eclipse.emf.common.util.EList<uml.PackageableElement>) : org.eclipse.emf.common.util.EList<uml.PackageableElement> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} element
         * @return {*}
         */
        public getNamesOfMember(element : uml.NamedElement) : org.eclipse.emf.common.util.EList<string> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} imps
         * @return {*}
         */
        public importMembers(imps : org.eclipse.emf.common.util.EList<uml.PackageableElement>) : org.eclipse.emf.common.util.EList<uml.PackageableElement> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getImportedMembers() : org.eclipse.emf.common.util.EList<uml.PackageableElement> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public membersAreDistinguishable() : boolean {
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
            case uml.UmlPackage.NAMESPACE___MEMBERS_DISTINGUISHABLE__DIAGNOSTICCHAIN_MAP:
                return this.members_distinguishable(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.NAMESPACE___CANNOT_IMPORT_SELF__DIAGNOSTICCHAIN_MAP:
                return this.cannot_import_self(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.NAMESPACE___CANNOT_IMPORT_OWNED_MEMBERS__DIAGNOSTICCHAIN_MAP:
                return this.cannot_import_ownedMembers(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.NAMESPACE___CREATE_ELEMENT_IMPORT__PACKAGEABLEELEMENT_VISIBILITYKIND:
                return this.createElementImport(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.NAMESPACE___CREATE_PACKAGE_IMPORT__PACKAGE_VISIBILITYKIND:
                return this.createPackageImport(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.NAMESPACE___GET_IMPORTED_ELEMENTS:
                return this.getImportedElements();
            case uml.UmlPackage.NAMESPACE___GET_IMPORTED_PACKAGES:
                return this.getImportedPackages();
            case uml.UmlPackage.NAMESPACE___GET_OWNED_MEMBERS:
                return this.getOwnedMembers();
            case uml.UmlPackage.NAMESPACE___EXCLUDE_COLLISIONS__ELIST:
                return this.excludeCollisions(<any>__arguments.get(0));
            case uml.UmlPackage.NAMESPACE___GET_NAMES_OF_MEMBER__NAMEDELEMENT:
                return this.getNamesOfMember(<any>__arguments.get(0));
            case uml.UmlPackage.NAMESPACE___IMPORT_MEMBERS__ELIST:
                return this.importMembers(<any>__arguments.get(0));
            case uml.UmlPackage.NAMESPACE___GET_IMPORTED_MEMBERS:
                return this.getImportedMembers();
            case uml.UmlPackage.NAMESPACE___MEMBERS_ARE_DISTINGUISHABLE:
                return this.membersAreDistinguishable();
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    NamespaceImpl["__class"] = "uml.impl.NamespaceImpl";
    NamespaceImpl["__interfaces"] = ["ecore4m.EModelElement","org.eclipse.emf.ecore.EModelElement","uml.Namespace","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

