/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Remove Variable Value Action</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A RemoveVariableValueAction is a WriteVariableAction that removes values from a Variables.
     * <p>From package UML::Actions.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.RemoveVariableValueAction#isIsRemoveDuplicates}</li>
     * <li>{@link uml.RemoveVariableValueAction#getRemoveAt}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getRemoveVariableValueAction()
     * @model
     * @generated
     * @class
     */
    export interface RemoveVariableValueAction extends uml.WriteVariableAction {
        /**
         * Returns the value of the '<em><b>Is Remove Duplicates</b></em>' attribute.
         * The default value is <code>"false"</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Specifies whether to remove duplicates of the value in nonunique Variables.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {boolean} the value of the '<em>Is Remove Duplicates</em>' attribute.
         * @see #setIsRemoveDuplicates(boolean)
         * @see uml.UmlPackage#getRemoveVariableValueAction_IsRemoveDuplicates()
         * @model default="false" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         */
        isIsRemoveDuplicates() : boolean;

        /**
         * Sets the value of the '{@link uml.RemoveVariableValueAction#isIsRemoveDuplicates}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {boolean} value the new value of the '<em>Is Remove Duplicates</em>' attribute.
         * @see #isIsRemoveDuplicates()
         * @generated
         */
        setIsRemoveDuplicates(value : boolean);

        /**
         * Returns the value of the '<em><b>Remove At</b></em>' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * An InputPin that provides the position of an existing value to remove in ordered, nonunique Variables. The type of the removeAt InputPin is UnlimitedNatural, but the value cannot be zero or unlimited.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Remove At</em>' containment reference.
         * @see #setRemoveAt(InputPin)
         * @see uml.UmlPackage#getRemoveVariableValueAction_RemoveAt()
         * @model containment="true" ordered="false"
         * @generated
         */
        getRemoveAt() : uml.InputPin;

        /**
         * Sets the value of the '{@link uml.RemoveVariableValueAction#getRemoveAt}' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Remove At</em>' containment reference.
         * @see #getRemoveAt()
         * @generated
         */
        setRemoveAt(value : uml.InputPin);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * ReadVariableActions removing a value from ordered, non-unique Variables must have a single removeAt InputPin and no value InputPin, if isRemoveDuplicates is false. The removeAt InputPin must be of type Unlimited Natural with multiplicity 1..1. Otherwise, the Action has a value InputPin and no removeAt InputPin.
         * if  variable.isOrdered and not variable.isUnique and not isRemoveDuplicates then
         * value = null and
         * removeAt <> null and
         * removeAt.type = UnlimitedNatural and
         * removeAt.is(1,1)
         * else
         * removeAt = null and value <> null
         * endif
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        removeAt_and_value(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

