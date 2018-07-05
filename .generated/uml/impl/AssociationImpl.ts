/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Association</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.AssociationImpl#getRelatedElement}</li>
     * <li>{@link uml.impl.AssociationImpl#getEndType}</li>
     * <li>{@link uml.impl.AssociationImpl#isIsDerived}</li>
     * <li>{@link uml.impl.AssociationImpl#getMemberEnd}</li>
     * <li>{@link uml.impl.AssociationImpl#getOwnedEnd}</li>
     * <li>{@link uml.impl.AssociationImpl#getNavigableOwnedEnd}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.ClassifierImpl
     * @class
     */
    export class AssociationImpl extends uml.impl.ClassifierImpl implements uml.Association {
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
            return uml.UmlPackage.eINSTANCE.getAssociation();
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
                case uml.UmlPackage.ASSOCIATION__RELATED_ELEMENT:
                    return uml.UmlPackage.RELATIONSHIP__RELATED_ELEMENT;
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
                    return uml.UmlPackage.ASSOCIATION__RELATED_ELEMENT;
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
         * @param {number} operationID
         * @param {*} arguments
         * @return {*}
         */
        public eInvoke(operationID : number, __arguments : org.eclipse.emf.common.util.EList<any>) : any {
            switch((operationID)) {
            case uml.UmlPackage.ASSOCIATION___SPECIALIZED_END_NUMBER__DIAGNOSTICCHAIN_MAP:
                return this.specialized_end_number(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.ASSOCIATION___SPECIALIZED_END_TYPES__DIAGNOSTICCHAIN_MAP:
                return this.specialized_end_types(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.ASSOCIATION___BINARY_ASSOCIATIONS__DIAGNOSTICCHAIN_MAP:
                return this.binary_associations(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.ASSOCIATION___ASSOCIATION_ENDS__DIAGNOSTICCHAIN_MAP:
                return this.association_ends(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.ASSOCIATION___ENDS_MUST_BE_TYPED__DIAGNOSTICCHAIN_MAP:
                return this.ends_must_be_typed(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.ASSOCIATION___IS_BINARY:
                return this.isBinary();
            case uml.UmlPackage.ASSOCIATION___GET_END_TYPES:
                return this.getEndTypes();
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    AssociationImpl["__class"] = "uml.impl.AssociationImpl";
    AssociationImpl["__interfaces"] = ["uml.Classifier","ecore4m.EModelElement","uml.Namespace","org.eclipse.emf.ecore.EObject","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","uml.Relationship","uml.RedefinableElement","uml.ParameterableElement","uml.PackageableElement","uml.TemplateableElement","org.eclipse.emf.ecore.EModelElement","uml.Type","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","uml.Association","org.eclipse.emf.ecore.InternalEObject"];


}

