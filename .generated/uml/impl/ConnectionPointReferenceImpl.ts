/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Connection Point Reference</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.ConnectionPointReferenceImpl#getEntry}</li>
     * <li>{@link uml.impl.ConnectionPointReferenceImpl#getExit}</li>
     * <li>{@link uml.impl.ConnectionPointReferenceImpl#getState}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.VertexImpl
     * @class
     */
    export class ConnectionPointReferenceImpl extends uml.impl.VertexImpl implements uml.ConnectionPointReference {
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
            return uml.UmlPackage.eINSTANCE.getConnectionPointReference();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getEntry() : org.eclipse.emf.common.util.EList<uml.Pseudostate> {
            return <org.eclipse.emf.common.util.EList<uml.Pseudostate>><any>this.eGet(uml.UmlPackage.eINSTANCE.getConnectionPointReference_Entry(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getExit() : org.eclipse.emf.common.util.EList<uml.Pseudostate> {
            return <org.eclipse.emf.common.util.EList<uml.Pseudostate>><any>this.eGet(uml.UmlPackage.eINSTANCE.getConnectionPointReference_Exit(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getState() : uml.State {
            return <uml.State><any>this.eGet(uml.UmlPackage.eINSTANCE.getConnectionPointReference_State(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newState
         */
        public setState(newState : uml.State) {
            this.eSet(uml.UmlPackage.eINSTANCE.getConnectionPointReference_State(), newState);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public exit_pseudostates(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.CONNECTION_POINT_REFERENCE__EXIT_PSEUDOSTATES, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["exit_pseudostates", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public entry_pseudostates(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.CONNECTION_POINT_REFERENCE__ENTRY_PSEUDOSTATES, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["entry_pseudostates", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
            case uml.UmlPackage.CONNECTION_POINT_REFERENCE___EXIT_PSEUDOSTATES__DIAGNOSTICCHAIN_MAP:
                return this.exit_pseudostates(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.CONNECTION_POINT_REFERENCE___ENTRY_PSEUDOSTATES__DIAGNOSTICCHAIN_MAP:
                return this.entry_pseudostates(<any>__arguments.get(0), <any>__arguments.get(1));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    ConnectionPointReferenceImpl["__class"] = "uml.impl.ConnectionPointReferenceImpl";
    ConnectionPointReferenceImpl["__interfaces"] = ["uml.ConnectionPointReference","ecore4m.EModelElement","org.eclipse.emf.ecore.EModelElement","uml.Vertex","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

