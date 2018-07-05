/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Structured Activity Node</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.StructuredActivityNodeImpl#getOwnedRule}</li>
     * <li>{@link uml.impl.StructuredActivityNodeImpl#getElementImport}</li>
     * <li>{@link uml.impl.StructuredActivityNodeImpl#getPackageImport}</li>
     * <li>{@link uml.impl.StructuredActivityNodeImpl#getOwnedMember}</li>
     * <li>{@link uml.impl.StructuredActivityNodeImpl#getImportedMember}</li>
     * <li>{@link uml.impl.StructuredActivityNodeImpl#getMember}</li>
     * <li>{@link uml.impl.StructuredActivityNodeImpl#getContainedEdge}</li>
     * <li>{@link uml.impl.StructuredActivityNodeImpl#getContainedNode}</li>
     * <li>{@link uml.impl.StructuredActivityNodeImpl#getInActivity}</li>
     * <li>{@link uml.impl.StructuredActivityNodeImpl#getSubgroup}</li>
     * <li>{@link uml.impl.StructuredActivityNodeImpl#getSuperGroup}</li>
     * <li>{@link uml.impl.StructuredActivityNodeImpl#getEdge}</li>
     * <li>{@link uml.impl.StructuredActivityNodeImpl#isMustIsolate}</li>
     * <li>{@link uml.impl.StructuredActivityNodeImpl#getStructuredNodeInput}</li>
     * <li>{@link uml.impl.StructuredActivityNodeImpl#getStructuredNodeOutput}</li>
     * <li>{@link uml.impl.StructuredActivityNodeImpl#getVariable}</li>
     * <li>{@link uml.impl.StructuredActivityNodeImpl#getNode}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.ActionImpl
     * @class
     */
    export class StructuredActivityNodeImpl extends uml.impl.ActionImpl implements uml.StructuredActivityNode {
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
            return uml.UmlPackage.eINSTANCE.getStructuredActivityNode();
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
         * @return {*}
         */
        public getContainedEdge() : org.eclipse.emf.common.util.EList<uml.ActivityEdge> {
            return <org.eclipse.emf.common.util.EList<uml.ActivityEdge>><any>this.eGet(uml.UmlPackage.eINSTANCE.getActivityGroup_ContainedEdge(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getContainedNode() : org.eclipse.emf.common.util.EList<uml.ActivityNode> {
            return <org.eclipse.emf.common.util.EList<uml.ActivityNode>><any>this.eGet(uml.UmlPackage.eINSTANCE.getActivityGroup_ContainedNode(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getInActivity() : uml.Activity {
            return <uml.Activity><any>this.eGet(uml.UmlPackage.eINSTANCE.getActivityGroup_InActivity(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newInActivity
         */
        public setInActivity(newInActivity : uml.Activity) {
            this.eSet(uml.UmlPackage.eINSTANCE.getActivityGroup_InActivity(), newInActivity);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getSubgroup() : org.eclipse.emf.common.util.EList<uml.ActivityGroup> {
            return <org.eclipse.emf.common.util.EList<uml.ActivityGroup>><any>this.eGet(uml.UmlPackage.eINSTANCE.getActivityGroup_Subgroup(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getSuperGroup() : uml.ActivityGroup {
            return <uml.ActivityGroup><any>this.eGet(uml.UmlPackage.eINSTANCE.getActivityGroup_SuperGroup(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getEdge() : org.eclipse.emf.common.util.EList<uml.ActivityEdge> {
            return <org.eclipse.emf.common.util.EList<uml.ActivityEdge>><any>this.eGet(uml.UmlPackage.eINSTANCE.getStructuredActivityNode_Edge(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isMustIsolate() : boolean {
            return <boolean>this.eGet(uml.UmlPackage.eINSTANCE.getStructuredActivityNode_MustIsolate(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {boolean} newMustIsolate
         */
        public setMustIsolate(newMustIsolate : boolean) {
            this.eSet(uml.UmlPackage.eINSTANCE.getStructuredActivityNode_MustIsolate(), newMustIsolate);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getStructuredNodeInput() : org.eclipse.emf.common.util.EList<uml.InputPin> {
            return <org.eclipse.emf.common.util.EList<uml.InputPin>><any>this.eGet(uml.UmlPackage.eINSTANCE.getStructuredActivityNode_StructuredNodeInput(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getStructuredNodeOutput() : org.eclipse.emf.common.util.EList<uml.OutputPin> {
            return <org.eclipse.emf.common.util.EList<uml.OutputPin>><any>this.eGet(uml.UmlPackage.eINSTANCE.getStructuredActivityNode_StructuredNodeOutput(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getVariable() : org.eclipse.emf.common.util.EList<uml.Variable> {
            return <org.eclipse.emf.common.util.EList<uml.Variable>><any>this.eGet(uml.UmlPackage.eINSTANCE.getStructuredActivityNode_Variable(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getNode() : org.eclipse.emf.common.util.EList<uml.ActivityNode> {
            return <org.eclipse.emf.common.util.EList<uml.ActivityNode>><any>this.eGet(uml.UmlPackage.eINSTANCE.getStructuredActivityNode_Node(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public output_pin_edges(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.STRUCTURED_ACTIVITY_NODE__OUTPUT_PIN_EDGES, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["output_pin_edges", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public edges(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.STRUCTURED_ACTIVITY_NODE__EDGES, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["edges", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public input_pin_edges(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.STRUCTURED_ACTIVITY_NODE__INPUT_PIN_EDGES, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["input_pin_edges", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public sourceNodes() : org.eclipse.emf.common.util.EList<uml.ActivityNode> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public targetNodes() : org.eclipse.emf.common.util.EList<uml.ActivityNode> {
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
        public nodes_and_edges(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.ACTIVITY_GROUP__NODES_AND_EDGES, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["nodes_and_edges", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public not_contained(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.ACTIVITY_GROUP__NOT_CONTAINED, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["not_contained", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
         * @param {number} derivedFeatureID
         * @param {*} baseClass
         * @return {number}
         */
        public eBaseStructuralFeatureID(derivedFeatureID : number, baseClass : any) : number {
            if(baseClass === "uml.Namespace") {
                switch((derivedFeatureID)) {
                case uml.UmlPackage.STRUCTURED_ACTIVITY_NODE__OWNED_RULE:
                    return uml.UmlPackage.NAMESPACE__OWNED_RULE;
                case uml.UmlPackage.STRUCTURED_ACTIVITY_NODE__ELEMENT_IMPORT:
                    return uml.UmlPackage.NAMESPACE__ELEMENT_IMPORT;
                case uml.UmlPackage.STRUCTURED_ACTIVITY_NODE__PACKAGE_IMPORT:
                    return uml.UmlPackage.NAMESPACE__PACKAGE_IMPORT;
                case uml.UmlPackage.STRUCTURED_ACTIVITY_NODE__OWNED_MEMBER:
                    return uml.UmlPackage.NAMESPACE__OWNED_MEMBER;
                case uml.UmlPackage.STRUCTURED_ACTIVITY_NODE__IMPORTED_MEMBER:
                    return uml.UmlPackage.NAMESPACE__IMPORTED_MEMBER;
                case uml.UmlPackage.STRUCTURED_ACTIVITY_NODE__MEMBER:
                    return uml.UmlPackage.NAMESPACE__MEMBER;
                default:
                    return -1;
                }
            }
            if(baseClass === "uml.ActivityGroup") {
                switch((derivedFeatureID)) {
                case uml.UmlPackage.STRUCTURED_ACTIVITY_NODE__CONTAINED_EDGE:
                    return uml.UmlPackage.ACTIVITY_GROUP__CONTAINED_EDGE;
                case uml.UmlPackage.STRUCTURED_ACTIVITY_NODE__CONTAINED_NODE:
                    return uml.UmlPackage.ACTIVITY_GROUP__CONTAINED_NODE;
                case uml.UmlPackage.STRUCTURED_ACTIVITY_NODE__IN_ACTIVITY:
                    return uml.UmlPackage.ACTIVITY_GROUP__IN_ACTIVITY;
                case uml.UmlPackage.STRUCTURED_ACTIVITY_NODE__SUBGROUP:
                    return uml.UmlPackage.ACTIVITY_GROUP__SUBGROUP;
                case uml.UmlPackage.STRUCTURED_ACTIVITY_NODE__SUPER_GROUP:
                    return uml.UmlPackage.ACTIVITY_GROUP__SUPER_GROUP;
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
            if(baseClass === "uml.Namespace") {
                switch((baseFeatureID)) {
                case uml.UmlPackage.NAMESPACE__OWNED_RULE:
                    return uml.UmlPackage.STRUCTURED_ACTIVITY_NODE__OWNED_RULE;
                case uml.UmlPackage.NAMESPACE__ELEMENT_IMPORT:
                    return uml.UmlPackage.STRUCTURED_ACTIVITY_NODE__ELEMENT_IMPORT;
                case uml.UmlPackage.NAMESPACE__PACKAGE_IMPORT:
                    return uml.UmlPackage.STRUCTURED_ACTIVITY_NODE__PACKAGE_IMPORT;
                case uml.UmlPackage.NAMESPACE__OWNED_MEMBER:
                    return uml.UmlPackage.STRUCTURED_ACTIVITY_NODE__OWNED_MEMBER;
                case uml.UmlPackage.NAMESPACE__IMPORTED_MEMBER:
                    return uml.UmlPackage.STRUCTURED_ACTIVITY_NODE__IMPORTED_MEMBER;
                case uml.UmlPackage.NAMESPACE__MEMBER:
                    return uml.UmlPackage.STRUCTURED_ACTIVITY_NODE__MEMBER;
                default:
                    return -1;
                }
            }
            if(baseClass === "uml.ActivityGroup") {
                switch((baseFeatureID)) {
                case uml.UmlPackage.ACTIVITY_GROUP__CONTAINED_EDGE:
                    return uml.UmlPackage.STRUCTURED_ACTIVITY_NODE__CONTAINED_EDGE;
                case uml.UmlPackage.ACTIVITY_GROUP__CONTAINED_NODE:
                    return uml.UmlPackage.STRUCTURED_ACTIVITY_NODE__CONTAINED_NODE;
                case uml.UmlPackage.ACTIVITY_GROUP__IN_ACTIVITY:
                    return uml.UmlPackage.STRUCTURED_ACTIVITY_NODE__IN_ACTIVITY;
                case uml.UmlPackage.ACTIVITY_GROUP__SUBGROUP:
                    return uml.UmlPackage.STRUCTURED_ACTIVITY_NODE__SUBGROUP;
                case uml.UmlPackage.ACTIVITY_GROUP__SUPER_GROUP:
                    return uml.UmlPackage.STRUCTURED_ACTIVITY_NODE__SUPER_GROUP;
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
            if(baseClass === "uml.Namespace") {
                switch((baseOperationID)) {
                case uml.UmlPackage.NAMESPACE___MEMBERS_DISTINGUISHABLE__DIAGNOSTICCHAIN_MAP:
                    return uml.UmlPackage.STRUCTURED_ACTIVITY_NODE___MEMBERS_DISTINGUISHABLE__DIAGNOSTICCHAIN_MAP;
                case uml.UmlPackage.NAMESPACE___CANNOT_IMPORT_SELF__DIAGNOSTICCHAIN_MAP:
                    return uml.UmlPackage.STRUCTURED_ACTIVITY_NODE___CANNOT_IMPORT_SELF__DIAGNOSTICCHAIN_MAP;
                case uml.UmlPackage.NAMESPACE___CANNOT_IMPORT_OWNED_MEMBERS__DIAGNOSTICCHAIN_MAP:
                    return uml.UmlPackage.STRUCTURED_ACTIVITY_NODE___CANNOT_IMPORT_OWNED_MEMBERS__DIAGNOSTICCHAIN_MAP;
                case uml.UmlPackage.NAMESPACE___CREATE_ELEMENT_IMPORT__PACKAGEABLEELEMENT_VISIBILITYKIND:
                    return uml.UmlPackage.STRUCTURED_ACTIVITY_NODE___CREATE_ELEMENT_IMPORT__PACKAGEABLEELEMENT_VISIBILITYKIND;
                case uml.UmlPackage.NAMESPACE___CREATE_PACKAGE_IMPORT__PACKAGE_VISIBILITYKIND:
                    return uml.UmlPackage.STRUCTURED_ACTIVITY_NODE___CREATE_PACKAGE_IMPORT__PACKAGE_VISIBILITYKIND;
                case uml.UmlPackage.NAMESPACE___GET_IMPORTED_ELEMENTS:
                    return uml.UmlPackage.STRUCTURED_ACTIVITY_NODE___GET_IMPORTED_ELEMENTS;
                case uml.UmlPackage.NAMESPACE___GET_IMPORTED_PACKAGES:
                    return uml.UmlPackage.STRUCTURED_ACTIVITY_NODE___GET_IMPORTED_PACKAGES;
                case uml.UmlPackage.NAMESPACE___GET_OWNED_MEMBERS:
                    return uml.UmlPackage.STRUCTURED_ACTIVITY_NODE___GET_OWNED_MEMBERS;
                case uml.UmlPackage.NAMESPACE___EXCLUDE_COLLISIONS__ELIST:
                    return uml.UmlPackage.STRUCTURED_ACTIVITY_NODE___EXCLUDE_COLLISIONS__ELIST;
                case uml.UmlPackage.NAMESPACE___GET_NAMES_OF_MEMBER__NAMEDELEMENT:
                    return uml.UmlPackage.STRUCTURED_ACTIVITY_NODE___GET_NAMES_OF_MEMBER__NAMEDELEMENT;
                case uml.UmlPackage.NAMESPACE___IMPORT_MEMBERS__ELIST:
                    return uml.UmlPackage.STRUCTURED_ACTIVITY_NODE___IMPORT_MEMBERS__ELIST;
                case uml.UmlPackage.NAMESPACE___GET_IMPORTED_MEMBERS:
                    return uml.UmlPackage.STRUCTURED_ACTIVITY_NODE___GET_IMPORTED_MEMBERS;
                case uml.UmlPackage.NAMESPACE___MEMBERS_ARE_DISTINGUISHABLE:
                    return uml.UmlPackage.STRUCTURED_ACTIVITY_NODE___MEMBERS_ARE_DISTINGUISHABLE;
                default:
                    return -1;
                }
            }
            if(baseClass === "uml.ActivityGroup") {
                switch((baseOperationID)) {
                case uml.UmlPackage.ACTIVITY_GROUP___NODES_AND_EDGES__DIAGNOSTICCHAIN_MAP:
                    return uml.UmlPackage.STRUCTURED_ACTIVITY_NODE___NODES_AND_EDGES__DIAGNOSTICCHAIN_MAP;
                case uml.UmlPackage.ACTIVITY_GROUP___NOT_CONTAINED__DIAGNOSTICCHAIN_MAP:
                    return uml.UmlPackage.STRUCTURED_ACTIVITY_NODE___NOT_CONTAINED__DIAGNOSTICCHAIN_MAP;
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
            case uml.UmlPackage.STRUCTURED_ACTIVITY_NODE___OUTPUT_PIN_EDGES__DIAGNOSTICCHAIN_MAP:
                return this.output_pin_edges(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.STRUCTURED_ACTIVITY_NODE___EDGES__DIAGNOSTICCHAIN_MAP:
                return this.edges(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.STRUCTURED_ACTIVITY_NODE___INPUT_PIN_EDGES__DIAGNOSTICCHAIN_MAP:
                return this.input_pin_edges(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.STRUCTURED_ACTIVITY_NODE___SOURCE_NODES:
                return this.sourceNodes();
            case uml.UmlPackage.STRUCTURED_ACTIVITY_NODE___TARGET_NODES:
                return this.targetNodes();
            case uml.UmlPackage.STRUCTURED_ACTIVITY_NODE___NODES_AND_EDGES__DIAGNOSTICCHAIN_MAP:
                return this.nodes_and_edges(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.STRUCTURED_ACTIVITY_NODE___NOT_CONTAINED__DIAGNOSTICCHAIN_MAP:
                return this.not_contained(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.STRUCTURED_ACTIVITY_NODE___MEMBERS_DISTINGUISHABLE__DIAGNOSTICCHAIN_MAP:
                return this.members_distinguishable(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.STRUCTURED_ACTIVITY_NODE___CANNOT_IMPORT_SELF__DIAGNOSTICCHAIN_MAP:
                return this.cannot_import_self(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.STRUCTURED_ACTIVITY_NODE___CANNOT_IMPORT_OWNED_MEMBERS__DIAGNOSTICCHAIN_MAP:
                return this.cannot_import_ownedMembers(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.STRUCTURED_ACTIVITY_NODE___CREATE_ELEMENT_IMPORT__PACKAGEABLEELEMENT_VISIBILITYKIND:
                return this.createElementImport(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.STRUCTURED_ACTIVITY_NODE___CREATE_PACKAGE_IMPORT__PACKAGE_VISIBILITYKIND:
                return this.createPackageImport(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.STRUCTURED_ACTIVITY_NODE___GET_IMPORTED_ELEMENTS:
                return this.getImportedElements();
            case uml.UmlPackage.STRUCTURED_ACTIVITY_NODE___GET_IMPORTED_PACKAGES:
                return this.getImportedPackages();
            case uml.UmlPackage.STRUCTURED_ACTIVITY_NODE___GET_OWNED_MEMBERS:
                return this.getOwnedMembers();
            case uml.UmlPackage.STRUCTURED_ACTIVITY_NODE___EXCLUDE_COLLISIONS__ELIST:
                return this.excludeCollisions(<any>__arguments.get(0));
            case uml.UmlPackage.STRUCTURED_ACTIVITY_NODE___GET_NAMES_OF_MEMBER__NAMEDELEMENT:
                return this.getNamesOfMember(<any>__arguments.get(0));
            case uml.UmlPackage.STRUCTURED_ACTIVITY_NODE___IMPORT_MEMBERS__ELIST:
                return this.importMembers(<any>__arguments.get(0));
            case uml.UmlPackage.STRUCTURED_ACTIVITY_NODE___GET_IMPORTED_MEMBERS:
                return this.getImportedMembers();
            case uml.UmlPackage.STRUCTURED_ACTIVITY_NODE___MEMBERS_ARE_DISTINGUISHABLE:
                return this.membersAreDistinguishable();
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    StructuredActivityNodeImpl["__class"] = "uml.impl.StructuredActivityNodeImpl";
    StructuredActivityNodeImpl["__interfaces"] = ["ecore4m.EModelElement","uml.ActivityGroup","uml.Namespace","org.eclipse.emf.ecore.EObject","uml.NamedElement","uml.ActivityContent","org.eclipse.emf.common.notify.Notifier","uml.ExecutableNode","uml.RedefinableElement","uml.Action","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","uml.ActivityNode","uml.StructuredActivityNode","org.eclipse.emf.ecore.InternalEObject"];


}

