/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Object Node</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.ObjectNodeImpl#getType}</li>
     * <li>{@link uml.impl.ObjectNodeImpl#getInState}</li>
     * <li>{@link uml.impl.ObjectNodeImpl#isIsControlType}</li>
     * <li>{@link uml.impl.ObjectNodeImpl#getOrdering}</li>
     * <li>{@link uml.impl.ObjectNodeImpl#getSelection}</li>
     * <li>{@link uml.impl.ObjectNodeImpl#getUpperBound}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.ActivityNodeImpl
     * @class
     */
    export abstract class ObjectNodeImpl extends uml.impl.ActivityNodeImpl implements uml.ObjectNode {
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
            return uml.UmlPackage.eINSTANCE.getObjectNode();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getType() : uml.Type {
            return <uml.Type><any>this.eGet(uml.UmlPackage.eINSTANCE.getTypedElement_Type(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newType
         */
        public setType(newType : uml.Type) {
            this.eSet(uml.UmlPackage.eINSTANCE.getTypedElement_Type(), newType);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getInState() : org.eclipse.emf.common.util.EList<uml.State> {
            return <org.eclipse.emf.common.util.EList<uml.State>><any>this.eGet(uml.UmlPackage.eINSTANCE.getObjectNode_InState(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isIsControlType() : boolean {
            return <boolean>this.eGet(uml.UmlPackage.eINSTANCE.getObjectNode_IsControlType(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {boolean} newIsControlType
         */
        public setIsControlType(newIsControlType : boolean) {
            this.eSet(uml.UmlPackage.eINSTANCE.getObjectNode_IsControlType(), newIsControlType);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {uml.ObjectNodeOrderingKind}
         */
        public getOrdering() : uml.ObjectNodeOrderingKind {
            return <uml.ObjectNodeOrderingKind>this.eGet(uml.UmlPackage.eINSTANCE.getObjectNode_Ordering(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {uml.ObjectNodeOrderingKind} newOrdering
         */
        public setOrdering(newOrdering : uml.ObjectNodeOrderingKind) {
            this.eSet(uml.UmlPackage.eINSTANCE.getObjectNode_Ordering(), newOrdering);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getSelection() : uml.Behavior {
            return <uml.Behavior><any>this.eGet(uml.UmlPackage.eINSTANCE.getObjectNode_Selection(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newSelection
         */
        public setSelection(newSelection : uml.Behavior) {
            this.eSet(uml.UmlPackage.eINSTANCE.getObjectNode_Selection(), newSelection);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getUpperBound() : uml.ValueSpecification {
            return <uml.ValueSpecification><any>this.eGet(uml.UmlPackage.eINSTANCE.getObjectNode_UpperBound(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newUpperBound
         */
        public setUpperBound(newUpperBound : uml.ValueSpecification) {
            this.eSet(uml.UmlPackage.eINSTANCE.getObjectNode_UpperBound(), newUpperBound);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public input_output_parameter(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.OBJECT_NODE__INPUT_OUTPUT_PARAMETER, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["input_output_parameter", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
                }
                return false;
            }
            return true;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public selection_behavior(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.OBJECT_NODE__SELECTION_BEHAVIOR, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["selection_behavior", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
                }
                return false;
            }
            return true;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public object_flow_edges(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.OBJECT_NODE__OBJECT_FLOW_EDGES, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["object_flow_edges", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
            if(baseClass === "uml.TypedElement") {
                switch((derivedFeatureID)) {
                case uml.UmlPackage.OBJECT_NODE__TYPE:
                    return uml.UmlPackage.TYPED_ELEMENT__TYPE;
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
            if(baseClass === "uml.TypedElement") {
                switch((baseFeatureID)) {
                case uml.UmlPackage.TYPED_ELEMENT__TYPE:
                    return uml.UmlPackage.OBJECT_NODE__TYPE;
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
            case uml.UmlPackage.OBJECT_NODE___INPUT_OUTPUT_PARAMETER__DIAGNOSTICCHAIN_MAP:
                return this.input_output_parameter(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.OBJECT_NODE___SELECTION_BEHAVIOR__DIAGNOSTICCHAIN_MAP:
                return this.selection_behavior(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.OBJECT_NODE___OBJECT_FLOW_EDGES__DIAGNOSTICCHAIN_MAP:
                return this.object_flow_edges(<any>__arguments.get(0), <any>__arguments.get(1));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    ObjectNodeImpl["__class"] = "uml.impl.ObjectNodeImpl";
    ObjectNodeImpl["__interfaces"] = ["ecore4m.EModelElement","uml.TypedElement","org.eclipse.emf.ecore.EObject","uml.NamedElement","uml.ActivityContent","uml.ObjectNode","org.eclipse.emf.common.notify.Notifier","uml.RedefinableElement","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","uml.ActivityNode","org.eclipse.emf.ecore.InternalEObject"];


}

