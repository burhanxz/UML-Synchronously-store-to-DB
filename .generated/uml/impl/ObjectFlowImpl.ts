/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Object Flow</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.ObjectFlowImpl#isIsMulticast}</li>
     * <li>{@link uml.impl.ObjectFlowImpl#isIsMultireceive}</li>
     * <li>{@link uml.impl.ObjectFlowImpl#getSelection}</li>
     * <li>{@link uml.impl.ObjectFlowImpl#getTransformation}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.ActivityEdgeImpl
     * @class
     */
    export class ObjectFlowImpl extends uml.impl.ActivityEdgeImpl implements uml.ObjectFlow {
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
            return uml.UmlPackage.eINSTANCE.getObjectFlow();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isIsMulticast() : boolean {
            return <boolean>this.eGet(uml.UmlPackage.eINSTANCE.getObjectFlow_IsMulticast(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {boolean} newIsMulticast
         */
        public setIsMulticast(newIsMulticast : boolean) {
            this.eSet(uml.UmlPackage.eINSTANCE.getObjectFlow_IsMulticast(), newIsMulticast);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isIsMultireceive() : boolean {
            return <boolean>this.eGet(uml.UmlPackage.eINSTANCE.getObjectFlow_IsMultireceive(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {boolean} newIsMultireceive
         */
        public setIsMultireceive(newIsMultireceive : boolean) {
            this.eSet(uml.UmlPackage.eINSTANCE.getObjectFlow_IsMultireceive(), newIsMultireceive);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getSelection() : uml.Behavior {
            return <uml.Behavior><any>this.eGet(uml.UmlPackage.eINSTANCE.getObjectFlow_Selection(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newSelection
         */
        public setSelection(newSelection : uml.Behavior) {
            this.eSet(uml.UmlPackage.eINSTANCE.getObjectFlow_Selection(), newSelection);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getTransformation() : uml.Behavior {
            return <uml.Behavior><any>this.eGet(uml.UmlPackage.eINSTANCE.getObjectFlow_Transformation(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newTransformation
         */
        public setTransformation(newTransformation : uml.Behavior) {
            this.eSet(uml.UmlPackage.eINSTANCE.getObjectFlow_Transformation(), newTransformation);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public input_and_output_parameter(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.OBJECT_FLOW__INPUT_AND_OUTPUT_PARAMETER, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["input_and_output_parameter", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public no_executable_nodes(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.OBJECT_FLOW__NO_EXECUTABLE_NODES, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["no_executable_nodes", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public transformation_behavior(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.OBJECT_FLOW__TRANSFORMATION_BEHAVIOR, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["transformation_behavior", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.OBJECT_FLOW__SELECTION_BEHAVIOR, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["selection_behavior", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public compatible_types(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.OBJECT_FLOW__COMPATIBLE_TYPES, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["compatible_types", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public same_upper_bounds(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.OBJECT_FLOW__SAME_UPPER_BOUNDS, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["same_upper_bounds", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public target(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.OBJECT_FLOW__TARGET, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["target", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public is_multicast_or_is_multireceive(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.OBJECT_FLOW__IS_MULTICAST_OR_IS_MULTIRECEIVE, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["is_multicast_or_is_multireceive", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
                }
                return false;
            }
            return true;
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
            case uml.UmlPackage.OBJECT_FLOW___INPUT_AND_OUTPUT_PARAMETER__DIAGNOSTICCHAIN_MAP:
                return this.input_and_output_parameter(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.OBJECT_FLOW___NO_EXECUTABLE_NODES__DIAGNOSTICCHAIN_MAP:
                return this.no_executable_nodes(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.OBJECT_FLOW___TRANSFORMATION_BEHAVIOR__DIAGNOSTICCHAIN_MAP:
                return this.transformation_behavior(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.OBJECT_FLOW___SELECTION_BEHAVIOR__DIAGNOSTICCHAIN_MAP:
                return this.selection_behavior(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.OBJECT_FLOW___COMPATIBLE_TYPES__DIAGNOSTICCHAIN_MAP:
                return this.compatible_types(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.OBJECT_FLOW___SAME_UPPER_BOUNDS__DIAGNOSTICCHAIN_MAP:
                return this.same_upper_bounds(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.OBJECT_FLOW___TARGET__DIAGNOSTICCHAIN_MAP:
                return this.target(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.OBJECT_FLOW___IS_MULTICAST_OR_IS_MULTIRECEIVE__DIAGNOSTICCHAIN_MAP:
                return this.is_multicast_or_is_multireceive(<any>__arguments.get(0), <any>__arguments.get(1));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    ObjectFlowImpl["__class"] = "uml.impl.ObjectFlowImpl";
    ObjectFlowImpl["__interfaces"] = ["uml.RedefinableElement","ecore4m.EModelElement","uml.ObjectFlow","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","uml.ActivityEdge","org.eclipse.emf.ecore.EObject","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

