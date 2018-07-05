/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Link End Destruction Data</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * LinkEndDestructionData is LinkEndData used to provide values for one end of a link to be destroyed by a DestroyLinkAction.
     * <p>From package UML::Actions.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.LinkEndDestructionData#getDestroyAt}</li>
     * <li>{@link uml.LinkEndDestructionData#isIsDestroyDuplicates}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getLinkEndDestructionData()
     * @model
     * @generated
     * @class
     */
    export interface LinkEndDestructionData extends uml.LinkEndData {
        /**
         * Returns the value of the '<em><b>Destroy At</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The InputPin that provides the position of an existing link to be destroyed in an ordered, nonunique Association end. The type of the destroyAt InputPin is UnlimitedNatural, but the value cannot be zero or unlimited.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Destroy At</em>' reference.
         * @see #setDestroyAt(InputPin)
         * @see uml.UmlPackage#getLinkEndDestructionData_DestroyAt()
         * @model ordered="false"
         * @generated
         */
        getDestroyAt() : uml.InputPin;

        /**
         * Sets the value of the '{@link uml.LinkEndDestructionData#getDestroyAt}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Destroy At</em>' reference.
         * @see #getDestroyAt()
         * @generated
         */
        setDestroyAt(value : uml.InputPin);

        /**
         * Returns the value of the '<em><b>Is Destroy Duplicates</b></em>' attribute.
         * The default value is <code>"false"</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Specifies whether to destroy duplicates of the value in nonunique Association ends.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {boolean} the value of the '<em>Is Destroy Duplicates</em>' attribute.
         * @see #setIsDestroyDuplicates(boolean)
         * @see uml.UmlPackage#getLinkEndDestructionData_IsDestroyDuplicates()
         * @model default="false" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         */
        isIsDestroyDuplicates() : boolean;

        /**
         * Sets the value of the '{@link uml.LinkEndDestructionData#isIsDestroyDuplicates}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {boolean} value the new value of the '<em>Is Destroy Duplicates</em>' attribute.
         * @see #isIsDestroyDuplicates()
         * @generated
         */
        setIsDestroyDuplicates(value : boolean);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * LinkEndDestructionData for ordered, nonunique Association ends must have a single destroyAt InputPin if isDestroyDuplicates is false, which must be of type UnlimitedNatural and have a multiplicity of 1..1. Otherwise, the action has no destroyAt input pin.
         * if  not end.isOrdered or end.isUnique or isDestroyDuplicates
         * then destroyAt = null
         * else
         * destroyAt <> null and
         * destroyAt->forAll(type=UnlimitedNatural and is(1,1))
         * endif
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        destroyAt_pin(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

