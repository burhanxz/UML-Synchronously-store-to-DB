/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Expansion Region</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.ExpansionRegionImpl#getMode}</li>
     * <li>{@link uml.impl.ExpansionRegionImpl#getOutputElement}</li>
     * <li>{@link uml.impl.ExpansionRegionImpl#getInputElement}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.StructuredActivityNodeImpl
     * @class
     */
    export class ExpansionRegionImpl extends uml.impl.StructuredActivityNodeImpl implements uml.ExpansionRegion {
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
            return uml.UmlPackage.eINSTANCE.getExpansionRegion();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {uml.ExpansionKind}
         */
        public getMode() : uml.ExpansionKind {
            return <uml.ExpansionKind>this.eGet(uml.UmlPackage.eINSTANCE.getExpansionRegion_Mode(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {uml.ExpansionKind} newMode
         */
        public setMode(newMode : uml.ExpansionKind) {
            this.eSet(uml.UmlPackage.eINSTANCE.getExpansionRegion_Mode(), newMode);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getOutputElement() : org.eclipse.emf.common.util.EList<uml.ExpansionNode> {
            return <org.eclipse.emf.common.util.EList<uml.ExpansionNode>><any>this.eGet(uml.UmlPackage.eINSTANCE.getExpansionRegion_OutputElement(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getInputElement() : org.eclipse.emf.common.util.EList<uml.ExpansionNode> {
            return <org.eclipse.emf.common.util.EList<uml.ExpansionNode>><any>this.eGet(uml.UmlPackage.eINSTANCE.getExpansionRegion_InputElement(), true);
        }
    }
    ExpansionRegionImpl["__class"] = "uml.impl.ExpansionRegionImpl";
    ExpansionRegionImpl["__interfaces"] = ["ecore4m.EModelElement","uml.ActivityGroup","uml.Namespace","org.eclipse.emf.ecore.EObject","uml.NamedElement","uml.ActivityContent","org.eclipse.emf.common.notify.Notifier","uml.ExpansionRegion","uml.ExecutableNode","uml.RedefinableElement","uml.Action","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","uml.ActivityNode","uml.StructuredActivityNode","org.eclipse.emf.ecore.InternalEObject"];


}

