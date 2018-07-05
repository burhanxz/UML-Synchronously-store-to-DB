/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace types {
    /**
     * <!-- begin-user-doc -->
     * The <b>Package</b> for the model.
     * It contains accessors for the meta objects to represent
     * <ul>
     * <li>each class,</li>
     * <li>each feature of each class,</li>
     * <li>each operation of each class,</li>
     * <li>each enum,</li>
     * <li>and each data type</li>
     * </ul>
     * <!-- end-user-doc -->
     * @see types.TypesFactory
     * @model kind="package"
     * annotation="http://www.eclipse.org/uml2/2.0.0/UML originalName='Types'"
     * @generated
     * @class
     */
    export interface TypesPackage extends org.eclipse.emf.ecore.EPackage {
        /**
         * Returns the meta object for data type '<em>Boolean</em>'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for data type '<em>Boolean</em>'.
         * @model instanceClass="boolean"
         * @generated
         */
        getBoolean() : org.eclipse.emf.ecore.EDataType;

        /**
         * Returns the meta object for data type '<em>Integer</em>'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for data type '<em>Integer</em>'.
         * @model instanceClass="int"
         * @generated
         */
        getInteger() : org.eclipse.emf.ecore.EDataType;

        /**
         * Returns the meta object for data type '<em>Real</em>'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for data type '<em>Real</em>'.
         * @model instanceClass="double"
         * @generated
         */
        getReal() : org.eclipse.emf.ecore.EDataType;

        /**
         * Returns the meta object for data type '{@link string}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for data type '<em>String</em>'.
         * @see java.lang.String
         * @model instanceClass="java.lang.String"
         * @generated
         */
        getString() : org.eclipse.emf.ecore.EDataType;

        /**
         * Returns the meta object for data type '<em>Unlimited Natural</em>'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for data type '<em>Unlimited Natural</em>'.
         * @model instanceClass="int"
         * @generated
         */
        getUnlimitedNatural() : org.eclipse.emf.ecore.EDataType;

        /**
         * Returns the factory that creates the instances of the model.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the factory that creates the instances of the model.
         * @generated
         */
        getTypesFactory() : types.TypesFactory;
    }

    export namespace TypesPackage {

        /**
         * The package name.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        export let eNAME : string = "types";

        /**
         * The package namespace URI.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        export let eNS_URI : string = "http://www.eclipse.org/uml2/5.0.0/Types";

        /**
         * The package namespace name.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        export let eNS_PREFIX : string = "types";

        /**
         * The singleton instance of the package.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        export let eINSTANCE : TypesPackage = types.impl.TypesPackageImpl.init();

        /**
         * The meta object id for the '<em>Boolean</em>' data type.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see types.impl.TypesPackageImpl#getBoolean()
         * @generated
         */
        export let BOOLEAN : number = 0;

        /**
         * The meta object id for the '<em>Integer</em>' data type.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see types.impl.TypesPackageImpl#getInteger()
         * @generated
         */
        export let INTEGER : number = 1;

        /**
         * The meta object id for the '<em>Real</em>' data type.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see types.impl.TypesPackageImpl#getReal()
         * @generated
         */
        export let REAL : number = 2;

        /**
         * The meta object id for the '<em>String</em>' data type.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see java.lang.String
         * @see types.impl.TypesPackageImpl#getString()
         * @generated
         */
        export let STRING : number = 3;

        /**
         * The meta object id for the '<em>Unlimited Natural</em>' data type.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see types.impl.TypesPackageImpl#getUnlimitedNatural()
         * @generated
         */
        export let UNLIMITED_NATURAL : number = 4;
    }


    export namespace TypesPackage {

        /**
         * <!-- begin-user-doc -->
         * Defines literals for the meta objects that represent
         * <ul>
         * <li>each class,</li>
         * <li>each feature of each class,</li>
         * <li>each operation of each class,</li>
         * <li>each enum,</li>
         * <li>and each data type</li>
         * </ul>
         * <!-- end-user-doc -->
         * @generated
         * @class
         */
        export interface Literals {        }

        export namespace Literals {

            /**
             * The meta object literal for the '<em>Boolean</em>' data type.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see types.impl.TypesPackageImpl#getBoolean()
             * @generated
             */
            export let BOOLEAN : org.eclipse.emf.ecore.EDataType = types.TypesPackage.eINSTANCE.getBoolean();

            /**
             * The meta object literal for the '<em>Integer</em>' data type.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see types.impl.TypesPackageImpl#getInteger()
             * @generated
             */
            export let INTEGER : org.eclipse.emf.ecore.EDataType = types.TypesPackage.eINSTANCE.getInteger();

            /**
             * The meta object literal for the '<em>Real</em>' data type.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see types.impl.TypesPackageImpl#getReal()
             * @generated
             */
            export let REAL : org.eclipse.emf.ecore.EDataType = types.TypesPackage.eINSTANCE.getReal();

            /**
             * The meta object literal for the '<em>String</em>' data type.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see java.lang.String
             * @see types.impl.TypesPackageImpl#getString()
             * @generated
             */
            export let STRING : org.eclipse.emf.ecore.EDataType = types.TypesPackage.eINSTANCE.getString();

            /**
             * The meta object literal for the '<em>Unlimited Natural</em>' data type.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see types.impl.TypesPackageImpl#getUnlimitedNatural()
             * @generated
             */
            export let UNLIMITED_NATURAL : org.eclipse.emf.ecore.EDataType = types.TypesPackage.eINSTANCE.getUnlimitedNatural();
        }

    }

}

