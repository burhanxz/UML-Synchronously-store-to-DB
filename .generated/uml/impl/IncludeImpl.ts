/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Include</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.IncludeImpl#getRelatedElement}</li>
     * <li>{@link uml.impl.IncludeImpl#getSource}</li>
     * <li>{@link uml.impl.IncludeImpl#getTarget}</li>
     * <li>{@link uml.impl.IncludeImpl#getAddition}</li>
     * <li>{@link uml.impl.IncludeImpl#getIncludingCase}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.NamedElementImpl
     * @class
     */
    export class IncludeImpl extends uml.impl.NamedElementImpl implements uml.Include {
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
            return uml.UmlPackage.eINSTANCE.getInclude();
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
        public getAddition() : uml.UseCase {
            return <uml.UseCase><any>this.eGet(uml.UmlPackage.eINSTANCE.getInclude_Addition(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newAddition
         */
        public setAddition(newAddition : uml.UseCase) {
            this.eSet(uml.UmlPackage.eINSTANCE.getInclude_Addition(), newAddition);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getIncludingCase() : uml.UseCase {
            return <uml.UseCase><any>this.eGet(uml.UmlPackage.eINSTANCE.getInclude_IncludingCase(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newIncludingCase
         */
        public setIncludingCase(newIncludingCase : uml.UseCase) {
            this.eSet(uml.UmlPackage.eINSTANCE.getInclude_IncludingCase(), newIncludingCase);
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
                case uml.UmlPackage.INCLUDE__RELATED_ELEMENT:
                    return uml.UmlPackage.RELATIONSHIP__RELATED_ELEMENT;
                default:
                    return -1;
                }
            }
            if(baseClass === "uml.DirectedRelationship") {
                switch((derivedFeatureID)) {
                case uml.UmlPackage.INCLUDE__SOURCE:
                    return uml.UmlPackage.DIRECTED_RELATIONSHIP__SOURCE;
                case uml.UmlPackage.INCLUDE__TARGET:
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
                    return uml.UmlPackage.INCLUDE__RELATED_ELEMENT;
                default:
                    return -1;
                }
            }
            if(baseClass === "uml.DirectedRelationship") {
                switch((baseFeatureID)) {
                case uml.UmlPackage.DIRECTED_RELATIONSHIP__SOURCE:
                    return uml.UmlPackage.INCLUDE__SOURCE;
                case uml.UmlPackage.DIRECTED_RELATIONSHIP__TARGET:
                    return uml.UmlPackage.INCLUDE__TARGET;
                default:
                    return -1;
                }
            }
            return super.eDerivedStructuralFeatureID(baseFeatureID, baseClass);
        }
    }
    IncludeImpl["__class"] = "uml.impl.IncludeImpl";
    IncludeImpl["__interfaces"] = ["uml.Relationship","ecore4m.EModelElement","uml.DirectedRelationship","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject","uml.Include"];


}

