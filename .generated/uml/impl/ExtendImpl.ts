/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Extend</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.ExtendImpl#getRelatedElement}</li>
     * <li>{@link uml.impl.ExtendImpl#getSource}</li>
     * <li>{@link uml.impl.ExtendImpl#getTarget}</li>
     * <li>{@link uml.impl.ExtendImpl#getCondition}</li>
     * <li>{@link uml.impl.ExtendImpl#getExtendedCase}</li>
     * <li>{@link uml.impl.ExtendImpl#getExtensionLocation}</li>
     * <li>{@link uml.impl.ExtendImpl#getExtension}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.NamedElementImpl
     * @class
     */
    export class ExtendImpl extends uml.impl.NamedElementImpl implements uml.Extend {
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
            return uml.UmlPackage.eINSTANCE.getExtend();
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
        public getCondition() : uml.Constraint {
            return <uml.Constraint><any>this.eGet(uml.UmlPackage.eINSTANCE.getExtend_Condition(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newCondition
         */
        public setCondition(newCondition : uml.Constraint) {
            this.eSet(uml.UmlPackage.eINSTANCE.getExtend_Condition(), newCondition);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getExtendedCase() : uml.UseCase {
            return <uml.UseCase><any>this.eGet(uml.UmlPackage.eINSTANCE.getExtend_ExtendedCase(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newExtendedCase
         */
        public setExtendedCase(newExtendedCase : uml.UseCase) {
            this.eSet(uml.UmlPackage.eINSTANCE.getExtend_ExtendedCase(), newExtendedCase);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getExtensionLocation() : org.eclipse.emf.common.util.EList<uml.ExtensionPoint> {
            return <org.eclipse.emf.common.util.EList<uml.ExtensionPoint>><any>this.eGet(uml.UmlPackage.eINSTANCE.getExtend_ExtensionLocation(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getExtension() : uml.UseCase {
            return <uml.UseCase><any>this.eGet(uml.UmlPackage.eINSTANCE.getExtend_Extension(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newExtension
         */
        public setExtension(newExtension : uml.UseCase) {
            this.eSet(uml.UmlPackage.eINSTANCE.getExtend_Extension(), newExtension);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public extension_points(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.EXTEND__EXTENSION_POINTS, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["extension_points", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
                }
                return false;
            }
            return true;
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
                case uml.UmlPackage.EXTEND__RELATED_ELEMENT:
                    return uml.UmlPackage.RELATIONSHIP__RELATED_ELEMENT;
                default:
                    return -1;
                }
            }
            if(baseClass === "uml.DirectedRelationship") {
                switch((derivedFeatureID)) {
                case uml.UmlPackage.EXTEND__SOURCE:
                    return uml.UmlPackage.DIRECTED_RELATIONSHIP__SOURCE;
                case uml.UmlPackage.EXTEND__TARGET:
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
                    return uml.UmlPackage.EXTEND__RELATED_ELEMENT;
                default:
                    return -1;
                }
            }
            if(baseClass === "uml.DirectedRelationship") {
                switch((baseFeatureID)) {
                case uml.UmlPackage.DIRECTED_RELATIONSHIP__SOURCE:
                    return uml.UmlPackage.EXTEND__SOURCE;
                case uml.UmlPackage.DIRECTED_RELATIONSHIP__TARGET:
                    return uml.UmlPackage.EXTEND__TARGET;
                default:
                    return -1;
                }
            }
            return super.eDerivedStructuralFeatureID(baseFeatureID, baseClass);
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
            case uml.UmlPackage.EXTEND___EXTENSION_POINTS__DIAGNOSTICCHAIN_MAP:
                return this.extension_points(<any>__arguments.get(0), <any>__arguments.get(1));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    ExtendImpl["__class"] = "uml.impl.ExtendImpl";
    ExtendImpl["__interfaces"] = ["uml.Relationship","ecore4m.EModelElement","uml.DirectedRelationship","uml.Extend","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

