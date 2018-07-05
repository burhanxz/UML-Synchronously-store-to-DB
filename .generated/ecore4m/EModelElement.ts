/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace ecore4m {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>EModel Element</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link ecore4m.EModelElement#getEAnnotations}</li>
     * </ul>
     * 
     * @see ecore.EcorePackage#getEModelElement()
     * @model abstract="true"
     * @generated
     * @class
     */
    export interface EModelElement extends org.eclipse.emf.ecore.EObject {
        /**
         * Returns the value of the '<em><b>EAnnotations</b></em>' containment reference list.
         * The list contents are of type {@link ecore.EAnnotation}.
         * It is bidirectional and its opposite is '{@link ecore.EAnnotation#getEModelElement}'.
         * <!-- begin-user-doc -->
         * <p>
         * If the meaning of the '<em>EAnnotations</em>' containment reference list isn't clear,
         * there really should be more of a description here...
         * </p>
         * <!-- end-user-doc -->
         * @return {*} the value of the '<em>EAnnotations</em>' containment reference list.
         * @see ecore.EcorePackage#getEModelElement_EAnnotations()
         * @see ecore.EAnnotation#getEModelElement
         * @model opposite="eModelElement" containment="true"
         * @generated
         */
        getEAnnotations() : org.eclipse.emf.common.util.EList<org.eclipse.emf.ecore.EAnnotation>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @model
         * @generated
         * @param {string} source
         * @return {*}
         */
        getEAnnotation(source : string) : org.eclipse.emf.ecore.EAnnotation;
    }
}

