/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Structural Feature Action</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * StructuralFeatureAction is an abstract class for all Actions that operate on StructuralFeatures.
     * <p>From package UML::Actions.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.StructuralFeatureAction#getObject}</li>
     * <li>{@link uml.StructuralFeatureAction#getStructuralFeature}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getStructuralFeatureAction()
     * @model abstract="true"
     * @generated
     * @class
     */
    export interface StructuralFeatureAction extends uml.Action {
        /**
         * Returns the value of the '<em><b>Object</b></em>' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The InputPin from which the object whose StructuralFeature is to be read or written is obtained.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Object</em>' containment reference.
         * @see #setObject(InputPin)
         * @see uml.UmlPackage#getStructuralFeatureAction_Object()
         * @model containment="true" required="true" ordered="false"
         * @generated
         */
        getObject() : uml.InputPin;

        /**
         * Sets the value of the '{@link uml.StructuralFeatureAction#getObject}' containment reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Object</em>' containment reference.
         * @see #getObject()
         * @generated
         */
        setObject(value : uml.InputPin);

        /**
         * Returns the value of the '<em><b>Structural Feature</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The StructuralFeature to be read or written.
         * <p>From package UML::Actions.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Structural Feature</em>' reference.
         * @see #setStructuralFeature(StructuralFeature)
         * @see uml.UmlPackage#getStructuralFeatureAction_StructuralFeature()
         * @model required="true" ordered="false"
         * @generated
         */
        getStructuralFeature() : uml.StructuralFeature;

        /**
         * Sets the value of the '{@link uml.StructuralFeatureAction#getStructuralFeature}' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} value the new value of the '<em>Structural Feature</em>' reference.
         * @see #getStructuralFeature()
         * @generated
         */
        setStructuralFeature(value : uml.StructuralFeature);

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The multiplicity of the object InputPin must be 1..1.
         * object.is(1,1)
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
         * The structuralFeature must either be an owned or inherited feature of the type of the object InputPin, or it must be an owned end of a binary Association whose opposite end had as a type to which the type of the object InputPin conforms.
         * object.type.oclAsType(Classifier).allFeatures()->includes(structuralFeature) or
         * object.type.conformsTo(structuralFeature.oclAsType(Property).opposite.type)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        object_type(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The visibility of the structuralFeature must allow access from the object performing the ReadStructuralFeatureAction.
         * structuralFeature.visibility = VisibilityKind::public or
         * _'context'.allFeatures()->includes(structuralFeature) or
         * structuralFeature.visibility=VisibilityKind::protected and
         * _'context'.conformsTo(structuralFeature.oclAsType(Property).opposite.type.oclAsType(Classifier))
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        visibility(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The structuralFeature must not be static.
         * not structuralFeature.isStatic
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        not_static(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The structuralFeature must have exactly one featuringClassifier.
         * structuralFeature.featuringClassifier->size() = 1
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        one_featuring_classifier(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

