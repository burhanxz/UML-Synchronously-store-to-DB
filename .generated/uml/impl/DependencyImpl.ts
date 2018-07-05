/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Dependency</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.DependencyImpl#getRelatedElement}</li>
     * <li>{@link uml.impl.DependencyImpl#getSource}</li>
     * <li>{@link uml.impl.DependencyImpl#getTarget}</li>
     * <li>{@link uml.impl.DependencyImpl#getClient}</li>
     * <li>{@link uml.impl.DependencyImpl#getSupplier}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.PackageableElementImpl
     * @class
     */
    export class DependencyImpl extends uml.impl.PackageableElementImpl implements uml.Dependency {
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
            return uml.UmlPackage.eINSTANCE.getDependency();
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

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getSource() : org.eclipse.emf.common.util.EList<uml.Element> {
            return <org.eclipse.emf.common.util.EList<uml.Element>><any>this.eGet(uml.UmlPackage.eINSTANCE.getDirectedRelationship_Source(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getTarget() : org.eclipse.emf.common.util.EList<uml.Element> {
            return <org.eclipse.emf.common.util.EList<uml.Element>><any>this.eGet(uml.UmlPackage.eINSTANCE.getDirectedRelationship_Target(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getClient() : org.eclipse.emf.common.util.EList<uml.NamedElement> {
            return <org.eclipse.emf.common.util.EList<uml.NamedElement>><any>this.eGet(uml.UmlPackage.eINSTANCE.getDependency_Client(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getSupplier() : org.eclipse.emf.common.util.EList<uml.NamedElement> {
            return <org.eclipse.emf.common.util.EList<uml.NamedElement>><any>this.eGet(uml.UmlPackage.eINSTANCE.getDependency_Supplier(), true);
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
            if(baseClass === "uml.Relationship") {
                switch((derivedFeatureID)) {
                case uml.UmlPackage.DEPENDENCY__RELATED_ELEMENT:
                    return uml.UmlPackage.RELATIONSHIP__RELATED_ELEMENT;
                default:
                    return -1;
                }
            }
            if(baseClass === "uml.DirectedRelationship") {
                switch((derivedFeatureID)) {
                case uml.UmlPackage.DEPENDENCY__SOURCE:
                    return uml.UmlPackage.DIRECTED_RELATIONSHIP__SOURCE;
                case uml.UmlPackage.DEPENDENCY__TARGET:
                    return uml.UmlPackage.DIRECTED_RELATIONSHIP__TARGET;
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
            if(baseClass === "uml.Relationship") {
                switch((baseFeatureID)) {
                case uml.UmlPackage.RELATIONSHIP__RELATED_ELEMENT:
                    return uml.UmlPackage.DEPENDENCY__RELATED_ELEMENT;
                default:
                    return -1;
                }
            }
            if(baseClass === "uml.DirectedRelationship") {
                switch((baseFeatureID)) {
                case uml.UmlPackage.DIRECTED_RELATIONSHIP__SOURCE:
                    return uml.UmlPackage.DEPENDENCY__SOURCE;
                case uml.UmlPackage.DIRECTED_RELATIONSHIP__TARGET:
                    return uml.UmlPackage.DEPENDENCY__TARGET;
                default:
                    return -1;
                }
            }
            return super.eDerivedStructuralFeatureID(baseFeatureID, baseClass);
        }
    }
    DependencyImpl["__class"] = "uml.impl.DependencyImpl";
    DependencyImpl["__interfaces"] = ["ecore4m.EModelElement","org.eclipse.emf.ecore.EObject","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","uml.Relationship","uml.ParameterableElement","uml.DirectedRelationship","uml.Dependency","uml.PackageableElement","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.InternalEObject"];


}

