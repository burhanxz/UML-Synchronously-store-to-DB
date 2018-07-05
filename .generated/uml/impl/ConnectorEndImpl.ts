/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Connector End</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.ConnectorEndImpl#getDefiningEnd}</li>
     * <li>{@link uml.impl.ConnectorEndImpl#getPartWithPort}</li>
     * <li>{@link uml.impl.ConnectorEndImpl#getRole}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.MultiplicityElementImpl
     * @class
     */
    export class ConnectorEndImpl extends uml.impl.MultiplicityElementImpl implements uml.ConnectorEnd {
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
            return uml.UmlPackage.eINSTANCE.getConnectorEnd();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getDefiningEnd() : uml.Property {
            return <uml.Property><any>this.eGet(uml.UmlPackage.eINSTANCE.getConnectorEnd_DefiningEnd(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getPartWithPort() : uml.Property {
            return <uml.Property><any>this.eGet(uml.UmlPackage.eINSTANCE.getConnectorEnd_PartWithPort(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newPartWithPort
         */
        public setPartWithPort(newPartWithPort : uml.Property) {
            this.eSet(uml.UmlPackage.eINSTANCE.getConnectorEnd_PartWithPort(), newPartWithPort);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getRole() : uml.ConnectableElement {
            return <uml.ConnectableElement><any>this.eGet(uml.UmlPackage.eINSTANCE.getConnectorEnd_Role(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newRole
         */
        public setRole(newRole : uml.ConnectableElement) {
            this.eSet(uml.UmlPackage.eINSTANCE.getConnectorEnd_Role(), newRole);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public role_and_part_with_port(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.CONNECTOR_END__ROLE_AND_PART_WITH_PORT, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["role_and_part_with_port", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public part_with_port_empty(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.CONNECTOR_END__PART_WITH_PORT_EMPTY, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["part_with_port_empty", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public multiplicity(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.CONNECTOR_END__MULTIPLICITY, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["multiplicity", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public self_part_with_port(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.CONNECTOR_END__SELF_PART_WITH_PORT, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["self_part_with_port", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
            case uml.UmlPackage.CONNECTOR_END___ROLE_AND_PART_WITH_PORT__DIAGNOSTICCHAIN_MAP:
                return this.role_and_part_with_port(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.CONNECTOR_END___PART_WITH_PORT_EMPTY__DIAGNOSTICCHAIN_MAP:
                return this.part_with_port_empty(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.CONNECTOR_END___MULTIPLICITY__DIAGNOSTICCHAIN_MAP:
                return this.multiplicity(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.CONNECTOR_END___SELF_PART_WITH_PORT__DIAGNOSTICCHAIN_MAP:
                return this.self_part_with_port(<any>__arguments.get(0), <any>__arguments.get(1));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    ConnectorEndImpl["__class"] = "uml.impl.ConnectorEndImpl";
    ConnectorEndImpl["__interfaces"] = ["ecore4m.EModelElement","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","uml.ConnectorEnd","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject","uml.MultiplicityElement"];


}

