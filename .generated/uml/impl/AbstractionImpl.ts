/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Abstraction</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.AbstractionImpl#getMapping}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.DependencyImpl
     * @class
     */
    export class AbstractionImpl extends uml.impl.DependencyImpl implements uml.Abstraction {
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
            return uml.UmlPackage.eINSTANCE.getAbstraction();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getMapping() : uml.OpaqueExpression {
            return <uml.OpaqueExpression><any>this.eGet(uml.UmlPackage.eINSTANCE.getAbstraction_Mapping(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newMapping
         */
        public setMapping(newMapping : uml.OpaqueExpression) {
            this.eSet(uml.UmlPackage.eINSTANCE.getAbstraction_Mapping(), newMapping);
        }
    }
    AbstractionImpl["__class"] = "uml.impl.AbstractionImpl";
    AbstractionImpl["__interfaces"] = ["ecore4m.EModelElement","org.eclipse.emf.ecore.EObject","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","uml.Relationship","uml.ParameterableElement","uml.DirectedRelationship","uml.Dependency","uml.PackageableElement","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.InternalEObject","uml.Abstraction"];


}

