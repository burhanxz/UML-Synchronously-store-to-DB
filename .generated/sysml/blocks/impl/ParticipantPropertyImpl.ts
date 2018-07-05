/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.blocks.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Participant Property</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link sysml.blocks.impl.ParticipantPropertyImpl#getBase_Property}</li>
     * <li>{@link sysml.blocks.impl.ParticipantPropertyImpl#getEnd}</li>
     * </ul>
     * 
     * @generated
     * @extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl
     * @class
     */
    export class ParticipantPropertyImpl extends org.eclipse.emf.ecore.impl.EStoreEObjectImpl implements sysml.blocks.ParticipantProperty {
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
            return sysml.blocks.BlocksPackage.Literals.PARTICIPANT_PROPERTY;
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
            return <uml.Property><any>this.eGet(sysml.blocks.BlocksPackage.Literals.PARTICIPANT_PROPERTY__BASE_PROPERTY, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newBase_Property
         */
        public setBase_Property(newBase_Property : uml.Property) {
            this.eSet(sysml.blocks.BlocksPackage.Literals.PARTICIPANT_PROPERTY__BASE_PROPERTY, newBase_Property);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getEnd() : uml.Property {
            return <uml.Property><any>this.eGet(sysml.blocks.BlocksPackage.Literals.PARTICIPANT_PROPERTY__END, true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newEnd
         */
        public setEnd(newEnd : uml.Property) {
            this.eSet(sysml.blocks.BlocksPackage.Literals.PARTICIPANT_PROPERTY__END, newEnd);
        }
    }
    ParticipantPropertyImpl["__class"] = "sysml.blocks.impl.ParticipantPropertyImpl";
    ParticipantPropertyImpl["__interfaces"] = ["sysml.blocks.ParticipantProperty","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

