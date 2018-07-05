/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * <!-- begin-user-doc -->
     * An implementation of the model object '<em><b>Duration</b></em>'.
     * <!-- end-user-doc -->
     * <p>
     * The following features are implemented:
     * </p>
     * <ul>
     * <li>{@link uml.impl.DurationImpl#getExpr}</li>
     * <li>{@link uml.impl.DurationImpl#getObservation}</li>
     * </ul>
     * 
     * @generated
     * @extends uml.impl.ValueSpecificationImpl
     * @class
     */
    export class DurationImpl extends uml.impl.ValueSpecificationImpl implements uml.Duration {
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
            return uml.UmlPackage.eINSTANCE.getDuration();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getExpr() : uml.ValueSpecification {
            return <uml.ValueSpecification><any>this.eGet(uml.UmlPackage.eINSTANCE.getDuration_Expr(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} newExpr
         */
        public setExpr(newExpr : uml.ValueSpecification) {
            this.eSet(uml.UmlPackage.eINSTANCE.getDuration_Expr(), newExpr);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getObservation() : org.eclipse.emf.common.util.EList<uml.Observation> {
            return <org.eclipse.emf.common.util.EList<uml.Observation>><any>this.eGet(uml.UmlPackage.eINSTANCE.getDuration_Observation(), true);
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} diagnostics
         * @param {*} context
         * @return {boolean}
         */
        public no_expr_requires_observation(diagnostics : org.eclipse.emf.common.util.DiagnosticChain, context : any) : boolean {
            if(false) {
                if(diagnostics != null) {
                    diagnostics.add(new org.eclipse.emf.common.util.BasicDiagnostic(org.eclipse.emf.common.util.Diagnostic.ERROR, uml.util.UmlValidator.DIAGNOSTIC_SOURCE, uml.util.UmlValidator.DURATION__NO_EXPR_REQUIRES_OBSERVATION, org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.getString("_UI_GenericInvariant_diagnostic", ["no_expr_requires_observation", org.eclipse.emf.ecore.util.EObjectValidator.getObjectLabel(this, context)]), [this]));
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
            case uml.UmlPackage.DURATION___NO_EXPR_REQUIRES_OBSERVATION__DIAGNOSTICCHAIN_MAP:
                return this.no_expr_requires_observation(<any>__arguments.get(0), <any>__arguments.get(1));
            }
            return super.eInvoke(operationID, __arguments);
        }
    }
    DurationImpl["__class"] = "uml.impl.DurationImpl";
    DurationImpl["__interfaces"] = ["ecore4m.EModelElement","uml.TypedElement","org.eclipse.emf.ecore.EObject","uml.NamedElement","org.eclipse.emf.common.notify.Notifier","uml.ValueSpecification","uml.ParameterableElement","uml.PackageableElement","org.eclipse.emf.ecore.EModelElement","uml.Duration","uml.Element","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.InternalEObject"];


}
