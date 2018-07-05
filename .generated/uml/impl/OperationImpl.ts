/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Operation</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.OperationImpl#getOwningTemplateParameter}</li>
     * <li>{@link uml.impl.OperationImpl#getTemplateParameter}</li>
     * <li>{@link uml.impl.OperationImpl#getTemplateBinding}</li>
     * <li>{@link uml.impl.OperationImpl#getOwnedTemplateSignature}</li>
     * <li>{@link uml.impl.OperationImpl#getBodyCondition}</li>
     * <li>{@link uml.impl.OperationImpl#getClass_}</li>
     * <li>{@link uml.impl.OperationImpl#getDatatype}</li>
     * <li>{@link uml.impl.OperationImpl#getInterface}</li>
     * <li>{@link uml.impl.OperationImpl#isIsOrdered}</li>
     * <li>{@link uml.impl.OperationImpl#isIsQuery}</li>
     * <li>{@link uml.impl.OperationImpl#isIsUnique}</li>
     * <li>{@link uml.impl.OperationImpl#getLower}</li>
     * <li>{@link uml.impl.OperationImpl#getPostcondition}</li>
     * <li>{@link uml.impl.OperationImpl#getPrecondition}</li>
     * <li>{@link uml.impl.OperationImpl#getRedefinedOperation}</li>
     * <li>{@link uml.impl.OperationImpl#getType}</li>
     * <li>{@link uml.impl.OperationImpl#getUpper}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.BehavioralFeatureImpl
     * @class
     */
    export class OperationImpl extends uml.impl.BehavioralFeatureImpl implements uml.Operation {
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
            return uml.UmlPackage.eINSTANCE.getOperation();
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
        public getTemplateBinding() : org.eclipse.emf.common.util.EList<uml.TemplateBinding> {
            return <org.eclipse.emf.common.util.EList<uml.TemplateBinding>><any>this.eGet(uml.UmlPackage.eINSTANCE.getTemplateableElement_TemplateBinding(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getOwnedTemplateSignature() : uml.TemplateSignature {
            return <uml.TemplateSignature><any>this.eGet(uml.UmlPackage.eINSTANCE.getTemplateableElement_OwnedTemplateSignature(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newOwnedTemplateSignature
         */
        public setOwnedTemplateSignature(newOwnedTemplateSignature : uml.TemplateSignature) {
            this.eSet(uml.UmlPackage.eINSTANCE.getTemplateableElement_OwnedTemplateSignature(), newOwnedTemplateSignature);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getBodyCondition() : uml.Constraint {
            return <uml.Constraint><any>this.eGet(uml.UmlPackage.eINSTANCE.getOperation_BodyCondition(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newBodyCondition
         */
        public setBodyCondition(newBodyCondition : uml.Constraint) {
            this.eSet(uml.UmlPackage.eINSTANCE.getOperation_BodyCondition(), newBodyCondition);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getClass_() : uml.Class {
            return <uml.Class><any>this.eGet(uml.UmlPackage.eINSTANCE.getOperation_Class(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newClass
         */
        public setClass(newClass : uml.Class) {
            this.eSet(uml.UmlPackage.eINSTANCE.getOperation_Class(), newClass);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getDatatype() : uml.DataType {
            return <uml.DataType><any>this.eGet(uml.UmlPackage.eINSTANCE.getOperation_Datatype(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newDatatype
         */
        public setDatatype(newDatatype : uml.DataType) {
            this.eSet(uml.UmlPackage.eINSTANCE.getOperation_Datatype(), newDatatype);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getInterface() : uml.Interface {
            return <uml.Interface><any>this.eGet(uml.UmlPackage.eINSTANCE.getOperation_Interface(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newInterface
         */
        public setInterface(newInterface : uml.Interface) {
            this.eSet(uml.UmlPackage.eINSTANCE.getOperation_Interface(), newInterface);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isIsOrdered() : boolean {
            return <boolean>this.eGet(uml.UmlPackage.eINSTANCE.getOperation_IsOrdered(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isIsQuery() : boolean {
            return <boolean>this.eGet(uml.UmlPackage.eINSTANCE.getOperation_IsQuery(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {boolean} newIsQuery
         */
        public setIsQuery(newIsQuery : boolean) {
            this.eSet(uml.UmlPackage.eINSTANCE.getOperation_IsQuery(), newIsQuery);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isIsUnique() : boolean {
            return <boolean>this.eGet(uml.UmlPackage.eINSTANCE.getOperation_IsUnique(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {number}
         */
        public getLower() : number {
            return <number>this.eGet(uml.UmlPackage.eINSTANCE.getOperation_Lower(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getPostcondition() : org.eclipse.emf.common.util.EList<uml.Constraint> {
            return <org.eclipse.emf.common.util.EList<uml.Constraint>><any>this.eGet(uml.UmlPackage.eINSTANCE.getOperation_Postcondition(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getPrecondition() : org.eclipse.emf.common.util.EList<uml.Constraint> {
            return <org.eclipse.emf.common.util.EList<uml.Constraint>><any>this.eGet(uml.UmlPackage.eINSTANCE.getOperation_Precondition(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getRedefinedOperation() : org.eclipse.emf.common.util.EList<uml.Operation> {
            return <org.eclipse.emf.common.util.EList<uml.Operation>><any>this.eGet(uml.UmlPackage.eINSTANCE.getOperation_RedefinedOperation(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getType() : uml.Type {
            return <uml.Type><any>this.eGet(uml.UmlPackage.eINSTANCE.getOperation_Type(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {number}
         */
        public getUpper() : number {
            return <number>this.eGet(uml.UmlPackage.eINSTANCE.getOperation_Upper(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public at_most_one_return(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.OPERATION__AT_MOST_ONE_RETURN, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["at_most_one_return", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public only_body_for_query(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.OPERATION__ONLY_BODY_FOR_QUERY, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["only_body_for_query", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public getReturnResult() : uml.Parameter {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {boolean} newIsOrdered
         */
        public setIsOrdered(newIsOrdered : boolean) {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {boolean} newIsUnique
         */
        public setIsUnique(newIsUnique : boolean) {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {number} newLower
         */
        public setLower(newLower : number) {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newType
         */
        public setType(newType : uml.Type) {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {number} newUpper
         */
        public setUpper(newUpper : number) {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isOrdered() : boolean {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isUnique() : boolean {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public returnResult() : org.eclipse.emf.common.util.EList<uml.Parameter> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isTemplate() : boolean {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public parameterableElements() : org.eclipse.emf.common.util.EList<uml.ParameterableElement> {
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
                case uml.UmlPackage.OPERATION__OWNING_TEMPLATE_PARAMETER:
                    return uml.UmlPackage.PARAMETERABLE_ELEMENT__OWNING_TEMPLATE_PARAMETER;
                case uml.UmlPackage.OPERATION__TEMPLATE_PARAMETER:
                    return uml.UmlPackage.PARAMETERABLE_ELEMENT__TEMPLATE_PARAMETER;
                default:
                    return -1;
                }
            }
            if(baseClass === "uml.TemplateableElement") {
                switch((derivedFeatureID)) {
                case uml.UmlPackage.OPERATION__TEMPLATE_BINDING:
                    return uml.UmlPackage.TEMPLATEABLE_ELEMENT__TEMPLATE_BINDING;
                case uml.UmlPackage.OPERATION__OWNED_TEMPLATE_SIGNATURE:
                    return uml.UmlPackage.TEMPLATEABLE_ELEMENT__OWNED_TEMPLATE_SIGNATURE;
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
                    return uml.UmlPackage.OPERATION__OWNING_TEMPLATE_PARAMETER;
                case uml.UmlPackage.PARAMETERABLE_ELEMENT__TEMPLATE_PARAMETER:
                    return uml.UmlPackage.OPERATION__TEMPLATE_PARAMETER;
                default:
                    return -1;
                }
            }
            if(baseClass === "uml.TemplateableElement") {
                switch((baseFeatureID)) {
                case uml.UmlPackage.TEMPLATEABLE_ELEMENT__TEMPLATE_BINDING:
                    return uml.UmlPackage.OPERATION__TEMPLATE_BINDING;
                case uml.UmlPackage.TEMPLATEABLE_ELEMENT__OWNED_TEMPLATE_SIGNATURE:
                    return uml.UmlPackage.OPERATION__OWNED_TEMPLATE_SIGNATURE;
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
                    return uml.UmlPackage.OPERATION___IS_COMPATIBLE_WITH__PARAMETERABLEELEMENT;
                case uml.UmlPackage.PARAMETERABLE_ELEMENT___IS_TEMPLATE_PARAMETER:
                    return uml.UmlPackage.OPERATION___IS_TEMPLATE_PARAMETER;
                default:
                    return -1;
                }
            }
            if(baseClass === "uml.TemplateableElement") {
                switch((baseOperationID)) {
                case uml.UmlPackage.TEMPLATEABLE_ELEMENT___IS_TEMPLATE:
                    return uml.UmlPackage.OPERATION___IS_TEMPLATE;
                case uml.UmlPackage.TEMPLATEABLE_ELEMENT___PARAMETERABLE_ELEMENTS:
                    return uml.UmlPackage.OPERATION___PARAMETERABLE_ELEMENTS;
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
            case uml.UmlPackage.OPERATION___AT_MOST_ONE_RETURN__DIAGNOSTICCHAIN_MAP:
                return this.at_most_one_return(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.OPERATION___ONLY_BODY_FOR_QUERY__DIAGNOSTICCHAIN_MAP:
                return this.only_body_for_query(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.OPERATION___GET_RETURN_RESULT:
                return this.getReturnResult();
            case uml.UmlPackage.OPERATION___SET_IS_ORDERED__BOOLEAN:
                this.setIsOrdered(<any>__arguments.get(0));
                return null;
            case uml.UmlPackage.OPERATION___SET_IS_UNIQUE__BOOLEAN:
                this.setIsUnique(<any>__arguments.get(0));
                return null;
            case uml.UmlPackage.OPERATION___SET_LOWER__INT:
                this.setLower(<any>__arguments.get(0));
                return null;
            case uml.UmlPackage.OPERATION___SET_TYPE__TYPE:
                this.setType(<any>__arguments.get(0));
                return null;
            case uml.UmlPackage.OPERATION___SET_UPPER__INT:
                this.setUpper(<any>__arguments.get(0));
                return null;
            case uml.UmlPackage.OPERATION___IS_ORDERED:
                return this.isOrdered();
            case uml.UmlPackage.OPERATION___IS_UNIQUE:
                return this.isUnique();
            case uml.UmlPackage.OPERATION___RETURN_RESULT:
                return this.returnResult();
            case uml.UmlPackage.OPERATION___IS_TEMPLATE:
                return this.isTemplate();
            case uml.UmlPackage.OPERATION___PARAMETERABLE_ELEMENTS:
                return this.parameterableElements();
            case uml.UmlPackage.OPERATION___IS_COMPATIBLE_WITH__PARAMETERABLEELEMENT:
                return this.isCompatibleWith(<any>__arguments.get(0));
            case uml.UmlPackage.OPERATION___IS_TEMPLATE_PARAMETER:
                return this.isTemplateParameter();
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    OperationImpl["__class"] = "uml.impl.OperationImpl";
    OperationImpl["__interfaces"] = ["ecore4m.EModelElement","uml.Feature","uml.Namespace","org.eclipse.emf.ecore.EObject","uml.BehavioralFeature","uml.NamedElement","uml.Operation","org.eclipse.emf.common.notify.Notifier","uml.RedefinableElement","uml.ParameterableElement","uml.TemplateableElement","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.InternalEObject"];


}

