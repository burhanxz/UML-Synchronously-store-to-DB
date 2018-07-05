/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Slot</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A Slot designates that an entity modeled by an InstanceSpecification has a value or values for a specific StructuralFeature.
     * <p>From package UML::Classification.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.Slot#getDefiningFeature}</li>
     * <li>{@link uml.Slot#getValue}</li>
     * <li>{@link uml.Slot#getOwningInstance}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getSlot()
     * @model
     * @generated
     * @class
     */
    export interface Slot extends uml.Element {
        /**
         * Returns the value of the '<em><b>Defining Feature</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The StructuralFeature that specifies the values that may be held by the Slot.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Defining Feature</em>' reference.
         * @see #setDefiningFeature(StructuralFeature)
         * @see uml.UmlPackage#getSlot_DefiningFeature()
         * @model required="true" ordered="false"
         * @generated
         */
        getDefiningFeature() : uml.StructuralFeature;

        /**
         * Sets the value of the '{@link uml.Slot#getDefiningFeature}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Defining Feature</em>' reference.
         * @see #getDefiningFeature()
         * @generated
         */
        setDefiningFeature(value : uml.StructuralFeature);

        getValue(stereotype? : any, propertyName? : any) : any;

        /**
         * Returns the value of the '<em><b>Owning Instance</b></em>' container reference.
         * It is bidirectional and its opposite is '{@link uml.InstanceSpecification#getSlot}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The InstanceSpecification that owns this Slot.
         * <p>From package UML::Classification.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Owning Instance</em>' container reference.
         * @see #setOwningInstance(InstanceSpecification)
         * @see uml.UmlPackage#getSlot_OwningInstance()
         * @see uml.InstanceSpecification#getSlot
         * @model opposite="slot" required="true" transient="false" ordered="false"
         * @generated
         */
        getOwningInstance() : uml.InstanceSpecification;

        /**
         * Sets the value of the '{@link uml.Slot#getOwningInstance}' container reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Owning Instance</em>' container reference.
         * @see #getOwningInstance()
         * @generated
         */
        setOwningInstance(value : uml.InstanceSpecification);
    }
}

