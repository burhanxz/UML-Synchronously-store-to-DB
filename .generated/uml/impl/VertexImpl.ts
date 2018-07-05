/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Vertex</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.VertexImpl#getContainer}</li>
     * <li>{@link uml.impl.VertexImpl#getIncoming}</li>
     * <li>{@link uml.impl.VertexImpl#getOutgoing}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.NamedElementImpl
     * @class
     */
    export abstract class VertexImpl extends uml.impl.NamedElementImpl implements uml.Vertex {
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
            return uml.UmlPackage.eINSTANCE.getVertex();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getContainer() : uml.Region {
            return <uml.Region><any>this.eGet(uml.UmlPackage.eINSTANCE.getVertex_Container(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newContainer
         */
        public setContainer(newContainer : uml.Region) {
            this.eSet(uml.UmlPackage.eINSTANCE.getVertex_Container(), newContainer);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getIncoming() : org.eclipse.emf.common.util.EList<uml.Transition> {
            return <org.eclipse.emf.common.util.EList<uml.Transition>><any>this.eGet(uml.UmlPackage.eINSTANCE.getVertex_Incoming(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getOutgoing() : org.eclipse.emf.common.util.EList<uml.Transition> {
            return <org.eclipse.emf.common.util.EList<uml.Transition>><any>this.eGet(uml.UmlPackage.eINSTANCE.getVertex_Outgoing(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public containingStateMachine() : uml.StateMachine {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getIncomings() : org.eclipse.emf.common.util.EList<uml.Transition> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getOutgoings() : org.eclipse.emf.common.util.EList<uml.Transition> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} s
         * @return {boolean}
         */
        public isContainedInState(s : uml.State) : boolean {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} r
         * @return {boolean}
         */
        public isContainedInRegion(r : uml.Region) : boolean {
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
            case uml.UmlPackage.VERTEX___CONTAINING_STATE_MACHINE:
                return this.containingStateMachine();
            case uml.UmlPackage.VERTEX___GET_INCOMINGS:
                return this.getIncomings();
            case uml.UmlPackage.VERTEX___GET_OUTGOINGS:
                return this.getOutgoings();
            case uml.UmlPackage.VERTEX___IS_CONTAINED_IN_STATE__STATE:
                return this.isContainedInState(<any>__arguments.get(0));
            case uml.UmlPackage.VERTEX___IS_CONTAINED_IN_REGION__REGION:
                return this.isContainedInRegion(<any>__arguments.get(0));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    VertexImpl["__class"] = "uml.impl.VertexImpl";
    VertexImpl["__interfaces"] = ["ecore4m.EModelElement","org.eclipse.emf.ecore.EModelElement","uml.Vertex","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

