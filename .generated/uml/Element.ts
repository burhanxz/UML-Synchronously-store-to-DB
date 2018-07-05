/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Element</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * An Element is a constituent of a model. As such, it has the capability of owning other Elements.
     * <p>From package UML::CommonStructure.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.Element#getOwnedComment}</li>
     * <li>{@link uml.Element#getOwnedElement}</li>
     * <li>{@link uml.Element#getOwner}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getElement()
     * @model abstract="true"
     * @generated
     * @class
     */
    export interface Element extends ecore4m.EModelElement {
        /**
         * Returns the value of the '<em><b>Owned Comment</b></em>' containment reference list.
         * The list contents are of type {@link uml.Comment}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Comments owned by this Element.
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Owned Comment</em>' containment reference list.
         * @see uml.UmlPackage#getElement_OwnedComment()
         * @model containment="true" ordered="false"
         * @generated
         */
        getOwnedComment() : org.eclipse.emf.common.util.EList<uml.Comment>;

        /**
         * Returns the value of the '<em><b>Owned Element</b></em>' reference list.
         * The list contents are of type {@link uml.Element}.
         * It is bidirectional and its opposite is '{@link uml.Element#getOwner}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Elements owned by this Element.
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Owned Element</em>' reference list.
         * @see uml.UmlPackage#getElement_OwnedElement()
         * @see uml.Element#getOwner
         * @model opposite="owner" transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getOwnedElement() : org.eclipse.emf.common.util.EList<Element>;

        /**
         * Returns the value of the '<em><b>Owner</b></em>' reference.
         * It is bidirectional and its opposite is '{@link uml.Element#getOwnedElement}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Element that owns this Element.
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Owner</em>' reference.
         * @see uml.UmlPackage#getElement_Owner()
         * @see uml.Element#getOwnedElement
         * @model opposite="ownedElement" transient="true" changeable="false" volatile="true" derived="true" ordered="false"
         * @generated
         */
        getOwner() : Element;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Elements that must be owned must have an owner.
         * mustBeOwned() implies owner->notEmpty()
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        has_owner(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * An element may not directly or indirectly own itself.
         * not allOwnedElements()->includes(self)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        not_own_self(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Adds the specified keyword to this element.
         * @param {string} keyword The keyword to add.
         * <!-- end-model-doc -->
         * @model dataType="types.Boolean" required="true" ordered="false" keywordDataType="types.String" keywordRequired="true" keywordOrdered="false"
         * @generated
         * @return {boolean}
         */
        addKeyword(keyword : string) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Applies the specified stereotype to this element.
         * @param {*} stereotype The stereotype to apply.
         * <!-- end-model-doc -->
         * @model required="true" ordered="false" stereotypeRequired="true" stereotypeOrdered="false"
         * @generated
         * @return {*}
         */
        applyStereotype(stereotype : uml.Stereotype) : org.eclipse.emf.ecore.EObject;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Creates an annotation with the specified source and this element as its model element.
         * @param {string} source The source for the new annotation.
         * <!-- end-model-doc -->
         * @model required="true" ordered="false" sourceDataType="types.String" sourceRequired="true" sourceOrdered="false"
         * @generated
         * @return {*}
         */
        createEAnnotation(source : string) : org.eclipse.emf.ecore.EAnnotation;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Destroys this element by removing all cross references to/from it and removing it from its containing resource or object.
         * <!-- end-model-doc -->
         * @model
         * @generated
         */
        destroy();

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Retrieves the keywords for this element.
         * <!-- end-model-doc -->
         * @model kind="operation" dataType="types.String" ordered="false"
         * @generated
         * @return {*}
         */
        getKeywords() : org.eclipse.emf.common.util.EList<string>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Retrieves the stereotype with the specified qualified name that is applicable to this element, or null if no such stereotype is applicable.
         * @param {string} qualifiedName The qualified name of the applicable stereotype to retrieve.
         * <!-- end-model-doc -->
         * @model ordered="false" qualifiedNameDataType="types.String" qualifiedNameRequired="true" qualifiedNameOrdered="false"
         * @generated
         * @return {*}
         */
        getApplicableStereotype(qualifiedName : string) : uml.Stereotype;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Retrieves the stereotypes that are applicable to this element, including those that are required and/or may already be applied.
         * <!-- end-model-doc -->
         * @model kind="operation" ordered="false"
         * @generated
         * @return {*}
         */
        getApplicableStereotypes() : org.eclipse.emf.common.util.EList<uml.Stereotype>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Retrieves the stereotype with the specified qualified name that is applied to this element, or null if no such stereotype is  applied.
         * @param {string} qualifiedName The qualified name of the applied stereotype to retrieve.
         * <!-- end-model-doc -->
         * @model ordered="false" qualifiedNameDataType="types.String" qualifiedNameRequired="true" qualifiedNameOrdered="false"
         * @generated
         * @return {*}
         */
        getAppliedStereotype(qualifiedName : string) : uml.Stereotype;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Retrieves the stereotypes that are applied to this element.
         * <!-- end-model-doc -->
         * @model kind="operation" ordered="false"
         * @generated
         * @return {*}
         */
        getAppliedStereotypes() : org.eclipse.emf.common.util.EList<uml.Stereotype>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Retrieves the substereotype of the specified stereotype with the specified qualified name that is applied to this element, or null if no such stereotype is applied.
         * @param {*} stereotype The superstereotype of the applied substereotype to retrieve.
         * @param {string} qualifiedName The qualified name of the applied substereotype to retrieve.
         * <!-- end-model-doc -->
         * @model ordered="false" stereotypeRequired="true" stereotypeOrdered="false" qualifiedNameDataType="types.String" qualifiedNameRequired="true" qualifiedNameOrdered="false"
         * @generated
         * @return {*}
         */
        getAppliedSubstereotype(stereotype : uml.Stereotype, qualifiedName : string) : uml.Stereotype;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Retrieves the substereotypes of the specified stereotype that are applied to this element.
         * @param {*} stereotype The superstereotype of the applied substereotypes to retrieve.
         * <!-- end-model-doc -->
         * @model ordered="false" stereotypeRequired="true" stereotypeOrdered="false"
         * @generated
         * @return {*}
         */
        getAppliedSubstereotypes(stereotype : uml.Stereotype) : org.eclipse.emf.common.util.EList<uml.Stereotype>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Retrieves the model that owns (either directly or indirectly) this element.
         * <!-- end-model-doc -->
         * @model kind="operation" ordered="false"
         * @generated
         * @return {*}
         */
        getModel() : uml.Model;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Retrieves the nearest package that owns (either directly or indirectly) this element, or the element itself (if it is a package).
         * <!-- end-model-doc -->
         * @model kind="operation" ordered="false"
         * @generated
         * @return {*}
         */
        getNearestPackage() : uml.Package;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Retrieves the relationships of the specified type in which this element is involved.
         * @param {*} eClass The (meta)type of the relationships to retrieve.
         * <!-- end-model-doc -->
         * @model ordered="false" eClassRequired="true" eClassOrdered="false"
         * @generated
         * @return {*}
         */
        getRelationships(eClass? : any) : any;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Retrieves the stereotype with the specified qualified name that is required for this element, or null if no such stereotype is required.
         * @param {string} qualifiedName The qualified name of the required stereotype to retrieve.
         * <!-- end-model-doc -->
         * @model ordered="false" qualifiedNameDataType="types.String" qualifiedNameRequired="true" qualifiedNameOrdered="false"
         * @generated
         * @return {*}
         */
        getRequiredStereotype(qualifiedName : string) : uml.Stereotype;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Retrieves the stereotypes that are required for this element.
         * <!-- end-model-doc -->
         * @model kind="operation" ordered="false"
         * @generated
         * @return {*}
         */
        getRequiredStereotypes() : org.eclipse.emf.common.util.EList<uml.Stereotype>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Retrieves the directed relationships of the specified type for which this element is a source.
         * @param {*} eClass The (meta)type of the directed relationships to retrieve.
         * <!-- end-model-doc -->
         * @model ordered="false" eClassRequired="true" eClassOrdered="false"
         * @generated
         * @return {*}
         */
        getSourceDirectedRelationships(eClass? : any) : any;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Retrieves the application of the specified stereotype for this element, or null if no such stereotype application exists.
         * @param {*} stereotype The stereotype for which to retrieve an application.
         * <!-- end-model-doc -->
         * @model ordered="false" stereotypeRequired="true" stereotypeOrdered="false"
         * @generated
         * @return {*}
         */
        getStereotypeApplication(stereotype : uml.Stereotype) : org.eclipse.emf.ecore.EObject;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Retrieves the stereotype applications for this element.
         * <!-- end-model-doc -->
         * @model kind="operation" ordered="false"
         * @generated
         * @return {*}
         */
        getStereotypeApplications() : org.eclipse.emf.common.util.EList<org.eclipse.emf.ecore.EObject>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Retrieves the directed relationships of the specified type for which this element is a target.
         * @param {*} eClass The (meta)type of the directed relationships to retrieve.
         * <!-- end-model-doc -->
         * @model ordered="false" eClassRequired="true" eClassOrdered="false"
         * @generated
         * @return {*}
         */
        getTargetDirectedRelationships(eClass? : any) : any;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Retrieves the value of the property with the specified name in the specified stereotype for this element.
         * @param {*} stereotype The stereotype for which to retrieve the value.
         * @param {string} propertyName The name of the property whose value to retrieve.
         * <!-- end-model-doc -->
         * @model ordered="false" stereotypeRequired="true" stereotypeOrdered="false" propertyNameDataType="types.String" propertyNameRequired="true" propertyNameOrdered="false"
         * @generated
         * @return {*}
         */
        getValue(stereotype? : any, propertyName? : any) : any;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Determines whether this element has the specified keyword.
         * @param {string} keyword The keyword in question.
         * <!-- end-model-doc -->
         * @model dataType="types.Boolean" required="true" ordered="false" keywordDataType="types.String" keywordRequired="true" keywordOrdered="false"
         * @generated
         * @return {boolean}
         */
        hasKeyword(keyword : string) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Determines whether this element has a (non-default) value for the property with the specified name in the specified stereotype.
         * @param {*} stereotype The stereotype for which to test the property.
         * @param {string} propertyName The name of the property in question.
         * <!-- end-model-doc -->
         * @model dataType="types.Boolean" required="true" ordered="false" stereotypeRequired="true" stereotypeOrdered="false" propertyNameDataType="types.String" propertyNameRequired="true" propertyNameOrdered="false"
         * @generated
         * @return {boolean}
         */
        hasValue(stereotype : uml.Stereotype, propertyName : string) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Determines whether the specified stereotype is applicable to this element.
         * @param {*} stereotype The stereotype in question.
         * <!-- end-model-doc -->
         * @model dataType="types.Boolean" required="true" ordered="false" stereotypeRequired="true" stereotypeOrdered="false"
         * @generated
         * @return {boolean}
         */
        isStereotypeApplicable(stereotype : uml.Stereotype) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Determines whether the specified stereotype is applied to this element.
         * @param {*} stereotype The stereotype in question.
         * <!-- end-model-doc -->
         * @model dataType="types.Boolean" required="true" ordered="false" stereotypeRequired="true" stereotypeOrdered="false"
         * @generated
         * @return {boolean}
         */
        isStereotypeApplied(stereotype : uml.Stereotype) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Determines whether the specified stereotype is required for this element.
         * @param {*} stereotype The stereotype in question.
         * <!-- end-model-doc -->
         * @model dataType="types.Boolean" required="true" ordered="false" stereotypeRequired="true" stereotypeOrdered="false"
         * @generated
         * @return {boolean}
         */
        isStereotypeRequired(stereotype : uml.Stereotype) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Removes the specified keyword from this element.
         * @param {string} keyword The keyword to remove.
         * <!-- end-model-doc -->
         * @model dataType="types.Boolean" required="true" ordered="false" keywordDataType="types.String" keywordRequired="true" keywordOrdered="false"
         * @generated
         * @return {boolean}
         */
        removeKeyword(keyword : string) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Sets the value of the property with the specified name in the specified stereotype for this element.
         * @param {*} stereotype The stereotype for which to set the value.
         * @param {string} propertyName The name of the property whose value to set.
         * @param {*} newValue The new value for the property.
         * <!-- end-model-doc -->
         * @model stereotypeRequired="true" stereotypeOrdered="false" propertyNameDataType="types.String" propertyNameRequired="true" propertyNameOrdered="false" newValueRequired="true" newValueOrdered="false"
         * @generated
         */
        setValue(stereotype? : any, propertyName? : any, newValue? : any) : any;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Unapplies the specified stereotype from this element.
         * @param {*} stereotype The stereotype to unapply.
         * <!-- end-model-doc -->
         * @model required="true" ordered="false" stereotypeRequired="true" stereotypeOrdered="false"
         * @generated
         * @return {*}
         */
        unapplyStereotype(stereotype : uml.Stereotype) : org.eclipse.emf.ecore.EObject;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The query allOwnedElements() gives all of the direct and indirect ownedElements of an Element.
         * result = (ownedElement->union(ownedElement->collect(e | e.allOwnedElements()))->asSet())
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @model ordered="false"
         * @generated
         * @return {*}
         */
        allOwnedElements() : org.eclipse.emf.common.util.EList<Element>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The query mustBeOwned() indicates whether Elements of this type must have an owner. Subclasses of Element that do not require an owner must override this operation.
         * result = (true)
         * <p>From package UML::CommonStructure.</p>
         * <!-- end-model-doc -->
         * @model dataType="types.Boolean" required="true" ordered="false"
         * @generated
         * @return {boolean}
         */
        mustBeOwned() : boolean;
    }
}

