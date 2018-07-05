/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Link End Creation Data</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * LinkEndCreationData is LinkEndData used to provide values for one end of a link to be created by a CreateLinkAction.
     * <p>From package UML::Actions.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.LinkEndCreationData#getInsertAt}</li>
     * <li>{@link uml.LinkEndCreationData#isIsReplaceAll}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getLinkEndCreationData()
     * @model
     * @generated
     * @class
     */
    export interface LinkEndCreationData extends uml.LinkEndData {
        /**
         * Returns the value of the '<em><b>Insert At</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * For ordered Association ends, the InputPin that provides the position where the new link should be inserted or where an existing link should be moved to. The type of the insertAt InputPin is UnlimitedNatural, but the input cannot be zero. It is omitted for Association ends that are not ordered.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Insert At</em>' reference.
         * @see #setInsertAt(InputPin)
         * @see uml.UmlPackage#getLinkEndCreationData_InsertAt()
         * @model ordered="false"
         * @generated
         */
        getInsertAt() : uml.InputPin;

        /**
         * Sets the value of the '{@link uml.LinkEndCreationData#getInsertAt}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Insert At</em>' reference.
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
         * Specifies whether the existing links emanating from the object on this end should be destroyed before creating a new link.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {boolean} the value of the '<em>Is Replace All</em>' attribute.
         * @see #setIsReplaceAll(boolean)
         * @see uml.UmlPackage#getLinkEndCreationData_IsReplaceAll()
         * @model default="false" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         */
        isIsReplaceAll() : boolean;

        /**
         * Sets the value of the '{@link uml.LinkEndCreationData#isIsReplaceAll}' attribute.
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
         * LinkEndCreationData for ordered Association ends must have a single insertAt InputPin for the insertion point with type UnlimitedNatural and multiplicity of 1..1, if isReplaceAll=false, and must have no InputPin for the insertion point when the association ends are unordered.
         * if  not end.isOrdered
         * then insertAt = null
         * else
         * not isReplaceAll=false implies
         * insertAt <> null and insertAt->forAll(type=UnlimitedNatural and is(1,1))
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

