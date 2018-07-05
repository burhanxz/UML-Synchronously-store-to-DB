/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace standard {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Service</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A stateless, functional component.
     * <p>From package StandardProfile (URI {@literal http://www.omg.org/spec/UML/20131001/StandardProfile}).</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link standard.Service#getBase_Component}</li>
     * </ul>
     * 
     * @see standard.StandardPackage#getService()
     * @model
     * @generated
     * @class
     */
    export interface Service extends org.eclipse.emf.ecore.EObject {
        /**
         * Returns the value of the '<em><b>Base Component</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * <p>From package StandardProfile (URI {@literal http://www.omg.org/spec/UML/20131001/StandardProfile}).</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Base Component</em>' reference.
         * @see #setBase_Component(Component)
         * @see standard.StandardPackage#getService_Base_Component()
         * @model required="true" ordered="false"
         * @generated
         */
        getBase_Component() : uml.Component;

        /**
         * Sets the value of the '{@link standard.Service#getBase_Component}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Base Component</em>' reference.
         * @see #getBase_Component()
         * @generated
         */
        setBase_Component(value : uml.Component);
    }
}

