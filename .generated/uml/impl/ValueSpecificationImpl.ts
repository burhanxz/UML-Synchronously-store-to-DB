/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Value Specification</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.ValueSpecificationImpl#getType}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.PackageableElementImpl
     * @class
     */
    export abstract class ValueSpecificationImpl extends uml.impl.PackageableElementImpl implements uml.ValueSpecification {
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
            return uml.UmlPackage.eINSTANCE.getValueSpecification();
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
        public booleanValue() : boolean {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {number}
         */
        public integerValue() : number {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isComputable() : boolean {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isNull() : boolean {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {number}
         */
        public realValue() : number {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {string}
         */
        public stringValue() : string {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {number}
         */
        public unlimitedValue() : number {
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
                case uml.UmlPackage.VALUE_SPECIFICATION__TYPE:
                    return uml.UmlPackage.TYPED_ELEMENT__TYPE;
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
                    return uml.UmlPackage.VALUE_SPECIFICATION__TYPE;
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
            case uml.UmlPackage.VALUE_SPECIFICATION___BOOLEAN_VALUE:
                return this.booleanValue();
            case uml.UmlPackage.VALUE_SPECIFICATION___INTEGER_VALUE:
                return this.integerValue();
            case uml.UmlPackage.VALUE_SPECIFICATION___IS_COMPUTABLE:
                return this.isComputable();
            case uml.UmlPackage.VALUE_SPECIFICATION___IS_NULL:
                return this.isNull();
            case uml.UmlPackage.VALUE_SPECIFICATION___REAL_VALUE:
                return this.realValue();
            case uml.UmlPackage.VALUE_SPECIFICATION___STRING_VALUE:
                return this.stringValue();
            case uml.UmlPackage.VALUE_SPECIFICATION___UNLIMITED_VALUE:
                return this.unlimitedValue();
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    ValueSpecificationImpl["__class"] = "uml.impl.ValueSpecificationImpl";
    ValueSpecificationImpl["__interfaces"] = ["uml.ValueSpecification","ecore4m.EModelElement","uml.ParameterableElement","uml.PackageableElement","uml.TypedElement","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

