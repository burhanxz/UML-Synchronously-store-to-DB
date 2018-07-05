/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Sequence Node</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.SequenceNodeImpl#getExecutableNode}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.StructuredActivityNodeImpl
     * @class
     */
    export class SequenceNodeImpl extends uml.impl.StructuredActivityNodeImpl implements uml.SequenceNode {
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
            return uml.UmlPackage.eINSTANCE.getSequenceNode();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getExecutableNode() : org.eclipse.emf.common.util.EList<uml.ExecutableNode> {
            return <org.eclipse.emf.common.util.EList<uml.ExecutableNode>><any>this.eGet(uml.UmlPackage.eINSTANCE.getSequenceNode_ExecutableNode(), true);
        }
    }
    SequenceNodeImpl["__class"] = "uml.impl.SequenceNodeImpl";
    SequenceNodeImpl["__interfaces"] = ["ecore4m.EModelElement","uml.ActivityGroup","uml.Namespace","org.eclipse.emf.ecore.EObject","uml.NamedElement","uml.ActivityContent","org.eclipse.emf.common.notify.Notifier","uml.ExecutableNode","uml.RedefinableElement","uml.Action","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","uml.ActivityNode","uml.StructuredActivityNode","uml.SequenceNode","org.eclipse.emf.ecore.InternalEObject"];


}

