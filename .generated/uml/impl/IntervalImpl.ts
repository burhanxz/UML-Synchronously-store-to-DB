/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Interval</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.IntervalImpl#getMax}</li>
     * <li>{@link uml.impl.IntervalImpl#getMin}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.ValueSpecificationImpl
     * @class
     */
    export class IntervalImpl extends uml.impl.ValueSpecificationImpl implements uml.Interval {
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
            return uml.UmlPackage.eINSTANCE.getInterval();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getMax() : uml.ValueSpecification {
            return <uml.ValueSpecification><any>this.eGet(uml.UmlPackage.eINSTANCE.getInterval_Max(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newMax
         */
        public setMax(newMax : uml.ValueSpecification) {
            this.eSet(uml.UmlPackage.eINSTANCE.getInterval_Max(), newMax);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getMin() : uml.ValueSpecification {
            return <uml.ValueSpecification><any>this.eGet(uml.UmlPackage.eINSTANCE.getInterval_Min(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newMin
         */
        public setMin(newMin : uml.ValueSpecification) {
            this.eSet(uml.UmlPackage.eINSTANCE.getInterval_Min(), newMin);
        }
    }
    IntervalImpl["__class"] = "uml.impl.IntervalImpl";
    IntervalImpl["__interfaces"] = ["ecore4m.EModelElement","uml.TypedElement","org.eclipse.emf.ecore.EObject","uml.NamedElement","uml.Interval","org.eclipse.emf.common.notify.Notifier","uml.ValueSpecification","uml.ParameterableElement","uml.PackageableElement","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.InternalEObject"];


}

