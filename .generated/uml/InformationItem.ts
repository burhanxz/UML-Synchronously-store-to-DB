/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml {
    /**
     * <!-- begin-user-doc -->
     * A representation of the model object '<em><b>Information Item</b></em>'.
     * <!-- end-user-doc -->
     * 
     * <!-- begin-model-doc -->
     * InformationItems represent many kinds of information that can flow from sources to targets in very abstract ways.? They represent the kinds of information that may move within a system, but do not elaborate details of the transferred information.? Details of transferred information are the province of other Classifiers that may ultimately define InformationItems.? Consequently, InformationItems cannot be instantiated and do not themselves have features, generalizations, or associations.?An important use of InformationItems is to represent information during early design stages, possibly before the detailed modeling decisions that will ultimately define them have been made. Another purpose of InformationItems is to abstract portions of complex models in less precise, but perhaps more general and communicable, ways.
     * <p>From package UML::InformationFlows.</p>
     * <!-- end-model-doc -->
     * 
     * <p>
     * The following features are supported:
     * </p>
     * <ul>
     * <li>{@link uml.InformationItem#getRepresented}</li>
     * </ul>
     * 
     * @see uml.UmlPackage#getInformationItem()
     * @model
     * @generated
     * @class
     */
    export interface InformationItem extends uml.Classifier {
        /**
         * Returns the value of the '<em><b>Represented</b></em>' reference list.
         * The list contents are of type {@link uml.Classifier}.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * Determines the classifiers that will specify the structure and nature of the information. An information item represents all its represented classifiers.
         * <p>From package UML::InformationFlows.</p>
         * <!-- end-model-doc -->
         * @return {*} the value of the '<em>Represented</em>' reference list.
         * @see uml.UmlPackage#getInformationItem_Represented()
         * @model ordered="false"
         * @generated
         */
        getRepresented() : org.eclipse.emf.common.util.EList<uml.Classifier>;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * The sources and targets of an information item (its related information flows) must designate subsets of the sources and targets of the representation information item, if any. The Classifiers that can realize an information item can only be of the following kind: Class, Interface, InformationItem, Signal, Component.
         * (self.represented->select(oclIsKindOf(InformationItem))->forAll(p |
         * p.conveyingFlow.source->forAll(q | self.conveyingFlow.source->includes(q)) and
         * p.conveyingFlow.target->forAll(q | self.conveyingFlow.target->includes(q)))) and
         * (self.represented->forAll(oclIsKindOf(Class) or oclIsKindOf(Interface) or
         * oclIsKindOf(InformationItem) or oclIsKindOf(Signal) or oclIsKindOf(Component)))
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        sources_and_targets(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * An informationItem has no feature, no generalization, and no associations.
         * self.generalization->isEmpty() and self.feature->isEmpty()
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        has_no(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * <!-- begin-model-doc -->
         * It is not instantiable.
         * isAbstract
         * @param {*} diagnostics The chain of diagnostics to which problems are to be appended.
         * @param {*} context The cache of context-specific information.
         * <!-- end-model-doc -->
         * @model
         * @generated
         * @return {boolean}
         */
        not_instantiable(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean;
    }
}

