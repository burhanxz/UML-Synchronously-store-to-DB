/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Element Import</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.ElementImportImpl#getAlias}</li>
     * <li>{@link uml.impl.ElementImportImpl#getImportedElement}</li>
     * <li>{@link uml.impl.ElementImportImpl#getImportingNamespace}</li>
     * <li>{@link uml.impl.ElementImportImpl#getVisibility}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.DirectedRelationshipImpl
     * @class
     */
    export class ElementImportImpl extends uml.impl.DirectedRelationshipImpl implements uml.ElementImport {
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
            return uml.UmlPackage.eINSTANCE.getElementImport();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {string}
         */
        public getAlias() : string {
            return <string>this.eGet(uml.UmlPackage.eINSTANCE.getElementImport_Alias(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {string} newAlias
         */
        public setAlias(newAlias : string) {
            this.eSet(uml.UmlPackage.eINSTANCE.getElementImport_Alias(), newAlias);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        public unsetAlias() {
            this.eUnset(uml.UmlPackage.eINSTANCE.getElementImport_Alias());
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isSetAlias() : boolean {
            return this.eIsSet(uml.UmlPackage.eINSTANCE.getElementImport_Alias());
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getImportedElement() : uml.PackageableElement {
            return <uml.PackageableElement><any>this.eGet(uml.UmlPackage.eINSTANCE.getElementImport_ImportedElement(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newImportedElement
         */
        public setImportedElement(newImportedElement : uml.PackageableElement) {
            this.eSet(uml.UmlPackage.eINSTANCE.getElementImport_ImportedElement(), newImportedElement);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getImportingNamespace() : uml.Namespace {
            return <uml.Namespace><any>this.eGet(uml.UmlPackage.eINSTANCE.getElementImport_ImportingNamespace(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newImportingNamespace
         */
        public setImportingNamespace(newImportingNamespace : uml.Namespace) {
            this.eSet(uml.UmlPackage.eINSTANCE.getElementImport_ImportingNamespace(), newImportingNamespace);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {uml.VisibilityKind}
         */
        public getVisibility() : uml.VisibilityKind {
            return <uml.VisibilityKind>this.eGet(uml.UmlPackage.eINSTANCE.getElementImport_Visibility(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {uml.VisibilityKind} newVisibility
         */
        public setVisibility(newVisibility : uml.VisibilityKind) {
            this.eSet(uml.UmlPackage.eINSTANCE.getElementImport_Visibility(), newVisibility);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public imported_element_is_public(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.ELEMENT_IMPORT__IMPORTED_ELEMENT_IS_PUBLIC, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["imported_element_is_public", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public visibility_public_or_private(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.ELEMENT_IMPORT__VISIBILITY_PUBLIC_OR_PRIVATE, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["visibility_public_or_private", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
                }
                return false;
            }
            return true;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {string}
         */
        public getName() : string {
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
            case uml.UmlPackage.ELEMENT_IMPORT___IMPORTED_ELEMENT_IS_PUBLIC__DIAGNOSTICCHAIN_MAP:
                return this.imported_element_is_public(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.ELEMENT_IMPORT___VISIBILITY_PUBLIC_OR_PRIVATE__DIAGNOSTICCHAIN_MAP:
                return this.visibility_public_or_private(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.ELEMENT_IMPORT___GET_NAME:
                return this.getName();
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    ElementImportImpl["__class"] = "uml.impl.ElementImportImpl";
    ElementImportImpl["__interfaces"] = ["uml.Relationship","uml.ElementImport","ecore4m.EModelElement","uml.DirectedRelationship","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

