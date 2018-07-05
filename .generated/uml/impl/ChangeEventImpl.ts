/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Change Event</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.ChangeEventImpl#getChangeExpression}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.EventImpl
     * @class
     */
    export class ChangeEventImpl extends uml.impl.EventImpl implements uml.ChangeEvent {
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
            return uml.UmlPackage.eINSTANCE.getChangeEvent();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getChangeExpression() : uml.ValueSpecification {
            return <uml.ValueSpecification><any>this.eGet(uml.UmlPackage.eINSTANCE.getChangeEvent_ChangeExpression(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newChangeExpression
         */
        public setChangeExpression(newChangeExpression : uml.ValueSpecification) {
            this.eSet(uml.UmlPackage.eINSTANCE.getChangeEvent_ChangeExpression(), newChangeExpression);
        }
    }
    ChangeEventImpl["__class"] = "uml.impl.ChangeEventImpl";
    ChangeEventImpl["__interfaces"] = ["ecore4m.EModelElement","uml.ParameterableElement","uml.PackageableElement","uml.ChangeEvent","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","uml.Event","org.eclipse.emf.ecore.EObject","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

