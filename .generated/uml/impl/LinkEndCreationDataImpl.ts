/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Link End Creation Data</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.LinkEndCreationDataImpl#getInsertAt}</li>
     * <li>{@link uml.impl.LinkEndCreationDataImpl#isIsReplaceAll}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.LinkEndDataImpl
     * @class
     */
    export class LinkEndCreationDataImpl extends uml.impl.LinkEndDataImpl implements uml.LinkEndCreationData {
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
            return uml.UmlPackage.eINSTANCE.getLinkEndCreationData();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getInsertAt() : uml.InputPin {
            return <uml.InputPin><any>this.eGet(uml.UmlPackage.eINSTANCE.getLinkEndCreationData_InsertAt(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newInsertAt
         */
        public setInsertAt(newInsertAt : uml.InputPin) {
            this.eSet(uml.UmlPackage.eINSTANCE.getLinkEndCreationData_InsertAt(), newInsertAt);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isIsReplaceAll() : boolean {
            return <boolean>this.eGet(uml.UmlPackage.eINSTANCE.getLinkEndCreationData_IsReplaceAll(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {boolean} newIsReplaceAll
         */
        public setIsReplaceAll(newIsReplaceAll : boolean) {
            this.eSet(uml.UmlPackage.eINSTANCE.getLinkEndCreationData_IsReplaceAll(), newIsReplaceAll);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public insertAt_pin(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.LINK_END_CREATION_DATA__INSERT_AT_PIN, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["insertAt_pin", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
            case uml.UmlPackage.LINK_END_CREATION_DATA___INSERT_AT_PIN__DIAGNOSTICCHAIN_MAP:
                return this.insertAt_pin(<any>__arguments.get(0), <any>__arguments.get(1));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    LinkEndCreationDataImpl["__class"] = "uml.impl.LinkEndCreationDataImpl";
    LinkEndCreationDataImpl["__interfaces"] = ["uml.LinkEndCreationData","ecore4m.EModelElement","uml.LinkEndData","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

