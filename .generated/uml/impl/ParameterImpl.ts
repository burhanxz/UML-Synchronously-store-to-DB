/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Parameter</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.ParameterImpl#isIsOrdered}</li>
     * <li>{@link uml.impl.ParameterImpl#isIsUnique}</li>
     * <li>{@link uml.impl.ParameterImpl#getLower}</li>
     * <li>{@link uml.impl.ParameterImpl#getLowerValue}</li>
     * <li>{@link uml.impl.ParameterImpl#getUpper}</li>
     * <li>{@link uml.impl.ParameterImpl#getUpperValue}</li>
     * <li>{@link uml.impl.ParameterImpl#getDefault}</li>
     * <li>{@link uml.impl.ParameterImpl#getDefaultValue}</li>
     * <li>{@link uml.impl.ParameterImpl#getDirection}</li>
     * <li>{@link uml.impl.ParameterImpl#getEffect}</li>
     * <li>{@link uml.impl.ParameterImpl#isIsException}</li>
     * <li>{@link uml.impl.ParameterImpl#isIsStream}</li>
     * <li>{@link uml.impl.ParameterImpl#getOperation}</li>
     * <li>{@link uml.impl.ParameterImpl#getParameterSet}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.ConnectableElementImpl
     * @class
     */
    export class ParameterImpl extends uml.impl.ConnectableElementImpl implements uml.Parameter {
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
            return uml.UmlPackage.eINSTANCE.getParameter();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isIsOrdered() : boolean {
            return <boolean>this.eGet(uml.UmlPackage.eINSTANCE.getMultiplicityElement_IsOrdered(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {boolean} newIsOrdered
         */
        public setIsOrdered(newIsOrdered : boolean) {
            this.eSet(uml.UmlPackage.eINSTANCE.getMultiplicityElement_IsOrdered(), newIsOrdered);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isIsUnique() : boolean {
            return <boolean>this.eGet(uml.UmlPackage.eINSTANCE.getMultiplicityElement_IsUnique(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {boolean} newIsUnique
         */
        public setIsUnique(newIsUnique : boolean) {
            this.eSet(uml.UmlPackage.eINSTANCE.getMultiplicityElement_IsUnique(), newIsUnique);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {number}
         */
        public getLower() : number {
            return <number>this.eGet(uml.UmlPackage.eINSTANCE.getMultiplicityElement_Lower(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {number} newLower
         */
        public setLower(newLower : number) {
            this.eSet(uml.UmlPackage.eINSTANCE.getMultiplicityElement_Lower(), newLower);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getLowerValue() : uml.ValueSpecification {
            return <uml.ValueSpecification><any>this.eGet(uml.UmlPackage.eINSTANCE.getMultiplicityElement_LowerValue(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newLowerValue
         */
        public setLowerValue(newLowerValue : uml.ValueSpecification) {
            this.eSet(uml.UmlPackage.eINSTANCE.getMultiplicityElement_LowerValue(), newLowerValue);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {number}
         */
        public getUpper() : number {
            return <number>this.eGet(uml.UmlPackage.eINSTANCE.getMultiplicityElement_Upper(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {number} newUpper
         */
        public setUpper(newUpper : number) {
            this.eSet(uml.UmlPackage.eINSTANCE.getMultiplicityElement_Upper(), newUpper);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getUpperValue() : uml.ValueSpecification {
            return <uml.ValueSpecification><any>this.eGet(uml.UmlPackage.eINSTANCE.getMultiplicityElement_UpperValue(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newUpperValue
         */
        public setUpperValue(newUpperValue : uml.ValueSpecification) {
            this.eSet(uml.UmlPackage.eINSTANCE.getMultiplicityElement_UpperValue(), newUpperValue);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {string}
         */
        public getDefault() : string {
            return <string>this.eGet(uml.UmlPackage.eINSTANCE.getParameter_Default(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {string} newDefault
         */
        public setDefault(newDefault : string) {
            this.eSet(uml.UmlPackage.eINSTANCE.getParameter_Default(), newDefault);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        public unsetDefault() {
            this.eUnset(uml.UmlPackage.eINSTANCE.getParameter_Default());
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isSetDefault() : boolean {
            return this.eIsSet(uml.UmlPackage.eINSTANCE.getParameter_Default());
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getDefaultValue() : uml.ValueSpecification {
            return <uml.ValueSpecification><any>this.eGet(uml.UmlPackage.eINSTANCE.getParameter_DefaultValue(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newDefaultValue
         */
        public setDefaultValue(newDefaultValue : uml.ValueSpecification) {
            this.eSet(uml.UmlPackage.eINSTANCE.getParameter_DefaultValue(), newDefaultValue);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {uml.ParameterDirectionKind}
         */
        public getDirection() : uml.ParameterDirectionKind {
            return <uml.ParameterDirectionKind>this.eGet(uml.UmlPackage.eINSTANCE.getParameter_Direction(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {uml.ParameterDirectionKind} newDirection
         */
        public setDirection(newDirection : uml.ParameterDirectionKind) {
            this.eSet(uml.UmlPackage.eINSTANCE.getParameter_Direction(), newDirection);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {uml.ParameterEffectKind}
         */
        public getEffect() : uml.ParameterEffectKind {
            return <uml.ParameterEffectKind>this.eGet(uml.UmlPackage.eINSTANCE.getParameter_Effect(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {uml.ParameterEffectKind} newEffect
         */
        public setEffect(newEffect : uml.ParameterEffectKind) {
            this.eSet(uml.UmlPackage.eINSTANCE.getParameter_Effect(), newEffect);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        public unsetEffect() {
            this.eUnset(uml.UmlPackage.eINSTANCE.getParameter_Effect());
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isSetEffect() : boolean {
            return this.eIsSet(uml.UmlPackage.eINSTANCE.getParameter_Effect());
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isIsException() : boolean {
            return <boolean>this.eGet(uml.UmlPackage.eINSTANCE.getParameter_IsException(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {boolean} newIsException
         */
        public setIsException(newIsException : boolean) {
            this.eSet(uml.UmlPackage.eINSTANCE.getParameter_IsException(), newIsException);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isIsStream() : boolean {
            return <boolean>this.eGet(uml.UmlPackage.eINSTANCE.getParameter_IsStream(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {boolean} newIsStream
         */
        public setIsStream(newIsStream : boolean) {
            this.eSet(uml.UmlPackage.eINSTANCE.getParameter_IsStream(), newIsStream);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getOperation() : uml.Operation {
            return <uml.Operation><any>this.eGet(uml.UmlPackage.eINSTANCE.getParameter_Operation(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getParameterSet() : org.eclipse.emf.common.util.EList<uml.ParameterSet> {
            return <org.eclipse.emf.common.util.EList<uml.ParameterSet>><any>this.eGet(uml.UmlPackage.eINSTANCE.getParameter_ParameterSet(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public in_and_out(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.PARAMETER__IN_AND_OUT, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["in_and_out", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public not_exception(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.PARAMETER__NOT_EXCEPTION, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["not_exception", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public connector_end(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.PARAMETER__CONNECTOR_END, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["connector_end", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public reentrant_behaviors(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.PARAMETER__REENTRANT_BEHAVIORS, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["reentrant_behaviors", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public stream_and_exception(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.PARAMETER__STREAM_AND_EXCEPTION, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["stream_and_exception", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public object_effect(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.PARAMETER__OBJECT_EFFECT, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["object_effect", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
                }
                return false;
            }
            return true;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {boolean} value
         */
        public setBooleanDefaultValue(value : boolean) {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {number} value
         */
        public setIntegerDefaultValue(value : number) {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        public setNullDefaultValue() {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {number} value
         */
        public setRealDefaultValue(value : number) {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {string} value
         */
        public setStringDefaultValue(value : string) {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {number} value
         */
        public setUnlimitedNaturalDefaultValue(value : number) {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public upper_ge_lower(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.MULTIPLICITY_ELEMENT__UPPER_GE_LOWER, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["upper_ge_lower", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public lower_ge_0(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.MULTIPLICITY_ELEMENT__LOWER_GE_0, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["lower_ge_0", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public value_specification_no_side_effects(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.MULTIPLICITY_ELEMENT__VALUE_SPECIFICATION_NO_SIDE_EFFECTS, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["value_specification_no_side_effects", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public value_specification_constant(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.MULTIPLICITY_ELEMENT__VALUE_SPECIFICATION_CONSTANT, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["value_specification_constant", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public lower_is_integer(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.MULTIPLICITY_ELEMENT__LOWER_IS_INTEGER, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["lower_is_integer", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public upper_is_unlimitedNatural(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.MULTIPLICITY_ELEMENT__UPPER_IS_UNLIMITED_NATURAL, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["upper_is_unlimitedNatural", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
                }
                return false;
            }
            return true;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} other
         * @return {boolean}
         */
        public compatibleWith(other : uml.MultiplicityElement) : boolean {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} M
         * @return {boolean}
         */
        public includesMultiplicity(M : uml.MultiplicityElement) : boolean {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {number} lowerbound
         * @param {number} upperbound
         * @return {boolean}
         */
        public is(lowerbound : number, upperbound : number) : boolean {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isMultivalued() : boolean {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {number}
         */
        public lowerBound() : number {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {number}
         */
        public upperBound() : number {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {number} derivedFeatureID
         * @param {*} baseClass
         * @return {number}
         */
        public eBaseStructuralFeatureID(derivedFeatureID : number, baseClass : any) : number {
            if(baseClass === "uml.MultiplicityElement") {
                switch((derivedFeatureID)) {
                case uml.UmlPackage.PARAMETER__IS_ORDERED:
                    return uml.UmlPackage.MULTIPLICITY_ELEMENT__IS_ORDERED;
                case uml.UmlPackage.PARAMETER__IS_UNIQUE:
                    return uml.UmlPackage.MULTIPLICITY_ELEMENT__IS_UNIQUE;
                case uml.UmlPackage.PARAMETER__LOWER:
                    return uml.UmlPackage.MULTIPLICITY_ELEMENT__LOWER;
                case uml.UmlPackage.PARAMETER__LOWER_VALUE:
                    return uml.UmlPackage.MULTIPLICITY_ELEMENT__LOWER_VALUE;
                case uml.UmlPackage.PARAMETER__UPPER:
                    return uml.UmlPackage.MULTIPLICITY_ELEMENT__UPPER;
                case uml.UmlPackage.PARAMETER__UPPER_VALUE:
                    return uml.UmlPackage.MULTIPLICITY_ELEMENT__UPPER_VALUE;
                default:
                    return -1;
                }
            }
            return super.eBaseStructuralFeatureID(derivedFeatureID, baseClass);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {number} baseFeatureID
         * @param {*} baseClass
         * @return {number}
         */
        public eDerivedStructuralFeatureID(baseFeatureID : number, baseClass : any) : number {
            if(baseClass === "uml.MultiplicityElement") {
                switch((baseFeatureID)) {
                case uml.UmlPackage.MULTIPLICITY_ELEMENT__IS_ORDERED:
                    return uml.UmlPackage.PARAMETER__IS_ORDERED;
                case uml.UmlPackage.MULTIPLICITY_ELEMENT__IS_UNIQUE:
                    return uml.UmlPackage.PARAMETER__IS_UNIQUE;
                case uml.UmlPackage.MULTIPLICITY_ELEMENT__LOWER:
                    return uml.UmlPackage.PARAMETER__LOWER;
                case uml.UmlPackage.MULTIPLICITY_ELEMENT__LOWER_VALUE:
                    return uml.UmlPackage.PARAMETER__LOWER_VALUE;
                case uml.UmlPackage.MULTIPLICITY_ELEMENT__UPPER:
                    return uml.UmlPackage.PARAMETER__UPPER;
                case uml.UmlPackage.MULTIPLICITY_ELEMENT__UPPER_VALUE:
                    return uml.UmlPackage.PARAMETER__UPPER_VALUE;
                default:
                    return -1;
                }
            }
            return super.eDerivedStructuralFeatureID(baseFeatureID, baseClass);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {number} baseOperationID
         * @param {*} baseClass
         * @return {number}
         */
        public eDerivedOperationID(baseOperationID : number, baseClass : any) : number {
            if(baseClass === "uml.MultiplicityElement") {
                switch((baseOperationID)) {
                case uml.UmlPackage.MULTIPLICITY_ELEMENT___UPPER_GE_LOWER__DIAGNOSTICCHAIN_MAP:
                    return uml.UmlPackage.PARAMETER___UPPER_GE_LOWER__DIAGNOSTICCHAIN_MAP;
                case uml.UmlPackage.MULTIPLICITY_ELEMENT___LOWER_GE_0__DIAGNOSTICCHAIN_MAP:
                    return uml.UmlPackage.PARAMETER___LOWER_GE_0__DIAGNOSTICCHAIN_MAP;
                case uml.UmlPackage.MULTIPLICITY_ELEMENT___VALUE_SPECIFICATION_NO_SIDE_EFFECTS__DIAGNOSTICCHAIN_MAP:
                    return uml.UmlPackage.PARAMETER___VALUE_SPECIFICATION_NO_SIDE_EFFECTS__DIAGNOSTICCHAIN_MAP;
                case uml.UmlPackage.MULTIPLICITY_ELEMENT___VALUE_SPECIFICATION_CONSTANT__DIAGNOSTICCHAIN_MAP:
                    return uml.UmlPackage.PARAMETER___VALUE_SPECIFICATION_CONSTANT__DIAGNOSTICCHAIN_MAP;
                case uml.UmlPackage.MULTIPLICITY_ELEMENT___LOWER_IS_INTEGER__DIAGNOSTICCHAIN_MAP:
                    return uml.UmlPackage.PARAMETER___LOWER_IS_INTEGER__DIAGNOSTICCHAIN_MAP;
                case uml.UmlPackage.MULTIPLICITY_ELEMENT___UPPER_IS_UNLIMITED_NATURAL__DIAGNOSTICCHAIN_MAP:
                    return uml.UmlPackage.PARAMETER___UPPER_IS_UNLIMITED_NATURAL__DIAGNOSTICCHAIN_MAP;
                case uml.UmlPackage.MULTIPLICITY_ELEMENT___SET_LOWER__INT:
                    return uml.UmlPackage.PARAMETER___SET_LOWER__INT;
                case uml.UmlPackage.MULTIPLICITY_ELEMENT___SET_UPPER__INT:
                    return uml.UmlPackage.PARAMETER___SET_UPPER__INT;
                case uml.UmlPackage.MULTIPLICITY_ELEMENT___COMPATIBLE_WITH__MULTIPLICITYELEMENT:
                    return uml.UmlPackage.PARAMETER___COMPATIBLE_WITH__MULTIPLICITYELEMENT;
                case uml.UmlPackage.MULTIPLICITY_ELEMENT___INCLUDES_MULTIPLICITY__MULTIPLICITYELEMENT:
                    return uml.UmlPackage.PARAMETER___INCLUDES_MULTIPLICITY__MULTIPLICITYELEMENT;
                case uml.UmlPackage.MULTIPLICITY_ELEMENT___IS__INT_INT:
                    return uml.UmlPackage.PARAMETER___IS__INT_INT;
                case uml.UmlPackage.MULTIPLICITY_ELEMENT___IS_MULTIVALUED:
                    return uml.UmlPackage.PARAMETER___IS_MULTIVALUED;
                case uml.UmlPackage.MULTIPLICITY_ELEMENT___GET_LOWER:
                    return uml.UmlPackage.PARAMETER___GET_LOWER;
                case uml.UmlPackage.MULTIPLICITY_ELEMENT___LOWER_BOUND:
                    return uml.UmlPackage.PARAMETER___LOWER_BOUND;
                case uml.UmlPackage.MULTIPLICITY_ELEMENT___GET_UPPER:
                    return uml.UmlPackage.PARAMETER___GET_UPPER;
                case uml.UmlPackage.MULTIPLICITY_ELEMENT___UPPER_BOUND:
                    return uml.UmlPackage.PARAMETER___UPPER_BOUND;
                default:
                    return -1;
                }
            }
            return super.eDerivedOperationID(baseOperationID, baseClass);
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
            case uml.UmlPackage.PARAMETER___IN_AND_OUT__DIAGNOSTICCHAIN_MAP:
                return this.in_and_out(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.PARAMETER___NOT_EXCEPTION__DIAGNOSTICCHAIN_MAP:
                return this.not_exception(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.PARAMETER___CONNECTOR_END__DIAGNOSTICCHAIN_MAP:
                return this.connector_end(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.PARAMETER___REENTRANT_BEHAVIORS__DIAGNOSTICCHAIN_MAP:
                return this.reentrant_behaviors(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.PARAMETER___STREAM_AND_EXCEPTION__DIAGNOSTICCHAIN_MAP:
                return this.stream_and_exception(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.PARAMETER___OBJECT_EFFECT__DIAGNOSTICCHAIN_MAP:
                return this.object_effect(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.PARAMETER___SET_BOOLEAN_DEFAULT_VALUE__BOOLEAN:
                this.setBooleanDefaultValue(<any>__arguments.get(0));
                return null;
            case uml.UmlPackage.PARAMETER___SET_INTEGER_DEFAULT_VALUE__INT:
                this.setIntegerDefaultValue(<any>__arguments.get(0));
                return null;
            case uml.UmlPackage.PARAMETER___SET_NULL_DEFAULT_VALUE:
                this.setNullDefaultValue();
                return null;
            case uml.UmlPackage.PARAMETER___SET_REAL_DEFAULT_VALUE__DOUBLE:
                this.setRealDefaultValue(<any>__arguments.get(0));
                return null;
            case uml.UmlPackage.PARAMETER___SET_STRING_DEFAULT_VALUE__STRING:
                this.setStringDefaultValue(<any>__arguments.get(0));
                return null;
            case uml.UmlPackage.PARAMETER___SET_UNLIMITED_NATURAL_DEFAULT_VALUE__INT:
                this.setUnlimitedNaturalDefaultValue(<any>__arguments.get(0));
                return null;
            case uml.UmlPackage.PARAMETER___UPPER_GE_LOWER__DIAGNOSTICCHAIN_MAP:
                return this.upper_ge_lower(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.PARAMETER___LOWER_GE_0__DIAGNOSTICCHAIN_MAP:
                return this.lower_ge_0(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.PARAMETER___VALUE_SPECIFICATION_NO_SIDE_EFFECTS__DIAGNOSTICCHAIN_MAP:
                return this.value_specification_no_side_effects(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.PARAMETER___VALUE_SPECIFICATION_CONSTANT__DIAGNOSTICCHAIN_MAP:
                return this.value_specification_constant(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.PARAMETER___LOWER_IS_INTEGER__DIAGNOSTICCHAIN_MAP:
                return this.lower_is_integer(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.PARAMETER___UPPER_IS_UNLIMITED_NATURAL__DIAGNOSTICCHAIN_MAP:
                return this.upper_is_unlimitedNatural(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.PARAMETER___COMPATIBLE_WITH__MULTIPLICITYELEMENT:
                return this.compatibleWith(<any>__arguments.get(0));
            case uml.UmlPackage.PARAMETER___INCLUDES_MULTIPLICITY__MULTIPLICITYELEMENT:
                return this.includesMultiplicity(<any>__arguments.get(0));
            case uml.UmlPackage.PARAMETER___IS__INT_INT:
                return this.is(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.PARAMETER___IS_MULTIVALUED:
                return this.isMultivalued();
            case uml.UmlPackage.PARAMETER___LOWER_BOUND:
                return this.lowerBound();
            case uml.UmlPackage.PARAMETER___UPPER_BOUND:
                return this.upperBound();
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    ParameterImpl["__class"] = "uml.impl.ParameterImpl";
    ParameterImpl["__interfaces"] = ["ecore4m.EModelElement","uml.TypedElement","org.eclipse.emf.ecore.EObject","uml.Parameter","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","uml.MultiplicityElement","uml.ParameterableElement","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","uml.ConnectableElement","org.eclipse.emf.ecore.InternalEObject"];


}

