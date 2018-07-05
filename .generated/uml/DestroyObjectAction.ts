/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Destroy Object Action</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A DestroyObjectAction is an Action that destroys objects.
     * <p>From package UML::Actions.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.DestroyObjectAction#isIsDestroyLinks}</li>
     * <li>{@link uml.DestroyObjectAction#isIsDestroyOwnedObjects}</li>
     * <li>{@link uml.DestroyObjectAction#getTarget}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getDestroyObjectAction()
     * @model
     * @generated
     * @class
     */
    export interface DestroyObjectAction extends uml.Action {
        /**
         * Returns the value of the '<em><b>Is Destroy Links</b></em>' attribute.
         * The default value is <code>"false"</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Specifies whether links in which the object participates are destroyed along with the object.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {boolean} the value of the '<em>Is Destroy Links</em>' attribute.
         * @see #setIsDestroyLinks(boolean)
         * @see uml.UmlPackage#getDestroyObjectAction_IsDestroyLinks()
         * @model default="false" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         */
        isIsDestroyLinks() : boolean;

        /**
         * Sets the value of the '{@link uml.DestroyObjectAction#isIsDestroyLinks}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {boolean} value the new value of the '<em>Is Destroy Links</em>' attribute.
         * @see #isIsDestroyLinks()
         * @generated
         */
        setIsDestroyLinks(value : boolean);

        /**
         * Returns the value of the '<em><b>Is Destroy Owned Objects</b></em>' attribute.
         * The default value is <code>"false"</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Specifies whether objects owned by the object (via composition) are destroyed along with the object.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {boolean} the value of the '<em>Is Destroy Owned Objects</em>' attribute.
         * @see #setIsDestroyOwnedObjects(boolean)
         * @see uml.UmlPackage#getDestroyObjectAction_IsDestroyOwnedObjects()
         * @model default="false" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         */
        isIsDestroyOwnedObjects() : boolean;

        /**
         * Sets the value of the '{@link uml.DestroyObjectAction#isIsDestroyOwnedObjects}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {boolean} value the new value of the '<em>Is Destroy Owned Objects</em>' attribute.
         * @see #isIsDestroyOwnedObjects()
         * @generated
         */
        setIsDestroyOwnedObjects(value : boolean);

        /**
         * Returns the value of the '<em><b>Target</b></em>' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The InputPin providing the object to be destroyed.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Target</em>' containment reference.
         * @see #setTarget(InputPin)
         * @see uml.UmlPackage#getDestroyObjectAction_Target()
         * @model containment="true" required="true" ordered="false"
         * @generated
         */
        getTarget() : uml.InputPin;

        /**
         * Sets the value of the '{@link uml.DestroyObjectAction#getTarget}' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Target</em>' containment reference.
         * @see #getTarget()
         * @generated
         */
        setTarget(value : uml.InputPin);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The multiplicity of the targe IinputPin is 1..1.
         * target.is(1,1)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        multiplicity(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The target InputPin has no type.
         * target.type= null
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        no_type(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

