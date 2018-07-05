/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Link End Data</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.LinkEndDataImpl#getEnd}</li>
     * <li>{@link uml.impl.LinkEndDataImpl#getQualifier}</li>
     * <li>{@link uml.impl.LinkEndDataImpl#getValue}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.ElementImpl
     * @class
     */
    export class LinkEndDataImpl extends uml.impl.ElementImpl implements uml.LinkEndData {
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
            return uml.UmlPackage.eINSTANCE.getLinkEndData();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getEnd() : uml.Property {
            return <uml.Property><any>this.eGet(uml.UmlPackage.eINSTANCE.getLinkEndData_End(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newEnd
         */
        public setEnd(newEnd : uml.Property) {
            this.eSet(uml.UmlPackage.eINSTANCE.getLinkEndData_End(), newEnd);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getQualifier() : org.eclipse.emf.common.util.EList<uml.QualifierValue> {
            return <org.eclipse.emf.common.util.EList<uml.QualifierValue>><any>this.eGet(uml.UmlPackage.eINSTANCE.getLinkEndData_Qualifier(), true);
        }

        public getValue(stereotype? : any, propertyName? : any) : any {
            if(((stereotype != null && (stereotype["__interfaces"] != null && stereotype["__interfaces"].indexOf("uml.Stereotype") >= 0 || stereotype.constructor != null && stereotype.constructor["__interfaces"] != null && stereotype.constructor["__interfaces"].indexOf("uml.Stereotype") >= 0)) || stereotype === null) && ((typeof propertyName === 'string') || propertyName === null)) {
                super.getValue(stereotype, propertyName);
            } else if(stereotype === undefined && propertyName === undefined) {
                return <any>this.getValue$();
            } else throw new Error('invalid overload');
        }

        public getValue$() : uml.InputPin {
            return <uml.InputPin><any>this.eGet(uml.UmlPackage.eINSTANCE.getLinkEndData_Value(), true);
        }

        public setValue(stereotype? : any, propertyName? : any, newValue? : any) : any {
            if(((stereotype != null && (stereotype["__interfaces"] != null && stereotype["__interfaces"].indexOf("uml.Stereotype") >= 0 || stereotype.constructor != null && stereotype.constructor["__interfaces"] != null && stereotype.constructor["__interfaces"].indexOf("uml.Stereotype") >= 0)) || stereotype === null) && ((typeof propertyName === 'string') || propertyName === null) && ((newValue != null) || newValue === null)) {
                super.setValue(stereotype, propertyName, newValue);
            } else if(((stereotype != null && (stereotype["__interfaces"] != null && stereotype["__interfaces"].indexOf("uml.InputPin") >= 0 || stereotype.constructor != null && stereotype.constructor["__interfaces"] != null && stereotype.constructor["__interfaces"].indexOf("uml.InputPin") >= 0)) || stereotype === null) && propertyName === undefined && newValue === undefined) {
                return <any>this.setValue$uml_InputPin(stereotype);
            } else throw new Error('invalid overload');
        }

        public setValue$uml_InputPin(newValue : uml.InputPin) {
            this.eSet(uml.UmlPackage.eINSTANCE.getLinkEndData_Value(), newValue);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public same_type(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.LINK_END_DATA__SAME_TYPE, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["same_type", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.LINK_END_DATA__MULTIPLICITY, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["multiplicity", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public end_object_input_pin(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.LINK_END_DATA__END_OBJECT_INPUT_PIN, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["end_object_input_pin", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public property_is_association_end(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.LINK_END_DATA__PROPERTY_IS_ASSOCIATION_END, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["property_is_association_end", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public qualifiers(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.LINK_END_DATA__QUALIFIERS, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["qualifiers", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public allPins() : org.eclipse.emf.common.util.EList<uml.InputPin> {
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
            case uml.UmlPackage.LINK_END_DATA___SAME_TYPE__DIAGNOSTICCHAIN_MAP:
                return this.same_type(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.LINK_END_DATA___MULTIPLICITY__DIAGNOSTICCHAIN_MAP:
                return this.multiplicity(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.LINK_END_DATA___END_OBJECT_INPUT_PIN__DIAGNOSTICCHAIN_MAP:
                return this.end_object_input_pin(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.LINK_END_DATA___PROPERTY_IS_ASSOCIATION_END__DIAGNOSTICCHAIN_MAP:
                return this.property_is_association_end(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.LINK_END_DATA___QUALIFIERS__DIAGNOSTICCHAIN_MAP:
                return this.qualifiers(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.LINK_END_DATA___ALL_PINS:
                return this.allPins();
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    LinkEndDataImpl["__class"] = "uml.impl.LinkEndDataImpl";
    LinkEndDataImpl["__interfaces"] = ["ecore4m.EModelElement","uml.LinkEndData","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

