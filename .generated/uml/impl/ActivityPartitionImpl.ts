/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Activity Partition</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.ActivityPartitionImpl#isIsDimension}</li>
     * <li>{@link uml.impl.ActivityPartitionImpl#isIsExternal}</li>
     * <li>{@link uml.impl.ActivityPartitionImpl#getNode}</li>
     * <li>{@link uml.impl.ActivityPartitionImpl#getRepresents}</li>
     * <li>{@link uml.impl.ActivityPartitionImpl#getSubpartition}</li>
     * <li>{@link uml.impl.ActivityPartitionImpl#getSuperPartition}</li>
     * <li>{@link uml.impl.ActivityPartitionImpl#getEdge}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.ActivityGroupImpl
     * @class
     */
    export class ActivityPartitionImpl extends uml.impl.ActivityGroupImpl implements uml.ActivityPartition {
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
            return uml.UmlPackage.eINSTANCE.getActivityPartition();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isIsDimension() : boolean {
            return <boolean>this.eGet(uml.UmlPackage.eINSTANCE.getActivityPartition_IsDimension(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {boolean} newIsDimension
         */
        public setIsDimension(newIsDimension : boolean) {
            this.eSet(uml.UmlPackage.eINSTANCE.getActivityPartition_IsDimension(), newIsDimension);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isIsExternal() : boolean {
            return <boolean>this.eGet(uml.UmlPackage.eINSTANCE.getActivityPartition_IsExternal(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {boolean} newIsExternal
         */
        public setIsExternal(newIsExternal : boolean) {
            this.eSet(uml.UmlPackage.eINSTANCE.getActivityPartition_IsExternal(), newIsExternal);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getNode() : org.eclipse.emf.common.util.EList<uml.ActivityNode> {
            return <org.eclipse.emf.common.util.EList<uml.ActivityNode>><any>this.eGet(uml.UmlPackage.eINSTANCE.getActivityPartition_Node(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getRepresents() : uml.Element {
            return <uml.Element><any>this.eGet(uml.UmlPackage.eINSTANCE.getActivityPartition_Represents(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newRepresents
         */
        public setRepresents(newRepresents : uml.Element) {
            this.eSet(uml.UmlPackage.eINSTANCE.getActivityPartition_Represents(), newRepresents);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getSubpartition() : org.eclipse.emf.common.util.EList<uml.ActivityPartition> {
            return <org.eclipse.emf.common.util.EList<uml.ActivityPartition>><any>this.eGet(uml.UmlPackage.eINSTANCE.getActivityPartition_Subpartition(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getSuperPartition() : uml.ActivityPartition {
            return <uml.ActivityPartition><any>this.eGet(uml.UmlPackage.eINSTANCE.getActivityPartition_SuperPartition(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newSuperPartition
         */
        public setSuperPartition(newSuperPartition : uml.ActivityPartition) {
            this.eSet(uml.UmlPackage.eINSTANCE.getActivityPartition_SuperPartition(), newSuperPartition);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getEdge() : org.eclipse.emf.common.util.EList<uml.ActivityEdge> {
            return <org.eclipse.emf.common.util.EList<uml.ActivityEdge>><any>this.eGet(uml.UmlPackage.eINSTANCE.getActivityPartition_Edge(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public represents_classifier(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.ACTIVITY_PARTITION__REPRESENTS_CLASSIFIER, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["represents_classifier", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public represents_property_and_is_contained(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.ACTIVITY_PARTITION__REPRESENTS_PROPERTY_AND_IS_CONTAINED, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["represents_property_and_is_contained", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public represents_property(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.ACTIVITY_PARTITION__REPRESENTS_PROPERTY, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["represents_property", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public dimension_not_contained(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.ACTIVITY_PARTITION__DIMENSION_NOT_CONTAINED, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["dimension_not_contained", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
            case uml.UmlPackage.ACTIVITY_PARTITION___REPRESENTS_CLASSIFIER__DIAGNOSTICCHAIN_MAP:
                return this.represents_classifier(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.ACTIVITY_PARTITION___REPRESENTS_PROPERTY_AND_IS_CONTAINED__DIAGNOSTICCHAIN_MAP:
                return this.represents_property_and_is_contained(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.ACTIVITY_PARTITION___REPRESENTS_PROPERTY__DIAGNOSTICCHAIN_MAP:
                return this.represents_property(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.ACTIVITY_PARTITION___DIMENSION_NOT_CONTAINED__DIAGNOSTICCHAIN_MAP:
                return this.dimension_not_contained(<any>__arguments.get(0), <any>__arguments.get(1));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    ActivityPartitionImpl["__class"] = "uml.impl.ActivityPartitionImpl";
    ActivityPartitionImpl["__interfaces"] = ["ecore4m.EModelElement","uml.ActivityGroup","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","uml.ActivityPartition","uml.NamedElement","uml.ActivityContent","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

