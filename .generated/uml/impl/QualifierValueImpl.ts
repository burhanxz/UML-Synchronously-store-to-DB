/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Qualifier Value</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.QualifierValueImpl#getQualifier}</li>
     * <li>{@link uml.impl.QualifierValueImpl#getValue}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.ElementImpl
     * @class
     */
    export class QualifierValueImpl extends uml.impl.ElementImpl implements uml.QualifierValue {
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
            return uml.UmlPackage.eINSTANCE.getQualifierValue();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getQualifier() : uml.Property {
            return <uml.Property><any>this.eGet(uml.UmlPackage.eINSTANCE.getQualifierValue_Qualifier(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newQualifier
         */
        public setQualifier(newQualifier : uml.Property) {
            this.eSet(uml.UmlPackage.eINSTANCE.getQualifierValue_Qualifier(), newQualifier);
        }

        public getValue(stereotype? : any, propertyName? : any) : any {
            if(((stereotype != null && (stereotype["__interfaces"] != null && stereotype["__interfaces"].indexOf("uml.Stereotype") >= 0 || stereotype.constructor != null && stereotype.constructor["__interfaces"] != null && stereotype.constructor["__interfaces"].indexOf("uml.Stereotype") >= 0)) || stereotype === null) && ((typeof propertyName === 'string') || propertyName === null)) {
                super.getValue(stereotype, propertyName);
            } else if(stereotype === undefined && propertyName === undefined) {
                return <any>this.getValue$();
            } else throw new Error('invalid overload');
        }

        public getValue$() : uml.InputPin {
            return <uml.InputPin><any>this.eGet(uml.UmlPackage.eINSTANCE.getQualifierValue_Value(), true);
        }

        public setValue(stereotype? : any, propertyName? : any, newValue? : any) : any {
            if(((stereotype != null && (stereotype["__interfaces"] != null && stereotype["__interfaces"].indexOf("uml.Stereotype") >= 0 || stereotype.constructor != null && stereotype.constructor["__interfaces"] != null && stereotype.constructor["__interfaces"].indexOf("uml.Stereotype") >= 0)) || stereotype === null) && ((typeof propertyName === 'string') || propertyName === null) && ((newValue != null) || newValue === null)) {
                super.setValue(stereotype, propertyName, newValue);
            } else if(((stereotype != null && (stereotype["__interfaces"] != null && stereotype["__interfaces"].indexOf("uml.InputPin") >= 0 || stereotype.constructor != null && stereotype.constructor["__interfaces"] != null && stereotype.constructor["__interfaces"].indexOf("uml.InputPin") >= 0)) || stereotype === null) && propertyName === undefined && newValue === undefined) {
                return <any>this.setValue$uml_InputPin(stereotype);
            } else throw new Error('invalid overload');
        }

        public setValue$uml_InputPin(newValue : uml.InputPin) {
            this.eSet(uml.UmlPackage.eINSTANCE.getQualifierValue_Value(), newValue);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public multiplicity_of_qualifier(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.QUALIFIER_VALUE__MULTIPLICITY_OF_QUALIFIER, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["multiplicity_of_qualifier", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public type_of_qualifier(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.QUALIFIER_VALUE__TYPE_OF_QUALIFIER, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["type_of_qualifier", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public qualifier_attribute(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.QUALIFIER_VALUE__QUALIFIER_ATTRIBUTE, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["qualifier_attribute", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
            case uml.UmlPackage.QUALIFIER_VALUE___MULTIPLICITY_OF_QUALIFIER__DIAGNOSTICCHAIN_MAP:
                return this.multiplicity_of_qualifier(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.QUALIFIER_VALUE___TYPE_OF_QUALIFIER__DIAGNOSTICCHAIN_MAP:
                return this.type_of_qualifier(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.QUALIFIER_VALUE___QUALIFIER_ATTRIBUTE__DIAGNOSTICCHAIN_MAP:
                return this.qualifier_attribute(<any>__arguments.get(0), <any>__arguments.get(1));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    QualifierValueImpl["__class"] = "uml.impl.QualifierValueImpl";
    QualifierValueImpl["__interfaces"] = ["ecore4m.EModelElement","uml.QualifierValue","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

