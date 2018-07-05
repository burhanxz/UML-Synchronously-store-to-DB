/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Structural Feature</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.StructuralFeatureImpl#getType}</li>
     * <li>{@link uml.impl.StructuralFeatureImpl#isIsOrdered}</li>
     * <li>{@link uml.impl.StructuralFeatureImpl#isIsUnique}</li>
     * <li>{@link uml.impl.StructuralFeatureImpl#getLower}</li>
     * <li>{@link uml.impl.StructuralFeatureImpl#getLowerValue}</li>
     * <li>{@link uml.impl.StructuralFeatureImpl#getUpper}</li>
     * <li>{@link uml.impl.StructuralFeatureImpl#getUpperValue}</li>
     * <li>{@link uml.impl.StructuralFeatureImpl#isIsReadOnly}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.FeatureImpl
     * @class
     */
    export abstract class StructuralFeatureImpl extends uml.impl.FeatureImpl implements uml.StructuralFeature {
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
            return uml.UmlPackage.eINSTANCE.getStructuralFeature();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getType() : uml.Type {
            return <uml.Type><any>this.eGet(uml.UmlPackage.eINSTANCE.getTypedElement_Type(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newType
         */
        public setType(newType : uml.Type) {
            this.eSet(uml.UmlPackage.eINSTANCE.getTypedElement_Type(), newType);
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
         * @return {boolean}
         */
        public isIsReadOnly() : boolean {
            return <boolean>this.eGet(uml.UmlPackage.eINSTANCE.getStructuralFeature_IsReadOnly(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {boolean} newIsReadOnly
         */
        public setIsReadOnly(newIsReadOnly : boolean) {
            this.eSet(uml.UmlPackage.eINSTANCE.getStructuralFeature_IsReadOnly(), newIsReadOnly);
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
            if(baseClass === "uml.TypedElement") {
                switch((derivedFeatureID)) {
                case uml.UmlPackage.STRUCTURAL_FEATURE__TYPE:
                    return uml.UmlPackage.TYPED_ELEMENT__TYPE;
                default:
                    return -1;
                }
            }
            if(baseClass === "uml.MultiplicityElement") {
                switch((derivedFeatureID)) {
                case uml.UmlPackage.STRUCTURAL_FEATURE__IS_ORDERED:
                    return uml.UmlPackage.MULTIPLICITY_ELEMENT__IS_ORDERED;
                case uml.UmlPackage.STRUCTURAL_FEATURE__IS_UNIQUE:
                    return uml.UmlPackage.MULTIPLICITY_ELEMENT__IS_UNIQUE;
                case uml.UmlPackage.STRUCTURAL_FEATURE__LOWER:
                    return uml.UmlPackage.MULTIPLICITY_ELEMENT__LOWER;
                case uml.UmlPackage.STRUCTURAL_FEATURE__LOWER_VALUE:
                    return uml.UmlPackage.MULTIPLICITY_ELEMENT__LOWER_VALUE;
                case uml.UmlPackage.STRUCTURAL_FEATURE__UPPER:
                    return uml.UmlPackage.MULTIPLICITY_ELEMENT__UPPER;
                case uml.UmlPackage.STRUCTURAL_FEATURE__UPPER_VALUE:
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
            if(baseClass === "uml.TypedElement") {
                switch((baseFeatureID)) {
                case uml.UmlPackage.TYPED_ELEMENT__TYPE:
                    return uml.UmlPackage.STRUCTURAL_FEATURE__TYPE;
                default:
                    return -1;
                }
            }
            if(baseClass === "uml.MultiplicityElement") {
                switch((baseFeatureID)) {
                case uml.UmlPackage.MULTIPLICITY_ELEMENT__IS_ORDERED:
                    return uml.UmlPackage.STRUCTURAL_FEATURE__IS_ORDERED;
                case uml.UmlPackage.MULTIPLICITY_ELEMENT__IS_UNIQUE:
                    return uml.UmlPackage.STRUCTURAL_FEATURE__IS_UNIQUE;
                case uml.UmlPackage.MULTIPLICITY_ELEMENT__LOWER:
                    return uml.UmlPackage.STRUCTURAL_FEATURE__LOWER;
                case uml.UmlPackage.MULTIPLICITY_ELEMENT__LOWER_VALUE:
                    return uml.UmlPackage.STRUCTURAL_FEATURE__LOWER_VALUE;
                case uml.UmlPackage.MULTIPLICITY_ELEMENT__UPPER:
                    return uml.UmlPackage.STRUCTURAL_FEATURE__UPPER;
                case uml.UmlPackage.MULTIPLICITY_ELEMENT__UPPER_VALUE:
                    return uml.UmlPackage.STRUCTURAL_FEATURE__UPPER_VALUE;
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
            if(baseClass === "uml.TypedElement") {
                switch((baseOperationID)) {
                default:
                    return -1;
                }
            }
            if(baseClass === "uml.MultiplicityElement") {
                switch((baseOperationID)) {
                case uml.UmlPackage.MULTIPLICITY_ELEMENT___UPPER_GE_LOWER__DIAGNOSTICCHAIN_MAP:
                    return uml.UmlPackage.STRUCTURAL_FEATURE___UPPER_GE_LOWER__DIAGNOSTICCHAIN_MAP;
                case uml.UmlPackage.MULTIPLICITY_ELEMENT___LOWER_GE_0__DIAGNOSTICCHAIN_MAP:
                    return uml.UmlPackage.STRUCTURAL_FEATURE___LOWER_GE_0__DIAGNOSTICCHAIN_MAP;
                case uml.UmlPackage.MULTIPLICITY_ELEMENT___VALUE_SPECIFICATION_NO_SIDE_EFFECTS__DIAGNOSTICCHAIN_MAP:
                    return uml.UmlPackage.STRUCTURAL_FEATURE___VALUE_SPECIFICATION_NO_SIDE_EFFECTS__DIAGNOSTICCHAIN_MAP;
                case uml.UmlPackage.MULTIPLICITY_ELEMENT___VALUE_SPECIFICATION_CONSTANT__DIAGNOSTICCHAIN_MAP:
                    return uml.UmlPackage.STRUCTURAL_FEATURE___VALUE_SPECIFICATION_CONSTANT__DIAGNOSTICCHAIN_MAP;
                case uml.UmlPackage.MULTIPLICITY_ELEMENT___LOWER_IS_INTEGER__DIAGNOSTICCHAIN_MAP:
                    return uml.UmlPackage.STRUCTURAL_FEATURE___LOWER_IS_INTEGER__DIAGNOSTICCHAIN_MAP;
                case uml.UmlPackage.MULTIPLICITY_ELEMENT___UPPER_IS_UNLIMITED_NATURAL__DIAGNOSTICCHAIN_MAP:
                    return uml.UmlPackage.STRUCTURAL_FEATURE___UPPER_IS_UNLIMITED_NATURAL__DIAGNOSTICCHAIN_MAP;
                case uml.UmlPackage.MULTIPLICITY_ELEMENT___SET_LOWER__INT:
                    return uml.UmlPackage.STRUCTURAL_FEATURE___SET_LOWER__INT;
                case uml.UmlPackage.MULTIPLICITY_ELEMENT___SET_UPPER__INT:
                    return uml.UmlPackage.STRUCTURAL_FEATURE___SET_UPPER__INT;
                case uml.UmlPackage.MULTIPLICITY_ELEMENT___COMPATIBLE_WITH__MULTIPLICITYELEMENT:
                    return uml.UmlPackage.STRUCTURAL_FEATURE___COMPATIBLE_WITH__MULTIPLICITYELEMENT;
                case uml.UmlPackage.MULTIPLICITY_ELEMENT___INCLUDES_MULTIPLICITY__MULTIPLICITYELEMENT:
                    return uml.UmlPackage.STRUCTURAL_FEATURE___INCLUDES_MULTIPLICITY__MULTIPLICITYELEMENT;
                case uml.UmlPackage.MULTIPLICITY_ELEMENT___IS__INT_INT:
                    return uml.UmlPackage.STRUCTURAL_FEATURE___IS__INT_INT;
                case uml.UmlPackage.MULTIPLICITY_ELEMENT___IS_MULTIVALUED:
                    return uml.UmlPackage.STRUCTURAL_FEATURE___IS_MULTIVALUED;
                case uml.UmlPackage.MULTIPLICITY_ELEMENT___GET_LOWER:
                    return uml.UmlPackage.STRUCTURAL_FEATURE___GET_LOWER;
                case uml.UmlPackage.MULTIPLICITY_ELEMENT___LOWER_BOUND:
                    return uml.UmlPackage.STRUCTURAL_FEATURE___LOWER_BOUND;
                case uml.UmlPackage.MULTIPLICITY_ELEMENT___GET_UPPER:
                    return uml.UmlPackage.STRUCTURAL_FEATURE___GET_UPPER;
                case uml.UmlPackage.MULTIPLICITY_ELEMENT___UPPER_BOUND:
                    return uml.UmlPackage.STRUCTURAL_FEATURE___UPPER_BOUND;
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
            case uml.UmlPackage.STRUCTURAL_FEATURE___UPPER_GE_LOWER__DIAGNOSTICCHAIN_MAP:
                return this.upper_ge_lower(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.STRUCTURAL_FEATURE___LOWER_GE_0__DIAGNOSTICCHAIN_MAP:
                return this.lower_ge_0(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.STRUCTURAL_FEATURE___VALUE_SPECIFICATION_NO_SIDE_EFFECTS__DIAGNOSTICCHAIN_MAP:
                return this.value_specification_no_side_effects(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.STRUCTURAL_FEATURE___VALUE_SPECIFICATION_CONSTANT__DIAGNOSTICCHAIN_MAP:
                return this.value_specification_constant(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.STRUCTURAL_FEATURE___LOWER_IS_INTEGER__DIAGNOSTICCHAIN_MAP:
                return this.lower_is_integer(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.STRUCTURAL_FEATURE___UPPER_IS_UNLIMITED_NATURAL__DIAGNOSTICCHAIN_MAP:
                return this.upper_is_unlimitedNatural(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.STRUCTURAL_FEATURE___COMPATIBLE_WITH__MULTIPLICITYELEMENT:
                return this.compatibleWith(<any>__arguments.get(0));
            case uml.UmlPackage.STRUCTURAL_FEATURE___INCLUDES_MULTIPLICITY__MULTIPLICITYELEMENT:
                return this.includesMultiplicity(<any>__arguments.get(0));
            case uml.UmlPackage.STRUCTURAL_FEATURE___IS__INT_INT:
                return this.is(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.STRUCTURAL_FEATURE___IS_MULTIVALUED:
                return this.isMultivalued();
            case uml.UmlPackage.STRUCTURAL_FEATURE___LOWER_BOUND:
                return this.lowerBound();
            case uml.UmlPackage.STRUCTURAL_FEATURE___UPPER_BOUND:
                return this.upperBound();
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    StructuralFeatureImpl["__class"] = "uml.impl.StructuralFeatureImpl";
    StructuralFeatureImpl["__interfaces"] = ["ecore4m.EModelElement","uml.TypedElement","uml.Feature","org.eclipse.emf.ecore.EObject","uml.NamedElement","uml.StructuralFeature","org.eclipse.emf.common.notify.Notifier","uml.MultiplicityElement","uml.RedefinableElement","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.InternalEObject"];


}
