/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Relationship</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.RelationshipImpl#getRelatedElement}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.ElementImpl
     * @class
     */
    export abstract class RelationshipImpl extends uml.impl.ElementImpl implements uml.Relationship {
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
            return uml.UmlPackage.eINSTANCE.getRelationship();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getRelatedElement() : org.eclipse.emf.common.util.EList<uml.Element> {
            return <org.eclipse.emf.common.util.EList<uml.Element>><any>this.eGet(uml.UmlPackage.eINSTANCE.getRelationship_RelatedElement(), true);
        }
    }
    RelationshipImpl["__class"] = "uml.impl.RelationshipImpl";
    RelationshipImpl["__interfaces"] = ["uml.Relationship","ecore4m.EModelElement","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

