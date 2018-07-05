/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Package Import</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.PackageImportImpl#getImportedPackage}</li>
     * <li>{@link uml.impl.PackageImportImpl#getImportingNamespace}</li>
     * <li>{@link uml.impl.PackageImportImpl#getVisibility}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.DirectedRelationshipImpl
     * @class
     */
    export class PackageImportImpl extends uml.impl.DirectedRelationshipImpl implements uml.PackageImport {
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
            return uml.UmlPackage.eINSTANCE.getPackageImport();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getImportedPackage() : uml.Package {
            return <uml.Package><any>this.eGet(uml.UmlPackage.eINSTANCE.getPackageImport_ImportedPackage(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newImportedPackage
         */
        public setImportedPackage(newImportedPackage : uml.Package) {
            this.eSet(uml.UmlPackage.eINSTANCE.getPackageImport_ImportedPackage(), newImportedPackage);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getImportingNamespace() : uml.Namespace {
            return <uml.Namespace><any>this.eGet(uml.UmlPackage.eINSTANCE.getPackageImport_ImportingNamespace(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newImportingNamespace
         */
        public setImportingNamespace(newImportingNamespace : uml.Namespace) {
            this.eSet(uml.UmlPackage.eINSTANCE.getPackageImport_ImportingNamespace(), newImportingNamespace);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {uml.VisibilityKind}
         */
        public getVisibility() : uml.VisibilityKind {
            return <uml.VisibilityKind>this.eGet(uml.UmlPackage.eINSTANCE.getPackageImport_Visibility(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {uml.VisibilityKind} newVisibility
         */
        public setVisibility(newVisibility : uml.VisibilityKind) {
            this.eSet(uml.UmlPackage.eINSTANCE.getPackageImport_Visibility(), newVisibility);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public public_or_private(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.PACKAGE_IMPORT__PUBLIC_OR_PRIVATE, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["public_or_private", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
                }
                return false;
            }
            return true;
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
            case uml.UmlPackage.PACKAGE_IMPORT___PUBLIC_OR_PRIVATE__DIAGNOSTICCHAIN_MAP:
                return this.public_or_private(<any>__arguments.get(0), <any>__arguments.get(1));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    PackageImportImpl["__class"] = "uml.impl.PackageImportImpl";
    PackageImportImpl["__interfaces"] = ["uml.Relationship","uml.PackageImport","ecore4m.EModelElement","uml.DirectedRelationship","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

