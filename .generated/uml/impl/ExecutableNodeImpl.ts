/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Executable Node</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.ExecutableNodeImpl#getHandler}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.ActivityNodeImpl
     * @class
     */
    export abstract class ExecutableNodeImpl extends uml.impl.ActivityNodeImpl implements uml.ExecutableNode {
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
            return uml.UmlPackage.eINSTANCE.getExecutableNode();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getHandler() : org.eclipse.emf.common.util.EList<uml.ExceptionHandler> {
            return <org.eclipse.emf.common.util.EList<uml.ExceptionHandler>><any>this.eGet(uml.UmlPackage.eINSTANCE.getExecutableNode_Handler(), true);
        }
    }
    ExecutableNodeImpl["__class"] = "uml.impl.ExecutableNodeImpl";
    ExecutableNodeImpl["__interfaces"] = ["uml.ExecutableNode","uml.RedefinableElement","ecore4m.EModelElement","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","uml.ActivityNode","org.eclipse.emf.ecore.EObject","uml.NamedElement","uml.ActivityContent","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

