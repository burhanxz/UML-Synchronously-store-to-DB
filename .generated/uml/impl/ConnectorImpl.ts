/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Connector</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.ConnectorImpl#getContract}</li>
     * <li>{@link uml.impl.ConnectorImpl#getEnd}</li>
     * <li>{@link uml.impl.ConnectorImpl#getKind}</li>
     * <li>{@link uml.impl.ConnectorImpl#getRedefinedConnector}</li>
     * <li>{@link uml.impl.ConnectorImpl#getType}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.FeatureImpl
     * @class
     */
    export class ConnectorImpl extends uml.impl.FeatureImpl implements uml.Connector {
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
            return uml.UmlPackage.eINSTANCE.getConnector();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getContract() : org.eclipse.emf.common.util.EList<uml.Behavior> {
            return <org.eclipse.emf.common.util.EList<uml.Behavior>><any>this.eGet(uml.UmlPackage.eINSTANCE.getConnector_Contract(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getEnd() : org.eclipse.emf.common.util.EList<uml.ConnectorEnd> {
            return <org.eclipse.emf.common.util.EList<uml.ConnectorEnd>><any>this.eGet(uml.UmlPackage.eINSTANCE.getConnector_End(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {uml.ConnectorKind}
         */
        public getKind() : uml.ConnectorKind {
            return <uml.ConnectorKind>this.eGet(uml.UmlPackage.eINSTANCE.getConnector_Kind(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getRedefinedConnector() : org.eclipse.emf.common.util.EList<uml.Connector> {
            return <org.eclipse.emf.common.util.EList<uml.Connector>><any>this.eGet(uml.UmlPackage.eINSTANCE.getConnector_RedefinedConnector(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getType() : uml.Association {
            return <uml.Association><any>this.eGet(uml.UmlPackage.eINSTANCE.getConnector_Type(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newType
         */
        public setType(newType : uml.Association) {
            this.eSet(uml.UmlPackage.eINSTANCE.getConnector_Type(), newType);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public types(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.CONNECTOR__TYPES, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["types", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public roles(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.CONNECTOR__ROLES, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["roles", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
            case uml.UmlPackage.CONNECTOR___TYPES__DIAGNOSTICCHAIN_MAP:
                return this.types(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.CONNECTOR___ROLES__DIAGNOSTICCHAIN_MAP:
                return this.roles(<any>__arguments.get(0), <any>__arguments.get(1));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    ConnectorImpl["__class"] = "uml.impl.ConnectorImpl";
    ConnectorImpl["__interfaces"] = ["uml.RedefinableElement","ecore4m.EModelElement","uml.Feature","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","uml.Connector","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

