/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml {
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
     * <!-- begin-model-doc -->
     * OMG SysML V1.1 formal/2008-11-02
     * Trace instead of Abstraction in SysML specifications.
     * <!-- end-model-doc -->
     * @see sysml.SysmlFactory
     * @model kind="package"
     * @generated
     * @class
     */
    export interface SysmlPackage extends org.eclipse.emf.ecore.EPackage {
        /**
         * Returns the meta object for data type '{@link string}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for data type '<em>Dummy</em>'.
         * @see java.lang.String
         * @model instanceClass="java.lang.String"
         * @generated
         */
        getDummy() : org.eclipse.emf.ecore.EDataType;

        /**
         * Returns the factory that creates the instances of the model.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the factory that creates the instances of the model.
         * @generated
         */
        getSysmlFactory() : sysml.SysmlFactory;
    }

    export namespace SysmlPackage {

        /**
         * The package name.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        export let eNAME : string = "sysml";

        /**
         * The package namespace URI.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        export let eNS_URI : string = "http://www.eclipse.org/papyrus/0.7.0/SysML";

        /**
         * The package namespace name.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        export let eNS_PREFIX : string = "sysml";

        /**
         * The singleton instance of the package.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        export let eINSTANCE : SysmlPackage = sysml.impl.SysmlPackageImpl.init();

        /**
         * The meta object id for the '<em>Dummy</em>' data type.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see java.lang.String
         * @see sysml.impl.SysmlPackageImpl#getDummy()
         * @generated
         */
        export let DUMMY : number = 0;
    }


    export namespace SysmlPackage {

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
             * The meta object literal for the '<em>Dummy</em>' data type.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see java.lang.String
             * @see sysml.impl.SysmlPackageImpl#getDummy()
             * @generated
             */
            export let DUMMY : org.eclipse.emf.ecore.EDataType = sysml.SysmlPackage.eINSTANCE.getDummy();
        }

    }

}

