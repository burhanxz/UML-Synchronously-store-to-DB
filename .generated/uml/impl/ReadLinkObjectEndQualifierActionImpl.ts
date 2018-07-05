/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Read Link Object End Qualifier Action</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.ReadLinkObjectEndQualifierActionImpl#getObject}</li>
     * <li>{@link uml.impl.ReadLinkObjectEndQualifierActionImpl#getQualifier}</li>
     * <li>{@link uml.impl.ReadLinkObjectEndQualifierActionImpl#getResult}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.ActionImpl
     * @class
     */
    export class ReadLinkObjectEndQualifierActionImpl extends uml.impl.ActionImpl implements uml.ReadLinkObjectEndQualifierAction {
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
            return uml.UmlPackage.eINSTANCE.getReadLinkObjectEndQualifierAction();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getObject() : uml.InputPin {
            return <uml.InputPin><any>this.eGet(uml.UmlPackage.eINSTANCE.getReadLinkObjectEndQualifierAction_Object(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newObject
         */
        public setObject(newObject : uml.InputPin) {
            this.eSet(uml.UmlPackage.eINSTANCE.getReadLinkObjectEndQualifierAction_Object(), newObject);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getQualifier() : uml.Property {
            return <uml.Property><any>this.eGet(uml.UmlPackage.eINSTANCE.getReadLinkObjectEndQualifierAction_Qualifier(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newQualifier
         */
        public setQualifier(newQualifier : uml.Property) {
            this.eSet(uml.UmlPackage.eINSTANCE.getReadLinkObjectEndQualifierAction_Qualifier(), newQualifier);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getResult() : uml.OutputPin {
            return <uml.OutputPin><any>this.eGet(uml.UmlPackage.eINSTANCE.getReadLinkObjectEndQualifierAction_Result(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newResult
         */
        public setResult(newResult : uml.OutputPin) {
            this.eSet(uml.UmlPackage.eINSTANCE.getReadLinkObjectEndQualifierAction_Result(), newResult);
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
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.READ_LINK_OBJECT_END_QUALIFIER_ACTION__MULTIPLICITY_OF_OBJECT, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["multiplicity_of_object", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.READ_LINK_OBJECT_END_QUALIFIER_ACTION__TYPE_OF_OBJECT, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["type_of_object", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public multiplicity_of_qualifier(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.READ_LINK_OBJECT_END_QUALIFIER_ACTION__MULTIPLICITY_OF_QUALIFIER, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["multiplicity_of_qualifier", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public ends_of_association(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.READ_LINK_OBJECT_END_QUALIFIER_ACTION__ENDS_OF_ASSOCIATION, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["ends_of_association", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public multiplicity_of_result(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.READ_LINK_OBJECT_END_QUALIFIER_ACTION__MULTIPLICITY_OF_RESULT, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["multiplicity_of_result", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public same_type(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.READ_LINK_OBJECT_END_QUALIFIER_ACTION__SAME_TYPE, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["same_type", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public association_of_association(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.READ_LINK_OBJECT_END_QUALIFIER_ACTION__ASSOCIATION_OF_ASSOCIATION, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["association_of_association", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.READ_LINK_OBJECT_END_QUALIFIER_ACTION__QUALIFIER_ATTRIBUTE, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["qualifier_attribute", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
            case uml.UmlPackage.READ_LINK_OBJECT_END_QUALIFIER_ACTION___MULTIPLICITY_OF_OBJECT__DIAGNOSTICCHAIN_MAP:
                return this.multiplicity_of_object(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.READ_LINK_OBJECT_END_QUALIFIER_ACTION___TYPE_OF_OBJECT__DIAGNOSTICCHAIN_MAP:
                return this.type_of_object(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.READ_LINK_OBJECT_END_QUALIFIER_ACTION___MULTIPLICITY_OF_QUALIFIER__DIAGNOSTICCHAIN_MAP:
                return this.multiplicity_of_qualifier(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.READ_LINK_OBJECT_END_QUALIFIER_ACTION___ENDS_OF_ASSOCIATION__DIAGNOSTICCHAIN_MAP:
                return this.ends_of_association(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.READ_LINK_OBJECT_END_QUALIFIER_ACTION___MULTIPLICITY_OF_RESULT__DIAGNOSTICCHAIN_MAP:
                return this.multiplicity_of_result(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.READ_LINK_OBJECT_END_QUALIFIER_ACTION___SAME_TYPE__DIAGNOSTICCHAIN_MAP:
                return this.same_type(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.READ_LINK_OBJECT_END_QUALIFIER_ACTION___ASSOCIATION_OF_ASSOCIATION__DIAGNOSTICCHAIN_MAP:
                return this.association_of_association(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.READ_LINK_OBJECT_END_QUALIFIER_ACTION___QUALIFIER_ATTRIBUTE__DIAGNOSTICCHAIN_MAP:
                return this.qualifier_attribute(<any>__arguments.get(0), <any>__arguments.get(1));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    ReadLinkObjectEndQualifierActionImpl["__class"] = "uml.impl.ReadLinkObjectEndQualifierActionImpl";
    ReadLinkObjectEndQualifierActionImpl["__interfaces"] = ["ecore4m.EModelElement","org.eclipse.emf.ecore.EObject","uml.NamedElement","uml.ActivityContent","org.eclipse.emf.common.notify.Notifier","uml.ReadLinkObjectEndQualifierAction","uml.ExecutableNode","uml.RedefinableElement","uml.Action","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","uml.ActivityNode","org.eclipse.emf.ecore.InternalEObject"];


}

