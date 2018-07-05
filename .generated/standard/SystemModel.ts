/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace standard {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>System Model</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A SystemModel is a stereotyped model that contains a collection of models of the same system. A SystemModel also contains all relationships and constraints between model elements contained in different models.
     * <p>From package StandardProfile (URI {@literal http://www.omg.org/spec/UML/20131001/StandardProfile}).</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link standard.SystemModel#getBase_Model}</li>
     * </ul>
     * 
     * @see standard.StandardPackage#getSystemModel()
     * @model
     * @generated
     * @class
     */
    export interface SystemModel extends org.eclipse.emf.ecore.EObject {
        /**
         * Returns the value of the '<em><b>Base Model</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * <p>From package StandardProfile (URI {@literal http://www.omg.org/spec/UML/20131001/StandardProfile}).</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Base Model</em>' reference.
         * @see #setBase_Model(Model)
         * @see standard.StandardPackage#getSystemModel_Base_Model()
         * @model required="true" ordered="false"
         * @generated
         */
        getBase_Model() : uml.Model;

        /**
         * Sets the value of the '{@link standard.SystemModel#getBase_Model}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Base Model</em>' reference.
         * @see #getBase_Model()
         * @generated
         */
        setBase_Model(value : uml.Model);
    }
}

