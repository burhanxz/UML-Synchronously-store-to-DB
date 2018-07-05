/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace standard {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Metamodel</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A model that specifies the modeling concepts of some modeling language (e.g., a MOF model). See ?Metaclass?.
     * <p>From package StandardProfile (URI {@literal http://www.omg.org/spec/UML/20131001/StandardProfile}).</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link standard.Metamodel#getBase_Model}</li>
     * </ul>
     * 
     * @see standard.StandardPackage#getMetamodel()
     * @model
     * @generated
     * @class
     */
    export interface Metamodel extends org.eclipse.emf.ecore.EObject {
        /**
         * Returns the value of the '<em><b>Base Model</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * <p>From package StandardProfile (URI {@literal http://www.omg.org/spec/UML/20131001/StandardProfile}).</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Base Model</em>' reference.
         * @see #setBase_Model(Model)
         * @see standard.StandardPackage#getMetamodel_Base_Model()
         * @model required="true" ordered="false"
         * @generated
         */
        getBase_Model() : uml.Model;

        /**
         * Sets the value of the '{@link standard.Metamodel#getBase_Model}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Base Model</em>' reference.
         * @see #getBase_Model()
         * @generated
         */
        setBase_Model(value : uml.Model);
    }
}

