/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Collaboration Use</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.CollaborationUseImpl#getRoleBinding}</li>
     * <li>{@link uml.impl.CollaborationUseImpl#getType}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.NamedElementImpl
     * @class
     */
    export class CollaborationUseImpl extends uml.impl.NamedElementImpl implements uml.CollaborationUse {
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
            return uml.UmlPackage.eINSTANCE.getCollaborationUse();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getRoleBinding() : org.eclipse.emf.common.util.EList<uml.Dependency> {
            return <org.eclipse.emf.common.util.EList<uml.Dependency>><any>this.eGet(uml.UmlPackage.eINSTANCE.getCollaborationUse_RoleBinding(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getType() : uml.Collaboration {
            return <uml.Collaboration><any>this.eGet(uml.UmlPackage.eINSTANCE.getCollaborationUse_Type(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newType
         */
        public setType(newType : uml.Collaboration) {
            this.eSet(uml.UmlPackage.eINSTANCE.getCollaborationUse_Type(), newType);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public client_elements(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.COLLABORATION_USE__CLIENT_ELEMENTS, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["client_elements", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public every_role(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.COLLABORATION_USE__EVERY_ROLE, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["every_role", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public connectors(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.COLLABORATION_USE__CONNECTORS, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["connectors", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
            case uml.UmlPackage.COLLABORATION_USE___CLIENT_ELEMENTS__DIAGNOSTICCHAIN_MAP:
                return this.client_elements(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.COLLABORATION_USE___EVERY_ROLE__DIAGNOSTICCHAIN_MAP:
                return this.every_role(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.COLLABORATION_USE___CONNECTORS__DIAGNOSTICCHAIN_MAP:
                return this.connectors(<any>__arguments.get(0), <any>__arguments.get(1));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    CollaborationUseImpl["__class"] = "uml.impl.CollaborationUseImpl";
    CollaborationUseImpl["__interfaces"] = ["ecore4m.EModelElement","uml.CollaborationUse","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

