/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Operation</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * An Operation is a BehavioralFeature of a Classifier that specifies the name, type, parameters, and constraints for invoking an associated Behavior. An Operation may invoke both the execution of method behaviors as well as other behavioral responses. Operation specializes TemplateableElement in order to support specification of template operations and bound operations. Operation specializes ParameterableElement to specify that an operation can be exposed as a formal template parameter, and provided as an actual parameter in a binding of a template.
     * <p>From package UML::Classification.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.Operation#getBodyCondition}</li>
     * <li>{@link uml.Operation#getClass_}</li>
     * <li>{@link uml.Operation#getDatatype}</li>
     * <li>{@link uml.Operation#getInterface}</li>
     * <li>{@link uml.Operation#isIsOrdered}</li>
     * <li>{@link uml.Operation#isIsQuery}</li>
     * <li>{@link uml.Operation#isIsUnique}</li>
     * <li>{@link uml.Operation#getLower}</li>
     * <li>{@link uml.Operation#getPostcondition}</li>
     * <li>{@link uml.Operation#getPrecondition}</li>
     * <li>{@link uml.Operation#getRedefinedOperation}</li>
     * <li>{@link uml.Operation#getType}</li>
     * <li>{@link uml.Operation#getUpper}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getOperation()
     * @model
     * @generated
     * @class
     */
    export interface Operation extends uml.BehavioralFeature, uml.ParameterableElement, uml.TemplateableElement {
        /**
         * Returns the value of the '<em><b>Body Condition</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * An optional Constraint on the result values of an invocation of this Operation.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Body Condition</em>' reference.
         * @see #setBodyCondition(Constraint)
         * @see uml.UmlPackage#getOperation_BodyCondition()
         * @model ordered="false"
         * @generated
         */
        getBodyCondition() : uml.Constraint;

        /**
         * Sets the value of the '{@link uml.Operation#getBodyCondition}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Body Condition</em>' reference.
         * @see #getBodyCondition()
         * @generated
         */
        setBodyCondition(value : uml.Constraint);

        /**
         * Returns the value of the '<em><b>Class</b></em>' container reference.
         * It is bidirectional and its opposite is '{@link uml.Class#getOwnedOperation}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Class that owns this operation, if any.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Class</em>' container reference.
         * @see #setClass(uml.Class)
         * @see uml.UmlPackage#getOperation_Class()
         * @see uml.Class#getOwnedOperation
         * @model opposite="ownedOperation" transient="false" ordered="false"
         * @generated
         */
        getClass_() : uml.Class;

        /**
         * Sets the value of the '{@link uml.Operation#getClass_}' container reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Class</em>' container reference.
         * @see #getClass_()
         * @generated
         */
        setClass(value : uml.Class);

        /**
         * Returns the value of the '<em><b>Datatype</b></em>' container reference.
         * It is bidirectional and its opposite is '{@link uml.DataType#getOwnedOperation}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The DataType that owns this Operation, if any.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Datatype</em>' container reference.
         * @see #setDatatype(DataType)
         * @see uml.UmlPackage#getOperation_Datatype()
         * @see uml.DataType#getOwnedOperation
         * @model opposite="ownedOperation" transient="false" ordered="false"
         * @generated
         */
        getDatatype() : uml.DataType;

        /**
         * Sets the value of the '{@link uml.Operation#getDatatype}' container reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Datatype</em>' container reference.
         * @see #getDatatype()
         * @generated
         */
        setDatatype(value : uml.DataType);

        /**
         * Returns the value of the '<em><b>Interface</b></em>' container reference.
         * It is bidirectional and its opposite is '{@link uml.Interface#getOwnedOperation}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Interface that owns this Operation, if any.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Interface</em>' container reference.
         * @see #setInterface(Interface)
         * @see uml.UmlPackage#getOperation_Interface()
         * @see uml.Interface#getOwnedOperation
         * @model opposite="ownedOperation" transient="false" ordered="false"
         * @generated
         */
        getInterface() : uml.Interface;

        /**
         * Sets the value of the '{@link uml.Operation#getInterface}' container reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Interface</em>' container reference.
         * @see #getInterface()
         * @generated
         */
        setInterface(value : uml.Interface);

        /**
         * Returns the value of the '<em><b>Is Ordered</b></em>' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Specifies whether the return parameter is ordered or not, if present.  This information is derived from the return result for this Operation.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {boolean} the value of the '<em>Is Ordered</em>' attribute.
         * @see uml.UmlPackage#getOperation_IsOrdered()
         * @model dataType="types.Boolean" required="true" transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        isIsOrdered() : boolean;

        /**
         * Returns the value of the '<em><b>Is Query</b></em>' attribute.
         * The default value is <code>"false"</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Specifies whether an execution of the BehavioralFeature leaves the state of the system unchanged (isQuery=true) or whether side effects may occur (isQuery=false).
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {boolean} the value of the '<em>Is Query</em>' attribute.
         * @see #setIsQuery(boolean)
         * @see uml.UmlPackage#getOperation_IsQuery()
         * @model default="false" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         */
        isIsQuery() : boolean;

        /**
         * Sets the value of the '{@link uml.Operation#isIsQuery}' attribute.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {boolean} value the new value of the '<em>Is Query</em>' attribute.
         * @see #isIsQuery()
         * @generated
         */
        setIsQuery(value : boolean);

        /**
         * Returns the value of the '<em><b>Is Unique</b></em>' attribute.
         * The default value is <code>"true"</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Specifies whether the return parameter is unique or not, if present. This information is derived from the return result for this Operation.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {boolean} the value of the '<em>Is Unique</em>' attribute.
         * @see uml.UmlPackage#getOperation_IsUnique()
         * @model default="true" dataType="types.Boolean" required="true" transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        isIsUnique() : boolean;

        /**
         * Returns the value of the '<em><b>Lower</b></em>' attribute.
         * The default value is <code>"1"</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Specifies the lower multiplicity of the return parameter, if present. This information is derived from the return result for this Operation.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {number} the value of the '<em>Lower</em>' attribute.
         * @see uml.UmlPackage#getOperation_Lower()
         * @model default="1" dataType="types.Integer" transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getLower() : number;

        /**
         * Returns the value of the '<em><b>Postcondition</b></em>' reference list.
         * The list contents are of type {@link uml.Constraint}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * An optional set of Constraints specifying the state of the system when the Operation is completed.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Postcondition</em>' reference list.
         * @see uml.UmlPackage#getOperation_Postcondition()
         * @model ordered="false"
         * @generated
         */
        getPostcondition() : org.eclipse.emf.common.util.EList<uml.Constraint>;

        /**
         * Returns the value of the '<em><b>Precondition</b></em>' reference list.
         * The list contents are of type {@link uml.Constraint}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * An optional set of Constraints on the state of the system when the Operation is invoked.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Precondition</em>' reference list.
         * @see uml.UmlPackage#getOperation_Precondition()
         * @model ordered="false"
         * @generated
         */
        getPrecondition() : org.eclipse.emf.common.util.EList<uml.Constraint>;

        /**
         * Returns the value of the '<em><b>Redefined Operation</b></em>' reference list.
         * The list contents are of type {@link uml.Operation}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Operations that are redefined by this Operation.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Redefined Operation</em>' reference list.
         * @see uml.UmlPackage#getOperation_RedefinedOperation()
         * @model ordered="false"
         * @generated
         */
        getRedefinedOperation() : org.eclipse.emf.common.util.EList<Operation>;

        /**
         * Returns the value of the '<em><b>Type</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The return type of the operation, if present. This information is derived from the return result for this Operation.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Type</em>' reference.
         * @see uml.UmlPackage#getOperation_Type()
         * @model transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getType() : uml.Type;

        /**
         * Returns the value of the '<em><b>Upper</b></em>' attribute.
         * The default value is <code>"1"</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The upper multiplicity of the return parameter, if present. This information is derived from the return result for this Operation.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {number} the value of the '<em>Upper</em>' attribute.
         * @see uml.UmlPackage#getOperation_Upper()
         * @model default="1" dataType="types.UnlimitedNatural" transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getUpper() : number;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * An Operation can have at most one return parameter; i.e., an owned parameter with the direction set to 'return.'
         * self.ownedParameter->select(direction = ParameterDirectionKind::return)->size() <= 1
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        at_most_one_return(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A bodyCondition can only be specified for a query Operation.
         * bodyCondition <> null implies isQuery
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        only_body_for_query(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Retrieves the (only) return result parameter for this operation.
         * <!-- end-model-doc -->
         * @model kind="operation" ordered="false"
         * @generated
         * @return {*}
         */
        getReturnResult() : uml.Parameter;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @model newIsOrderedDataType="types.Boolean" newIsOrderedRequired="true" newIsOrderedOrdered="false"
         * @generated
         * @param {boolean} newIsOrdered
         */
        setIsOrdered(newIsOrdered : boolean);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @model newIsUniqueDataType="types.Boolean" newIsUniqueRequired="true" newIsUniqueOrdered="false"
         * @generated
         * @param {boolean} newIsUnique
         */
        setIsUnique(newIsUnique : boolean);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @model newLowerDataType="types.Integer" newLowerRequired="true" newLowerOrdered="false"
         * @generated
         * @param {number} newLower
         */
        setLower(newLower : number);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @model newTypeRequired="true" newTypeOrdered="false"
         * @generated
         * @param {*} newType
         */
        setType(newType : uml.Type);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @model newUpperDataType="types.UnlimitedNatural" newUpperRequired="true" newUpperOrdered="false"
         * @generated
         * @param {number} newUpper
         */
        setUpper(newUpper : number);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If this operation has a return parameter, isOrdered equals the value of isOrdered for that parameter. Otherwise isOrdered is false.
         * result = (if returnResult()->notEmpty() then returnResult()-> exists(isOrdered) else false endif)
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @model kind="operation" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         * @return {boolean}
         */
        isOrdered() : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * If this operation has a return parameter, isUnique equals the value of isUnique for that parameter. Otherwise isUnique is true.
         * result = (if returnResult()->notEmpty() then returnResult()->exists(isUnique) else true endif)
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @model kind="operation" dataType="types.Boolean" required="true" ordered="false"
         * @generated
         * @return {boolean}
         */
        isUnique() : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The query returnResult() returns the set containing the return parameter of the Operation if one exists, otherwise, it returns an empty set
         * result = (ownedParameter->select (direction = ParameterDirectionKind::return)->asSet())
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @model ordered="false"
         * @generated
         * @return {*}
         */
        returnResult() : org.eclipse.emf.common.util.EList<uml.Parameter>;
    }
}

