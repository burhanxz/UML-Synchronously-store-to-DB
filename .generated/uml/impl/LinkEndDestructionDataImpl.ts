/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Link End Destruction Data</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.LinkEndDestructionDataImpl#getDestroyAt}</li>
     * <li>{@link uml.impl.LinkEndDestructionDataImpl#isIsDestroyDuplicates}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.LinkEndDataImpl
     * @class
     */
    export class LinkEndDestructionDataImpl extends uml.impl.LinkEndDataImpl implements uml.LinkEndDestructionData {
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
            return uml.UmlPackage.eINSTANCE.getLinkEndDestructionData();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getDestroyAt() : uml.InputPin {
            return <uml.InputPin><any>this.eGet(uml.UmlPackage.eINSTANCE.getLinkEndDestructionData_DestroyAt(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newDestroyAt
         */
        public setDestroyAt(newDestroyAt : uml.InputPin) {
            this.eSet(uml.UmlPackage.eINSTANCE.getLinkEndDestructionData_DestroyAt(), newDestroyAt);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isIsDestroyDuplicates() : boolean {
            return <boolean>this.eGet(uml.UmlPackage.eINSTANCE.getLinkEndDestructionData_IsDestroyDuplicates(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {boolean} newIsDestroyDuplicates
         */
        public setIsDestroyDuplicates(newIsDestroyDuplicates : boolean) {
            this.eSet(uml.UmlPackage.eINSTANCE.getLinkEndDestructionData_IsDestroyDuplicates(), newIsDestroyDuplicates);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public destroyAt_pin(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.LINK_END_DESTRUCTION_DATA__DESTROY_AT_PIN, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["destroyAt_pin", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
            case uml.UmlPackage.LINK_END_DESTRUCTION_DATA___DESTROY_AT_PIN__DIAGNOSTICCHAIN_MAP:
                return this.destroyAt_pin(<any>__arguments.get(0), <any>__arguments.get(1));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    LinkEndDestructionDataImpl["__class"] = "uml.impl.LinkEndDestructionDataImpl";
    LinkEndDestructionDataImpl["__interfaces"] = ["ecore4m.EModelElement","uml.LinkEndData","uml.LinkEndDestructionData","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

