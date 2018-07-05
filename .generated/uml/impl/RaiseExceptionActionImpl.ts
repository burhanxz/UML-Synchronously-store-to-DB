/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Raise Exception Action</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.RaiseExceptionActionImpl#getException}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.ActionImpl
     * @class
     */
    export class RaiseExceptionActionImpl extends uml.impl.ActionImpl implements uml.RaiseExceptionAction {
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
            return uml.UmlPackage.eINSTANCE.getRaiseExceptionAction();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getException() : uml.InputPin {
            return <uml.InputPin><any>this.eGet(uml.UmlPackage.eINSTANCE.getRaiseExceptionAction_Exception(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newException
         */
        public setException(newException : uml.InputPin) {
            this.eSet(uml.UmlPackage.eINSTANCE.getRaiseExceptionAction_Exception(), newException);
        }
    }
    RaiseExceptionActionImpl["__class"] = "uml.impl.RaiseExceptionActionImpl";
    RaiseExceptionActionImpl["__interfaces"] = ["ecore4m.EModelElement","uml.RaiseExceptionAction","org.eclipse.emf.ecore.EObject","uml.NamedElement","uml.ActivityContent","org.eclipse.emf.common.notify.Notifier","uml.ExecutableNode","uml.RedefinableElement","uml.Action","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","uml.ActivityNode","org.eclipse.emf.ecore.InternalEObject"];


}

