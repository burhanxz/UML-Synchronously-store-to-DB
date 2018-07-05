/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Test Identity Action</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.TestIdentityActionImpl#getFirst}</li>
     * <li>{@link uml.impl.TestIdentityActionImpl#getResult}</li>
     * <li>{@link uml.impl.TestIdentityActionImpl#getSecond}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.ActionImpl
     * @class
     */
    export class TestIdentityActionImpl extends uml.impl.ActionImpl implements uml.TestIdentityAction {
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
            return uml.UmlPackage.eINSTANCE.getTestIdentityAction();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getFirst() : uml.InputPin {
            return <uml.InputPin><any>this.eGet(uml.UmlPackage.eINSTANCE.getTestIdentityAction_First(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newFirst
         */
        public setFirst(newFirst : uml.InputPin) {
            this.eSet(uml.UmlPackage.eINSTANCE.getTestIdentityAction_First(), newFirst);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getResult() : uml.OutputPin {
            return <uml.OutputPin><any>this.eGet(uml.UmlPackage.eINSTANCE.getTestIdentityAction_Result(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newResult
         */
        public setResult(newResult : uml.OutputPin) {
            this.eSet(uml.UmlPackage.eINSTANCE.getTestIdentityAction_Result(), newResult);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getSecond() : uml.InputPin {
            return <uml.InputPin><any>this.eGet(uml.UmlPackage.eINSTANCE.getTestIdentityAction_Second(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newSecond
         */
        public setSecond(newSecond : uml.InputPin) {
            this.eSet(uml.UmlPackage.eINSTANCE.getTestIdentityAction_Second(), newSecond);
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
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.TEST_IDENTITY_ACTION__MULTIPLICITY, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["multiplicity", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public no_type(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.TEST_IDENTITY_ACTION__NO_TYPE, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["no_type", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public result_is_boolean(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.TEST_IDENTITY_ACTION__RESULT_IS_BOOLEAN, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["result_is_boolean", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
            case uml.UmlPackage.TEST_IDENTITY_ACTION___MULTIPLICITY__DIAGNOSTICCHAIN_MAP:
                return this.multiplicity(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.TEST_IDENTITY_ACTION___NO_TYPE__DIAGNOSTICCHAIN_MAP:
                return this.no_type(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.TEST_IDENTITY_ACTION___RESULT_IS_BOOLEAN__DIAGNOSTICCHAIN_MAP:
                return this.result_is_boolean(<any>__arguments.get(0), <any>__arguments.get(1));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    TestIdentityActionImpl["__class"] = "uml.impl.TestIdentityActionImpl";
    TestIdentityActionImpl["__interfaces"] = ["ecore4m.EModelElement","uml.TestIdentityAction","org.eclipse.emf.ecore.EObject","uml.NamedElement","uml.ActivityContent","org.eclipse.emf.common.notify.Notifier","uml.ExecutableNode","uml.RedefinableElement","uml.Action","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","uml.ActivityNode","org.eclipse.emf.ecore.InternalEObject"];


}

