/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Time Observation</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.TimeObservationImpl#getEvent}</li>
     * <li>{@link uml.impl.TimeObservationImpl#isFirstEvent}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.ObservationImpl
     * @class
     */
    export class TimeObservationImpl extends uml.impl.ObservationImpl implements uml.TimeObservation {
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
            return uml.UmlPackage.eINSTANCE.getTimeObservation();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getEvent() : uml.NamedElement {
            return <uml.NamedElement><any>this.eGet(uml.UmlPackage.eINSTANCE.getTimeObservation_Event(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newEvent
         */
        public setEvent(newEvent : uml.NamedElement) {
            this.eSet(uml.UmlPackage.eINSTANCE.getTimeObservation_Event(), newEvent);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isFirstEvent() : boolean {
            return <boolean>this.eGet(uml.UmlPackage.eINSTANCE.getTimeObservation_FirstEvent(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {boolean} newFirstEvent
         */
        public setFirstEvent(newFirstEvent : boolean) {
            this.eSet(uml.UmlPackage.eINSTANCE.getTimeObservation_FirstEvent(), newFirstEvent);
        }
    }
    TimeObservationImpl["__class"] = "uml.impl.TimeObservationImpl";
    TimeObservationImpl["__interfaces"] = ["ecore4m.EModelElement","uml.TimeObservation","uml.ParameterableElement","uml.PackageableElement","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject","uml.Observation"];


}

