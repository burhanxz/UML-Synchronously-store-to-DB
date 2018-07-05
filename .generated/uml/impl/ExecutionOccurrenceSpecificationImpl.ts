/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Execution Occurrence Specification</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.ExecutionOccurrenceSpecificationImpl#getExecution}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.OccurrenceSpecificationImpl
     * @class
     */
    export class ExecutionOccurrenceSpecificationImpl extends uml.impl.OccurrenceSpecificationImpl implements uml.ExecutionOccurrenceSpecification {
        constructor() {
            super();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        eStaticClass() : org.eclipse.emf.ecore.EClass {
            return uml.UmlPackage.eINSTANCE.getExecutionOccurrenceSpecification();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getExecution() : uml.ExecutionSpecification {
            return <uml.ExecutionSpecification><any>this.eGet(uml.UmlPackage.eINSTANCE.getExecutionOccurrenceSpecification_Execution(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newExecution
         */
        public setExecution(newExecution : uml.ExecutionSpecification) {
            this.eSet(uml.UmlPackage.eINSTANCE.getExecutionOccurrenceSpecification_Execution(), newExecution);
        }
    }
    ExecutionOccurrenceSpecificationImpl["__class"] = "uml.impl.ExecutionOccurrenceSpecificationImpl";
    ExecutionOccurrenceSpecificationImpl["__interfaces"] = ["ecore4m.EModelElement","uml.ExecutionOccurrenceSpecification","uml.OccurrenceSpecification","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","uml.NamedElement","uml.InteractionFragment","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

