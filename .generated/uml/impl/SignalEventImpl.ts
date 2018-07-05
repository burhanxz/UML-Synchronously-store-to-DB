/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Signal Event</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.SignalEventImpl#getSignal}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.MessageEventImpl
     * @class
     */
    export class SignalEventImpl extends uml.impl.MessageEventImpl implements uml.SignalEvent {
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
            return uml.UmlPackage.eINSTANCE.getSignalEvent();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getSignal() : uml.Signal {
            return <uml.Signal><any>this.eGet(uml.UmlPackage.eINSTANCE.getSignalEvent_Signal(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newSignal
         */
        public setSignal(newSignal : uml.Signal) {
            this.eSet(uml.UmlPackage.eINSTANCE.getSignalEvent_Signal(), newSignal);
        }
    }
    SignalEventImpl["__class"] = "uml.impl.SignalEventImpl";
    SignalEventImpl["__interfaces"] = ["ecore4m.EModelElement","uml.MessageEvent","uml.Event","org.eclipse.emf.ecore.EObject","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","uml.ParameterableElement","uml.PackageableElement","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","uml.SignalEvent","org.eclipse.emf.ecore.InternalEObject"];


}

