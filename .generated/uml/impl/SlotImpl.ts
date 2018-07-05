/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Slot</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.SlotImpl#getDefiningFeature}</li>
     * <li>{@link uml.impl.SlotImpl#getValue}</li>
     * <li>{@link uml.impl.SlotImpl#getOwningInstance}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.ElementImpl
     * @class
     */
    export class SlotImpl extends uml.impl.ElementImpl implements uml.Slot {
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
            return uml.UmlPackage.eINSTANCE.getSlot();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getDefiningFeature() : uml.StructuralFeature {
            return <uml.StructuralFeature><any>this.eGet(uml.UmlPackage.eINSTANCE.getSlot_DefiningFeature(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newDefiningFeature
         */
        public setDefiningFeature(newDefiningFeature : uml.StructuralFeature) {
            this.eSet(uml.UmlPackage.eINSTANCE.getSlot_DefiningFeature(), newDefiningFeature);
        }

        public getValue(stereotype? : any, propertyName? : any) : any {
            if(((stereotype != null && (stereotype["__interfaces"] != null && stereotype["__interfaces"].indexOf("uml.Stereotype") >= 0 || stereotype.constructor != null && stereotype.constructor["__interfaces"] != null && stereotype.constructor["__interfaces"].indexOf("uml.Stereotype") >= 0)) || stereotype === null) && ((typeof propertyName === 'string') || propertyName === null)) {
                super.getValue(stereotype, propertyName);
            } else if(stereotype === undefined && propertyName === undefined) {
                return <any>this.getValue$();
            } else throw new Error('invalid overload');
        }

        public getValue$() : org.eclipse.emf.common.util.EList<uml.ValueSpecification> {
            return <org.eclipse.emf.common.util.EList<uml.ValueSpecification>><any>this.eGet(uml.UmlPackage.eINSTANCE.getSlot_Value(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getOwningInstance() : uml.InstanceSpecification {
            return <uml.InstanceSpecification><any>this.eGet(uml.UmlPackage.eINSTANCE.getSlot_OwningInstance(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newOwningInstance
         */
        public setOwningInstance(newOwningInstance : uml.InstanceSpecification) {
            this.eSet(uml.UmlPackage.eINSTANCE.getSlot_OwningInstance(), newOwningInstance);
        }
    }
    SlotImpl["__class"] = "uml.impl.SlotImpl";
    SlotImpl["__interfaces"] = ["ecore4m.EModelElement","uml.Slot","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

