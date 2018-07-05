/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Time Event</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.TimeEventImpl#isIsRelative}</li>
     * <li>{@link uml.impl.TimeEventImpl#getWhen}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.EventImpl
     * @class
     */
    export class TimeEventImpl extends uml.impl.EventImpl implements uml.TimeEvent {
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
            return uml.UmlPackage.eINSTANCE.getTimeEvent();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isIsRelative() : boolean {
            return <boolean>this.eGet(uml.UmlPackage.eINSTANCE.getTimeEvent_IsRelative(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {boolean} newIsRelative
         */
        public setIsRelative(newIsRelative : boolean) {
            this.eSet(uml.UmlPackage.eINSTANCE.getTimeEvent_IsRelative(), newIsRelative);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getWhen() : uml.TimeExpression {
            return <uml.TimeExpression><any>this.eGet(uml.UmlPackage.eINSTANCE.getTimeEvent_When(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newWhen
         */
        public setWhen(newWhen : uml.TimeExpression) {
            this.eSet(uml.UmlPackage.eINSTANCE.getTimeEvent_When(), newWhen);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public when_non_negative(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.TIME_EVENT__WHEN_NON_NEGATIVE, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["when_non_negative", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
            case uml.UmlPackage.TIME_EVENT___WHEN_NON_NEGATIVE__DIAGNOSTICCHAIN_MAP:
                return this.when_non_negative(<any>__arguments.get(0), <any>__arguments.get(1));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    TimeEventImpl["__class"] = "uml.impl.TimeEventImpl";
    TimeEventImpl["__interfaces"] = ["ecore4m.EModelElement","uml.ParameterableElement","uml.TimeEvent","uml.PackageableElement","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","uml.Event","org.eclipse.emf.ecore.EObject","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

