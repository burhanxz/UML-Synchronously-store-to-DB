/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Message Occurrence Specification</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.MessageOccurrenceSpecificationImpl#getMessage}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.OccurrenceSpecificationImpl
     * @class
     */
    export class MessageOccurrenceSpecificationImpl extends uml.impl.OccurrenceSpecificationImpl implements uml.MessageOccurrenceSpecification {
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
            return uml.UmlPackage.eINSTANCE.getMessageOccurrenceSpecification();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getMessage() : uml.Message {
            return <uml.Message><any>this.eGet(uml.UmlPackage.eINSTANCE.getMessageEnd_Message(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newMessage
         */
        public setMessage(newMessage : uml.Message) {
            this.eSet(uml.UmlPackage.eINSTANCE.getMessageEnd_Message(), newMessage);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public oppositeEnd() : org.eclipse.emf.common.util.EList<uml.MessageEnd> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isSend() : boolean {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isReceive() : boolean {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public enclosingFragment() : org.eclipse.emf.common.util.EList<uml.InteractionFragment> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {number} derivedFeatureID
         * @param {*} baseClass
         * @return {number}
         */
        public eBaseStructuralFeatureID(derivedFeatureID : number, baseClass : any) : number {
            if(baseClass === "uml.MessageEnd") {
                switch((derivedFeatureID)) {
                case uml.UmlPackage.MESSAGE_OCCURRENCE_SPECIFICATION__MESSAGE:
                    return uml.UmlPackage.MESSAGE_END__MESSAGE;
                default:
                    return -1;
                }
            }
            return super.eBaseStructuralFeatureID(derivedFeatureID, baseClass);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {number} baseFeatureID
         * @param {*} baseClass
         * @return {number}
         */
        public eDerivedStructuralFeatureID(baseFeatureID : number, baseClass : any) : number {
            if(baseClass === "uml.MessageEnd") {
                switch((baseFeatureID)) {
                case uml.UmlPackage.MESSAGE_END__MESSAGE:
                    return uml.UmlPackage.MESSAGE_OCCURRENCE_SPECIFICATION__MESSAGE;
                default:
                    return -1;
                }
            }
            return super.eDerivedStructuralFeatureID(baseFeatureID, baseClass);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {number} baseOperationID
         * @param {*} baseClass
         * @return {number}
         */
        public eDerivedOperationID(baseOperationID : number, baseClass : any) : number {
            if(baseClass === "uml.MessageEnd") {
                switch((baseOperationID)) {
                case uml.UmlPackage.MESSAGE_END___OPPOSITE_END:
                    return uml.UmlPackage.MESSAGE_OCCURRENCE_SPECIFICATION___OPPOSITE_END;
                case uml.UmlPackage.MESSAGE_END___IS_SEND:
                    return uml.UmlPackage.MESSAGE_OCCURRENCE_SPECIFICATION___IS_SEND;
                case uml.UmlPackage.MESSAGE_END___IS_RECEIVE:
                    return uml.UmlPackage.MESSAGE_OCCURRENCE_SPECIFICATION___IS_RECEIVE;
                case uml.UmlPackage.MESSAGE_END___ENCLOSING_FRAGMENT:
                    return uml.UmlPackage.MESSAGE_OCCURRENCE_SPECIFICATION___ENCLOSING_FRAGMENT;
                default:
                    return -1;
                }
            }
            return super.eDerivedOperationID(baseOperationID, baseClass);
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
            case uml.UmlPackage.MESSAGE_OCCURRENCE_SPECIFICATION___OPPOSITE_END:
                return this.oppositeEnd();
            case uml.UmlPackage.MESSAGE_OCCURRENCE_SPECIFICATION___IS_SEND:
                return this.isSend();
            case uml.UmlPackage.MESSAGE_OCCURRENCE_SPECIFICATION___IS_RECEIVE:
                return this.isReceive();
            case uml.UmlPackage.MESSAGE_OCCURRENCE_SPECIFICATION___ENCLOSING_FRAGMENT:
                return this.enclosingFragment();
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    MessageOccurrenceSpecificationImpl["__class"] = "uml.impl.MessageOccurrenceSpecificationImpl";
    MessageOccurrenceSpecificationImpl["__interfaces"] = ["ecore4m.EModelElement","uml.OccurrenceSpecification","uml.MessageEnd","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","uml.NamedElement","uml.MessageOccurrenceSpecification","uml.InteractionFragment","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

