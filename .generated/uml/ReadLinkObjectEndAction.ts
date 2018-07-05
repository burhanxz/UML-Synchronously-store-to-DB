/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Read Link Object End Action</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A ReadLinkObjectEndAction is an Action that retrieves an end object from a link object.
     * <p>From package UML::Actions.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.ReadLinkObjectEndAction#getEnd}</li>
     * <li>{@link uml.ReadLinkObjectEndAction#getObject}</li>
     * <li>{@link uml.ReadLinkObjectEndAction#getResult}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getReadLinkObjectEndAction()
     * @model
     * @generated
     * @class
     */
    export interface ReadLinkObjectEndAction extends uml.Action {
        /**
         * Returns the value of the '<em><b>End</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Association end to be read.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>End</em>' reference.
         * @see #setEnd(Property)
         * @see uml.UmlPackage#getReadLinkObjectEndAction_End()
         * @model required="true" ordered="false"
         * @generated
         */
        getEnd() : uml.Property;

        /**
         * Sets the value of the '{@link uml.ReadLinkObjectEndAction#getEnd}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>End</em>' reference.
         * @see #getEnd()
         * @generated
         */
        setEnd(value : uml.Property);

        /**
         * Returns the value of the '<em><b>Object</b></em>' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The input pin from which the link object is obtained.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Object</em>' containment reference.
         * @see #setObject(InputPin)
         * @see uml.UmlPackage#getReadLinkObjectEndAction_Object()
         * @model containment="true" required="true" ordered="false"
         * @generated
         */
        getObject() : uml.InputPin;

        /**
         * Sets the value of the '{@link uml.ReadLinkObjectEndAction#getObject}' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Object</em>' containment reference.
         * @see #getObject()
         * @generated
         */
        setObject(value : uml.InputPin);

        /**
         * Returns the value of the '<em><b>Result</b></em>' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The OutputPin where the result value is placed.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Result</em>' containment reference.
         * @see #setResult(OutputPin)
         * @see uml.UmlPackage#getReadLinkObjectEndAction_Result()
         * @model containment="true" required="true" ordered="false"
         * @generated
         */
        getResult() : uml.OutputPin;

        /**
         * Sets the value of the '{@link uml.ReadLinkObjectEndAction#getResult}' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Result</em>' containment reference.
         * @see #getResult()
         * @generated
         */
        setResult(value : uml.OutputPin);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The end Property must be an Association memberEnd.
         * end.association <> null
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        property(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The multiplicity of the object InputPin is 1..1.
         * object.is(1,1)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        multiplicity_of_object(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The ends of the association must not be static.
         * end.association.memberEnd->forAll(e | not e.isStatic)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        ends_of_association(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The type of the result OutputPin is the same as the type of the end Property.
         * result.type = end.type
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        type_of_result(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The multiplicity of the result OutputPin is 1..1.
         * result.is(1,1)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        multiplicity_of_result(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The type of the object InputPin is the AssociationClass that owns the end Property.
         * object.type = end.association
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        type_of_object(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The association of the end must be an AssociationClass.
         * end.association.oclIsKindOf(AssociationClass)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        association_of_association(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

