/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Property</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.PropertyImpl#getOwningTemplateParameter}</li>
     * <li>{@link uml.impl.PropertyImpl#getTemplateParameter}</li>
     * <li>{@link uml.impl.PropertyImpl#getEnd}</li>
     * <li>{@link uml.impl.PropertyImpl#getDeployedElement}</li>
     * <li>{@link uml.impl.PropertyImpl#getDeployment}</li>
     * <li>{@link uml.impl.PropertyImpl#getDatatype}</li>
     * <li>{@link uml.impl.PropertyImpl#getInterface}</li>
     * <li>{@link uml.impl.PropertyImpl#getDefault}</li>
     * <li>{@link uml.impl.PropertyImpl#getAggregation}</li>
     * <li>{@link uml.impl.PropertyImpl#getAssociationEnd}</li>
     * <li>{@link uml.impl.PropertyImpl#getQualifier}</li>
     * <li>{@link uml.impl.PropertyImpl#getClass_}</li>
     * <li>{@link uml.impl.PropertyImpl#getDefaultValue}</li>
     * <li>{@link uml.impl.PropertyImpl#isIsComposite}</li>
     * <li>{@link uml.impl.PropertyImpl#isIsDerived}</li>
     * <li>{@link uml.impl.PropertyImpl#isIsDerivedUnion}</li>
     * <li>{@link uml.impl.PropertyImpl#isIsID}</li>
     * <li>{@link uml.impl.PropertyImpl#getOpposite}</li>
     * <li>{@link uml.impl.PropertyImpl#getOwningAssociation}</li>
     * <li>{@link uml.impl.PropertyImpl#getRedefinedProperty}</li>
     * <li>{@link uml.impl.PropertyImpl#getSubsettedProperty}</li>
     * <li>{@link uml.impl.PropertyImpl#getAssociation}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.StructuralFeatureImpl
     * @class
     */
    export class PropertyImpl extends uml.impl.StructuralFeatureImpl implements uml.Property {
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
            return uml.UmlPackage.eINSTANCE.getProperty();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getOwningTemplateParameter() : uml.TemplateParameter {
            return <uml.TemplateParameter><any>this.eGet(uml.UmlPackage.eINSTANCE.getParameterableElement_OwningTemplateParameter(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newOwningTemplateParameter
         */
        public setOwningTemplateParameter(newOwningTemplateParameter : uml.TemplateParameter) {
            this.eSet(uml.UmlPackage.eINSTANCE.getParameterableElement_OwningTemplateParameter(), newOwningTemplateParameter);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getTemplateParameter() : uml.TemplateParameter {
            return <uml.TemplateParameter><any>this.eGet(uml.UmlPackage.eINSTANCE.getParameterableElement_TemplateParameter(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newTemplateParameter
         */
        public setTemplateParameter(newTemplateParameter : uml.TemplateParameter) {
            this.eSet(uml.UmlPackage.eINSTANCE.getParameterableElement_TemplateParameter(), newTemplateParameter);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getEnd() : org.eclipse.emf.common.util.EList<uml.ConnectorEnd> {
            return <org.eclipse.emf.common.util.EList<uml.ConnectorEnd>><any>this.eGet(uml.UmlPackage.eINSTANCE.getConnectableElement_End(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getDeployedElement() : org.eclipse.emf.common.util.EList<uml.PackageableElement> {
            return <org.eclipse.emf.common.util.EList<uml.PackageableElement>><any>this.eGet(uml.UmlPackage.eINSTANCE.getDeploymentTarget_DeployedElement(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getDeployment() : org.eclipse.emf.common.util.EList<uml.Deployment> {
            return <org.eclipse.emf.common.util.EList<uml.Deployment>><any>this.eGet(uml.UmlPackage.eINSTANCE.getDeploymentTarget_Deployment(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getDatatype() : uml.DataType {
            return <uml.DataType><any>this.eGet(uml.UmlPackage.eINSTANCE.getProperty_Datatype(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newDatatype
         */
        public setDatatype(newDatatype : uml.DataType) {
            this.eSet(uml.UmlPackage.eINSTANCE.getProperty_Datatype(), newDatatype);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getInterface() : uml.Interface {
            return <uml.Interface><any>this.eGet(uml.UmlPackage.eINSTANCE.getProperty_Interface(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newInterface
         */
        public setInterface(newInterface : uml.Interface) {
            this.eSet(uml.UmlPackage.eINSTANCE.getProperty_Interface(), newInterface);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {string}
         */
        public getDefault() : string {
            return <string>this.eGet(uml.UmlPackage.eINSTANCE.getProperty_Default(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {string} newDefault
         */
        public setDefault(newDefault : string) {
            this.eSet(uml.UmlPackage.eINSTANCE.getProperty_Default(), newDefault);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        public unsetDefault() {
            this.eUnset(uml.UmlPackage.eINSTANCE.getProperty_Default());
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isSetDefault() : boolean {
            return this.eIsSet(uml.UmlPackage.eINSTANCE.getProperty_Default());
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {uml.AggregationKind}
         */
        public getAggregation() : uml.AggregationKind {
            return <uml.AggregationKind>this.eGet(uml.UmlPackage.eINSTANCE.getProperty_Aggregation(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {uml.AggregationKind} newAggregation
         */
        public setAggregation(newAggregation : uml.AggregationKind) {
            this.eSet(uml.UmlPackage.eINSTANCE.getProperty_Aggregation(), newAggregation);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getAssociationEnd() : uml.Property {
            return <uml.Property><any>this.eGet(uml.UmlPackage.eINSTANCE.getProperty_AssociationEnd(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newAssociationEnd
         */
        public setAssociationEnd(newAssociationEnd : uml.Property) {
            this.eSet(uml.UmlPackage.eINSTANCE.getProperty_AssociationEnd(), newAssociationEnd);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getQualifier() : org.eclipse.emf.common.util.EList<uml.Property> {
            return <org.eclipse.emf.common.util.EList<uml.Property>><any>this.eGet(uml.UmlPackage.eINSTANCE.getProperty_Qualifier(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getClass_() : uml.Class {
            return <uml.Class><any>this.eGet(uml.UmlPackage.eINSTANCE.getProperty_Class(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getDefaultValue() : uml.ValueSpecification {
            return <uml.ValueSpecification><any>this.eGet(uml.UmlPackage.eINSTANCE.getProperty_DefaultValue(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newDefaultValue
         */
        public setDefaultValue(newDefaultValue : uml.ValueSpecification) {
            this.eSet(uml.UmlPackage.eINSTANCE.getProperty_DefaultValue(), newDefaultValue);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isIsComposite() : boolean {
            return <boolean>this.eGet(uml.UmlPackage.eINSTANCE.getProperty_IsComposite(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {boolean} newIsComposite
         */
        public setIsComposite(newIsComposite : boolean) {
            this.eSet(uml.UmlPackage.eINSTANCE.getProperty_IsComposite(), newIsComposite);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isIsDerived() : boolean {
            return <boolean>this.eGet(uml.UmlPackage.eINSTANCE.getProperty_IsDerived(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {boolean} newIsDerived
         */
        public setIsDerived(newIsDerived : boolean) {
            this.eSet(uml.UmlPackage.eINSTANCE.getProperty_IsDerived(), newIsDerived);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isIsDerivedUnion() : boolean {
            return <boolean>this.eGet(uml.UmlPackage.eINSTANCE.getProperty_IsDerivedUnion(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {boolean} newIsDerivedUnion
         */
        public setIsDerivedUnion(newIsDerivedUnion : boolean) {
            this.eSet(uml.UmlPackage.eINSTANCE.getProperty_IsDerivedUnion(), newIsDerivedUnion);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isIsID() : boolean {
            return <boolean>this.eGet(uml.UmlPackage.eINSTANCE.getProperty_IsID(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {boolean} newIsID
         */
        public setIsID(newIsID : boolean) {
            this.eSet(uml.UmlPackage.eINSTANCE.getProperty_IsID(), newIsID);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getOpposite() : uml.Property {
            return <uml.Property><any>this.eGet(uml.UmlPackage.eINSTANCE.getProperty_Opposite(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newOpposite
         */
        public setOpposite(newOpposite : uml.Property) {
            this.eSet(uml.UmlPackage.eINSTANCE.getProperty_Opposite(), newOpposite);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getOwningAssociation() : uml.Association {
            return <uml.Association><any>this.eGet(uml.UmlPackage.eINSTANCE.getProperty_OwningAssociation(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newOwningAssociation
         */
        public setOwningAssociation(newOwningAssociation : uml.Association) {
            this.eSet(uml.UmlPackage.eINSTANCE.getProperty_OwningAssociation(), newOwningAssociation);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getRedefinedProperty() : org.eclipse.emf.common.util.EList<uml.Property> {
            return <org.eclipse.emf.common.util.EList<uml.Property>><any>this.eGet(uml.UmlPackage.eINSTANCE.getProperty_RedefinedProperty(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getSubsettedProperty() : org.eclipse.emf.common.util.EList<uml.Property> {
            return <org.eclipse.emf.common.util.EList<uml.Property>><any>this.eGet(uml.UmlPackage.eINSTANCE.getProperty_SubsettedProperty(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getAssociation() : uml.Association {
            return <uml.Association><any>this.eGet(uml.UmlPackage.eINSTANCE.getProperty_Association(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newAssociation
         */
        public setAssociation(newAssociation : uml.Association) {
            this.eSet(uml.UmlPackage.eINSTANCE.getProperty_Association(), newAssociation);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public subsetting_context_conforms(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.PROPERTY__SUBSETTING_CONTEXT_CONFORMS, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["subsetting_context_conforms", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public derived_union_is_read_only(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.PROPERTY__DERIVED_UNION_IS_READ_ONLY, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["derived_union_is_read_only", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public multiplicity_of_composite(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.PROPERTY__MULTIPLICITY_OF_COMPOSITE, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["multiplicity_of_composite", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public redefined_property_inherited(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.PROPERTY__REDEFINED_PROPERTY_INHERITED, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["redefined_property_inherited", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public subsetting_rules(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.PROPERTY__SUBSETTING_RULES, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["subsetting_rules", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public binding_to_attribute(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.PROPERTY__BINDING_TO_ATTRIBUTE, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["binding_to_attribute", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public derived_union_is_derived(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.PROPERTY__DERIVED_UNION_IS_DERIVED, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["derived_union_is_derived", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public deployment_target(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.PROPERTY__DEPLOYMENT_TARGET, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["deployment_target", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public subsetted_property_names(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.PROPERTY__SUBSETTED_PROPERTY_NAMES, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["subsetted_property_names", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public type_of_opposite_end(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.PROPERTY__TYPE_OF_OPPOSITE_END, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["type_of_opposite_end", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public qualified_is_association_end(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.PROPERTY__QUALIFIED_IS_ASSOCIATION_END, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["qualified_is_association_end", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public getOtherEnd() : uml.Property {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
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
         * @param {boolean} isNavigable
         */
        public setIsNavigable(isNavigable : boolean) {
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
         * @return {boolean}
         */
        public isAttribute() : boolean {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isComposite() : boolean {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isNavigable() : boolean {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public subsettingContext() : org.eclipse.emf.common.util.EList<uml.Type> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getDeployedElements() : org.eclipse.emf.common.util.EList<uml.PackageableElement> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getEnds() : org.eclipse.emf.common.util.EList<uml.ConnectorEnd> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} p
         * @return {boolean}
         */
        public isCompatibleWith(p : uml.ParameterableElement) : boolean {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isTemplateParameter() : boolean {
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
            if(baseClass === "uml.ParameterableElement") {
                switch((derivedFeatureID)) {
                case uml.UmlPackage.PROPERTY__OWNING_TEMPLATE_PARAMETER:
                    return uml.UmlPackage.PARAMETERABLE_ELEMENT__OWNING_TEMPLATE_PARAMETER;
                case uml.UmlPackage.PROPERTY__TEMPLATE_PARAMETER:
                    return uml.UmlPackage.PARAMETERABLE_ELEMENT__TEMPLATE_PARAMETER;
                default:
                    return -1;
                }
            }
            if(baseClass === "uml.ConnectableElement") {
                switch((derivedFeatureID)) {
                case uml.UmlPackage.PROPERTY__END:
                    return uml.UmlPackage.CONNECTABLE_ELEMENT__END;
                default:
                    return -1;
                }
            }
            if(baseClass === "uml.DeploymentTarget") {
                switch((derivedFeatureID)) {
                case uml.UmlPackage.PROPERTY__DEPLOYED_ELEMENT:
                    return uml.UmlPackage.DEPLOYMENT_TARGET__DEPLOYED_ELEMENT;
                case uml.UmlPackage.PROPERTY__DEPLOYMENT:
                    return uml.UmlPackage.DEPLOYMENT_TARGET__DEPLOYMENT;
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
            if(baseClass === "uml.ParameterableElement") {
                switch((baseFeatureID)) {
                case uml.UmlPackage.PARAMETERABLE_ELEMENT__OWNING_TEMPLATE_PARAMETER:
                    return uml.UmlPackage.PROPERTY__OWNING_TEMPLATE_PARAMETER;
                case uml.UmlPackage.PARAMETERABLE_ELEMENT__TEMPLATE_PARAMETER:
                    return uml.UmlPackage.PROPERTY__TEMPLATE_PARAMETER;
                default:
                    return -1;
                }
            }
            if(baseClass === "uml.ConnectableElement") {
                switch((baseFeatureID)) {
                case uml.UmlPackage.CONNECTABLE_ELEMENT__END:
                    return uml.UmlPackage.PROPERTY__END;
                default:
                    return -1;
                }
            }
            if(baseClass === "uml.DeploymentTarget") {
                switch((baseFeatureID)) {
                case uml.UmlPackage.DEPLOYMENT_TARGET__DEPLOYED_ELEMENT:
                    return uml.UmlPackage.PROPERTY__DEPLOYED_ELEMENT;
                case uml.UmlPackage.DEPLOYMENT_TARGET__DEPLOYMENT:
                    return uml.UmlPackage.PROPERTY__DEPLOYMENT;
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
            if(baseClass === "uml.ParameterableElement") {
                switch((baseOperationID)) {
                case uml.UmlPackage.PARAMETERABLE_ELEMENT___IS_COMPATIBLE_WITH__PARAMETERABLEELEMENT:
                    return uml.UmlPackage.PROPERTY___IS_COMPATIBLE_WITH__PARAMETERABLEELEMENT;
                case uml.UmlPackage.PARAMETERABLE_ELEMENT___IS_TEMPLATE_PARAMETER:
                    return uml.UmlPackage.PROPERTY___IS_TEMPLATE_PARAMETER;
                default:
                    return -1;
                }
            }
            if(baseClass === "uml.ConnectableElement") {
                switch((baseOperationID)) {
                case uml.UmlPackage.CONNECTABLE_ELEMENT___GET_ENDS:
                    return uml.UmlPackage.PROPERTY___GET_ENDS;
                default:
                    return -1;
                }
            }
            if(baseClass === "uml.DeploymentTarget") {
                switch((baseOperationID)) {
                case uml.UmlPackage.DEPLOYMENT_TARGET___GET_DEPLOYED_ELEMENTS:
                    return uml.UmlPackage.PROPERTY___GET_DEPLOYED_ELEMENTS;
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
            case uml.UmlPackage.PROPERTY___SUBSETTING_CONTEXT_CONFORMS__DIAGNOSTICCHAIN_MAP:
                return this.subsetting_context_conforms(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.PROPERTY___DERIVED_UNION_IS_READ_ONLY__DIAGNOSTICCHAIN_MAP:
                return this.derived_union_is_read_only(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.PROPERTY___MULTIPLICITY_OF_COMPOSITE__DIAGNOSTICCHAIN_MAP:
                return this.multiplicity_of_composite(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.PROPERTY___REDEFINED_PROPERTY_INHERITED__DIAGNOSTICCHAIN_MAP:
                return this.redefined_property_inherited(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.PROPERTY___SUBSETTING_RULES__DIAGNOSTICCHAIN_MAP:
                return this.subsetting_rules(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.PROPERTY___BINDING_TO_ATTRIBUTE__DIAGNOSTICCHAIN_MAP:
                return this.binding_to_attribute(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.PROPERTY___DERIVED_UNION_IS_DERIVED__DIAGNOSTICCHAIN_MAP:
                return this.derived_union_is_derived(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.PROPERTY___DEPLOYMENT_TARGET__DIAGNOSTICCHAIN_MAP:
                return this.deployment_target(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.PROPERTY___SUBSETTED_PROPERTY_NAMES__DIAGNOSTICCHAIN_MAP:
                return this.subsetted_property_names(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.PROPERTY___TYPE_OF_OPPOSITE_END__DIAGNOSTICCHAIN_MAP:
                return this.type_of_opposite_end(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.PROPERTY___QUALIFIED_IS_ASSOCIATION_END__DIAGNOSTICCHAIN_MAP:
                return this.qualified_is_association_end(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.PROPERTY___GET_OTHER_END:
                return this.getOtherEnd();
            case uml.UmlPackage.PROPERTY___SET_BOOLEAN_DEFAULT_VALUE__BOOLEAN:
                this.setBooleanDefaultValue(<any>__arguments.get(0));
                return null;
            case uml.UmlPackage.PROPERTY___SET_INTEGER_DEFAULT_VALUE__INT:
                this.setIntegerDefaultValue(<any>__arguments.get(0));
                return null;
            case uml.UmlPackage.PROPERTY___SET_IS_NAVIGABLE__BOOLEAN:
                this.setIsNavigable(<any>__arguments.get(0));
                return null;
            case uml.UmlPackage.PROPERTY___SET_NULL_DEFAULT_VALUE:
                this.setNullDefaultValue();
                return null;
            case uml.UmlPackage.PROPERTY___SET_REAL_DEFAULT_VALUE__DOUBLE:
                this.setRealDefaultValue(<any>__arguments.get(0));
                return null;
            case uml.UmlPackage.PROPERTY___SET_STRING_DEFAULT_VALUE__STRING:
                this.setStringDefaultValue(<any>__arguments.get(0));
                return null;
            case uml.UmlPackage.PROPERTY___SET_UNLIMITED_NATURAL_DEFAULT_VALUE__INT:
                this.setUnlimitedNaturalDefaultValue(<any>__arguments.get(0));
                return null;
            case uml.UmlPackage.PROPERTY___IS_ATTRIBUTE:
                return this.isAttribute();
            case uml.UmlPackage.PROPERTY___IS_COMPOSITE:
                return this.isComposite();
            case uml.UmlPackage.PROPERTY___IS_NAVIGABLE:
                return this.isNavigable();
            case uml.UmlPackage.PROPERTY___SUBSETTING_CONTEXT:
                return this.subsettingContext();
            case uml.UmlPackage.PROPERTY___GET_DEPLOYED_ELEMENTS:
                return this.getDeployedElements();
            case uml.UmlPackage.PROPERTY___GET_ENDS:
                return this.getEnds();
            case uml.UmlPackage.PROPERTY___IS_COMPATIBLE_WITH__PARAMETERABLEELEMENT:
                return this.isCompatibleWith(<any>__arguments.get(0));
            case uml.UmlPackage.PROPERTY___IS_TEMPLATE_PARAMETER:
                return this.isTemplateParameter();
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    PropertyImpl["__class"] = "uml.impl.PropertyImpl";
    PropertyImpl["__interfaces"] = ["ecore4m.EModelElement","uml.TypedElement","uml.Feature","org.eclipse.emf.ecore.EObject","uml.NamedElement","uml.StructuralFeature","org.eclipse.emf.common.notify.Notifier","uml.Property","uml.MultiplicityElement","uml.RedefinableElement","uml.ParameterableElement","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","uml.ConnectableElement","uml.DeploymentTarget","org.eclipse.emf.ecore.InternalEObject"];


}

