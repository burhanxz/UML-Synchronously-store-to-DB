/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Call Event</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.CallEventImpl#getOperation}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.MessageEventImpl
     * @class
     */
    export class CallEventImpl extends uml.impl.MessageEventImpl implements uml.CallEvent {
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
            return uml.UmlPackage.eINSTANCE.getCallEvent();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getOperation() : uml.Operation {
            return <uml.Operation><any>this.eGet(uml.UmlPackage.eINSTANCE.getCallEvent_Operation(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newOperation
         */
        public setOperation(newOperation : uml.Operation) {
            this.eSet(uml.UmlPackage.eINSTANCE.getCallEvent_Operation(), newOperation);
        }
    }
    CallEventImpl["__class"] = "uml.impl.CallEventImpl";
    CallEventImpl["__interfaces"] = ["ecore4m.EModelElement","uml.MessageEvent","uml.Event","org.eclipse.emf.ecore.EObject","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","uml.ParameterableElement","uml.PackageableElement","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","uml.CallEvent","org.eclipse.emf.ecore.InternalEObject"];


}

