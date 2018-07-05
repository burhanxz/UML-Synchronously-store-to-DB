/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.constraints.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Constraint Property</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link sysml.constraints.impl.ConstraintPropertyImpl#getBase_Property}</li>
     * </ul>
     * 
     * @generated
     * @extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl
     * @class
     */
    export class ConstraintPropertyImpl extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl implements sysml.constraints.ConstraintProperty {
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
            return sysml.constraints.ConstraintsPackage.Literals.CONSTRAINT_PROPERTY;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {number}
         */
        eStaticFeatureCount() : number {
            return 0;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getBase_Property() : uml.Property {
            return <uml.Property><any>this.eGet(sysml.constraints.ConstraintsPackage.Literals.CONSTRAINT_PROPERTY__BASE_PROPERTY, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newBase_Property
         */
        public setBase_Property(newBase_Property : uml.Property) {
            this.eSet(sysml.constraints.ConstraintsPackage.Literals.CONSTRAINT_PROPERTY__BASE_PROPERTY, newBase_Property);
        }
    }
    ConstraintPropertyImpl["__class"] = "sysml.constraints.impl.ConstraintPropertyImpl";
    ConstraintPropertyImpl["__interfaces"] = ["org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","sysml.constraints.ConstraintProperty","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

