/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Add Structural Feature Value Action</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * An AddStructuralFeatureValueAction is a WriteStructuralFeatureAction for adding values to a StructuralFeature.
     * <p>From package UML::Actions.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.AddStructuralFeatureValueAction#getInsertAt}</li>
     * <li>{@link uml.AddStructuralFeatureValueAction#isIsReplaceAll}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getAddStructuralFeatureValueAction()
     * @model
     * @generated
     * @class
     */
    export interface AddStructuralFeatureValueAction extends uml.WriteStructuralFeatureAction {
        /**
         * Returns the value of the '<em><b>Insert At</b></em>' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The InputPin that gives the position at which to insert the value in an ordered StructuralFeature. The type of the insertAt InputPin is UnlimitedNatural, but the value cannot be zero. It is omitted for unordered StructuralFeatures.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Insert At</em>' containment reference.
         * @see #setInsertAt(InputPin)
         * @see uml.UmlPackage#getAddStructuralFeatureValueAction_InsertAt()
         * @model containment="true" ordered="false"
         * @generated
         */
        getInsertAt() : uml.InputPin;

        /**
         * Sets the value of the '{@link uml.AddStructuralFeatureValueAction#getInsertAt}' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Insert At</em>' containment reference.
         * @see #getInsertAt()
         * @generated
         */
        setInsertAt(value : uml.InputPin);

        /**
         * Returns the value of the '<em><b>Is Replace All</b></em>' attribute.
         * The default value is <code>"false"</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Specifies whether existing values of the StructuralFeature should be removed before adding the new value.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {boolean} the value of the '<em>Is Replace All</em>' attribute.
         * @see #setIsReplaceAll(boolean)
         * @see uml.UmlPackage#getAddStructuralFeatureValueAction_IsReplaceAll()
         * @model default="false" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         */
        isIsReplaceAll() : boolean;

        /**
         * Sets the value of the '{@link uml.AddStructuralFeatureValueAction#isIsReplaceAll}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {boolean} value the new value of the '<em>Is Replace All</em>' attribute.
         * @see #isIsReplaceAll()
         * @generated
         */
        setIsReplaceAll(value : boolean);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A value InputPin is required.
         * value<>null
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        required_value(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * AddStructuralFeatureActions adding a value to ordered StructuralFeatures must have a single InputPin for the insertion point with type UnlimitedNatural and multiplicity of 1..1 if isReplaceAll=false, and must have no Input Pin for the insertion point when the StructuralFeature is unordered.
         * if not structuralFeature.isOrdered then insertAt = null
         * else
         * not isReplaceAll implies
         * insertAt<>null and
         * insertAt->forAll(type=UnlimitedNatural and is(1,1.oclAsType(UnlimitedNatural)))
         * endif
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        insertAt_pin(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

