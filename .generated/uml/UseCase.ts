/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Use Case</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * A UseCase specifies a set of actions performed by its subjects, which yields an observable result that is of value for one or more Actors or other stakeholders of each subject.
     * <p>From package UML::UseCases.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.UseCase#getExtend}</li>
     * <li>{@link uml.UseCase#getExtensionPoint}</li>
     * <li>{@link uml.UseCase#getInclude}</li>
     * <li>{@link uml.UseCase#getSubject}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getUseCase()
     * @model
     * @generated
     * @class
     */
    export interface UseCase extends uml.BehavioredClassifier {
        /**
         * Returns the value of the '<em><b>Extend</b></em>' containment reference list.
         * The list contents are of type {@link uml.Extend}.
         * It is bidirectional and its opposite is '{@link uml.Extend#getExtension}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Extend relationships owned by this UseCase.
         * <p>From package UML::UseCases.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Extend</em>' containment reference list.
         * @see uml.UmlPackage#getUseCase_Extend()
         * @see uml.Extend#getExtension
         * @model opposite="extension" containment="true" ordered="false"
         * @generated
         */
        getExtend() : org.eclipse.emf.common.util.EList<uml.Extend>;

        /**
         * Returns the value of the '<em><b>Extension Point</b></em>' containment reference list.
         * The list contents are of type {@link uml.ExtensionPoint}.
         * It is bidirectional and its opposite is '{@link uml.ExtensionPoint#getUseCase}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The ExtensionPoints owned by this UseCase.
         * <p>From package UML::UseCases.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Extension Point</em>' containment reference list.
         * @see uml.UmlPackage#getUseCase_ExtensionPoint()
         * @see uml.ExtensionPoint#getUseCase
         * @model opposite="useCase" containment="true" ordered="false"
         * @generated
         */
        getExtensionPoint() : org.eclipse.emf.common.util.EList<uml.ExtensionPoint>;

        /**
         * Returns the value of the '<em><b>Include</b></em>' containment reference list.
         * The list contents are of type {@link uml.Include}.
         * It is bidirectional and its opposite is '{@link uml.Include#getIncludingCase}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The Include relationships owned by this UseCase.
         * <p>From package UML::UseCases.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Include</em>' containment reference list.
         * @see uml.UmlPackage#getUseCase_Include()
         * @see uml.Include#getIncludingCase
         * @model opposite="includingCase" containment="true" ordered="false"
         * @generated
         */
        getInclude() : org.eclipse.emf.common.util.EList<uml.Include>;

        /**
         * Returns the value of the '<em><b>Subject</b></em>' reference list.
         * The list contents are of type {@link uml.Classifier}.
         * It is bidirectional and its opposite is '{@link uml.Classifier#getUseCase}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The subjects to which this UseCase applies. Each subject or its parts realize all the UseCases that apply to it.
         * <p>From package UML::UseCases.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Subject</em>' reference list.
         * @see uml.UmlPackage#getUseCase_Subject()
         * @see uml.Classifier#getUseCase
         * @model opposite="useCase" ordered="false"
         * @generated
         */
        getSubject() : org.eclipse.emf.common.util.EList<uml.Classifier>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * UseCases can only be involved in binary Associations.
         * Association.allInstances()->forAll(a | a.memberEnd.type->includes(self) implies a.memberEnd->size() = 2)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        binary_associations(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * UseCases cannot have Associations to UseCases specifying the same subject.
         * Association.allInstances()->forAll(a | a.memberEnd.type->includes(self) implies
         * (
         * let usecases: Set(UseCase) = a.memberEnd.type->select(oclIsKindOf(UseCase))->collect(oclAsType(UseCase))->asSet() in
         * usecases->size() > 1 implies usecases->collect(subject)->size() > 1
         * )
         * )
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        no_association_to_use_case(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A UseCase cannot include UseCases that directly or indirectly include it.
         * not allIncludedUseCases()->includes(self)
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        cannot_include_self(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * A UseCase must have a name.
         * name -> notEmpty ()
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        must_have_name(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The query allIncludedUseCases() returns the transitive closure of all UseCases (directly or indirectly) included by this UseCase.
         * result = (self.include.addition->union(self.include.addition->collect(uc | uc.allIncludedUseCases()))->asSet())
         * <p>From package UML::UseCases.</p>
         * <!-- end-model-doc -->
         * @model ordered="false"
         * @generated
         * @return {*}
         */
        allIncludedUseCases() : org.eclipse.emf.common.util.EList<UseCase>;
    }
}

