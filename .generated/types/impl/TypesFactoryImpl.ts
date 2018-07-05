/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace types.impl {
    /**
     * Creates an instance of the factory.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @generated
     * @class
     * @extends org.eclipse.emf.ecore.impl.EFactoryImpl
     */
    export class TypesFactoryImpl extends org.eclipse.emf.ecore.impl.EFactoryImpl implements types.TypesFactory {
        /**
         * Creates the default factory implementation.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public static init() : types.TypesFactory {
            try {
                let theTypesFactory : types.TypesFactory = <types.TypesFactory><any>org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEFactory(types.TypesPackage.eNS_URI);
                if(theTypesFactory != null) {
                    return theTypesFactory;
                }
            } catch(exception) {
                org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.log(exception);
            };
            return new TypesFactoryImpl();
        }

        public constructor() {
            super();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} eClass
         * @return {*}
         */
        public create(eClass : org.eclipse.emf.ecore.EClass) : org.eclipse.emf.ecore.EObject {
            switch((eClass.getClassifierID())) {
            default:
                throw Object.defineProperty(new Error("The class \'" + eClass.getName() + "\' is not a valid classifier"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
            }
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} eDataType
         * @param {string} initialValue
         * @return {*}
         */
        public createFromString(eDataType : org.eclipse.emf.ecore.EDataType, initialValue : string) : any {
            switch((eDataType.getClassifierID())) {
            case types.TypesPackage.BOOLEAN:
                return this.createBooleanFromString(eDataType, initialValue);
            case types.TypesPackage.INTEGER:
                return this.createIntegerFromString(eDataType, initialValue);
            case types.TypesPackage.REAL:
                return this.createRealFromString(eDataType, initialValue);
            case types.TypesPackage.STRING:
                return this.createStringFromString(eDataType, initialValue);
            case types.TypesPackage.UNLIMITED_NATURAL:
                return this.createUnlimitedNaturalFromString(eDataType, initialValue);
            default:
                throw Object.defineProperty(new Error("The datatype \'" + eDataType.getName() + "\' is not a valid classifier"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
            }
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} eDataType
         * @param {*} instanceValue
         * @return {string}
         */
        public convertToString(eDataType : org.eclipse.emf.ecore.EDataType, instanceValue : any) : string {
            switch((eDataType.getClassifierID())) {
            case types.TypesPackage.BOOLEAN:
                return this.convertBooleanToString(eDataType, instanceValue);
            case types.TypesPackage.INTEGER:
                return this.convertIntegerToString(eDataType, instanceValue);
            case types.TypesPackage.REAL:
                return this.convertRealToString(eDataType, instanceValue);
            case types.TypesPackage.STRING:
                return this.convertStringToString(eDataType, instanceValue);
            case types.TypesPackage.UNLIMITED_NATURAL:
                return this.convertUnlimitedNaturalToString(eDataType, instanceValue);
            default:
                throw Object.defineProperty(new Error("The datatype \'" + eDataType.getName() + "\' is not a valid classifier"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
            }
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} eDataType
         * @param {string} initialValue
         * @return {boolean}
         */
        public createBooleanFromString(eDataType : org.eclipse.emf.ecore.EDataType, initialValue : string) : boolean {
            return <boolean>super.createFromString(eDataType, initialValue);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} eDataType
         * @param {*} instanceValue
         * @return {string}
         */
        public convertBooleanToString(eDataType : org.eclipse.emf.ecore.EDataType, instanceValue : any) : string {
            return super.convertToString(eDataType, instanceValue);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} eDataType
         * @param {string} initialValue
         * @return {number}
         */
        public createIntegerFromString(eDataType : org.eclipse.emf.ecore.EDataType, initialValue : string) : number {
            return <number>super.createFromString(eDataType, initialValue);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} eDataType
         * @param {*} instanceValue
         * @return {string}
         */
        public convertIntegerToString(eDataType : org.eclipse.emf.ecore.EDataType, instanceValue : any) : string {
            return super.convertToString(eDataType, instanceValue);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} eDataType
         * @param {string} initialValue
         * @return {number}
         */
        public createRealFromString(eDataType : org.eclipse.emf.ecore.EDataType, initialValue : string) : number {
            return <number>super.createFromString(eDataType, initialValue);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} eDataType
         * @param {*} instanceValue
         * @return {string}
         */
        public convertRealToString(eDataType : org.eclipse.emf.ecore.EDataType, instanceValue : any) : string {
            return super.convertToString(eDataType, instanceValue);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} eDataType
         * @param {string} initialValue
         * @return {string}
         */
        public createStringFromString(eDataType : org.eclipse.emf.ecore.EDataType, initialValue : string) : string {
            return <string>super.createFromString(eDataType, initialValue);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} eDataType
         * @param {*} instanceValue
         * @return {string}
         */
        public convertStringToString(eDataType : org.eclipse.emf.ecore.EDataType, instanceValue : any) : string {
            return super.convertToString(eDataType, instanceValue);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} eDataType
         * @param {string} initialValue
         * @return {number}
         */
        public createUnlimitedNaturalFromString(eDataType : org.eclipse.emf.ecore.EDataType, initialValue : string) : number {
            return <number>super.createFromString(eDataType, initialValue);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} eDataType
         * @param {*} instanceValue
         * @return {string}
         */
        public convertUnlimitedNaturalToString(eDataType : org.eclipse.emf.ecore.EDataType, instanceValue : any) : string {
            return super.convertToString(eDataType, instanceValue);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getTypesPackage() : types.TypesPackage {
            return <types.TypesPackage><any>this.getEPackage();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @deprecated
         * @generated
         * @return {*}
         */
        public static getPackage() : types.TypesPackage {
            return types.TypesPackage.eINSTANCE;
        }
    }
    TypesFactoryImpl["__class"] = "types.impl.TypesFactoryImpl";
    TypesFactoryImpl["__interfaces"] = ["types.TypesFactory","org.eclipse.emf.ecore.EModelElement","org.eclipse.emf.ecore.EFactory","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject","org.eclipse.emf.ecore.resource.impl.BinaryResourceImpl.DataConverter.Factory"];


}

