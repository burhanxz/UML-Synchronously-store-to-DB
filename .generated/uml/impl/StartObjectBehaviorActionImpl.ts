/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Start Object Behavior Action</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.StartObjectBehaviorActionImpl#getObject}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.CallActionImpl
     * @class
     */
    export class StartObjectBehaviorActionImpl extends uml.impl.CallActionImpl implements uml.StartObjectBehaviorAction {
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
            return uml.UmlPackage.eINSTANCE.getStartObjectBehaviorAction();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getObject() : uml.InputPin {
            return <uml.InputPin><any>this.eGet(uml.UmlPackage.eINSTANCE.getStartObjectBehaviorAction_Object(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newObject
         */
        public setObject(newObject : uml.InputPin) {
            this.eSet(uml.UmlPackage.eINSTANCE.getStartObjectBehaviorAction_Object(), newObject);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public multiplicity_of_object(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.START_OBJECT_BEHAVIOR_ACTION__MULTIPLICITY_OF_OBJECT, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["multiplicity_of_object", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public type_of_object(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.START_OBJECT_BEHAVIOR_ACTION__TYPE_OF_OBJECT, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["type_of_object", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public no_onport(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.START_OBJECT_BEHAVIOR_ACTION__NO_ONPORT, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["no_onport", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public behavior() : uml.Behavior {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
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
            case uml.UmlPackage.START_OBJECT_BEHAVIOR_ACTION___MULTIPLICITY_OF_OBJECT__DIAGNOSTICCHAIN_MAP:
                return this.multiplicity_of_object(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.START_OBJECT_BEHAVIOR_ACTION___TYPE_OF_OBJECT__DIAGNOSTICCHAIN_MAP:
                return this.type_of_object(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.START_OBJECT_BEHAVIOR_ACTION___NO_ONPORT__DIAGNOSTICCHAIN_MAP:
                return this.no_onport(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.START_OBJECT_BEHAVIOR_ACTION___BEHAVIOR:
                return this.behavior();
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    StartObjectBehaviorActionImpl["__class"] = "uml.impl.StartObjectBehaviorActionImpl";
    StartObjectBehaviorActionImpl["__interfaces"] = ["uml.StartObjectBehaviorAction","ecore4m.EModelElement","uml.CallAction","org.eclipse.emf.ecore.EObject","uml.NamedElement","uml.ActivityContent","org.eclipse.emf.common.notify.Notifier","uml.ExecutableNode","uml.RedefinableElement","uml.Action","uml.InvocationAction","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","uml.ActivityNode","org.eclipse.emf.ecore.InternalEObject"];


}

