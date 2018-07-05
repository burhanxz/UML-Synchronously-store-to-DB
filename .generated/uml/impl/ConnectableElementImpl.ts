/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Connectable Element</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.ConnectableElementImpl#getOwningTemplateParameter}</li>
     * <li>{@link uml.impl.ConnectableElementImpl#getTemplateParameter}</li>
     * <li>{@link uml.impl.ConnectableElementImpl#getEnd}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.TypedElementImpl
     * @class
     */
    export abstract class ConnectableElementImpl extends uml.impl.TypedElementImpl implements uml.ConnectableElement {
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
            return uml.UmlPackage.eINSTANCE.getConnectableElement();
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
                case uml.UmlPackage.CONNECTABLE_ELEMENT__OWNING_TEMPLATE_PARAMETER:
                    return uml.UmlPackage.PARAMETERABLE_ELEMENT__OWNING_TEMPLATE_PARAMETER;
                case uml.UmlPackage.CONNECTABLE_ELEMENT__TEMPLATE_PARAMETER:
                    return uml.UmlPackage.PARAMETERABLE_ELEMENT__TEMPLATE_PARAMETER;
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
                    return uml.UmlPackage.CONNECTABLE_ELEMENT__OWNING_TEMPLATE_PARAMETER;
                case uml.UmlPackage.PARAMETERABLE_ELEMENT__TEMPLATE_PARAMETER:
                    return uml.UmlPackage.CONNECTABLE_ELEMENT__TEMPLATE_PARAMETER;
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
                    return uml.UmlPackage.CONNECTABLE_ELEMENT___IS_COMPATIBLE_WITH__PARAMETERABLEELEMENT;
                case uml.UmlPackage.PARAMETERABLE_ELEMENT___IS_TEMPLATE_PARAMETER:
                    return uml.UmlPackage.CONNECTABLE_ELEMENT___IS_TEMPLATE_PARAMETER;
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
            case uml.UmlPackage.CONNECTABLE_ELEMENT___GET_ENDS:
                return this.getEnds();
            case uml.UmlPackage.CONNECTABLE_ELEMENT___IS_COMPATIBLE_WITH__PARAMETERABLEELEMENT:
                return this.isCompatibleWith(<any>__arguments.get(0));
            case uml.UmlPackage.CONNECTABLE_ELEMENT___IS_TEMPLATE_PARAMETER:
                return this.isTemplateParameter();
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    ConnectableElementImpl["__class"] = "uml.impl.ConnectableElementImpl";
    ConnectableElementImpl["__interfaces"] = ["ecore4m.EModelElement","uml.ParameterableElement","uml.TypedElement","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","uml.ConnectableElement","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

