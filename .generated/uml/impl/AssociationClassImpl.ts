/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Association Class</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.AssociationClassImpl#getRelatedElement}</li>
     * <li>{@link uml.impl.AssociationClassImpl#getEndType}</li>
     * <li>{@link uml.impl.AssociationClassImpl#isIsDerived}</li>
     * <li>{@link uml.impl.AssociationClassImpl#getMemberEnd}</li>
     * <li>{@link uml.impl.AssociationClassImpl#getOwnedEnd}</li>
     * <li>{@link uml.impl.AssociationClassImpl#getNavigableOwnedEnd}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.ClassImpl
     * @class
     */
    export class AssociationClassImpl extends uml.impl.ClassImpl implements uml.AssociationClass {
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
            return uml.UmlPackage.eINSTANCE.getAssociationClass();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getRelatedElement() : org.eclipse.emf.common.util.EList<uml.Element> {
            return <org.eclipse.emf.common.util.EList<uml.Element>><any>this.eGet(uml.UmlPackage.eINSTANCE.getRelationship_RelatedElement(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getEndType() : org.eclipse.emf.common.util.EList<uml.Type> {
            return <org.eclipse.emf.common.util.EList<uml.Type>><any>this.eGet(uml.UmlPackage.eINSTANCE.getAssociation_EndType(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isIsDerived() : boolean {
            return <boolean>this.eGet(uml.UmlPackage.eINSTANCE.getAssociation_IsDerived(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {boolean} newIsDerived
         */
        public setIsDerived(newIsDerived : boolean) {
            this.eSet(uml.UmlPackage.eINSTANCE.getAssociation_IsDerived(), newIsDerived);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getMemberEnd() : org.eclipse.emf.common.util.EList<uml.Property> {
            return <org.eclipse.emf.common.util.EList<uml.Property>><any>this.eGet(uml.UmlPackage.eINSTANCE.getAssociation_MemberEnd(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getOwnedEnd() : org.eclipse.emf.common.util.EList<uml.Property> {
            return <org.eclipse.emf.common.util.EList<uml.Property>><any>this.eGet(uml.UmlPackage.eINSTANCE.getAssociation_OwnedEnd(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getNavigableOwnedEnd() : org.eclipse.emf.common.util.EList<uml.Property> {
            return <org.eclipse.emf.common.util.EList<uml.Property>><any>this.eGet(uml.UmlPackage.eINSTANCE.getAssociation_NavigableOwnedEnd(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public cannot_be_defined(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.ASSOCIATION_CLASS__CANNOT_BE_DEFINED, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["cannot_be_defined", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public disjoint_attributes_ends(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.ASSOCIATION_CLASS__DISJOINT_ATTRIBUTES_ENDS, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["disjoint_attributes_ends", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public specialized_end_number(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.ASSOCIATION__SPECIALIZED_END_NUMBER, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["specialized_end_number", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public specialized_end_types(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.ASSOCIATION__SPECIALIZED_END_TYPES, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["specialized_end_types", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public binary_associations(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.ASSOCIATION__BINARY_ASSOCIATIONS, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["binary_associations", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public association_ends(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.ASSOCIATION__ASSOCIATION_ENDS, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["association_ends", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public ends_must_be_typed(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.ASSOCIATION__ENDS_MUST_BE_TYPED, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["ends_must_be_typed", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
                }
                return false;
            }
            return true;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isBinary() : boolean {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getEndTypes() : org.eclipse.emf.common.util.EList<uml.Type> {
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
            if(baseClass === "uml.Relationship") {
                switch((derivedFeatureID)) {
                case uml.UmlPackage.ASSOCIATION_CLASS__RELATED_ELEMENT:
                    return uml.UmlPackage.RELATIONSHIP__RELATED_ELEMENT;
                default:
                    return -1;
                }
            }
            if(baseClass === "uml.Association") {
                switch((derivedFeatureID)) {
                case uml.UmlPackage.ASSOCIATION_CLASS__END_TYPE:
                    return uml.UmlPackage.ASSOCIATION__END_TYPE;
                case uml.UmlPackage.ASSOCIATION_CLASS__IS_DERIVED:
                    return uml.UmlPackage.ASSOCIATION__IS_DERIVED;
                case uml.UmlPackage.ASSOCIATION_CLASS__MEMBER_END:
                    return uml.UmlPackage.ASSOCIATION__MEMBER_END;
                case uml.UmlPackage.ASSOCIATION_CLASS__OWNED_END:
                    return uml.UmlPackage.ASSOCIATION__OWNED_END;
                case uml.UmlPackage.ASSOCIATION_CLASS__NAVIGABLE_OWNED_END:
                    return uml.UmlPackage.ASSOCIATION__NAVIGABLE_OWNED_END;
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
            if(baseClass === "uml.Relationship") {
                switch((baseFeatureID)) {
                case uml.UmlPackage.RELATIONSHIP__RELATED_ELEMENT:
                    return uml.UmlPackage.ASSOCIATION_CLASS__RELATED_ELEMENT;
                default:
                    return -1;
                }
            }
            if(baseClass === "uml.Association") {
                switch((baseFeatureID)) {
                case uml.UmlPackage.ASSOCIATION__END_TYPE:
                    return uml.UmlPackage.ASSOCIATION_CLASS__END_TYPE;
                case uml.UmlPackage.ASSOCIATION__IS_DERIVED:
                    return uml.UmlPackage.ASSOCIATION_CLASS__IS_DERIVED;
                case uml.UmlPackage.ASSOCIATION__MEMBER_END:
                    return uml.UmlPackage.ASSOCIATION_CLASS__MEMBER_END;
                case uml.UmlPackage.ASSOCIATION__OWNED_END:
                    return uml.UmlPackage.ASSOCIATION_CLASS__OWNED_END;
                case uml.UmlPackage.ASSOCIATION__NAVIGABLE_OWNED_END:
                    return uml.UmlPackage.ASSOCIATION_CLASS__NAVIGABLE_OWNED_END;
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
            if(baseClass === "uml.Relationship") {
                switch((baseOperationID)) {
                default:
                    return -1;
                }
            }
            if(baseClass === "uml.Association") {
                switch((baseOperationID)) {
                case uml.UmlPackage.ASSOCIATION___SPECIALIZED_END_NUMBER__DIAGNOSTICCHAIN_MAP:
                    return uml.UmlPackage.ASSOCIATION_CLASS___SPECIALIZED_END_NUMBER__DIAGNOSTICCHAIN_MAP;
                case uml.UmlPackage.ASSOCIATION___SPECIALIZED_END_TYPES__DIAGNOSTICCHAIN_MAP:
                    return uml.UmlPackage.ASSOCIATION_CLASS___SPECIALIZED_END_TYPES__DIAGNOSTICCHAIN_MAP;
                case uml.UmlPackage.ASSOCIATION___BINARY_ASSOCIATIONS__DIAGNOSTICCHAIN_MAP:
                    return uml.UmlPackage.ASSOCIATION_CLASS___BINARY_ASSOCIATIONS__DIAGNOSTICCHAIN_MAP;
                case uml.UmlPackage.ASSOCIATION___ASSOCIATION_ENDS__DIAGNOSTICCHAIN_MAP:
                    return uml.UmlPackage.ASSOCIATION_CLASS___ASSOCIATION_ENDS__DIAGNOSTICCHAIN_MAP;
                case uml.UmlPackage.ASSOCIATION___ENDS_MUST_BE_TYPED__DIAGNOSTICCHAIN_MAP:
                    return uml.UmlPackage.ASSOCIATION_CLASS___ENDS_MUST_BE_TYPED__DIAGNOSTICCHAIN_MAP;
                case uml.UmlPackage.ASSOCIATION___IS_BINARY:
                    return uml.UmlPackage.ASSOCIATION_CLASS___IS_BINARY;
                case uml.UmlPackage.ASSOCIATION___GET_END_TYPES:
                    return uml.UmlPackage.ASSOCIATION_CLASS___GET_END_TYPES;
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
            case uml.UmlPackage.ASSOCIATION_CLASS___CANNOT_BE_DEFINED__DIAGNOSTICCHAIN_MAP:
                return this.cannot_be_defined(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.ASSOCIATION_CLASS___DISJOINT_ATTRIBUTES_ENDS__DIAGNOSTICCHAIN_MAP:
                return this.disjoint_attributes_ends(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.ASSOCIATION_CLASS___SPECIALIZED_END_NUMBER__DIAGNOSTICCHAIN_MAP:
                return this.specialized_end_number(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.ASSOCIATION_CLASS___SPECIALIZED_END_TYPES__DIAGNOSTICCHAIN_MAP:
                return this.specialized_end_types(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.ASSOCIATION_CLASS___BINARY_ASSOCIATIONS__DIAGNOSTICCHAIN_MAP:
                return this.binary_associations(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.ASSOCIATION_CLASS___ASSOCIATION_ENDS__DIAGNOSTICCHAIN_MAP:
                return this.association_ends(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.ASSOCIATION_CLASS___ENDS_MUST_BE_TYPED__DIAGNOSTICCHAIN_MAP:
                return this.ends_must_be_typed(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.ASSOCIATION_CLASS___IS_BINARY:
                return this.isBinary();
            case uml.UmlPackage.ASSOCIATION_CLASS___GET_END_TYPES:
                return this.getEndTypes();
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    AssociationClassImpl["__class"] = "uml.impl.AssociationClassImpl";
    AssociationClassImpl["__interfaces"] = ["uml.Classifier","ecore4m.EModelElement","uml.Namespace","org.eclipse.emf.ecore.EObject","uml.NamedElement","uml.AssociationClass","org.eclipse.emf.common.notify.Notifier","uml.StructuredClassifier","uml.BehavioredClassifier","uml.Relationship","uml.RedefinableElement","uml.ParameterableElement","uml.PackageableElement","uml.EncapsulatedClassifier","uml.TemplateableElement","uml.Class","org.eclipse.emf.ecore.EModelElement","uml.Type","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","uml.Association","org.eclipse.emf.ecore.InternalEObject"];


}

