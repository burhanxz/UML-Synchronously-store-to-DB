/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace standard {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Framework</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A package that contains model elements that specify a reusable architecture for all or part of a system. Frameworks typically include classes, patterns, or templates. When frameworks are specialized for an application domain they are sometimes referred to as application frameworks.
     * <p>From package StandardProfile (URI {@literal http://www.omg.org/spec/UML/20131001/StandardProfile}).</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link standard.Framework#getBase_Package}</li>
     * </ul>
     * 
     * @see standard.StandardPackage#getFramework()
     * @model
     * @generated
     * @class
     */
    export interface Framework extends org.eclipse.emf.ecore.EObject {
        /**
         * Returns the value of the '<em><b>Base Package</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * <p>From package StandardProfile (URI {@literal http://www.omg.org/spec/UML/20131001/StandardProfile}).</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Base Package</em>' reference.
         * @see #setBase_Package(uml.Package)
         * @see standard.StandardPackage#getFramework_Base_Package()
         * @model required="true" ordered="false"
         * @generated
         */
        getBase_Package() : uml.Package;

        /**
         * Sets the value of the '{@link standard.Framework#getBase_Package}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Base Package</em>' reference.
         * @see #getBase_Package()
         * @generated
         */
        setBase_Package(value : uml.Package);
    }
}

