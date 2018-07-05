/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Behavior Execution Specification</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.BehaviorExecutionSpecificationImpl#getBehavior}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.ExecutionSpecificationImpl
     * @class
     */
    export class BehaviorExecutionSpecificationImpl extends uml.impl.ExecutionSpecificationImpl implements uml.BehaviorExecutionSpecification {
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
            return uml.UmlPackage.eINSTANCE.getBehaviorExecutionSpecification();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getBehavior() : uml.Behavior {
            return <uml.Behavior><any>this.eGet(uml.UmlPackage.eINSTANCE.getBehaviorExecutionSpecification_Behavior(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newBehavior
         */
        public setBehavior(newBehavior : uml.Behavior) {
            this.eSet(uml.UmlPackage.eINSTANCE.getBehaviorExecutionSpecification_Behavior(), newBehavior);
        }
    }
    BehaviorExecutionSpecificationImpl["__class"] = "uml.impl.BehaviorExecutionSpecificationImpl";
    BehaviorExecutionSpecificationImpl["__interfaces"] = ["uml.BehaviorExecutionSpecification","ecore4m.EModelElement","uml.ExecutionSpecification","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","uml.NamedElement","uml.InteractionFragment","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

