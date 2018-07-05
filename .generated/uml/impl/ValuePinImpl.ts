/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Value Pin</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.ValuePinImpl#getValue}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.InputPinImpl
     * @class
     */
    export class ValuePinImpl extends uml.impl.InputPinImpl implements uml.ValuePin {
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
            return uml.UmlPackage.eINSTANCE.getValuePin();
        }

        public getValue(stereotype? : any, propertyName? : any) : any {
            if(((stereotype != null && (stereotype["__interfaces"] != null && stereotype["__interfaces"].indexOf("uml.Stereotype") >= 0 || stereotype.constructor != null && stereotype.constructor["__interfaces"] != null && stereotype.constructor["__interfaces"].indexOf("uml.Stereotype") >= 0)) || stereotype === null) && ((typeof propertyName === 'string') || propertyName === null)) {
                super.getValue(stereotype, propertyName);
            } else if(stereotype === undefined && propertyName === undefined) {
                return <any>this.getValue$();
            } else throw new Error('invalid overload');
        }

        public getValue$() : uml.ValueSpecification {
            return <uml.ValueSpecification><any>this.eGet(uml.UmlPackage.eINSTANCE.getValuePin_Value(), true);
        }

        public setValue(stereotype? : any, propertyName? : any, newValue? : any) : any {
            if(((stereotype != null && (stereotype["__interfaces"] != null && stereotype["__interfaces"].indexOf("uml.Stereotype") >= 0 || stereotype.constructor != null && stereotype.constructor["__interfaces"] != null && stereotype.constructor["__interfaces"].indexOf("uml.Stereotype") >= 0)) || stereotype === null) && ((typeof propertyName === 'string') || propertyName === null) && ((newValue != null) || newValue === null)) {
                super.setValue(stereotype, propertyName, newValue);
            } else if(((stereotype != null && (stereotype["__interfaces"] != null && stereotype["__interfaces"].indexOf("uml.ValueSpecification") >= 0 || stereotype.constructor != null && stereotype.constructor["__interfaces"] != null && stereotype.constructor["__interfaces"].indexOf("uml.ValueSpecification") >= 0)) || stereotype === null) && propertyName === undefined && newValue === undefined) {
                return <any>this.setValue$uml_ValueSpecification(stereotype);
            } else throw new Error('invalid overload');
        }

        public setValue$uml_ValueSpecification(newValue : uml.ValueSpecification) {
            this.eSet(uml.UmlPackage.eINSTANCE.getValuePin_Value(), newValue);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public no_incoming_edges(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.VALUE_PIN__NO_INCOMING_EDGES, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["no_incoming_edges", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public compatible_type(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.VALUE_PIN__COMPATIBLE_TYPE, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["compatible_type", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
            case uml.UmlPackage.VALUE_PIN___NO_INCOMING_EDGES__DIAGNOSTICCHAIN_MAP:
                return this.no_incoming_edges(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.VALUE_PIN___COMPATIBLE_TYPE__DIAGNOSTICCHAIN_MAP:
                return this.compatible_type(<any>__arguments.get(0), <any>__arguments.get(1));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    ValuePinImpl["__class"] = "uml.impl.ValuePinImpl";
    ValuePinImpl["__interfaces"] = ["ecore4m.EModelElement","uml.InputPin","uml.TypedElement","org.eclipse.emf.ecore.EObject","uml.NamedElement","uml.ActivityContent","uml.ObjectNode","org.eclipse.emf.common.notify.Notifier","uml.MultiplicityElement","uml.RedefinableElement","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","uml.Pin","uml.ActivityNode","uml.ValuePin","org.eclipse.emf.ecore.InternalEObject"];


}

