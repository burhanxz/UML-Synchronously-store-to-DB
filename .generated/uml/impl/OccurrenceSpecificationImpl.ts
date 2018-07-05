/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Occurrence Specification</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.OccurrenceSpecificationImpl#getToAfter}</li>
     * <li>{@link uml.impl.OccurrenceSpecificationImpl#getToBefore}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.InteractionFragmentImpl
     * @class
     */
    export class OccurrenceSpecificationImpl extends uml.impl.InteractionFragmentImpl implements uml.OccurrenceSpecification {
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
            return uml.UmlPackage.eINSTANCE.getOccurrenceSpecification();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getToAfter() : org.eclipse.emf.common.util.EList<uml.GeneralOrdering> {
            return <org.eclipse.emf.common.util.EList<uml.GeneralOrdering>><any>this.eGet(uml.UmlPackage.eINSTANCE.getOccurrenceSpecification_ToAfter(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getToBefore() : org.eclipse.emf.common.util.EList<uml.GeneralOrdering> {
            return <org.eclipse.emf.common.util.EList<uml.GeneralOrdering>><any>this.eGet(uml.UmlPackage.eINSTANCE.getOccurrenceSpecification_ToBefore(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getCovered() : uml.Lifeline {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} value
         */
        public setCovered(value : uml.Lifeline) {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {number} operationID
         * @param {*} arguments
         * @return {*}
         */
        public eInvoke(operationID : number, __arguments : org.eclipse.emf.common.util.EList<any>) : any {
            switch((operationID)) {
            case uml.UmlPackage.OCCURRENCE_SPECIFICATION___GET_COVERED:
                return this.getCovered();
            case uml.UmlPackage.OCCURRENCE_SPECIFICATION___SET_COVERED__LIFELINE:
                this.setCovered(<any>__arguments.get(0));
                return null;
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    OccurrenceSpecificationImpl["__class"] = "uml.impl.OccurrenceSpecificationImpl";
    OccurrenceSpecificationImpl["__interfaces"] = ["ecore4m.EModelElement","uml.OccurrenceSpecification","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","uml.NamedElement","uml.InteractionFragment","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

