/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Generalization Set</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.GeneralizationSetImpl#isIsCovering}</li>
     * <li>{@link uml.impl.GeneralizationSetImpl#isIsDisjoint}</li>
     * <li>{@link uml.impl.GeneralizationSetImpl#getPowertype}</li>
     * <li>{@link uml.impl.GeneralizationSetImpl#getGeneralization}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.PackageableElementImpl
     * @class
     */
    export class GeneralizationSetImpl extends uml.impl.PackageableElementImpl implements uml.GeneralizationSet {
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
            return uml.UmlPackage.eINSTANCE.getGeneralizationSet();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isIsCovering() : boolean {
            return <boolean>this.eGet(uml.UmlPackage.eINSTANCE.getGeneralizationSet_IsCovering(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {boolean} newIsCovering
         */
        public setIsCovering(newIsCovering : boolean) {
            this.eSet(uml.UmlPackage.eINSTANCE.getGeneralizationSet_IsCovering(), newIsCovering);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {boolean}
         */
        public isIsDisjoint() : boolean {
            return <boolean>this.eGet(uml.UmlPackage.eINSTANCE.getGeneralizationSet_IsDisjoint(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {boolean} newIsDisjoint
         */
        public setIsDisjoint(newIsDisjoint : boolean) {
            this.eSet(uml.UmlPackage.eINSTANCE.getGeneralizationSet_IsDisjoint(), newIsDisjoint);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getPowertype() : uml.Classifier {
            return <uml.Classifier><any>this.eGet(uml.UmlPackage.eINSTANCE.getGeneralizationSet_Powertype(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newPowertype
         */
        public setPowertype(newPowertype : uml.Classifier) {
            this.eSet(uml.UmlPackage.eINSTANCE.getGeneralizationSet_Powertype(), newPowertype);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getGeneralization() : org.eclipse.emf.common.util.EList<uml.Generalization> {
            return <org.eclipse.emf.common.util.EList<uml.Generalization>><any>this.eGet(uml.UmlPackage.eINSTANCE.getGeneralizationSet_Generalization(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public generalization_same_classifier(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.GENERALIZATION_SET__GENERALIZATION_SAME_CLASSIFIER, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["generalization_same_classifier", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
        public maps_to_generalization_set(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.GENERALIZATION_SET__MAPS_TO_GENERALIZATION_SET, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["maps_to_generalization_set", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
            case uml.UmlPackage.GENERALIZATION_SET___GENERALIZATION_SAME_CLASSIFIER__DIAGNOSTICCHAIN_MAP:
                return this.generalization_same_classifier(<any>__arguments.get(0), <any>__arguments.get(1));
            case uml.UmlPackage.GENERALIZATION_SET___MAPS_TO_GENERALIZATION_SET__DIAGNOSTICCHAIN_MAP:
                return this.maps_to_generalization_set(<any>__arguments.get(0), <any>__arguments.get(1));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    GeneralizationSetImpl["__class"] = "uml.impl.GeneralizationSetImpl";
    GeneralizationSetImpl["__interfaces"] = ["ecore4m.EModelElement","uml.ParameterableElement","uml.PackageableElement","uml.GeneralizationSet","org.eclipse.emf.ecore.EModelElement","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject"];


}

