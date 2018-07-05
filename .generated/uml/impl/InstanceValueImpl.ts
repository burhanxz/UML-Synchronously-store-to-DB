/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Instance Value</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.InstanceValueImpl#getInstance}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.ValueSpecificationImpl
     * @class
     */
    export class InstanceValueImpl extends uml.impl.ValueSpecificationImpl implements uml.InstanceValue {
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
            return uml.UmlPackage.eINSTANCE.getInstanceValue();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getInstance() : uml.InstanceSpecification {
            return <uml.InstanceSpecification><any>this.eGet(uml.UmlPackage.eINSTANCE.getInstanceValue_Instance(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newInstance
         */
        public setInstance(newInstance : uml.InstanceSpecification) {
            this.eSet(uml.UmlPackage.eINSTANCE.getInstanceValue_Instance(), newInstance);
        }
    }
    InstanceValueImpl["__class"] = "uml.impl.InstanceValueImpl";
    InstanceValueImpl["__interfaces"] = ["ecore4m.EModelElement","uml.TypedElement","org.eclipse.emf.ecore.EObject","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","uml.ValueSpecification","uml.ParameterableElement","uml.PackageableElement","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","uml.InstanceValue","org.eclipse.emf.ecore.InternalEObject"];


}

