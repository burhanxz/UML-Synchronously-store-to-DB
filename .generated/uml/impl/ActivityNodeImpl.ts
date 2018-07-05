/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Activity Node</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.ActivityNodeImpl#getActivity}</li>
     * <li>{@link uml.impl.ActivityNodeImpl#getInGroup}</li>
     * <li>{@link uml.impl.ActivityNodeImpl#getInInterruptibleRegion}</li>
     * <li>{@link uml.impl.ActivityNodeImpl#getInStructuredNode}</li>
     * <li>{@link uml.impl.ActivityNodeImpl#getIncoming}</li>
     * <li>{@link uml.impl.ActivityNodeImpl#getOutgoing}</li>
     * <li>{@link uml.impl.ActivityNodeImpl#getRedefinedNode}</li>
     * <li>{@link uml.impl.ActivityNodeImpl#getInPartition}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.RedefinableElementImpl
     * @class
     */
    export abstract class ActivityNodeImpl extends uml.impl.RedefinableElementImpl implements uml.ActivityNode {
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
            return uml.UmlPackage.eINSTANCE.getActivityNode();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getActivity() : uml.Activity {
            return <uml.Activity><any>this.eGet(uml.UmlPackage.eINSTANCE.getActivityNode_Activity(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newActivity
         */
        public setActivity(newActivity : uml.Activity) {
            this.eSet(uml.UmlPackage.eINSTANCE.getActivityNode_Activity(), newActivity);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getInGroup() : org.eclipse.emf.common.util.EList<uml.ActivityGroup> {
            return <org.eclipse.emf.common.util.EList<uml.ActivityGroup>><any>this.eGet(uml.UmlPackage.eINSTANCE.getActivityNode_InGroup(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getInInterruptibleRegion() : org.eclipse.emf.common.util.EList<uml.InterruptibleActivityRegion> {
            return <org.eclipse.emf.common.util.EList<uml.InterruptibleActivityRegion>><any>this.eGet(uml.UmlPackage.eINSTANCE.getActivityNode_InInterruptibleRegion(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getInStructuredNode() : uml.StructuredActivityNode {
            return <uml.StructuredActivityNode><any>this.eGet(uml.UmlPackage.eINSTANCE.getActivityNode_InStructuredNode(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newInStructuredNode
         */
        public setInStructuredNode(newInStructuredNode : uml.StructuredActivityNode) {
            this.eSet(uml.UmlPackage.eINSTANCE.getActivityNode_InStructuredNode(), newInStructuredNode);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getIncoming() : org.eclipse.emf.common.util.EList<uml.ActivityEdge> {
            return <org.eclipse.emf.common.util.EList<uml.ActivityEdge>><any>this.eGet(uml.UmlPackage.eINSTANCE.getActivityNode_Incoming(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getOutgoing() : org.eclipse.emf.common.util.EList<uml.ActivityEdge> {
            return <org.eclipse.emf.common.util.EList<uml.ActivityEdge>><any>this.eGet(uml.UmlPackage.eINSTANCE.getActivityNode_Outgoing(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getRedefinedNode() : org.eclipse.emf.common.util.EList<uml.ActivityNode> {
            return <org.eclipse.emf.common.util.EList<uml.ActivityNode>><any>this.eGet(uml.UmlPackage.eINSTANCE.getActivityNode_RedefinedNode(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getInPartition() : org.eclipse.emf.common.util.EList<uml.ActivityPartition> {
            return <org.eclipse.emf.common.util.EList<uml.ActivityPartition>><any>this.eGet(uml.UmlPackage.eINSTANCE.getActivityNode_InPartition(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public containingActivity() : uml.Activity {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
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
            if(baseClass === "uml.ActivityContent") {
                switch((baseOperationID)) {
                case uml.UmlPackage.ACTIVITY_CONTENT___CONTAINING_ACTIVITY:
                    return uml.UmlPackage.ACTIVITY_NODE___CONTAINING_ACTIVITY;
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
            case uml.UmlPackage.ACTIVITY_NODE___CONTAINING_ACTIVITY:
                return this.containingActivity();
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    ActivityNodeImpl["__class"] = "uml.impl.ActivityNodeImpl";
    ActivityNodeImpl["__interfaces"] = ["uml.RedefinableElement","ecore4m.EModelElement","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","uml.ActivityNode","org.eclipse.emf.ecore.EObject","uml.NamedElement","uml.ActivityContent","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

