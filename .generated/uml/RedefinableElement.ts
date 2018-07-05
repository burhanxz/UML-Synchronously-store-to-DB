/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Redefinable Element</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A RedefinableElement is an element that, when defined in the context of a Classifier, can be redefined more specifically or differently in the context of another Classifier that specializes (directly or indirectly) the context Classifier.
     * <p>From package UML::Classification.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.RedefinableElement#isIsLeaf}</li>
     * <li>{@link uml.RedefinableElement#getRedefinedElement}</li>
     * <li>{@link uml.RedefinableElement#getRedefinitionContext}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getRedefinableElement()
     * @model abstract="true"
     * @generated
     * @class
     */
    export interface RedefinableElement extends uml.NamedElement {
        /**
         * Returns the value of the '<em><b>Is Leaf</b></em>' attribute.
         * The default value is <code>"false"</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Indicates whether it is possible to further redefine a RedefinableElement. If the value is true, then it is not possible to further redefine the RedefinableElement.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {boolean} the value of the '<em>Is Leaf</em>' attribute.
         * @see #setIsLeaf(boolean)
         * @see uml.UmlPackage#getRedefinableElement_IsLeaf()
         * @model default="false" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         */
        isIsLeaf() : boolean;

        /**
         * Sets the value of the '{@link uml.RedefinableElement#isIsLeaf}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {boolean} value the new value of the '<em>Is Leaf</em>' attribute.
         * @see #isIsLeaf()
         * @generated
         */
        setIsLeaf(value : boolean);

        /**
         * Returns the value of the '<em><b>Redefined Element</b></em>' reference list.
         * The list contents are of type {@link uml.RedefinableElement}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The RedefinableElement that is being redefined by this element.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Redefined Element</em>' reference list.
         * @see uml.UmlPackage#getRedefinableElement_RedefinedElement()
         * @model transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getRedefinedElement() : org.eclipse.emf.common.util.EList<RedefinableElement>;

        /**
         * Returns the value of the '<em><b>Redefinition Context</b></em>' reference list.
         * The list contents are of type {@link uml.Classifier}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The contexts that this element may be redefined from.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Redefinition Context</em>' reference list.
         * @see uml.UmlPackage#getRedefinableElement_RedefinitionContext()
         * @model transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getRedefinitionContext() : org.eclipse.emf.common.util.EList<uml.Classifier>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A redefining element must be consistent with each redefined element.
         * redefinedElement->forAll(re | re.isConsistentWith(self))
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        redefinition_consistent(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A RedefinableElement can only redefine non-leaf RedefinableElements.
         * redefinedElement->forAll(re | not re.isLeaf)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        non_leaf_redefinition(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * At least one of the redefinition contexts of the redefining element must be a specialization of at least one of the redefinition contexts for each redefined element.
         * redefinedElement->forAll(re | self.isRedefinitionContextValid(re))
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        redefinition_context_valid(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The query isConsistentWith() specifies, for any two RedefinableElements in a context in which redefinition is possible, whether redefinition would be logically consistent. By default, this is false; this operation must be overridden for subclasses of RedefinableElement to define the consistency conditions.
         * result = (false)
         * redefiningElement.isRedefinitionContextValid(self)
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @model dataType="types.Boolean" required="true" ordered="false" redefiningElementRequired="true" redefiningElementOrdered="false"
         * @generated
         * @param {*} redefiningElement
         * @return {boolean}
         */
        isConsistentWith(redefiningElement : RedefinableElement) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The query isRedefinitionContextValid() specifies whether the redefinition contexts of this RedefinableElement are properly related to the redefinition contexts of the specified RedefinableElement to allow this element to redefine the other. By default at least one of the redefinition contexts of this element must be a specialization of at least one of the redefinition contexts of the specified element.
         * result = (redefinitionContext->exists(c | c.allParents()->includesAll(redefinedElement.redefinitionContext)))
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @model dataType="types.Boolean" required="true" ordered="false" redefinedElementRequired="true" redefinedElementOrdered="false"
         * @generated
         * @param {*} redefinedElement
         * @return {boolean}
         */
        isRedefinitionContextValid(redefinedElement : RedefinableElement) : boolean;
    }
}

