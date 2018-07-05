/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Read Is Classified Object Action</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.ReadIsClassifiedObjectActionImpl#getClassifier}</li>
     * <li>{@link uml.impl.ReadIsClassifiedObjectActionImpl#isIsDirect}</li>
     * <li>{@link uml.impl.ReadIsClassifiedObjectActionImpl#getObject}</li>
     * <li>{@link uml.impl.ReadIsClassifiedObjectActionImpl#getResult}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.ActionImpl
     * @class
     */
    export class ReadIsClassifiedObjectActionImpl extends uml.impl.ActionImpl implements uml.ReadIsClassifiedObjectAction {
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
            return uml.UmlPackage.eINSTANCE.getReadIsClassifiedObjectAction();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getClassifier() : uml.Classifier {
            return <uml.Classifier><any>this.eGet(uml.UmlPackage.eINSTANCE.getReadIsClassifiedObjectAction_Classifier(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newClassifier
         */
        public setClassifier(newClassifier : uml.Classifier) {
            this.eSet(uml.UmlPackage.eINSTANCE.getReadIsClassifiedObjectAction_Classifier(), newClassifier);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isIsDirect() : boolean {
            return <boolean>this.eGet(uml.UmlPackage.eINSTANCE.getReadIsClassifiedObjectAction_IsDirect(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {boolean} newIsDirect
         */
        public setIsDirect(newIsDirect : boolean) {
            this.eSet(uml.UmlPackage.eINSTANCE.getReadIsClassifiedObjectAction_IsDirect(), newIsDirect);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getObject() : uml.InputPin {
            return <uml.InputPin><any>this.eGet(uml.UmlPackage.eINSTANCE.getReadIsClassifiedObjectAction_Object(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newObject
         */
        public setObject(newObject : uml.InputPin) {
            this.eSet(uml.UmlPackage.eINSTANCE.getReadIsClassifiedObjectAction_Object(), newObject);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getResult() : uml.OutputPin {
            return <uml.OutputPin><any>this.eGet(uml.UmlPackage.eINSTANCE.getReadIsClassifiedObjectAction_Result(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newResult
         */
        public setResult(newResult : uml.OutputPin) {
            this.eSet(uml.UmlPackage.eINSTANCE.getReadIsClassifiedObjectAction_Result(), newResult);
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
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.READ_IS_CLASSIFIED_OBJECT_ACTION__NO_TYPE, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["no_type", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public multiplicity_of_output(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.READ_IS_CLASSIFIED_OBJECT_ACTION__MULTIPLICITY_OF_OUTPUT, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["multiplicity_of_output", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public boolean_result(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.READ_IS_CLASSIFIED_OBJECT_ACTION__BOOLEAN_RESULT, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["boolean_result", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public multiplicity_of_input(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.READ_IS_CLASSIFIED_OBJECT_ACTION__MULTIPLICITY_OF_INPUT, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["multiplicity_of_input", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
            case uml.UmlPackage.READ_IS_CLASSIFIED_OBJECT_ACTION___NO_TYPE__DIAGNOSTICCHAIN_MAP:
                return this.no_type(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.READ_IS_CLASSIFIED_OBJECT_ACTION___MULTIPLICITY_OF_OUTPUT__DIAGNOSTICCHAIN_MAP:
                return this.multiplicity_of_output(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.READ_IS_CLASSIFIED_OBJECT_ACTION___BOOLEAN_RESULT__DIAGNOSTICCHAIN_MAP:
                return this.boolean_result(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.READ_IS_CLASSIFIED_OBJECT_ACTION___MULTIPLICITY_OF_INPUT__DIAGNOSTICCHAIN_MAP:
                return this.multiplicity_of_input(<any>__arguments.get(0), <any>__arguments.get(1));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    ReadIsClassifiedObjectActionImpl["__class"] = "uml.impl.ReadIsClassifiedObjectActionImpl";
    ReadIsClassifiedObjectActionImpl["__interfaces"] = ["ecore4m.EModelElement","uml.ReadIsClassifiedObjectAction","org.eclipse.emf.ecore.EObject","uml.NamedElement","uml.ActivityContent","org.eclipse.emf.common.notify.Notifier","uml.ExecutableNode","uml.RedefinableElement","uml.Action","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","uml.ActivityNode","org.eclipse.emf.ecore.InternalEObject"];


}

