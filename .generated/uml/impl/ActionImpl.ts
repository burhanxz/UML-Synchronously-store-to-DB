/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Action</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.ActionImpl#getContext}</li>
     * <li>{@link uml.impl.ActionImpl#getInput}</li>
     * <li>{@link uml.impl.ActionImpl#isIsLocallyReentrant}</li>
     * <li>{@link uml.impl.ActionImpl#getLocalPostcondition}</li>
     * <li>{@link uml.impl.ActionImpl#getLocalPrecondition}</li>
     * <li>{@link uml.impl.ActionImpl#getOutput}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.ExecutableNodeImpl
     * @class
     */
    export abstract class ActionImpl extends uml.impl.ExecutableNodeImpl implements uml.Action {
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
            return uml.UmlPackage.eINSTANCE.getAction();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getContext() : uml.Classifier {
            return <uml.Classifier><any>this.eGet(uml.UmlPackage.eINSTANCE.getAction_Context(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getInput() : org.eclipse.emf.common.util.EList<uml.InputPin> {
            return <org.eclipse.emf.common.util.EList<uml.InputPin>><any>this.eGet(uml.UmlPackage.eINSTANCE.getAction_Input(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isIsLocallyReentrant() : boolean {
            return <boolean>this.eGet(uml.UmlPackage.eINSTANCE.getAction_IsLocallyReentrant(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {boolean} newIsLocallyReentrant
         */
        public setIsLocallyReentrant(newIsLocallyReentrant : boolean) {
            this.eSet(uml.UmlPackage.eINSTANCE.getAction_IsLocallyReentrant(), newIsLocallyReentrant);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getLocalPostcondition() : org.eclipse.emf.common.util.EList<uml.Constraint> {
            return <org.eclipse.emf.common.util.EList<uml.Constraint>><any>this.eGet(uml.UmlPackage.eINSTANCE.getAction_LocalPostcondition(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getLocalPrecondition() : org.eclipse.emf.common.util.EList<uml.Constraint> {
            return <org.eclipse.emf.common.util.EList<uml.Constraint>><any>this.eGet(uml.UmlPackage.eINSTANCE.getAction_LocalPrecondition(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getOutput() : org.eclipse.emf.common.util.EList<uml.OutputPin> {
            return <org.eclipse.emf.common.util.EList<uml.OutputPin>><any>this.eGet(uml.UmlPackage.eINSTANCE.getAction_Output(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public allActions() : org.eclipse.emf.common.util.EList<uml.Action> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public allOwnedNodes() : org.eclipse.emf.common.util.EList<uml.ActivityNode> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public containingBehavior() : uml.Behavior {
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
            case uml.UmlPackage.ACTION___ALL_ACTIONS:
                return this.allActions();
            case uml.UmlPackage.ACTION___ALL_OWNED_NODES:
                return this.allOwnedNodes();
            case uml.UmlPackage.ACTION___CONTAINING_BEHAVIOR:
                return this.containingBehavior();
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    ActionImpl["__class"] = "uml.impl.ActionImpl";
    ActionImpl["__interfaces"] = ["ecore4m.EModelElement","org.eclipse.emf.ecore.EObject","uml.NamedElement","uml.ActivityContent","org.eclipse.emf.common.notify.Notifier","uml.ExecutableNode","uml.RedefinableElement","uml.Action","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","uml.ActivityNode","org.eclipse.emf.ecore.InternalEObject"];


}

